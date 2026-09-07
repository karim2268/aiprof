import React, { useState } from 'react';
import { Clock, Sliders, ArrowLeft, Copy, Check, ShieldAlert, Sparkles, Building2, CheckCircle2 } from 'lucide-react';
import { SESSION_3_CONTEXT_COMPARISON } from '../../data/workshopData';

interface StageS3ContextInjectionProps {
  onComplete: () => void;
}

export const StageS3ContextInjection: React.FC<StageS3ContextInjectionProps> = ({ onComplete }) => {
  const [copied, setCopied] = useState(false);
  const [activeConstraintView, setActiveConstraintView] = useState<'sideBySide' | 'prompt'>('sideBySide');

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white font-mono font-bold flex items-center justify-center text-sm shadow-xs flex-shrink-0">
              00:45
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-800 border border-indigo-200 mb-1.5">
                <Clock className="w-3 h-3 text-indigo-600" />
                <span>الحصة 3 • 10 دقائق (00:45 → 00:55) • لحظة الحقيقة والواقع المدرسي</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                «هل AI يعرف قسمي؟» — قوة حقن قيود الواقع التونسي
              </h2>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                المقارنة الصادمة بين خيال الـ AI في بيئة مثالية (حواسيب فردية وإنترنت) وبين واقع قاعاتنا (32 تلميذاً وسبورة بيضاء).
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveConstraintView('sideBySide')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeConstraintView === 'sideBySide'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              مقارنة السيناريوهين
            </button>
            <button
              type="button"
              onClick={() => setActiveConstraintView('prompt')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeConstraintView === 'prompt'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              قالب حقن السياق
            </button>
          </div>
        </div>
      </div>

      {/* Constraints Highlights */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
          <span className="text-2xs font-bold text-slate-500 block">حجم القسم</span>
          <span className="text-sm font-bold text-slate-800">32 تلميذاً في قاعة عادية</span>
        </div>
        <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
          <span className="text-2xs font-bold text-slate-500 block">تنوع المستويات</span>
          <span className="text-sm font-bold text-slate-800">تفاوت وبطء استيعاب</span>
        </div>
        <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
          <span className="text-2xs font-bold text-slate-500 block">الوسائل المتاحة</span>
          <span className="text-sm font-bold text-slate-800">سبورة + أوراق مطبوعة</span>
        </div>
        <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
          <span className="text-2xs font-bold text-slate-500 block">الوقت المتاح للنشاط</span>
          <span className="text-sm font-bold text-slate-800">18 دقيقة فقط</span>
        </div>
      </div>

      {/* Main Content Comparison */}
      {activeConstraintView === 'sideBySide' ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left: Unconstrained Dream / الاقتراح النظري غير الواقعي */}
          <div className="bg-white rounded-2xl p-5 border border-rose-200 shadow-xs space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-rose-100">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                <h3 className="font-bold text-slate-900 text-sm">
                  1. الاقتراح النظري الساذج (بدون سياق)
                </h3>
              </div>
              <span className="text-2xs font-semibold px-2 py-0.5 rounded bg-rose-50 text-rose-700 border border-rose-100">
                غير قابل للتطبيق في المعهد
              </span>
            </div>

            <div className="text-xs text-slate-500 italic bg-slate-50 p-2.5 rounded-lg border border-slate-200">
              الطلب: "{SESSION_3_CONTEXT_COMPARISON.unconstrainedPrompt}"
            </div>

            <div className="p-4 rounded-xl bg-rose-50/50 border border-rose-100 text-xs text-slate-700 leading-relaxed space-y-2">
              <p className="font-semibold text-rose-900">سيناريو الـ AI التخيلي:</p>
              <p>{SESSION_3_CONTEXT_COMPARISON.unconstrainedAiIdea}</p>
            </div>

            <div className="text-xs text-rose-800 bg-rose-100/60 p-3 rounded-xl border border-rose-200 space-y-1">
              <div className="font-bold">المشكلات الميدانية الفورية:</div>
              <ul className="list-disc list-inside space-y-0.5 text-2xs">
                <li>لا تتوفر قاعة إعلامية مخصصة لكل حصة فيزياء أو علوم.</li>
                <li>فيديو 15 دقيقة يعني حرق ثلث زمن الحصة في التلقي السلبي.</li>
                <li>المحاليل والأواني المتطورة غير متاحة لـ 32 تلميذاً في وقت واحد.</li>
              </ul>
            </div>
          </div>

          {/* Right: Context-Injected Reality / الاقتراح المكيّف الواقعي */}
          <div className="bg-white rounded-2xl p-5 border border-emerald-200 shadow-xs space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-emerald-100">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <h3 className="font-bold text-slate-900 text-sm">
                  2. الاقتراح المكيّف (بعد حقن سياق معهدنا)
                </h3>
              </div>
              <span className="text-2xs font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-100">
                جاهز للقسم غداً
              </span>
            </div>

            <div className="text-xs text-emerald-900 font-semibold bg-emerald-50 p-2.5 rounded-lg border border-emerald-100">
              تم حقن: 32 تلميذاً • قاعة عادية • سبورة + مطبوعات • 18 دقيقة.
            </div>

            <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-100 text-xs text-slate-800 leading-relaxed whitespace-pre-line">
              {SESSION_3_CONTEXT_COMPARISON.realisticAiOutput}
            </div>

            <div className="text-xs text-emerald-900 bg-emerald-100/60 p-3 rounded-xl border border-emerald-200 space-y-1">
              <div className="font-bold">المزايا البيداغوجية الصريحة:</div>
              <ul className="list-disc list-inside space-y-0.5 text-2xs">
                <li>العمل في ثنائيات يوفر الورق ويفعل النقاش الندي.</li>
                <li>بطاقة التلميح (Coup de pouce) تعالج تفاوت المستويات بهدوء.</li>
                <li>احترام دقيق لسقف الـ 50 دقيقة الإجمالي للحصة.</li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        /* Prompt View */
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-slate-900 text-base">
              قالب الـ Prompt: إعادة تكييف أي فكرة وفق قيود الواقع
            </h3>
            <button
              type="button"
              onClick={() => handleCopy(SESSION_3_CONTEXT_COMPARISON.contextInjectionPrompt)}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-800 bg-indigo-50 px-3 py-1.5 rounded-lg border border-indigo-100"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'تم النسخ!' : 'نسخ قالب الحقن'}</span>
            </button>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 text-emerald-300 font-mono text-xs leading-relaxed whitespace-pre-line border border-slate-800">
            {SESSION_3_CONTEXT_COMPARISON.contextInjectionPrompt}
          </div>

          <p className="text-xs text-slate-600">
            احفظ هذا الأمر دائمًا: كلما اقترح عليك الـ AI فكرة حالمة، أرسل له هذا القالب مع أرقام قسمك الحقيقي.
          </p>
        </div>
      )}

      {/* Core Message & Next Step */}
      <div className="p-5 rounded-2xl bg-indigo-50 border border-indigo-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="text-xs text-indigo-950 leading-relaxed">
          <span className="font-bold block text-sm mb-0.5 text-indigo-900">
            القاعدة: {SESSION_3_CONTEXT_COMPARISON.keyMessage}
          </span>
          قبل المرور للعمل الفردي: وقفة تأمل واستراحة خفيفة لترسيخ الفارق بين المساعد والبديل.
        </div>
        <button
          type="button"
          onClick={onComplete}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-colors shadow-xs flex-shrink-0"
        >
          <span>المحطة التالية: استراحة وتأمل بيداغوجي (☕)</span>
          <ArrowLeft className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
