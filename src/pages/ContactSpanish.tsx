import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { motion } from 'framer-motion';
import { MessageSquare, Phone, Mail, MapPin, Clock, Calendar, Instagram, ArrowRight, Send } from 'lucide-react';

const whatsappUrl = "https://wa.me/447735606447?text=Hola, estoy interesado/a en los tratamientos estéticos de Cosmedocs.";
const bookingUrl = "https://med.as.me/harleystreet";

const ContactSpanish = () => {
  const navigate = useNavigate();
  const canonicalUrl = 'https://www.cosmedocs.com/es/contacto/';
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from('contact_us').insert([{ name: formData.name, email: formData.email, phone: formData.phone || null, message: formData.message }]);
      if (error) { toast({ title: "Error", description: "Ha ocurrido un error. Por favor, inténtelo de nuevo.", variant: "destructive" }); }
      else { navigate('/thank-you'); }
    } catch { toast({ title: "Error", description: "Ha ocurrido un error inesperado.", variant: "destructive" }); }
    finally { setIsSubmitting(false); }
  };

  return (
    <>
      <Helmet>
        <title>Contáctenos | Clínica Estética Cosmedocs Harley Street Londres</title>
        <meta name="description" content="Contacte con Cosmedocs. Reserve una consulta, haga una pregunta o envíenos un mensaje por WhatsApp. Harley Street, Londres desde 2007." />
        <link rel="canonical" href={canonicalUrl} data-rh="true" />
        <meta property="og:title" content="Contáctenos | Cosmedocs" />
        <meta property="og:url" content={canonicalUrl} />
        <link rel="alternate" hrefLang="en-gb" href="https://www.cosmedocs.com/contact/" />
        <link rel="alternate" hrefLang="ar" href="https://www.cosmedocs.com/ar/contact/" />
        <link rel="alternate" hrefLang="fr" href="https://www.cosmedocs.com/fr/contact/" />
        <link rel="alternate" hrefLang="es" href={canonicalUrl} />
        <link rel="alternate" hrefLang="zh" href="https://www.cosmedocs.com/zh/contact/" />
        <link rel="alternate" hrefLang="x-default" href="https://www.cosmedocs.com/contact/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              { "@type": "MedicalBusiness", "@id": "https://www.cosmedocs.com/#organization", name: "Cosmedocs", telephone: ["+443330551503","+448008600178"], email: "info@cosmedocs.com", address: { "@type": "PostalAddress", streetAddress: "10 Harley Street", addressLocality: "London", postalCode: "W1G 9PF", addressCountry: "GB" } },
              { "@type": "ContactPage", "@id": canonicalUrl, name: "Contactar Cosmedocs" },
              { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.cosmedocs.com/es/" }, { "@type": "ListItem", position: 2, name: "Contacto", item: canonicalUrl }] }
            ]
          })}
        </script>
      </Helmet>

      <div className="bg-black text-white min-h-screen">
        <section className="relative pt-28 pb-16 overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
            <nav className="flex items-center gap-2 text-xs text-white/40 mb-10" aria-label="Breadcrumb">
              <Link to="/es/" className="hover:text-[#C9A050] transition-colors">Inicio</Link>
              <span>/</span>
              <span className="text-white/60">Contacto</span>
            </nav>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="text-[#C9A050] text-xs font-semibold tracking-[0.25em] uppercase mb-4">Contáctenos</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extralight leading-[1.1] mb-6">Contacto</h1>
              <p className="text-base sm:text-lg text-white/60 font-extralight leading-relaxed max-w-2xl">
                Ya sea que desee reservar una consulta, hacer una pregunta o simplemente conocer más sobre nuestros tratamientos — estamos aquí para ayudarle.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <motion.a href={bookingUrl} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group bg-[#C9A050] hover:bg-[#B8903F] rounded-2xl p-6 transition-all"><Calendar className="w-7 h-7 text-black mb-4" /><p className="text-base font-medium text-black mb-1">Reservar</p><p className="text-sm text-black/60">Programe su consulta en línea</p></motion.a>
            <motion.a href={whatsappUrl} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }} className="group bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] hover:border-emerald-500/30 rounded-2xl p-6 transition-all"><MessageSquare className="w-7 h-7 text-emerald-400 mb-4" /><p className="text-base font-medium text-white mb-1">WhatsApp</p><p className="text-sm text-white/50">Escríbanos directamente</p></motion.a>
            <motion.a href="tel:+443330551503" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="group bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] hover:border-[#C9A050]/30 rounded-2xl p-6 transition-all"><Phone className="w-7 h-7 text-[#C9A050] mb-4" /><p className="text-base font-medium text-white mb-1">Llámenos</p><p className="text-sm text-white/50">0333 0551 503</p></motion.a>
            <motion.a href="https://www.instagram.com/cosmedocs/" target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="group bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] hover:border-pink-500/30 rounded-2xl p-6 transition-all"><Instagram className="w-7 h-7 text-pink-400 mb-4" /><p className="text-base font-medium text-white mb-1">Instagram</p><p className="text-sm text-white/50">@cosmedocs</p></motion.a>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:col-span-3">
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6"><Send className="w-5 h-5 text-[#C9A050]" /><h2 className="text-xl font-medium text-white">Haga una Pregunta</h2></div>
                <p className="text-sm text-white/50 font-extralight mb-8">Envíenos su pregunta directamente y nuestro equipo le responderá lo antes posible.</p>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div><label htmlFor="name" className="block text-xs text-white/50 uppercase tracking-wider mb-2">Nombre</label><Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Su nombre" className="bg-white/[0.04] border-white/[0.08] focus:border-[#C9A050]/50 text-white placeholder:text-white/25 rounded-xl h-12" required /></div>
                    <div><label htmlFor="email" className="block text-xs text-white/50 uppercase tracking-wider mb-2">Email</label><Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="su@email.com" className="bg-white/[0.04] border-white/[0.08] focus:border-[#C9A050]/50 text-white placeholder:text-white/25 rounded-xl h-12" required /></div>
                  </div>
                  <div><label htmlFor="phone" className="block text-xs text-white/50 uppercase tracking-wider mb-2">Teléfono <span className="text-white/30">(opcional)</span></label><Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+44 7XXX XXX XXX" className="bg-white/[0.04] border-white/[0.08] focus:border-[#C9A050]/50 text-white placeholder:text-white/25 rounded-xl h-12" /></div>
                  <div><label htmlFor="message" className="block text-xs text-white/50 uppercase tracking-wider mb-2">Su Pregunta</label><Textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} placeholder="Cuéntenos sobre su consulta o el tratamiento que le interesa..." className="bg-white/[0.04] border-white/[0.08] focus:border-[#C9A050]/50 text-white placeholder:text-white/25 rounded-xl resize-none" required /></div>
                  <Button type="submit" className="w-full bg-[#C9A050] hover:bg-[#B8903F] text-black font-medium rounded-full h-12 text-sm" disabled={isSubmitting}>{isSubmitting ? 'Enviando...' : 'Enviar su Pregunta'}{!isSubmitting && <ArrowRight className="w-4 h-4 ml-2" />}</Button>
                </form>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="lg:col-span-2 space-y-5">
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4"><MapPin className="w-5 h-5 text-[#C9A050]" /><p className="text-sm font-medium text-white uppercase tracking-wider">Nuestra Clínica</p></div>
                <address className="not-italic text-sm text-white/60 font-extralight space-y-1 mb-4"><p className="text-white/80 font-medium">Cosmedocs</p><p>10 Harley Street</p><p>London, W1G 9PF</p><p>Reino Unido</p></address>
                <div className="bg-white/[0.03] border border-white/10 rounded-lg p-3 mb-4"><p className="text-xs text-white/70 leading-relaxed">We work with <span className="text-white/90 font-medium">PrivaDr Ltd</span>, 10 Harley Street, London W1G 9PF for all CQC required treatments.</p></div>
                <div className="bg-white/[0.02] border border-[#C9A050]/20 rounded-xl p-4"><p className="text-xs text-[#C9A050] font-medium uppercase tracking-wider mb-1.5">Totalmente Discreto</p><p className="text-xs text-white/50 leading-relaxed">Sin señalización exterior. Sin marca en la puerta. Nuestra ubicación en Harley Street está intencionalmente sin marcar — su privacidad es absoluta.</p></div>
              </div>
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4"><Clock className="w-5 h-5 text-[#C9A050]" /><p className="text-sm font-medium text-white uppercase tracking-wider">Horario</p></div>
                <ul className="space-y-2.5 text-sm">
                  <li className="flex justify-between text-white/60"><span>Lunes – Viernes</span><span className="text-white/80">9:00 – 19:00</span></li>
                  <li className="flex justify-between text-white/60"><span>Sábado</span><span className="text-white/80">10:00 – 16:00</span></li>
                  <li className="flex justify-between text-white/60"><span>Domingo</span><span className="text-white/40">Cerrado</span></li>
                </ul>
              </div>
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4"><Phone className="w-5 h-5 text-[#C9A050]" /><p className="text-sm font-medium text-white uppercase tracking-wider">Líneas Directas</p></div>
                <div className="space-y-3">
                  <a href="tel:+443330551503" className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors"><Phone className="w-4 h-4 text-white/30" />0333 0551 503</a>
                  <a href="tel:+448008600178" className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors"><Phone className="w-4 h-4 text-white/30" />0800 860 0178</a>
                  <a href="mailto:info@cosmedocs.com" className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors"><Mail className="w-4 h-4 text-white/30" />info@cosmedocs.com</a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactSpanish;
