import React, { useState } from 'react';
import { Clock, AlertTriangle, ArrowLeft, Copy, Check, Sparkles, CheckCircle2, XCircle } from 'lucide-react';
import { SESSION_3_RAW_PROMPT_EXPERIMENT } from '../../data/workshopData';

interface StageS3RawPromptProps {
  onComplete: () => void;
}

export const StageS3RawPrompt: React.FC<StageS3RawPromptProps> = ({ onComplete }) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'sample' | 'custom'>('sample');
  const [customPrompt, setCustomPrompt] = useState('حضّرلي درسًا حول نظرية فيثاغورس للسنة التاسعة أساسي');
  const [evaluatedItems, setEvaluatedItems] = useState<Record<number, boolean>>({
    0: true,
    1: true,
    2: true,
    3: true,
  });

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleEvaluation = (idx: number) => {
    setEvaluatedItems((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500 text-white font-mono font-bold flex items-center justify-center text-sm shadow-xs flex-shrink-0">
              00:10
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-900 border border-amber-200 mb-1.5">
                <Clock className="w-3 h-3 text-amber-600" />
                <span>الحصة 3 • 15 دقيقة (00:10 → 00:25) • تجربة الصدمة</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                تجربة الصدمة: ماذا يحدث عندما نطلب «حضّرلي درس» بطريقة خام؟
              </h2>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                اختبار عملي حي: إرسال طلب عام جدًا بدون سياق ولا بيداغوجيا، ثم تشريح النتيجة معاً.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveTab('sample')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'sample'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              النموذج النموذجي (الفيزياء)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('custom')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'custom'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              مادتك أنت
            </button>
          </div>
        </div>
      </div>

      {/* Raw Prompt Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: The Raw Prompt & Raw AI Output */}
        <div className="lg:col-span-6 space-y-4">
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-2.5 py-1 rounded-md border border-rose-100">
                1. الطلب الخام (Raw Prompt)
              </span>
              <button
                type="button"
                onClick={() =>
                  handleCopy(activeTab === 'sample' ? SESSION_3_RAW_PROMPT_EXPERIMENT.rawPrompt : customPrompt)
                }
                className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 bg-slate-100 px-2.5 py-1 rounded-md font-medium"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'تم النسخ!' : 'نسخ الطلب'}</span>
              </button>
            </div>

            {activeTab === 'sample' ? (
              <div className="p-4 rounded-xl bg-slate-900 text-white font-mono text-sm leading-relaxed border border-slate-800">
                «{SESSION_3_RAW_PROMPT_EXPERIMENT.rawPrompt}»
              </div>
            ) : (
              <div className="space-y-2">
                <input
                  type="text"
                  value={customPrompt}
                  onChange={(e) => setCustomPrompt(e.target.value)}
                  className="w-full text-sm font-medium p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500"
                  placeholder="اكتب طلباً خاماً في مادتك..."
                />
                <p className="text-2xs text-slate-500">
                  انسخه وجربه فوراً في ChatGPT أو Gemini وشاهد الإجابة!
                </p>
              </div>
            )}

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-700">
                  ما الذي يقدمه الـ AI في العادة (المظهر الخادع):
                </span>
                <span className="text-2xs text-amber-700 bg-amber-50 px-2 py-0.5 rounded font-semibold">
                  يبدو مرتباً ولكنه فارغ بيداغوجياً
                </span>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 whitespace-pre-line leading-relaxed font-sans max-h-72 overflow-y-auto">
                {SESSION_3_RAW_PROMPT_EXPERIMENT.rawAiOutput}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Pedagogical Autopsy / تشريح النتيجة */}
        <div className="lg:col-span-6 space-y-4">
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
              <AlertTriangle className="w-5 h-5 text-rose-600" />
              <h3 className="font-bold text-slate-900 text-base">
                تشريح النتيجة: أين تكمن العيوب البيداغوجية الصامتة؟
              </h3>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              انقر على المعايير لملاحظة لماذا لا يمكن إدخال هذا الدرس لقسم حقيقي:
            </p>

            <div className="space-y-3">
              {SESSION_3_RAW_PROMPT_EXPERIMENT.critiquePoints.map((item, idx) => {
                const isChecked = !!evaluatedItems[idx];
                return (
                  <div
                    key={idx}
                    onClick={() => toggleEvaluation(idx)}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                      isChecked
                        ? 'bg-rose-50/70 border-rose-200'
                        : 'bg-slate-50 border-slate-200 opacity-60'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2">
                        {isChecked ? (
                          <XCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
                        ) : (
                          <div className="w-4 h-4 rounded-full border border-slate-300" />
                        )}
                        <span className="font-bold text-xs text-slate-900">{item.criterion}</span>
                      </div>
                      <span className="text-2xs font-semibold px-2 py-0.5 rounded bg-rose-100 text-rose-800">
                        خلل صامت
                      </span>
                    </div>
                    <p className="text-xs text-slate-700 mt-2 mr-6 leading-relaxed">{item.note}</p>
                  </div>
                );
              })}
            </div>

            <div className="p-4 rounded-xl bg-rose-100/70 border border-rose-200 text-rose-950 text-xs leading-relaxed font-semibold">
              ⚠️ {SESSION_3_RAW_PROMPT_EXPERIMENT.coreTakeaway}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Action Footer */}
      <div className="p-5 rounded-2xl bg-indigo-50 border border-indigo-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="text-xs text-indigo-950 leading-relaxed">
          <span className="font-bold block text-sm mb-0.5 text-indigo-900">
            الحل البيداغوجي: لا نطلب منه إعداد الدرس دفعة واحدة!
          </span>
          بدل «حضّرلي درس»، سنقوده في مسار بناء تدريجي: الأهداف ← الوضعية الانطلاقية ← النشاط الاستكشافي ← التقويم.
        </div>
        <button
          type="button"
          onClick={onComplete}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-colors shadow-xs flex-shrink-0"
        >
          <span>المحطة التالية: نبني الحصة خطوة بخطوة</span>
          <ArrowLeft className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
