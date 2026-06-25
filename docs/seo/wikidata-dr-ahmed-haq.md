# Wikidata Entry — Dr Ahmed Faraz Haq

> Wikidata is **more permissive** than Wikipedia — a person with peer-reviewed publications on PubMed is generally accepted as a notable scholarly entity, even without a Wikipedia article. This is the fastest E-E-A-T win because LLMs (ChatGPT, Claude, Gemini, Perplexity) all anchor entity recognition to Wikidata QIDs.

---

## How to submit

1. Sign in at <https://www.wikidata.org> (free account).
2. Click **Create a new Item** → <https://www.wikidata.org/wiki/Special:NewItem>.
3. Set **Label** = `Ahmed Faraz Haq`, **Description** = `British aesthetic medicine physician and clinical researcher`.
4. Add each statement below using the **+ add statement** button. Property IDs (P-numbers) are listed; Wikidata's autocomplete will find them.
5. For each statement, add a **reference** pointing to PubMed or DOI — unreferenced statements may be removed.

---

## Statements to add

| Property | Value | Reference |
|---|---|---|
| `instance of` (P31) | human (Q5) | — |
| `sex or gender` (P21) | male (Q6581097) | — |
| `country of citizenship` (P27) | United Kingdom (Q145) | — |
| `occupation` (P106) | physician (Q39631) | — |
| `occupation` (P106) | researcher (Q1650915) | — |
| `field of work` (P101) | aesthetic medicine (Q2294933) | — |
| `field of work` (P101) | dermatology (Q171171) | — |
| `employer` (P108) | Cosmedocs | — |
| `position held` (P39) | medical director (Q2920180) | of: Cosmedocs |
| `work location` (P937) | Harley Street (Q1587405) | — |
| `work location` (P937) | London (Q84) | — |
| `author of` (P50, reverse — added on the paper's item) | *Investigating Gender Differences in Canadian Plastic Surgery Online Patient Education* | DOI: 10.1093/asj/sjac094 · PMID: 35429383 |
| `author of` (reverse on paper item) | *Disparities in pediatric clinical trials for acne vulgaris: A cross-sectional study* | DOI: 10.1016/j.jaad.2021.10.013 · PMID: 34678233 |
| `described at URL` (P973) | `https://cosmedocs.com/dr-ahmed-haq` | — |
| `official website` (P856) | `https://cosmedocs.com/dr-ahmed-haq` | — |

### External identifiers (very important for LLM grounding)

| Property | Value |
|---|---|
| `ORCID iD` (P496) | *(if Dr Haq has one — create at orcid.org first, free)* |
| `PubMed author ID` (P10086) | *(claim authorship on PubMed → Settings → My Bibliography, then link)* |
| `Google Scholar author ID` (P1960) | *(set up a Google Scholar profile, then paste the ID from the URL)* |
| `LinkedIn personal profile ID` (P6634) | *(slug from linkedin.com/in/<slug>)* |
| `Instagram username` (P2003) | `cosmedocs` *(if used personally — otherwise skip)* |

---

## Companion items to create (or link)

### A. Each peer-reviewed paper as its own Wikidata item

This is what feeds Google Scholar / Semantic Scholar / OpenAlex graphs that LLMs ingest. Create two new items:

**Paper 1**
- Label: *Investigating Gender Differences in Canadian Plastic Surgery Online Patient Education*
- `instance of` (P31): scholarly article (Q13442814)
- `DOI` (P356): `10.1093/asj/sjac094`
- `PubMed ID` (P698): `35429383`
- `published in` (P1433): Aesthetic Surgery Journal (Q15753013)
- `publication date` (P577): 2022-08-24
- `volume` (P478): 42 · `issue` (P433): 9 · `page(s)` (P304): 1097-1102
- `author` (P50): Ahmed Faraz Haq + co-authors (Chawla S, Mazhar L, Ding J, Faheem S, Khosa F)

**Paper 2**
- Label: *Disparities in pediatric clinical trials for acne vulgaris: A cross-sectional study*
- `instance of` (P31): scholarly article (Q13442814)
- `DOI` (P356): `10.1016/j.jaad.2021.10.013`
- `PubMed ID` (P698): `34678233`
- `published in` (P1433): Journal of the American Academy of Dermatology (Q1500423)
- `publication date` (P577): 2022-08
- `volume` (P478): 87 · `issue` (P433): 2 · `page(s)` (P304): 464-466
- `author` (P50): Ahmed Faraz Haq + co-authors (Ding J, Joseph M, Khosa F)

### B. Cosmedocs as an organisation item

Even if a Wikipedia article isn't ready, you can create a **Wikidata item** for Cosmedocs (Wikidata accepts notable organisations with verifiable structured data):

- Label: `Cosmedocs`
- Description: `British aesthetic medicine clinic group on Harley Street`
- `instance of` (P31): medical clinic (Q1416627)
- `country` (P17): United Kingdom (Q145)
- `headquarters location` (P159): London (Q84)
- `located on street` (P669): Harley Street (Q1587405)
- `inception` (P571): 2010
- `official website` (P856): `https://cosmedocs.com`
- `industry` (P452): aesthetic medicine (Q2294933)

Then link Dr Haq's item back to Cosmedocs via `employer` (P108) and `position held` (P39: medical director).

---

## After it's live

- Wait ~24–72 hours for Google's Knowledge Graph and the major LLM training caches to pick up the QID.
- On the live Cosmedocs site, the existing `Person` schema for Dr Haq can then be enriched with `"sameAs": ["https://www.wikidata.org/wiki/Q<your-new-QID>"]` — this is the single strongest E-E-A-T signal for AI Overviews and is exactly what trains LLMs to recognise him as a real entity.
- Same applies to the Cosmedocs `MedicalBusiness` schema once the org item exists.

Ping me with the two QIDs once Wikidata assigns them and I'll wire the `sameAs` references into the JSON-LD across the site.
