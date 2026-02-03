import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Shield, 
  Users, 
  Clock, 
  CheckCircle2, 
  Star,
  Sparkles,
  Heart,
  Zap,
  AlertCircle,
  TrendingUp,
  Award,
  Quote,
  ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// Import AI-generated images
import heroImage from "@/assets/botox-guide-hero.jpg";
import mindsetImage from "@/assets/botox-guide-mindset.jpg";
import safetyImage from "@/assets/botox-guide-safety.jpg";
import barberImage from "@/assets/botox-guide-barber.jpg";
import zonesImage from "@/assets/botox-guide-zones.jpg";
import communityImage from "@/assets/botox-guide-community.jpg";
// New meme-style graphics
import mirrorMemeImage from "@/assets/botox-guide-mirror-meme.jpg";
import onTheFenceImage from "@/assets/botox-guide-on-the-fence.jpg";
import howItWorksImage from "@/assets/botox-guide-how-it-works.jpg";
import scepticalFriendImage from "@/assets/botox-guide-sceptical-friend.jpg";
import barberVsSalonImage from "@/assets/botox-guide-barber-vs-salon.jpg";
import sideEffectsTimelineImage from "@/assets/botox-guide-side-effects-timeline.jpg";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

// Section component with purple accent
const Section = ({ 
  children, 
  className = "", 
  id 
}: { 
  children: React.ReactNode; 
  className?: string; 
  id?: string;
}) => (
  <section id={id} className={`relative ${className}`}>
    <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-purple-500 via-primary to-amber-500 rounded-r-full" />
    <div className="pl-8 md:pl-12">
      {children}
    </div>
  </section>
);

// Quote callout component
const QuoteCallout = ({ children }: { children: React.ReactNode }) => (
  <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeInUp}
    className="relative my-12 py-8 px-6 md:px-12 bg-gradient-to-r from-purple-500/10 via-primary/5 to-amber-500/10 rounded-2xl border-l-4 border-purple-500"
  >
    <Quote className="absolute -top-4 left-6 h-8 w-8 text-purple-500 fill-purple-500/20" />
    <p className="text-xl md:text-2xl font-light italic text-foreground/90 leading-relaxed">
      {children}
    </p>
  </motion.div>
);

// Fun fact card
const FunFactCard = ({ title, children, icon: Icon }: { title: string; children: React.ReactNode; icon: React.ComponentType<any> }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeInUp}
    className="p-6 bg-gradient-to-br from-purple-500/10 to-primary/5 rounded-2xl border border-purple-500/20"
  >
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 rounded-xl bg-purple-500/20">
        <Icon className="h-5 w-5 text-purple-500" />
      </div>
      <h4 className="font-semibold text-foreground">{title}</h4>
    </div>
    <p className="text-muted-foreground leading-relaxed">{children}</p>
  </motion.div>
);

// Table of contents
const TableOfContents = () => {
  const sections = [
    { id: "mindset", title: "The Mindset Problem" },
    { id: "safety", title: "The Safety Truth" },
    { id: "haircut", title: "The Haircut Analogy" },
    { id: "credentials", title: "Why Cosmedocs" },
    { id: "what-people-want", title: "What People Really Want" },
    { id: "how-it-works", title: "How Botox Works" },
    { id: "treatment-areas", title: "Treatment Areas" },
    { id: "side-effects", title: "Side Effects" },
    { id: "friends-factor", title: "The Friends Factor" },
    { id: "bottom-line", title: "The Bottom Line" },
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="bg-muted/50 rounded-2xl p-6 md:p-8 my-12"
    >
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <ChevronDown className="h-5 w-5 text-purple-500" />
        What's Inside This Guide
      </h3>
      <nav className="grid md:grid-cols-2 gap-2">
        {sections.map((section, index) => (
          <motion.a
            key={section.id}
            href={`#${section.id}`}
            variants={fadeInUp}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/10 transition-colors group"
          >
            <span className="text-sm font-medium text-purple-500 w-6">{String(index + 1).padStart(2, '0')}</span>
            <span className="text-foreground/80 group-hover:text-foreground transition-colors">{section.title}</span>
          </motion.a>
        ))}
      </nav>
    </motion.div>
  );
};

