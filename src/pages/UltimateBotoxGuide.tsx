import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Shield,
  Clock,
  CheckCircle2,
  Star,
  Heart,
  Zap,
  AlertCircle,
  TrendingUp,
  Award,
  ChevronDown,
} from "lucide-react";
import Home2Header from "@/components/home2/Home2Header";
import Footer from "@/components/Footer";

// Images — text-free editorial photography
import heroImage from "@/assets/botox-guide-hero.jpg";
import mirrorImage from "@/assets/botox-guide-mirror.jpg";
import confidentImage from "@/assets/botox-guide-confident.jpg";
import precisionImage from "@/assets/botox-guide-precision.jpg";
import qualityImage from "@/assets/botox-guide-quality.jpg";
import friendsImage from "@/assets/botox-guide-friends.jpg";

/* ─────────────────────────────────────────────
   SHARED SUB-COMPONENTS
   ───────────────────────────────────────────── */
const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const Caption = ({ children }: { children: React.ReactNode }) => (
  <p className="text-center text-white/35 text-xs md:text-sm italic mt-3 font-light">
    {children}
  </p>
);

const ArticleImage = ({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) => (
  <motion.figure
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fade}
    className="my-10 max-w-lg mx-auto"
  >
    <div className="rounded-xl overflow-hidden border border-white/[0.08]">
      <img
        src={src}
        alt={alt}
        className="w-full aspect-[4/3] object-cover"
        loading="lazy"
      />
    </div>
    <Caption>{caption}</Caption>
  </motion.figure>
);

const Quote = ({ children }: { children: React.ReactNode }) => (
  <motion.blockquote
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fade}
    className="relative my-12 py-6 px-8 md:px-10 border-l-2 border-[#C9A050]/40 bg-white/[0.02] rounded-r-xl"
  >
    <p className="text-lg md:text-xl font-light italic text-white/70 leading-relaxed">
      {children}
    </p>
  </motion.blockquote>
);

const StatCard = ({
  value,
  label,
}: {
  value: string;
  label: string;
}) => (
  <motion.div
    variants={fade}
    className="text-center p-6 bg-white/[0.03] border border-white/[0.08] rounded-xl"
  >
    <p className="text-3xl md:text-4xl font-light text-[#C9A050] mb-1">{value}</p>
    <p className="text-white/40 text-sm font-light">{label}</p>
  </motion.div>
);

const InfoCard = ({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<any>;
  title: string;
  children: React.ReactNode;
}) => (
  <motion.div
    variants={fade}
    className="p-5 bg-white/[0.03] border border-white/[0.08] rounded-xl"
  >
    <div className="flex items-center gap-3 mb-3">
      <span className="w-8 h-8 rounded-full bg-[#C9A050]/10 flex items-center justify-center">
        <Icon className="w-4 h-4 text-[#C9A050]" />
      </span>
      <p className="font-medium text-white/80 text-sm">{title}</p>
    </div>
    <p className="text-white/45 text-sm font-light leading-relaxed">{children}</p>
  </motion.div>
);

/* Table of Contents */
const tocSections = [
  { id: "mindset", label: "The Mindset Problem" },
  { id: "safety", label: "The Safety Truth" },
  { id: "haircut", label: "The Haircut Analogy" },
  { id: "credentials", label: "Why CosmeDocs" },
  { id: "what-people-want", label: "What People Actually Want" },
  { id: "how-it-works", label: "How It Works" },
  { id: "treatment-areas", label: "Treatment Areas" },
  { id: "side-effects", label: "Side Effects" },
  { id: "friends-factor", label: "The Friends Factor" },
  { id: "bottom-line", label: "The Bottom Line" },
];

/* ─────────────────────────────────────────────
   PAGE
   ───────────────────────────────────────────── */
