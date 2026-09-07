import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Sparkles, 
  Users, 
  HelpCircle, 
  Lightbulb, 
  CheckCircle2, 
  AlertTriangle, 
  GraduationCap, 
  Target, 
  MessageSquare,
  ArrowRight,
  TrendingUp,
  Brain
} from 'lucide-react';

interface StageS4ReviewProps {
  onComplete: () => void;
}

export const StageS4Review: React.FC<StageS4ReviewProps> = ({ onComplete }) => {
  const [activeTab, setActiveTab] = useState<'success' | 'obstacle' | 'insight'>('success');
  const [teacherFeedback, setTeacherFeedback] = useState({
    experienceSuccess: 'جربت وضعية انطلاق في درس العلوم، التلاميذ تفاعلوا بحماس لكن الوقت كان أطول من المتوقع بـ 5 دقائق.',
    experienceObstacle: 'النشاط الذي اقترحه AI كان يفترض أن كل تلميذ يملك حاسوباً، بينما في قاعتنا نعتمد السبورة فقط.',
    aiBlindspot: 'الذكاء الاصطناعي لا يعرف وتيرة استيعاب تلامذتي، ولا عاداتهم في قراءة المنحنيات البيانية، ولا الفروق الفردية في سرعة الكتابة.',
  });

  const [hasReflected, setHasReflected] = useState<boolean>(false);

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-900 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -ml-20 -mt-20 pointer-events-none" />
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-200 border border-emerald-400/30 text-xs font-semibold">
            <span>الحصة 4 • المرحلة 1 (00:00 → 00:10)</span>
            <span>•</span>
            <span>Reality Check الصفي</span>
          </div>

          <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
            الرجوع إلى تجربة الحصة الثالثة: <span className="text-emerald-300">ماذا حدث في القسم؟</span>
          </h1>

          <p className="text-emerald-100/90 text-base max-w-3xl leading-relaxed">
            قبل أن ننتقل إلى بناء الفروض والتقييمات، نفتح حواراً حقيقياً مع الأساتذة: 
            <strong className="text-white"> شكون جرّب الحصة أو النشاط اللي حضّروه؟ </strong>
            وما الذي اكتشفتم أن الذكاء الاصطناعي يجهله تماماً عن واقع قاعتكم؟
          </p>
        </div>
      </div>

      {/* Core Question Highlight */}
      <div className="bg-amber-50 border-2 border-amber-300/80 rounded-2xl p-6 shadow-xs flex flex-col md:flex-row items-start md:items-center gap-5">
        <div className="w-14 h-14 rounded-2xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-md">
          <HelpCircle className="w-8 h-8" />
        </div>
        <div className="space-y-1.5 flex-1">
          <div className="text-xs font-bold text-amber-800 tracking-wide uppercase">السؤال المفصلي للربط البيداغوجي</div>
          <h3 className="text-xl font-black text-amber-950">
            «شنوة اكتشفتوا أن الذكاء الاصطناعي ما يعرفوش على قسمكم؟»
          </h3>
          <p className="text-sm text-amber-900/80 leading-relaxed">
            الذكاء الاصطناعي يقترح أفكاراً ممتازة، لكنه أعمى عن إيقاع التلاميذ، ومستوى التعب بعد الحصة الثالثة، والطباع الفردية، وصعوبات التعلم الخاصة بتلاميذك.
          </p>
        </div>
      </div>

      {/* Interactive Experience Explorer */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="border-b border-slate-200 bg-slate-50/70 p-4">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTab('success')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-all ${
                activeTab === 'success'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>تجربة ميدانية نجحت</span>
            </button>

            <button
              onClick={() => setActiveTab('obstacle')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-all ${
                activeTab === 'obstacle'
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <AlertTriangle className="w-4 h-4" />
              <span>تجربة واجهت مشكلة أو تعطلاً</span>
            </button>

            <button
              onClick={() => setActiveTab('insight')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-all ${
                activeTab === 'insight'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Brain className="w-4 h-4" />
              <span>الوعي بما يجهله AI عن القسم</span>
            </button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {activeTab === 'success' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-emerald-800">1. توثيق تجربة ناجحة من الحصة الثالثة</span>
                <span className="text-xs text-slate-500">مثال ميداني من أستاذ</span>
              </div>
              <textarea
                value={teacherFeedback.experienceSuccess}
                onChange={(e) => setTeacherFeedback({ ...teacherFeedback, experienceSuccess: e.target.value })}
                rows={3}
                className="w-full rounded-xl border border-slate-300 p-4 text-sm text-slate-800 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
                placeholder="اكتب ماذا جرّبت وما الذي نجح بوضوح..."
              />
              <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-4 text-xs text-emerald-900 leading-relaxed">
                💡 <strong>العبرة البيداغوجية:</strong> الذكاء الاصطناعي ممتاز في توليد وضعيات الانطلاق الجاذبة وصياغة الأسئلة المحفزة للتفكير الاستكشافي.
              </div>
            </div>
          )}

          {activeTab === 'obstacle' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-amber-800">2. توثيق تجربة ظهرت فيها صعوبة أو عدم ملاءمة</span>
                <span className="text-xs text-slate-500">رصد الفجوة بين الاقتراح والواقع</span>
              </div>
              <textarea
                value={teacherFeedback.experienceObstacle}
                onChange={(e) => setTeacherFeedback({ ...teacherFeedback, experienceObstacle: e.target.value })}
                rows={3}
                className="w-full rounded-xl border border-slate-300 p-4 text-sm text-slate-800 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                placeholder="اكتب ما الذي اقترحه AI وتعطل أثناء التطبيق في القسم..."
              />
              <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-4 text-xs text-amber-900 leading-relaxed">
                ⚠️ <strong>العبرة البيداغوجية:</strong> ما يبدو مثالياً على الشاشة قد يكون مستحيلاً في قاعة بها 32 تلميذاً وزمن ضيق وغياب للأجهزة الإلكترونية.
              </div>
            </div>
          )}

          {activeTab === 'insight' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-indigo-800">3. شنوة اكتشفتوا أن AI ما يعرفوش على قسمكم؟</span>
                <span className="text-xs text-slate-500">البوصلة البيداغوجية للأستاذ</span>
              </div>
              <textarea
                value={teacherFeedback.aiBlindspot}
                onChange={(e) => setTeacherFeedback({ ...teacherFeedback, aiBlindspot: e.target.value })}
                rows={3}
                className="w-full rounded-xl border border-slate-300 p-4 text-sm text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                placeholder="اذكر الأشياء الخاصة بقسمك وتلاميذك والتي يستحيل على AI معرفتها تلقائياً..."
              />
              <div className="bg-indigo-50/70 border border-indigo-200 rounded-xl p-4 text-xs text-indigo-900 leading-relaxed">
                🎯 <strong>الخلاصة الذهبية:</strong> لأن AI يجهل قسمك، لا يمكن أن يصنع التقييم مكانك! التقييم قرار إنساني وتربوي بامتياز.
              </div>
            </div>
          )}
        </div>
      </div>

      {/* The 3 Pedagogical Principles Bridge */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-black">
            01
          </div>
          <h4 className="font-bold text-slate-900 text-base">من الدرس إلى التقييم</h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            في الحصة 3 خططنا للتعلم؛ وفي الحصة 4 نتعلم كيف نتحقق هل حدث التعلم فعلاً؟
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-black">
            02
          </div>
          <h4 className="font-bold text-slate-900 text-base">AI لا يصنع التقييم</h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            AI يساعد الأستاذ على بناء بنك أسئلة، تنويعها، مراجعتها، وتكييفها... لكن الأستاذ هو من يقرر.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-800 flex items-center justify-center font-black">
            03
          </div>
          <h4 className="font-bold text-slate-900 text-base">البدء من الهدف لا السؤال</h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            ليس «اعمللي 10 أسئلة» بل: «هذه أهدافي، ساعدني في اختبار مدى تحققها».
          </p>
        </div>
      </div>

      {/* Action Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200">
        <div className="text-sm text-slate-600">
          انتهت مرحلة الربط الميداني (10 دقائق) • جاهزون لتجربة الصدمة المباشرة
        </div>
        <button
          onClick={onComplete}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition hover:translate-x-0.5"
        >
          <span>المرحلة التالية: التجربة المباشرة «اعمللي 10 تمارين»</span>
          <ArrowLeft className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
