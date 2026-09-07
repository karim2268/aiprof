import React, { useState } from 'react';
import { Clock, MessageSquare, CheckCircle2, AlertCircle, ArrowLeft, Lightbulb, Users } from 'lucide-react';

interface StageS3ReviewProps {
  onComplete: () => void;
}

export const StageS3Review: React.FC<StageS3ReviewProps> = ({ onComplete }) => {
  const [experiences, setExperiences] = useState([
    {
      teacher: 'أستاذ علوم طبيعية',
      prompt: 'أعطني وضعية انطلاق في درس الوراثة',
      modification: 'الوضعية الأولى كانت طويلة وفيها مصطلحات جامعية، طلبت منه تبسيطها وتكييفها لـ 1 ثانوي.',
      wasReady: false,
    },
    {
      teacher: 'أستاذ لغة عربية',
      prompt: 'تمارين تطبيقية في الاستعارة المكنية والرمز',
      modification: 'الأمثلة كانت شعر جاهلي معقد، طلبت نصوصاً حديثة قريبة من اهتمام التلميذ.',
      wasReady: false,
    },
    {
      teacher: 'أستاذ رياضيات',
      prompt: 'مسألة إدماجية في الهندسة الفضائية',
      modification: 'أعطى الحل كاملاً، فطلبت منه صياغة أسئلة توجيهية متدرجة (Questions guides).',
      wasReady: false,
    },
  ]);

  const [newExp, setNewExp] = useState({ teacher: '', prompt: '', modification: '', wasReady: false });
  const [showAddForm, setShowAddForm] = useState(false);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newExp.teacher.trim() || !newExp.prompt.trim()) return;
    setExperiences((prev) => [newExp, ...prev]);
    setNewExp({ teacher: '', prompt: '', modification: '', wasReady: false });
    setShowAddForm(false);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white font-mono font-bold flex items-center justify-center text-sm shadow-xs flex-shrink-0">
              00:00
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-800 border border-indigo-200 mb-1.5">
                <Clock className="w-3 h-3 text-indigo-600" />
                <span>الحصة 3 • 10 دقائق (00:00 → 00:10) • الرجوع إلى التجربة السابقة</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                «شنوة عملتوا بالـAI منذ الحصة الثانية؟» (Reality Check)
              </h2>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                نفتح النقاش حول التجارب الحقيقية للأساتذة بين الحصتين: فحص مسار (طلب ← نتيجة ← تعديل).
              </p>
            </div>
          </div>

          <div className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-semibold flex items-center gap-2 self-start md:self-auto shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>الحصة 3: تحضير درس متكامل</span>
          </div>
        </div>
      </div>

      {/* Central Pedagogical Question */}
      <div className="p-6 rounded-2xl bg-indigo-50/80 border border-indigo-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center flex-shrink-0 font-bold text-lg shadow-xs">
            ❓
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-base">
              السؤال المركزي للانطلاق في ورشة اليوم:
            </h3>
            <p className="text-sm text-indigo-950 mt-1 font-medium leading-relaxed">
              «هل النتيجة الأولى التي أعطاها لك الذكاء الاصطناعي كانت صالحة للقسم مباشرة دون أي تدخل منك؟»
            </p>
          </div>
        </div>

        <div className="px-4 py-2.5 rounded-xl bg-white border border-indigo-200 text-indigo-900 text-xs font-bold shadow-2xs">
          الإجابة الغالبة: <span className="text-rose-600">لا!</span> وهو تماماً منطلق حصة اليوم.
        </div>
      </div>

      {/* Experience Stream */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-indigo-600" />
            <h3 className="font-bold text-slate-900 text-base">شهادات الأساتذة: مسار التعديل والحوار</h3>
          </div>
          <button
            type="button"
            onClick={() => setShowAddForm(!showAddForm)}
            className="text-xs font-bold text-indigo-600 hover:text-indigo-800 bg-indigo-50 px-3 py-1.5 rounded-lg border border-indigo-100 transition-colors"
          >
            {showAddForm ? 'إلغاء' : '+ تدوين تجربة أستاذ في القاعة'}
          </button>
        </div>

        {showAddForm && (
          <form onSubmit={handleAdd} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="صفة الأستاذ (مثلاً: أستاذ تاريخ...)"
                value={newExp.teacher}
                onChange={(e) => setNewExp({ ...newExp, teacher: e.target.value })}
                className="text-xs p-2.5 rounded-lg border border-slate-300 bg-white"
                required
              />
              <input
                type="text"
                placeholder="شنوة كان الـ Prompt اللي كتبو؟"
                value={newExp.prompt}
                onChange={(e) => setNewExp({ ...newExp, prompt: e.target.value })}
                className="text-xs p-2.5 rounded-lg border border-slate-300 bg-white"
                required
              />
            </div>
            <textarea
              placeholder="شنوة عدّل أو كيفاش حاورو حتى وصل لنتيجة مقبولة؟"
              value={newExp.modification}
              onChange={(e) => setNewExp({ ...newExp, modification: e.target.value })}
              className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white"
              rows={2}
            />
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-xs text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={newExp.wasReady}
                  onChange={(e) => setNewExp({ ...newExp, wasReady: e.target.checked })}
                  className="rounded text-indigo-600"
                />
                <span>كانت النتيجة الأولى جاهزة مباشرة دون تعديل؟</span>
              </label>
              <button
                type="submit"
                className="px-4 py-1.5 rounded-lg bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700"
              >
                إضافة للقائمة
              </button>
            </div>
          </form>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {experiences.map((exp, idx) => (
            <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-800">{exp.teacher}</span>
                <span
                  className={`text-2xs px-2 py-0.5 rounded-full font-semibold ${
                    exp.wasReady
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-amber-100 text-amber-800 border border-amber-200'
                  }`}
                >
                  {exp.wasReady ? 'جاهز مباشرة' : 'احتاج تعديلاً وحواراً'}
                </span>
              </div>
              <div className="text-xs text-slate-600 bg-white p-2.5 rounded-lg border border-slate-200/80">
                <span className="font-semibold text-slate-700">الطلب الأولي:</span> "{exp.prompt}"
              </div>
              <div className="text-xs text-indigo-900 bg-indigo-50/70 p-2.5 rounded-lg border border-indigo-100">
                <span className="font-semibold text-indigo-950">مسار التعديل:</span> {exp.modification}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Takeaway & Next */}
      <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <Lightbulb className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div className="text-xs text-amber-950 leading-relaxed">
            <span className="font-bold block text-sm mb-0.5 text-amber-900">
              خلاصة الانطلاق في الحصة الثالثة:
            </span>
            الذكاء الاصطناعي لا يعرف قسمك، ولا يعرف حساسيات تلامذتك، ولا إكراهات قاعتك.
            التحضير الحقيقي ليس توليد نصوص، بل بناء سيناريو متكامل خطوة بخطوة!
          </div>
        </div>
        <button
          type="button"
          onClick={onComplete}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-colors shadow-xs flex-shrink-0"
        >
          <span>المحطة التالية: تجربة "حضّرلي درس" الخام</span>
          <ArrowLeft className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
