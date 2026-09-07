import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Shuffle, 
  AlertOctagon, 
  CheckCircle2, 
  HelpCircle, 
  Eye, 
  EyeOff, 
  Sparkles, 
  ShieldAlert,
  Brain,
  Award,
  Layers
} from 'lucide-react';
import { Session4Deliverable } from '../../types';

interface StageS4DifferentiationChallengeProps {
  deliverable: Session4Deliverable;
  onPrev?: () => void;
  onComplete: () => void;
}

export const StageS4DifferentiationChallenge: React.FC<StageS4DifferentiationChallengeProps> = ({
  deliverable,
  onPrev,
  onComplete,
}) => {
  const [activeTab, setActiveTab] = useState<'differentiation' | 'challenge'>('differentiation');
  const [diffPathway, setDiffPathway] = useState<'simplifiee' | 'standard' | 'defi'>('standard');
  const [showErrorReveal, setShowErrorReveal] = useState(false);
  const [userDetectedError, setUserDetectedError] = useState<string>('');

  const exTarget = deliverable.exercices[2] || deliverable.exercices[0];

  const simulatedTrickyExercise = {
    title: 'تمرين في النسب والأسعار (تم توليده بواسطة AI مع حلّه)',
    enonce: `اشترى تاجر قطعة قماش بمبلغ 200 دينار. 
أراد بيعها بربح قدره 25% من ثمن البيع.
فما هو ثمن البيع الذي يجب أن يحدده التاجر؟`,
    aiProposedSolution: `الحل النموذجي المقترح من الذكاء الاصطناعي:
1) نحسب قيمة الربح:
200 × 25% = 200 × 0.25 = 50 ديناراً.
2) ثمن البيع = ثمن الشراء + الربح
ثمن البيع = 200 + 50 = 250 ديناراً.
إذن ثمن البيع المطلوب هو 250 ديناراً.`,
    actualFlaw: `⚠️ الخطأ العلمي الفادح:
الذكاء الاصطناعي حسب 25% من "ثمن الشراء" (200 × 0.25 = 50)، بينما نص التمرين حدد صراحة: "بربح قدره 25% من ثمن البيع"!
الحساب الصحيح:
ثمن البيع (P) = ثمن الشراء (200) + 0.25 × P
P - 0.25P = 200 ==> 0.75P = 200
P = 200 / 0.75 = 266.666 ديناراً!
(لو باع بـ 250، فإن ربحه 50 من 250 = 20% فقط وليس 25%!).`,
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-amber-950 via-slate-900 to-rose-950 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/20 text-rose-200 border border-rose-400/30 text-xs font-semibold">
            <span>الحصة 4 • المرحلة 9 (01:40 → 01:57)</span>
            <span>•</span>
            <span>🔄 النشاط 3: التمايز + 🧪 تحدي هل الـCorrigé صحيح؟</span>
          </div>

          <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
            التمايز البيداغوجي: <span className="text-amber-300">نفس الهدف، 3 مسارات</span>
          </h1>

          <p className="text-amber-100/90 text-base max-w-3xl leading-relaxed">
            القسم ليس قالباً واحداً! نستخدم الذكاء الاصطناعي لإنشاء 3 نسخ متمايزة من نفس التمرين، ثم نخوض التحدي الأهم: <strong className="text-white">هل تثق في الحلول النموذجية التي يولدها AI؟</strong>
          </p>
        </div>
      </div>

      {/* Main Mode Toggle */}
      <div className="flex gap-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200 w-fit mx-auto">
        <button
          onClick={() => setActiveTab('differentiation')}
          className={`px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition flex items-center gap-2 ${
            activeTab === 'differentiation'
              ? 'bg-white text-slate-900 shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Shuffle className="w-4 h-4 text-emerald-600" />
          <span>مسارات التمايز الثلاثية (Differentiation)</span>
        </button>

        <button
          onClick={() => setActiveTab('challenge')}
          className={`px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition flex items-center gap-2 ${
            activeTab === 'challenge'
              ? 'bg-white text-slate-900 shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <AlertOctagon className="w-4 h-4 text-rose-600" />
          <span>تحدي: هل الـCorrigé صحيح؟ 🧪</span>
        </button>
      </div>

      {/* SECTION 1: DIFFERENTIATION PATHWAYS */}
      {activeTab === 'differentiation' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-6 animate-in fade-in duration-200">
          <div className="space-y-1">
            <h3 className="font-bold text-slate-900 text-lg">نفس الهدف التعليمي، 3 مسارات تناسب تنوع القسم:</h3>
            <p className="text-xs text-slate-500">
              الهدف المستهدف: {exTarget?.objectif || 'تطبيق مفهوم التخفيضات المتتالية وحساب السعر النهائي'}
            </p>
          </div>

          {/* Pathway Selector */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <button
              onClick={() => setDiffPathway('simplifiee')}
              className={`p-4 rounded-xl border text-right transition space-y-1.5 ${
                diffPathway === 'simplifiee'
                  ? 'bg-blue-50/80 border-blue-500 shadow-xs'
                  : 'bg-slate-50 hover:bg-slate-100 border-slate-200'
              }`}
            >
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-blue-100 text-blue-800">
                المسار 1: دعم وتيسير
              </span>
              <div className="font-bold text-slate-900 text-xs">لتلميذ يواجه صعوبات</div>
              <div className="text-[11px] text-slate-500">إضافة خطوات وسيطة، أسئلة موجهة، وتجنيب الحسابات المعقدة.</div>
            </button>

            <button
              onClick={() => setDiffPathway('standard')}
              className={`p-4 rounded-xl border text-right transition space-y-1.5 ${
                diffPathway === 'standard'
                  ? 'bg-emerald-50/80 border-emerald-500 shadow-xs'
                  : 'bg-slate-50 hover:bg-slate-100 border-slate-200'
              }`}
            >
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800">
                المسار 2: المسار العادي
              </span>
              <div className="font-bold text-slate-900 text-xs">للغالبية العادية من القسم</div>
              <div className="text-[11px] text-slate-500">التمرين القياسي المعتمد في الفرض الموحد للقسم.</div>
            </button>

            <button
              onClick={() => setDiffPathway('defi')}
              className={`p-4 rounded-xl border text-right transition space-y-1.5 ${
                diffPathway === 'defi'
                  ? 'bg-purple-50/80 border-purple-500 shadow-xs'
                  : 'bg-slate-50 hover:bg-slate-100 border-slate-200'
              }`}
            >
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-purple-100 text-purple-800">
                المسار 3: تحدٍ وتعمق (Défi)
              </span>
              <div className="font-bold text-slate-900 text-xs">للتلاميذ المتفوقين والسريعين</div>
              <div className="text-[11px] text-slate-500">سؤال إضافي مركب يمنع الملل ويقيس البرهنة والتجريد.</div>
            </button>
          </div>

          {/* Pathway Content Box */}
          <div className="p-6 rounded-2xl bg-slate-900 text-slate-100 font-sans text-sm leading-relaxed border border-slate-800 space-y-3">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="font-bold text-slate-200 text-xs">
                {diffPathway === 'simplifiee' && '🔹 صيغة التمرين المبسطة مع سند توجيهي:'}
                {diffPathway === 'standard' && '🟢 صيغة التمرين القياسية المعتمدة:'}
                {diffPathway === 'defi' && '🟣 صيغة التمرين المتعمقة (سؤال التحدي):'}
              </span>
              <span className="text-[11px] text-slate-400">نفس الكفاءة المستهدفة</span>
            </div>

            <div className="whitespace-pre-line text-xs sm:text-sm">
              {diffPathway === 'simplifiee' && (exTarget?.differentiation?.simplifiee || 'احسب أولاً السعر بعد التخفيض الأول (10%). ثم احسب التخفيض الثاني (5%) على السعر الذي وجدته في الخطوة 1.')}
              {diffPathway === 'standard' && (exTarget?.differentiation?.standard || exTarget?.enonce)}
              {diffPathway === 'defi' && (exTarget?.differentiation?.defi || 'أثبت رياضياً دون استعمال أرقام: إذا خضع مقدار لتخفيضين متتاليين a% و b%، فإن التخفيض الإجمالي هو دائماً أصغر من (a + b)%.')}
            </div>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-xs text-emerald-950 leading-relaxed">
            💡 <strong>الفائدة البيداغوجية:</strong> في بضع ثوانٍ، وفّر لك الذكاء الاصطناعي مادة لتمايز التعلمات في القسم دون إضاعة ساعات في صياغة 3 فروض منفصلة!
          </div>
        </div>
      )}

      {/* SECTION 2: CORRIGÉ CHALLENGE */}
      {activeTab === 'challenge' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-6 animate-in fade-in duration-200">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-rose-100 text-rose-800 text-xs font-bold">
              <AlertOctagon className="w-4 h-4" />
              <span>تحدي التثبت: هل يمكن أن يخطئ الذكاء الاصطناعي في الحل؟</span>
            </div>
            <h3 className="font-black text-slate-900 text-lg pt-1">
              اقرأ التمرين والحل التاليين واكتشف أين يكمن الفخ!
            </h3>
          </div>

          {/* Exercise & Proposed Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="text-xs font-bold text-slate-500 uppercase">نص المسألة</div>
              <div className="text-xs sm:text-sm text-slate-800 font-medium whitespace-pre-line leading-relaxed">
                {simulatedTrickyExercise.enonce}
              </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-900 text-slate-100 border border-slate-800 space-y-2 font-mono text-xs leading-relaxed">
              <div className="text-xs font-bold text-amber-400 uppercase">الحل المقترح من ChatGPT / Gemini</div>
              <div className="whitespace-pre-line">
                {simulatedTrickyExercise.aiProposedSolution}
              </div>
            </div>
          </div>

          {/* Teacher Input for Error Detection */}
          <div className="space-y-3 bg-amber-50/70 border border-amber-200 rounded-2xl p-5">
            <label className="text-xs font-bold text-amber-950 block">
              ✍️ هل لاحظت أي خطأ؟ اكتب ما هو الخطأ برأيك قبل كشف النتيجة:
            </label>
            <input
              type="text"
              value={userDetectedError}
              onChange={(e) => setUserDetectedError(e.target.value)}
              placeholder="اكتب ملاحظتك النقدية هنا..."
              className="w-full px-4 py-2.5 rounded-xl border border-amber-300 bg-white text-xs text-slate-800 focus:ring-2 focus:ring-amber-500 outline-none"
            />

            <div className="pt-2 flex justify-between items-center">
              <button
                onClick={() => setShowErrorReveal(!showErrorReveal)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-xs transition"
              >
                {showErrorReveal ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                <span>{showErrorReveal ? 'إخفاء التحليل العلمي للخطأ' : 'كشف الخطأ الخفي للذكاء الاصطناعي'}</span>
              </button>

              <span className="text-[11px] text-amber-800 font-medium">
                تذكّر: الذكاء الاصطناعي ليس آلة حاسبة بل نموذج لغوي!
              </span>
            </div>
          </div>

          {/* Reveal Box */}
          {showErrorReveal && (
            <div className="p-5 rounded-2xl bg-rose-50 border-2 border-rose-300 text-rose-950 space-y-2 animate-in fade-in duration-200">
              <div className="text-xs font-bold flex items-center gap-2 text-rose-900">
                <AlertOctagon className="w-4 h-4 text-rose-600" />
                <span>التحليل العلمي البيداغوجي للخطأ:</span>
              </div>
              <div className="text-xs sm:text-sm font-sans leading-relaxed whitespace-pre-line">
                {simulatedTrickyExercise.actualFlaw}
              </div>
            </div>
          )}

          <div className="bg-slate-900 text-white rounded-2xl p-6 space-y-2 border border-slate-800">
            <div className="text-amber-400 font-bold text-sm flex items-center gap-2">
              <Brain className="w-4 h-4" />
              <span>الدرس الحاسم لكل أستاذ:</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              نماذج الذكاء الاصطناعي (LLMs) تتنبأ بالكلمة الأكثر احتمالاً. إنها لا "تحسب" بوعي رياضي دقيق في كل مرة، وتخلط بسهولة بين "النسبة من ثمن الشراء" و"النسبة من ثمن البيع". إياك أن تأخذ Corrigé من الذكاء الاصطناعي وتوزعه على تلاميذك دون حله بنفسك خطوة بخطوة بالورقة والقلم!
            </p>
          </div>
        </div>
      )}

      {/* Navigation Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200">
        <button
          onClick={onPrev}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-700 font-medium text-sm hover:bg-slate-50 transition"
        >
          <ArrowRight className="w-4 h-4" />
          <span>المرحلة السابقة: إنشاء الاختبار كاملاً</span>
        </button>

        <button
          onClick={onComplete}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition hover:translate-x-0.5"
        >
          <span>المرحلة الختامية: المنتوج الإجباري والتصدير لـ Google Sheets</span>
          <ArrowLeft className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
