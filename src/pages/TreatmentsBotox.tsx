import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Calendar, Shield, Syringe, ChevronRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const TreatmentsBotox = () => {
  const pageTitle = 'Botox (Anti-Wrinkle Injections) London | Harley Street | CosmeDocs';
  const pageDescription = 'Expert Botox treatments at our Harley Street clinic. Cosmetic Botox for forehead lines, frown lines, crow\'s feet, and more. Doctor-led, natural results.';
  const pageKeywords = 'botox, botox injections, anti-wrinkle injections, botox london, botox harley street, cosmetic botox, facial botox, botox treatment';

  const treatmentAreas = [
    {
      id: 'forehead-lines',
      title: 'Forehead Lines',
      content: `Horizontal forehead lines develop from repeated raising of the eyebrows over time. The frontalis muscle, which runs across the forehead, contracts when we express surprise, curiosity, or emphasis. These dynamic lines eventually become static creases that remain visible even at rest.

Botox works by temporarily relaxing the frontalis muscle, reducing its ability to create deep furrows. Treatment typically involves several small injections across the forehead. The goal is to soften lines while preserving natural expression—complete immobility is neither desirable nor necessary.

Most patients notice a smoother forehead appearance within 7–14 days. Results typically last 3–4 months, though this varies with individual muscle activity and metabolism.`
    },
    {
      id: 'frown-lines',
      title: 'Frown Lines (Glabellar Lines)',
      content: `Frown lines, also called glabellar lines or "elevens," appear between the eyebrows. They form from repeated contraction of the corrugator and procerus muscles—the muscles engaged when we concentrate, squint, or express displeasure.

These vertical lines can create an appearance of tiredness or frustration, even when the face is relaxed. Botox injections target these specific muscles, reducing the depth of existing lines and preventing further deepening.

Treatment of the glabellar complex is one of the most well-studied applications of botulinum toxin. When administered correctly, it produces a natural, refreshed appearance without affecting the ability to express genuine emotion.`
    },
    {
      id: 'crows-feet',
      title: 'Crow\'s Feet',
      content: `Crow's feet are the fine lines that radiate from the outer corners of the eyes. They become more prominent when smiling or squinting, as the orbicularis oculi muscle contracts around the eye.

Unlike some facial lines, crow's feet are often associated with positive expressions—genuine smiles engage these muscles. Treatment aims to soften the lines without eliminating the natural crinkle that accompanies authentic happiness.

Botox is injected into the lateral orbital area, typically at 2–3 points per side. The skin around the eyes is delicate, so precise placement and appropriate dosing are essential. Results appear within 1–2 weeks and can last 3–4 months.`
    },
    {
      id: 'bunny-lines',
      title: 'Bunny Lines',
      content: `Bunny lines are the diagonal creases that appear on the sides of the nose when scrunching the face. They result from contraction of the nasalis muscle and can become more noticeable after treating other facial areas.

Some patients develop or notice bunny lines more prominently after forehead or frown line treatment, as facial movement patterns subtly shift. Others have naturally prominent bunny lines that they wish to address.

Treatment involves small doses of Botox injected into the upper nasal area. The goal is subtle—reducing the crease without affecting the natural movement of the nose during breathing or expression.`
    },
    {
      id: 'brow-lift',
      title: 'Brow Lift',
      content: `A non-surgical brow lift uses strategically placed Botox to create subtle elevation of the eyebrow position. This technique works by relaxing the muscles that pull the brow downward, allowing the elevating muscles to work unopposed.

The effect is modest—typically 1–3mm of lift—but can make a noticeable difference to the appearance of the upper face. It opens the eye area and creates a more refreshed, alert appearance.

This treatment requires precise anatomical understanding. The balance between brow elevation and forehead smoothing must be carefully considered, as over-treatment of the forehead can actually lower the brow position.`
    },
    {
      id: 'gummy-smile',
      title: 'Gummy Smile',
      content: `A gummy smile occurs when the upper lip elevates excessively during smiling, revealing more gum tissue than desired. This is caused by hyperactivity of the levator labii superioris alaeque nasi muscle.

Botox can reduce the degree of upper lip elevation, allowing more of the upper teeth to remain covered when smiling. The treatment involves precise injection into the muscle responsible for lifting the lip.

Results are subtle—the aim is to reduce gum display while maintaining a natural, spontaneous smile. Treatment typically requires very small doses and may need refinement to achieve the optimal balance between correction and natural expression.`
    },
    {
      id: 'dimpled-chin',
      title: 'Dimpled Chin',
      content: `Chin dimpling, sometimes called "orange peel" or "cobblestone" chin, occurs when the mentalis muscle contracts, creating an uneven, pebbled texture on the chin surface. This can be particularly noticeable when the lips are pursed or the jaw is tense.

Botox relaxes the mentalis muscle, smoothing the chin surface and creating a more even texture. This treatment is often combined with other lower face treatments for comprehensive rejuvenation.

The chin is a relatively straightforward treatment area, though proper technique ensures the surrounding muscles remain unaffected. Results typically last 3–4 months.`
    },
    {
      id: 'neck-bands',
      title: 'Neck Bands (Nefertiti Lift)',
      content: `The Nefertiti lift targets the platysma muscle—the broad, thin muscle that runs from the jawline down to the collarbone. As we age, the platysma can become more prominent, creating visible vertical bands and contributing to a less defined jawline.

By relaxing the platysma, Botox can reduce the prominence of neck bands and create a subtle lifting effect along the jawline. This treatment is named after Queen Nefertiti, known for her elegant neck and defined jaw.

This is a more advanced treatment that requires careful assessment and technique. It works best for patients with mild to moderate platysmal banding and is often combined with jawline treatments for optimal results.`
    },
    {
      id: 'baby-botox',
      title: 'Baby Botox',
      content: `Baby Botox refers to a treatment philosophy rather than a specific technique. It involves using lower doses of botulinum toxin distributed across treatment areas, aiming for subtle, natural-looking results that preserve facial movement.

This approach is particularly suited to younger patients seeking preventative treatment, those new to Botox who prefer a conservative first experience, or anyone who prioritises maintaining expressive movement over maximal wrinkle reduction.

The term can be misleading—it doesn't mean the treatment is less effective, simply that the aesthetic goal is different. Baby Botox aims for softening rather than elimination of lines, maintaining the natural animation that makes faces appear genuine and alive.`
    }
  ];

  const faqs = [
    {
      question: 'How often can you have Botox?',
      answer: 'Most patients return for Botox treatment every 3–4 months, though this varies with individual factors. Some patients find their results last longer with repeated treatments over time. We recommend waiting until movement returns before retreating, rather than treating on a fixed schedule.'
    },
    {
      question: 'Does Botox hurt?',
      answer: 'Botox injections use very fine needles and cause minimal discomfort for most patients. The sensation is often described as a brief pinch. Treatment of most areas takes only a few minutes. Topical anaesthetic is available but rarely required.'
    },
    {
      question: 'Will Botox make me look frozen?',
      answer: 'A frozen appearance results from over-treatment or poor technique, not from Botox itself. When administered correctly, Botox softens lines while preserving natural facial movement and expression. Our approach prioritises subtle, natural results.'
    },
    {
      question: 'Can Botox be combined with fillers?',
      answer: 'Yes, Botox and dermal fillers address different concerns and work well together. Botox relaxes muscles to reduce dynamic lines, while fillers restore volume and smooth static lines. Many patients benefit from a combined approach tailored to their specific needs.'
    },
    {
      question: 'Is Botox suitable for men?',
      answer: 'Botox is increasingly popular among men seeking a refreshed, rested appearance. Male facial anatomy typically requires slightly higher doses due to stronger muscle mass. Treatment goals often focus on reducing deep frown lines while maintaining a natural, masculine appearance.'
    },
    {
      question: 'What age should you start Botox?',
      answer: 'There is no universal age to begin Botox. Some patients start in their late 20s for prevention, while others begin later to address established lines. The right time depends on your concerns, skin condition, and treatment goals. A consultation helps determine whether treatment is appropriate.'
    }
  ];

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalClinic',
        '@id': 'https://www.cosmedocs.com/#clinic',
        name: 'CosmeDocs',
        description: 'Doctor-led aesthetic medicine clinic specialising in Botox and anti-wrinkle treatments at Harley Street, London.',
        url: 'https://www.cosmedocs.com',
        telephone: '+442074594064',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Harley Street',
          addressLocality: 'London',
          postalCode: 'W1G',
          addressCountry: 'GB'
        },
        medicalSpecialty: 'Cosmetic Medicine',
        availableService: {
          '@type': 'MedicalProcedure',
          name: 'Botox Treatment',
          procedureType: 'https://schema.org/CosmeticProcedure'
        }
      },
      {
        '@type': 'MedicalProcedure',
        '@id': 'https://www.cosmedocs.com/treatments/botox/#procedure',
        name: 'Botox (Anti-Wrinkle Injections)',
        procedureType: 'https://schema.org/CosmeticProcedure',
        description: 'Botulinum toxin injections to temporarily relax facial muscles and reduce the appearance of dynamic wrinkles.',
        howPerformed: 'Small amounts of botulinum toxin are injected into targeted facial muscles using fine needles.',
        preparation: 'Avoid blood-thinning medications and alcohol before treatment.',
        followup: 'Results appear within 7-14 days and typically last 3-4 months.',
        status: 'https://schema.org/ActiveActionStatus'
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.cosmedocs.com/treatments/botox/#faq',
        mainEntity: faqs.map(faq => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer
          }
        }))
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://www.cosmedocs.com/treatments/botox/#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.cosmedocs.com/'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Treatments',
            item: 'https://www.cosmedocs.com/treatments/'
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Botox',
            item: 'https://www.cosmedocs.com/treatments/botox/'
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        <link rel="canonical" href="https://www.cosmedocs.com/treatments/botox/" />
        
        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content="https://www.cosmedocs.com/treatments/botox/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="CosmeDocs" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* Breadcrumb Navigation */}
      <nav className="bg-muted/50 border-b border-border" aria-label="Breadcrumb">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <ol className="flex items-center gap-2 text-sm">
            <li>
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link>
            </li>
            <ChevronRight className="w-4 h-4 text-muted-foreground/50" />
            <li>
              <Link to="/treatments/" className="text-muted-foreground hover:text-foreground transition-colors">Treatments</Link>
            </li>
            <ChevronRight className="w-4 h-4 text-muted-foreground/50" />
            <li>
              <span className="text-primary">Botox</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6">
              Botox <span className="text-muted-foreground">(Anti-Wrinkle Injections)</span> in London
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Doctor-led Botox treatments at our Harley Street clinic. We believe in subtle, natural results that enhance rather than alter—aesthetic medicine that speaks through restraint.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
                <a href="https://cosmedocs.klinik.io/book" target="_blank" rel="noopener noreferrer">
                  Book Consultation
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-border hover:bg-muted">
                <a href="tel:02074594064">
                  <Phone className="w-4 h-4 mr-2" />
                  020 7459 4064
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Treatment at a Glance */}
      <section className="py-12 bg-muted/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-sm text-muted-foreground">Treatment Time</p>
              <p className="text-foreground font-medium">15–30 minutes</p>
            </div>
            <div className="text-center">
              <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-sm text-muted-foreground">Results Last</p>
              <p className="text-foreground font-medium">3–4 months</p>
            </div>
            <div className="text-center">
              <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-sm text-muted-foreground">Recovery</p>
              <p className="text-foreground font-medium">Minimal</p>
            </div>
            <div className="text-center">
              <Syringe className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-sm text-muted-foreground">Anaesthesia</p>
              <p className="text-foreground font-medium">None required</p>
            </div>
          </div>
        </div>
      </section>

      {/* What is Botox */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-light mb-8">What is Botox?</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                Botox is the trade name for botulinum toxin type A, a purified protein derived from the bacterium Clostridium botulinum. When injected in precise, controlled doses, it temporarily blocks the nerve signals that cause muscles to contract.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                In cosmetic medicine, this mechanism is used to reduce the appearance of dynamic wrinkles—the lines that form from repeated facial movements such as frowning, squinting, or raising the eyebrows. By relaxing the underlying muscles, the overlying skin appears smoother.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Botox has been used safely in medicine for over four decades, initially for neurological conditions and later for cosmetic purposes. It remains one of the most extensively studied aesthetic treatments available, with a well-established safety profile when administered by qualified practitioners.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Does Botox Treat */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-light mb-8">What Does Botox Treat?</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium text-primary mb-3">Dynamic Facial Lines</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Dynamic lines are wrinkles that appear during facial movement—the creases that form when you smile, frown, or raise your eyebrows. These differ from static lines, which remain visible even when the face is at rest. Botox is most effective for dynamic lines, as it works by reducing the muscle movement that creates them.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium text-primary mb-3">Muscle Overactivity and Expression</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Some patients have naturally strong facial muscles that create deeper lines than average, or habitual expressions that accelerate line formation. Botox can moderate this muscle activity, softening expressions without eliminating them. The goal is natural movement, not immobility.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium text-primary mb-3">Preventative vs Corrective Botox</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Increasingly, patients seek Botox before deep lines have formed—a preventative approach that may slow the development of static wrinkles over time. Corrective treatment addresses existing lines. Both approaches have their place, and the right choice depends on your current concerns and future goals.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cosmetic Botox Treatment Areas */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-light mb-4">Cosmetic Botox Treatment Areas</h2>
            <p className="text-muted-foreground mb-12">
              Each area of the face has unique anatomy and treatment considerations. We tailor every treatment to your individual facial structure and aesthetic goals.
            </p>
            
            <div className="space-y-12">
              {treatmentAreas.map((area, index) => (
                <motion.div
                  key={area.id}
                  id={area.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="border-l-2 border-primary pl-6"
                >
                  <h3 className="text-xl md:text-2xl font-medium mb-4">{area.title}</h3>
                  <div className="prose prose-lg max-w-none">
                    {area.content.split('\n\n').map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-muted-foreground leading-relaxed mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results and Duration */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-light mb-8">Botox Results and How Long They Last</h2>
            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Botox does not produce immediate results. The botulinum toxin needs time to bind to nerve endings and block the signals that cause muscle contraction. Most patients begin to notice effects within 3–5 days, with the full result typically visible at 10–14 days.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The peak effect—when the treatment looks its best—usually occurs around two weeks after injection. At this point, the treated muscles are maximally relaxed, and the overlying skin appears smoothest. This is when we recommend a review appointment if needed.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Results typically last 3–4 months, though this varies considerably between individuals. Factors affecting duration include metabolism, muscle strength, treatment area, and dose. Some patients find their results last longer with repeated treatments over time, possibly because the muscles become conditioned to reduced use.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                As the effect wears off, muscle movement gradually returns. This is a gradual process—you won't suddenly look different. Most patients schedule their next appointment when they notice movement returning, rather than waiting until the effect has completely worn off.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our philosophy emphasises natural movement over complete immobility. A face that moves naturally—with expressions that soften rather than disappear—looks more authentic and ages more gracefully than one frozen in perpetual smoothness.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Is Botox Safe */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-light mb-8">Is Botox Safe?</h2>
            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Botox has an excellent safety profile when administered by qualified medical professionals. It has been used in medicine since the 1980s and for cosmetic purposes since the early 2000s. The doses used for aesthetic treatment are small fractions of those used in medical applications.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Common side effects are mild and temporary: slight bruising at injection sites, occasional headache, and minor swelling. These typically resolve within a few days. More significant complications are rare when treatment is performed by experienced practitioners with appropriate training.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                In the UK, Botox is a prescription-only medicine that must be prescribed by a qualified prescriber following a face-to-face consultation. At CosmeDocs, all treatments are performed by doctors with extensive training in facial anatomy and injection technique. We use only genuine, regulated products from approved suppliers.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Certain conditions may preclude treatment, including pregnancy, breastfeeding, and some neuromuscular disorders. These are discussed during consultation to ensure treatment is appropriate and safe for you.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-light mb-8">Botox FAQs</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`faq-${index}`}
                  className="border border-border rounded-lg px-6 bg-background/50"
                >
                  <AccordionTrigger className="text-left text-lg font-medium hover:no-underline py-5">
                    <h3 className="text-foreground">{faq.question}</h3>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Related Botox Treatments */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-light mb-6">Related Botox Treatments</h2>
            <p className="text-muted-foreground mb-6">
              Some Botox applications address specific concerns that benefit from dedicated treatment approaches:
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <Link to="/lip-flip/" className="text-primary hover:underline">Lip Flip Botox</Link>
                <span className="text-muted-foreground/70"> — subtle upper lip enhancement without filler</span>
              </li>
              <li>
                <Link to="/bruxism-botox/" className="text-primary hover:underline">Masseter Botox</Link>
                <span className="text-muted-foreground/70"> — jaw slimming and teeth grinding relief</span>
              </li>
              <li>
                <Link to="/oily-skin-botox/" className="text-primary hover:underline">Oily Skin Botox</Link>
                <span className="text-muted-foreground/70"> — reducing sebum production in the T-zone</span>
              </li>
            </ul>
            <p className="text-muted-foreground/70 text-sm mt-6">
              For medical applications of Botox including chronic migraines and hyperhidrosis, please see our <Link to="/migraine-botox/" className="text-muted-foreground hover:underline">medical Botox treatments</Link>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-light mb-4">Book Your Consultation</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Every face is unique. A consultation allows us to understand your concerns, assess your anatomy, and recommend a treatment approach tailored to your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
                <a href="https://cosmedocs.klinik.io/book" target="_blank" rel="noopener noreferrer">
                  Book Consultation
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-border hover:bg-muted">
                <a href="tel:02074594064">
                  <Phone className="w-4 h-4 mr-2" />
                  020 7459 4064
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hidden SEO Content */}
      <div className="sr-only" aria-hidden="true">
        <p>
          Botox London, anti-wrinkle injections Harley Street, cosmetic Botox treatments, facial Botox, 
          forehead lines Botox, frown lines treatment, crow's feet injections, bunny lines Botox, 
          brow lift non-surgical, gummy smile correction, chin dimpling treatment, neck bands Botox, 
          Nefertiti lift London, Baby Botox, preventative Botox, Botox for men, botulinum toxin injections,
          CosmeDocs aesthetic clinic, doctor-led Botox, natural Botox results, subtle anti-ageing treatment.
        </p>
      </div>
    </div>
  );
};

export default TreatmentsBotox;
