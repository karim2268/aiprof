import React, { useState, useEffect } from 'react';
import { Clock, Coffee, Play, Pause, RotateCcw, ArrowLeft, ArrowRight, Sparkles, Target } from 'lucide-react';

interface StageS2BreakProps {
  onComplete: () => void;
  onPrev: () => void;
}

export const StageS2Break: React.FC<StageS2BreakProps> = ({ onComplete, onPrev }) => {
  const [secondsLeft, setSecondsLeft] = useState(600); // 10 minutes
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning && secondsLeft > 0) {
      timer = setInterval(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, secondsLeft]);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  const handleReset = () => {
    setIsRunning(false);
    setSecondsLeft(600);
  };

  const subjectIdeas = [
    { subject: 'الرياضيات', idea: 'تمرين استكشافي لإدخال مفهوم التناسبية أو النهايات عبر مشكلة حياتية' },
    { subject: 'العلوم الفيزيائية', idea: 'بطاقة تجربة مخبرية حول انحفاظ الطاقة بأدوات بسيطة متوفرة في المعهد' },
    { subject: 'العربية / اللغات', idea: 'سند نصي معاصر مع شبكة أسئلة تحليلية تركز على الإقناع والحجاج' },
    { subject: 'التاريخ والجغرافيا', idea: 'وضعية مشكلة لتحليل وثيقة خريطة تنموية للبلاد التونسية' },
    { subject: 'الإعلامية والتكنولوجيا', idea: 'نشاط برمجة بلغة بايثون أو خوارزمية مرتبطة بحل مسألة يومية' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500 text-white font-mono font-bold flex items-center justify-center text-sm shadow-xs flex-shrink-0">
              00:50
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200 mb-1.5">
                <Coffee className="w-3 h-3 text-amber-600" />
                <span>الحصة 2 • 10 دقائق (00:50 → 01:00) • استراحة بيداغوجية وتحدي ذهني</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                استراحة قهوة ☕ وتحدي التفكير لما بعد الاستراحة
              </h2>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                فرصة لأخذ نفس وتناول القهوة مع التفكير في المهمة البيداغوجية الحقيقية التي سنطبق عليها ورشة العمل التطبيقية.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Timer & Main Challenge Box */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Timer Card */}
        <div className="md:col-span-5 bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 shadow-md flex flex-col items-center justify-center space-y-4 text-center">
          <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
            <Clock className="w-4 h-4 text-amber-400" />
            <span>مؤقت الاستراحة (Pause café):</span>
          </div>

          <div className="text-6xl font-mono font-black text-amber-300 tracking-wider">
            {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
          </div>

          <div className="flex items-center gap-2 pt-2">
            <button
              onClick={() => setIsRunning(!isRunning)}
              className={`inline-flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-bold transition-all shadow-xs ${
                isRunning
                  ? 'bg-rose-600 hover:bg-rose-700 text-white'
                  : 'bg-emerald-600 hover:bg-emerald-700 text-white'
              }`}
            >
              {isRunning ? (
                <>
                  <Pause className="w-3.5 h-3.5" />
                  <span>إيقاف مؤقت</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5" />
                  <span>بدء المؤقت</span>
                </>
              )}
            </button>

            <button
              onClick={handleReset}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
              title="إعادة ضبط"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* The Post-Break Challenge */}
        <div className="md:col-span-7 bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-700">
              <Target className="w-4 h-4 text-indigo-600" />
              <span>إعلان التحدي القادم (Le Défi de l'atelier):</span>
            </div>

            <h3 className="text-lg font-bold text-slate-900 leading-snug">
              «بعد الاستراحة: كل أستاذ سيبني الـPrompt المثالي لمهمة حقيقية من مادتك!»
            </h3>

            <p className="text-xs text-slate-600 leading-relaxed">
              سنوزع ورقة العمل التفاعلية (Fiche participant) ونفكك طلبك باستعمال النموذج السداسي المعتمد:
            </p>

            <div className="p-3 bg-indigo-50/80 border border-indigo-200 rounded-xl text-xs font-mono font-bold text-indigo-950 text-center tracking-tight">
              RÔLE + CONTEXTE + TÂCHE + PUBLIC + CONTRAINTES + FORMAT
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 text-xs text-slate-500 italic">
            فكر أثناء شرب القهوة في أصعب درس أو تمرين تحتاج لتحضيره هذا الأسبوع!
          </div>
        </div>
      </div>

      {/* Idea triggers */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3">
        <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-500" />
          <span>أفكار ملهمة لأساتذة المواد المختلفة:</span>
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-1">
          {subjectIdeas.map((item, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
              <div className="font-bold text-slate-900 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                <span>{item.subject}</span>
              </div>
              <p className="text-slate-600 leading-relaxed text-2xs">{item.idea}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-200">
        <button
          type="button"
          onClick={onPrev}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-medium text-xs transition-colors"
        >
          <ArrowRight className="w-4 h-4" />
          <span>السابق: المقارنة الحاسمة</span>
        </button>

        <button
          type="button"
          onClick={onComplete}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-sm transition-all"
        >
          <span>التالي: النشاط 1 (فكك المهمة البيداغوجية)</span>
          <ArrowLeft className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
