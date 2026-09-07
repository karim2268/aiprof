import React, { useState } from 'react';
import { Clock, ShieldAlert, CheckCircle2, XCircle, ArrowLeft, Copy, Check, MessageSquare, UserCheck, AlertTriangle } from 'lucide-react';
import { Session3Fiche } from '../../types';
import { SESSION_3_INSPECTOR_PROMPT } from '../../data/workshopData';

interface StageS3AiInspectorProps {
  fiche: Session3Fiche;
  onChangeFiche: (updated: Session3Fiche) => void;
  onComplete: () => void;
}

export const StageS3AiInspector: React.FC<StageS3AiInspectorProps> = ({
  fiche,
  onChangeFiche,
  onComplete,
}) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'prompt' | 'audit'>('audit');

  const review = fiche.inspectorReview;

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(SESSION_3_INSPECTOR_PROMPT.instruction);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDecisionToggle = (type: 'accept' | 'reject', item: string) => {
    const currentList = review.teacherDecisions[type];
    const exists = currentList.includes(item);
    const updated = exists ? currentList.filter((x) => x !== item) : [...currentList, item];

    onChangeFiche({
      ...fiche,
      inspectorReview: {
        ...review,
        teacherDecisions: {
          ...review.teacherDecisions,
          [type]: updated,
        },
      },
    });
  };

  const handleJustificationChange = (val: string) => {
    onChangeFiche({
      ...fiche,
      inspectorReview: {
        ...review,
        teacherDecisions: {
          ...review.teacherDecisions,
          justification: val,
        },
      },
    });
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white font-mono font-bold flex items-center justify-center text-sm shadow-xs flex-shrink-0">
              01:40
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-800 border border-indigo-200 mb-1.5">
                <Clock className="w-3 h-3 text-indigo-600" />
                <span>الحصة 3 • 10 دقائق (01:40 → 01:50) • AI ينتقد الحصة (Mode Reviewer)</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                المفتش التربوي الرقمي: نقد السيناريو قبل دخول القسم
              </h2>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                لا نستعمل الذكاء الاصطناعي للكتابة فقط، بل نطلب منه ارتداء قبعة "المفتش الصارم" للكشف عن نقاط الضعف والمبالغات.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveTab('audit')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'audit'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              تقرير فحص المفتش
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('prompt')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'prompt'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              قالب الـ Prompt الصارم
            </button>
          </div>
        </div>
      </div>

      {activeTab === 'prompt' ? (
        /* Prompt View */
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-slate-900 text-base">
              التعليمة السحرية: «تصرف كمفتش تربوي صارم»
            </h3>
            <button
              type="button"
              onClick={handleCopyPrompt}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-800 bg-indigo-50 px-3 py-1.5 rounded-lg border border-indigo-100"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'تم النسخ!' : 'نسخ أمر المفتش'}</span>
            </button>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 text-emerald-300 font-mono text-xs leading-relaxed whitespace-pre-line border border-slate-800">
            {SESSION_3_INSPECTOR_PROMPT.instruction}
          </div>

          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 leading-relaxed">
            <strong>سر بيداغوجي:</strong> جملة <em>«لا تعد كتابة الحصة الآن. حدد فقط الأجزاء غير الواقعية...»</em> تمنع الـ AI من إغراقك بنصوص طويلة وتجبره على التحليل النقدي المركز.
          </div>
        </div>
      ) : (
        /* Audit & Decision View */
        <div className="space-y-6">
          {/* Audit Results Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Points Forts */}
            <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-3">
              <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>نقاط القوة البيداغوجية (Points forts)</span>
              </div>
              <ul className="space-y-2">
                {review.pointsForts.map((pt, idx) => (
                  <li key={idx} className="text-xs text-emerald-950 flex items-start gap-2 bg-white/80 p-2.5 rounded-lg border border-emerald-100">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Points Faibles */}
            <div className="p-5 rounded-2xl bg-rose-50/70 border border-rose-200 space-y-3">
              <div className="flex items-center gap-2 text-rose-900 font-bold text-sm">
                <AlertTriangle className="w-4 h-4 text-rose-600" />
                <span>نقاط الضعف والمخاطر الصامتة (Points faibles)</span>
              </div>
              <ul className="space-y-2">
                {review.pointsFaibles.map((pt, idx) => (
                  <li key={idx} className="text-xs text-rose-950 flex items-start gap-2 bg-white/80 p-2.5 rounded-lg border border-rose-100">
                    <span className="text-rose-600 font-bold">⚠</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Éléments Irréalistes */}
            <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-3">
              <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
                <Clock className="w-4 h-4 text-amber-600" />
                <span>عناصر غير واقعية في التوقيت والوسائل</span>
              </div>
              <ul className="space-y-2">
                {review.elementsIrrealistes.map((pt, idx) => (
                  <li key={idx} className="text-xs text-amber-950 flex items-start gap-2 bg-white/80 p-2.5 rounded-lg border border-amber-100">
                    <span className="text-amber-600 font-bold">⏱</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Améliorations Conseillées */}
            <div className="p-5 rounded-2xl bg-indigo-50/70 border border-indigo-200 space-y-3">
              <div className="flex items-center gap-2 text-indigo-900 font-bold text-sm">
                <ShieldAlert className="w-4 h-4 text-indigo-600" />
                <span>مقترحات التحسين والتعديل العملي</span>
              </div>
              <ul className="space-y-2">
                {review.ameliorationsConseillees.map((pt, idx) => (
                  <li key={idx} className="text-xs text-indigo-950 flex items-start gap-2 bg-white/80 p-2.5 rounded-lg border border-indigo-100">
                    <span className="text-indigo-600 font-bold">💡</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Teacher Authority: Accepting/Rejecting & Justifying */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-5">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
              <UserCheck className="w-5 h-5 text-indigo-600" />
              <div>
                <h3 className="font-bold text-slate-900 text-base">
                  سلطة القرار البيداغوجي للأستاذ (Décision de l'enseignant)
                </h3>
                <p className="text-xs text-slate-500">
                  الأستاذ ليس ملزماً بقبول كل ما يقوله المفتش أو الذكاء الاصطناعي: حدد ما تقبله وما ترفضه مع التعليل.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-xs font-bold text-slate-800">
                أي توصيات من تقرير الفحص تقبل دمجها في جذاذة الحصة؟
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {review.ameliorationsConseillees.map((sug, i) => {
                  const isAccepted = review.teacherDecisions.accept.includes(sug);
                  return (
                    <label
                      key={i}
                      onClick={() => handleDecisionToggle('accept', sug)}
                      className={`p-3 rounded-xl border flex items-start gap-2.5 cursor-pointer text-xs transition-all ${
                        isAccepted
                          ? 'bg-emerald-50 border-emerald-300 text-emerald-950 font-medium'
                          : 'bg-slate-50 border-slate-200 text-slate-600'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isAccepted}
                        onChange={() => {}}
                        className="mt-0.5 rounded text-emerald-600"
                      />
                      <span>{sug}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                تعليقك وقرارك البيداغوجي النهائي (التعليل):
              </label>
              <textarea
                rows={2}
                value={review.teacherDecisions.justification}
                onChange={(e) => handleJustificationChange(e.target.value)}
                className="w-full text-xs p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500"
                placeholder="علل سبب قبولك لبعض التعديلات ورفضك لغيرها بناءً على خصوصية تلامذتك..."
              />
            </div>
          </div>
        </div>
      )}

      {/* Footer to Step 9 */}
      <div className="p-5 rounded-2xl bg-indigo-50 border border-indigo-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="text-xs text-indigo-950 leading-relaxed">
          <span className="font-bold block text-sm mb-0.5 text-indigo-900">
            اكتمل فحص الجاهزية بنجاح!
          </span>
          سنقوم الآن بتجميع كل هذه الأفكار والمراحل داخل جذاذة الحصة البيداغوجية المنظمة (Fiche de préparation).
        </div>
        <button
          type="button"
          onClick={onComplete}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-colors shadow-xs flex-shrink-0"
        >
          <span>المحطة التالية: جذاذة الحصة المنظمة (Fiche de préparation)</span>
          <ArrowLeft className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
