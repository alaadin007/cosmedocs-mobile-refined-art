import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { MapPin, MessageCircle, ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import MedicalArticleSchema from "@/components/seo/MedicalArticleSchema";
import FAQSchema from "@/components/seo/FAQSchema";
import DrAhmedQuote from "@/components/DrAhmedQuote";

interface QA {
  question: string;
  answer: string;
  topic: string;
}

const QAS: QA[] = [
  {
    topic: "First treatment",
    question: "I've never had any aesthetic treatment. Where should I start?",
    answer: "Start with a consultation, not a treatment. The most expensive mistake in aesthetic medicine is being told what you need before being asked what you actually want. A good consultation will spend the first twenty minutes listening, not selling. If a clinic offers a treatment in the first ten minutes, you're in the wrong clinic.",
  },
  {
    topic: "First treatment",
    question: "I'm 28 and worried about looking 'done'. Is it too early for anything?",
    answer: "Probably yes for filler. Almost certainly no for bio-remodelling (Profhilo, Polynucleotides) or for a tiny preventative dose of botulinum toxin in expressive lines that have started to set. The honest answer in your 20s is usually 'medical-grade skincare and SPF, see me again in three years'. That answer doesn't make money, which is why you rarely hear it.",
  },
  {
    topic: "Botox",
    question: "How do I know I've had a good Botox result?",
    answer: "Nobody comments on it. Your forehead still moves a little. Your brows are not frozen. You look like yourself on a Sunday morning, every day of the week. If colleagues ask whether you've been on holiday, that is the result we are aiming for. If they ask whether you've had work done, we have failed.",
  },
  {
    topic: "Botox",
    question: "Will I get addicted to Botox?",
    answer: "Not pharmacologically — it has no addictive properties. Psychologically, yes, the same way you can become accustomed to a clean kitchen or a tidy desk. The risk is not addiction, it is overuse. Periodic breaks are fine. Your muscles do not weaken permanently; they recover fully within months.",
  },
  {
    topic: "Filler",
    question: "How do I avoid the 'puffy face' look?",
    answer: "Refuse syringes you didn't ask for. Insist on a treatment plan written down before the cannula touches you. The puffy face is the cumulative result of small additions, year on year, that nobody is keeping count of. Two millilitres a year sounds modest. Twenty millilitres over a decade is a different face. Bring a list of every millilitre you've ever had — and ask your doctor to do the same.",
  },
  {
    topic: "Filler",
    question: "Can filler be reversed if I don't like it?",
    answer: "Hyaluronic acid filler — yes, usually within forty-eight hours of an emergency appointment with hyaluronidase. We dissolve filler placed by other clinics weekly. Permanent fillers (Bio-Alcamid, polyacrylamide, silicone) — no, not chemically. The lesson is to choose hyaluronic acid for the first decade of your aesthetic life and resist anything described as 'permanent'.",
  },
  {
    topic: "Skin",
    question: "What is the single most underrated treatment in 2026?",
    answer: "Polynucleotides. They have done more for thin under-eye skin, for crepey necks and for post-acne skin quality in the last two years than anything since Profhilo arrived. They are quiet, slow, regenerative — and largely invisible to anyone but the patient and the mirror.",
  },
  {
    topic: "Skin",
    question: "Is there one product I should be using daily?",
    answer: "Broad-spectrum SPF 50, every morning, regardless of weather, regardless of season. Ninety per cent of what patients call 'ageing' is ultraviolet damage. The other ten per cent is gravity, genetics and sleep. You can fix the first cheaply, every day, for less than the price of a coffee.",
  },
  {
    topic: "Cost",
    question: "Why do prices vary so much between clinics?",
    answer: "Because the price reflects who is in the chair next to you, not just the product going into your face. A doctor with twenty years of practice charges differently than a practitioner trained on a weekend course — even when the box of product is identical. The product is rarely where you save money. The judgement is where you spend it.",
  },
  {
    topic: "Cost",
    question: "When is cheap actually fine?",
    answer: "Almost never for injectables; sometimes for skincare. A high-street vitamin C serum can be excellent. A discount Botox session at a basement clinic is rarely fine. The difference is that bad skincare washes off; bad injectables stay in your face until they don't.",
  },
  {
    topic: "Recovery",
    question: "What's the recovery from a full-face hyaluronic-acid makeover?",
    answer: "Bruising for two to five days in a small subset of patients, swelling that settles within a week, and a result that integrates over four to six weeks. We schedule social events at the eight-week mark, not at week two. Patients who book a 'face for Saturday's wedding' on the Thursday before are the patients who write disappointed reviews. Plan ahead.",
  },
  {
    topic: "Recovery",
    question: "How long after threads can I sleep on my side?",
    answer: "Ten to fourteen days, ideally on a soft silk pillowcase, ideally on your back. Threads need that time to anchor into surrounding tissue. After two weeks you can return to whatever sleeping position your spine prefers.",
  },
  {
    topic: "Choosing a clinic",
    question: "What's the first question I should ask any aesthetic clinic?",
    answer: "'Who is treating me, and what is their full medical registration?' If the answer involves a hesitation, a non-medical title, or a redirect to 'our highly trained team' — leave. In the United Kingdom, asking to see a doctor's GMC number is your right, and a good clinic will offer it before you ask.",
  },
  {
    topic: "Choosing a clinic",
    question: "What's the biggest red flag in aesthetic marketing?",
    answer: "Anything described as 'permanent', anything offered at half-price for booking the same day, and anything photographed with the filter still on. Genuine before-and-after photography uses the same lighting, the same lens, and the same neutral expression. If the after photo is smiling and the before is scowling, you're looking at make-up, not medicine.",
  },
];

const TOPICS = Array.from(new Set(QAS.map((q) => q.topic)));

const AskDrHaq = () => {
  const path = "/ask-dr-haq/";
  const canonical = `https://www.cosmedocs.com${path}`;
  const faqList = QAS.map((q) => ({ question: q.question, answer: q.answer }));

  return (
    <>
      <Helmet>
        <title>Ask Dr Haq — Honest Answers from a Harley Street Doctor | Cosmedocs</title>
        <meta
          name="description"
          content="Direct answers from Dr Ahmed Haq — Medical Director at Cosmedocs Harley Street — on Botox, filler, skin, recovery and what to look for in an aesthetic clinic."
        />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <link rel="canonical" data-rh="true" href={canonical} />
        <meta property="og:title" content="Ask Dr Haq — Cosmedocs Harley Street" />
        <meta property="og:description" content="Honest answers from a GMC-registered aesthetic doctor." />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="article" />
      </Helmet>

      <MedicalArticleSchema
        path={path}
        headline="Ask Dr Haq — Honest Answers from a Harley Street Doctor"
        description="A growing collection of direct, doctor-written answers to the questions patients actually ask in consultation."
        datePublished="2024-09-01"
        dateModified="2026-06-24"
        speakableSelectors={["h1", "[data-speakable]", ".qa-answer"]}
      />
      <FAQSchema faqs={faqList} />

      <div className="bg-[#F5F5F3] overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Breadcrumb items={[{ label: "About", path: "/about-us" }]} currentPage="Ask Dr Haq" variant="light" />
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-20">
          <header className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 rounded-full text-xs text-gray-600 mb-6 border border-gray-200">
              <MapPin className="h-4 w-4 text-[#C9A050]" />
              8–10 Harley Street, London W1G 9PF
            </div>
            <p className="text-xs tracking-[0.3em] uppercase text-[#C9A050] mb-4 font-light">
              Editorial column by Dr Ahmed Haq, Medical Director
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-[1.05] tracking-tight" data-speakable>
              Ask Dr Haq
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl">
              The questions patients actually ask in consultation — written down, answered properly, published without a sales filter. Updated as new questions arrive.
            </p>
          </header>

          <DrAhmedQuote />

          {/* Topic chips */}
          <nav className="flex flex-wrap gap-2 mb-10 mt-10">
            {TOPICS.map((t) => (
              <a
                key={t}
                href={`#${t.replace(/\s+/g, "-").toLowerCase()}`}
                className="px-3 py-1.5 text-xs uppercase tracking-wider bg-white border border-gray-200 rounded-full text-gray-700 hover:border-[#C9A050] hover:text-[#C9A050] transition"
              >
                {t}
              </a>
            ))}
          </nav>

          {/* Q&As grouped by topic */}
          {TOPICS.map((topic) => (
            <section key={topic} id={topic.replace(/\s+/g, "-").toLowerCase()} className="mb-12">
              <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-6 border-l-4 border-[#C9A050] pl-4">
                {topic}
              </h2>
              <div className="space-y-6">
                {QAS.filter((q) => q.topic === topic).map((q, i) => (
                  <article key={i} className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-200">
                    <div className="flex items-start gap-3 mb-3">
                      <MessageCircle className="h-5 w-5 text-[#C9A050] mt-1 shrink-0" />
                      <h3 className="text-lg md:text-xl font-medium text-gray-900">{q.question}</h3>
                    </div>
                    <p className="qa-answer text-gray-700 leading-relaxed pl-8">{q.answer}</p>
                    <p className="pl-8 mt-4 text-xs text-gray-500 italic">— Dr Ahmed Haq</p>
                  </article>
                ))}
              </div>
            </section>
          ))}

          <section className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mt-12 text-center">
            <h2 className="text-2xl font-light text-gray-900 mb-3">Have a question that isn't here?</h2>
            <p className="text-gray-700 mb-6">
              Send it in. We publish new answers monthly, anonymised, with the same honesty you'd get in the consulting room.
            </p>
            <Link
              to="/contact/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#C9A050] text-white rounded-full hover:bg-[#b58e44] transition"
            >
              Ask Dr Haq <ArrowRight className="h-4 w-4" />
            </Link>
          </section>
        </article>
      </div>
    </>
  );
};

export default AskDrHaq;
