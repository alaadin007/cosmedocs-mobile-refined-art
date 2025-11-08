import { useState, useEffect, useRef } from "react";
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
  { id: "preface-intro", title: "Introduction" },
  { id: "art-of-depth", title: "The Art of Depth" },
  { id: "apple-analogy", title: "The Apple Analogy" },
  { id: "energy-devices", title: "When Energy Devices Help" },
  { id: "balance", title: "The Balance Between Skin and Structure" },
  { id: "simpler-words", title: "In Simpler Words" },
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
  const [activeSection, setActiveSection] = useState("preface-intro");
  const [prefaceOpen, setPrefaceOpen] = useState(true);
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Auto-scroll sidebar and update active section based on content scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        ...prefaceSubchapters.map(sub => sub.id),
        ...chapters.map(ch => ch.id)
      ];

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is in viewport (with offset for header)
          if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-scroll sidebar to active section
  useEffect(() => {
    const activeButton = document.querySelector(`[data-section="${activeSection}"]`);
    if (activeButton && sidebarRef.current) {
      activeButton.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [activeSection]);

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

      <div className="flex min-h-screen bg-gray-50">
        {/* Sidebar */}
        <aside ref={sidebarRef} className="w-64 border-r border-gray-200 bg-white sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="p-4">
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="h-5 w-5 text-gray-700" />
              <h2 className="font-semibold text-lg text-gray-900">Aesthetic Talk</h2>
            </div>

            {/* Preface Section */}
            <Collapsible open={prefaceOpen} onOpenChange={setPrefaceOpen}>
              <CollapsibleTrigger asChild>
                <button
                  className={`w-full text-left px-4 py-3 rounded-lg mb-2 transition-colors ${
                    prefaceSubchapters.some(sub => sub.id === activeSection)
                      ? "bg-gray-900 text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold">Preface</div>
                      <div className="text-xs opacity-80">The Art of Depth</div>
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
                      key={subchapter.id}
                      data-section={subchapter.id}
                      onClick={() => {
                        setActiveSection(subchapter.id);
                        document.getElementById(subchapter.id)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className={`w-full text-left px-3 py-2 text-sm rounded transition-colors ${
                        activeSection === subchapter.id
                          ? "bg-gray-200 text-gray-900 font-medium"
                          : "hover:bg-gray-100 text-gray-700"
                      }`}
                    >
                      {subchapter.title}
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
                  data-section={chapter.id}
                  onClick={() => {
                    setActiveSection(chapter.id);
                    document.getElementById(chapter.id)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    activeSection === chapter.id
                      ? "bg-gray-200 text-gray-900"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
                >
                  <div className="font-semibold text-sm">{chapter.title}</div>
                  <div className="text-xs text-gray-600 mt-1">
                    {chapter.subtitle}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-white">
          <div className="max-w-4xl mx-auto px-8 py-12">
            {/* Back Button */}
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
              Back to Home
            </Link>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Aesthetic Treatments Made Easy
            </h1>
            <p className="text-xl text-gray-600 italic mb-6">
              Don't believe advice, trust education
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-8 pb-8 border-b border-gray-200">
              <span>By Dr. Ahmed Haq & Ai Team</span>
              <span>•</span>
              <span>Educational Guide</span>
              <span>•</span>
              <span>15 min read</span>
            </div>

            {/* Preface Content */}
            <article className="prose prose-gray prose-lg max-w-none">
              <section id="preface-intro" className="mb-16 scroll-mt-20">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  Preface: The Art of Depth — Why Depth Defines Natural Results
                </h2>
                
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    When most people think of ageing, they think of the skin — lines, folds, wrinkles, texture.
                    But the truth is, skin is rarely the problem; it's the symptom.
                  </p>

                  <p className="font-semibold text-lg text-gray-900">
                    The true story of ageing lies beneath.
                  </p>

                  <p>
                    To understand this, I often ask patients to imagine something simple: an apple.
                  </p>
                </div>
              </section>

              <section id="apple-analogy" className="mb-16 scroll-mt-20">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  The Apple Analogy
                </h3>

                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    The skin of the apple is your face — thin, delicate, and only about two millimetres thick. Beneath it lies the yellow flesh — the fat pads and support tissue that give the apple its shape, firmness, and lift. Deep inside sits the core, much like your bone structure and ligaments — the framework that holds everything together.
                  </p>

                  <p>
                    When the apple is fresh, the surface looks smooth and tight because the flesh underneath is full and hydrated.
                    But as it begins to lose volume and moisture, the skin starts to wrinkle and sink.
                  </p>

                  <p>
                    Now, imagine trying to fix that apple's surface by heating or polishing its skin from the outside.
                    You can't restore its plumpness by treating only the peel — because the problem is deeper.
                  </p>

                  <p className="font-semibold text-gray-900">
                    The same is true for your face.
                  </p>
                </div>
              </section>

              <section id="energy-devices" className="mb-16 scroll-mt-20">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  When Energy Devices Help — and When They Don't
                </h3>

                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    Lasers, radiofrequency, and ultrasound devices can be powerful tools — but only when used for the right reason.
                    If your skin is genuinely thin or loose, resurfacing or stimulating collagen can help restore its texture and firmness.
                    That's treating the skin layer — the "red peel" of the apple.
                  </p>

                  <p>
                    But if your face has lost its natural fullness, your support layers — the yellow part — are the issue.
                    No amount of energy from above will replace lost fat or restore structure.
                    That's where volume restoration through filler, bio-stimulants, or regenerative treatments becomes the logical step.
                  </p>

                  <p className="font-semibold text-gray-900">
                    At CosmeDocs, we don't choose treatments by name — we choose them by depth.
                  </p>

                  <p>
                    Every tool we use has a layer it's meant to serve.
                    The key to natural results lies not in what you use, but how deep you understand where to use it.
                  </p>
                </div>
              </section>

              <section id="balance" className="mb-16 scroll-mt-20">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  The Balance Between Skin and Structure
                </h3>

                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    When your surface treatments and your volume restoration are in harmony, the result is seamless.
                    The skin glows because it sits on something stable.
                    The volume looks natural because the skin above it is healthy.
                  </p>

                  <p>
                    Most overdone results happen when practitioners chase "lift" at the wrong depth — adding too much where the foundation was never restored.
                    That's why our philosophy is layered:
                  </p>

                  <ul className="list-none space-y-3 my-6 pl-0">
                    <li className="flex items-start gap-3">
                      <span className="text-gray-900 font-bold text-xl">•</span>
                      <span><strong className="text-gray-900">Restore structure first.</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-gray-900 font-bold text-xl">•</span>
                      <span><strong className="text-gray-900">Refine the surface next.</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-gray-900 font-bold text-xl">•</span>
                      <span><strong className="text-gray-900">Respect anatomy always.</strong></span>
                    </li>
                  </ul>
                </div>
              </section>

              <section id="simpler-words" className="mb-16 scroll-mt-20">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  In Simpler Words
                </h3>

                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p className="text-xl italic text-gray-600">
                    If the skin is the story you see,<br />
                    the depth is the truth beneath it.
                  </p>

                  <p>
                    At CosmeDocs, we work from the bottom up — not the top down.
                    Because no device, no cream, and no laser can replace what time has taken from below.
                    But when we rebuild intelligently, the skin no longer needs to be "lifted" — it naturally rises to where it once belonged.
                  </p>

                  <blockquote className="border-l-4 border-gray-900 pl-6 italic text-xl my-8 text-gray-800">
                    "You cannot restore what you do not understand."
                  </blockquote>
                </div>
              </section>

              <section id="art-of-depth" className="mb-16 scroll-mt-20">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  Introduction — The Modern Face of Aesthetics
                </h2>

                <div className="space-y-6 text-gray-700 leading-relaxed">
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
                </div>
              </section>

              {/* Placeholder for remaining chapters */}
              {chapters.map((chapter) => (
                <section key={chapter.id} id={chapter.id} className="mb-16 scroll-mt-20">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">
                    {chapter.title}: {chapter.subtitle}
                  </h2>
                  <p className="text-gray-600 italic">Content coming soon...</p>
                </section>
              ))}

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
            <div className="flex justify-between mt-12 pt-8 border-t border-gray-200">
              <Button variant="outline" disabled className="border-gray-300 text-gray-400">
                <ChevronLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              <Button className="bg-gray-900 hover:bg-gray-800 text-white">
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
