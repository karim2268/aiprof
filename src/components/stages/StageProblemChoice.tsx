import React from 'react';
import { SUBJECT_PRESETS } from '../../data/workshopData';
import { TeacherWorksheet } from '../../types';
import { ArrowLeft, ArrowRight, BookOpen, Check, Target, AlertTriangle } from 'lucide-react';

interface StageProblemChoiceProps {
  worksheet: TeacherWorksheet;
  onUpdateWorksheet: (updates: Partial<TeacherWorksheet>) => void;
  onComplete: () => void;
  onBack: () => void;
}

export const StageProblemChoice: React.FC<StageProblemChoiceProps> = ({
  worksheet,
  onUpdateWorksheet,
  onComplete,
  onBack,
}) => {
  const handleSelectPreset = (preset: (typeof SUBJECT_PRESETS)[0]) => {
    onUpdateWorksheet({
      subject: preset.subject,
      gradeLevel: preset.defaultGrade,
      topic: preset.sampleTopic,
      objective: preset.sampleObjective,
      constraints: preset.sampleConstraints,
      resourceType: preset.type as any,
    });
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white font-mono font-bold flex items-center justify-center text-sm shadow-xs flex-shrink-0">
              01:00
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-800 border border-indigo-200 mb-1.5">
                <span>النشاط العملي 1 • 10 دقائق (01:00 → 01:10) • كفاءة C2</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                النشاط العملي 1: اختار مشكلتك الحقيقية
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                كل أستاذ يحدد مهمة بيداغوجية حقيقية من صميم اختصاصه سيصممها ويطورها بالذكاء الاصطناعي.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-900 text-xs flex items-center gap-2 max-w-sm">
            <AlertTriangle className="w-5 h-5 text-rose-600 flex-shrink-0" />
            <div>
              <strong className="block">القاعدة الصارمة:</strong>
              «لا تختار موضوعًا خياليًا. اختار حاجة تحتاجها فعلًا في قسمك هذا الأسبوع!»
            </div>
          </div>
        </div>
      </div>

      {/* Preset Cards for Disciplines */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-indigo-600" />
              <span>اختر مادتك من النماذج الجاهزة أو قم بتخصيصها أدناه:</span>
            </h3>
            <p className="text-xs text-slate-500">
              انقر على أي بطاقة لتحميل إعدادات مادتك مباشرة في ورقة العمل
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {SUBJECT_PRESETS.map((preset, idx) => {
            const isSelected = worksheet.subject === preset.subject;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => handleSelectPreset(preset)}
                className={`p-4 rounded-xl border text-right transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'bg-indigo-50 border-indigo-400 ring-2 ring-indigo-400/30 shadow-xs'
                    : 'bg-slate-50/70 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-bold text-sm text-slate-900">{preset.subject}</span>
                    {isSelected && (
                      <span className="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-slate-500 font-medium mb-2">{preset.defaultGrade}</div>
                  <div className="p-2 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-800 leading-snug">
                    📌 {preset.sampleTopic}
                  </div>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-200 text-[11px] text-slate-600 leading-tight truncate">
                  🎯 {preset.sampleObjective}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Direct Customization Form */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
        <h3 className="font-bold text-base text-slate-900 mb-4 flex items-center gap-2">
          <Target className="w-5 h-5 text-indigo-600" />
          <span>تأكيد بيانات مهمتك البيداغوجية:</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              المادة (Discipline):
            </label>
            <input
              type="text"
              value={worksheet.subject}
              onChange={(e) => onUpdateWorksheet({ subject: e.target.value })}
              placeholder="مثال: رياضيات، لغة عربية، علوم..."
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-slate-50"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              المستوى الدراسي (Niveau):
            </label>
            <input
              type="text"
              value={worksheet.gradeLevel}
              onChange={(e) => onUpdateWorksheet({ gradeLevel: e.target.value })}
              placeholder="مثال: سنة أولى ثانوي، ثامنة أساسي..."
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-slate-50"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              موضوع الدرس (Thème / Sujet):
            </label>
            <input
              type="text"
              value={worksheet.topic}
              onChange={(e) => onUpdateWorksheet({ topic: e.target.value })}
              placeholder="مثال: تمارين حول الدوال، الاستعارة، الحرب العالمية..."
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-slate-50"
            />
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
          <span>العودة للاستراحة</span>
        </button>

        <button
          type="button"
          onClick={onComplete}
          disabled={!worksheet.topic.trim()}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-sm transition-all disabled:opacity-40"
        >
          <span>الانتقال للنشاط 2 (ورقة العمل: Ma première demande à l'IA)</span>
          <ArrowLeft className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
