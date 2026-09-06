import React, { useState } from 'react';
import { Clock, CheckCircle2, ArrowLeft, ArrowRight, Layers, Sparkles, Copy, Check } from 'lucide-react';
import { SESSION_2_PROMPT_BUILDER_STEPS } from '../../data/workshopData';

interface StageS2StepBuilderProps {
  onComplete: () => void;
  onPrev: () => void;
}

export const StageS2StepBuilder: React.FC<StageS2StepBuilderProps> = ({ onComplete, onPrev }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(SESSION_2_PROMPT_BUILDER_STEPS.length - 1);
  const [copied, setCopied] = useState(false);

  const activeSteps = SESSION_2_PROMPT_BUILDER_STEPS.slice(0, currentStepIndex + 1);

  const fullPromptText = activeSteps.map((s) => s.addition).join(' ');

  const handleCopy = () => {
    navigator.clipboard.writeText(fullPromptText);
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
              00:25
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-800 border border-indigo-200 mb-1.5">
                <Clock className="w-3 h-3 text-indigo-600" />
                <span>الحصة 2 • 15 دقيقة (00:25 → 00:40) • الكفاءة C2: نبني الـPrompt بالتدريج</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                التجربة 2: نبني الـPrompt معًا بالتدريج (Construction progressive)
              </h2>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                نطبق النموذج الذهني المتكامل بإضافة المعايير الستة خطوة بخطوة، ونلاحظ كيف يتحول الطلب من فكرة مبهمة إلى جذاذة محكمة.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Step Builder */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Step list / selector */}
        <div className="lg:col-span-5 space-y-3">
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-indigo-600" />
                <span>مراحل بناء الـPrompt الثمانية:</span>
              </span>
              <span className="text-xs text-indigo-600 font-bold bg-indigo-50 px-2 py-0.5 rounded-full">
                {currentStepIndex + 1} / {SESSION_2_PROMPT_BUILDER_STEPS.length} مضاف
              </span>
            </div>

            <div className="space-y-2">
              {SESSION_2_PROMPT_BUILDER_STEPS.map((step, idx) => {
                const isActive = idx <= currentStepIndex;
                const isCurrent = idx === currentStepIndex;
                return (
                  <button
                    key={step.stepNumber}
                    onClick={() => setCurrentStepIndex(idx)}
                    type="button"
                    className={`w-full text-right p-3 rounded-xl border transition-all text-xs flex items-start gap-2.5 ${
                      isCurrent
                        ? 'bg-indigo-600 text-white border-indigo-700 shadow-xs'
                        : isActive
                        ? 'bg-indigo-50/70 text-indigo-950 border-indigo-200 hover:bg-indigo-100'
                        : 'bg-slate-50 text-slate-400 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-2xs flex-shrink-0 mt-0.5 ${
                        isCurrent
                          ? 'bg-white text-indigo-700'
                          : isActive
                          ? 'bg-indigo-200 text-indigo-800'
                          : 'bg-slate-200 text-slate-500'
                      }`}
                    >
                      {step.stepNumber}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold flex items-center justify-between">
                        <span>{step.component}</span>
                        {isActive && !isCurrent && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />}
                      </div>
                      <div className={`truncate mt-0.5 ${isCurrent ? 'text-indigo-100' : 'text-slate-500'}`}>
                        {step.addition}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Quick buttons */}
            <div className="pt-2 flex gap-2">
              <button
                type="button"
                onClick={() => setCurrentStepIndex(0)}
                className="flex-1 py-1.5 text-2xs rounded-lg border border-slate-200 hover:bg-slate-100 text-slate-600 font-medium"
              >
                البدء من الخطوة 1
              </button>
              <button
                type="button"
                onClick={() => setCurrentStepIndex(SESSION_2_PROMPT_BUILDER_STEPS.length - 1)}
                className="flex-1 py-1.5 text-2xs rounded-lg bg-indigo-50 border border-indigo-200 hover:bg-indigo-100 text-indigo-700 font-bold"
              >
                تطبيق كافة الخطوات
              </button>
            </div>
          </div>
        </div>

        {/* Live Prompt & Result Preview */}
        <div className="lg:col-span-7 space-y-4">
          {/* Assembled Prompt Card */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <span className="text-xs font-bold text-slate-800 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>الـPrompt المتراكم في هذه المرحلة (Prompt construit):</span>
              </span>
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-bold">تم النسخ!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-500" />
                    <span>نسخ الطلب</span>
                  </>
                )}
              </button>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs leading-relaxed space-y-2 border border-slate-800 shadow-inner">
              {activeSteps.map((step, idx) => (
                <span
                  key={step.stepNumber}
                  className={`inline mr-1 transition-all ${
                    idx === currentStepIndex
                      ? 'bg-indigo-600 text-white px-1.5 py-0.5 rounded font-bold'
                      : 'text-slate-200'
                  }`}
                >
                  {step.addition}{' '}
                </span>
              ))}
            </div>

            <div className="p-3.5 rounded-xl bg-indigo-50 border border-indigo-100 text-xs text-indigo-900 flex items-start gap-2">
              <span className="font-bold text-indigo-700 flex-shrink-0">الغرض من الخطوة {currentStepIndex + 1}:</span>
              <span>{SESSION_2_PROMPT_BUILDER_STEPS[currentStepIndex].purpose}</span>
            </div>
          </div>

          {/* Resulting lesson plan preview table */}
          {currentStepIndex >= 5 && (
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3 animate-in fade-in">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <span className="text-xs font-bold text-slate-800">
                  نموذج المخرج البيداغوجي الفوري (Tableau de séance 55 min):
                </span>
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  مخرج منظم للقسم مباشرة
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-right text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700 border-b border-slate-200">
                      <th className="p-2.5 font-bold">المرحلة والزمن</th>
                      <th className="p-2.5 font-bold">النشاط البيداغوجي</th>
                      <th className="p-2.5 font-bold">دور الأستاذ</th>
                      <th className="p-2.5 font-bold">دور التلميذ</th>
                      <th className="p-2.5 font-bold">الوسائل التعليمية</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-600">
                    <tr className="hover:bg-slate-50">
                      <td className="p-2.5 font-semibold text-slate-900">00:00 - 00:10 (وضعية مشكلة)</td>
                      <td className="p-2.5">صورة منزل جبلي معزول يعمل بمضخة شمسية</td>
                      <td className="p-2.5">طرح الإشكالية: كيف ننتج كهرباء دون شبكة؟</td>
                      <td className="p-2.5">تقديم فرضيات في مجموعات ثنائية</td>
                      <td className="p-2.5">مسلاط + صورة حقيقية</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-2.5 font-semibold text-slate-900">00:10 - 00:35 (نشاط استكشافي)</td>
                      <td className="p-2.5">تفكيك مبدأ عمل الخلية الكهروضوئية وسلسلة الطاقة</td>
                      <td className="p-2.5">تيسير النقاش وتوزيع بطاقات المهام</td>
                      <td className="p-2.5">رسم المخطط الطاقي والمقارنة بالخلية الحرارية</td>
                      <td className="p-2.5">وثيقة مصورة + بطاقات أفواج</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-2.5 font-semibold text-slate-900">00:35 - 00:45 (حوصلة وبناء المفهوم)</td>
                      <td className="p-2.5">صياغة الاستنتاج المشترك وقانون التحويل</td>
                      <td className="p-2.5">التأطير وتدوين الخلاصة على السبورة</td>
                      <td className="p-2.5">تدوين المفهوم على الكراس</td>
                      <td className="p-2.5">السبورة + الكراس</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-2.5 font-semibold text-slate-900">00:45 - 00:55 (تقويم تكويني)</td>
                      <td className="p-2.5">سؤال تطبيقي: حساب المردود وتحديد المكونات</td>
                      <td className="p-2.5">ملاحظة الإجابات وتقديم التغذية الراجعة</td>
                      <td className="p-2.5">حل فردي سريع (بطاقة خروج)</td>
                      <td className="p-2.5">بطاقات تقويم قصيرة</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-200">
        <button
          type="button"
          onClick={onPrev}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-medium text-xs transition-colors"
        >
          <ArrowRight className="w-4 h-4" />
          <span>السابق: فحص الـPrompt الضعيف</span>
        </button>

        <button
          type="button"
          onClick={onComplete}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-sm transition-all"
        >
          <span>التالي: المقارنة الحاسمة (Prompt A مقابل Prompt B)</span>
          <ArrowLeft className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
