import React, { useState } from 'react';
import { Clock, MessageSquare, Copy, Check, Sparkles, ArrowLeft, ArrowRight, CornerDownLeft, RefreshCw } from 'lucide-react';
import { SESSION_2_FOLLOWUP_PROMPTS } from '../../data/workshopData';

interface StageS2DialogueProps {
  onComplete: () => void;
  onPrev: () => void;
}

export const StageS2Dialogue: React.FC<StageS2DialogueProps> = ({ onComplete, onPrev }) => {
  const [selectedPromptId, setSelectedPromptId] = useState<string>('f1');
  const [customFollowUp, setCustomFollowUp] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [simulationLog, setSimulationLog] = useState<{ query: string; response: string } | null>(null);

  const activePrompt = SESSION_2_FOLLOWUP_PROMPTS.find((p) => p.id === selectedPromptId) || SESSION_2_FOLLOWUP_PROMPTS[0];

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handleApplyFollowUp = (promptText: string) => {
    setSimulationLog({
      query: promptText,
      response: `[استجابة تفاعلية من AI بعد التوجيه]:
تمت إعادة صياغة المورد استجابة لطلبك:
- تم تبسيط المصطلحات لتلائم تلامذة المستوى المتوسط دون الإخلال بالمكتسبات الأساسية.
- تمت إضافة أمثلة تطبيقية ملموسة تيسر استيعاب المفهوم.
- أصبحت الصياغة متدرجة وواضحة وقابلة للتنفيذ المباشر في قاعة الدرس!`,
    });
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white font-mono font-bold flex items-center justify-center text-sm shadow-xs flex-shrink-0">
              01:30
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-800 border border-indigo-200 mb-1.5">
                <Clock className="w-3 h-3 text-indigo-600" />
                <span>الحصة 2 • 15 دقيقة (01:30 → 01:45) • الكفاءة C6: إدارة الحوار البيداغوجي الفعال</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                النشاط 3: الحوار الذكي ومكتبة Follow-up Prompts
              </h2>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                لا تبدأ من الصفر أبداً! استعمل أسئلة المتابعة لتعديل النتيجة وتبسيطها أو تحويلها إلى جدول دون إعادة كتابة كل شيء.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Grid of Follow-up library */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Categories / Prompts */}
        <div className="lg:col-span-5 space-y-3">
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <span className="text-xs font-bold text-slate-800 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-indigo-600" />
                <span>أنواع أسئلة المتابعة البيداغوجية:</span>
              </span>
              <span className="text-2xs text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full font-bold">
                7 قوالب أساسية
              </span>
            </div>

            <div className="space-y-2">
              {SESSION_2_FOLLOWUP_PROMPTS.map((item) => {
                const isSelected = item.id === selectedPromptId;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setSelectedPromptId(item.id);
                      setCustomFollowUp('');
                    }}
                    type="button"
                    className={`w-full text-right p-3 rounded-xl border transition-all text-xs flex items-start justify-between gap-3 ${
                      isSelected
                        ? 'bg-indigo-600 text-white border-indigo-700 shadow-xs'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-indigo-50/50 hover:border-indigo-200'
                    }`}
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-2xs font-bold px-2 py-0.5 rounded-md ${
                            isSelected ? 'bg-white/20 text-white' : 'bg-indigo-100 text-indigo-800'
                          }`}
                        >
                          {item.category}
                        </span>
                        <span className="font-bold">{item.title}</span>
                      </div>
                      <p className={`mt-1 text-2xs truncate ${isSelected ? 'text-indigo-100' : 'text-slate-500'}`}>
                        {item.prompt}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right: Active Prompt workbench */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span className="text-xs font-bold text-slate-800">
                  صيغة التعديل المختارة: {activePrompt.title}
                </span>
              </div>
              <button
                type="button"
                onClick={() => handleCopy(activePrompt.id, activePrompt.prompt)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors"
              >
                {copiedId === activePrompt.id ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700">تم النسخ!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-500" />
                    <span>نسخ للدردشة</span>
                  </>
                )}
              </button>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 text-emerald-300 font-mono text-xs leading-relaxed border border-slate-800 shadow-inner">
              "{activePrompt.prompt}"
            </div>

            <div className="p-3 bg-indigo-50 border border-indigo-100 rounded-xl text-xs text-indigo-900 flex items-start gap-2">
              <span className="font-bold text-indigo-700 flex-shrink-0">سياق الاستعمال الموصى به:</span>
              <span>{activePrompt.exampleContext}</span>
            </div>

            {/* Custom follow-up input */}
            <div className="pt-2 space-y-2 border-t border-slate-100">
              <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                <CornerDownLeft className="w-3.5 h-3.5 text-indigo-600" />
                <span>أو اكتب تعليقك / توجيهك الخاص لإرساله للذكاء الاصطناعي:</span>
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={customFollowUp}
                  onChange={(e) => setCustomFollowUp(e.target.value)}
                  placeholder="مثال: احذف النشاط الثالث وعوضه بمسألة مفتوحة مدتها 15 دقيقة..."
                  className="flex-1 px-3.5 py-2 rounded-xl border border-slate-300 text-xs bg-slate-50 focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => handleApplyFollowUp(customFollowUp || activePrompt.prompt)}
                  className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-xs transition-colors"
                >
                  تجربة الأثر
                </button>
              </div>
            </div>
          </div>

          {/* Simulation Output */}
          {simulationLog && (
            <div className="bg-white rounded-2xl p-6 border border-emerald-200 shadow-xs space-y-3 animate-in fade-in">
              <div className="flex items-center justify-between border-b border-emerald-100 pb-2">
                <span className="text-xs font-bold text-emerald-900">
                  أثر التوجيه بالحوار (Résultat après Follow-up):
                </span>
                <span className="text-2xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">
                  تحسن بيداغوجي فوري
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 whitespace-pre-line leading-relaxed">
                {simulationLog.response}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-200">
        <button
          type="button"
          onClick={onPrev}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-medium text-xs transition-colors"
        >
          <ArrowRight className="w-4 h-4" />
          <span>السابق: اكتب الـPrompt وجربه</span>
        </button>

        <button
          type="button"
          onClick={onComplete}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-sm transition-all"
        >
          <span>التالي: تحدي «Prompt Battle» ونشاط «AI فهمني غلط»</span>
          <ArrowLeft className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
