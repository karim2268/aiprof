import React, { useState } from 'react';
import { Copy, Check, Sparkles, SlidersHorizontal, ArrowLeft, ArrowRight, HelpCircle } from 'lucide-react';

interface StageContextPromptProps {
  onComplete: () => void;
  onBack: () => void;
}

export const StageContextPrompt: React.FC<StageContextPromptProps> = ({ onComplete, onBack }) => {
  const [copied, setCopied] = useState(false);
  const [selectedParam, setSelectedParam] = useState<string | null>(null);

  const contextPrompt = `أنت أستاذ في التعليم الثانوي التونسي.
أريد إعداد حصة لتلامذة السنة الأولى ثانوي حول الاحتباس الحراري.
مدة الحصة 55 دقيقة.
مستوى التلامذة متوسط.
أريد أن تبدأ الحصة بوضعية مشكلة، ثم نشاط جماعي، ثم خلاصة قصيرة وتقويم في نهاية الحصة.
اقترح لي سيناريو عمليًا قابلًا للتطبيق داخل قسم عادي.`;

  const contextParameters = [
    {
      id: 'role',
      label: 'الدور والسياق المحلي',
      badge: 'أستاذ في التعليم الثانوي التونسي',
      effect: 'يضبط المصطلحات المعتمدة في البرامج التونسية والواقع المدرسي.',
    },
    {
      id: 'audience',
      label: 'المستوى الدقيق',
      badge: 'السنة الأولى ثانوي (مستوى متوسط)',
      effect: 'يتجنب التعقيد الجامعي والتسطيح الابتدائي.',
    },
    {
      id: 'duration',
      label: 'القيد الزمني',
      badge: '55 دقيقة بدقة',
      effect: 'توزيع الدقائق بشكل واقعي على كل مرحلة من مراحل الحصة.',
    },
    {
      id: 'structure',
      label: 'الهندسة البيداغوجية',
      badge: 'وضعية مشكلة ← نشاط جماعي ← خلاصة ← تقويم',
      effect: 'يحول الإجابة من نص سردي إلى سيناريو تعلمي نشط وتفاعلي.',
    },
  ];

  const contextualResponse = `سيناريو بيداغوجي لحصة 55 دقيقة: ظاهرة الاحتباس الحراري
المستوى: السنة الأولى ثانوي (التعليم التونسي) | الفئة: تلامذة بمستوى متوسط

⏱️ المرحلة 1: وضعية المشكلة والانطلاق (10 دقائق)
- السند: عرض جدول بياني مبسط لتطور متوسط درجات الحرارة وصورة لواحة توزر التونسية مع مقارنة بين الصيف الحالي والماضي.
- الإشكالية المطروحة للتلاميذ: «أكد فلاح تونسي أن صابة التمور تراجعت بسبب ارتفاع الحرارة غير المعتاد، بينما يرى زميله أن الطقس يتغير دائماً ولا خطر. كيف نثبت علمياً أن كوكبنا يعيش خللاً حرارياً غير مسبوق؟»
- التعليمة: صياغة فرضيات أولية في جملتين على كراس المحاولات.

⏱️ المرحلة 2: النشاط الجماعي الاستكشافي في أفواج (20 دقيقة)
- تقسيم القسم إلى 6 مجموعات (كل مجموعة 5 تلامذة).
- توزيع وثيقة بها رسم تخطيطي لدفيئة زراعية ومقارنتها بالغلاف الجوي وغازات الاحتباس الحراري (CO2, CH4, بخار الماء).
- المهام المحددة للأفواج:
  * الفوج 1 و 2: تحديد الغازات المسؤولة ومصادرها البشرية في تونس والعالم.
  * الفوج 3 و 4: تفسير آلية حبس الأشعة تحت الحمراء انطلاقاً من الرسم.
  * الفوج 5 و 6: توقع نتيجتين مباشرتين على الموارد المائية والفلاحة في منطقتنا.

⏱️ المرحلة 3: التأليف الجماعي والخلاصة (15 دقيقة)
- استعراض ممثل عن كل فوج للنتائج على السبورة (5 دقائق).
- بناء الخلاصة الموحدة بإشراف الأستاذ وتدوين المخطط المفاهيمي على الكراس (10 دقائق):
  (الأنشطة الملوثة → تكاثف غازات الدفيئة → حبس الإشعاع → ارتفاع الحرارة واضطراب المناخ).

⏱️ المرحلة 4: التقويم التكويني الختامي (10 دقائق)
- تمرين سريع (تطبيق في 5 دقائق):
  «صنّف السلوكيات التالية إلى سلوك يفاقم الاحتباس الحراري وسلوك يحد منه: (استعمال النقل العمومي، حرق الفضلات في الحقول، تشجير محيط المعهد، تشغيل مكيف الهواء على 18°C)».
- تصحيح جماعي شفوي فوري لترسيخ المفاهيم.`;

  const handleCopy = () => {
    navigator.clipboard.writeText(contextPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white font-mono font-bold flex items-center justify-center text-sm shadow-xs flex-shrink-0">
              00:20
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-800 border border-indigo-200 mb-1.5">
                <span>التجربة الثانية • 15 دقيقة (00:20 → 00:35) • كفاءة C2</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                التجربة الثانية: نعطيه السياق الكامل
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                نفس المهمة السابقة، لكن مع تزويد الذكاء الاصطناعي بكافة العناصر البيداغوجية والقيود الميدانية.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-indigo-50/80 border border-indigo-200/80 text-xs text-indigo-950 max-w-xs">
            <span className="font-bold block mb-1">السؤال التوليدي للأساتذة:</span>
            «شنوة تبدل بين التجربة الأولى والثانية؟ وعلاش؟»
          </div>
        </div>
      </div>

      {/* Context Parameters Breakdown */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
        <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2 mb-3">
          <SlidersHorizontal className="w-4 h-4 text-indigo-600" />
          <span>مفاتيح السياق البيداغوجي (انقر على كل عنصر لاكتشاف مفعوله):</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          {contextParameters.map((param) => {
            const isSelected = selectedParam === param.id;
            return (
              <button
                key={param.id}
                type="button"
                onClick={() => setSelectedParam(isSelected ? null : param.id)}
                className={`p-3.5 rounded-xl border text-right transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'bg-indigo-50 border-indigo-400 ring-2 ring-indigo-400/20 shadow-xs'
                    : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                }`}
              >
                <div>
                  <span className="text-[11px] font-bold text-slate-500 block mb-1">
                    {param.label}
                  </span>
                  <span className="text-xs font-bold text-slate-900 block leading-tight">
                    {param.badge}
                  </span>
                </div>
                <div className="mt-2.5 pt-2 border-t border-slate-200 text-[11px] text-slate-600">
                  {param.effect}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Side-by-Side: Context Prompt vs Detailed Output */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left / Context Prompt */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                <span>الـ Prompt الثاني (المعزز بالسياق):</span>
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
            <div className="p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs leading-relaxed whitespace-pre-line border border-slate-800">
              {contextPrompt}
            </div>

            <div className="mt-4 p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950">
              <strong>💡 ملاحظة هامة:</strong> لاحظ كيف حددنا النظام التعليمي، المدة بالدقيقة، وضعية البداية، وبنية الحصة.
            </div>
          </div>
        </div>

        {/* Right / Generated Response */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                <div className="text-xs font-bold text-slate-900">
                  نتيجة الذكاء الاصطناعي بعد تزويده بالسياق
                </div>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold">
                  سيناريو منظم وقابل للتطبيق فوراً
                </span>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-800 leading-relaxed whitespace-pre-line max-h-96 overflow-y-auto">
                {contextualResponse}
              </div>
            </div>

            {/* Reflection question box */}
            <div className="mt-4 p-4 rounded-xl bg-slate-900 text-white flex items-center justify-between gap-3 border border-slate-800">
              <div className="flex items-center gap-2.5">
                <HelpCircle className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                <div className="text-xs">
                  <span className="font-bold text-indigo-300 block">سؤال المقارنة للمجموعة:</span>
                  شنوة تبدل؟ وعلاش؟ (هنا يبرز مفهوم "السياق" كأداة تحكم بيداغوجية رئيسية).
                </div>
              </div>
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
          <span>العودة للتجربة الأولى</span>
        </button>

        <button
          type="button"
          onClick={onComplete}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-sm transition-all"
        >
          <span>الانتقال للتجربة 3 (فن الحوار: AI ليس Google)</span>
          <ArrowLeft className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
