import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ExternalLink, Newspaper } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PressArticle {
  title: string;
  date: string;
  excerpt: string;
  readMoreUrl: string;
  source: string;
  imageUrl?: string;
  imageAlt?: string;
}

const pressArticles: PressArticle[] = [
  {
    title: "Cosmetic Surgery Abroad",
    date: "4 August 2014",
    excerpt: "Holidaymakers jetting off abroad this summer will be packing their travel essentials – but an appointment card for the plastic surgeon is unlikely to be slipped into most suitcases. Yet for an increasing number of people, combining a holiday with cosmetic procedures has become the norm.",
    readMoreUrl: "http://www.theguardian.com/lifeandstyle/2014/aug/05/cosmetic-surgery-abroad-worth-risk",
    source: "The Guardian",
    imageUrl: "https://phpstack-341672-1064493.cloudwaysapps.com/images/cosmetic-surgery-abroad.jpg",
    imageAlt: "Newspaper coverage of cosmetic surgery abroad",
  },
  {
    title: "Should Cosmetic Tattoos Be Made Available on the NHS?",
    date: "4 August 2014",
    excerpt: "Modern tattoos that hide operation scars and skin conditions are incredibly realistic – and help patients heal deep psychological wounds. Is it time they were made more available on the NHS?",
    readMoreUrl: "http://www.theguardian.com/lifeandstyle/2014/jul/06/cosmetic-tattoos-nhs",
    source: "The Guardian",
    imageUrl: "https://phpstack-341672-1064493.cloudwaysapps.com/wp-content/uploads/2020/08/guardian-newspaper.jpg",
    imageAlt: "CosmeDocs cosmetic clinic mentioned by the Guardian",
  },
  {
    title: "3 Facials to Soothe Summer Skin",
    date: "4 August 2014",
    excerpt: "As summer wraps up, your skin might need a treat in order to recover from the damage harsh rays can do. So whether you're just looking for something to improve the surface or a treatment that goes a little deeper than usual.",
    readMoreUrl: "http://www.theguardian.com/lifeandstyle/2014/aug/05/cosmetic-surgery-abroad-worth-risk",
    source: "Hello! Magazine",
    imageUrl: "https://phpstack-341672-1064493.cloudwaysapps.com/wp-content/uploads/2020/08/soothe-summer-skin.jpg",
    imageAlt: "Facial treatments to soothe summer skin",
  },
  {
    title: "Top Tummy-Toning Tips",
    date: "4 August 2014",
    excerpt: "As the sun continues to shine, the pressure is on to tone up your tum. Whether you're planning a beach break abroad or a family trip to your local lido, there is no escaping bikini season.",
    readMoreUrl: "http://www.express.co.uk/life-style/diets/493800/Lesley-Reynold-s-top-tummy-toning-tips",
    source: "Daily Express",
    imageUrl: "https://phpstack-341672-1064493.cloudwaysapps.com/wp-content/uploads/2020/08/tummy-toning-tips.jpg",
    imageAlt: "Tummy toning tips by CosmeDocs experts",
  },
  {
    title: "Butt Lifts on the Rise",
    date: "4 August 2014",
    excerpt: "Football fans aren't the only ones with their eye on Brazil this summer, with enquiries for the coveted 'Brazilian butt lift' doubling (115%) in the past 12 months, according to new research.",
    readMoreUrl: "http://www.femalefirst.co.uk/lifestyle-fashion/stylebeauty/butt-lifts-on-the-rise-485219.html",
    source: "Female First",
    imageUrl: "https://phpstack-341672-1064493.cloudwaysapps.com/wp-content/uploads/2020/08/butt-lifts.jpg",
    imageAlt: "Butt lift procedures on the rise",
  },
  {
    title: "Plastic Surgery Death in Thailand",
    date: "4 August 2014",
    excerpt: "A 24-year-old British woman died at a beauty clinic in Thailand after a procedure. CosmeDocs' doctors have warned about dangers of having surgery abroad.",
    readMoreUrl: "http://www.dailymail.co.uk/news/article-2806146/British-woman-24-dies-undergoing-treatment-tailbone-beauty-clinic-Bangkok.html",
    source: "Daily Mail",
    imageUrl: "https://phpstack-341672-1064493.cloudwaysapps.com/wp-content/uploads/2020/08/plastic-surgery.jpg",
    imageAlt: "CosmeDocs featured by the Mail Online on plastic surgery safety",
  },
];

const MediaNews = () => {
  const seoContent = `CosmeDocs has been featured in leading publications including The Guardian, Daily Mail, Hello! Magazine, and the Daily Express. As one of London's most respected Harley Street aesthetic clinics, CosmeDocs is regularly consulted by the press for expert commentary on cosmetic treatments, patient safety, and industry trends. Our doctors are recognised opinion leaders in aesthetic medicine, providing evidence-based insights on topics ranging from dermal fillers and Botox to non-surgical facelifts and skin rejuvenation. Our aesthetics is invisible art — bold, natural, always your way.`;

  return (
    <>
      <Helmet>
        <title>CosmeDocs In The Press | Media & News Coverage</title>
        <meta name="description" content="CosmeDocs featured in The Guardian, Daily Mail, Hello! Magazine and more. Harley Street's leading aesthetic clinic recognised for expert cosmetic treatments and patient safety." />
        <link rel="canonical" href="https://www.cosmedocs.com/media-news/" />
        <meta property="og:title" content="CosmeDocs In The Press | Media & News" />
        <meta property="og:description" content="CosmeDocs featured in leading UK publications for expert aesthetic medicine and patient safety." />
        <meta property="og:url" content="https://www.cosmedocs.com/media-news/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "CosmeDocs In The Press",
            "description": "Media coverage and press mentions of CosmeDocs Harley Street aesthetic clinic.",
            "url": "https://www.cosmedocs.com/media-news/",
            "publisher": {
              "@type": "MedicalBusiness",
              "name": "CosmeDocs",
              "url": "https://www.cosmedocs.com",
              "telephone": "+442078594859",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "8-10 Harley Street",
                "addressLocality": "London",
                "postalCode": "W1G 9PF",
                "addressCountry": "GB"
              }
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[hsl(var(--primary)/0.08)] to-background pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Newspaper className="w-4 h-4" />
              Press & Media
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
              CosmeDocs In The Press
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Harley Street Botox &amp; Dermal Filler Clinic
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground leading-relaxed text-center"
          >
            CosmeDocs, a cosmetic clinic on Harley Street, London, is renowned for its industry-leading expertise. 
            Frequently mentioned in the press, the clinic is recognised for its exceptional treatments and innovative 
            approaches, guided by some of the most influential opinion leaders in aesthetic medicine.
          </motion.p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pressArticles.map((article, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-card rounded-2xl overflow-hidden border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                {article.imageUrl && (
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={article.imageUrl}
                      alt={article.imageAlt || article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                      {article.source}
                    </span>
                    <span className="text-xs text-muted-foreground">{article.date}</span>
                  </div>
                  <h2 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <a
                    href={article.readMoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    Read Full Article
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Get In Touch Today
            </h2>
            <p className="text-muted-foreground mb-8">
              Have something to discuss? For press enquiries or to book a consultation, please feel free to contact us.
            </p>
            <Link
              to="/contact/"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Hidden SEO content */}
      <div className="sr-only" aria-hidden="true">
        <p>{seoContent}</p>
      </div>
    </>
  );
};

export default MediaNews;
