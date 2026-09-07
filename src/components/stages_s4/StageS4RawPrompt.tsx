import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  AlertOctagon, 
  Check, 
  X, 
  HelpCircle, 
  Copy, 
  CheckCheck,
  Flame,
  Scale,
  Brain,
  Sparkles
} from 'lucide-react';

interface StageS4RawPromptProps {
  onPrev?: () => void;
  onComplete: () => void;
}

export const StageS4RawPrompt: React.FC<StageS4RawPromptProps> = ({ onPrev, onComplete }) => {
  const [copied, setCopied] = useState(false);
  const [checkedQuestions, setCheckedQuestions] = useState<Record<number, boolean>>({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
  });

  const rawPrompt = 'اعمللي 10 تمارين حول النسب المئوية للسنة التاسعة.';

  const simulatedExercises = [
    'تمرين 1: احسب 20% من العدد 150.',
    'تمرين 2: ما هي النسبة المئوية التي يمثلها العدد 15 من 60؟',
    'تمرين 3: احسب 15% من 80 ديناراً.',
    'تمرين 4: زاد سعر حذاء بنسبة 12%، وكان سعره الأصلي 90 ديناراً. ما هو السعر الجديد؟',
    'تمرين 5: احسب 25% من 200 كغ.',
    'تمرين 6: في قسم به 30 تلميذاً، 60% منهم إناث. كم عدد الإناث؟',
    'تمرين 7: احسب 5% من 500 مل.',
    'تمرين 8: انخفض سعر قميص من 50 ديناراً إلى 40 ديناراً، ما هي نسبة التخفيض؟',
    'تمرين 9: احسب 50% من نصف العدد 80.',
    'تمرين 10: اشترى تاجر بضاعة وباعها بربح قدره 18%. إذا كان ثمن الشراء 1200 دينار، فما ثمن البيع؟',
  ];

  const critiqueItems = [
    {
      id: 1,
      question: 'هل كلها نفس المستوى أم فيها تدرج حقيقي؟',
      diagnosis: 'معظمها (6 من 10) مجرد عمليات حسابية مباشرة وبسيطة بدون أي تدرج منطقي.',
      isFlawed: true,
    },
    {
      id: 2,
      question: 'هل تغطي أهداف الدرس الرسمية كافة؟',
      diagnosis: 'أهملت التخفيضات المتتالية، ومقارنة العروض، والمصادقة على الفرضيات، وقراءة الجداول.',
      isFlawed: true,
    },
    {
      id: 3,
      question: 'هل بعض التمارين متشابهة ومكررة بدون فائدة؟',
      diagnosis: 'التمارين 1 و 3 و 5 و 7 تقيس نفس العملية الحسابية الحرفية (حساب نسبة من مقدار).',
      isFlawed: true,
    },
    {
      id: 4,
      question: 'هل بعضها أصعب من اللازم أو خارج السياق التونسي؟',
      diagnosis: 'الصياغات عامة وتفتقر للواقع اليومي والمصطلحات المعتمدة في المناهج التونسية.',
      isFlawed: true,
    },
    {
      id: 5,
      question: 'هل فيها أخطاء أو التباسات في الصياغة؟',
      diagnosis: 'التمرين 9 مركب لفظياً بلا هدف بيداغوجي، والربح في تمرين 10 لم يحدد أهو من ثمن الشراء أم البيع.',
      isFlawed: true,
    },
    {
      id: 6,
      question: 'هل تقيس الفهم والتفكير أم الحفظ والتطبيق الآلي فقط؟',
      diagnosis: 'تقيس الحساب الذهني الآلي فقط ولا تتطلب أي تفكير نقدي أو حل وضعية مشكلة.',
      isFlawed: true,
    },
  ];

  const toggleCheck = (id: number) => {
    setCheckedQuestions((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(rawPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const allChecked = Object.values(checkedQuestions).filter(Boolean).length >= 4;

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-rose-950 via-slate-900 to-red-950 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/20 text-rose-200 border border-rose-400/30 text-xs font-semibold">
            <span>الحصة 4 • المرحلة 2 (00:10 → 00:25)</span>
            <span>•</span>
            <span>🔴 تجربة الصدمة المباشرة</span>
          </div>

          <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
            التجربة المباشرة: <span className="text-rose-300">«اعمللي 10 تمارين»</span>
          </h1>

          <p className="text-rose-100/90 text-base max-w-3xl leading-relaxed">
            الخطأ الأكثر شيوعاً عند الأساتذة في البداية: الدخول إلى ChatGPT وكتابة طلب سريع وفضفاض، ثم أخذ النتيجة وطباعتها مباشرة. لنكتشف معاً ما الذي يحدث ولماذا هذه الطريقة خطيرة بيداغوجياً!
          </p>
        </div>
      </div>

      {/* Raw Prompt Showcase */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-rose-700 font-bold text-sm">
            <AlertOctagon className="w-5 h-5" />
            <span>الـ Prompt الخام المباشر (طلب سطحي)</span>
          </div>
          <button
            onClick={handleCopyPrompt}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium transition"
          >
            {copied ? <CheckCheck className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'تم النسخ' : 'نسخ الـ Prompt'}</span>
          </button>
        </div>

        <div className="bg-rose-50/70 border border-rose-200 rounded-xl p-4 font-mono text-base font-bold text-rose-950 text-center">
          "{rawPrompt}"
        </div>
      </div>

      {/* Two Column Layout: Simulated AI Output vs Critical Questions */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Output Column */}
        <div className="lg:col-span-6 bg-slate-900 text-slate-100 rounded-2xl p-6 shadow-md border border-slate-800 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500 animate-pulse" />
              <span className="font-bold text-sm text-slate-200">النتيجة المولدة من الذكاء الاصطناعي</span>
            </div>
            <span className="text-xs text-slate-400">10 أسئلة سريعة</span>
          </div>

          <div className="space-y-2.5 font-sans text-xs leading-relaxed max-h-[420px] overflow-y-auto pr-1">
            {simulatedExercises.map((ex, index) => (
              <div 
                key={index}
                className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/60 hover:border-slate-600 transition"
              >
                {ex}
              </div>
            ))}
          </div>

          <div className="p-3 rounded-xl bg-slate-800 text-xs text-slate-400 leading-relaxed border border-slate-700">
            💬 <strong>الملاحظة الفورية:</strong> في ثانيتين، ولّد AI عشرة تمارين. لكن هل هذه التمارين صالحة لاختبار تلامذتك في القسم؟ لنفحصها معاً!
          </div>
        </div>

        {/* Critique Questions Column */}
        <div className="lg:col-span-6 bg-white rounded-2xl p-6 shadow-xs border border-slate-200 space-y-4">
          <div className="pb-3 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
              <Scale className="w-5 h-5 text-amber-600" />
              <span>شبكة النقد البيداغوجي (6 أسئلة مفصلية)</span>
            </div>
            <span className="text-xs font-semibold text-slate-500">
              {Object.values(checkedQuestions).filter(Boolean).length} من 6
            </span>
          </div>

          <p className="text-xs text-slate-600">
            انقر على الأسئلة بعد قراءة النتائج لتكشف الخلل البيداغوجي الكامن وراء كل نقطة:
          </p>

          <div className="space-y-2.5">
            {critiqueItems.map((item) => {
              const isChecked = checkedQuestions[item.id];
              return (
                <div
                  key={item.id}
                  onClick={() => toggleCheck(item.id)}
                  className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                    isChecked
                      ? 'bg-rose-50/80 border-rose-300 shadow-xs'
                      : 'bg-slate-50 hover:bg-slate-100/80 border-slate-200'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 transition ${
                      isChecked ? 'bg-rose-600 text-white' : 'border border-slate-300 bg-white'
                    }`}>
                      {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                    <div className="space-y-1 flex-1">
                      <div className="text-xs font-bold text-slate-900 leading-snug">
                        {item.question}
                      </div>
                      {isChecked && (
                        <div className="text-[11px] text-rose-900 font-medium bg-white/80 p-2 rounded-lg border border-rose-200/60 mt-1 animate-in fade-in">
                          ❌ <strong>التشخيص:</strong> {item.diagnosis}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* The Crucial Realization Callout */}
      <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600 text-white rounded-2xl p-7 shadow-lg relative overflow-hidden">
        <div className="space-y-2 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/20 text-white text-xs font-bold">
            <Flame className="w-4 h-4 text-amber-300" />
            <span>الاستنتاج البيداغوجي الحاسم للحصة</span>
          </div>

          <h3 className="text-2xl font-black text-white">
            «المشكل موش في قدرة الذكاء الاصطناعي على توليد الأسئلة...»
          </h3>

          <p className="text-amber-100 text-lg font-bold">
            «المشكل: هل الأسئلة تقيس فعلاً ما نريد قياسه؟»
          </p>

          <p className="text-sm text-white/90 leading-relaxed max-w-3xl pt-1">
            توليد 100 سؤال يستغرق ثوانٍ معدودة. لكن بناء تمرين يقيس هدفاً محدداً بدقة يتطلب منهجية مختلفة تماماً: <strong className="underline decoration-amber-300 underline-offset-4">الانطلاق من الهدف، لا من السؤال!</strong>
          </p>
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200">
        <button
          onClick={onPrev}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-700 font-medium text-sm hover:bg-slate-50 transition"
        >
          <ArrowRight className="w-4 h-4" />
          <span>المرحلة السابقة: الرجوع للحصة 3</span>
        </button>

        <button
          onClick={onComplete}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition hover:translate-x-0.5"
        >
          <span>المرحلة التالية: نبني تمريناً بطريقة أفضل (الانطلاق من الهدف)</span>
          <ArrowLeft className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