const UltimateBotoxGuide = () => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "The Ultimate Guide to Botox Treatment in London",
    description:
      "A comprehensive, evidence-based guide to understanding Botox treatments. Written for the researching first-timer who wants the truth without the fluff.",
    author: { "@type": "Organization", name: "CosmeDocs", url: "https://cosmedocs.com" },
    publisher: {
      "@type": "Organization",
      name: "CosmeDocs",
      logo: { "@type": "ImageObject", url: "https://cosmedocs.com/logo.png" },
    },
    datePublished: "2024-01-01",
    dateModified: new Date().toISOString().split("T")[0],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://cosmedocs.com/ultimate-botox-guide/",
    },
  };

  return (
    <>
      <Helmet>
        <title>The Ultimate Guide to Botox Treatment | CosmeDocs</title>
        <meta
          name="description"
          content="The definitive guide to Botox in London. Honest, witty, and comprehensive. Everything you need to know before your first treatment — from safety to results."
        />
        <link rel="canonical" href="https://cosmedocs.com/ultimate-botox-guide/" />
        <meta property="og:title" content="The Ultimate Guide to Botox Treatment" />
        <meta
          property="og:description"
          content="The definitive guide to Botox. Honest, witty, and comprehensive."
        />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-black text-white">
        <Home2Header />

        {/* ═══════ HERO ═══════ */}
        <header className="relative pt-28 pb-16 md:pb-24 px-6 overflow-hidden">
          {/* BG glow */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div
              className="absolute w-[600px] h-[600px] rounded-full opacity-15 -top-40 -right-40"
              style={{
                background: "radial-gradient(circle, #C9A050 0%, transparent 70%)",
                filter: "blur(100px)",
              }}
            />
          </div>

          <div className="max-w-4xl mx-auto relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="text-[#C9A050] text-xs tracking-[0.25em] uppercase font-medium">
                The Definitive Resource
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extralight tracking-tight mt-4 mb-6 leading-[1.1]">
                The Ultimate Guide to{" "}
                <span className="text-[#C9A050] font-light">Botox</span> Treatment
              </h1>
              <p className="text-white/50 text-lg md:text-xl font-light max-w-2xl leading-relaxed mb-8">
                Honest. Witty. Actually useful. Everything the researching first-timer
                needs to know, written by people who've done over a million injections.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  href="tel:03330551503"
                  className="bg-[#C9A050] hover:bg-[#B8913F] text-black px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 text-sm"
                >
                  Book Consultation
                </a>
                <a
                  href="#mindset"
                  className="border border-white/20 hover:border-[#C9A050]/50 px-8 py-3 rounded-full font-medium transition-all duration-300 hover:bg-white/5 text-sm"
                >
                  Start Reading
                </a>
              </div>

              <div className="flex items-center gap-6 text-white/40 text-sm">
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#C9A050]" /> 15 min read
                </span>
                <span className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-[#C9A050] fill-[#C9A050]" /> 5,000+ words
                </span>
              </div>
            </motion.div>
          </div>

          {/* Hero image — smaller, offset */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-md mx-auto mt-12"
          >
            <div className="rounded-xl overflow-hidden border border-white/[0.08]">
              <img
                src={heroImage}
                alt="Sophisticated professional looking refreshed and confident"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
            <Caption>Looking refreshed, not different — the goal of invisible aesthetics.</Caption>
          </motion.div>
        </header>

        {/* ═══════ TABLE OF CONTENTS ═══════ */}
        <nav className="max-w-3xl mx-auto px-6 py-8 mb-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-6"
          >
            <p className="text-sm font-medium text-white/60 flex items-center gap-2 mb-4">
              <ChevronDown className="w-4 h-4 text-[#C9A050]" /> What's Inside This Guide
            </p>
            <div className="grid md:grid-cols-2 gap-1">
              {tocSections.map((s, i) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#C9A050]/5 transition-colors group"
                >
                  <span className="text-[#C9A050] text-xs font-medium w-5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-white/60 text-sm group-hover:text-white/80 transition-colors">
                    {s.label}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </nav>

        {/* ═══════ ARTICLE BODY ═══════ */}
        <article className="max-w-3xl mx-auto px-6 pb-20">

          {/* ─── Chapter 1: Mindset ─── */}
          <section id="mindset" className="mb-20 scroll-mt-24">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
              <span className="text-[#C9A050] text-xs tracking-wider uppercase font-medium">Chapter One</span>
              <h2 className="text-2xl md:text-3xl font-light mt-2 mb-6">
                Let's Talk About Your Head <span className="text-white/40">(Not the Lines on It)</span>
              </h2>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} className="space-y-6">
              <p className="text-white/55 text-base font-light leading-relaxed">
                Right. So here you are. Late at night perhaps, phone in hand, Google working overtime.
                You've typed "Botox London" into that search bar more times than you'd care to admit,
                and you've ended up here. Good. That means you're the kind of person who does their
                research before committing to anything. Smart. We like that.
              </p>

              <p className="text-white/55 text-base font-light leading-relaxed">
                But here's the thing — the main thing holding you back isn't the cost, the pain, or
                even the fear of looking like you've been surprised by your electricity bill. No. It's
                your own head doing somersaults over something that millions of people do every year
                without incident.
              </p>
            </motion.div>

            <ArticleImage
              src={mirrorImage}
              alt="Contemplative moment — the quiet decision to invest in yourself"
              caption="The eternal mirror dilemma — we've all been there."
            />

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} className="space-y-6">
              <p className="text-white/55 text-base font-light leading-relaxed">
                You've watched your friends take the plunge. They look… well, annoyingly good, don't
                they? Fresh. Rested. Like they've been on a two-week holiday in the Maldives whilst
                you've been stress-eating biscuits and doom-scrolling through the news.
              </p>

              <p className="text-white/55 text-base font-light leading-relaxed">
                And yet, here you are, still on the fence. Still fighting that inexplicable urge to
                remain au naturel, as if there's some moral victory in looking tired.
              </p>

              <p className="text-white/70 text-base font-medium">
                Let's reset that mindset, shall we?
              </p>
            </motion.div>
          </section>

          <div className="h-px bg-white/[0.06] my-16" />

          {/* ─── Chapter 2: Safety ─── */}
          <section id="safety" className="mb-20 scroll-mt-24">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
              <span className="text-[#C9A050] text-xs tracking-wider uppercase font-medium">Chapter Two</span>
              <h2 className="text-2xl md:text-3xl font-light mt-2 mb-6">
                The Safety Bit <span className="text-white/40">(Yes, We're Going There)</span>
              </h2>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} className="space-y-6">
              <p className="text-white/55 text-base font-light leading-relaxed">
                Botox isn't the Wild West of medicine. Far from it. It's actually one of the most
                researched, tested, and regulated substances in cosmetic medicine. Before a drug can
                be approved for cosmetic use, it has to jump through hoops that would make an Olympic
                gymnast weep.
              </p>

              <p className="text-white/55 text-base font-light leading-relaxed">
                For medical use? High standards. For cosmetic use? Multiply that by a factor of
                "absolutely ridiculous levels of scrutiny." The fact that Botox cleared those hurdles
                should tell you something.
              </p>
            </motion.div>

            <ArticleImage
              src={precisionImage}
              alt="Clinical precision — every injection is intentional"
              caption="Precision isn't optional — it's the entire point."
            />

            <Quote>
              There's probably no other drug approved for purely cosmetic use that has been subjected
              to such rigorous safety testing.
            </Quote>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
              className="grid md:grid-cols-2 gap-4 mt-8"
            >
              <InfoCard icon={TrendingUp} title="The Numbers Game">
                Millions of injections are performed every year. The "disaster stories" you've heard?
                Roughly one in ten thousand — and those usually happen with underqualified practitioners.
              </InfoCard>
              <InfoCard icon={Award} title="The Time Magazine Moment">
                Botox was on the cover of Time Magazine. Not for controversy — for being revolutionary.
                That's the kind of street cred most treatments can only dream of.
              </InfoCard>
            </motion.div>
          </section>

          <div className="h-px bg-white/[0.06] my-16" />

          {/* ─── Chapter 3: The Haircut Analogy ─── */}
          <section id="haircut" className="mb-20 scroll-mt-24">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
              <span className="text-[#C9A050] text-xs tracking-wider uppercase font-medium">Chapter Three</span>
              <h2 className="text-2xl md:text-3xl font-light mt-2 mb-6">
                The Haircut Analogy <span className="text-white/40">(Bear With Us)</span>
              </h2>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} className="space-y-6">
              <p className="text-white/55 text-base font-light leading-relaxed">
                Think about haircuts. You've got your high street barbers — the ones with the spinning
                pole and a queue of blokes getting their standard short-back-and-sides. Perfectly fine
                for what they do. Then you've got your premium salons — the ones where they offer you
                prosecco, analyse your face shape, and treat your hair like it's made of spun gold.
              </p>
            </motion.div>

            <ArticleImage
              src={qualityImage}
              alt="Two chairs — one basic, one premium — illustrating the difference in care"
              caption="Same service. Worlds apart. Choose wisely."
            />

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} className="space-y-6">
              <p className="text-white/55 text-base font-light leading-relaxed">
                Both can give you a haircut. But would you expect the same result? Of course not. And a
                haircut doesn't involve needles near your face.
              </p>

              <p className="text-white/70 text-base font-medium">
                Botox is no different. The treatment might be called the same thing everywhere, but the
                practitioner, the technique, the attention to your individual anatomy — that's where the
                magic happens. Or doesn't.
              </p>

              <p className="text-white/55 text-base font-light leading-relaxed">
                The bad cases you've heard about? Nine times out of ten, they're the equivalent of
                getting a complex balayage at a place that usually does £10 buzz cuts. Nothing against
                buzz cuts, but know what you're getting into.
              </p>
            </motion.div>
          </section>

          <div className="h-px bg-white/[0.06] my-16" />

          {/* ─── Chapter 4: Why CosmeDocs ─── */}
          <section id="credentials" className="mb-20 scroll-mt-24">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
              <span className="text-[#C9A050] text-xs tracking-wider uppercase font-medium">Chapter Four</span>
              <h2 className="text-2xl md:text-3xl font-light mt-2 mb-6">
                A Quick Word About <span className="text-[#C9A050]">Who We Are</span>
              </h2>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} className="space-y-6">
              <p className="text-white/55 text-base font-light leading-relaxed">
                We weren't going to bang on about qualifications — you can find good, qualified people
                pretty much anywhere if you look hard enough. But since you're here doing your research,
                here's the quick version.
              </p>

              <p className="text-white/55 text-base font-light leading-relaxed">
                CosmeDocs has been at this game since 2007. We've performed over 1M+ injections. Let
                that sink in for a moment.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
              className="grid grid-cols-3 gap-4 my-10"
            >
              <StatCard value="17+" label="Years" />
              <StatCard value="1M+" label="Injections" />
              <StatCard value="#1" label="Training Academy" />
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} className="space-y-6">
              <p className="text-white/55 text-base font-light leading-relaxed">
                Our doctors don't just do this — they teach it. At the{" "}
                <a
                  href="https://harleystreetinstitute.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C9A050] hover:text-[#B8913F] underline underline-offset-4"
                >
                  Harley Street Institute
                </a>
                , our lead trainers educate the next generation of practitioners. When you come to us,
                you're getting the people who quite literally wrote the curriculum.
              </p>
              <p className="text-white/50 text-base font-light">But enough about us. This is about you.</p>
            </motion.div>
          </section>

          <div className="h-px bg-white/[0.06] my-16" />

          {/* ─── Chapter 5: What People Actually Want ─── */}
          <section id="what-people-want" className="mb-20 scroll-mt-24">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
              <span className="text-[#C9A050] text-xs tracking-wider uppercase font-medium">Chapter Five</span>
              <h2 className="text-2xl md:text-3xl font-light mt-2 mb-6">
                What You Actually Want <span className="text-white/40">(It's Not Youth)</span>
              </h2>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} className="space-y-6">
              <p className="text-white/55 text-base font-light leading-relaxed">
                When you actually survey people about what they want from aesthetic treatments, "looking
                young" isn't at the top. It's usually third or fourth on the list.
              </p>

              <p className="text-white/70 text-base font-medium">Number one? Looking fresh.</p>

              <p className="text-white/55 text-base font-light leading-relaxed">
                Not twenty years younger. Not frozen in time. Just… fresh. Rested. Like you've actually
                slept in the past decade and don't mainline caffeine to survive the 3pm slump. That
                subtle difference between "you look tired" and "you look great, have you been on holiday?"
              </p>
            </motion.div>

            <ArticleImage
              src={confidentImage}
              alt="Confident woman looking naturally refreshed — the real goal"
              caption="Not younger. Just… the best version of you."
            />

            <Quote>
              People don't want to look different. They want to look like the best version of themselves
              — the one that exists after a good night's sleep and a week without stress.
            </Quote>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
              <p className="text-white/55 text-base font-light leading-relaxed">
                And here's the beautiful irony: good Botox is invisible. It's not about erasing every
                line. It's about softening the ones that make you look perpetually concerned, exhausted,
                or like you're silently judging everyone in the room.
              </p>
            </motion.div>
          </section>

          <div className="h-px bg-white/[0.06] my-16" />

          {/* ─── Chapter 6: How It Works ─── */}
          <section id="how-it-works" className="mb-20 scroll-mt-24">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
              <span className="text-[#C9A050] text-xs tracking-wider uppercase font-medium">Chapter Six</span>
              <h2 className="text-2xl md:text-3xl font-light mt-2 mb-6">
                How This Magic Juice <span className="text-[#C9A050]">Actually Works</span>
              </h2>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} className="space-y-6">
              <p className="text-white/55 text-base font-light leading-relaxed">
                Botox is the brand name for a purified form of botulinum toxin type A. Before you run
                screaming at the word "toxin," remember that plenty of things are toxic in large amounts
                but perfectly safe in controlled doses. Water can be dangerous if you drink too much.
                Context is everything.
              </p>

              <p className="text-white/55 text-base font-light leading-relaxed">
                In tiny, precisely measured amounts, Botox temporarily relaxes specific facial muscles —
                the ones that, over years of expressing emotions like a normal human being, have created
                those lines you see in the mirror. Every frown, every squint at your phone, every raised
                eyebrow at your colleague's questionable life choices — they all add up.
              </p>

              <p className="text-white/55 text-base font-light leading-relaxed">
                By relaxing these muscles, the skin above them smooths out. Not frozen. Not paralysed
                into permanent surprise. Just… calmer. Like your face has finally learned to meditate.
              </p>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fade}
              className="my-10 bg-white/[0.03] border border-white/[0.08] rounded-xl p-6"
            >
              <p className="text-sm font-medium text-white/60 flex items-center gap-2 mb-5">
                <Clock className="w-4 h-4 text-[#C9A050]" /> The Timeline
              </p>
              <div className="space-y-4">
                {[
                  { time: "Day 1", desc: "Treatment takes 10–15 minutes. Little to no downtime." },
                  { time: "Days 3–5", desc: "Effects start becoming visible. You'll notice subtle changes." },
                  { time: "Day 14", desc: "Full results are visible. This is your new normal." },
                  { time: "Months 3–4", desc: "Effects gradually wear off. Time for a top-up if you wish." },
                ].map((step) => (
                  <div key={step.time} className="flex items-start gap-4">
                    <span className="text-[#C9A050] text-sm font-medium w-20 flex-shrink-0">{step.time}</span>
                    <p className="text-white/50 text-sm font-light">{step.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </section>

          <div className="h-px bg-white/[0.06] my-16" />

          {/* ─── Chapter 7: Treatment Areas ─── */}
          <section id="treatment-areas" className="mb-20 scroll-mt-24">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
              <span className="text-[#C9A050] text-xs tracking-wider uppercase font-medium">Chapter Seven</span>
              <h2 className="text-2xl md:text-3xl font-light mt-2 mb-6">
                Where Can Botox Go? <span className="text-white/40">(Spoiler: Everywhere)</span>
              </h2>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} className="space-y-6">
              <p className="text-white/55 text-base font-light leading-relaxed">
                Most people think of Botox as purely a forehead thing. But the applications of this
                remarkable little protein are genuinely staggering — faces, bodies, medical conditions.
              </p>

              <p className="text-white/60 text-sm font-medium mt-8 mb-3">The Face</p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {[
                  { name: "Forehead Lines", link: "/treatments/botox/forehead/" },
                  { name: "Frown Lines", link: "/treatments/botox/frown-lines/" },
                  { name: "Crow's Feet", link: "/treatments/botox/crows-feet/" },
                  { name: "Bunny Lines", link: "/treatments/botox/bunny-lines/" },
                  { name: "Gummy Smile", link: "/treatments/botox/gummy-smile/" },
                  { name: "Lip Flip", link: "/treatments/botox/lip-flip/" },
                  { name: "Chin Dimpling", link: "/treatments/botox/chin/" },
                  { name: "Nefertiti Lift", link: "/treatments/botox/nefertiti/" },
                  { name: "Nasal Flaring", link: "/treatments/botox/nasal-flaring/" },
                ].map((item) => (
                  <Link
                    key={item.name}
                    to={item.link}
                    className="flex items-center gap-2 px-4 py-3 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:border-[#C9A050]/30 hover:bg-[#C9A050]/[0.04] transition-all text-sm text-white/60 hover:text-[#C9A050] group"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A050]/50 group-hover:text-[#C9A050]" />
                    {item.name}
                  </Link>
                ))}
              </div>

              <p className="text-white/60 text-sm font-medium mt-10 mb-3">Beyond the Face</p>

              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { name: "Masseter (Jaw Slimming)", link: "/treatments/botox/masseter/", desc: "Slim your jawline, help with grinding" },
                  { name: "Trapezius Slimming", link: "/treatments/botox/trapezius/", desc: "Slim shoulders, reduce tension" },
                  { name: "Excessive Sweating", link: "/treatments/botox/hyperhidrosis/", desc: "Stop embarrassing sweat patches" },
                  { name: "Migraines", link: "/treatments/botox/migraines/", desc: "Medical treatment for chronic sufferers" },
                ].map((item) => (
                  <Link
                    key={item.name}
                    to={item.link}
                    className="flex items-start gap-3 px-4 py-3 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:border-[#C9A050]/30 hover:bg-[#C9A050]/[0.04] transition-all group"
                  >
                    <Zap className="w-4 h-4 text-[#C9A050]/50 mt-0.5" />
                    <div>
                      <p className="text-sm text-white/70 group-hover:text-[#C9A050] transition-colors font-medium">{item.name}</p>
                      <p className="text-xs text-white/35 font-light mt-0.5">{item.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </section>

          <div className="h-px bg-white/[0.06] my-16" />

          {/* ─── Chapter 8: Side Effects ─── */}
          <section id="side-effects" className="mb-20 scroll-mt-24">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
              <span className="text-[#C9A050] text-xs tracking-wider uppercase font-medium">Chapter Eight</span>
              <h2 className="text-2xl md:text-3xl font-light mt-2 mb-6">
                The Side Effects Chat <span className="text-white/40">(Let's Be Honest)</span>
              </h2>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} className="space-y-6">
              <p className="text-white/55 text-base font-light leading-relaxed">
                You've seen the horror stories. The droopy eyelids. The frozen faces. The celebrities
                who look like they're perpetually startled by invisible ghosts. These things can happen.
                We'd be lying if we said otherwise.
              </p>

              <p className="text-white/70 text-base font-medium">
                But here's what nobody tells you: they go away.
              </p>
            </motion.div>

            {/* The 20% Rule */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fade}
              className="my-8 p-6 bg-white/[0.03] border border-[#C9A050]/20 rounded-xl"
            >
              <p className="text-sm font-medium text-white/70 flex items-center gap-2 mb-3">
                <AlertCircle className="w-4 h-4 text-[#C9A050]" /> The 20% Rule
              </p>
              <p className="text-white/50 text-sm font-light leading-relaxed">
                Side effects from Botox typically wear off at approximately <strong className="text-white/70">20% per month</strong>.
                Even in the worst-case scenario, you're not stuck with anything permanent. That droopy
                brow? Give it a few weeks. It's sorting itself out as we speak.
              </p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} className="space-y-6">
              <p className="text-white/55 text-base font-light leading-relaxed">
                Every single practitioner at CosmeDocs has had Botox. We've all given it to each other.
                We've all experienced the occasional complication ourselves. A slight droop here, an
                uneven result there. And you know what? We laughed about it. Fixed it. Moved on.
              </p>

              <p className="text-white/55 text-base font-light leading-relaxed">
                If you can't laugh at a temporarily wonky eyebrow, this might not be for you. And
                that's perfectly fine. But for everyone else? These minor hiccups are part of the
                journey, and they're temporary.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
              className="grid md:grid-cols-2 gap-4 mt-8"
            >
              <InfoCard icon={Clock} title="Common (and Temporary)">
                Minor bruising, slight headache, temporary asymmetry. All usually resolve within days
                to weeks without any intervention needed.
              </InfoCard>
              <InfoCard icon={Shield} title="Rare (and Still Temporary)">
                Drooping of the eyelid or brow can occur in less than 1% of cases with experienced
                practitioners. Even then, it resolves as the Botox wears off.
              </InfoCard>
            </motion.div>
          </section>

          <div className="h-px bg-white/[0.06] my-16" />

          {/* ─── Chapter 9: The Friends Factor ─── */}
          <section id="friends-factor" className="mb-20 scroll-mt-24">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
              <span className="text-[#C9A050] text-xs tracking-wider uppercase font-medium">Chapter Nine</span>
              <h2 className="text-2xl md:text-3xl font-light mt-2 mb-6">
                Your Friends Who Say <span className="text-[#C9A050]">"Nobody Needs This"</span>
              </h2>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} className="space-y-6">
              <p className="text-white/55 text-base font-light leading-relaxed">
                You know the ones. They cluck disapprovingly when you mention you're considering
                aesthetic treatments. "You don't need that," they say, sipping their third glass of
                wine whilst visibly not having slept properly since 2019.
              </p>

              <p className="text-white/55 text-base font-light leading-relaxed">
                These are often the same people who've "accepted" ageing in the way someone accepts
                that their gym membership has gone unused for eighteen months. It's not a philosophical
                stance — it's resignation dressed up as wisdom.
              </p>
            </motion.div>

            <ArticleImage
              src={friendsImage}
              alt="Diverse group of friends laughing together — all looking radiant"
              caption="Having Botox changes your friends too — in the best way."
            />

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} className="space-y-6">
              <p className="text-white/55 text-base font-light leading-relaxed">
                When you do have Botox and you look refreshed, something curious happens. Those same
                friends start asking questions. "You look different… good different. What's your
                secret?" And before you know it, they're googling "Botox London" at midnight, just
                like you did.
              </p>

              <p className="text-white/70 text-base font-medium">
                Having Botox changes your friends too. Not because you're setting unrealistic
                standards, but because you're demonstrating that looking after yourself isn't vanity
                — it's self-care.
              </p>
            </motion.div>

            <Quote>
              The best Botox doesn't make people say "Have you had work done?" It makes them say "You
              look amazing lately — what's your secret?"
            </Quote>
          </section>

          <div className="h-px bg-white/[0.06] my-16" />

          {/* ─── Chapter 10: The Bottom Line ─── */}
          <section id="bottom-line" className="mb-20 scroll-mt-24">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
              <span className="text-[#C9A050] text-xs tracking-wider uppercase font-medium">The Final Chapter</span>
              <h2 className="text-2xl md:text-3xl font-light mt-2 mb-6">
                So, <span className="text-[#C9A050]">What Now?</span>
              </h2>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} className="space-y-6">
              <p className="text-white/55 text-base font-light leading-relaxed">
                You've made it through this entire guide. That tells us two things: you're genuinely
                interested, and you have the patience of a saint. Both excellent qualities.
              </p>

              <p className="text-white/55 text-base font-light leading-relaxed">
                The decision to have Botox is yours. We can't make it for you — and we wouldn't want
                to. But if you've been on the fence for months or even years, maybe it's time to
                question that resistance.
              </p>

              <p className="text-white/55 text-base font-light leading-relaxed">
                Is it fear? We've addressed that — the safety profile is excellent.
              </p>

              <p className="text-white/55 text-base font-light leading-relaxed">
                Is it worry about looking "done"? That's about choosing the right practitioner, and
                you've already found one of the best.
              </p>

              <p className="text-white/70 text-base font-medium">
                The fountain of youth might be a myth. But looking and feeling fresh? That's entirely
                achievable. And you deserve it.
              </p>
            </motion.div>
          </section>

          {/* ═══════ CTA ═══════ */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            className="relative mt-16 p-8 md:p-12 rounded-2xl bg-white/[0.03] border border-[#C9A050]/20 text-center overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#C9A050]/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 text-[#C9A050] text-xs tracking-wider uppercase font-medium mb-4">
                <Heart className="w-3.5 h-3.5" /> Ready When You Are
              </span>
              <h3 className="text-2xl md:text-3xl font-light mb-4">
                Your Journey Starts With a Conversation
              </h3>
              <p className="text-white/45 text-sm font-light max-w-xl mx-auto mb-8">
                No pressure. No hard sell. Just an honest discussion about what you want to achieve
                and whether Botox is right for you.
              </p>
              <a
                href="tel:03330551503"
                className="inline-block bg-[#C9A050] hover:bg-[#B8913F] text-black px-10 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105"
              >
                Book Consultation
              </a>
              <div className="flex flex-wrap justify-center gap-5 mt-8 text-xs text-white/40">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A050]/60" /> Free initial consultation
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A050]/60" /> No obligation
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A050]/60" /> Harley Street clinic
                </span>
              </div>
            </div>
          </motion.div>

          {/* Related Links */}
          <div className="mt-16">
            <p className="text-sm font-medium text-white/60 mb-5">Continue Your Research</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { title: "Botox FAQs", link: "/botox-faqs/", desc: "Quick answers to common questions" },
                { title: "Botox Pricing", link: "/treatments/botox-cost/", desc: "Transparent costs explained" },
                { title: "Our Team", link: "/our-team/", desc: "Meet the doctors" },
                { title: "Before & After", link: "/before-after/", desc: "Real results, real people" },
                { title: "Blog", link: "/blog/", desc: "More insights & guides" },
                { title: "Book Now", link: "/contact/", desc: "Ready to start?" },
              ].map((item) => (
                <Link
                  key={item.title}
                  to={item.link}
                  className="block px-4 py-3 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:border-[#C9A050]/30 hover:bg-[#C9A050]/[0.04] transition-all group"
                >
                  <p className="text-sm text-white/70 group-hover:text-[#C9A050] transition-colors font-medium">
                    {item.title}
                  </p>
                  <p className="text-xs text-white/35 font-light mt-0.5">{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </article>

        {/* Hidden SEO Content */}
        <div className="sr-only" aria-hidden="true">
          <h2>Comprehensive Botox Treatment Information for London Patients</h2>
          <p>
            Botox treatment in London has become one of the most sought-after aesthetic procedures,
            with thousands of patients choosing clinics on Harley Street for their anti-wrinkle
            injections. The botulinum toxin type A works by temporarily relaxing facial muscles to
            reduce the appearance of dynamic wrinkles caused by repetitive expressions. CosmeDocs
            offers expert Botox administration with over 17 years of experience and over one million
            injections performed. Common treatment areas include forehead lines, frown lines between
            the eyebrows, crow's feet around the eyes, and various other facial and body applications
            including jaw slimming, hyperhidrosis treatment, and migraine management. Our aesthetics
            is invisible art — bold, natural, always your way.
          </p>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default UltimateBotoxGuide;
