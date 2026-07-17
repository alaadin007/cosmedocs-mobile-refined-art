import { Helmet } from "react-helmet-async";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, Radio } from "lucide-react";
import { getNewsPost, newsPosts } from "@/data/newsPosts";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

export default function NewsPost() {
  const { slug = "" } = useParams();
  const post = getNewsPost(slug);
  if (!post) return <Navigate to="/news/" replace />;

  const url = `https://www.cosmedocs.com/news/${post.slug}/`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: post.title,
    description: post.dek,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: "Cosmedocs Industry Desk" },
    publisher: {
      "@type": "Organization",
      name: "Cosmedocs",
      logo: { "@type": "ImageObject", url: "https://www.cosmedocs.com/favicon.ico" },
    },
    mainEntityOfPage: url,
  };

  const others = newsPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{post.title} | Cosmedocs Industry Desk</title>
        <meta name="description" content={post.dek} data-rh="true" />
        <link rel="canonical" href={url} data-rh="true" />
        <meta property="og:type" content="article" data-rh="true" />
        <meta property="article:published_time" content={post.date} data-rh="true" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <main className="min-h-screen bg-black text-white">
        <article className="px-5 sm:px-8 pt-16 pb-20 max-w-3xl mx-auto">
          <Link
            to="/news/"
            className="inline-flex items-center gap-2 text-white/50 hover:text-[#C9A050] text-xs tracking-[0.25em] uppercase mb-8"
          >
            <ArrowLeft className="w-3 h-3" /> Industry Desk
          </Link>

          <div className="flex items-center gap-3 mb-4 text-[10px] tracking-[0.25em] uppercase">
            <Radio className="w-3 h-3 text-[#C9A050]" />
            <span className="text-[#C9A050]">{post.category}</span>
            <span className="text-white/30">·</span>
            <time className="text-white/40" dateTime={post.date}>{formatDate(post.date)}</time>
            <span className="text-white/30">·</span>
            <span className="text-white/40">{post.readTime}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extralight leading-tight mb-5">
            {post.title}
          </h1>
          <p className="text-white/70 text-lg font-light leading-relaxed mb-8">{post.dek}</p>

          <div className="text-xs text-white/40 border-y border-white/[0.08] py-3 mb-10 flex items-center justify-between flex-wrap gap-2">
            <span>By {post.author}</span>
            {post.sourceUrl ? (
              <a
                href={post.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#C9A050]/80 hover:text-[#C9A050]"
              >
                Source: {post.sourceLabel} <ExternalLink className="w-3 h-3" />
              </a>
            ) : (
              <span>{post.sourceLabel}</span>
            )}
          </div>

          <div className="space-y-5 text-white/80 font-light leading-relaxed text-[17px]">
            {post.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {post.takeaway && (
            <blockquote className="mt-10 border-l-2 border-[#C9A050] pl-5 py-2 italic text-white/85 text-lg font-light">
              "{post.takeaway}"
              <footer className="not-italic text-xs tracking-[0.25em] uppercase text-[#C9A050] mt-2">
                — The Cosmedocs view
              </footer>
            </blockquote>
          )}

          {others.length > 0 && (
            <section className="mt-16 border-t border-white/[0.08] pt-8">
              <h2 className="text-[10px] tracking-[0.3em] uppercase text-white/50 mb-5">More from the desk</h2>
              <ul className="space-y-4">
                {others.map((o) => (
                  <li key={o.slug}>
                    <Link
                      to={`/news/${o.slug}/`}
                      className="group block"
                    >
                      <span className="text-[10px] tracking-[0.25em] uppercase text-[#C9A050]/80">{o.category}</span>
                      <p className="font-serif text-lg font-light group-hover:text-[#C9A050] transition-colors">
                        {o.title}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </article>
      </main>
    </>
  );
}
