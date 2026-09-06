import React, { useState } from 'react';
import { VERIFICATION_CHALLENGES } from '../../data/workshopData';
import { AlertTriangle, ShieldAlert, Eye, CheckCircle2, ArrowLeft, ArrowRight } from 'lucide-react';

interface StageTrustCheckProps {
  onComplete: () => void;
  onBack: () => void;
}

export const StageTrustCheck: React.FC<StageTrustCheckProps> = ({ onComplete, onBack }) => {
  const [selectedChallengeId, setSelectedChallengeId] = useState<string>(
    VERIFICATION_CHALLENGES[0].id
  );
  const [revealedErrors, setRevealedErrors] = useState<Record<string, boolean>>({});
  const [hasAcknowledgedGoldenRule, setHasAcknowledgedGoldenRule] = useState<boolean>(false);

  const activeChallenge =
    VERIFICATION_CHALLENGES.find((c) => c.id === selectedChallengeId) ||
    VERIFICATION_CHALLENGES[0];

  const toggleReveal = (id: string) => {
    setRevealedErrors((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white font-mono font-bold flex items-center justify-center text-sm shadow-xs flex-shrink-0">
              01:45
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-800 border border-indigo-200 mb-1.5">
                <span>لحظة حاسمة • 10 دقائق (01:45 → 01:55) • كفاءة C5</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                لحظة مهمة جدًا: «هل نثق في AI؟»
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                الذكاء الاصطناعي قد يعطي إجابات تبدو مقنعة وأنيقة لغوياً، لكنها تخفي أخطاء فادحة وهلوسات علمية.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-rose-600 text-white font-mono text-xs font-bold flex items-center gap-2 shadow-xs">
            <ShieldAlert className="w-4 h-4" />
            <span>⚠️ TOUJOURS VÉRIFIER</span>
          </div>
        </div>
      </div>

      {/* Central Question */}
      <div className="p-5 rounded-2xl bg-indigo-50/70 border border-indigo-100 text-indigo-950 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <AlertTriangle className="w-6 h-6 text-indigo-600 flex-shrink-0" />
          <div>
            <h3 className="font-bold text-base text-slate-900">السؤال الوجودي للأساتذة في القاعة:</h3>
            <p className="text-xs text-slate-700 mt-0.5">
              "لو الأستاذ صدّق هذه الإجابة وقدّمها مباشرة للتلامذة، شنوّة يصير؟"
            </p>
          </div>
        </div>
      </div>

      {/* Verification Challenge Laboratory */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
          <h3 className="font-bold text-base text-slate-900">
            مختبر اكتشاف الهلوسة والأخطاء الخفية (Cas réels d'erreurs IA):
          </h3>
          <span className="text-xs text-slate-500">اختر مادة لفحص الخطأ المندس</span>
        </div>

        {/* Subject selector tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-4">
          {VERIFICATION_CHALLENGES.map((ch) => {
            const isSelected = ch.id === selectedChallengeId;
            return (
              <button
                key={ch.id}
                type="button"
                onClick={() => setSelectedChallengeId(ch.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all border ${
                  isSelected
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                    : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                }`}
              >
                {ch.subject}: {ch.topic}
              </button>
            );
          })}
        </div>

        {/* Challenge Box */}
        <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/60 space-y-4">
          <div>
            <div className="text-xs font-bold text-slate-500 mb-1">
              مقتطف من إجابة حقيقية قدمها الذكاء الاصطناعي (اقرأ بتمعن):
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200 font-serif text-sm text-slate-900 leading-relaxed shadow-xs">
              {activeChallenge.aiOutputSnippet}
            </div>
          </div>

          {/* Reveal button */}
          <div className="flex items-center justify-between pt-2">
            <button
              type="button"
              onClick={() => toggleReveal(activeChallenge.id)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-xs transition-colors"
            >
              <Eye className="w-4 h-4" />
              <span>
                {revealedErrors[activeChallenge.id]
                  ? 'إخفاء كشف الخطأ'
                  : '🔍 اكتشاف الخطأ الخفي في الإجابة'}
              </span>
            </button>

            <span className="text-xs text-slate-400">
              هل لاحظت الخطأ قبل النقر؟
            </span>
          </div>

          {/* Revealed Error Details */}
          {revealedErrors[activeChallenge.id] && (
            <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-xs space-y-2.5 animate-in fade-in">
              <div className="font-bold text-rose-950 text-sm flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-600" />
                <span>الخطأ المرصود: {activeChallenge.subtleError}</span>
              </div>
              <p className="text-rose-900 leading-relaxed">{activeChallenge.explanation}</p>

              <div className="p-3 bg-white/80 rounded-lg border border-rose-200 text-slate-800">
                <strong className="text-rose-700 block mb-1">شنوة يصير لو الأستاذ وثق بالـ AI دون مراجعة؟</strong>
                {activeChallenge.consequenceIfBelieved}
              </div>

              <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200 text-emerald-950 font-medium">
                <strong className="text-emerald-800 block mb-0.5">الحقيقة البيداغوجية الصحيحة:</strong>
                {activeChallenge.correctPedagogicalFact}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* The Golden Rule & Teacher Responsibility */}
      <div className="p-6 rounded-2xl bg-slate-900 text-white shadow-md border border-slate-800 space-y-4">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0 shadow-xs">
            ⚠️
          </div>
          <div>
            <h3 className="text-lg font-bold text-indigo-300">
              القاعدة الذهبية ورسالة التكوين الكبرى
            </h3>
            <p className="text-sm font-bold text-white mt-1 leading-relaxed">
              «الذكاء الاصطناعي مساعد، وليس مرجعاً نهائياً. الأستاذ هو الذي يتحمل وحده المسؤولية البيداغوجية والأخلاقية عما يقدمه للتلميذ.»
            </p>
          </div>
        </div>

        <div className="pt-3 border-t border-slate-800 flex items-center gap-3">
          <label className="flex items-center gap-2.5 cursor-pointer text-xs font-semibold text-slate-300 hover:text-white">
            <input
              type="checkbox"
              checked={hasAcknowledgedGoldenRule}
              onChange={(e) => setHasAcknowledgedGoldenRule(e.target.checked)}
              className="w-4 h-4 rounded border-slate-700 text-indigo-600 focus:ring-indigo-500 bg-slate-800"
            />
            <span>
              أقرّ كأستاذ بأنني سأراجع دائماً وبدقة أي محتوى صادر عن الذكاء الاصطناعي قبل تقديمه للقسم
            </span>
          </label>
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
          <span>العودة لمقارنة النسختين</span>
        </button>

        <button
          type="button"
          onClick={onComplete}
          disabled={!hasAcknowledgedGoldenRule}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-sm transition-all disabled:opacity-40"
        >
          <CheckCircle2 className="w-4 h-4" />
          <span>الانتقال للخروج بالمنتوج البيداغوجي وتصديره لـ Google Sheets</span>
          <ArrowLeft className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
