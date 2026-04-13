import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { MessageSquare, Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const canonical = 'https://www.cosmedocs.com/de/kontakt/';

export default function ContactGerman() {
  const navigate = useNavigate();
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
      if (error) toast({ title: 'Fehler', description: 'Nachricht konnte nicht gesendet werden.', variant: 'destructive' });
      else navigate('/thank-you');
    } catch { toast({ title: 'Fehler', description: 'Ein unerwarteter Fehler ist aufgetreten.', variant: 'destructive' }); }
    finally { setIsSubmitting(false); }
  };

  return (
    <>
      <Helmet>
        <title>Kontakt | Cosmedocs Harley Street London</title>
        <meta name="description" content="Kontaktieren Sie Cosmedocs. Vereinbaren Sie eine Beratung oder schreiben Sie uns auf WhatsApp. Harley Street, London." data-rh="true" />
        <link rel="canonical" href={canonical} data-rh="true" />
      </Helmet>
      <div className="min-h-screen bg-black text-white">
        <section className="py-16 md:py-24 px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4"><span className="text-[#C9A050]">Kontakt</span></h1>
          <p className="text-lg text-white/60">Beratung vereinbaren oder Frage stellen</p>
        </section>
        <div className="max-w-5xl mx-auto px-4 pb-20 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-start gap-3"><MapPin className="w-5 h-5 text-[#C9A050] mt-1" /><div><p className="text-sm font-medium text-white">Adresse</p><p className="text-sm text-white/50">10 Harley Street, London W1G 9PF</p></div></div>
            <div className="flex items-start gap-3"><Phone className="w-5 h-5 text-[#C9A050] mt-1" /><div><p className="text-sm font-medium text-white">Telefon</p><p className="text-sm text-white/50">+44 20 3733 3227</p></div></div>
            <div className="flex items-start gap-3"><Mail className="w-5 h-5 text-[#C9A050] mt-1" /><div><p className="text-sm font-medium text-white">E-Mail</p><p className="text-sm text-white/50">info@cosmedocs.com</p></div></div>
            <div className="flex items-start gap-3"><Clock className="w-5 h-5 text-[#C9A050] mt-1" /><div><p className="text-sm font-medium text-white">Öffnungszeiten</p><p className="text-sm text-white/50">Mo-Sa: 9:00 - 19:00</p></div></div>
            <div className="flex items-start gap-3"><MessageSquare className="w-5 h-5 text-[#C9A050] mt-1" /><div><p className="text-sm font-medium text-white">WhatsApp</p><a href="https://wa.me/447735606447" className="text-sm text-[#C9A050] hover:underline">Nachricht senden</a></div></div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required className="bg-white/5 border-white/10 text-white" />
            <Input name="email" type="email" placeholder="E-Mail" value={formData.email} onChange={handleChange} required className="bg-white/5 border-white/10 text-white" />
            <Input name="phone" type="tel" placeholder="Telefon (optional)" value={formData.phone} onChange={handleChange} className="bg-white/5 border-white/10 text-white" />
            <Textarea name="message" placeholder="Nachricht" value={formData.message} onChange={handleChange} required rows={4} className="bg-white/5 border-white/10 text-white" />
            <button type="submit" disabled={isSubmitting} className="w-full inline-flex items-center justify-center gap-2 bg-[#C9A050] hover:bg-[#B8924A] text-black rounded-full py-3 font-medium text-sm transition-all disabled:opacity-50">
              {isSubmitting ? 'Wird gesendet...' : 'Senden'} <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* Additional Info */}
        <section className="max-w-5xl mx-auto px-4 pb-20">
          <h2 className="text-2xl font-light text-center mb-6">Ihr Besuch bei <span className="text-[#C9A050]">Cosmedocs</span></h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-sm text-white/60 leading-relaxed">
              Cosmedocs befindet sich im Herzen von Londons Mayfair-Viertel, in der weltberühmten Harley Street. Die nächste U-Bahn-Station ist Oxford Circus, nur etwa 5 Gehminuten entfernt. Auch die Station Bond Street ist fußläufig erreichbar. Vom Flughafen Heathrow erreichen Sie uns mit dem Heathrow Express und einem Taxi in etwa 40 Minuten.
            </p>
            <p className="text-sm text-white/60 leading-relaxed">
              Wenn Sie zum ersten Mal zu uns kommen, empfehlen wir zunächst eine Beratung. Dabei besprechen wir Ihre Wünsche im Detail, bewerten Ihren Hautzustand und erstellen einen individuellen Behandlungsplan. Auf Wunsch können Beratung und Behandlung am selben Tag stattfinden — ideal für Patienten, die aus dem Ausland anreisen. Bitte teilen Sie uns dies bei der Terminbuchung mit.
            </p>
            <p className="text-sm text-white/60 leading-relaxed">
              Die Beratung findet auf Englisch statt. Dr. Ahmed Haq und sein Team haben langjährige Erfahrung in der Betreuung internationaler Patienten und erklären alle Schritte in klarer, verständlicher Sprache. Wir verwenden visuelle Hilfsmittel wie Fotos und Diagramme, um die vorgeschlagene Behandlung zu veranschaulichen. Selbstverständlich können Sie jederzeit Fragen stellen.
            </p>
            <p className="text-sm text-white/60 leading-relaxed">
              Sie können uns per E-Mail, Telefon oder WhatsApp kontaktieren. Über WhatsApp haben Sie die Möglichkeit, Fotos zu senden, damit wir Ihre Anliegen vorab besser einschätzen können. Termine können auch online gebucht werden. Wir antworten in der Regel innerhalb von 24 Stunden auf alle Anfragen.
            </p>
            <p className="text-sm text-white/60 leading-relaxed">
              Viele unserer deutschsprachigen Patienten verbinden ihren Besuch mit einem London-Wochenende — Shopping auf der Oxford Street, Theater im West End und eine ästhetische Behandlung bei Cosmedocs. Unsere Ästhetik ist unsichtbare Kunst. Mutig, natürlich, immer Ihr Weg. Wir freuen uns darauf, Sie in unserer Klinik willkommen zu heißen.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
