import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { generateSEOMetadata } from "@/utils/seo";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface Chapter {
  id: string;
  title: string;
  subtitle: string;
}

const prefaceSubchapters = [
  "Introduction",
  "The Art of Depth",
  "The Language of Layers",
  "From Anatomy to Artistry",
  "Acknowledging the Great Minds",
  "The Harley Street Institute Way",
  "Experience Our Philosophy",
];

const chapters: Chapter[] = [
  {
    id: "chapter-1",
    title: "Chapter 1",
    subtitle: "Choosing Clients, Ethical Selling, and the Art of Assessment",
  },
  { id: "chapter-2", title: "Chapter 2", subtitle: "The Epidermis" },
  { id: "chapter-3", title: "Chapter 3", subtitle: "The Dermis" },
  {
    id: "chapter-4",
    title: "Chapter 4",
    subtitle: "The Subcutaneous Layer",
  },
  { id: "chapter-5", title: "Chapter 5", subtitle: "Medical Rhinoplasty" },
  { id: "chapter-6", title: "Chapter 6", subtitle: "Tear Trough" },
  {
    id: "chapter-7",
    title: "Chapter 7",
    subtitle: "The Cheek — The Power Below the Trough",
  },
];

export default function AestheticTreatmentsMadeEasy() {
  const [activeSection, setActiveSection] = useState("preface");
  const [prefaceOpen, setPrefaceOpen] = useState(true);

  const seo = generateSEOMetadata(
    "Aesthetic Treatments Made Easy - CosmeDocs Educational Guide",
    "Comprehensive guide to aesthetic treatments and facial anatomy. Learn the science behind skin rejuvenation, dermal fillers, and non-surgical procedures from leading aesthetic practitioners.",
    "/aesthetic-treatments-made-easy"
  );

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={seo.canonical} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content={seo.canonical} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        
        {/* Additional SEO keywords */}
        <meta name="keywords" content="aesthetic treatments, aesthetic procedures, facial anatomy, skin rejuvenation, dermal fillers, non-surgical procedures, cosmetic medicine, aesthetic education, beauty treatments, anti-ageing treatments" />
        
        {/* Structured data for educational content */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Book",
            name: "Aesthetic Treatments Made Easy",
            author: {
              "@type": "Organization",
              name: "CosmeDocs",
            },
            description: seo.description,
            genre: "Medical Education",
            inLanguage: "en-GB",
          })}
        </script>
      </Helmet>

      <div className="flex min-h-screen bg-background">
        {/* Sidebar */}
        <aside className="w-64 border-r border-border bg-card sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="p-4">
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="h-5 w-5" />
              <h2 className="font-semibold text-lg">Aesthetic Talk</h2>
            </div>

            {/* Preface Section */}
            <Collapsible open={prefaceOpen} onOpenChange={setPrefaceOpen}>
              <CollapsibleTrigger asChild>
                <button
                  className={`w-full text-left px-4 py-3 rounded-lg mb-2 transition-colors ${
                    activeSection === "preface"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary hover:bg-accent"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold">Preface</div>
                      <div className="text-xs opacity-80">The Philosophy</div>
                    </div>
                    {prefaceOpen ? (
                      <ChevronLeft className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                  </div>
                </button>
              </CollapsibleTrigger>

              <CollapsibleContent>
                <div className="space-y-1 ml-2">
                  {prefaceSubchapters.map((subchapter) => (
                    <button
                      key={subchapter}
                      onClick={() => setActiveSection(subchapter.toLowerCase())}
                      className={`w-full text-left px-3 py-2 text-sm rounded transition-colors ${
                        activeSection === subchapter.toLowerCase()
                          ? "bg-accent text-accent-foreground"
                          : "hover:bg-muted"
                      }`}
                    >
                      {subchapter}
                    </button>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>

            {/* Chapters */}
            <div className="space-y-1 mt-4">
              {chapters.map((chapter) => (
                <button
                  key={chapter.id}
                  onClick={() => setActiveSection(chapter.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    activeSection === chapter.id
                      ? "bg-accent"
                      : "hover:bg-muted"
                  }`}
                >
                  <div className="font-semibold text-sm">{chapter.title}</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {chapter.subtitle}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <div className="max-w-4xl mx-auto px-8 py-12">
            {/* Back Button */}
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
              Back to Home
            </Link>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Aesthetic Treatments Made Easy
            </h1>
            <p className="text-xl text-muted-foreground italic mb-6">
              Don't believe advice, trust education
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
              <span>By CosmeDocs Team</span>
              <span>•</span>
              <span>Educational Guide</span>
              <span>•</span>
              <span>12 min read</span>
            </div>

            {/* Preface Content */}
            <article className="prose prose-invert prose-lg max-w-none">
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-foreground">
                  Preface: The Philosophy — Why You Need to Read This
                </h2>
                
                <div className="space-y-6 text-foreground/90 leading-relaxed">
                  <p>
                    In an age of endless "new" — new lasers, new devices, new trends — it's easy to lose sight of the one thing that never changes: human anatomy.
                  </p>

                  <p>
                    Every few months, a new technology arrives promising miracles — high-energy ultrasound, radiofrequency, "green lasers," even facials marketed as collagen boosters. The names are modern, the adverts are beautiful, but the biology underneath remains exactly the same.
                  </p>

                  <p className="font-semibold text-lg text-foreground">
                    If you don't understand your skin, you'll always be sold something for it.
                    <br />
                    But if you understand the layers beneath, you'll know what truly needs to be restored — and what never did.
                  </p>

                  <p>
                    This book, or rather this journey, is not about the next treatment.
                    It's about the why behind every result.
                  </p>

                  <p>
                    At CosmeDocs, our philosophy has always been simple:
                  </p>

                  <blockquote className="border-l-4 border-primary pl-6 italic text-xl my-8">
                    "You cannot restore what you do not understand."
                  </blockquote>

                  <p>
                    When you understand your anatomy — your epidermis, dermis, fat pads, ligaments, and muscles — you begin to see where time has taken, and how to give back wisely.
                  </p>

                  <p>
                    Every needle, every device, every skincare product is only as intelligent as the hand and the mind behind it.
                    And that's where our story begins.
                  </p>

                  <p>
                    This isn't written for doctors alone, but for anyone who wants to understand beauty beyond marketing.
                    Because once you do, you'll never fall for false promises again.
                    You'll start asking the right questions — and that's where true rejuvenation begins.
                  </p>

                  <p>
                    So before we talk about treatments, let's talk about you — your skin, your structure, and your story beneath the surface.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-foreground">
                  Introduction — The Modern Face of Aesthetics
                </h2>

                <div className="space-y-6 text-foreground/90 leading-relaxed">
                  <p>
                    Aesthetics today has become both more advanced and more confusing than ever.
                    Every clinic promises "natural," every treatment claims to "lift," and every year brings another technology that supposedly changes everything.
                  </p>

                  <p>
                    Yet when you look closely, the most beautiful, timeless results all share one thing: simplicity guided by understanding.
                  </p>

                  <p>
                    We've reached a point where aesthetics is no longer about chasing youth, but about restoring harmony.
                    The face is not a collection of parts — it's a system of relationships.
                    Your skin, fat pads, ligaments, muscles, and bones all work together like the architecture of a house. When one element weakens, the others shift to compensate.
                    Treating just one without understanding the rest is like painting over cracks in a wall — the cracks will always return.
                  </p>

                  <h3 className="text-2xl font-semibold mt-10 mb-4 text-foreground">
                    The Shift From Treatment to Understanding
                  </h3>

                  <p>
                    A decade ago, most people came to clinics asking for Botox or filler.
                    Today, they ask for "skin tightening," "lifting," or "glow."
                    But few ask why their skin became loose, or what "lifting" actually means.
                  </p>

                  <p>
                    That "why" is the gap we aim to fill.
                    True restoration doesn't start with what's trending — it starts with knowing what's lost.
                    That means going back to the layers:
                  </p>

                  <ul className="list-none space-y-3 my-6 pl-4">
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>The epidermis, where youth begins with renewal.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>The dermis, where collagen and elasticity form the skin's architecture.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>The fat pads, which sculpt our features.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>The ligaments, which hold it all together.</span>
                    </li>
                  </ul>

                  <p>
                    Everything you see on the surface — fine lines, shadows, folds — is just an expression of what's happening underneath.
                  </p>

                  <h3 className="text-2xl font-semibold mt-10 mb-4 text-foreground">
                    Beyond Marketing, Back to Medicine
                  </h3>

                  <p>
                    Modern marketing often turns aesthetic medicine into entertainment — before-and-after photos, viral gadgets, miracle creams.
                    But medicine, even when it's aesthetic, is still medicine.
                    It demands thought, anatomy, and respect.
                  </p>

                  <p>
                    At CosmeDocs, we see beauty not as an illusion to create, but as balance to restore.
                    This is not anti-technology — it's pro-wisdom.
                    Devices, injectables, and treatments all have their place — but only when they make anatomical sense.
                  </p>

                  <h3 className="text-2xl font-semibold mt-10 mb-4 text-foreground">
                    The Promise of This Journey
                  </h3>

                  <p>
                    As you move through each chapter, you'll begin to see patterns — how everything in your face connects.
                    You'll learn that the "problem areas" you notice are rarely the true problem.
                    That "nasolabial fold" might come from cheek volume loss.
                    Those "eye bags" might be from ligament relaxation.
                    And sometimes, the best treatment isn't a filler or a laser — it's understanding when to do nothing at all.
                  </p>

                  <p>
                    This journey is designed to help you think like a practitioner, even if you're a patient.
                    Because when you understand your anatomy, you'll make better choices — and better choices always lead to better results.
                  </p>
                </div>
              </section>

              {/* SEO Hidden Content */}
              <div className="sr-only">
                <h2>Comprehensive Guide to Aesthetic Treatments</h2>
                <p>
                  Understanding aesthetic treatments begins with a solid foundation in facial anatomy and skin physiology. This educational guide covers everything from basic skin layers to advanced non-surgical aesthetic procedures. Whether you're considering dermal fillers, anti-wrinkle treatments, or skin rejuvenation therapies, understanding the science behind these treatments is essential for making informed decisions.
                </p>
                <h3>Essential Knowledge for Aesthetic Treatment Patients</h3>
                <p>
                  Modern aesthetic medicine offers numerous treatment options for facial rejuvenation, including Botox injections, hyaluronic acid fillers, polynucleotide treatments, and advanced skin boosters. Each treatment targets specific layers of the skin and underlying tissues. The epidermis provides the protective barrier, whilst the dermis contains collagen and elastin fibres that maintain skin firmness. Deeper still, subcutaneous fat pads provide facial volume and contour.
                </p>
                <h3>Non-Surgical Aesthetic Procedures Explained</h3>
                <p>
                  Non-surgical facial treatments have revolutionised aesthetic medicine. From non-surgical rhinoplasty to liquid facelifts, these procedures offer natural-looking results without the downtime of surgery. Understanding the anatomy of facial fat compartments, ligamentous structures, and muscle dynamics is crucial for achieving optimal aesthetic outcomes. Treatments such as tear trough filler, cheek augmentation, and jawline contouring require precise anatomical knowledge to ensure both safety and efficacy.
                </p>
                <h3>The Science of Skin Rejuvenation</h3>
                <p>
                  Skin rejuvenation treatments work at multiple levels. Chemical peels target the epidermis, microneedling stimulates dermal collagen production, and injectable treatments restore volume in deeper tissue planes. Medical-grade skincare products containing retinoids, vitamin C, and peptides complement these treatments by improving skin texture and tone. Understanding how these treatments interact with your skin's natural healing processes helps you maintain long-term aesthetic results.
                </p>
              </div>
            </article>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-12 pt-8 border-t border-border">
              <Button variant="outline" disabled>
                <ChevronLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              <Button>
                Next Chapter
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
