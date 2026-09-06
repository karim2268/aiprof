import React, { useState } from 'react';
import { Clock, AlertTriangle, ArrowLeft, ArrowRight, Eye, CheckCircle, HelpCircle } from 'lucide-react';

interface StageS2WeakPromptProps {
  onComplete: () => void;
  onPrev: () => void;
}

export const StageS2WeakPrompt: React.FC<StageS2WeakPromptProps> = ({ onComplete, onPrev }) => {
  const [activeMissing, setActiveMissing] = useState<string | null>(null);

  const missingElements = [
    {
      id: 'who',
      question: 'لمن؟ (Pour qui ?)',
      explanation: 'هل هو لتلاميذ سنة 1 ثانوي؟ أم سنة 6 ابتدائي؟ أم طلبة هندسة طاقية في الجامعة؟ لم نخبره بأي شيء!',
      status: 'مجهول تماماً',
    },
    {
      id: 'what',
      question: 'ماذا بالتحديد؟ (Quoi exactement ?)',
      explanation: 'هل نريد تجربة علمية؟ أم قانون فيزيائي؟ أم أبعاداً بيئية واقتصادية؟ كلمة "درس" عامة جداً.',
      status: 'مبهم وفضفاض',
    },
    {
      id: 'why',
      question: 'لماذا؟ وما هو الهدف؟ (Objectif ?)',
      explanation: 'ما هي الكفاءة التي نريد أن يكتسبها التلميذ في نهاية الحصة؟ لا توجد أي كفاءة مستهدفة.',
      status: 'غير محدد',
    },
    {
      id: 'how',
      question: 'كيف؟ (Démarche pédagogique ?)',
      explanation: 'هل نريد وضعية مشكلة؟ نشاطاً في مجموعات؟ بحثاً وثائقياً؟ أم إلقاءً تقليدياً؟',
      status: 'متروك للصدفة',
    },
    {
      id: 'time',
      question: 'كم من الوقت؟ (Durée ?)',
      explanation: 'هل حصتنا تدوم 55 دقيقة؟ أم ساعتين في المختبر؟ أم 15 دقيقة تمهيدية؟',
      status: 'غير مضبوط',
    },
    {
      id: 'level',
      question: 'بأي مستوى؟ (Niveau des élèves ?)',
      explanation: 'هل هم تلاميذ متفوقون؟ أم متعثرون؟ وما هي مكتسباتهم القبلية في مادة العلوم؟',
      status: 'غائب تماماً',
    },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Stage Header */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500 text-white font-mono font-bold flex items-center justify-center text-sm shadow-xs flex-shrink-0">
              00:10
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200 mb-1.5">
                <Clock className="w-3 h-3 text-amber-600" />
                <span>الحصة 2 • 15 دقيقة (00:10 → 00:25) • الكفاءة C1: فحص الـPrompt الضعيف</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                التجربة 1: تجربة Prompt ضعيف ونقد النتيجة
              </h2>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                نقوم مع الأساتذة بتجربة أشهر طلب عشوائي: «حضّرلي درس عن الطاقة الشمسية»، ونحلل لماذا تأتي النتيجة باردة وسطحية.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Weak Prompt Demo Box */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left / Prompt card */}
        <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-600 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4" />
              <span>Prompt ضعيف وعشوائي (Prompt naïf)</span>
            </span>
            <span className="text-xs bg-rose-50 text-rose-700 px-2.5 py-0.5 rounded-full border border-rose-200 font-semibold">
              سطحي جداً
            </span>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-sm border border-slate-800 shadow-inner leading-relaxed">
            "حضّرلي درس عن الطاقة الشمسية."
          </div>

          <div className="bg-amber-50/80 border border-amber-200 p-4 rounded-xl space-y-2">
            <h4 className="text-xs font-bold text-amber-950 flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4 text-amber-700" />
              <span>السؤال النقدي الموجه لأساتذة القاعة:</span>
            </h4>
            <p className="text-xs text-amber-900 leading-relaxed font-medium">
              «هل هذه الإجابة تنجم تكون صالحة لكل الأساتذة؟ ولكل الأقسام؟ طبعاً لا! علاش؟»
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1.5">
            <div className="font-bold text-slate-800">نتيجة حتمية للطلب السطحي:</div>
            <ul className="list-disc list-inside space-y-1 text-slate-600">
              <li>نص موسوعي عام يشبه مقال ويكيبيديا.</li>
              <li>لا توجد خطة زمنية ولا توزيع لدور التلميذ.</li>
              <li>لا يناسب أي مستوى دراسي حقيقي في المعهد.</li>
            </ul>
          </div>
        </div>

        {/* Right / Generated Weak Output */}
        <div className="lg:col-span-7 bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <Eye className="w-4 h-4 text-slate-400" />
              <span>الإجابة النمطية التي يرجعها الذكاء الاصطناعي</span>
            </span>
            <span className="text-xs bg-slate-100 text-slate-600 px-2.5 py-0.5 rounded-full">
              رد آلي عام
            </span>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-3 font-sans max-h-72 overflow-y-auto leading-relaxed">
            <h5 className="font-bold text-slate-900 text-sm">درس: الطاقة الشمسية وأهميتها في حياتنا</h5>
            <p><strong>مقدمة:</strong> تعتبر الطاقة الشمسية من أهم مصادر الطاقة المتجددة والنظيفة في العالم...</p>
            <p><strong>المحور الأول: تعريف الطاقة الشمسية:</strong> هي الطاقة المنبعثة من أشعة الشمس على شكل حرارة وضوء...</p>
            <p><strong>المحور الثاني: استخدامات الطاقة الشمسية:</strong> توليد الكهرباء عبر الألواح الكهروضوئية، تسخين المياه، والاستخدامات الزراعية والصناعية...</p>
            <p><strong>المحور الثالث: المزايا والسلبيات:</strong> تتميز بأنها صديقة للبيئة لكنها تتأثر بالغيوم والليل...</p>
            <p><strong>خاتمة وأسئلة:</strong> ما هي الطاقة الشمسية؟ اذكر ثلاث فوائد لها.</p>
          </div>

          <div className="p-3 bg-rose-50 border border-rose-100 rounded-xl text-xs text-rose-800 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-rose-600 flex-shrink-0" />
            <span>
              <strong>حكم الأستاذ:</strong> "هذا ليس درساً بيداغوجياً! لا يمكنني الدخول به إلى قسمي إطلاقاً."
            </span>
          </div>
        </div>
      </div>

      {/* Deconstruction of Missing Elements */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div>
            <h3 className="font-bold text-slate-900 text-base">
              شنوة ينقص الـAI باش يفهم شنوة نحبوا بالضبط؟
            </h3>
            <p className="text-xs text-slate-500">
              اضغط على كل بطاقة من البطاقات الست لفحص العنصر الغائب وتأثيره البيداغوجي:
            </p>
          </div>
          <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-lg">
            6 أسئلة مفقودة في الـPrompt الأول
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {missingElements.map((item) => {
            const isOpened = activeMissing === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setActiveMissing(isOpened ? null : item.id)}
                className={`p-4 rounded-xl border transition-all cursor-pointer ${
                  isOpened
                    ? 'bg-indigo-50/90 border-indigo-300 shadow-xs ring-1 ring-indigo-200'
                    : 'bg-slate-50 border-slate-200 hover:border-slate-300 hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-slate-900">{item.question}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-800 font-semibold">
                    {item.status}
                  </span>
                </div>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {item.explanation}
                </p>
              </div>
            );
          })}
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
          <span>السابق: رجوع للحصة الأولى</span>
        </button>

        <button
          type="button"
          onClick={onComplete}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-sm transition-all"
        >
          <span>التالي: التجربة 2 (نبني الـPrompt معًا بالتدريج)</span>
          <ArrowLeft className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
