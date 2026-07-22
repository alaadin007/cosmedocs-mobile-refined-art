#!/usr/bin/env tsx
/**
 * One-shot maintenance script.
 *
 * Rewrites public/_redirects so that:
 *   - Any 3xx rule whose target is itself the source of another 3xx rule
 *     is collapsed to the ultimate destination (single hop).
 *   - Any 3xx rule whose source equals its target (self-redirect) is dropped.
 *
 * 2xx rewrites are left untouched — they don't chain from a client's POV.
 * Splat/dynamic rules are left untouched.
 * Comments, blank lines and column alignment are preserved.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const REDIRECTS = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', '_redirects');
const DRY_RUN = process.argv.includes('--dry-run');

interface Parsed { from: string; to: string; status: number; force: boolean; }

function parseLine(line: string): Parsed | null {
  const parts = line.trim().split(/\s+/);
  if (parts.length < 2) return null;
  const [from, to, statusTok] = parts;
  const force = (statusTok ?? '').endsWith('!');
  const status = parseInt((statusTok ?? '301').replace('!', ''), 10) || 301;
  return { from, to, status, force };
}

const text = readFileSync(REDIRECTS, 'utf8');
const lines = text.split('\n');

// Build lookup of 3xx literal sources -> target (final hop resolution below).
const redirectMap = new Map<string, string>();
for (const raw of lines) {
  const line = raw.trim();
  if (!line || line.startsWith('#')) continue;
  const p = parseLine(line);
  if (!p) continue;
  if (p.from.includes('*') || p.from.includes(':')) continue;
  if (p.status < 300 || p.status >= 400) continue;
  redirectMap.set(p.from, p.to);
}

function resolveFinal(target: string, origin: string): string {
  const seen = new Set<string>([origin]);
  let cur = target;
  for (let i = 0; i < 10; i++) {
    if (!cur.startsWith('/')) return cur;              // external URL
    if (!redirectMap.has(cur)) return cur;             // terminal
    if (seen.has(cur)) return cur;                     // loop guard — leave as-is
    seen.add(cur);
    const next = redirectMap.get(cur)!;
    if (next === cur) return cur;                      // self-redirect target — leave
    cur = next;
  }
  return cur;
}

let rewrote = 0;
let dropped = 0;
const out: string[] = [];

for (const raw of lines) {
  const trimmed = raw.trim();
  if (!trimmed || trimmed.startsWith('#')) { out.push(raw); continue; }
  const p = parseLine(trimmed);
  if (!p || p.from.includes('*') || p.from.includes(':') || p.status < 300 || p.status >= 400) {
    out.push(raw); continue;
  }
  // Drop self-redirects
  if (p.from === p.to) { dropped++; console.log(`drop self:  ${trimmed}`); continue; }
  const finalTo = resolveFinal(p.to, p.from);
  if (finalTo === p.to) { out.push(raw); continue; }
  if (finalTo === p.from) { dropped++; console.log(`drop loop:  ${trimmed}`); continue; }
  rewrote++;
  const forceTok = p.force ? '!' : '';
  const newLine = `${p.from.padEnd(80)} ${finalTo.padEnd(80)} ${p.status}${forceTok}`;
  console.log(`rewrite:    ${p.from}  ${p.to} -> ${finalTo}`);
  out.push(newLine);
}

console.log(`\n${DRY_RUN ? 'DRY RUN — ' : ''}rewrote ${rewrote} chained rules, dropped ${dropped} self/loop rules`);
if (!DRY_RUN) writeFileSync(REDIRECTS, out.join('\n'));
