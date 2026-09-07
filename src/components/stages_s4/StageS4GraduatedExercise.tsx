import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Target, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  Copy, 
  CheckCheck,
  ShieldAlert,
  HelpCircle,
  TrendingUp,
  Brain
} from 'lucide-react';

interface StageS4GraduatedExerciseProps {
  onPrev?: () => void;
  onComplete: () => void;
}

export const StageS4GraduatedExercise: React.FC<StageS4GraduatedExerciseProps> = ({ onPrev, onComplete }) => {
  const [copied, setCopied] = useState(false);
  const [activeLevel, setActiveLevel] = useState<number>(1);

  const structuredPrompt = `أريد تقييم قدرة التلميذ على تطبيق مفهوم النسبة المئوية في وضعيات من الحياة اليومية.
المستوى: التاسعة أساسي، مستوى متوسط.

اقترح عليّ 4 تمارين متدرجة كالتالي:
1. تطبيق مباشر (Calcul direct)
2. تطبيق في وضعية حياتية ملموسة (Contexte réel)
3. تمرين يتطلب أكثر من خطوة حسابية (Multi-étapes)
4. وضعية تتطلب التفكير والنقد والمقارنة (Réflexion & Esprit critique)

ملاحظة هامة: لا تعطيني الحلول الآن.`;

  const levelsData = [
    {
      level: 1,
      title: 'المستوى 1: تطبيق مباشر (Calcul direct)',
      subtitle: 'الهدف: التحقق من استيعاب الآلية الرياضية الأساسية',
      exercise: `اشترى سليم كتاباً بقيمة 40 ديناراً. حظي بتخفيض قدره 15% بمناسبة معرض الكتاب.
احسب قيمة التخفيض بالدينار، ثم استنتج المبلغ النهائي الذي دفعه سليم.`,
      cognitiveLevel: 'تطبيق أولي مباشر • خطوة حسابية واحدة واضحة',
      badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
    },
    {
      level: 2,
      title: 'المستوى 2: تطبيق في وضعية حياتية (Contexte réel)',
      subtitle: 'الهدف: ربط المفهوم الرياضي بقرار استهلاكي واقعي في تونس',
      exercise: `بمناسبة موسم التخفيضات، تعرض مغازة ملابس عرضاً خاصاً:
"تخفيض 30% على كل سروال سعره الأصلي 75 ديناراً".
إذا كان لدى مريم ميزانية قدرها 55 ديناراً، هل يكفيها هذا المبلغ لشراء السروال بعد التخفيض؟ علل إجابتك بحساب السعر بعد التخفيض.`,
      cognitiveLevel: 'وضعية حياتية • توظيف المفهوم للإجابة عن سؤال قرار واقعي',
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    },
    {
      level: 3,
      title: 'المستوى 3: أكثر من خطوة (Multi-étapes)',
      subtitle: 'الهدف: دمج عمليتين متتاليتين (تخفيض متتالٍ أو تخفيض ثم أداء)',
      exercise: `حاسوب محمول سعره الأصلي 1200 دينار.
خضع لتخفيض أول بنسبة 10% بمناسبة العودة المدرسية.
وفي اليوم الأخير من العرض، أضاف البائع تخفيضاً إضافياً بنسبة 5% على السعر المخفض الجديد (وليس على السعر الأصلي!).
1) احسب السعر بعد التخفيض الأول.
2) احسب السعر النهائي بعد التخفيض الثاني.
3) هل التخفيض الإجمالي يعادل 15% من السعر الأصلي؟ برر إجابتك بحساب دقيق.`,
      cognitiveLevel: 'تفكير متعدد الخطوات • تفكيك الفخ الشائع (10% + 5% ≠ 15%)',
      badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
    },
    {
      level: 4,
      title: 'المستوى 4: تفكير ونقد ومقارنة (Réflexion & Esprit critique)',
      subtitle: 'الهدف: تحليل عروض تجارية واتخاذ القرار الأمثل مع التعليل',
      exercise: `تريد مدرسة شراء 20 كرة قدم لنواديها الرياضية. سعر الكرة الواحدة في السوق 30 ديناراً.
وجدت مديرة المدرسة عرضين في مغازتين مختلفتين:
• العرض A: تخفيض فوري بنسبة 20% على إجمالي المبلغ.
• العرض B: "اشترِ 4 كرات واحصل على الخامسة مجاناً".
بصفتك مستشاراً للمديرة، أي العرضين أكثر اقتصاداً للمدرسة؟ وضّح مراحل مقارنتك بالتفصيل واكتب توصيتك المدعومة بالأرقام.`,
      cognitiveLevel: 'تحليل ونقد وتقييم (أعلى مستويات بلوم) • وضعية إدماجية دالة',
      badgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
    },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(structuredPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-teal-900 via-emerald-950 to-slate-900 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/20 text-teal-200 border border-teal-400/30 text-xs font-semibold">
            <span>الحصة 4 • المرحلة 3 (00:25 → 00:40)</span>
            <span>•</span>
            <span>🟢 البناء المتدرج</span>
          </div>

          <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
            نبني تمريناً بطريقة أفضل: <span className="text-teal-300">الانطلاق من الهدف</span>
          </h1>

          <p className="text-teal-100/90 text-base max-w-3xl leading-relaxed">
            بدلاً من طلب 10 أسئلة عشوائية، نحدد لـ AI هدفنا بدقة، ومستوى القسم، ونطلب منه 4 تمارين متدرجة معرفياً وفق سلم بلوم: مباشر، حياتي، مركب، ووضعية نقدية.
          </p>
        </div>
      </div>

      {/* The Master Prompt Box */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-teal-800 font-bold text-sm">
            <Target className="w-5 h-5 text-teal-600" />
            <span>الـ Prompt المهيكل: الانطلاق من الهدف البيداغوجي والتدرج</span>
          </div>
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium transition"
          >
            {copied ? <CheckCheck className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'تم النسخ' : 'نسخ الـ Prompt المهيكل'}</span>
          </button>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 font-mono text-xs sm:text-sm text-slate-800 leading-relaxed whitespace-pre-line">
          {structuredPrompt}
        </div>

        {/* The Golden Rule Callout */}
        <div className="bg-amber-50 border border-amber-300 rounded-xl p-4 flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="text-xs text-amber-950 leading-relaxed">
            <strong>القيد الذهبي: «لا تعطيني الحلول الآن»</strong> — 
            لماذا؟ لأن الذكاء الاصطناعي حين يطلب منه كتابة التمرين مع الحل في نفس الوقت، يميل لا إرادياً إلى تبسيط الأسئلة، أو حشو الحل داخل الصياغة، أو تقديم تمارين سطحية لتسهيل كتابة الإجابة. ركز أولاً على جودة السؤال ثم اطلب الحل في مرحلة لاحقة!
          </div>
        </div>
      </div>

      {/* Interactive 4-Level Showcase */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="font-bold text-slate-800 text-sm flex items-center gap-2">
            <Layers className="w-4 h-4 text-teal-600" />
            <span>التمارين الأربعة الناتجة (فحص التدرج البيداغوجي)</span>
          </div>
          <div className="flex gap-1.5">
            {[1, 2, 3, 4].map((lvl) => (
              <button
                key={lvl}
                onClick={() => setActiveLevel(lvl)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  activeLevel === lvl
                    ? 'bg-teal-700 text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                تمرين {lvl}
              </button>
            ))}
          </div>
        </div>

        <div className="p-6">
          {levelsData.map((item) => {
            if (item.level !== activeLevel) return null;
            return (
              <div key={item.level} className="space-y-4 animate-in fade-in duration-200">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-black text-slate-900">{item.title}</h3>
                    <p className="text-xs text-slate-500">{item.subtitle}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${item.badgeColor}`}>
                    {item.cognitiveLevel}
                  </span>
                </div>

                <div className="p-5 rounded-xl bg-slate-900 text-slate-100 font-sans text-sm leading-relaxed border border-slate-800 shadow-inner whitespace-pre-line">
                  {item.exercise}
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-500 pt-2 border-t border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>يقيس هدفاً تعليمياً دقيقاً ومصاغاً وفق السياق المعيشي التونسي للتلميذ.</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Comparison: Stage 2 vs Stage 3 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-rose-50/70 border border-rose-200 rounded-2xl p-5 space-y-2">
          <div className="text-xs font-bold text-rose-800 uppercase tracking-wide">الطلب العشوائي (المرحلة 2)</div>
          <h4 className="font-bold text-rose-950 text-base">«اعمللي 10 تمارين»</h4>
          <ul className="text-xs text-rose-900/80 space-y-1.5 list-disc list-inside leading-relaxed">
            <li>تمارين سطحية متشابهة بلا هدف دقيق</li>
            <li>كلها حساب آلي وحفظ معادلات</li>
            <li>إغفال التفكير النقدي وسياق القسم</li>
            <li>لا تصلح كأداة تشخيص حقيقية</li>
          </ul>
        </div>

        <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-5 space-y-2">
          <div className="text-xs font-bold text-emerald-800 uppercase tracking-wide">الطلب المهيكل (المرحلة 3)</div>
          <h4 className="font-bold text-emerald-950 text-base">«الهدف + 4 مستويات متدرجة + قيد لا حلول»</h4>
          <ul className="text-xs text-emerald-900/80 space-y-1.5 list-disc list-inside leading-relaxed">
            <li>تدرج صاعد من التطبيق الآلي إلى النقد والتحليل</li>
            <li>سياقات واقعية تونسية محفزة للتفكير</li>
            <li>تمييز دقيق بين من يفهم ومن يطبق آلياً</li>
            <li>أساس متين لبناء اختبار منضبط</li>
          </ul>
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200">
        <button
          onClick={onPrev}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-700 font-medium text-sm hover:bg-slate-50 transition"
        >
          <ArrowRight className="w-4 h-4" />
          <span>المرحلة السابقة: التجربة الخام</span>
        </button>

        <button
          onClick={onComplete}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition hover:translate-x-0.5"
        >
          <span>المرحلة التالية: من تمارين إلى اختبار (حقن قيود الواقع 45 دقيقة)</span>
          <ArrowLeft className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
