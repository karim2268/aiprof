import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Search, 
  ShieldCheck, 
  Copy, 
  CheckCheck, 
  AlertCircle, 
  Clock, 
  Scale, 
  HelpCircle, 
  Check, 
  X,
  Sparkles,
  RefreshCw,
  GitCommit
} from 'lucide-react';

interface StageS4AiReviewerProps {
  onPrev?: () => void;
  onComplete: () => void;
}

export const StageS4AiReviewer: React.FC<StageS4AiReviewerProps> = ({ onPrev, onComplete }) => {
  const [copied, setCopied] = useState(false);
  const [decisions, setDecisions] = useState<Record<string, 'accept' | 'reject' | 'pending'>>({
    ambiguity: 'accept',
    repetition: 'accept',
    time: 'reject',
    balance: 'accept',
  });

  const reviewerPrompt = `تصرف كمراجع تربوي خبير في تقييم الامتحانات المدرسية.
لا تعد كتابة الاختبار. حلله نقدياً فقط وحدد لي:
1. الأسئلة الغامضة أو التي تحتمل أكثر من تأويل لدى التلميذ.
2. الأخطاء العلمية أو الحسابية المحتملة.
3. الأسئلة المتكررة التي تقيس نفس المهارة دون داعٍ.
4. عدم التوازن في الصعوبة (هل الامتحان سهل جداً أم تعجيزي؟).
5. مدى مطابقة الأسئلة مع الأهداف المصرح بها.
6. هل الزمن المقترح (45 دقيقة) واقعي لتلميذ يكتب ويراجع بهدوء؟`;

  const reviewFindings = [
    {
      id: 'ambiguity',
      title: '1. فحص الغموض والالتباس اللفظي',
      icon: HelpCircle,
      tag: 'تنبيه صياغة',
      tagColor: 'bg-amber-100 text-amber-800 border-amber-200',
      finding: 'في التمرين الثاني، عبارة "ميزانية قدرها 55 ديناراً": بعض التلاميذ قد يفهم أن المطلوب هو صرف كامل المبلغ، وليس مقارنة السعر الجديد بالميزانية.',
      recommendation: 'استبدال العبارة بـ: "إذا كان في جيب مريم 55 ديناراً، فهل سيبقى معها نقود بعد الدفع؟ كم يتبقى؟".',
    },
    {
      id: 'repetition',
      title: '2. فحص التكرار وعدم التوازن',
      icon: Scale,
      tag: 'تكرار مهام',
      tagColor: 'bg-blue-100 text-blue-800 border-blue-200',
      finding: 'التمرين الأول والثاني كلاهما يعتمدان على حساب "تخفيض بالسعر". لا يوجد سؤال يقيس نسبة الزيادة (مثل التضخم أو زيادة فاتورة).',
      recommendation: 'تعديل الجزء الأول من التمرين 1 ليكون حساب نسبة زيادة 10% على فاتورة لاختبار كلا الاتجاهين.',
    },
    {
      id: 'time',
      title: '3. واقعية الزمن التقديري (45 دقيقة)',
      icon: Clock,
      tag: 'ضغط زمني',
      tagColor: 'bg-rose-100 text-rose-800 border-rose-200',
      finding: 'التمرين الرابع يحتاج 15 دقيقة، والتمرين الثالث 12 دقيقة. هذا يترك 18 دقيقة فقط للتمرينين الأولين وكتابة الأسماء وقراءة الورقة والمراجعة. الزمن مشدود جداً للقسم المتوسط.',
      recommendation: 'حذف أحد الجزئيات في التمرين الثالث أو تقليل عدد كرات القدم في التمرين الرابع لتبسيط الحسابات الذهنية.',
    },
    {
      id: 'balance',
      title: '4. تطابق الأسئلة مع الأهداف الرسمية',
      icon: ShieldCheck,
      tag: 'مطابقة عالية',
      tagColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      finding: 'الامتحان يغطي مستويات بلوم الأربعة (معرفة، تطبيق، تحليل، تقويم) بشكل ممتاز ويسمح بالتمييز بين التلاميذ بإنصاف.',
      recommendation: 'تثبيت سلم التنقيط المبرر لأنه يعطي كل ذي حق حقه في كل خطوة.',
    },
  ];

  const handleDecision = (id: string, action: 'accept' | 'reject') => {
    setDecisions((prev) => ({ ...prev, [id]: action }));
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(reviewerPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-violet-950 via-slate-900 to-indigo-950 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/20 text-violet-200 border border-violet-400/30 text-xs font-semibold">
            <span>الحصة 4 • المرحلة 5 (00:50 → 01:00)</span>
            <span>•</span>
            <span>🔍 وضع المراجع التربوي (Reviewer Mode)</span>
          </div>

          <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
            AI كمراجع تربوي: <span className="text-violet-300">«حلل فقط ولا تعد الكتابة»</span>
          </h1>

          <p className="text-violet-100/90 text-base max-w-3xl leading-relaxed">
            التحول الأقوى في هذه الحصة: لا تطلب من الذكاء الاصطناعي أن يكتب لك الامتحان فقط، بل اطلب منه أن يلبس قبعة <strong>المراجع التربوي الناقد</strong> ليفحص الاختبار ويكشف عيوبه الخفية قبل أن يصل إلى أيدي التلاميذ!
          </p>
        </div>
      </div>

      {/* The Triple Role Transformation Visual */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
        <div className="text-xs font-bold text-slate-500 uppercase tracking-wide text-center">
          التحول الثلاثي في علاقة الأستاذ بالذكاء الاصطناعي
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-2 opacity-60">
            <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center mx-auto font-bold text-xs">
              1
            </div>
            <div className="font-bold text-slate-700 text-sm">Generator (مُوَلِّد)</div>
            <div className="text-xs text-slate-500">«اعمللي 10 أسئلة» (مستوى بدائي سطحي)</div>
          </div>

          <div className="p-4 rounded-xl bg-violet-50 border-2 border-violet-400 text-center space-y-2 shadow-xs">
            <div className="w-8 h-8 rounded-full bg-violet-600 text-white flex items-center justify-center mx-auto font-bold text-xs">
              2
            </div>
            <div className="font-bold text-violet-950 text-sm">Reviewer (مُراجِع ناقد)</div>
            <div className="text-xs text-violet-800 font-semibold">«افحص امتحاني واكشف الغموض» (كشف الثغرات)</div>
          </div>

          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
            <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto font-bold text-xs">
              3
            </div>
            <div className="font-bold text-emerald-950 text-sm">Assistant (مساعد تكييف)</div>
            <div className="text-xs text-emerald-800 font-semibold">«نوّع الصعوبة لحالات خاصة» (تعديل بيداغوجي)</div>
          </div>
        </div>
      </div>

      {/* Reviewer Mode Master Prompt */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-violet-900 font-bold text-sm">
            <Search className="w-5 h-5 text-violet-600" />
            <span>الـ Prompt الاحترافي لتفعيل وضع المراجع التربوي الناقد</span>
          </div>
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium transition"
          >
            {copied ? <CheckCheck className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'تم النسخ' : 'نسخ الـ Prompt'}</span>
          </button>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 font-mono text-xs sm:text-sm text-slate-800 leading-relaxed whitespace-pre-line">
          {reviewerPrompt}
        </div>
      </div>

      {/* Interactive Reviewer Audit Cards */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-slate-900 text-base">تقرير الفحص البيداغوجي الناتج وقرارات الأستاذ:</h3>
          <span className="text-xs text-slate-500">أنت صاحب القرار النهائي — اقبل أو ارفض التوصية</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reviewFindings.map((item) => {
            const Icon = item.icon;
            const currentDecision = decisions[item.id];

            return (
              <div 
                key={item.id} 
                className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3 flex flex-col justify-between hover:border-slate-300 transition"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 font-bold text-sm text-slate-900">
                      <Icon className="w-4 h-4 text-violet-600" />
                      <span>{item.title}</span>
                    </div>
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md border ${item.tagColor}`}>
                      {item.tag}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <strong>الملاحظة:</strong> {item.finding}
                  </p>

                  <p className="text-xs text-violet-950 font-medium bg-violet-50/70 p-2.5 rounded-xl border border-violet-100/80">
                    💡 <strong>توصية الذكاء الاصطناعي:</strong> {item.recommendation}
                  </p>
                </div>

                {/* Teacher Decision Controls */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-700">قرار الأستاذ:</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleDecision(item.id, 'accept')}
                      className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                        currentDecision === 'accept'
                          ? 'bg-emerald-600 text-white shadow-xs'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>قبول التعديل</span>
                    </button>

                    <button
                      onClick={() => handleDecision(item.id, 'reject')}
                      className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                        currentDecision === 'reject'
                          ? 'bg-rose-600 text-white shadow-xs'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      <X className="w-3.5 h-3.5" />
                      <span>رفض (الاحتفاظ بالأصل)</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Summary Callout */}
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 text-xs text-emerald-950 leading-relaxed">
        🎯 <strong>خلاصة مرحلة المراجع:</strong> الأستاذ لا يأخذ ملاحظات الذكاء الاصطناعي كحقائق مطلقة؛ بل ينقد النقد! مثلاً: قد يرفض الأستاذ تقليل صعوبة تمرين لأنه يدرك أن القسم مستعد له جيداً وسبق أن تدرب على شيبه في القسم. القرار النهائي بيداغوجي وإنساني دائماً.
      </div>

      {/* Navigation Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200">
        <button
          onClick={onPrev}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-700 font-medium text-sm hover:bg-slate-50 transition"
        >
          <ArrowRight className="w-4 h-4" />
          <span>المرحلة السابقة: حقن القيود (45 دقيقة)</span>
        </button>

        <button
          onClick={onComplete}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition hover:translate-x-0.5"
        >
          <span>المرحلة التالية: استراحة وتأمل بيداغوجي (10 دقائق)</span>
          <ArrowLeft className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
