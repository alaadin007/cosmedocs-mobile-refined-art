import { Link } from "react-router-dom";
import { Radio, ArrowRight } from "lucide-react";
import { newsPosts } from "@/data/newsPosts";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });

/**
 * Compact "Industry Desk" card for the homepage.
 * Surfaces the latest 2 news notes and a link to /news/.
 * Freshness signal for crawlers + internal link equity for new posts.
 */
export default function NewsWidget() {
  const latest = newsPosts.slice(0, 2);

  return (
    <section className="px-5 sm:px-8 max-w-7xl mx-auto py-14 border-t border-white/5">
      <div className="rounded-2xl border border-[#C9A050]/25 bg-gradient-to-br from-[#1a140a] via-black to-[#1a140a] p-6 sm:p-8">
        <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
          <div className="flex items-center gap-2">
            <Radio className="w-4 h-4 text-[#C9A050]" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#C9A050]">
              Industry Desk · Updated weekly
            </span>
          </div>
          <Link
            to="/news/"
            className="text-xs text-white/60 hover:text-[#C9A050] inline-flex items-center gap-1.5"
          >
            All notes <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl font-extralight text-white leading-tight mb-6">
          What's actually happening in aesthetic medicine <span className="text-[#C9A050]">this week</span>.
        </h2>

        <ul className="divide-y divide-white/[0.08] border-t border-white/[0.08]">
          {latest.map((post) => (
            <li key={post.slug}>
              <Link to={`/news/${post.slug}/`} className="group block py-4">
                <div className="flex items-center gap-2 mb-1.5 text-[10px] tracking-[0.25em] uppercase">
                  <span className="text-[#C9A050]">{post.category}</span>
                  <span className="text-white/30">·</span>
                  <time className="text-white/40" dateTime={post.date}>{formatDate(post.date)}</time>
                </div>
                <p className="font-serif text-base sm:text-lg text-white font-light leading-snug group-hover:text-[#C9A050] transition-colors">
                  {post.title}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
