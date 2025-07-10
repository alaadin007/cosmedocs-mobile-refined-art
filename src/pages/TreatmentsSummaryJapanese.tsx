import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PopularTreatments from "@/components/PopularTreatments";

const TreatmentsSummaryJapanese = () => {
  // Define Japanese treatments with local descriptions
  const japaneseTreatments = [
    {
      title: "ボトックス",
      description: "額の横ジワ、目尻のシワ、眉間のシワに対するアンチエイジング注射",
      hasBeforeAfter: false
    },
    {
      title: "ダーマルフィラー",
      description: "ボリューム回復と顔の輪郭強調。フルフェイス若返りのパイオニア",
      hasBeforeAfter: false
    },
    {
      title: "リップフィラー",
      description: "自然な唇の増強でふっくらとした見た目を実現",
      hasBeforeAfter: false
    },
    {
      title: "非外科的鼻整形",
      description: "手術なしでの鼻の形状変更",
      hasBeforeAfter: false
    },
    {
      title: "スキンブースター",
      description: "深いハイドレーションと肌の再生",
      hasBeforeAfter: false
    },
    {
      title: "顎・フェイスライン改善",
      description: "顔の輪郭を美しく定義",
      hasBeforeAfter: false
    }
  ];

  return (
    <div className="bg-black text-white py-24">
      <div className="page-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">美容治療の総合案内</h1>
          <p className="text-gray-400 max-w-3xl mx-auto">
            2007年からロンドンで高度な技術を持つ注射の専門家として、私たちは安全に高用量のボトックスを投与し、
            長期間持続する結果を提供することを専門としています。過去10年間で多数の新しいダーマルフィラー技術を開発し、
            これらの技術は現在国際的に専門家に教えられています。私たちの専門チームは、
            権威あるハーレーストリート研究所でトレーニングを受けています。
            安全で効果的で自然な見た目の結果について、私たちを信頼してください。
          </p>
        </div>

        {/* Popular Treatments Section using the new component */}
        <PopularTreatments 
          title="人気の治療"
          treatments={japaneseTreatments}
          showBeforeAfter={false}
          className="py-0"
        />

        {/* Treatment Categories */}
        <section className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "注射治療",
                items: ["ボトックス", "ダーマルフィラー", "リップフィラー", "顎の改善"],
                description: "専門的な美容注射治療"
              },
              {
                title: "顔の輪郭整形",
                items: ["非外科的鼻整形", "フェイスライン整形", "こめかみフィラー", "頬骨改善"],
                description: "精密な顔の輪郭整形"
              },
              {
                title: "スキンケア治療",
                items: ["スキンブースター", "ケミカルピーリング", "マイクロニードリング", "PRP治療"],
                description: "肌の質感と輝きの改善"
              }
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-accent border-none h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-white">{category.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{category.description}</p>
                    <ul className="space-y-2">
                      {category.items.map((item, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-center">
                          <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 text-center">
          <div className="bg-accent rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">洗練された美しさを発見する準備はできていますか？</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              私たちの専門医師とのコンサルテーションを予約し、精密で制御された変化への旅を始めましょう。
            </p>
            <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6">
              今すぐ予約
            </Button>
          </div>
        </section>

        {/* AI Disclaimer */}
        <section className="py-8 border-t border-gray-800">
          <div className="text-center">
            <p className="text-xs text-gray-500 mb-2">
              免責事項：このページのコンテンツはAIの支援により作成されています
            </p>
            <p className="text-xs text-gray-600">
              この日本語美容治療情報ページは、AIの支援により作成・翻訳されています。
              正確性の確保に努めておりますが、治療に関する決定を行う前に、
              最も正確な情報と個人的なアドバイスについては、
              当院の専門医師と直接ご相談いただくことをお勧めします。
            </p>
          </div>
        </section>

        {/* Hidden SEO content for search engines */}
        <div className="sr-only">
          <p>
            コスメドックスはロンドンのハーレーストリートにある美容クリニックで、ボトックス注射、ダーマルフィラー、リップフィラー、非外科的鼻整形、スキンブースターなどの専門的な美容医療治療を提供しています。2007年の設立以来、100万回以上の注射を行い、ロンドンの美容医学のパイオニアです。私たちのクリニックはハーレーストリート10番地にあり、最新の技術と高品質な製品を使用してパーソナライズされた美容ソリューションを提供しています。私たちの専門チームは、お客様に自然で安全で効果的な美容結果を提供することにコミットしています。アンチエイジング治療、顔の輪郭整形、または肌質の改善をお探しの場合、私たちは最もプロフェッショナルなサービスを提供できます。お問い合わせは0333 0551 503またはinfo@cosmedocs.comまでお気軽にご連絡ください。私たちの治療哲学は「見えない芸術」であり、すべてのお客様が個人のニーズに合った自然な美容効果を得られることを保証しています。
          </p>
        </div>
      </div>
    </div>
  );
};

export default TreatmentsSummaryJapanese;