const UltimateBotoxGuide = () => {
  // Schema markup for SEO
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "The Ultimate Guide to Botox Treatment in London",
    "description": "A comprehensive, entertaining guide to understanding Botox treatments in London. Written for the researching first-timer who wants the truth without the fluff.",
    "author": {
      "@type": "Organization",
      "name": "Cosmedocs",
      "url": "https://cosmedocs.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Cosmedocs",
      "logo": {
        "@type": "ImageObject",
        "url": "https://cosmedocs.com/logo.png"
      }
    },
    "datePublished": "2024-01-01",
    "dateModified": new Date().toISOString().split('T')[0],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://cosmedocs.com/ultimate-botox-guide"
    }
  };

  const medicalSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Ultimate Botox Guide",
    "specialty": "Aesthetic Medicine",
    "audience": {
      "@type": "MedicalAudience",
      "audienceType": "Patient"
    }
  };

  return (
    <>
      <Helmet>
        <title>The Ultimate Guide to Botox Treatment in London | Cosmedocs</title>
        <meta 
          name="description" 
          content="The definitive guide to Botox in London. Honest, witty, and comprehensive. Everything you need to know before your first treatment - from safety to results." 
        />
        <meta name="keywords" content="Botox London, Botox guide, Botox treatment, anti-wrinkle injections, Cosmedocs, aesthetic treatments London" />
        <link rel="canonical" href="https://cosmedocs.com/ultimate-botox-guide" />
        <meta property="og:title" content="The Ultimate Guide to Botox Treatment in London" />
        <meta property="og:description" content="The definitive guide to Botox in London. Honest, witty, and comprehensive." />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(medicalSchema)}</script>
      </Helmet>

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <header className="relative min-h-[80vh] flex items-center overflow-hidden">
          {/* Background decorations */}
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-transparent" />
          <div className="absolute top-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-primary/10 border border-purple-500/30 mb-6">
                  <Sparkles className="h-4 w-4 text-purple-500" />
                  <span className="text-sm font-medium bg-gradient-to-r from-purple-500 to-primary bg-clip-text text-transparent">
                    The Definitive Resource
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  <span className="bg-gradient-to-r from-purple-500 via-primary to-amber-500 bg-clip-text text-transparent">
                    The Ultimate Guide
                  </span>
                  <br />
                  <span className="text-foreground">to Botox Treatment</span>
                  <br />
                  <span className="text-foreground/80">in London</span>
                </h1>

                <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
                  Honest. Witty. Actually useful. Everything the researching first-timer needs 
                  to know, written by people who've done over a million injections.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="group" asChild>
                    <Link to="/contact">
                      Book Consultation
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="#mindset">Start Reading</a>
                  </Button>
                </div>

                <div className="flex items-center gap-6 mt-8 pt-8 border-t border-border/50">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-purple-500" />
                    <span className="text-sm text-muted-foreground">15 min read</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-amber-500 fill-amber-500" />
                    <span className="text-sm text-muted-foreground">5,000+ words of truth</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative hidden lg:block"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-primary/10 rounded-3xl transform rotate-3" />
                <img 
                  src={heroImage} 
                  alt="Sophisticated professional looking refreshed and confident in London"
                  className="relative rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
              </motion.div>
            </div>
          </div>
        </header>

        {/* Table of Contents */}
        <div className="container mx-auto px-4">
          <TableOfContents />
        </div>

        {/* Main Content */}
        <article className="container mx-auto px-4 py-16 max-w-4xl">
          
          {/* Section 1: The Mindset */}
          <Section id="mindset" className="mb-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <span className="text-purple-500 font-medium text-sm uppercase tracking-wider">Chapter One</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                Let's Talk About <span className="text-purple-500">Your Head</span> (Not the Lines on It)
              </h2>
              
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Right. So here you are. Late at night perhaps, phone in hand, Google working overtime. 
                  You've typed "Botox London" into that search bar more times than you'd care to admit, 
                  and you've ended up here. Good. That means you're the kind of person who does their 
                  research before committing to anything. Smart. We like that.
                </p>
                
                <p className="text-lg leading-relaxed text-muted-foreground mt-6">
                  But here's the thing – and this might sting a little – the main thing holding you back 
                  isn't the cost, the pain, or even the fear of looking like you've been surprised by 
                  your electricity bill. No. It's your own head doing somersaults over something that 
                  millions of people do every year without incident.
                </p>

                {/* Meme: Mirror showing tired vs refreshed */}
                <div className="relative my-8">
                  <img 
                    src={mirrorMemeImage} 
                    alt="Cartoon of tired person looking at refreshed reflection - the Botox before and after dream"
                    className="w-full rounded-2xl shadow-lg"
                  />
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                    The eternal mirror dilemma 🪞
                  </div>
                </div>

                <p className="text-lg leading-relaxed text-muted-foreground">
                  You've watched your friends take the plunge. They look... well, annoyingly good, 
                  don't they? Fresh. Rested. Like they've been on a two-week holiday in the Maldives 
                  whilst you've been stress-eating biscuits and doom-scrolling through the news. 
                  And yet, here you are, still on the fence. Still fighting that inexplicable urge 
                  to remain au naturel, as if there's some moral victory in looking tired.
                </p>

                {/* Meme: On the fence illustration */}
                <div className="relative my-8">
                  <img 
                    src={onTheFenceImage} 
                    alt="Cartoon of person sitting on a fence between tired and refreshed paths"
                    className="w-full rounded-2xl shadow-lg"
                  />
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                    Literally every first-timer ever 😅
                  </div>
                </div>

                <img 
                  src={mindsetImage} 
                  alt="The contrast between researching Botox and living your best life"
                  className="w-full rounded-2xl my-8 shadow-lg"
                />

                <p className="text-lg leading-relaxed text-muted-foreground mt-6">
                  <strong className="text-foreground">Let's reset that mindset, shall we?</strong>
                </p>
              </div>
            </motion.div>
          </Section>

          <Separator className="my-16" />

          {/* Section 2: The Safety Truth */}
          <Section id="safety" className="mb-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <span className="text-purple-500 font-medium text-sm uppercase tracking-wider">Chapter Two</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                The <span className="text-purple-500">Safety</span> Bit (Yes, We're Going There)
              </h2>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Look, Botox isn't the Wild West of medicine. Far from it. It's actually one of the 
                  most researched, tested, and regulated substances in cosmetic medicine. Want to know 
                  why? Because before a drug can be approved for cosmetic use, it has to jump through 
                  hoops that would make an Olympic gymnast weep.
                </p>

                <img 
                  src={safetyImage} 
                  alt="Trust and precision in Botox treatment"
                  className="w-full rounded-2xl my-8 shadow-lg"
                />

                <p className="text-lg leading-relaxed text-muted-foreground">
                  For medical use? High standards. For cosmetic use? Multiply that by a factor of 
                  "absolutely ridiculous levels of scrutiny." Why? Because nobody <em>needs</em> cosmetic 
                  treatments to survive, so the safety bar is set astronomically high. The fact that 
                  Botox cleared those hurdles should tell you something.
                </p>
              </div>

              <QuoteCallout>
                There's probably no other drug – and yes, by drug I mean medicine – approved for 
                purely cosmetic use that has been subjected to such rigorous safety testing.
              </QuoteCallout>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <FunFactCard title="The Numbers Game" icon={TrendingUp}>
                  Millions of Botox injections are performed in London every year. The "disaster stories" 
                  you've heard? They're roughly one in ten thousand. And those usually happen with 
                  underqualified practitioners, not experienced medical professionals.
                </FunFactCard>
                
                <FunFactCard title="The Time Magazine Moment" icon={Award}>
                  Botox was literally on the cover of Time Magazine. Not for controversy – for being 
                  revolutionary. That's the kind of street cred most treatments can only dream of.
                </FunFactCard>
              </div>
            </motion.div>
          </Section>

          <Separator className="my-16" />

          {/* Section 3: The Haircut Analogy */}
          <Section id="haircut" className="mb-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <span className="text-purple-500 font-medium text-sm uppercase tracking-wider">Chapter Three</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                The <span className="text-purple-500">Haircut</span> Analogy (Bear With Us)
              </h2>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Here's a little thought experiment for you. Think about haircuts. Stay with me here.
                </p>

                <p className="text-lg leading-relaxed text-muted-foreground mt-6">
                  You've got your high street barbers – the ones with the spinning pole and a queue 
                  of blokes getting their standard short-back-and-sides whilst watching football on 
                  a tiny telly. Perfectly fine for what they do. Then you've got your premium salons 
                  – the ones where they offer you prosecco, analyse your face shape, and treat your 
                  hair like it's made of spun gold.
                </p>

                <img 
                  src={barberImage} 
                  alt="The difference between basic and premium service"
                  className="w-full rounded-2xl my-8 shadow-lg"
                />

                {/* Meme: Barber vs Salon comparison */}
                <div className="relative my-8">
                  <img 
                    src={barberVsSalonImage} 
                    alt="Funny comparison of basic barber vs champagne salon experience"
                    className="w-full rounded-2xl shadow-lg"
                  />
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                    Choose wisely, friend 💇‍♀️
                  </div>
                </div>

                <p className="text-lg leading-relaxed text-muted-foreground">
                  Both can give you a haircut. But would you expect the same result? Of course not. 
                  And a haircut, last time I checked, doesn't involve needles near your face.
                </p>

                <p className="text-lg leading-relaxed text-muted-foreground mt-6">
                  <strong className="text-foreground">
                    Botox is no different. The treatment might be called the same thing everywhere, 
                    but the practitioner, the technique, the attention to your individual anatomy – 
                    that's where the magic happens. Or doesn't.
                  </strong>
                </p>

                <p className="text-lg leading-relaxed text-muted-foreground mt-6">
                  The bad cases you've heard about? Nine times out of ten, they're the equivalent of 
                  getting a complex balayage at a place that usually does £10 buzz cuts. Nothing 
                  against buzz cuts, but know what you're getting into.
                </p>
              </div>
            </motion.div>
          </Section>

          <Separator className="my-16" />

          {/* Section 4: Why Cosmedocs */}
          <Section id="credentials" className="mb-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <span className="text-purple-500 font-medium text-sm uppercase tracking-wider">Chapter Four</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                A Quick Word About <span className="text-purple-500">Who We Are</span>
              </h2>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  We weren't going to bang on about qualifications – you can find good, qualified 
                  people pretty much anywhere if you look hard enough. But since you're here doing 
                  your research (gold star for you), here's the quick version.
                </p>

                <p className="text-lg leading-relaxed text-muted-foreground mt-6">
                  Cosmedocs has been at this game for nearly 20 years. We've performed over a million 
                  injections per doctor. Not a million between the whole clinic – a million each. 
                  Let that sink in.
                </p>
              </div>

              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="grid md:grid-cols-3 gap-6 my-8"
              >
                <motion.div variants={fadeInUp} className="text-center p-6 bg-gradient-to-br from-purple-500/10 to-transparent rounded-2xl">
                  <div className="text-4xl font-bold text-purple-500 mb-2">20</div>
                  <div className="text-muted-foreground">Years of Experience</div>
                </motion.div>
                <motion.div variants={fadeInUp} className="text-center p-6 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl">
                  <div className="text-4xl font-bold text-primary mb-2">1M+</div>
                  <div className="text-muted-foreground">Injections Per Doctor</div>
                </motion.div>
                <motion.div variants={fadeInUp} className="text-center p-6 bg-gradient-to-br from-amber-500/10 to-transparent rounded-2xl">
                  <div className="text-4xl font-bold text-amber-500 mb-2">#1</div>
                  <div className="text-muted-foreground">Training Academy</div>
                </motion.div>
              </motion.div>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Our doctors don't just do this – they teach it. At the{" "}
                  <a 
                    href="https://harleystreetinstitute.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-500 hover:text-purple-600 underline"
                  >
                    Harley Street Institute
                  </a>
                  , one of the most prestigious aesthetic training academies in the world, our lead 
                  trainers are educating the next generation of practitioners. So when you come to us, 
                  you're getting the people who quite literally wrote the curriculum.
                </p>

                <p className="text-lg leading-relaxed text-muted-foreground mt-6">
                  But enough about us. This is about you.
                </p>
              </div>
            </motion.div>
          </Section>

          <Separator className="my-16" />

          {/* Section 5: What People Actually Want */}
          <Section id="what-people-want" className="mb-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <span className="text-purple-500 font-medium text-sm uppercase tracking-wider">Chapter Five</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                What You <span className="text-purple-500">Actually</span> Want (It's Not Youth)
              </h2>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Here's where it gets interesting. For centuries, humanity has been obsessed with 
                  the fountain of youth. Ponce de León spent years searching for it. Medieval 
                  alchemists tried to create it. Modern skincare brands promise it in every bottle.
                </p>

                <p className="text-lg leading-relaxed text-muted-foreground mt-6">
                  But guess what? When you actually survey people about what they want from aesthetic 
                  treatments, "looking young" isn't at the top. It's usually third or fourth on the list.
                </p>

                <p className="text-lg leading-relaxed text-muted-foreground mt-6">
                  <strong className="text-foreground">Number one? Looking fresh.</strong>
                </p>

                <p className="text-lg leading-relaxed text-muted-foreground mt-6">
                  Not twenty years younger. Not frozen in time. Just... fresh. Rested. Like you've 
                  actually slept in the past decade and don't mainline caffeine to survive the 3pm 
                  slump. That's what most people are after. That subtle difference between "you look 
                  tired" and "you look great, have you been on holiday?"
                </p>
              </div>

              <QuoteCallout>
                People don't want to look different. They want to look like the best version of 
                themselves – the one that exists after a good night's sleep and a week without stress.
              </QuoteCallout>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  And here's the beautiful irony: good Botox is invisible. It's not about erasing 
                  every line (that would look bizarre and, frankly, a bit creepy). It's about 
                  softening the ones that make you look perpetually concerned, exhausted, or like 
                  you're silently judging everyone in the room.
                </p>
              </div>
            </motion.div>
          </Section>

          <Separator className="my-16" />

          {/* Section 6: How Botox Works */}
          <Section id="how-it-works" className="mb-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <span className="text-purple-500 font-medium text-sm uppercase tracking-wider">Chapter Six</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                How This <span className="text-purple-500">Magic Juice</span> Actually Works
              </h2>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Right, science bit. Don't worry, I'll keep it snappy.
                </p>

                <p className="text-lg leading-relaxed text-muted-foreground mt-6">
                  Botox is the brand name for a purified form of botulinum toxin type A. Before you 
                  run screaming at the word "toxin," remember that plenty of things are toxic in 
                  large amounts but perfectly safe – even beneficial – in controlled doses. Water 
                  can kill you if you drink too much of it. Context is everything.
                </p>

                <p className="text-lg leading-relaxed text-muted-foreground mt-6">
                  In tiny, precisely measured amounts, Botox temporarily relaxes specific facial 
                  muscles. These are the muscles that, over years of expressing emotions like a 
                  normal human being, have created those lines and wrinkles you see in the mirror. 
                  Every frown, every squint at your phone, every raised eyebrow at your colleague's 
                  questionable life choices – they all add up.
                </p>

                {/* Meme: How Botox works with cute molecule workers */}
                <div className="relative my-8">
                  <img 
                    src={howItWorksImage} 
                    alt="Cute cartoon of Botox molecules as tiny workers with hard hats relaxing muscle fibres"
                    className="w-full rounded-2xl shadow-lg"
                  />
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                    Your new best friends at work 👷‍♂️
                  </div>
                </div>

                <p className="text-lg leading-relaxed text-muted-foreground mt-6">
                  By relaxing these muscles, the skin above them smooths out. Not frozen. Not 
                  paralysed into permanent surprise. Just... calmer. Like your face has finally 
                  learned to meditate.
                </p>
              </div>

              <Card className="my-8 border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-transparent">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-purple-500" />
                    The Timeline
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-20 text-sm font-medium text-purple-500">Day 1</div>
                      <div className="text-muted-foreground">Treatment takes 10-15 minutes. Little to no downtime.</div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-20 text-sm font-medium text-purple-500">Days 3-5</div>
                      <div className="text-muted-foreground">Effects start becoming visible. You'll notice subtle changes.</div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-20 text-sm font-medium text-purple-500">Day 14</div>
                      <div className="text-muted-foreground">Full results are visible. This is your new normal.</div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-20 text-sm font-medium text-purple-500">Months 3-4</div>
                      <div className="text-muted-foreground">Effects gradually wear off. Time for a top-up if you wish.</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </Section>

          <Separator className="my-16" />

          {/* Section 7: Treatment Areas */}
          <Section id="treatment-areas" className="mb-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <span className="text-purple-500 font-medium text-sm uppercase tracking-wider">Chapter Seven</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                Where Can <span className="text-purple-500">Botox</span> Go? (Spoiler: Everywhere)
              </h2>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Most people think of Botox as purely a forehead thing. Wrinkles go in, smooth 
                  skin comes out. Job done. But the applications of this remarkable little protein 
                  are genuinely staggering. We're talking faces, bodies, medical conditions – the 
                  list doesn't end.
                </p>
              </div>

              <img 
                src={zonesImage} 
                alt="Treatment zones for Botox"
                className="w-full rounded-2xl my-8 shadow-lg"
              />

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">The Face</h3>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Let's start with the obvious. The face has numerous areas where Botox works wonders:
                </p>
              </div>

              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 my-6"
              >
                {[
                  { name: "Forehead Lines", link: "/forehead-lines-botox" },
                  { name: "Frown Lines (Glabellar)", link: "/frown-line-botox" },
                  { name: "Crow's Feet", link: "/crows-feet-botox" },
                  { name: "Bunny Lines", link: "/bunny-lines-botox" },
                  { name: "Gummy Smile", link: "/gummy-smile-botox" },
                  { name: "Lip Flip", link: "/lip-flip" },
                  { name: "Chin Dimpling", link: "/chin-botox" },
                  { name: "Nefertiti Neck Lift", link: "/nefertiti-botox-face-jaw-lift" },
                  { name: "Nasal Flaring", link: "/nasal-flaring-botox" },
                ].map((item) => (
                  <motion.div key={item.name} variants={fadeInUp}>
                    <Link 
                      to={item.link}
                      className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 hover:bg-purple-500/10 border border-transparent hover:border-purple-500/20 transition-all group"
                    >
                      <CheckCircle2 className="h-5 w-5 text-purple-500" />
                      <span className="text-foreground group-hover:text-purple-500 transition-colors">{item.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              <div className="prose prose-lg dark:prose-invert max-w-none mt-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">Beyond the Face</h3>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  But wait, there's more (I promise this isn't an infomercial). Botox has applications 
                  that go well beyond smoothing wrinkles:
                </p>
              </div>

              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="grid sm:grid-cols-2 gap-4 my-6"
              >
                {[
                  { name: "Masseter (Jaw Slimming)", link: "/masseter-botox", desc: "Slim your jawline, help with grinding" },
                  { name: "Trapezius (Shoulder/Neck)", link: "/trap-botox", desc: "Slim shoulders, reduce tension" },
                  { name: "Calf Slimming", link: "/botox-calf-reduction", desc: "More proportionate lower legs" },
                  { name: "Excessive Sweating", link: "/hyperhidrosis-botox", desc: "Stop embarrassing sweat patches" },
                  { name: "Migraines", link: "/migraine-botox", desc: "Medical treatment for chronic sufferers" },
                  { name: "Bruxism (Teeth Grinding)", link: "/bruxism-botox", desc: "Relax the jaw, protect your teeth" },
                ].map((item) => (
                  <motion.div key={item.name} variants={fadeInUp}>
                    <Link 
                      to={item.link}
                      className="flex items-start gap-3 p-4 rounded-xl bg-muted/50 hover:bg-purple-500/10 border border-transparent hover:border-purple-500/20 transition-all group"
                    >
                      <Zap className="h-5 w-5 text-amber-500 mt-0.5" />
                      <div>
                        <span className="text-foreground group-hover:text-purple-500 transition-colors font-medium">{item.name}</span>
                        <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </Section>

          <Separator className="my-16" />

          {/* Section 8: Side Effects */}
          <Section id="side-effects" className="mb-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <span className="text-purple-500 font-medium text-sm uppercase tracking-wider">Chapter Eight</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                The <span className="text-purple-500">Side Effects</span> Chat (Let's Be Honest)
              </h2>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Okay, let's address the elephant in the room. You've seen the horror stories. 
                  The droopy eyelids. The frozen faces. The celebrities who look like they're 
                  perpetually startled by invisible ghosts. These things can happen. We'd be lying 
                  if we said otherwise.
                </p>

                <p className="text-lg leading-relaxed text-muted-foreground mt-6">
                  <strong className="text-foreground">But here's what nobody tells you:</strong> they go away.
                </p>
              </div>

              <Card className="my-8 border-amber-500/20 bg-gradient-to-br from-amber-500/5 to-transparent">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-amber-500" />
                    The 20% Rule
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Side effects from Botox typically wear off at a rate of approximately <strong className="text-foreground">20% per month</strong>. 
                    So even in the worst-case scenario, you're not stuck with anything permanent. That droopy 
                    brow? Give it a few weeks. That slightly asymmetrical smile? It's sorting itself out as we speak.
                  </p>
                </CardContent>
              </Card>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Here's something else we should probably mention: every single practitioner at 
                  Cosmedocs has had Botox. We've all given it to each other. We've all experienced 
                  the occasional complication ourselves. A slight droop here, an uneven result there. 
                  And you know what? We laughed about it. Fixed it. Moved on.
                </p>

                <p className="text-lg leading-relaxed text-muted-foreground mt-6">
                  If you can't laugh at a temporarily wonky eyebrow, this might not be for you. 
                  And that's perfectly fine. But for everyone else? These minor hiccups are part 
                  of the journey, and they're temporary.
                </p>
              </div>

              {/* Meme: Side effects timeline */}
              <div className="relative my-8">
                <img 
                  src={sideEffectsTimelineImage} 
                  alt="Comic showing side effects disappearing week by week ending with thumbs up"
                  className="w-full rounded-2xl shadow-lg"
                />
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                  It gets better, we promise! 👍
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <FunFactCard title="Common (and Temporary)" icon={Clock}>
                  Minor bruising, slight headache, temporary asymmetry. All usually resolve within 
                  days to weeks without any intervention needed.
                </FunFactCard>
                
                <FunFactCard title="Rare (and Still Temporary)" icon={Shield}>
                  Drooping of the eyelid or brow can occur in less than 1% of cases with experienced 
                  practitioners. Even then, it resolves as the Botox wears off.
                </FunFactCard>
              </div>
            </motion.div>
          </Section>

          <Separator className="my-16" />

          {/* Section 9: The Friends Factor */}
          <Section id="friends-factor" className="mb-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <span className="text-purple-500 font-medium text-sm uppercase tracking-wider">Chapter Nine</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                Your Friends Who Say <span className="text-purple-500">"Nobody Needs This"</span>
              </h2>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  You know the ones. They cluck disapprovingly when you mention you're considering 
                  aesthetic treatments. "You don't need that," they say, sipping their third glass 
                  of wine while visibly not having slept properly since 2019.
                </p>

                <p className="text-lg leading-relaxed text-muted-foreground mt-6">
                  Let me paint a picture. These are often the same people who've "accepted" ageing 
                  in the way someone accepts that their gym membership has gone unused for eighteen 
                  months. It's not a philosophical stance – it's resignation dressed up as wisdom.
                </p>
              </div>

              <img 
                src={communityImage} 
                alt="Diverse confident people looking refreshed"
                className="w-full rounded-2xl my-8 shadow-lg"
              />

              {/* Meme: Sceptical friend secretly googling */}
              <div className="relative my-8">
                <img 
                  src={scepticalFriendImage} 
                  alt="Cartoon of sceptical friend secretly researching Botox after seeing results"
                  className="w-full rounded-2xl shadow-lg"
                />
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                  We've all been there... 🤫
                </div>
              </div>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Here's what's interesting: when you do have Botox and you look refreshed and 
                  well-rested, something curious happens. Those same friends start asking questions. 
                  "You look different... good different. What's your secret?" And before you know it, 
                  they're googling "Botox London" at midnight, just like you did.
                </p>

                <p className="text-lg leading-relaxed text-muted-foreground mt-6">
                  <strong className="text-foreground">Having Botox changes your friends too.</strong> 
                  Not because you're setting unrealistic standards, but because you're demonstrating 
                  that looking after yourself isn't vanity – it's self-care. And that can be quietly 
                  revolutionary.
                </p>
              </div>

              <QuoteCallout>
                The best Botox doesn't make people say "Have you had work done?" It makes them say 
                "You look amazing lately – what's your secret?"
              </QuoteCallout>
            </motion.div>
          </Section>

          <Separator className="my-16" />

          {/* Section 10: The Bottom Line */}
          <Section id="bottom-line" className="mb-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <span className="text-purple-500 font-medium text-sm uppercase tracking-wider">The Final Chapter</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                So, <span className="text-purple-500">What Now?</span>
              </h2>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Look, you've made it through this entire guide. That tells me two things: you're 
                  genuinely interested, and you have the patience of a saint. Both excellent qualities 
                  in a potential client.
                </p>

                <p className="text-lg leading-relaxed text-muted-foreground mt-6">
                  The decision to have Botox is, ultimately, yours. We can't make it for you. We 
                  wouldn't want to. But what we can do is tell you this: if you've been on the fence 
                  for months or even years, fighting some inexplicable resistance to something that 
                  millions of people do safely and happily, maybe it's time to question that resistance.
                </p>

                <p className="text-lg leading-relaxed text-muted-foreground mt-6">
                  Is it fear? We've addressed that – the safety profile is excellent.
                </p>

                <p className="text-lg leading-relaxed text-muted-foreground mt-6">
                  Is it cost? Check out our{" "}
                  <Link to="/botox-cost-london" className="text-purple-500 hover:text-purple-600 underline">
                    pricing page
                  </Link>{" "}
                  – it's more accessible than you might think.
                </p>

                <p className="text-lg leading-relaxed text-muted-foreground mt-6">
                  Is it worry about looking "done"? That's about choosing the right practitioner, 
                  and you've already found one of the best.
                </p>

                <p className="text-lg leading-relaxed text-muted-foreground mt-6">
                  <strong className="text-foreground">
                    The fountain of youth might be a myth. But looking and feeling fresh? That's 
                    entirely achievable. And you deserve it.
                  </strong>
                </p>
              </div>
            </motion.div>
          </Section>

          {/* CTA Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="relative mt-20 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-purple-500/10 via-primary/5 to-amber-500/10 border border-purple-500/20 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
            
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 mb-6">
                <Heart className="h-4 w-4 text-purple-500" />
                <span className="text-sm font-medium text-purple-500">Ready When You Are</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Your Journey Starts With a Conversation
              </h3>
              
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                No pressure. No hard sell. Just an honest discussion about what you want to achieve 
                and whether Botox is right for you. Book a consultation and let's chat.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="group" asChild>
                  <Link to="/contact">
                    Book Your Consultation
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/botox-faqs">
                    Read FAQs
                  </Link>
                </Button>
              </div>

              <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span>Free initial consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span>No obligation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span>Harley Street clinic</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Related Links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mt-20"
          >
            <h3 className="text-xl font-semibold mb-6">Continue Your Research</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "Botox FAQs", link: "/botox-faqs", desc: "Quick answers to common questions" },
                { title: "Botox Pricing", link: "/treatments/botox-cost/", desc: "Transparent costs explained" },
                { title: "Our Team", link: "/our-team/", desc: "Meet the doctors" },
                { title: "Before & After", link: "/before-after/", desc: "Real results, real people" },
                { title: "Testimonials", link: "/testimonials/", desc: "What our clients say" },
                { title: "Book Now", link: "/contact/", desc: "Ready to start?" },
              ].map((item) => (
                <motion.div key={item.title} variants={fadeInUp}>
                  <Link 
                    to={item.link}
                    className="block p-4 rounded-xl bg-muted/50 hover:bg-purple-500/10 border border-transparent hover:border-purple-500/20 transition-all group"
                  >
                    <h4 className="font-medium text-foreground group-hover:text-purple-500 transition-colors">{item.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </article>

        {/* SEO Hidden Content */}
        <div className="sr-only">
          <h2>Comprehensive Botox Treatment Information for London Patients</h2>
          <p>
            Botox treatment in London has become one of the most sought-after aesthetic procedures, 
            with thousands of patients choosing clinics on Harley Street and throughout the capital 
            for their anti-wrinkle injections. The botulinum toxin type A, commonly known by its 
            brand name Botox, works by temporarily relaxing facial muscles to reduce the appearance 
            of dynamic wrinkles caused by repetitive expressions. Cosmedocs London offers expert 
            Botox administration with nearly two decades of experience and over one million 
            injections performed per doctor.
          </p>
          <p>
            The safety profile of Botox for cosmetic use is well-established through extensive 
            clinical trials and decades of use in both medical and aesthetic applications. When 
            administered by qualified medical professionals such as the team at Cosmedocs, side 
            effects are typically minor and temporary, with most patients experiencing little to 
            no downtime following their treatment. Common treatment areas include forehead lines, 
            frown lines between the eyebrows, crow's feet around the eyes, and various other 
            facial and body applications including jaw slimming, hyperhidrosis treatment, and 
            migraine management.
          </p>
          <p>
            Choosing the right practitioner for Botox in London is crucial for achieving natural, 
            subtle results that enhance rather than alter one's appearance. Cosmedocs practitioners 
            are not only highly experienced but also serve as lead trainers at the Harley Street 
            Institute, one of the world's most prestigious aesthetic training academies. This 
            combination of extensive hands-on experience and educational excellence ensures that 
            patients receive treatment from true experts in the field of aesthetic medicine.
          </p>
          <p>
            The longevity of Botox results typically ranges from three to four months, with many 
            patients finding that regular treatments lead to longer-lasting effects over time. 
            The procedure itself takes approximately ten to fifteen minutes, making it an ideal 
            lunchtime treatment for busy London professionals. Results become visible within three 
            to five days, with full effects apparent by the two-week mark.
          </p>
          <p>
            Understanding the cost of Botox in London requires consideration of various factors 
            including the expertise of the practitioner, the quality of the product used, and 
            the number of areas being treated. While pricing varies across clinics, investing 
            in experienced practitioners typically results in superior outcomes and reduced risk 
            of complications. Cosmedocs offers transparent pricing and complimentary consultations 
            to help patients understand their options and make informed decisions about their 
            aesthetic journey.
          </p>
        </div>
      </main>
    </>
  );
};

export default UltimateBotoxGuide;
