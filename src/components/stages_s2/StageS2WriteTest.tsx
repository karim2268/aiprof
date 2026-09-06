import React, { useState } from 'react';
import { Clock, Sparkles, Copy, Check, ExternalLink, ArrowLeft, ArrowRight, RefreshCw, AlertCircle, CheckCircle2 } from 'lucide-react';
import { ParticipantFichePrompt } from '../../types';

interface StageS2WriteTestProps {
  fiche: ParticipantFichePrompt;
  onComplete: () => void;
  onPrev: () => void;
}

export const StageS2WriteTest: React.FC<StageS2WriteTestProps> = ({ fiche, onComplete, onPrev }) => {
  const [copied, setCopied] = useState(false);
  const [testResult, setTestResult] = useState<string>('');
  const [critiqueNotes, setCritiqueNotes] = useState<string>('');
  const [hasTested, setHasTested] = useState(false);

  // Generate cohesive unified prompt from fiche
  const assembledPrompt = `[الدور]: ${fiche.role || 'أستاذ خبير في التعليم التونسي'}
[السياق والمادة]: مادة ${fiche.subject}، لفائدة ${fiche.gradeLevel}، موضوع الدرس: "${fiche.topic}".
[الهدف البيداغوجي]: ${fiche.objective}.
[المهمة المطلوبة]: ${fiche.task}.
[الجمهور والخصائص]: ${fiche.publicDetails} (مستوى: ${fiche.studentLevel || 'متوسط'}).
[القيود والشروط]: المدة المتاحة ${fiche.duration}، عدد التلاميذ ${fiche.classSize}، اللغة: ${fiche.language}، الوسائل المتوفرة: ${fiche.availableTools}.
[شكل النتيجة والتنظيم]: ${fiche.format}.`;

  const handleCopy = () => {
    navigator.clipboard.writeText(assembledPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSimulateAiResponse = () => {
    setHasTested(true);
    setTestResult(`تمت معالجة الطلب بنجاح وفق محددات المنهاج التونسي:
- الحصة: ${fiche.topic} (${fiche.subject} - ${fiche.gradeLevel})
- المدة الإجمالية: ${fiche.duration}
- وضعية الانطلاق (10 دقائق): مسألة تمهيدية واقعية تثير تساؤل التلاميذ حول المفهوم.
- الأنشطة الميدانية (25 دقيقة): عمل بالأفواج في مجموعات لحل الإشكالية وتطبيق القاعدة.
- الحوصلة والتأطير (10 دقائق): استخلاص القاعدة العامة وتدوين الاستنتاجات المشتركة.
- التقويم التكويني (10 دقائق): تمرين سريع لقياس مدى تحقق الهدف البيداغوجي.
[ملاحظة: يمكنك الآن استخدام Follow-up Prompts في المرحلة التالية للتعديل والتطوير!]`);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white font-mono font-bold flex items-center justify-center text-sm shadow-xs flex-shrink-0">
              01:15
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-800 border border-indigo-200 mb-1.5">
                <Clock className="w-3 h-3 text-indigo-600" />
                <span>الحصة 2 • 15 دقيقة (01:15 → 01:30) • الكفاءة C5: تحرير الـPrompt وتجربته</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                النشاط 2: اكتب الـPrompt وجربه في الأداة
              </h2>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                نقوم بتجميع عناصر ورقة العمل السداسية في طلب احترافي متماسك، وننسخه إلى ChatGPT أو Gemini مع الالتزام بالقاعدة الذهبية!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* The Golden Rule Banner */}
      <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-300 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-xs">
          ⚡
        </div>
        <div className="space-y-0.5">
          <h4 className="text-xs font-bold text-amber-950 uppercase tracking-wider">
            القاعدة الذهبية الصارمة للورشة (Règle d'or):
          </h4>
          <p className="text-sm font-bold text-amber-900 leading-snug">
            «ممنوع منعا باتا الاكتفاء بالنتيجة الأولى! ابدأ بسيطًا ثم أضف ما ينقصك: Prompt → Résultat → Analyse → Amélioration»
          </p>
        </div>
      </div>

      {/* Prompt Assembly & Action Box */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Assembled Prompt */}
        <div className="lg:col-span-6 bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <span className="text-xs font-bold text-slate-800 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span>الـPrompt المهيكل والجاهز للتنفيذ:</span>
            </span>
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-all shadow-xs"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>تم النسخ بنجاح!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>نسخ الطلب الكامل</span>
                </>
              )}
            </button>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs leading-relaxed space-y-1.5 border border-slate-800 shadow-inner max-h-72 overflow-y-auto whitespace-pre-line">
            {assembledPrompt}
          </div>

          {/* Direct Launch Buttons to AI Tools */}
          <div className="pt-2 flex flex-wrap items-center gap-2">
            <span className="text-2xs text-slate-500 font-semibold">فتح الأداة وتجربة الطلب:</span>
            <a
              href="https://chatgpt.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold border border-slate-300 transition-colors"
            >
              <span>فتح ChatGPT</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
            </a>
            <a
              href="https://gemini.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold border border-slate-300 transition-colors"
            >
              <span>فتح Gemini</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
            </a>
            <button
              type="button"
              onClick={handleSimulateAiResponse}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-200 transition-colors mr-auto"
            >
              <RefreshCw className="w-3.5 h-3.5 text-emerald-600" />
              <span>محاكاة تجربة فورية</span>
            </button>
          </div>
        </div>

        {/* Right: Results & Analysis */}
        <div className="lg:col-span-6 bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <span className="text-xs font-bold text-slate-800">
              متابعة النتيجة الأولى والنقد البيداغوجي (Analyse):
            </span>
            {hasTested && (
              <span className="text-2xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                تم استلام النتيجة الأولى
              </span>
            )}
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-2 min-h-36 leading-relaxed whitespace-pre-line">
            {testResult || (
              <span className="text-slate-400 italic">
                انسخ الطلب من الجهة المقابلة وجربه في ChatGPT أو Gemini، أو انقر على «محاكاة تجربة فورية» لمشاهدة المخرج الأولي.
              </span>
            )}
          </div>

          {/* Teachers observation note */}
          <div className="space-y-1.5 pt-1">
            <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5 text-indigo-600" />
              <span>ما الذي أعجبك؟ وما الذي ينقص النتيجة أو يحتاج إلى تعديل؟</span>
            </label>
            <textarea
              rows={3}
              value={critiqueNotes}
              onChange={(e) => setCritiqueNotes(e.target.value)}
              placeholder="مثال: التقويم التكويني يحتاج لتوضيح أكثر، أو النشاط طويل بعض الشيء بالنسبة لـ 55 دقيقة..."
              className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs bg-slate-50 focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
            <p className="text-2xs text-slate-500">
              في المرحلة القادمة، سنستخدم مكتبة أسئلة المتابعة (Follow-up prompts) لتعديل كل هذه النقاط بذكاء ودون إعادة البدء من الصفر!
            </p>
          </div>
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
          <span>السابق: فكك المهمة</span>
        </button>

        <button
          type="button"
          onClick={onComplete}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-sm transition-all"
        >
          <span>التالي: النشاط 3 (الحوار الذكي ومكتبة Follow-up Prompts)</span>
          <ArrowLeft className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
