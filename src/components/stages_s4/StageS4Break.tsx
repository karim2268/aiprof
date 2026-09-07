import React, { useState, useEffect } from 'react';
import { 
  Coffee, 
  ArrowLeft, 
  ArrowRight, 
  Play, 
  Pause, 
  RotateCcw, 
  Sparkles, 
  AlertTriangle, 
  CheckCircle2, 
  GraduationCap, 
  HeartHandshake,
  ShieldCheck,
  Brain
} from 'lucide-react';

interface StageS4BreakProps {
  onPrev?: () => void;
  onComplete: () => void;
}

export const StageS4Break: React.FC<StageS4BreakProps> = ({ onPrev, onComplete }) => {
  const [seconds, setSeconds] = useState(600); // 10 minutes
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: any = null;
    if (isActive && seconds > 0) {
      interval = setInterval(() => setSeconds((s) => s - 1), 1000);
    } else if (seconds === 0) {
      setIsActive(false);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const toggleTimer = () => setIsActive(!isActive);
  const resetTimer = () => {
    setIsActive(false);
    setSeconds(600);
  };

  const minutes = Math.floor(seconds / 60);
  const remainingSecs = seconds % 60;

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-300">
      {/* Break Header & Timer Banner */}
      <div className="bg-gradient-to-br from-amber-900 via-amber-950 to-slate-900 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-3 text-center md:text-right">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-200 border border-amber-400/30 text-xs font-semibold">
              <Coffee className="w-3.5 h-3.5" />
              <span>استراحة وتأمل بيداغوجي (10 دقائق) • منتصف الحصة</span>
            </div>
            <h1 className="text-3xl font-black text-white sm:text-4xl">
              وقفة تأمل: <span className="text-amber-300">ذكاء الأسئلة vs حكمة التقييم</span>
            </h1>
            <p className="text-amber-100/90 text-sm max-w-xl leading-relaxed">
              قهوة دافئة، تنفس عميق، ونقاش جانبي مع الزملاء: كيف نمنع الانزلاق نحو "طباعة" تمارين عشوائية دون بصمتنا البيداغوجية؟
            </p>
          </div>

          {/* Interactive Countdown */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 text-center shadow-lg w-64 shrink-0">
            <div className="text-4xl font-mono font-black text-amber-300 tracking-wider">
              {String(minutes).padStart(2, '0')}:{String(remainingSecs).padStart(2, '0')}
            </div>
            <div className="text-[11px] text-amber-200/80 font-medium mt-1">عداد الاستراحة والتأمل</div>
            
            <div className="flex items-center justify-center gap-2 mt-4">
              <button
                onClick={toggleTimer}
                className="p-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold transition shadow-xs"
                title={isActive ? 'إيقاف مؤقت' : 'بدء العد'}
              >
                {isActive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
              <button
                onClick={resetTimer}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition"
                title="إعادة ضبط (10 دقائق)"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Central Pedagogical Principle Banner */}
      <div className="bg-white rounded-3xl border-2 border-emerald-500/30 p-8 shadow-sm text-center space-y-4 relative overflow-hidden">
        <div className="w-16 h-16 rounded-3xl bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto border border-emerald-100 shadow-sm">
          <GraduationCap className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <div className="text-xs font-bold uppercase tracking-widest text-emerald-700">
            القاعدة الذهبية للتقييم في عصر الذكاء الاصطناعي
          </div>
          <blockquote className="text-2xl sm:text-3xl font-black text-slate-900 leading-snug">
            «L’IA peut générer des questions.<br />
            <span className="text-emerald-700">L’enseignant construit l’évaluation.</span>»
          </blockquote>
          <p className="text-sm font-bold text-slate-600">
            «الذكاء الاصطناعي يستطيع توليد آلاف الأسئلة في ثوانٍ... لكن الأستاذ وحده هو من يبني الاختبار الحقيقي.»
          </p>
        </div>
      </div>

      {/* Warning Against Dangerous Drift */}
      <div className="bg-rose-50 border-2 border-rose-200 rounded-2xl p-6 space-y-3">
        <div className="flex items-center gap-2 text-rose-800 font-bold text-sm">
          <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0" />
          <span>الخطر الأكبر الذي نحاربه في هذه الورشة: الانزلاق الآلي</span>
        </div>
        <div className="flex items-center gap-3 font-mono text-sm bg-white p-3 rounded-xl border border-rose-200 text-rose-950 font-bold overflow-x-auto">
          <span className="text-slate-400">❌ المسار الخاطئ:</span>
          <span>AI (Prompt سطحي)</span>
          <span className="text-rose-500 font-black">→</span>
          <span>توليد 30 سؤالاً</span>
          <span className="text-rose-500 font-black">→</span>
          <span>طباعة فورية (Print)</span>
          <span className="text-rose-500 font-black">→</span>
          <span className="text-rose-700 underline decoration-wavy">اختبار غير متوازن وظالم للتلميذ!</span>
        </div>
      </div>

      {/* Comparison: What Teacher Knows vs What AI Can Propose */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-2 font-bold text-emerald-900 text-sm pb-3 border-b border-slate-100">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <span>ما يعرفه الأستاذ فقط (الحكمة الإنسانية والميدانية)</span>
          </div>

          <ul className="space-y-3 text-xs text-slate-700">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>ماذا درسنا فعلاً في القسم؟</strong> (المكتسبات الفعلية مقابل المقرّر الورقي).</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>ما الذي نريد قياسه بدقة؟</strong> (هل نقيس الحساب السريع أم التفكير الاستدلالي؟).</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>ما الذي يستطيعه التلميذ؟</strong> (إيقاع الكتابة، قراءة النصوص المركبة، الفخاخ الشائعة).</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>المناخ النفسي للقسم:</strong> توزيع النقاط الذي يمنح التلميذ فرصة للمحاولة ولا يحبطه في أول 5 دقائق.</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-2 font-bold text-indigo-900 text-sm pb-3 border-b border-slate-100">
            <Sparkles className="w-5 h-5 text-indigo-600" />
            <span>ما يقدمه الذكاء الاصطناعي كمساعد قوي</span>
          </div>

          <ul className="space-y-3 text-xs text-slate-700">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
              <span><strong>تنويع السياقات والأفكار:</strong> اقتراح وضعيات حياتية واقعية ومبتكرة في ثوانٍ.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
              <span><strong>التدرج المعرفي:</strong> صياغة 4 مستويات متفاوتة الصعوبة بنفس المفهوم بدقة.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
              <span><strong>عين ناقدة ثانية (Reviewer):</strong> رصد الأخطاء اللفظية وسوء التقدير الزمني.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
              <span><strong>إعداد مسارات التمايز:</strong> نسخة تيسير للتلاميذ المتعثرين ونسخة تحدٍ للمتفوقين.</span>
            </li>
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
          <span>المرحلة السابقة: AI كمراجع تربوي</span>
        </button>

        <button
          onClick={onComplete}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition hover:translate-x-0.5"
        >
          <span>المرحلة التالية: النشاط 1 — بطاقة المشارك (Fiche participant)</span>
          <ArrowLeft className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
