import React, { useState } from 'react';
import { MessageSquare, ArrowLeft, ArrowRight, Lightbulb, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

interface StageDialogueProps {
  onComplete: () => void;
  onBack: () => void;
}

export const StageDialogue: React.FC<StageDialogueProps> = ({ onComplete, onBack }) => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [expandedSteps, setExpandedSteps] = useState<Record<number, boolean>>({ 0: true });

  const dialogueSteps = [
    {
      step: 1,
      instruction: 'التبسيط والتكييف مع واقع القسم',
      prompt: 'النشاط المقترح صعب على تلامذة المستوى المتوسط. بسّطه.',
      pedagogicalGoal: 'إعادة تكييف المهام حتى لا يشعر التلميذ بالعجز والتعثر.',
      aiResponse: `بكل سرور! إليك نسخة مبسطة أكثر واقعية:
- بدل دراسة 3 غازات ومعادلات معقدة، نركز فقط على غاز ثاني أكسيد الكربون (CO2).
- نعطي التلاميذ بطاقات صورية ملونة وملموسة: (سيارة، مصنع، شجرة، بحر).
- المطلوب: ربط الصورة بالبطاقة المناسبة: هل هذه الصورة تزيد الحرارة أم تقللها؟
- زمن الإنجاز: 12 دقيقة فقط مع توجيه مباشر من الأستاذ.`,
    },
    {
      step: 2,
      instruction: 'البيداغوجيا الفارقية وصعوبات التعلم',
      prompt: 'أعطني نسخة مناسبة لتلامذة يعانون من صعوبات في الفهم.',
      pedagogicalGoal: 'تطبيق البيداغوجيا الفارقية (Différenciation pédagogique) دون إقصاء أي تلميذ.',
      aiResponse: `إليك نشاط مكيف (Pédagogie différenciée):
- نص قصير جداً ومشكول من 3 أسطر فقط وبخط كبير.
- أسئلة مغلقة بخيارات متعددة (QCM) مصحوبة بأيقونات توضيحية.
- سند بصري واضح: صورة لميزان حرارة قبل وبعد غرس الأشجار.
- عمل ثنائي مع تلميذ ميسّر (Tutorat entre pairs) لتعزيز الثقة.`,
    },
    {
      step: 3,
      instruction: 'تطوير التفكير الناقد وليس التلقين',
      prompt: 'أضف سؤالين يساعدان التلميذ على التفكير دون إعطائه الإجابة.',
      pedagogicalGoal: 'تحفيز التفكير الاستقرائي والمساءلة الذاتية لدى المتعلم.',
      aiResponse: `السؤال 1 (ملاحظة واستنتاج):
«إذا كانت السيارة تطلق دخاناً والشجرة تتغذى على الغاز، فماذا يحدث لحرارة الحي إذا قطعنا كل الأشجار وفتحنا طريقاً سريعاً؟»

السؤال 2 (تفكير نقدي وحل مشكلات):
«لاحظتَ أن الغسيل يجف أسرع عندما تكون الشمس قوية، فكيف تفسر بقاء الأرض رطبة تحت الأشجار الكثيفة؟ ماذا تستنتج عن دور الغطاء النباتي؟»`,
    },
    {
      step: 4,
      instruction: 'التقويم التكويني السريع',
      prompt: 'اقترح لي تقويمًا مدته 5 دقائق.',
      pedagogicalGoal: 'قياس مدى تحقق الهدف البيداغوجي في نهاية الحصة بشكل عملي.',
      aiResponse: `تقويم 5 دقائق (بطاقة الخروج - Billet de sortie):
على ورقة صغيرة يسلمها التلميذ عند مغادرة القاعة:
1. اذكر سبباً بشرياً واحداً يؤدي لسخونة الأرض.
2. اكتب تصرفاً شخصياً واحداً تستطيع القيام به في معهدك للحد من ذلك.
(يكتب التلميذ اسمه وجملتين سريعتين لتقييم المكتسبات فحصاً سريعاً).`,
    },
  ];

  const toggleExpand = (idx: number) => {
    setExpandedSteps((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white font-mono font-bold flex items-center justify-center text-sm shadow-xs flex-shrink-0">
              00:35
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-800 border border-indigo-200 mb-1.5">
                <span>التجربة الثالثة • 15 دقيقة (00:35 → 00:50) • كفاءة C4</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                التجربة الثالثة: فن الحوار مع الذكاء الاصطناعي
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                الآن <strong className="text-slate-900">لا نكتب Prompt جديداً</strong>، بل نواصل نفس المحادثة: نطلب، نلاحظ، نصحح، ونطوّر خطوة بخطوة.
              </p>
            </div>
          </div>

          <div className="px-3.5 py-2.5 rounded-xl bg-slate-900 text-white text-xs max-w-xs text-center font-mono border border-slate-800">
            Demander → Observer → Corriger → Améliorer
          </div>
        </div>
      </div>

      {/* The Core Paradigm Shift Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-slate-100 rounded-2xl p-5 border border-slate-200 text-slate-700">
          <div className="flex items-center gap-2 mb-2 text-slate-900 font-bold text-sm">
            <span className="w-3 h-3 rounded-full bg-slate-400" />
            <span>مع محرك البحث Google:</span>
          </div>
          <div className="font-mono text-sm font-bold text-slate-800 flex items-center gap-2 py-2">
            <span>نبحث</span>
            <span>←</span>
            <span>نجد</span>
            <span>←</span>
            <span>نقرأ</span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            عملية بحث خطية جامدة؛ المحرك يعرض ما هو موجود مسبقاً دون تفاعل وتفاوض بيداغوجي.
          </p>
        </div>

        <div className="bg-indigo-600 text-white rounded-2xl p-5 border border-indigo-500 shadow-sm">
          <div className="flex items-center gap-2 mb-2 font-bold text-sm">
            <Lightbulb className="w-5 h-5 text-indigo-200" />
            <span>مع المساعد الذكي AI Assistant:</span>
          </div>
          <div className="font-mono text-sm font-black flex items-center gap-1.5 py-2 flex-wrap">
            <span>نطلب</span>
            <span>←</span>
            <span>نناقش</span>
            <span>←</span>
            <span>نصحح</span>
            <span>←</span>
            <span>نطور</span>
            <span>←</span>
            <span>نعيد الطلب</span>
          </div>
          <p className="text-xs text-indigo-100 font-medium mt-1">
            وهذه من أهم أفكار التكوين كاملًا: الأستاذ هو الموجه والمتحكم في المخرجات.
          </p>
        </div>
      </div>

      {/* Interactive Dialogue Chain */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
        <h3 className="font-bold text-base text-slate-900 flex items-center gap-2 mb-4">
          <MessageSquare className="w-5 h-5 text-indigo-600" />
          <span>سلسلة الحوار التوجيهي (4 جولات من التحسين المستمر):</span>
        </h3>

        <div className="space-y-3">
          {dialogueSteps.map((step, idx) => {
            const isExpanded = expandedSteps[idx];
            return (
              <div
                key={step.step}
                className="border border-slate-200 rounded-xl overflow-hidden transition-all bg-slate-50/50"
              >
                <button
                  type="button"
                  onClick={() => toggleExpand(idx)}
                  className="w-full text-right p-4 flex items-center justify-between hover:bg-slate-100/70 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-slate-900 text-indigo-300 font-mono text-xs font-bold flex items-center justify-center">
                      #{step.step}
                    </span>
                    <div>
                      <div className="text-xs font-bold text-slate-900">{step.instruction}</div>
                      <div className="text-[11px] font-mono text-indigo-700 font-semibold mt-0.5">
                        «{step.prompt}»
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-slate-400">
                    <span className="text-[11px] text-slate-500 hidden sm:inline font-medium">
                      {step.pedagogicalGoal}
                    </span>
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isExpanded && (
                  <div className="p-4 pt-2 border-t border-slate-200/80 bg-white text-xs space-y-2.5">
                    <div className="p-2.5 rounded-lg bg-indigo-50/70 border border-indigo-200/60 text-indigo-950 font-medium">
                      🎯 <strong>الهدف البيداغوجي للخطوة:</strong> {step.pedagogicalGoal}
                    </div>
                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-slate-800 leading-relaxed font-sans whitespace-pre-line">
                      {step.aiResponse}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-200">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-100 text-xs font-medium"
        >
          <ArrowRight className="w-4 h-4" />
          <span>العودة للتجربة 2</span>
        </button>

        <button
          type="button"
          onClick={onComplete}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-sm transition-all"
        >
          <span>الانتقال للاستراحة والتحدي ☕</span>
          <ArrowLeft className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
