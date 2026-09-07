import React, { useState } from 'react';
import { 
  ArrowRight, 
  FileSpreadsheet, 
  ExternalLink, 
  CheckCircle2, 
  Award, 
  Copy, 
  CheckCheck, 
  Sparkles, 
  BookOpen, 
  Layers, 
  Share2,
  Calendar,
  Compass,
  FileText,
  AlertCircle
} from 'lucide-react';
import { Session4Deliverable, Session4PromptToolboxItem } from '../../types';
import { SESSION_4_PROMPTS_TOOLBOX } from '../../data/workshopData';

interface StageS4DeliverableProps {
  deliverable: Session4Deliverable;
  onOpenSheetsModal: () => void;
  sheetsExportUrl?: string | null;
  onPrev?: () => void;
}

export const StageS4Deliverable: React.FC<StageS4DeliverableProps> = ({
  deliverable,
  onOpenSheetsModal,
  sheetsExportUrl,
  onPrev,
}) => {
  const [copiedPromptId, setCopiedPromptId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'deliverable' | 'toolbox' | 'mission'>('deliverable');

  const handleCopyPrompt = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPromptId(id);
    setTimeout(() => setCopiedPromptId(null), 2000);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-emerald-950 via-teal-900 to-slate-900 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-200 border border-emerald-400/30 text-xs font-semibold">
            <span>الحصة 4 • المرحلة 10 (01:57 → 02:00)</span>
            <span>•</span>
            <span>🎯 المنتوج الإجباري وختام الحصة</span>
          </div>

          <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
            المنتوج النهائي: <span className="text-emerald-300">Une évaluation prête à être retravaillée</span>
          </h1>

          <p className="text-emerald-100/90 text-base max-w-3xl leading-relaxed">
            تهانينا! أكملت الحصة الرابعة بنجاح وخرجت بموضوع اختبار كامل متدرج، وسلم تنقيط مبرر، ومسارات تمايز، وتقرير فحص نقدي جاهز للحفظ في حسابك Google Sheets.
          </p>
        </div>
      </div>

      {/* Mode Selector Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-3">
        <button
          onClick={() => setActiveTab('deliverable')}
          className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition flex items-center gap-2 ${
            activeTab === 'deliverable'
              ? 'bg-emerald-600 text-white shadow-xs'
              : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
          }`}
        >
          <Award className="w-4 h-4" />
          <span>بطاقة الفرض المعتمد والتصدير</span>
        </button>

        <button
          onClick={() => setActiveTab('toolbox')}
          className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition flex items-center gap-2 ${
            activeTab === 'toolbox'
              ? 'bg-emerald-600 text-white shadow-xs'
              : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
          }`}
        >
          <Compass className="w-4 h-4" />
          <span>حقيبة Prompts الحصة 4 (5 نماذج ذهبية)</span>
        </button>

        <button
          onClick={() => setActiveTab('mission')}
          className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition flex items-center gap-2 ${
            activeTab === 'mission'
              ? 'bg-emerald-600 text-white shadow-xs'
              : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
          }`}
        >
          <Calendar className="w-4 h-4" />
          <span>مهمة ما بين الحصتين (تمهيد للحصة 5: NotebookLM)</span>
        </button>
      </div>

      {/* TAB 1: DELIVERABLE CARD & SHEETS EXPORT */}
      {activeTab === 'deliverable' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          {/* Sheets Export Action Banner */}
          <div className="bg-white rounded-2xl border-2 border-emerald-500/40 p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200 shadow-xs">
                <FileSpreadsheet className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-slate-900 text-base">
                  حفظ الفرض وسلم التنقيط في حسابك Google Drive / Sheets
                </h3>
                <p className="text-xs text-slate-500">
                  ينشئ ملفاً يحتوي على 3 أوراق مهيكلة (الموضوع وعناصر الإجابة، التمايز، وتقرير المراجع التربوي).
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              {sheetsExportUrl ? (
                <a
                  href={sheetsExportUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition shadow-xs"
                >
                  <span>فتح الملف في Google Sheets</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <button
                  onClick={onOpenSheetsModal}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition shadow-sm"
                >
                  <FileSpreadsheet className="w-4 h-4" />
                  <span>تصدير الآن إلى Google Sheets</span>
                </button>
              )}
            </div>
          </div>

          {/* Exam Summary Sheet Preview */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
            <div className="p-6 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
              <div>
                <div className="text-xs font-bold text-emerald-800 uppercase tracking-wide">
                  {deliverable.matiere} • {deliverable.niveau}
                </div>
                <h2 className="text-xl font-black text-slate-900 pt-1">
                  {deliverable.titreEvaluation}
                </h2>
              </div>
              <div className="flex gap-2">
                <span className="px-3 py-1 rounded-lg bg-white border border-slate-200 text-xs font-bold text-slate-700">
                  المدة: {deliverable.duree}
                </span>
                <span className="px-3 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800">
                  المجموع: {deliverable.baremeTotal} نقطة
                </span>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Objectives List */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-700">الأهداف التعلمية المقاسة في هذا الموضوع:</span>
                <div className="flex flex-wrap gap-2">
                  {deliverable.objectifsEvalues.map((obj, i) => (
                    <span key={i} className="px-3 py-1 rounded-lg bg-teal-50 text-teal-800 border border-teal-200 text-xs">
                      ✓ {obj}
                    </span>
                  ))}
                </div>
              </div>

              {/* General Instructions */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1">
                <strong className="text-slate-900">التعليمات العامة للتلميذ:</strong>
                <p>{deliverable.consignesGenerales}</p>
              </div>

              {/* Exercises Accordion / Cards */}
              <div className="space-y-4">
                <h3 className="font-bold text-slate-900 text-sm">تمارين الفرض المعتمدة:</h3>
                {deliverable.exercices.map((ex) => (
                  <div key={ex.id} className="p-4 rounded-xl border border-slate-200 space-y-3 hover:border-slate-300 transition">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-md bg-slate-900 text-white font-bold text-xs">
                          تمرين {ex.numero}
                        </span>
                        <h4 className="font-bold text-slate-900 text-sm">{ex.titre}</h4>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="text-slate-500 font-medium">{ex.tempsEstime}</span>
                        <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                          {ex.points} نقاط
                        </span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-800 leading-relaxed whitespace-pre-line bg-slate-50 p-3 rounded-lg">
                      {ex.enonce}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-slate-600 pt-1">
                      <div className="bg-slate-100/60 p-2.5 rounded-md">
                        <span className="font-bold text-slate-700 block mb-0.5">سلم التنقيط:</span>
                        {ex.baremeDetaille}
                      </div>
                      <div className="bg-slate-100/60 p-2.5 rounded-md">
                        <span className="font-bold text-slate-700 block mb-0.5">الإجابة النموذجية:</span>
                        {ex.corrigeDetaille}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: PROMPTS TOOLBOX */}
      {activeTab === 'toolbox' && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="space-y-1">
            <h3 className="font-bold text-slate-900 text-lg">حقيبة Prompts الحصة 4: بنك النماذج الذهبية</h3>
            <p className="text-xs text-slate-500">5 نماذج منضبطة لبناء التمارين، الامتحانات، المراجعة النقدية، والتفاضل الصفي.</p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {SESSION_4_PROMPTS_TOOLBOX.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-teal-100 text-teal-800 font-bold text-xs">
                      {item.role}
                    </span>
                    <h4 className="font-bold text-slate-900 text-sm">{item.title}</h4>
                  </div>
                  <button
                    onClick={() => handleCopyPrompt(item.id, item.promptTemplate)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium transition"
                  >
                    {copiedPromptId === item.id ? <CheckCheck className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedPromptId === item.id ? 'تم النسخ' : 'نسخ النموذج'}</span>
                  </button>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 font-mono text-xs text-slate-800 whitespace-pre-line leading-relaxed">
                  {item.promptTemplate}
                </div>

                <div className="text-[11px] text-emerald-700 font-medium">
                  🎯 <strong>الهدف والميزة:</strong> {item.pedagogicalGoal}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: MISSION BETWEEN SESSIONS */}
      {activeTab === 'mission' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-6 animate-in fade-in duration-200">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-800 border border-indigo-200 text-xs font-bold">
              <Calendar className="w-3.5 h-3.5" />
              <span>المهمة التطبيقية ما بين الحصتين (4 ← 5)</span>
            </div>
            <h3 className="font-black text-slate-900 text-xl">
              تمهيد الحصة 5: «NotebookLM — كيف نخلي AI يخدم على وثائقنا ومراجعنا؟»
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              للاستعداد للانتقال من الذكاء الاصطناعي العام إلى الذكاء المؤصل في وثائقك الرسمية وكتبك المدرسية:
            </p>
          </div>

          <div className="space-y-3">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                1
              </span>
              <div className="text-xs text-slate-800 leading-relaxed">
                <strong>فحص فرض قديم:</strong> اختر موضوع فرض قمت بإعداده العام الماضي، وضعه في ChatGPT مع Prompt وضع المراجع (Reviewer Mode): "حلل هذا الموضوع واكشف الغموض وعدم التوازن".
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                2
              </span>
              <div className="text-xs text-slate-800 leading-relaxed">
                <strong>تجهيز وثائق ومراجع الدرس:</strong> جهز ملفات PDF لدروسك (المقرر الرسمي، نصوص، تمارين كتاب التلميذ) لحفظها في NotebookLM في الحصة القادمة.
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-indigo-50 border border-indigo-200 text-xs text-indigo-950">
            🚀 <strong>في الحصة 5:</strong> سنكتشف كيف نلغي الهلوسة نهائياً بجعل الذكاء الاصطناعي لا يتكلم إلا انطلاقاً من مذكراتك وكتبك الرسمية المرفوعة!
          </div>
        </div>
      )}

      {/* Final Pedagogical Banner & Tunisian Wisdom */}
      <div className="bg-gradient-to-r from-slate-900 via-teal-950 to-emerald-950 text-white rounded-3xl p-8 shadow-xl text-center space-y-4 relative overflow-hidden">
        <div className="space-y-2 relative z-10">
          <blockquote className="text-xl sm:text-2xl font-bold text-teal-200 italic leading-relaxed max-w-3xl mx-auto">
            «Un bon sujet n’est pas celui qui contient beaucoup de questions. C’est celui qui mesure correctement ce que l’élève doit savoir et savoir faire.»
          </blockquote>

          <div className="text-lg sm:text-xl font-black text-amber-300 pt-2">
            «الفرض الباهي موش اللي فيه برشة أسئلة... الفرض الباهي هو اللي يقيس بالضبط شنوّة نحب نعرف على مستوى التلميذ.»
          </div>
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200">
        <button
          onClick={onPrev}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-700 font-medium text-sm hover:bg-slate-50 transition"
        >
          <ArrowRight className="w-4 h-4" />
          <span>المرحلة السابقة: التمايز وتحدي الحلول</span>
        </button>

        <div className="text-xs text-slate-500 font-medium">
          الحصة 4 مكتملة بالكامل • جاهزون للمحطة القادمة مع NotebookLM
        </div>
      </div>
    </div>
  );
};
