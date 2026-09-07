import React, { useState } from 'react';
import { Clock, Layers, ArrowLeft, Copy, Check, Sparkles, ChevronRight, CheckCircle2 } from 'lucide-react';
import { SESSION_3_WORKFLOW_STEPS } from '../../data/workshopData';

interface StageS3StepByStepProps {
  onComplete: () => void;
}

export const StageS3StepByStep: React.FC<StageS3StepByStepProps> = ({ onComplete }) => {
  const [activeStep, setActiveStep] = useState(1);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const currentStepData = SESSION_3_WORKFLOW_STEPS.find((s) => s.stepNumber === activeStep) || SESSION_3_WORKFLOW_STEPS[0];

  const handleCopy = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
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
                <span>الحصة 3 • 20 دقيقة (00:25 → 00:45) • تفكيك المسار البيداغوجي</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                نبني الحصة خطوة بخطوة: مسار الـ 4 مراحل (Le Workflow)
              </h2>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                القاعدة الذهبية: لا تطلب منه الحصة كاملة. اطلب مرحلة بمرحلة، ناقش النتيجة، ثم انتقل للتالية.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-600">المراحل المكتملة:</span>
            <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 font-mono font-bold text-xs">
              {activeStep} / 4
            </span>
          </div>
        </div>
      </div>

      {/* 4-Step Nav Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3">
        {SESSION_3_WORKFLOW_STEPS.map((step) => {
          const isSelected = activeStep === step.stepNumber;
          return (
            <button
              key={step.stepNumber}
              type="button"
              onClick={() => setActiveStep(step.stepNumber)}
              className={`p-3.5 rounded-xl border text-right transition-all flex flex-col justify-between gap-2 ${
                isSelected
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                  : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <span className={`text-2xs font-bold uppercase tracking-wider ${isSelected ? 'text-indigo-200' : 'text-slate-400'}`}>
                  المرحلة {step.stepNumber}
                </span>
                {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
              </div>
              <div className="font-bold text-xs line-clamp-1">
                {step.stepNumber === 1 && '1. الأهداف والمكتسبات'}
                {step.stepNumber === 2 && '2. الوضعية الانطلاقية'}
                {step.stepNumber === 3 && '3. النشاط الاستكشافي'}
                {step.stepNumber === 4 && '4. التقويم التكويني'}
              </div>
            </button>
          );
        })}
      </div>

      {/* Step Detail Card */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
          <div>
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
              المرحلة {currentStepData.stepNumber} من مسار التصميم
            </span>
            <h3 className="text-xl font-bold text-slate-900 mt-0.5">{currentStepData.title}</h3>
          </div>
          <div className="px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 font-medium">
            🎯 <span className="font-bold text-slate-800">الهدف:</span> {currentStepData.pedagogicalGoal}
          </div>
        </div>

        {/* Prompt Template Box */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span>قالب الـ Prompt المهيكل للمرحلة {currentStepData.stepNumber}:</span>
            </span>
            <button
              type="button"
              onClick={() => handleCopy(currentStepData.promptTemplate, currentStepData.stepNumber)}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-800 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-lg transition-colors border border-indigo-100"
            >
              {copiedIndex === currentStepData.stepNumber ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">تم نسخ الـ Prompt!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>نسخ هذا القالب</span>
                </>
              )}
            </button>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 text-emerald-300 font-mono text-xs leading-relaxed whitespace-pre-line border border-slate-800 shadow-inner">
            {currentStepData.promptTemplate}
          </div>
          <p className="text-2xs text-slate-500">
            💡 نصيحة: املأ الأقواس [المادة، المستوى، الموضوع] ثم انسخه مباشرة في ChatGPT أو Gemini.
          </p>
        </div>

        {/* Pedagogical Commentary for this Step */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
              <span>ماذا ننتظر من الـ AI في هذه المرحلة؟</span>
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              {currentStepData.stepNumber === 1 &&
                'اقتراح أهداف قابلة للملاحظة والقياس بأفعال محددة، مع رصد التمثلات المغلوطة التي يقع فيها التلاميذ عادة.'}
              {currentStepData.stepNumber === 2 &&
                'اقتراح 3 خيارات وضعيات مختلفة حتى يختار الأستاذ أكثرها ملاءمة لبيئة تلامذته الحقيقية، لا خياراً واحداً مفروضاً.'}
              {currentStepData.stepNumber === 3 &&
                'هيكلة النشاط بطريقة تجعل التلميذ يحلل ويستنتج، مع إعطاء تعليمة واضحة للأستاذ لكيفية تيسير العمل التعاوني.'}
              {currentStepData.stepNumber === 4 &&
                'أداة تحقق سريعة (سؤال تطبيقي، سؤال نقل أثر، وشبكة رصد سريعة) لمعرفة من فهم ومن يحتاج تدخلاً علاجياً.'}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-indigo-50/70 border border-indigo-100 space-y-2">
            <h4 className="text-xs font-bold text-indigo-950 flex items-center gap-1.5">
              <span>دور الأستاذ كصاحب قرار بيداغوجي:</span>
            </h4>
            <p className="text-xs text-indigo-900 leading-relaxed">
              {currentStepData.stepNumber === 1 &&
                'أنت من يقرر إن كانت الأهداف مطابقة للمنهاج الرسمي التونسي وتحذف أي هدف زائد أو سابق لأوانه.'}
              {currentStepData.stepNumber === 2 &&
                'أنت من يختار الوضعية الأكثر إثارة لاهتمام تلامذتك بناءً على ثقافتهم وواقعهم اليومي.'}
              {currentStepData.stepNumber === 3 &&
                'أنت من يحدد هل النشاط قابل للتطبيق في وقت القاعة ومع وسائل المعهد المتوفرة أم يحتاج تبسيطاً.'}
              {currentStepData.stepNumber === 4 &&
                'أنت من يراقب الوقت ويحدد هل 10 دقائق تكفي أم يجب الاكتفاء بسؤال واحد فقط.'}
            </p>
          </div>
        </div>

        {/* Step Navigation Controls */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <button
            type="button"
            disabled={activeStep === 1}
            onClick={() => setActiveStep((prev) => Math.max(1, prev - 1))}
            className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 disabled:opacity-30"
          >
            المرحلة السابقة
          </button>

          {activeStep < 4 ? (
            <button
              type="button"
              onClick={() => setActiveStep((prev) => Math.min(4, prev + 1))}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-xs"
            >
              <span>الانتقال للمرحلة {activeStep + 1}</span>
              <ChevronRight className="w-4 h-4 rotate-180" />
            </button>
          ) : (
            <button
              type="button"
              onClick={onComplete}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-xs"
            >
              <span>إتمام المراحل الأربعة ← حقن سياق القسم</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
