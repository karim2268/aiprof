import React, { useState } from 'react';
import { Clock, MessageSquare, Copy, Check, Sparkles, ArrowLeft, RefreshCw, Send, CheckCircle2, ChevronDown, User, Bot } from 'lucide-react';
import { Session3Worksheet, Session3Fiche } from '../../types';

interface StageS3InteractiveBuilderProps {
  worksheet: Session3Worksheet;
  fiche: Session3Fiche;
  onChangeFiche: (updated: Session3Fiche) => void;
  onComplete: () => void;
}

export const StageS3InteractiveBuilder: React.FC<StageS3InteractiveBuilderProps> = ({
  worksheet,
  fiche,
  onChangeFiche,
  onComplete,
}) => {
  const [activeDialogueStep, setActiveDialogueStep] = useState(1);
  const [copiedPrompt, setCopiedPrompt] = useState(false);

  // Generate dynamic prompts based on teacher's current worksheet
  const promptStep1 = `المادة: ${worksheet.matiere}
المستوى: ${worksheet.niveau}
الموضوع: ${worksheet.theme}
المدة: ${worksheet.duree}

ساعدني في تحديد:
1. المكتسبات القبلية الضرورية التي يحتاجها التلميذ.
2. 3 أهداف تعليمية واضحة وقابلة للقياس (تستعمل أفعالاً إجرائية: يحدد، يقارن، يفسر، يستنتج).
3. التمثلات الخاطئة الشائعة لدى التلاميذ في هذا المفهوم.`;

  const promptStep2 = `انطلاقاً من الأهداف السابقة لدرس (${worksheet.theme}):
اقترح عليّ 3 وضعيات انطلاق مختلفة تثير فضول التلاميذ وتطرح مشكلة حقيقية من واقعهم المعيش.
لكل وضعية: اذكر السياق الواقعي، الإشكال المطروح، وسؤال الانطلاق للقسم.`;

  const promptStep3 = `اخترت الوضعية التي تناسب واقع القسم.
الآن اقترح نشاطاً استكشافياً مدته 20 دقيقة يجعل التلميذ فاعلاً ويكتشف المفهوم بنفسه.
القيود الصارمة:
- عدد التلاميذ: ${worksheet.nombreEleves}
- المستوى: ${worksheet.niveauGeneral}
- الوسائل المتاحة: ${worksheet.materielDisponible.join(' و ')}
أريد: سند العمل، تعليمة التلميذ، والأسئلة التوجيهية للأستاذ أثناء المرور بين المجموعات.`;

  const promptStep4 = `اقترح تقويماً تكوينياً سريعاً (7 إلى 10 دقائق) يمكن إنجازه في نهاية الحصة للتحقق من تحقق الأهداف الثلاثة.
أريد:
- سؤال تطبيق مباشر للتحقق من الفهم.
- وضعية قصيرة لنقل الأثر (Transfert).
- سلم تقييم ذاتي سريع (Checklist) للأستاذ.`;

  const promptsMap: Record<number, { title: string; prompt: string; simulatedAiReply: string }> = {
    1: {
      title: '1. توليد الأهداف والمكتسبات القبلية',
      prompt: promptStep1,
      simulatedAiReply: `المكتسبات القبلية:
1. المفهوم العام للتحول الكيميائي وجدول التقدم.
2. قراءة المنحنيات البيانية البسيطة (دالتي التركيز والزمن).

الأهداف التعليمية الإجرائية:
1. أن يعرّف التلميذ مفهوم العامل الحركي من خلال ملاحظة تجريبية.
2. أن يستنتج أثر رفع درجة الحرارة على تسريع التحول انطلاقاً من جدول أو منحنى بياني.
3. أن يفسر مجهرياً سبب زيادة السرعة بارتفاع وتيرة التصادمات الفعالة بين الجزيئات.

التمثلات الخاطئة الشائعة:
- اعتقاد بعض التلاميذ أن رفع درجة الحرارة يزيد من كمية النواتج النهائية، بينما هو يسرّع الوصول إليها فقط.`,
    },
    2: {
      title: '2. توليد 3 وضعيات انطلاق واختيار الأنسب',
      prompt: promptStep2,
      simulatedAiReply: `الوضعية 1 (الواقع المنزلي):
السياق: لماذا نحفظ الحليب والأطعمة سريعة التلف في الثلاجة صيفاً؟ وماذا يحدث لقطعة لحم تترك على طاولة المطبخ في شهر جويلية؟
المشكل: هل لدرجة حرارة الوسط دور في تحديد سرعة التفاعلات الكيميائية التي تؤدي إلى التلف؟
سؤال الانطلاق: ما هو العامل الفيزيائي المسؤول عن إبطاء هذا التحول الكيميائي؟

الوضعية 2 (الطبخ والصناعة):
السياق: استعمال طنجرة الضغط (Cocotte-minute) لطهي اللحم في نصف ساعة مقابل ساعتين في وعاء عادي مفتوح.

الوضعية 3 (المحيط والبيئة):
السياق: تآكل وصدأ هياكل السيارات في المناطق الساحلية الرطبة والحارة مقابل المناطق الجافة الباردة.`,
    },
    3: {
      title: '3. بناء النشاط الاستكشافي المكيّف مع قيود القسم',
      prompt: promptStep3,
      simulatedAiReply: `النشاط الاستكشافي (المدة: 20 دقيقة • عمل ثنائي • ورقة عمل مطبوعة):
السند: ورقة مطبوعة واحدة لكل تلميذين تتضمن منحنيين بيانيين لتفاعل تحلل الماء الأكسجيني عند درجتي حرارة T1=20°C وT2=50°C.
التعليمة (Consigne):
1. قارن بين مماس المنحنى عند اللحظة t=0 في الحالتين.
2. استخرج المدة الزمنية اللازمة لاستهلاك نصف المتفاعل في كل حالة.
3. استنتج أثر درجة الحرارة على سرعة التفاعل، وصيغ تعريفاً أولياً لـ "العامل الحركي".

دور الأستاذ أثناء النشاط:
- المرور بين الصفوف ومراقبة التلاميذ في استخراج الإحداثيات.
- تقديم بطاقة تلميح (Carte coup de pouce) للثنائيات التي تجد صعوبة في قراءة المماس.`,
    },
    4: {
      title: '4. تصميم التقويم التكويني الختامي',
      prompt: promptStep4,
      simulatedAiReply: `التقويم التكويني (المدة: 8 دقائق • إنجاز فردي):
السؤال 1 (تطبيق مباشر - 3 د):
نضع قرص فوار في كأس ماء مثلج (5°C) وفي كأس ماء دافئ (40°C). في أي الكأسين ينتهي الفوران أسرع؟ علل بناءً على مفهوم التصادمات الفعالة.

السؤال 2 (نقل الأثر - 4 د):
يقوم بعض الخبازين بوضع العجين في مكان دافئ لتسريع عملية التخمر. فسر الظاهرة كيميائياً بالاعتماد على ما تعلمته اليوم.

شبكة رصد سريعة للأستاذ (1 د):
[ ] التلميذ يربط مباشرة بين الحرارة ووتيرة التحول.
[ ] التلميذ يذكر مفهوم التصادمات الفعالة مجهرياً.
[ ] التلميذ ينجز التفسير دون خلط بين السرعة والكمية النهائية.`,
    },
  };

  const current = promptsMap[activeDialogueStep] || promptsMap[1];

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(current.prompt);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white font-mono font-bold flex items-center justify-center text-sm shadow-xs flex-shrink-0">
              01:20
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-800 border border-indigo-200 mb-1.5">
                <Clock className="w-3 h-3 text-indigo-600" />
                <span>الحصة 3 • 20 دقيقة (01:20 → 01:40) • بناء الحصة بالحوار</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                المسار التطبيقي: محاكاة الحوار البيداغوجي المباشر
              </h2>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                قوالب ذكية مشتقة تلقائياً من بيانات ورقة عملك ({worksheet.matiere} • {worksheet.niveau} • {worksheet.theme}).
              </p>
            </div>
          </div>

          <div className="px-3.5 py-2 rounded-xl bg-indigo-50 border border-indigo-200 text-xs font-bold text-indigo-900">
            الخطوة الحالية: {activeDialogueStep} من 4
          </div>
        </div>
      </div>

      {/* 4-Step Nav Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
        {[1, 2, 3, 4].map((stepNum) => {
          const isSelected = activeDialogueStep === stepNum;
          return (
            <button
              key={stepNum}
              type="button"
              onClick={() => setActiveDialogueStep(stepNum)}
              className={`p-3 rounded-xl border text-right transition-all ${
                isSelected
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                  : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200'
              }`}
            >
              <div className="text-2xs font-bold opacity-80">خطوة الحوار {stepNum}</div>
              <div className="text-xs font-bold line-clamp-1">
                {stepNum === 1 && 'الأهداف والتمثلات'}
                {stepNum === 2 && '3 وضعيات انطلاق'}
                {stepNum === 3 && 'النشاط الاستكشافي المكيّف'}
                {stepNum === 4 && 'التقويم التكويني'}
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Dialogue Console */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        {/* Step Header */}
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span className="font-bold text-slate-900 text-sm">{current.title}</span>
          </div>
          <span className="text-2xs font-medium text-slate-500">
            مشتق من مدخلات: {worksheet.matiere} • {worksheet.theme}
          </span>
        </div>

        <div className="p-6 space-y-6">
          {/* User Prompt (Teacher) */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-bold">
                  <User className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-bold text-slate-800">
                  رسالتك للذكاء الاصطناعي (Prompt مخصص لدرسك):
                </span>
              </div>
              <button
                type="button"
                onClick={handleCopyPrompt}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-800 bg-indigo-50 px-3 py-1.5 rounded-lg border border-indigo-100"
              >
                {copiedPrompt ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700">تم النسخ!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>نسخ هذا الـ Prompt</span>
                  </>
                )}
              </button>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 text-emerald-300 font-mono text-xs leading-relaxed whitespace-pre-line border border-slate-800 shadow-inner">
              {current.prompt}
            </div>
          </div>

          {/* AI Response Preview */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold">
                <Bot className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-bold text-slate-800">
                استجابة الـ AI المتوقعة (مخرجات بيداغوجية مهيكلة):
              </span>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 leading-relaxed whitespace-pre-line">
              {current.simulatedAiReply}
            </div>
          </div>
        </div>

        {/* Navigation Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <button
            type="button"
            disabled={activeDialogueStep === 1}
            onClick={() => setActiveDialogueStep((prev) => Math.max(1, prev - 1))}
            className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-200 disabled:opacity-30"
          >
            خطوة الحوار السابقة
          </button>

          {activeDialogueStep < 4 ? (
            <button
              type="button"
              onClick={() => setActiveDialogueStep((prev) => Math.min(4, prev + 1))}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold"
            >
              <span>متابعة الحوار ← الخطوة {activeDialogueStep + 1}</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={onComplete}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-xs"
            >
              <span>إنهاء الحوار ← وضع المفتش التربوي (AI Reviewer)</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
