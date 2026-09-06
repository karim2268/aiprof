import React, { useState } from 'react';
import { TeacherWorksheet } from '../../types';
import { MessageSquareWarning, Copy, Check, Sparkles, ArrowLeft, ArrowRight, RefreshCw, GitCompare } from 'lucide-react';

interface StageCritiqueProps {
  worksheet: TeacherWorksheet;
  version1Response: string;
  onUpdateFinalDeliverable: (
    critiques: string[],
    refinementPrompt: string,
    version2Response: string
  ) => void;
  savedCritiques: string[];
  savedVersion2: string;
  onComplete: () => void;
  onBack: () => void;
}

export const StageCritique: React.FC<StageCritiqueProps> = ({
  worksheet,
  version1Response,
  onUpdateFinalDeliverable,
  savedCritiques,
  savedVersion2,
  onComplete,
  onBack,
}) => {
  const [selectedCritiques, setSelectedCritiques] = useState<string[]>(
    savedCritiques.length > 0 ? savedCritiques : ['صعب جداً على التلامذة', 'غير مناسب للوقت المحدد']
  );
  const [customCritique, setCustomCritique] = useState('');
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [version2, setVersion2] = useState<string>(
    savedVersion2 ||
      `النسخة المحسّنة (Version 2) لدرس ${worksheet.topic}:\n\n- النشاط أصبح مبسطاً ومقسماً إلى خطوتين متدرجتين.\n- تم تحديد التوقيت بدقة (12 دقيقة للنشاط + 8 دقائق للتقويم السريع).\n- إضافة بطاقات استدلال بصري لتسهيل الفهم على المتعثرين.\n- صياغة أسئلة محددة تمنع التشتت وتضمن مشاركة 30 تلميذاً.`
  );
  const [isImproving, setIsImproving] = useState(false);

  const predefinedCritiques = [
    'صعب جدًا على مستوى التلامذة',
    'طويل جداً وغير قابل للإنجاز في الحصة',
    'غير مناسب للوقت (يستغرق أكثر من الحصة)',
    'لا يناسب مستوى تلامذة التعليم التونسي',
    'ينقصه نشاط عملي تفاعلي واضح',
    'يوجد فيه خطأ علمي أو لغوي أو منهجي',
    'اللغة أو المصطلحات غير مناسبة للفئة العمرية',
  ];

  const refinementPrompt = `راجع إجابتك السابقة حول (${worksheet.topic || 'الدرس'}).
لاحظتُ فيها النقاط التالية التي تحتاج إلى تصحيح:
${selectedCritiques.map((c) => `- ${c}`).join('\n')}
${customCritique ? `- ملاحظة إضافية: ${customCritique}` : ''}

المطلوب:
أعد صياغة المقترح بالكامل ليكون أبسط، وأكثر واقعية، وقابلاً للتطبيق المباشر داخل قسم عادي يضم ${
    worksheet.constraints || '30 تلميذاً وفي مدة 50 دقيقة'
  }. ركز على البيداغوجيا النشطة والتقويم الملموس.`;

  const toggleCritique = (item: string) => {
    setSelectedCritiques((prev) =>
      prev.includes(item) ? prev.filter((c) => c !== item) : [...prev, item]
    );
  };

  const handleAddCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customCritique.trim()) return;
    if (!selectedCritiques.includes(customCritique.trim())) {
      setSelectedCritiques((prev) => [...prev, customCritique.trim()]);
    }
    setCustomCritique('');
  };

  const handleCopyRefinement = () => {
    navigator.clipboard.writeText(refinementPrompt);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  const handleGenerateImprovement = async () => {
    setIsImproving(true);
    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: `${refinementPrompt}\n\nنص الإجابة السابقة المراد تنقيحها:\n${version1Response}`,
        }),
      });
      const data = await res.json();
      const text = data.text || 'لم يتم استلام نص';
      setVersion2(text);
      onUpdateFinalDeliverable(selectedCritiques, refinementPrompt, text);
    } catch (err) {
      console.error(err);
      onUpdateFinalDeliverable(selectedCritiques, refinementPrompt, version2);
    } finally {
      setIsImproving(false);
    }
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
                <span>النشاط العملي 3 • 15 دقيقة (01:30 → 01:45) • كفاءة C3 & C4</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                النشاط العملي 3: لا تقبل الإجابة الأولى!
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                نقطة جوهرية: قوة الأستاذ ليست في استلام إجابة الذكاء الاصطناعي، بل في غربلتها ونقدها وتوجيهه للتعديل (Version 1 → Version 2).
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Critique Selection Matrix */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
          <div>
            <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
              <MessageSquareWarning className="w-5 h-5 text-rose-600" />
              <span>❌ ما الذي لم يعجبني في الإجابة الأولى؟</span>
            </h3>
            <p className="text-xs text-slate-500">
              اختر المآخذ والملاحظات النقدية التي لاحظتها في المقترح الأول:
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
          {predefinedCritiques.map((item, idx) => {
            const isSelected = selectedCritiques.includes(item);
            return (
              <button
                key={idx}
                type="button"
                onClick={() => toggleCritique(item)}
                className={`p-3 rounded-xl border text-right text-xs transition-all flex items-center justify-between ${
                  isSelected
                    ? 'bg-rose-50 border-rose-300 text-rose-950 font-bold shadow-xs'
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <span>{item}</span>
                <span
                  className={`w-5 h-5 rounded-md flex items-center justify-center text-xs ${
                    isSelected ? 'bg-rose-600 text-white' : 'border border-slate-300'
                  }`}
                >
                  {isSelected ? '✓' : ''}
                </span>
              </button>
            );
          })}
        </div>

        {/* Custom Critique Form */}
        <form onSubmit={handleAddCustom} className="mt-4 flex items-center gap-2">
          <input
            type="text"
            value={customCritique}
            onChange={(e) => setCustomCritique(e.target.value)}
            placeholder="أضف ملاحظة نقدية أخرى خاصة بقسمك أو مادتك..."
            className="flex-1 px-3.5 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white text-xs font-semibold rounded-xl hover:bg-indigo-700 transition-colors shadow-xs"
          >
            إضافة للملاحظات
          </button>
        </form>
      </div>

      {/* Generated Refinement Prompt */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
          <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span>طلب التحسين والتصحيح (Prompt de révision):</span>
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopyRefinement}
              className="flex items-center gap-1 text-slate-600 hover:text-slate-900 bg-slate-100 px-3 py-1.5 rounded-lg text-xs transition-colors"
            >
              {copiedPrompt ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedPrompt ? 'تم النسخ' : 'نسخ طلب التحسين'}</span>
            </button>
            <button
              type="button"
              onClick={handleGenerateImprovement}
              disabled={isImproving}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-xs transition-colors disabled:opacity-50"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isImproving ? 'animate-spin' : ''}`} />
              <span>{isImproving ? 'جاري التحسين...' : 'توليد Version 2 هنا'}</span>
            </button>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs leading-relaxed whitespace-pre-line border border-slate-800">
          {refinementPrompt}
        </div>
      </div>

      {/* Side-by-Side Comparator: Version 1 vs Version 2 */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
        <div className="flex items-center gap-2 pb-3 mb-4 border-b border-slate-100">
          <GitCompare className="w-5 h-5 text-indigo-600" />
          <h3 className="font-bold text-base text-slate-900">
            مقارنة المخرجات: Version 1 مقابل Version 2 (نتاج الحوار والتعديل)
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Version 1 */}
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-200">
                <span className="text-xs font-bold text-slate-600">Version 1 (المقترح الأولي)</span>
                <span className="text-[10px] bg-slate-200 text-slate-700 px-2 py-0.5 rounded font-mono">قبل النقد</span>
              </div>
              <div className="text-xs text-slate-600 leading-relaxed max-h-60 overflow-y-auto whitespace-pre-line font-sans">
                {version1Response || 'لا يوجد نص للمقترح الأول بعد'}
              </div>
            </div>
            <div className="mt-3 pt-2 border-t border-slate-200 text-[11px] text-rose-700 font-medium">
              ❌ يحتوي على النواقص التي تم تسجيلها أعلاه
            </div>
          </div>

          {/* Version 2 */}
          <div className="p-4 rounded-xl border border-emerald-300 bg-emerald-50/40 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-emerald-200">
                <span className="text-xs font-bold text-emerald-950">Version 2 (المقترح المنقح)</span>
                <span className="text-[10px] bg-emerald-600 text-white px-2 py-0.5 rounded font-mono font-bold">
                  بعد الحوار
                </span>
              </div>
              <textarea
                rows={8}
                value={version2}
                onChange={(e) => {
                  setVersion2(e.target.value);
                  onUpdateFinalDeliverable(selectedCritiques, refinementPrompt, e.target.value);
                }}
                className="w-full text-xs text-slate-800 leading-relaxed max-h-60 overflow-y-auto whitespace-pre-line font-sans bg-transparent border-0 focus:outline-none resize-none"
              />
            </div>
            <div className="mt-3 pt-2 border-t border-emerald-200 text-[11px] text-emerald-800 font-bold">
              ✅ جاهز للاعتماد والمراجعة العلمية
            </div>
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
          <span>العودة للنشاط 2</span>
        </button>

        <button
          type="button"
          onClick={() => {
            onUpdateFinalDeliverable(selectedCritiques, refinementPrompt, version2);
            onComplete();
          }}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-sm transition-all"
        >
          <span>الانتقال للحظة الحاسمة: هل نثق في AI؟ (C5)</span>
          <ArrowLeft className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
