import React, { useState } from 'react';
import { Coffee, ArrowLeft, HeartHandshake, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

interface StageS3BreakProps {
  onComplete: () => void;
}

export const StageS3Break: React.FC<StageS3BreakProps> = ({ onComplete }) => {
  const [selectedRole, setSelectedRole] = useState<string | null>('contextualizer');

  const roles = [
    {
      id: 'contextualizer',
      title: 'صاحب السياق والواقعية',
      description: 'أنا الوحيد الذي يعرف وتيرة التلامذة وحجم القاعة والوسائل المتاحة فعلياً في المعهد.',
    },
    {
      id: 'guardian',
      title: 'حارس الصدق العلمي والبيداغوجي',
      description: 'أنا من يتحقق من خلو المحتوى من الهلوسة والخلط ومطابقته للمنهاج الرسمي التونسي.',
    },
    {
      id: 'orchestrator',
      title: 'مايسترو التفاعل الإنساني الصفي',
      description: 'الذكاء الاصطناعي يقترح أفكاراً، لكنني أنا من يدير النقاش وينظر في عيون التلاميذ ويشجع المتعثرين.',
    },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-500 text-white flex items-center justify-center flex-shrink-0 shadow-xs">
            <Coffee className="w-6 h-6" />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-900 border border-amber-200 mb-1.5">
              <span>الحصة 3 • 10 دقائق (00:55 → 01:05) • استراحة وتأمل بيداغوجي</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              استراحة قهوة وتأمل: «Préparer avec l’IA vs Faire préparer par l’IA»
            </h2>
            <p className="text-sm text-slate-600 mt-1 leading-relaxed">
              لحظة لالتقاط الأنفاس وترسيخ الفارق بين التمكين المهني والتخلي عن القرار البيداغوجي.
            </p>
          </div>
        </div>
      </div>

      {/* Philosophy Contrast Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 shadow-xs space-y-4">
          <div className="flex items-center gap-2 text-emerald-800">
            <ShieldCheck className="w-5 h-5" />
            <h3 className="font-bold text-base">🟢 Préparer avec l’IA (التحضير مع الـ AI)</h3>
          </div>
          <div className="text-xs font-bold text-emerald-700 bg-white/70 px-3 py-1 rounded-md inline-block">
            هذا هو الهدف المنشود
          </div>
          <p className="text-xs text-emerald-950 leading-relaxed">
            الـ AI شريك عصف ذهني ومساعد في الصياغة واقتراح البدائل. الأستاذ يقود المسار، يختار الأهداف،
            يحدد القيود، يعدل الصياغات، ويقرر الصيغة النهائية بنفسه.
          </p>
          <ul className="text-xs text-emerald-900 space-y-1.5 list-disc list-inside">
            <li>الأستاذ هو المهندس المعماري للحصة.</li>
            <li>الـ AI يوفر الوقت في كتابة التمارين ونصوص الوضعيات.</li>
            <li>المحافظة التامة على البصمة الشخصية للأستاذ.</li>
          </ul>
        </div>

        <div className="p-6 rounded-2xl bg-rose-50 border border-rose-200 shadow-xs space-y-4">
          <div className="flex items-center gap-2 text-rose-800">
            <HeartHandshake className="w-5 h-5" />
            <h3 className="font-bold text-base">🔴 Faire préparer par l’IA (ترك الـ AI يحضّر بدلاً منك)</h3>
          </div>
          <div className="text-xs font-bold text-rose-700 bg-white/70 px-3 py-1 rounded-md inline-block">
            هذا هو الخطر الداهم
          </div>
          <p className="text-xs text-rose-950 leading-relaxed">
            نسخ خطة درس كاملة بضغطة زر وطباعتها وتوزيعها دون تفكير نقدي. النتيجة: دروس معلبة، أوقات مستحيلة،
            تلاميذ سلبيون، وانفصال تام عن واقع القسم الحقيقي.
          </p>
          <ul className="text-xs text-rose-900 space-y-1.5 list-disc list-inside">
            <li>فقدان الأستاذ لحسه البيداغوجي وتخليه عن قيادة القسم.</li>
            <li>فشل الحصة في أول 10 دقائق بسبب غياب التكيف الزمني.</li>
            <li>تمرير أخطاء علمية وتاريخية وتربوية للتلاميذ.</li>
          </ul>
        </div>
      </div>

      {/* Memorable Quote Banner */}
      <div className="p-6 rounded-2xl bg-slate-900 text-white text-center space-y-3 shadow-md">
        <Sparkles className="w-6 h-6 text-amber-400 mx-auto" />
        <p className="text-lg md:text-xl font-bold font-serif leading-relaxed text-slate-100">
          «L’IA peut préparer un cours. Mais seul l’enseignant connaît vraiment sa classe.»
        </p>
        <p className="text-sm text-indigo-300 font-medium">
          «الذكاء الاصطناعي ينجم يقترحلك درس كامل في 3 ثواني... أما إنت وحدك تعرف تلامذتك وقسمك وإكراهات واقعك.»
        </p>
      </div>

      {/* Quick Reflective Choice */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
        <h3 className="font-bold text-slate-900 text-sm">
          تأمل شخصي: ما هو دورك الأساسي في ورشة اليوم؟
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {roles.map((r) => {
            const isSelected = selectedRole === r.id;
            return (
              <div
                key={r.id}
                onClick={() => setSelectedRole(r.id)}
                className={`p-4 rounded-xl border cursor-pointer transition-all ${
                  isSelected
                    ? 'bg-indigo-50/80 border-indigo-600 shadow-2xs'
                    : 'bg-slate-50 border-slate-200 hover:bg-slate-100/70'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-bold text-xs text-slate-900">{r.title}</span>
                  {isSelected && <CheckCircle2 className="w-4 h-4 text-indigo-600" />}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{r.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer to hands-on */}
      <div className="p-5 rounded-2xl bg-indigo-600 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
        <div>
          <span className="font-bold block text-sm mb-0.5 text-white">
            انتهت الاستراحة! حان وقت التطبيق الميداني الحقيقي (90% Pratique).
          </span>
          <span className="text-xs text-indigo-100">
            الآن كل أستاذ سيفتح ورقة العمل الخاصة بدرسه الحقيقي للأسبوع القادم.
          </span>
        </div>
        <button
          type="button"
          onClick={onComplete}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-indigo-900 hover:bg-indigo-50 text-xs font-bold transition-colors shadow-xs flex-shrink-0"
        >
          <span>الانتقال إلى ورقة العمل (Worksheet)</span>
          <ArrowLeft className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
