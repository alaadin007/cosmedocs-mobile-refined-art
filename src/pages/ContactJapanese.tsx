import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { MessageSquare, Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const canonical = 'https://www.cosmedocs.com/ja/contact/';

export default function ContactJapanese() {
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
      if (error) toast({ title: 'エラー', description: 'メッセージの送信に失敗しました。', variant: 'destructive' });
      else navigate('/thank-you');
    } catch { toast({ title: 'エラー', description: '予期しないエラーが発生しました。', variant: 'destructive' }); }
    finally { setIsSubmitting(false); }
  };

  return (
    <>
      <Helmet>
        <title>お問い合わせ | Cosmedocs ハーレーストリート ロンドン</title>
        <meta name="description" content="Cosmedocsにお問い合わせ。カウンセリングのご予約やWhatsAppでのお問い合わせ。ハーレーストリート、ロンドン。" data-rh="true" />
        <link rel="canonical" href={canonical} data-rh="true" />
      </Helmet>
      <div className="min-h-screen bg-black text-white">
        <section className="py-16 md:py-24 px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4"><span className="text-[#C9A050]">お問い合わせ</span></h1>
          <p className="text-lg text-white/60">カウンセリングのご予約・ご質問</p>
        </section>
        <div className="max-w-5xl mx-auto px-4 pb-20 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-start gap-3"><MapPin className="w-5 h-5 text-[#C9A050] mt-1" /><div><p className="text-sm font-medium text-white">住所</p><p className="text-sm text-white/50">10 Harley Street, London W1G 9PF</p></div></div>
            <div className="flex items-start gap-3"><Phone className="w-5 h-5 text-[#C9A050] mt-1" /><div><p className="text-sm font-medium text-white">電話</p><p className="text-sm text-white/50">+44 20 3733 3227</p></div></div>
            <div className="flex items-start gap-3"><Mail className="w-5 h-5 text-[#C9A050] mt-1" /><div><p className="text-sm font-medium text-white">メール</p><p className="text-sm text-white/50">info@cosmedocs.com</p></div></div>
            <div className="flex items-start gap-3"><Clock className="w-5 h-5 text-[#C9A050] mt-1" /><div><p className="text-sm font-medium text-white">診療時間</p><p className="text-sm text-white/50">月〜土: 9:00 - 19:00</p></div></div>
            <div className="flex items-start gap-3"><MessageSquare className="w-5 h-5 text-[#C9A050] mt-1" /><div><p className="text-sm font-medium text-white">WhatsApp</p><a href="https://wa.me/447735606447" className="text-sm text-[#C9A050] hover:underline">メッセージを送る</a></div></div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input name="name" placeholder="お名前" value={formData.name} onChange={handleChange} required className="bg-white/5 border-white/10 text-white" />
            <Input name="email" type="email" placeholder="メールアドレス" value={formData.email} onChange={handleChange} required className="bg-white/5 border-white/10 text-white" />
            <Input name="phone" type="tel" placeholder="電話番号（任意）" value={formData.phone} onChange={handleChange} className="bg-white/5 border-white/10 text-white" />
            <Textarea name="message" placeholder="メッセージ" value={formData.message} onChange={handleChange} required rows={4} className="bg-white/5 border-white/10 text-white" />
            <button type="submit" disabled={isSubmitting} className="w-full inline-flex items-center justify-center gap-2 bg-[#C9A050] hover:bg-[#B8924A] text-black rounded-full py-3 font-medium text-sm transition-all disabled:opacity-50">
              {isSubmitting ? '送信中...' : '送信'} <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* Additional Info */}
        <section className="max-w-5xl mx-auto px-4 pb-20">
          <h2 className="text-2xl font-light text-center mb-6">ご来院に<span className="text-[#C9A050]">ついて</span></h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-sm text-white/60 leading-relaxed">
              Cosmedocsは、ロンドンのメイフェア地区、世界的に有名なハーレーストリートに位置しています。最寄り駅はOxford Circus（オックスフォード・サーカス）駅で、徒歩約5分です。Bond Street（ボンド・ストリート）駅からも徒歩圏内にあります。ヒースロー空港からはヒースロー・エクスプレスとタクシーで約40分でお越しいただけます。
            </p>
            <p className="text-sm text-white/60 leading-relaxed">
              初めてお越しの方は、まずカウンセリングをご予約ください。カウンセリングでは、ご希望の治療について詳しくお伺いし、お顔の状態を評価した上で、最適な治療プランをご提案いたします。カウンセリングと施術を同日に受けることも可能ですので、お申し込みの際にお知らせください。
            </p>
            <p className="text-sm text-white/60 leading-relaxed">
              カウンセリングは英語で行われますが、Dr. Ahmed Haqおよびスタッフは多くの国際患者様を診療した経験があり、分かりやすい言葉で丁寧にご説明いたします。医療用語を避け、写真や図を用いた視覚的な説明を重視しています。ご不明な点があれば、何度でもお気軽にご質問ください。
            </p>
            <p className="text-sm text-white/60 leading-relaxed">
              お問い合わせはメール、電話、またはWhatsAppで受け付けています。WhatsAppでは写真をお送りいただくことも可能で、事前にお悩みの部位を確認することができます。ご予約はオンラインでも承っております。迅速な対応を心がけておりますので、通常24時間以内にお返事いたします。
            </p>
            <p className="text-sm text-white/60 leading-relaxed">
              私たちの美学は見えない芸術。大胆、自然、常にあなたらしく。ロンドンでの美容医療体験を、Cosmedocsがお手伝いいたします。日本からのご旅行の際は、ぜひお立ち寄りください。
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
