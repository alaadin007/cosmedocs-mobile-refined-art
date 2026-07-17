import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Radio } from "lucide-react";
import { newsPosts } from "@/data/newsPosts";
import { generateSEOMetadata } from "@/utils/seo";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

export default function NewsHub() {
  const seo = generateSEOMetadata(
    "Industry Desk — Aesthetic Medicine News & Rulings | Cosmedocs",
    "Short, doctor-reviewed notes on the aesthetic medicine industry — regulator rulings, new evidence, product recalls and clinical developments. Updated weekly.",
    "/news/"
  );

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} data-rh="true" />
        <link rel="canonical" href="https://www.cosmedocs.com/news/" data-rh="true" />
      </Helmet>

      <main className="min-h-screen bg-black text-white">
        <section className="px-5 sm:px-8 pt-16 pb-10 max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <Radio className="w-4 h-4 text-[#C9A050]" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#C9A050]">
              Industry Desk · Updated weekly
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-extralight leading-tight mb-4">
            The aesthetic medicine <span className="text-[#C9A050]">news brief</span>.
          </h1>
          <p className="text-white/60 text-base sm:text-lg font-light max-w-2xl">
            Short, cited notes on what's actually happening in the industry — regulator
            rulings, new evidence, product news. Written by the Cosmedocs clinical team.
          </p>
        </section>

        <section className="px-5 sm:px-8 pb-24 max-w-4xl mx-auto">
          <div className="divide-y divide-white/[0.08] border-t border-white/[0.08]">
            {newsPosts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="py-8"
              >
                <Link to={`/news/${post.slug}/`} className="group block">
                  <div className="flex items-center gap-3 mb-3 text-[10px] tracking-[0.25em] uppercase">
                    <span className="text-[#C9A050]">{post.category}</span>
                    <span className="text-white/30">·</span>
                    <time className="text-white/40" dateTime={post.date}>{formatDate(post.date)}</time>
                    <span className="text-white/30">·</span>
                    <span className="text-white/40">{post.readTime}</span>
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-light leading-snug mb-2 group-hover:text-[#C9A050] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-white/60 font-light leading-relaxed">{post.dek}</p>
                  <span className="inline-flex items-center gap-2 mt-4 text-[#C9A050]/80 text-sm group-hover:text-[#C9A050]">
                    Read the note <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.article>
            ))}
          </div>

          <p className="text-white/30 text-xs mt-12 italic">
            Our aesthetics is invisible art. Our commentary is not — because clarity protects patients.
          </p>
        </section>
      </main>
    </>
  );
}
