import React, { useState } from 'react';
import { Bot, Copy, Check, MessageSquareWarning, Lightbulb, ArrowLeft, ArrowRight } from 'lucide-react';

interface StageSimplePromptProps {
  onComplete: () => void;
  onBack: () => void;
}

export const StageSimplePrompt: React.FC<StageSimplePromptProps> = ({ onComplete, onBack }) => {
  const [copied, setCopied] = useState(false);
  const [activeCritiques, setActiveCritiques] = useState<string[]>([]);
  const [showTakeaway, setShowTakeaway] = useState(false);

  const promptText = 'حضّرلي درس حول الاحتباس الحراري لتلامذة السنة الأولى ثانوي.';

  const simulatedResponse = `عنوان الدرس: ظاهرة الاحتباس الحراري
المستوى: السنة الأولى ثانوي

1. مقدمة تعريفية:
الاحتباس الحراري هو ظاهرة طبيعية تضمن تدفئة كوكب الأرض نتيجة حبس بعض الغازات للإشعاعات تحت الحمراء. لكن الأنشطة البشرية مثل حرق الوقود الأحفوري وإزالة الغابات تسببت في تفاقم هذه الظاهرة وارتفاع متوسط درجات الحرارة العالمية.

2. الأسباب الرئيسية:
- انبعاثات غاز ثاني أكسيد الكربون (CO2) وغاز الميثان (CH4).
- التوسع الصناعي ووسائل النقل الملوثة.
- قطع الغابات وتراجع الغطاء النباتي.

3. العواقب البيئية:
- ذوبان الجليد في القطبين وارتفاع منسوب البحار والمحيطات.
- تصاعد حدة الظواهر المناخية القصوى كالجفاف والفيضانات والأعاصير.
- اضطراب النظم البيئية وتهديد التنوع البيولوجي.

4. الحلول المقترحة:
- الاعتماد على الطاقات المتجددة كالشمس والرياح.
- ترشيد استهلاك الطاقة وتدوير النفايات.
- التشجير وحماية الغابات.

5. خاتمة:
حماية المناخ مسؤولية جماعية تتطلب تضافر جهود الحكومات والأفراد.`;

  const commonCritiques = [
    'عام وجاف جدًا، كأنه ملخص من موسوعة ويكيبيديا',
    'لا توجد فيه أي وضعية مشكلة أو نشاط يستفز تفكير التلميذ',
    'غير محدد بتوقيت زمني (كم دقيقة لكل جزء؟)',
    'لا يراعي تلامذة القسم التونسي وبرنامجه الرسمي',
    'أين العمل الفوجي والتقويم التكويني؟',
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(promptText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleCritique = (critique: string) => {
    setActiveCritiques((prev) =>
      prev.includes(critique) ? prev.filter((c) => c !== critique) : [...prev, critique]
    );
    setShowTakeaway(true);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Stage Header */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white font-mono font-bold flex items-center justify-center text-sm shadow-xs flex-shrink-0">
              00:10
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-800 border border-indigo-200 mb-1.5">
                <span>التجربة الأولى • 10 دقائق (00:10 → 00:20) • كفاءة C1</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                التجربة الأولى: Prompt بسيط جدًا
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                نكتب أمام المجموعة طلباً عادياً جداً بدون أي تفاصيل، ثم نقرأ النتيجة ونسأل الأساتذة: «هل هذا مناسب لتلامذتكم؟»
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://chatgpt.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-xl text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-700 transition-colors shadow-xs"
            >
              فتح ChatGPT في نافذة جديدة
            </a>
            <a
              href="https://gemini.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-xl text-xs font-bold bg-indigo-600 text-white hover:bg-indigo-700 transition-colors shadow-xs"
            >
              فتح Gemini في نافذة جديدة
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left / Prompt & Response (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          {/* Prompt card */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
            <div className="flex items-center justify-between mb-3 text-xs font-bold text-slate-500">
              <span className="flex items-center gap-1.5 text-slate-900">
                <span className="w-2 h-2 rounded-full bg-indigo-600" />
                الـ Prompt الذي كتبناه أمام المجموعة:
              </span>
              <button
                type="button"
                onClick={handleCopy}
                className="flex items-center gap-1 text-slate-600 hover:text-slate-900 bg-slate-100 px-2.5 py-1 rounded-lg text-xs transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'تم النسخ' : 'نسخ الـ Prompt'}</span>
              </button>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 font-mono text-sm text-slate-900 font-semibold leading-relaxed">
              "{promptText}"
            </div>
          </div>

          {/* Simulated AI Response */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
            <div className="flex items-center gap-2 mb-3 pb-3 border-b border-slate-100">
              <div className="w-7 h-7 rounded-lg bg-slate-900 text-white flex items-center justify-center">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">إجابة الذكاء الاصطناعي الفورية (ChatGPT / Gemini)</div>
                <div className="text-[10px] text-slate-400">إجابة سريعة مبنية على الكلمات العامة فقط</div>
              </div>
            </div>

            <div className="bg-slate-50/70 p-4 rounded-xl border border-slate-200 text-xs text-slate-800 leading-relaxed font-sans whitespace-pre-line max-h-80 overflow-y-auto">
              {simulatedResponse}
            </div>
          </div>
        </div>

        {/* Right / Critiques & Takeaway (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
            <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2 mb-2">
              <MessageSquareWarning className="w-4 h-4 text-indigo-600" />
              <span>هل الدرس هذا مناسب لتلامذتكم؟</span>
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              انقر على انتقادات الأساتذة الميدانية في القاعة (نستمع إليهم ولا نصححهم):
            </p>

            <div className="space-y-2">
              {commonCritiques.map((critique, idx) => {
                const isSelected = activeCritiques.includes(critique);
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => toggleCritique(critique)}
                    className={`w-full text-right p-3 rounded-xl border text-xs leading-relaxed transition-all flex items-start gap-2.5 ${
                      isSelected
                        ? 'bg-rose-50 border-rose-300 text-rose-950 font-medium'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100/70'
                    }`}
                  >
                    <span className="text-rose-600 font-bold">❌</span>
                    <span>{critique}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Key Takeaway Card */}
          <div
            className={`rounded-2xl p-5 border transition-all ${
              showTakeaway || activeCritiques.length > 0
                ? 'bg-slate-900 border-slate-800 text-white shadow-md'
                : 'bg-slate-100 border-dashed border-slate-300 text-slate-500'
            }`}
          >
            <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold mb-2">
              <Lightbulb className="w-4 h-4" />
              <span>القاعدة الأولى التي نريد أن تترسخ في ذهن الأستاذ:</span>
            </div>
            <p className="text-sm font-bold leading-relaxed">
              «ممتاز. الذكاء الاصطناعي أعطانا إجابة، أما مازال ما يعرفش بالضبط شنوّة نحبوا.»
            </p>
            <div className="mt-3 pt-3 border-t border-white/10 text-xs text-slate-300 font-semibold flex items-center justify-between">
              <span>📌 النتيجة الذهبية:</span>
              <span className="text-indigo-300 font-bold text-sm">AI لا يقرأ أفكارنا!</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-200">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-100 text-xs font-medium"
        >
          <ArrowRight className="w-4 h-4" />
          <span>العودة للافتتاحية</span>
        </button>

        <button
          type="button"
          onClick={onComplete}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-sm transition-all"
        >
          <span>الانتقال للتجربة 2 (نعطيه السياق الكامل)</span>
          <ArrowLeft className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
