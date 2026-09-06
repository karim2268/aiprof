import React, { useState } from 'react';
import { Clock, ArrowLeft, ArrowRight, CheckCircle2, XCircle, Sparkles, Scale, Lightbulb } from 'lucide-react';

interface StageS2ComparisonProps {
  onComplete: () => void;
  onPrev: () => void;
}

export const StageS2Comparison: React.FC<StageS2ComparisonProps> = ({ onComplete, onPrev }) => {
  const [reflectionAnswered, setReflectionAnswered] = useState<boolean>(false);

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white font-mono font-bold flex items-center justify-center text-sm shadow-xs flex-shrink-0">
              00:40
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-800 border border-indigo-200 mb-1.5">
                <Clock className="w-3 h-3 text-indigo-600" />
                <span>الحصة 2 • 10 دقائق (00:40 → 00:50) • الكفاءة C5: مقارنة وتحليل الـPrompts</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                المقارنة الحاسمة: Prompt A مقابل Prompt B
              </h2>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                نقارن المخرجين جنبًا إلى جنب لنكتشف الحقيقة البيداغوجية الكبرى: جودة الـPrompt لا تقاس بطول الكلمات بل بدرجة وضوح التوجيه!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Side by Side Comparison Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Prompt A */}
        <div className="bg-white rounded-2xl p-6 border border-rose-200 shadow-xs space-y-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 left-0 h-1.5 bg-rose-500" />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <XCircle className="w-5 h-5 text-rose-500" />
              <h3 className="font-bold text-slate-900 text-base">Prompt A (الطلب السطحي)</h3>
            </div>
            <span className="text-2xs font-bold uppercase tracking-wider bg-rose-50 text-rose-700 px-2.5 py-1 rounded-full border border-rose-200">
              عشوائي ومبهم
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900 text-rose-300 font-mono text-xs border border-slate-800 leading-relaxed">
            "حضّرلي درس عن الطاقة الشمسية."
          </div>

          <div className="space-y-2 text-xs">
            <div className="font-semibold text-slate-800">تحليل النتيجة مع الأستاذ:</div>
            <div className="p-3 rounded-xl bg-rose-50/70 border border-rose-100 text-rose-900 space-y-1.5">
              <div>❌ <strong>النتيجة:</strong> معلومات موسوعية عامة غير مؤطرة بزمن أو منهاج.</div>
              <div>❌ <strong>الملاءمة:</strong> لا يمكن إدخالها للقسم إلا بعد إعادة كتابتها بنسبة 90%.</div>
              <div>❌ <strong>الوقت المستغرق لاحقاً:</strong> ساعتان من التعديل والقص واللصق!</div>
            </div>
          </div>
        </div>

        {/* Prompt B */}
        <div className="bg-white rounded-2xl p-6 border border-emerald-200 shadow-xs space-y-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 left-0 h-1.5 bg-emerald-500" />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <h3 className="font-bold text-slate-900 text-base">Prompt B (الطلب المهيكل والواضح)</h3>
            </div>
            <span className="text-2xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 px-2.5 py-1 rounded-full border border-emerald-200">
              دقيق وبيداغوجي
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900 text-emerald-300 font-mono text-xs border border-slate-800 leading-relaxed max-h-24 overflow-y-auto">
            "أنت أستاذ علوم في التعليم الثانوي التونسي. أريد إعداد حصة حول الطاقة الشمسية لتلامذة 1 ثانوي (مستوى متوسط، 55 دقيقة). الهدف: فهم مبدأ التحويل الكهربائي. ابدأ بوضعية مشكلة ثم نشاطاً وخلاصة وتقويماً في جدول منظم..."
          </div>

          <div className="space-y-2 text-xs">
            <div className="font-semibold text-slate-800">تحليل النتيجة مع الأستاذ:</div>
            <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-100 text-emerald-950 space-y-1.5">
              <div>✅ <strong>النتيجة:</strong> جذاذة بيداغوجية محكمة بجدول مقسم بالدقائق والأدوار.</div>
              <div>✅ <strong>الملاءمة:</strong> جاهزة ومطابقة لتوجيهات المنهاج التونسي للعلوم.</div>
              <div>✅ <strong>الوقت المستغرق لاحقاً:</strong> دقيقتان فقط لقراءتها وضبط بعض الجزئيات!</div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Principle / Golden Rule Banner */}
      <div className="p-6 rounded-2xl bg-indigo-900 text-white shadow-md border border-indigo-800 space-y-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-xs">
            💡
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-amber-300 tracking-tight">
              الفكرة الأساسية التي يجب أن ترسخ في ذهن كل أستاذ:
            </h3>
            <p className="text-sm text-indigo-100 leading-relaxed font-medium">
              الهدف ليس أن نقول «شوفوا قداش Prompt B طويل»... بل «شوفوا قداش AI أصبح يعرف شنوة نحبوا بالضبط!»
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="p-4 rounded-xl bg-white/10 border border-white/10 text-center">
            <div className="text-xs text-rose-300 font-bold mb-1">المعادلة الخاطئة ❌</div>
            <div className="text-base font-extrabold text-white">Prompt جيد ≠ Prompt طويل وممل</div>
          </div>
          <div className="p-4 rounded-xl bg-emerald-500/20 border border-emerald-400/30 text-center">
            <div className="text-xs text-emerald-300 font-bold mb-1">المعادلة الصحيحة ✅</div>
            <div className="text-base font-extrabold text-emerald-200">Prompt جيد = Prompt واضح يعطي AI ما يحتاجه</div>
          </div>
        </div>
      </div>

      {/* Interactive Teacher Reflection */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3">
        <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
          <Lightbulb className="w-4 h-4 text-amber-500" />
          <span>تأكيد المفهوم: ما هو العنصر الأكثر تأثيراً في تحسين النتيجة حسب رأيك؟</span>
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
          {[
            { label: 'تحديد قيد الوقت (55 دقيقة)', tip: 'يمنع الحشو ويوزع الحصة واقعياً' },
            { label: 'تحديد الجمهور والمستوى بدقة', tip: 'يضبط لغة الخطاب وعمق الأنشطة' },
            { label: 'طلب النتيجة في شكل جدول مهيكل', tip: 'يمنحك إخراجاً بصرياً سريع القراءة' },
          ].map((item, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setReflectionAnswered(true)}
              className="p-3.5 rounded-xl border border-slate-200 hover:border-indigo-400 hover:bg-indigo-50/50 text-right transition-all text-xs space-y-1"
            >
              <div className="font-bold text-slate-800">{item.label}</div>
              <div className="text-slate-500 text-2xs">{item.tip}</div>
            </button>
          ))}
        </div>

        {reflectionAnswered && (
          <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-900 font-medium animate-in fade-in flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>أحسنت! جميع هذه العناصر معاً تصنع قوة الـPrompt الفعال وتوفر ساعات من الجهد.</span>
          </div>
        )}
      </div>

      {/* Navigation Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-200">
        <button
          type="button"
          onClick={onPrev}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-medium text-xs transition-colors"
        >
          <ArrowRight className="w-4 h-4" />
          <span>السابق: نبني الـPrompt بالتدريج</span>
        </button>

        <button
          type="button"
          onClick={onComplete}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-sm transition-all"
        >
          <span>التالي: استراحة وتحدي التفكير ☕</span>
          <ArrowLeft className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
