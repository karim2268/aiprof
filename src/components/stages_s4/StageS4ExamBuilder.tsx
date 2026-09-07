import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Sparkles, 
  Copy, 
  CheckCheck, 
  FileText, 
  CheckCircle2, 
  Edit3, 
  Search, 
  RefreshCw,
  Plus,
  Trash2,
  Layers,
  Award,
  Clock
} from 'lucide-react';
import { Session4Deliverable, Session4ExerciseItem } from '../../types';

interface StageS4ExamBuilderProps {
  deliverable: Session4Deliverable;
  onChangeDeliverable: (updated: Session4Deliverable) => void;
  onPrev?: () => void;
  onComplete: () => void;
}

export const StageS4ExamBuilder: React.FC<StageS4ExamBuilderProps> = ({
  deliverable,
  onChangeDeliverable,
  onPrev,
  onComplete,
}) => {
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [activeTab, setActiveTab] = useState<'prompt' | 'exercises' | 'self_analysis'>('exercises');
  const [selectedExerciseId, setSelectedExerciseId] = useState<string>(deliverable.exercices[0]?.id || 'ex-1');

  const generatedPrompt = `المستوى: ${deliverable.niveau}
المادة: ${deliverable.matiere}
عنوان الاختبار: ${deliverable.titreEvaluation}
الأهداف المقاسة: ${deliverable.objectifsEvalues.join(' • ')}
المدة: ${deliverable.duree}
العدد الإجمالي: ${deliverable.baremeTotal} نقطة
عدد التمارين: ${deliverable.exercices.length} تمارين متدرجة

الخطوة 1: أنشئ موضوع التقييم كاملاً مع سلم التنقيط المبرر وعناصر الإجابة النموذجية (Corrigé).
الخطوة 2: "Analyse ton propre sujet" (حلل نقدياً موضوعك وحدد الأسئلة التي قد تسبب لبساً أو ضغطاً زمنياً).
الخطوة 3: "Propose uniquement les modifications nécessaires" (اقترح التعديلات الدقيقة فقط).`;

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(generatedPrompt);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  const handleExerciseChange = (id: string, updates: Partial<Session4ExerciseItem>) => {
    const updated = deliverable.exercices.map((ex) => (ex.id === id ? { ...ex, ...updates } : ex));
    onChangeDeliverable({ ...deliverable, exercices: updated });
  };

  const activeExercise = deliverable.exercices.find((ex) => ex.id === selectedExerciseId) || deliverable.exercices[0];

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-indigo-950 via-slate-900 to-teal-950 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/20 text-teal-200 border border-teal-400/30 text-xs font-semibold">
            <span>الحصة 4 • المرحلة 8 (01:25 → 01:40)</span>
            <span>•</span>
            <span>🛠️ النشاط 2: الإنشاء الكامل والتحليل الذاتي</span>
          </div>

          <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
            إنشاء الاختبار كاملاً: <span className="text-teal-300">«Analyse ton propre sujet»</span>
          </h1>

          <p className="text-teal-100/90 text-base max-w-3xl leading-relaxed">
            الآن يولد الذكاء الاصطناعي الموضوع بأكمله وفق محدداتك الدقيقة، ثم تطلب منه مباشرة تحليل موضوعه ذاتياً لكشف نقاط الضعف قبل أن تبدأ أنت بالتنقيح البيداغوجي.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="border-b border-slate-200 bg-slate-50 flex items-center justify-between p-2">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('exercises')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
                activeTab === 'exercises'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-200/60'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>موضوع الفرض وتمارينه ({deliverable.exercices.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('self_analysis')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
                activeTab === 'self_analysis'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-200/60'
              }`}
            >
              <Search className="w-4 h-4" />
              <span>التحليل الذاتي والتعديلات (Self-Analysis)</span>
            </button>

            <button
              onClick={() => setActiveTab('prompt')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
                activeTab === 'prompt'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-200/60'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>صيغة الـ Prompt الموجهة</span>
            </button>
          </div>
        </div>

        <div className="p-6">
          {/* TAB 1: EXERCISES */}
          {activeTab === 'exercises' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              {/* Exercise Selector Pills */}
              <div className="flex flex-wrap items-center gap-2 pb-4 border-b border-slate-100">
                {deliverable.exercices.map((ex) => (
                  <button
                    key={ex.id}
                    onClick={() => setSelectedExerciseId(ex.id)}
                    className={`px-4 py-2 rounded-xl font-bold text-xs transition flex items-center gap-2 ${
                      selectedExerciseId === ex.id
                        ? 'bg-indigo-900 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    <span>التمرين {ex.numero}</span>
                    <span className="text-[10px] opacity-80">({ex.points} نقاط)</span>
                  </button>
                ))}
              </div>

              {activeExercise && (
                <div className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700">عنوان التمرين</label>
                      <input
                        type="text"
                        value={activeExercise.titre}
                        onChange={(e) => handleExerciseChange(activeExercise.id, { titre: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs font-medium"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700">العدد والزمن المقدر</label>
                      <div className="flex gap-2">
                        <input
                          type="number"
                          value={activeExercise.points}
                          onChange={(e) => handleExerciseChange(activeExercise.id, { points: Number(e.target.value) })}
                          className="w-24 px-3 py-2 rounded-xl border border-slate-300 text-xs font-bold"
                          placeholder="النقاط"
                        />
                        <input
                          type="text"
                          value={activeExercise.tempsEstime}
                          onChange={(e) => handleExerciseChange(activeExercise.id, { tempsEstime: e.target.value })}
                          className="flex-1 px-3 py-2 rounded-xl border border-slate-300 text-xs"
                          placeholder="الزمن"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700">درجة الصعوبة</label>
                      <select
                        value={activeExercise.difficulte}
                        onChange={(e) => handleExerciseChange(activeExercise.id, { difficulte: e.target.value as any })}
                        className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs bg-white"
                      >
                        <option value="Facile">سهل (قاعدي)</option>
                        <option value="Moyenne">متوسط</option>
                        <option value="Difficile">صعب (تحدٍ)</option>
                        <option value="Progressif">متدرج داخلياً</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 flex items-center justify-between">
                      <span>نص التمرين المقترح (Énoncé de l'exercice)</span>
                      <span className="text-[11px] text-slate-400">يمكنك التعديل مباشرة على النص</span>
                    </label>
                    <textarea
                      value={activeExercise.enonce}
                      onChange={(e) => handleExerciseChange(activeExercise.id, { enonce: e.target.value })}
                      rows={5}
                      className="w-full p-4 rounded-xl border border-slate-300 text-xs sm:text-sm font-sans leading-relaxed text-slate-900 focus:ring-2 focus:ring-indigo-500 outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">سلم التنقيط المفصل (Barème détaillé)</label>
                      <textarea
                        value={activeExercise.baremeDetaille}
                        onChange={(e) => handleExerciseChange(activeExercise.id, { baremeDetaille: e.target.value })}
                        rows={4}
                        className="w-full p-3 rounded-xl border border-slate-300 text-xs font-mono text-slate-800"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">عناصر الإجابة النموذجية (Corrigé type)</label>
                      <textarea
                        value={activeExercise.corrigeDetaille}
                        onChange={(e) => handleExerciseChange(activeExercise.id, { corrigeDetaille: e.target.value })}
                        rows={4}
                        className="w-full p-3 rounded-xl border border-slate-300 text-xs font-mono text-slate-800"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: SELF ANALYSIS */}
          {activeTab === 'self_analysis' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="bg-indigo-50/70 border border-indigo-200 rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-2 font-bold text-indigo-950 text-sm">
                  <Search className="w-5 h-5 text-indigo-600" />
                  <span>نتائج أمر «Analyse ton propre sujet»</span>
                </div>
                <p className="text-xs text-indigo-900/90 leading-relaxed">
                  الذكاء الاصطناعي قام بمسح ذاتي لموضوعه وأقر بالنقاط التالية قبل اعتماد النسخة النهائية:
                </p>

                <div className="space-y-2 pt-2">
                  <div className="bg-white p-3 rounded-xl border border-indigo-100 text-xs text-slate-800 space-y-1">
                    <div className="font-bold text-slate-900">🔍 توازن الوقت:</div>
                    <div>التمرين الرابع (مقارنة العروض) يستهلك 15 دقيقة؛ لذا فإن التمرين الأول تم تقليصه لسؤالين مباشرين لضمان انتهاء التلميذ في 40 دقيقة مع 5 دقائق للمراجعة.</div>
                  </div>

                  <div className="bg-white p-3 rounded-xl border border-indigo-100 text-xs text-slate-800 space-y-1">
                    <div className="font-bold text-slate-900">🔍 فخ الحسابات المتتالية:</div>
                    <div>في التمرين 3، تم التوضيح الصريح في السؤال أن التخفيض الثاني هو 5% من السعر الجديد، لمنع اللبس المعجمي عند التلميذ.</div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                <div className="text-xs font-bold text-slate-700">التعديلات المقترحة المعتمدة من الأستاذ:</div>
                <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
                  <li>تم اعتماد وضعية شراء الكرات الرياضية لأنها أقرب لواقع المدرسة التونسية من مثال بطاقات الطائرات.</li>
                  <li>تم تبسيط الأرقام لتكون أعداداً صحيحة طبيعية يسهل حسابها بدون تعقيد الفواصل العشرية الطويلة.</li>
                </ul>
              </div>
            </div>
          )}

          {/* TAB 3: PROMPT */}
          {activeTab === 'prompt' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-700">صيغة الـ Prompt الكاملة الجاهزة للنسخ في ChatGPT / Gemini:</span>
                <button
                  onClick={handleCopyPrompt}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-50 text-indigo-700 text-xs font-medium hover:bg-indigo-100 transition"
                >
                  {copiedPrompt ? <CheckCheck className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedPrompt ? 'تم النسخ' : 'نسخ النص'}</span>
                </button>
              </div>

              <div className="bg-slate-900 text-slate-100 p-5 rounded-2xl font-mono text-xs leading-relaxed whitespace-pre-line border border-slate-800 shadow-inner">
                {generatedPrompt}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200">
        <button
          onClick={onPrev}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-700 font-medium text-sm hover:bg-slate-50 transition"
        >
          <ArrowRight className="w-4 h-4" />
          <span>المرحلة السابقة: بطاقة المشارك</span>
        </button>

        <button
          onClick={onComplete}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition hover:translate-x-0.5"
        >
          <span>المرحلة التالية: التمايز البيداغوجي وتحدي «هل الـCorrigé صحيح؟»</span>
          <ArrowLeft className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
