import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Clock, 
  Award, 
  CheckCircle2, 
  Copy, 
  CheckCheck,
  Sliders,
  Scale,
  Sparkles,
  Info,
  Layers
} from 'lucide-react';

interface StageS4ExamConstraintsProps {
  onPrev?: () => void;
  onComplete: () => void;
}

export const StageS4ExamConstraints: React.FC<StageS4ExamConstraintsProps> = ({ onPrev, onComplete }) => {
  const [copied, setCopied] = useState(false);

  const examPrompt = `بناءً على التمارين السابقة:
عندي 45 دقيقة فقط في القسم، والمجموع 20 نقطة.
أنشئ موضوع اختبار متكاملاً مدته 45 دقيقة، بمجموع 20 نقطة، يغطي الأهداف التالية:
- حساب النسبة المئوية المباشرة.
- تطبيق النسبة في وضعية استهلاكية حياتية.
- حل وضعية مركبة ذات خطوتين.
- مقارنة عروض واتخاذ قرار مع التعليل.

المطلوب:
1. اقترح توزيعاً دقيقاً للنقاط (Barème) مع تبرير سبب إعطاء كل تمرين عدد النقاط المخصص له.
2. حدد الوقت التقديري الواقعي الذي يحتاجه تلميذ تونسي عادي للإجابة عن كل تمرين.`;

  const examStructure = [
    {
      num: 'تمرين 1',
      title: 'التطبيق المباشر (Calcul direct)',
      type: 'سؤالان قصيران',
      target: 'حساب النسبة واستنتاج المبلغ',
      points: 4,
      time: '8 دقائق',
      justification: 'يقيس الآلية الأساسية (الكفاءة الدنيا القاعدية). 4 نقاط كافية لضمان تحصيل التلميذ المتعثر لمكتسباته دون إثقال المجموع.',
      details: 'نقطتان لحساب قيمة التخفيض + نقطتان للمبلغ النهائي بعد التخفيض.',
    },
    {
      num: 'تمرين 2',
      title: 'الوضعية الحياتية الملموسة',
      type: 'مسألة قرار استهلاكي',
      target: 'توظيف النسبة المئوية في ميزانية تسوق',
      points: 5,
      time: '10 دقائق',
      justification: 'يتطلب قراءة نص، استخراج المعطيات، حساب السعر الجديد، ثم المقارنة مع الميزانية. 5 نقاط تكافئ خطوتين فكريتين.',
      details: '3 نقاط لحساب السعر بعد التخفيض + نقطتان للمقارنة مع الميزانية والتعليل اللفظي.',
    },
    {
      num: 'تمرين 3',
      title: 'التمرين المركب (Multi-étapes)',
      type: 'تخفيضان متتاليان',
      target: 'تفكيك الفخ الرياضي (عدم جمع النسب)',
      points: 5,
      time: '12 دقيقة',
      justification: 'يحتاج تركيزاً كبيراً لأن التخفيض الثاني يطبق على السعر الجديد. الخطأ فيه شائع جداً ويقيس عمق الفهم.',
      details: 'نقطتان للتخفيض الأول + نقطتان للتخفيض الثاني + نقطة للتعليل النقدي (10% + 5% ≠ 15%).',
    },
    {
      num: 'تمرين 4',
      title: 'وضعية النقد والمقارنة (Défi & Synthèse)',
      type: 'مقارنة عرضين تجاريين',
      target: 'اتخاذ القرار الأكثر اقتصاداً وتبريره',
      points: 6,
      time: '15 دقيقة',
      justification: 'يمثل أعلى مستوى معرفي (الإدماج والتقييم). يفرز التلاميذ المتفوقين ويمنحهم مساحة للبرهنة الحسابية السليمة.',
      details: 'نقطتان لحساب العرض A + نقطتان لحساب العرض B + نقطتان للمقارنة والتوصية المدعومة.',
    },
  ];

  const totalPoints = examStructure.reduce((sum, item) => sum + item.points, 0);
  const totalMinutes = 8 + 10 + 12 + 15; // 45 min

  const handleCopy = () => {
    navigator.clipboard.writeText(examPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-indigo-950 via-slate-900 to-blue-950 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/20 text-indigo-200 border border-indigo-400/30 text-xs font-semibold">
            <span>الحصة 4 • المرحلة 4 (00:40 → 00:50)</span>
            <span>•</span>
            <span>🎯 من تمارين إلى اختبار</span>
          </div>

          <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
            حقن القيود الحقيقية: <span className="text-indigo-300">45 دقيقة • 20 نقطة • سلم تنقيط مبرر</span>
          </h1>

          <p className="text-indigo-100/90 text-base max-w-3xl leading-relaxed">
            التمارين المعزولة شيء، وبناء اختبار رسمي منضبط بالزمن والعدد وقدرات القسم شيء آخر تماماً. نُدخل الذكاء الاصطناعي في حلبة قيود الواقع لنرى كيف يوزع النقاط ويفسر أسباب التوزيع.
          </p>
        </div>
      </div>

      {/* Constraints Injection Prompt */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-indigo-900 font-bold text-sm">
            <Sliders className="w-5 h-5 text-indigo-600" />
            <span>الـ Prompt المهيكل مع حقن قيود الزمن وسلم التنقيط المبرر</span>
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
          {examPrompt}
        </div>
      </div>

      {/* Constraints Summary Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs text-slate-500 font-medium">الزمن الإجمالي المتاح</div>
            <div className="text-xl font-black text-slate-900">{totalMinutes} دقيقة</div>
            <div className="text-[11px] text-emerald-600 font-semibold">موزعة بواقعية على 4 تمارين</div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs text-slate-500 font-medium">مجموع نقاط الاختبار</div>
            <div className="text-xl font-black text-slate-900">{totalPoints} / 20 نقطة</div>
            <div className="text-[11px] text-indigo-600 font-semibold">متدرجة: 4 + 5 + 5 + 6</div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
            <Scale className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs text-slate-500 font-medium">نوع سلم التنقيط</div>
            <div className="text-lg font-black text-slate-900">Barème Mبرر ومفصل</div>
            <div className="text-[11px] text-slate-500">لكل خطوة ذهنية علامتها</div>
          </div>
        </div>
      </div>

      {/* Justified Exam Architecture Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="p-5 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
            <Layers className="w-5 h-5 text-indigo-600" />
            <span>هندسة موضوع الاختبار المقترح وسلم التنقيط المبرر</span>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-100 text-indigo-800">
            تغطية كاملة للأهداف
          </span>
        </div>

        <div className="divide-y divide-slate-100">
          {examStructure.map((item, idx) => (
            <div key={idx} className="p-5 hover:bg-slate-50/70 transition space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-lg bg-slate-900 text-white font-bold text-xs">
                    {item.num}
                  </span>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">{item.title}</h4>
                </div>

                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-lg bg-blue-50 text-blue-800 border border-blue-200">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{item.time}</span>
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200">
                    <Award className="w-3.5 h-3.5" />
                    <span>{item.points} نقاط</span>
                  </span>
                </div>
              </div>

              <div className="text-xs text-slate-600 grid grid-cols-1 md:grid-cols-12 gap-3 pt-1">
                <div className="md:col-span-4 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <span className="font-bold text-slate-700 block mb-1">الهدف المقاس:</span>
                  {item.target}
                </div>
                <div className="md:col-span-8 bg-indigo-50/50 p-2.5 rounded-lg border border-indigo-100/70 text-indigo-950">
                  <span className="font-bold text-indigo-900 block mb-1">تبرير التنقيط (Justification du Barème):</span>
                  {item.justification}
                </div>
              </div>

              <div className="text-[11px] text-slate-500 font-mono bg-slate-100/70 px-3 py-1.5 rounded-md">
                تفصيل الدرجات: {item.details}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pedagogical Insight */}
      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 flex items-start gap-3.5">
        <Info className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
        <div className="text-xs text-blue-950 leading-relaxed space-y-1">
          <strong>لماذا نطلب تبرير سلم التنقيط؟</strong>
          <p>
            حين تطلب من الذكاء الاصطناعي تبرير النقاط، أنت تجبره على حساب الجهد المعرفي الذي يبذله التلميذ، مما يمنعه من إعطاء 10 نقاط لسؤال بديهي ونقطتين لمسألة معقدة تأخذ 20 دقيقة. هذا يضمن العدالة التقييمية للتلاميذ.
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
          <span>المرحلة السابقة: التمارين المتدرجة</span>
        </button>

        <button
          onClick={onComplete}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition hover:translate-x-0.5"
        >
          <span>المرحلة التالية: AI كمراجع تربوي (Reviewer Mode)</span>
          <ArrowLeft className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
