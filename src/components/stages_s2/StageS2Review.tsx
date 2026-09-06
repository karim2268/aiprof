import React, { useState } from 'react';
import { SESSION_2_REVIEW_PROBLEMS } from '../../data/workshopData';
import { Clock, HelpCircle, CheckCircle2, ArrowLeft, MessageSquare, AlertCircle } from 'lucide-react';

interface StageS2ReviewProps {
  onComplete: () => void;
}

export const StageS2Review: React.FC<StageS2ReviewProps> = ({ onComplete }) => {
  const [teacherExperiences, setTeacherExperiences] = useState<string[]>([
    'جربت نطلب تمرين في الفيزياء فأعطاني إجابة معقدة جداً برياضيات جامعية!',
    'طلبت تلخيص نص تاريخي فكتبلي صفحتين رغم إني أردت نقاطاً موجزة.',
  ]);
  const [newExperience, setNewExperience] = useState('');
  const [selectedProblemId, setSelectedProblemId] = useState<string | null>(null);

  const handleAddExperience = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newExperience.trim()) return;
    setTeacherExperiences((prev) => [newExperience.trim(), ...prev]);
    setNewExperience('');
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Session Title & Overview Banner */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white font-mono font-bold flex items-center justify-center text-sm shadow-xs flex-shrink-0">
              00:00
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-800 border border-indigo-200 mb-1.5">
                <Clock className="w-3 h-3 text-indigo-600" />
                <span>الحصة 2 • 10 دقائق (00:00 → 00:10) • مراجعة وانطلاق</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                رجوع إلى الحصة الأولى: «شكون جرّب AI منذ الحصة الفارطة؟»
              </h2>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                نستمع لشهادات الأساتذة ونجمع المشاكل الحقيقية التي ظهرت عند الاستعمال الفردي تمهيداً لضبط بوصلة الحوار الفعال.
              </p>
            </div>
          </div>

          <div className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-semibold flex items-center gap-2 self-start md:self-auto shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>الحصة 2: من الـPrompt إلى الحوار</span>
          </div>
        </div>
      </div>

      {/* Opening Question Box */}
      <div className="p-6 rounded-2xl bg-indigo-50/70 border border-indigo-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center flex-shrink-0 font-bold text-lg shadow-xs">
            💬
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-base">
              سؤال الانطلاق الموجه لأساتذة القاعة:
            </h3>
            <p className="text-sm text-slate-700 mt-1 font-medium">
              "شكون جرّب أداة AI (ChatGPT أو Gemini) منذ الحصة الفارطة؟ وشنوة صارلو؟"
            </p>
          </div>
        </div>

        <div className="text-xs text-indigo-900 bg-white/80 border border-indigo-200 px-3.5 py-2 rounded-xl font-medium">
          نستمع لـ 3 أو 4 أساتذة لمشاركة تجاربهم
        </div>
      </div>

      {/* BlackBoard of Problems */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-md border border-slate-800 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <span className="text-lg">📋</span>
            <h3 className="font-bold text-base text-amber-300 font-mono tracking-wide">
              سبورة المشاكل التي ظهرت مع الأساتذة (Tableau des difficultés):
            </h3>
          </div>
          <span className="text-xs text-slate-400 font-mono">انقر على أي مشكلة لفحص سببها البيداغوجي</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
          {SESSION_2_REVIEW_PROBLEMS.map((item) => {
            const isSelected = selectedProblemId === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedProblemId(isSelected ? null : item.id)}
                className={`p-4 rounded-xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-indigo-950/90 border-indigo-400 shadow-md ring-1 ring-indigo-400'
                    : 'bg-slate-800/80 border-slate-700 hover:border-slate-600 hover:bg-slate-800'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="text-sm font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-rose-500 flex-shrink-0" />
                    <span>{item.problem}</span>
                  </div>
                </div>

                <div className="mt-2 text-xs text-slate-300">
                  <span className="text-amber-400 font-semibold">السبب: </span>
                  {item.cause}
                </div>

                {isSelected && (
                  <div className="mt-3 pt-2.5 border-t border-slate-700 text-xs text-emerald-300 animate-in fade-in">
                    <span className="font-bold">الحل العملي: </span>
                    {item.solution}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="p-4 rounded-xl bg-indigo-900/40 border border-indigo-700/60 flex items-center gap-3 text-xs text-indigo-200">
          <AlertCircle className="w-5 h-5 text-indigo-400 flex-shrink-0" />
          <p className="leading-relaxed">
            <strong className="text-white">رسالة المدرب للأساتذة: </strong>
            "اليوم باش نشوفوا علاش تصير المشاكل هاذي، وكيفاش نتحكموا أكثر في النتيجة باش يعطينا الـAI بالضبط شنوّة نحبوا دون عناء!"
          </p>
        </div>
      </div>

      {/* Teachers interactive experience log */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
        <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
          <MessageSquare className="w-4 h-4 text-indigo-600" />
          <span>تجارب وملاحظات إضافية من الحاضرين في القاعة:</span>
        </h4>

        <form onSubmit={handleAddExperience} className="flex gap-2">
          <input
            type="text"
            value={newExperience}
            onChange={(e) => setNewExperience(e.target.value)}
            placeholder="أضف ملاحظة أو تجربة أستاذ من القاعة..."
            className="flex-1 px-4 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-slate-50"
          />
          <button
            type="submit"
            className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-xs transition-colors"
          >
            تسجيل على السبورة
          </button>
        </form>

        <div className="space-y-2">
          {teacherExperiences.map((exp, idx) => (
            <div
              key={idx}
              className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 flex-shrink-0" />
              <span>{exp}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="flex items-center justify-end pt-4 border-t border-slate-200">
        <button
          type="button"
          onClick={onComplete}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-sm transition-all"
        >
          <span>التالي: التجربة الأولى (فحص الـPrompt الضعيف)</span>
          <ArrowLeft className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
