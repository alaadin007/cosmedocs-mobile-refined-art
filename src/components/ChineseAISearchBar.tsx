
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Search } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const ChineseAISearchBar = () => {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const chineseContext = `
  您是Cosmedocs哈利街医美诊所的专业AI助手，专门为中国客户提供咨询服务。请仅使用以下关于我们诊所的信息来回答问题：

  关于COSMEDOCS:
  - 伦敦哈利街顶级医美诊所
  - 自2007年成立，拥有18年专业经验
  - 位于哈利街10号，地铁Oxford Circus站步行5分钟
  - 完成超过100万次安全注射治疗
  - 深谙亚洲面部美学，专为中国客户服务
  - 治疗理念："看不见的艺术" - 自然、精致的美容效果

  主要治疗项目:
  1. 瘦脸针下颌缩小术 (£380-580)
     - 针对亚洲人下颌角肥大问题
     - 使用高精度肉毒杆菌素注射
     - 打造精致V脸，符合东方审美
     - 无创无痛，效果维持6-8个月

  2. 亚洲鼻型微整形 (£450-750)
     - 专门针对亚洲人鼻型特点设计
     - 非手术隆鼻，提升鼻梁高度
     - 使用优质玻尿酸填充剂
     - 即刻见效，维持12-18个月

  3. 下巴塑形增强术 (£350-550)
     - 改善下巴后缩、短小问题
     - 延长下半脸比例，营造优雅轮廓
     - 结合中国传统面相学理念

  4. 肉毒杆菌素抗皱系列 (£280-580)
     - 上面部除皱：额头纹、眉间纹、鱼尾纹
     - 下面部塑形：口周纹、颈部拉提
     - Nefertiti颈部拉提技术

  5. 玻尿酸全脸年轻化 (£450-850)
     - 面部轮廓重塑，恢复饱满度
     - 改善苹果肌下垂、太阳穴凹陷
     - 唇部精雕细琢技术

  6. PDO蛋白线雕 (£800-1500)
     - 无创面部提升技术
     - 即时提升效果，持续改善6-12个月
     - 安全可吸收材料

  中国客户专享套餐:
  - 留学生精选套餐：£680（原价£850）
  - 白领焕新套餐：£1,280（原价£1,580）
  - 贵妇臻享套餐：£2,500（原价£3,200）

  联系方式:
  - 电话：0333 0551 503
  - 邮箱：info@cosmedocs.com
  - 地址：10 Harley Street, London W1G 9PF
  - 营业时间：周一至周六 9:00-18:00
  - 支持中文咨询服务

  重要提示：
  - 请仅使用上述信息回答问题
  - 所有回答必须用中文
  - 如果问题超出提供的信息范围，请建议客户直接联系诊所咨询
  - 保持专业、友好的语调
  `;

  const handleSearch = async () => {
    if (!question.trim()) {
      toast.error("请输入您的问题");
      return;
    }

    setIsLoading(true);
    setResponse("");

    try {
      const { data, error } = await supabase.functions.invoke('ai-chat', {
        body: {
          question: question,
          context: chineseContext
        }
      });

      if (error) {
        throw error;
      }

      setResponse(data.response);
      
    } catch (error) {
      console.error('Error getting AI response:', error);
      toast.error("暂时无法获取回复，请稍后再试。");
    } finally {
      setIsLoading(false);
    }
  };

  const handleNewQuestion = () => {
    setQuestion("");
    setResponse("");
  };

  const formatResponse = (text: string) => {
    const formattedText = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    const paragraphs = formattedText.split('\n\n');
    
    return paragraphs.map((paragraph, index) => {
      const lines = paragraph.split('\n');
      
      return (
        <div key={index} className="mb-4 last:mb-0">
          {lines.map((line, lineIndex) => (
            <div 
              key={lineIndex} 
              className={`${lineIndex > 0 ? 'mt-2' : ''}`}
              dangerouslySetInnerHTML={{ __html: line }}
            />
          ))}
        </div>
      );
    });
  };

  return (
    <div className="bg-accent rounded-lg p-6 border border-purple-400/20">
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2 text-white">
          询问我们的医美服务：
        </label>
        <div className="flex gap-2">
          <Input
            placeholder="例如：瘦脸针效果如何？亚洲鼻型整形价格？下巴塑形安全吗？"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            className="bg-black border-gray-600 text-white placeholder:text-gray-400"
          />
          <Button 
            onClick={handleSearch}
            disabled={isLoading}
            className="shrink-0 bg-purple-600 hover:bg-purple-700"
          >
            {isLoading ? (
              "搜索中..."
            ) : (
              <>
                <Search className="w-4 h-4 mr-2" />
                询问AI
              </>
            )}
          </Button>
        </div>
      </div>

      {response && (
        <div className="mt-6">
          <h4 className="font-medium mb-3 text-purple-400">AI专家回复：</h4>
          <div className="bg-black/50 p-6 rounded-lg border border-gray-700">
            <div className="text-gray-300 leading-relaxed space-y-2">
              {formatResponse(response)}
            </div>
          </div>
          <Button 
            onClick={handleNewQuestion}
            variant="outline"
            className="mt-4 border-purple-400/30 text-purple-400 hover:bg-purple-400/10"
          >
            提问其他问题
          </Button>
        </div>
      )}

      <div className="mt-4 text-xs text-gray-500">
        <p>💡 试试询问：瘦脸针效果、鼻型整形价格、下巴塑形、肉毒杆菌安全性、玻尿酸维持时间</p>
      </div>
    </div>
  );
};

export default ChineseAISearchBar;
