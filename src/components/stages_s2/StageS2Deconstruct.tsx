import React from 'react';
import { Clock, FileText, ArrowLeft, ArrowRight, UserCheck, BookOpen, Target, Users, ShieldAlert, LayoutTemplate, RotateCcw } from 'lucide-react';
import { ParticipantFichePrompt } from '../../types';

interface StageS2DeconstructProps {
  fiche: ParticipantFichePrompt;
  onChangeFiche: (newFiche: ParticipantFichePrompt) => void;
  onComplete: () => void;
  onPrev: () => void;
}

export const StageS2Deconstruct: React.FC<StageS2DeconstructProps> = ({
  fiche,
  onChangeFiche,
  onComplete,
  onPrev,
}) => {
  const updateField = (field: keyof ParticipantFichePrompt, value: string) => {
    onChangeFiche({
      ...fiche,
      [field]: value,
    });
  };

  const presetExamples = [
    {
      title: 'أستاذ رياضيات (2 ثانوي - متتاليات)',
      apply: () => {
        onChangeFiche({
          role: 'أستاذ رياضيات في التعليم الثانوي التونسي',
          subject: 'الرياضيات',
          gradeLevel: 'السنة الثانية ثانوي (اقتصاد وتصرف)',
          topic: 'المتتاليات الحسابية',
          objective: 'اكتشاف مفهوم المتتالية وصياغة الحد العام عبر مسألة استكشافية واقعية',
          task: 'إعداد نشاط انطلاق استكشافي مشوق مدته 20 دقيقة وسلسلة تمارين متدرجة',
          publicDetails: 'تلاميذ شعبة اقتصاد وتصرف، بحاجة لربط المفهوم بالتطبيق المالي والادخار',
          duration: '55 دقيقة',
          classSize: '32 تلميذاً',
          language: 'العربية مع المصطلحات والرموز الرياضية الفرنسية المعتمدة',
          availableTools: 'السبورة + مطبوعة ورقية + آلة حاسبة',
          studentLevel: 'متوسط ومتفاوت',
          format: 'جدول يوضح مراحل النشاط، يليه نص المسألة، ثم سلم التنقيط',
        });
      },
    },
    {
      title: 'أستاذ علوم طبيعية (1 ثانوي - خلية وطاقة)',
      apply: () => {
        onChangeFiche({
          role: 'أستاذ علوم الحياة والأرض في المعاهد التونسية',
          subject: 'علوم الحياة والأرض (SVT)',
          gradeLevel: 'السنة الأولى ثانوي',
          topic: 'تحويل الطاقة والخلية الشمسية',
          objective: 'تفسير كيفية تحويل الطاقة الضوئية إلى طاقة كهربائية وربطها بالتمثيل الضوئي',
          task: 'تصميم جذاذة حصة استقصائية متكاملة تبدأ بوضعية مشكلة من البيئة التونسية',
          publicDetails: 'تلامذة في سن 15 عاماً، يفضلون العمل بالأفواج والرسوم التوضيحية',
          duration: '50 دقيقة',
          classSize: '28 تلميذاً',
          language: 'العربية العلمية',
          availableTools: 'مسلاط عاكس + بطاقات مهام للأفواج',
          studentLevel: 'متوسط',
          format: 'جدول زمني يوزع أدوار الأستاذ والتلميذ والمؤشرات التقييمية',
        });
      },
    },
    {
      title: 'أستاذ عربية / لغات (3 ثانوي - نقد وحجاج)',
      apply: () => {
        onChangeFiche({
          role: 'أستاذ لغة وآداب عربية بالمرحلة التأهيلية',
          subject: 'العربية',
          gradeLevel: 'السنة الثالثة ثانوي (شعبة الآداب)',
          topic: 'بنية الحجاج وأساليب الإقناع في المقال الفكري',
          objective: 'تفكيك بنية الحجة وتحديد المؤشرات اللغوية للإقناع والدحض',
          task: 'اختيار سند نثري حجاجي معاصر وتصميم شبكة أسئلة استكشافية وتحليلية',
          publicDetails: 'تلاميذ مقبلون على الباكالوريا يحتاجون إلى أدوات التفكيك المنهجي',
          duration: 'ساعة كاملة (60 دقيقة)',
          classSize: '25 تلميذاً',
          language: 'العربية الفصيحة الدقيقة',
          availableTools: 'نص مطبوع موزع على التلاميذ',
          studentLevel: 'فوق المتوسط',
          format: 'نص السند + شبكة أسئلة تفكيكية + شبكة معايير التقييم',
        });
      },
    },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white font-mono font-bold flex items-center justify-center text-sm shadow-xs flex-shrink-0">
              01:00
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-800 border border-indigo-200 mb-1.5">
                <Clock className="w-3 h-3 text-indigo-600" />
                <span>الحصة 2 • 15 دقيقة (01:00 → 01:15) • الكفاءة C3: تفكيك المهمة البيداغوجية</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                النشاط 1: فكك المهمة (Fiche participant تفاعلية)
              </h2>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                قبل كتابة أي كلمة في ChatGPT، نحدد بدقة المكونات الستة للـPrompt الناجح: الدور، السياق، المهمة، الجمهور، القيود، وشكل المخرج.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 font-medium">نماذج جاهزة:</span>
            {presetExamples.map((preset, idx) => (
              <button
                key={idx}
                type="button"
                onClick={preset.apply}
                className="px-2.5 py-1.5 rounded-xl bg-slate-100 hover:bg-indigo-50 hover:text-indigo-700 text-slate-700 font-bold text-2xs border border-slate-200 transition-colors"
                title="تطبيق هذا النموذج"
              >
                {preset.title.split(' ')[1]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Model Reminder Pill */}
      <div className="p-3.5 rounded-2xl bg-indigo-900 text-white shadow-xs flex flex-wrap items-center justify-center gap-2 text-xs font-mono font-bold">
        <span className="px-2 py-1 bg-white/10 rounded-lg">1. RÔLE (الدور)</span>
        <span>+</span>
        <span className="px-2 py-1 bg-white/10 rounded-lg">2. CONTEXTE (السياق)</span>
        <span>+</span>
        <span className="px-2 py-1 bg-white/10 rounded-lg">3. TÂCHE (المهمة)</span>
        <span>+</span>
        <span className="px-2 py-1 bg-white/10 rounded-lg">4. PUBLIC (الجمهور)</span>
        <span>+</span>
        <span className="px-2 py-1 bg-white/10 rounded-lg">5. CONTRAINTES (القيود)</span>
        <span>+</span>
        <span className="px-2 py-1 bg-white/10 rounded-lg">6. FORMAT (المخرج)</span>
      </div>

      {/* Interactive Form */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 1. RÔLE */}
          <div className="space-y-2 p-4 rounded-xl bg-slate-50 border border-slate-200">
            <label className="text-xs font-bold text-slate-900 flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-indigo-600" />
              <span>① الدور (RÔLE) — بصفتك من سيتصرف الذكاء الاصطناعي؟</span>
            </label>
            <input
              type="text"
              value={fiche.role}
              onChange={(e) => updateField('role', e.target.value)}
              placeholder="مثال: أنت أستاذ فيزياء في المعاهد التونسية / مصمم بيداغوجي / خبير في التقييم التكويني..."
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
            <p className="text-2xs text-slate-500">
              يضبط النبرة، والمستوى الأكاديمي، والمراجع المنهجية التي سيعتمدها.
            </p>
          </div>

          {/* 2. TÂCHE */}
          <div className="space-y-2 p-4 rounded-xl bg-slate-50 border border-slate-200">
            <label className="text-xs font-bold text-slate-900 flex items-center gap-2">
              <Target className="w-4 h-4 text-indigo-600" />
              <span>② المهمة المطلوبة (TÂCHE) — شنوة تحب AI يعملك بالضبط؟</span>
            </label>
            <input
              type="text"
              value={fiche.task}
              onChange={(e) => updateField('task', e.target.value)}
              placeholder="مثال: تصميم جذاذة حصة كاملة / صياغة 3 تمارين متدرجة / إعداد وضعية مشكلة انطلاق..."
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
            <p className="text-2xs text-slate-500">
              استعمل أفعالاً إجرائية محددة وتجنب الكلمات الفضفاضة.
            </p>
          </div>

          {/* 3. CONTEXTE */}
          <div className="space-y-3 p-4 rounded-xl bg-slate-50 border border-slate-200 md:col-span-2">
            <label className="text-xs font-bold text-slate-900 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-indigo-600" />
              <span>③ السياق البيداغوجي (CONTEXTE) — تفاصيل الدرس والمادة</span>
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div>
                <span className="text-2xs font-semibold text-slate-600 block mb-1">المادة:</span>
                <input
                  type="text"
                  value={fiche.subject}
                  onChange={(e) => updateField('subject', e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>

              <div>
                <span className="text-2xs font-semibold text-slate-600 block mb-1">المستوى الدراسي:</span>
                <input
                  type="text"
                  value={fiche.gradeLevel}
                  onChange={(e) => updateField('gradeLevel', e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>

              <div>
                <span className="text-2xs font-semibold text-slate-600 block mb-1">موضوع الدرس أو الوحدة:</span>
                <input
                  type="text"
                  value={fiche.topic}
                  onChange={(e) => updateField('topic', e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>

              <div>
                <span className="text-2xs font-semibold text-slate-600 block mb-1">الهدف البيداغوجي التعلمي:</span>
                <input
                  type="text"
                  value={fiche.objective}
                  onChange={(e) => updateField('objective', e.target.value)}
                  placeholder="أن يكون التلميذ قادراً على..."
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* 4. PUBLIC */}
          <div className="space-y-2 p-4 rounded-xl bg-slate-50 border border-slate-200">
            <label className="text-xs font-bold text-slate-900 flex items-center gap-2">
              <Users className="w-4 h-4 text-indigo-600" />
              <span>④ الجمهور والتلاميذ (PUBLIC) — شنوة نعرف على تلامذتي؟</span>
            </label>
            <input
              type="text"
              value={fiche.publicDetails}
              onChange={(e) => updateField('publicDetails', e.target.value)}
              placeholder="مثال: تلامذة سنة أولى ثانوي، مستوى متوسط، يحبون الأمثلة الواقعية والعمل بالأفواج..."
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
            <div className="flex gap-2 pt-1">
              <span className="text-2xs text-slate-500">مستوى القسم:</span>
              <input
                type="text"
                value={fiche.studentLevel}
                onChange={(e) => updateField('studentLevel', e.target.value)}
                placeholder="متوسط / متباين / متفوق"
                className="flex-1 px-2.5 py-1 rounded-lg border border-slate-300 text-2xs bg-white"
              />
            </div>
          </div>

          {/* 5. CONTRAINTES */}
          <div className="space-y-2 p-4 rounded-xl bg-slate-50 border border-slate-200">
            <label className="text-xs font-bold text-slate-900 flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-indigo-600" />
              <span>⑤ القيود والشروط الواقعية (CONTRAINTES) — شنوة حدودك في القسم؟</span>
            </label>
            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                value={fiche.duration}
                onChange={(e) => updateField('duration', e.target.value)}
                placeholder="المدة: 50 أو 55 دقيقة"
                className="px-3 py-2 rounded-xl border border-slate-300 text-xs bg-white"
              />
              <input
                type="text"
                value={fiche.classSize}
                onChange={(e) => updateField('classSize', e.target.value)}
                placeholder="عدد التلاميذ: 30 تلميذاً"
                className="px-3 py-2 rounded-xl border border-slate-300 text-xs bg-white"
              />
            </div>
            <div className="grid grid-cols-2 gap-2 pt-1">
              <input
                type="text"
                value={fiche.language}
                onChange={(e) => updateField('language', e.target.value)}
                placeholder="اللغة: العربية / الفرنسية"
                className="px-3 py-2 rounded-xl border border-slate-300 text-xs bg-white"
              />
              <input
                type="text"
                value={fiche.availableTools}
                onChange={(e) => updateField('availableTools', e.target.value)}
                placeholder="الوسائل: سبورة / دون إنترنت"
                className="px-3 py-2 rounded-xl border border-slate-300 text-xs bg-white"
              />
            </div>
          </div>

          {/* 6. FORMAT */}
          <div className="space-y-2 p-4 rounded-xl bg-slate-50 border border-slate-200 md:col-span-2">
            <label className="text-xs font-bold text-slate-900 flex items-center gap-2">
              <LayoutTemplate className="w-4 h-4 text-indigo-600" />
              <span>⑥ شكل الإخراج المطلوب (FORMAT) — كيفاش تحب تشوف النتيجة؟</span>
            </label>
            <input
              type="text"
              value={fiche.format}
              onChange={(e) => updateField('format', e.target.value)}
              placeholder="مثال: جدول مهيكل يوضح (التوقيت، دور الأستاذ، دور التلميذ، والوسائل) / بطاقة بيداغوجية في صفحة واحدة / QCM مع شبكة تفسيرية..."
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
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
          <span>السابق: استراحة وتحدي التفكير</span>
        </button>

        <button
          type="button"
          onClick={onComplete}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-sm transition-all"
        >
          <span>التالي: النشاط 2 (اكتب الـPrompt وجربه في الأداة)</span>
          <ArrowLeft className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
