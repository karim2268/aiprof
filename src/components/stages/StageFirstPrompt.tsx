import React, { useState } from 'react';
import { TeacherWorksheet } from '../../types';
import { Copy, Check, ExternalLink, Bot, Sparkles, ArrowLeft, ArrowRight, FileText } from 'lucide-react';

interface StageFirstPromptProps {
  worksheet: TeacherWorksheet;
  onUpdateWorksheet: (updates: Partial<TeacherWorksheet>) => void;
  onReceiveInitialResponse: (prompt: string, response: string) => void;
  initialResponse: string;
  onComplete: () => void;
  onBack: () => void;
}

export const StageFirstPrompt: React.FC<StageFirstPromptProps> = ({
  worksheet,
  onUpdateWorksheet,
  onReceiveInitialResponse,
  initialResponse,
  onComplete,
  onBack,
}) => {
  const [copied, setCopied] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [editableResponse, setEditableResponse] = useState(initialResponse);

  // Construct structured prompt dynamically from worksheet
  const generatedPrompt = `أنت أستاذ مادة ${worksheet.subject || '[المادة]'} في التعليم الثانوي التونسي.
المستوى المستهدف: ${worksheet.gradeLevel || '[المستوى]'}.
أعمل على درس: ${worksheet.topic || '[موضوع الدرس]'}.
هدفي البيداغوجي الأساسي: ${worksheet.objective || '[الهدف]'}.
القيود والظروف الواقعية: ${worksheet.constraints || '[المدة، عدد التلاميذ، طبيعة القسم]'}.

المطلوب:
اقترح لي ${
    worksheet.resourceType === 'activity'
      ? 'نشاطاً تفاعلياً محفزاً'
      : worksheet.resourceType === 'exercise'
      ? 'سلسلة تمارين متدرجة الصعوبة'
      : worksheet.resourceType === 'qcm'
      ? 'اختبار QCM تقويمي دقيق'
      : worksheet.resourceType === 'problem_situation'
      ? 'وضعية مشكلة مشوقة كبداية للدرس'
      : worksheet.resourceType === 'summary'
      ? 'ملخصاً مفاهيمياً جامعاً'
      : 'مورداً بيداغوجياً'
  } يكون قابلاً للتطبيق المباشر داخل قسم حقيقي، مع تحديد التوقيت وتعليمات العمل لكل جزء.`;

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleGenerateInApp = async () => {
    setIsGenerating(true);
    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: generatedPrompt }),
      });
      const data = await res.json();
      const text = data.text || 'لم يتم استلام نص';
      setEditableResponse(text);
      onReceiveInitialResponse(generatedPrompt, text);
    } catch (err) {
      console.error('In-app generation error:', err);
      // Fallback
      const fallback = `نموذج الإجابة الأولية للمورد (${worksheet.topic}):\n\n1. الانطلاق (10 دقائق): تقديم سياق وضعية الدرس.\n2. النشاط الرئيسي (25 دقيقة): إنجاز المهمة في مجموعات.\n3. التأليف والخلاصة (15 دقيقة): حوصلة النتائج.\n\n(ملاحظة: انتقل الآن إلى مرحلة النقد C3 لفحص هذه الإجابة وتعديلها!)`;
      setEditableResponse(fallback);
      onReceiveInitialResponse(generatedPrompt, fallback);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white font-mono font-bold flex items-center justify-center text-sm shadow-xs flex-shrink-0">
              01:10
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-800 border border-indigo-200 mb-1.5">
                <span>النشاط العملي 2 • 20 دقيقة (01:10 → 01:30) • كفاءة C1 & C2</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                ورقة العمل: Ma première demande à l’IA
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                تعبئة عناصر السياق الخمسة وتحويلها آلياً إلى أول Prompt احترافي وإرساله إلى ChatGPT أو Gemini.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Interactive Worksheet (6 cols) */}
        <div className="lg:col-span-6 space-y-4">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
              <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                <FileText className="w-4 h-4 text-indigo-600" />
                <span>بطاقة إعداد الطلب (Fiche de cadrage)</span>
              </h3>
              <span className="text-[11px] font-mono bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                ورقة الأستاذ
              </span>
            </div>

            <div className="space-y-3.5 text-xs">
              <div>
                <label className="block font-bold text-slate-800 mb-1">
                  Je suis (أنا أستاذ مادة):
                </label>
                <input
                  type="text"
                  value={worksheet.subject}
                  onChange={(e) => onUpdateWorksheet({ subject: e.target.value })}
                  placeholder="مثال: الرياضيات / الفرنسية / علوم الحياة والأرض..."
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-800 mb-1">
                  Niveau (المستوى والفئة المستهدفة):
                </label>
                <input
                  type="text"
                  value={worksheet.gradeLevel}
                  onChange={(e) => onUpdateWorksheet({ gradeLevel: e.target.value })}
                  placeholder="مثال: السنة الأولى ثانوي (مستوى متوسط)"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-800 mb-1">
                  Je travaille sur (المفهوم أو موضوع الدرس):
                </label>
                <input
                  type="text"
                  value={worksheet.topic}
                  onChange={(e) => onUpdateWorksheet({ topic: e.target.value })}
                  placeholder="مثال: الدوال التآلفية، الاستعارة المكنية، الانقسام المنصف..."
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-800 mb-1">
                  Mon objectif (الهدف البيداغوجي الأساسي):
                </label>
                <input
                  type="text"
                  value={worksheet.objective}
                  onChange={(e) => onUpdateWorksheet({ objective: e.target.value })}
                  placeholder="مثال: بناء المفهوم عبر وضعية دالة، تمييز الخصائص، تقويم المكتسبات..."
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-800 mb-1">
                  Mes contraintes (القيود وظروف الإنجاز في القسم):
                </label>
                <input
                  type="text"
                  value={worksheet.constraints}
                  onChange={(e) => onUpdateWorksheet({ constraints: e.target.value })}
                  placeholder="مثال: مدة الحصة 50 دقيقة، قسم به 30 تلميذاً، بدون أجهزة هاتف..."
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-800 mb-1">
                  نوع المورد المطلوب (Type de ressource):
                </label>
                <select
                  value={worksheet.resourceType}
                  onChange={(e) => onUpdateWorksheet({ resourceType: e.target.value as any })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50"
                >
                  <option value="activity">نشاط استكشافي تفاعلي (Activité)</option>
                  <option value="problem_situation">وضعية مشكلة للانطلاق (Situation-problème)</option>
                  <option value="exercise">تمارين متدرجة الصعوبة (Exercices progressifs)</option>
                  <option value="qcm">اختبار QCM تقويمي (QCM d'évaluation)</option>
                  <option value="summary">ملخص أو خريطة ذهنية (Synthèse / Schéma)</option>
                  <option value="questions">أسئلة تحليلية موجهة (Questions guidées)</option>
                  <option value="lesson_plan">سيناريو حصة كامل (Scénario pédagogique)</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Compiled Prompt & Testing (6 cols) */}
        <div className="lg:col-span-6 space-y-4">
          {/* Compiled Prompt */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
              <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                <span>الـ Prompt المتولد آلياً لإرساله للذكاء الاصطناعي:</span>
              </span>
              <button
                type="button"
                onClick={handleCopy}
                className="flex items-center gap-1 text-slate-600 hover:text-slate-900 bg-slate-100 px-2.5 py-1 rounded-lg text-xs transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'تم النسخ' : 'نسخ الـ Prompt'}</span>
              </button>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs leading-relaxed whitespace-pre-line border border-slate-800">
              {generatedPrompt}
            </div>

            {/* Direct Tool Launchers */}
            <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center gap-2">
              <a
                href="https://chatgpt.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-700 text-white hover:bg-emerald-800 text-xs font-bold shadow-xs transition-colors"
              >
                <span>إرسال إلى ChatGPT</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://gemini.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 text-xs font-bold shadow-xs transition-colors"
              >
                <span>إرسال إلى Gemini</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                type="button"
                onClick={handleGenerateInApp}
                disabled={isGenerating}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-xs transition-colors disabled:opacity-50"
              >
                <Bot className="w-3.5 h-3.5" />
                <span>{isGenerating ? 'جاري التوليد...' : 'تجربة الإجابة هنا'}</span>
              </button>
            </div>
          </div>

          {/* Initial Response Box (Version 1) */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
              <div className="text-xs font-bold text-slate-900">
                نتيجة المقترح الأول (Version 1):
              </div>
              <span className="text-[10px] text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded font-bold">
                ألصق النتيجة التي وصلتك هنا لنقدها في المرحلة التالية
              </span>
            </div>

            <textarea
              rows={6}
              value={editableResponse}
              onChange={(e) => {
                setEditableResponse(e.target.value);
                onReceiveInitialResponse(generatedPrompt, e.target.value);
              }}
              placeholder="ألصق الإجابة التي حصلت عليها من ChatGPT أو Gemini هنا، أو اضغط 'تجربة الإجابة هنا'..."
              className="w-full p-3 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50 leading-relaxed font-sans"
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
          <span>العودة لاختيار المشكلة</span>
        </button>

        <button
          type="button"
          onClick={onComplete}
          disabled={!editableResponse.trim()}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-sm transition-all disabled:opacity-40"
        >
          <span>الانتقال للنشاط 3: لا تقبل الإجابة الأولى! (C3 & C4)</span>
          <ArrowLeft className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
