import React, { useState, useEffect } from 'react';
import { Coffee, Play, Pause, RotateCcw, ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';

interface StageBreakProps {
  onComplete: () => void;
  onBack: () => void;
}

export const StageBreak: React.FC<StageBreakProps> = ({ onComplete, onBack }) => {
  const [timeLeft, setTimeLeft] = useState<number>(10 * 60); // 10 minutes in seconds
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [lessonNote, setLessonNote] = useState<string>('');

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(10 * 60);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white font-mono font-bold flex items-center justify-center text-sm shadow-xs flex-shrink-0">
              00:50
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-800 border border-indigo-200 mb-1.5">
                <Coffee className="w-3.5 h-3.5 text-indigo-600" />
                <span>استراحة قصيرة • 10 دقائق (00:50 → 01:00)</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                استراحة القهوة وتحدي التفكير ☕
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                استراحة لتجديد النشاط مع تحدٍ ذهني سريع تمهيداً للانتقال إلى المرحلة التطبيقية الفردية (90% عملي).
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Interactive 10min timer */}
        <div className="lg:col-span-5">
          <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 shadow-md text-center flex flex-col items-center justify-center space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-400">
              مؤقت الاستراحة
            </span>
            <div className="text-6xl font-mono font-bold tracking-tight text-white py-2">
              {formatTime(timeLeft)}
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => setIsRunning(!isRunning)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs transition-all ${
                  isRunning
                    ? 'bg-amber-500 text-slate-950 hover:bg-amber-400'
                    : 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-sm'
                }`}
              >
                {isRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                <span>{isRunning ? 'إيقاف مؤقت' : 'بدء المؤقت'}</span>
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="p-2.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                title="إعادة ضبط"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

            {timeLeft === 0 && (
              <div className="text-amber-300 text-xs font-bold animate-pulse pt-2">
                انتهت الاستراحة! حان وقت التطبيق العملي.
              </div>
            )}
          </div>
        </div>

        {/* Right: The Pause Challenge */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs h-full flex flex-col justify-between space-y-4">
            <div>
              <div className="inline-block px-2.5 py-1 rounded-md bg-indigo-50 text-indigo-900 text-xs font-bold mb-2 border border-indigo-200">
                🎯 التحدي المطلوب من كل أستاذ أثناء الاستراحة:
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                «فكر في درس واحد من مادتك ستعمل عليه بعد الاستراحة»
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                لا تفكر في موضوع نظري أو خيالي؛ اختر موضوعاً حقيقياً تنوي تدريسه لطلابك في الأيام القادمة، أو مفهوماً تكرر تعثر التلاميذ فيه وتحتاج لتصميم نشاط أو تمرين ذكي له.
              </p>

              {/* Quick Scratchpad */}
              <div className="mt-4">
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  ملاحظتك السريعة (سجل موضوع الدرس الذي اخترته هنا):
                </label>
                <input
                  type="text"
                  value={lessonNote}
                  onChange={(e) => setLessonNote(e.target.value)}
                  placeholder="مثال: درس الدوال الخطية - تلامذة 1 ثانوي / نشاط بلاغة في الاستعارة..."
                  className="w-full px-4 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50"
                />
                {lessonNote && (
                  <div className="flex items-center gap-1.5 text-xs text-emerald-700 mt-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>ممتاز! سنستخدم هذا الموضوع مباشرة في ورقة العمل التالية.</span>
                  </div>
                )}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-500 text-xs font-mono">
              القاعدة الذهبية للجزء الثاني: 90% تطبيقي، لا وجود للنظريات المجردة!
            </div>
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-200">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-100 text-xs font-medium"
        >
          <ArrowRight className="w-4 h-4" />
          <span>العودة للتجربة 3</span>
        </button>

        <button
          type="button"
          onClick={onComplete}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-sm transition-all"
        >
          <span>الانتقال للنشاط العملي 1 (اختار مشكلتك)</span>
          <ArrowLeft className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
