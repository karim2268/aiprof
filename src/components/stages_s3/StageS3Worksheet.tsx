import React, { useState } from 'react';
import { Clock, FileText, CheckCircle2, ArrowLeft, RefreshCw, Sparkles, CheckSquare, Layers } from 'lucide-react';
import { Session3Worksheet } from '../../types';
import { DEFAULT_SESSION_3_WORKSHEET } from '../../data/workshopData';

interface StageS3WorksheetProps {
  worksheet: Session3Worksheet;
  onChangeWorksheet: (updated: Session3Worksheet) => void;
  onComplete: () => void;
}

const PRESET_TEMPLATES = [
  {
    name: 'العلوم الفيزيائية (3 ثانوي)',
    data: DEFAULT_SESSION_3_WORKSHEET,
  },
  {
    name: 'الرياضيات (1 ثانوي)',
    data: {
      matiere: 'الرياضيات',
      niveau: 'السنة الأولى ثانوي (جذع مشترك)',
      theme: 'الدوال التآلفية والتمثيل المبياني',
      duree: 'حصة واحدة (55 دقيقة)',
      niveauGeneral: 'Hétérogène' as const,
      nombreEleves: '34 تلميذاً',
      difficultesParticulieres: 'خلط بين معامل التوجيه والحد الثابت وصعوبة في الرسم الدقيق.',
      materielDisponible: ['Tableau', 'Documents imprimés'],
      demandeIA: {
        objectifs: 'قراءة معامل التوجيه من جدول قيم، وتمثيل دالة تآلفية في معلم متعامد ممنظم.',
        situationDepart: 'مقارنة تسعيرتين لسيارات الأجرة (تسعيرة قارة + كلفة الكيلومتر).',
        activite: 'استثمار جدول أسعار وتحويله إلى جدول قيم ثم تمثيل بياني في مجموعات ثنائية.',
        evaluation: 'تحديد معادلة مستقيم انطلاقاً من نقطتين مع معيار تصحيح ذاتي.',
      },
      verification: {
        objectifsPertinents: true,
        contenuCorrect: true,
        niveauAdapte: true,
        tempsRealiste: true,
        activiteRealisable: true,
        elevesActifs: true,
        evaluationCorrespond: true,
      },
    },
  },
  {
    name: 'اللغة العربية (4 ثانوي آداب)',
    data: {
      matiere: 'اللغة العربية',
      niveau: 'السنة الرابعة ثانوي (آداب)',
      theme: 'شعر الحماسة: الموازنة بين أبي تمام والمتنبي',
      duree: 'ساعتان (110 دقائق)',
      niveauGeneral: 'Moyen' as const,
      nombreEleves: '28 تلميذاً',
      difficultesParticulieres: 'صعوبة استخراج البعد الإيديولوجي وراء الصور البيانية المفرطة.',
      materielDisponible: ['Tableau', 'Documents imprimés'],
      demandeIA: {
        objectifs: 'تفكيك معجم الحماسة في بيتين شعريين، ورصد الفرق بين الاحتفال بالصنعة والبطولة الذاتية.',
        situationDepart: 'عرض بيتين متقابلين حول فتح عمورية دون ذكر الشاعر وسؤال القسم عن النبرة السائدة.',
        activite: 'جدول مقارنة أسلوبية في ورقة عمل مطبوعة يملأها التلاميذ في مجموعات رباعية.',
        evaluation: 'فقرة تأليفية قصيرة (8 أسطر) يكتبها كل تلميذ مبرزاً خصوصية كل شاعر.',
      },
      verification: {
        objectifsPertinents: true,
        contenuCorrect: true,
        niveauAdapte: true,
        tempsRealiste: true,
        activiteRealisable: true,
        elevesActifs: true,
        evaluationCorrespond: true,
      },
    },
  },
];

const AVAILABLE_MATERIALS = [
  'Tableau',
  'PC enseignant',
  'Vidéoprojecteur',
  'Smartphones autorisés',
  'Documents imprimés',
  'Connexion internet',
];

export const StageS3Worksheet: React.FC<StageS3WorksheetProps> = ({
  worksheet,
  onChangeWorksheet,
  onComplete,
}) => {
  const [activeSection, setActiveSection] = useState<'cours' | 'eleves' | 'demande' | 'checklist'>('cours');

  const handleTextChange = (field: keyof Session3Worksheet, val: any) => {
    onChangeWorksheet({
      ...worksheet,
      [field]: val,
    });
  };

  const handleDemandeChange = (key: keyof Session3Worksheet['demandeIA'], val: string) => {
    onChangeWorksheet({
      ...worksheet,
      demandeIA: {
        ...worksheet.demandeIA,
        [key]: val,
      },
    });
  };

  const handleMaterialToggle = (mat: string) => {
    const exists = worksheet.materielDisponible.includes(mat);
    const updated = exists
      ? worksheet.materielDisponible.filter((m) => m !== mat)
      : [...worksheet.materielDisponible, mat];
    handleTextChange('materielDisponible', updated);
  };

  const handleChecklistToggle = (key: keyof Session3Worksheet['verification']) => {
    onChangeWorksheet({
      ...worksheet,
      verification: {
        ...worksheet.verification,
        [key]: !worksheet.verification[key],
      },
    });
  };

  const completedChecksCount = Object.values(worksheet.verification).filter(Boolean).length;

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white font-mono font-bold flex items-center justify-center text-sm shadow-xs flex-shrink-0">
              01:05
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-800 border border-indigo-200 mb-1.5">
                <Clock className="w-3 h-3 text-indigo-600" />
                <span>الحصة 3 • 15 دقيقة (01:05 → 01:20) • ورقة عمل الأستاذ (Worksheet)</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                ورقة عمل التحضير الصفي: «Mon cours réel»
              </h2>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                كل أستاذ يملأ بيانات درسه الحقيقي وإكراهات قسمه قبل التوجه للذكاء الاصطناعي.
              </p>
            </div>
          </div>

          {/* Quick Presets */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs text-slate-500 font-medium">نماذج سريعة:</span>
            {PRESET_TEMPLATES.map((tpl, i) => (
              <button
                key={i}
                type="button"
                onClick={() => onChangeWorksheet(tpl.data)}
                className="px-2.5 py-1 rounded-lg text-2xs font-semibold bg-slate-100 hover:bg-indigo-50 hover:text-indigo-700 text-slate-700 transition-colors border border-slate-200"
              >
                {tpl.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        <button
          type="button"
          onClick={() => setActiveSection('cours')}
          className={`p-3 rounded-xl border text-right transition-all ${
            activeSection === 'cours'
              ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
              : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200'
          }`}
        >
          <div className="text-2xs font-bold opacity-80">القسم 1</div>
          <div className="text-xs font-bold">1. Mon cours (الدرس والزمن)</div>
        </button>

        <button
          type="button"
          onClick={() => setActiveSection('eleves')}
          className={`p-3 rounded-xl border text-right transition-all ${
            activeSection === 'eleves'
              ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
              : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200'
          }`}
        >
          <div className="text-2xs font-bold opacity-80">القسم 2 و 3</div>
          <div className="text-xs font-bold">2. Mes élèves & Contraintes</div>
        </button>

        <button
          type="button"
          onClick={() => setActiveSection('demande')}
          className={`p-3 rounded-xl border text-right transition-all ${
            activeSection === 'demande'
              ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
              : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200'
          }`}
        >
          <div className="text-2xs font-bold opacity-80">القسم 4</div>
          <div className="text-xs font-bold">3. Ce que je demande à l'IA</div>
        </button>

        <button
          type="button"
          onClick={() => setActiveSection('checklist')}
          className={`p-3 rounded-xl border text-right transition-all ${
            activeSection === 'checklist'
              ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
              : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200'
          }`}
        >
          <div className="text-2xs font-bold opacity-80">القسم 5 ({completedChecksCount}/7)</div>
          <div className="text-xs font-bold">4. Je vérifie (معايير الفحص)</div>
        </button>
      </div>

      {/* Form Content Cards */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-5">
        {/* Section 1: Mon Cours */}
        {activeSection === 'cours' && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <div className="border-b border-slate-100 pb-2">
              <h3 className="font-bold text-slate-900 text-base">1. Mon cours (تحديد هوية الحصة)</h3>
              <p className="text-xs text-slate-500">المادة والمستوى وموضوع الدرس والوعاء الزمني الرسمي.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Matière (المادة)</label>
                <input
                  type="text"
                  value={worksheet.matiere}
                  onChange={(e) => handleTextChange('matiere', e.target.value)}
                  className="w-full text-xs p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500"
                  placeholder="مثال: العلوم الفيزيائية، الرياضيات، التاريخ..."
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Niveau (المستوى الدراسي)</label>
                <input
                  type="text"
                  value={worksheet.niveau}
                  onChange={(e) => handleTextChange('niveau', e.target.value)}
                  className="w-full text-xs p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500"
                  placeholder="مثال: 3 ثانوي علوم تجريبية، 1 ثانوي جذع مشترك..."
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Thème du cours (موضوع الدرس)</label>
                <input
                  type="text"
                  value={worksheet.theme}
                  onChange={(e) => handleTextChange('theme', e.target.value)}
                  className="w-full text-xs p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500"
                  placeholder="مثال: العوامل الحركية، التناسبية، الحرب العالمية الأولى..."
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Durée de la séance (المدة الزمنية)</label>
                <input
                  type="text"
                  value={worksheet.duree}
                  onChange={(e) => handleTextChange('duree', e.target.value)}
                  className="w-full text-xs p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500"
                  placeholder="مثال: 55 دقيقة (حصة واحدة) أو 110 دقائق (حصة مضاعفة)"
                />
              </div>
            </div>
          </div>
        )}

        {/* Section 2: Mes élèves & Mes contraintes */}
        {activeSection === 'eleves' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div>
              <div className="border-b border-slate-100 pb-2 mb-4">
                <h3 className="font-bold text-slate-900 text-base">2. Mes élèves (واقع التلامذة)</h3>
                <p className="text-xs text-slate-500">حجم القسم، المستوى العام، والصعوبات الميدانية الصامتة.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Niveau général (المستوى العام)</label>
                  <select
                    value={worksheet.niveauGeneral}
                    onChange={(e) => handleTextChange('niveauGeneral', e.target.value)}
                    className="w-full text-xs p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500 bg-white"
                  >
                    <option value="Faible">ضعيف (Faible)</option>
                    <option value="Moyen">متوسط (Moyen)</option>
                    <option value="Hétérogène">متباين / غير متجانس (Hétérogène)</option>
                    <option value="Bon">جيد / متفوق (Bon)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Nombre d'élèves (عدد التلاميذ في القسم)</label>
                  <input
                    type="text"
                    value={worksheet.nombreEleves}
                    onChange={(e) => handleTextChange('nombreEleves', e.target.value)}
                    className="w-full text-xs p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500"
                    placeholder="مثال: 32 تلميذاً"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Difficultés particulières (صعوبات بيداغوجية خاصة)
                  </label>
                  <textarea
                    rows={2}
                    value={worksheet.difficultesParticulieres}
                    onChange={(e) => handleTextChange('difficultesParticulieres', e.target.value)}
                    className="w-full text-xs p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500"
                    placeholder="مثال: بطء في الحساب، ضعف في التعبير الكتابي، صعوبة في قراءة المنحنيات..."
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="border-b border-slate-100 pb-2 mb-3">
                <h3 className="font-bold text-slate-900 text-base">3. Mes contraintes de matériel (الوسائل المتوفرة فعلياً)</h3>
                <p className="text-xs text-slate-500">حدد فقط ما تملكه حقاً في القاعة حتى لا يقترح عليك الـ AI أشياء خيالية.</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {AVAILABLE_MATERIALS.map((mat) => {
                  const checked = worksheet.materielDisponible.includes(mat);
                  return (
                    <label
                      key={mat}
                      onClick={() => handleMaterialToggle(mat)}
                      className={`p-3 rounded-xl border flex items-center gap-2 cursor-pointer transition-all ${
                        checked
                          ? 'bg-indigo-50 border-indigo-300 text-indigo-900 font-bold'
                          : 'bg-slate-50 border-slate-200 text-slate-600'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => {}}
                        className="rounded text-indigo-600 focus:ring-indigo-500"
                      />
                      <span className="text-xs">{mat}</span>
                    </label>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Section 3: Ce que je demande à l'IA */}
        {activeSection === 'demande' && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <div className="border-b border-slate-100 pb-2">
              <h3 className="font-bold text-slate-900 text-base">4. Ce que je demande à l'IA (عناصر الطلب الأربعة)</h3>
              <p className="text-xs text-slate-500">
                ما الذي تريد من الذكاء الاصطناعي اقتراحه في كل محطة بيداغوجية.
              </p>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  1. الأهداف التعليمية (Objectifs d'apprentissage)
                </label>
                <textarea
                  rows={2}
                  value={worksheet.demandeIA.objectifs}
                  onChange={(e) => handleDemandeChange('objectifs', e.target.value)}
                  className="w-full text-xs p-2.5 rounded-xl border border-slate-300"
                  placeholder="مثال: 3 أهداف إجرائية مع الأفعال القابلة للقياس..."
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  2. الوضعية الانطلاقية (Situation de départ)
                </label>
                <textarea
                  rows={2}
                  value={worksheet.demandeIA.situationDepart}
                  onChange={(e) => handleDemandeChange('situationDepart', e.target.value)}
                  className="w-full text-xs p-2.5 rounded-xl border border-slate-300"
                  placeholder="مثال: وضعية مشكلة من الواقع المعيش تثير التساؤل..."
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  3. النشاط الاستكشافي (Activité d'apprentissage)
                </label>
                <textarea
                  rows={2}
                  value={worksheet.demandeIA.activite}
                  onChange={(e) => handleDemandeChange('activite', e.target.value)}
                  className="w-full text-xs p-2.5 rounded-xl border border-slate-300"
                  placeholder="مثال: نشاط عمل في ثنائيات مع سند وثائقي وأسئلة توجيهية..."
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  4. التقويم التكويني (Évaluation formative)
                </label>
                <textarea
                  rows={2}
                  value={worksheet.demandeIA.evaluation}
                  onChange={(e) => handleDemandeChange('evaluation', e.target.value)}
                  className="w-full text-xs p-2.5 rounded-xl border border-slate-300"
                  placeholder="مثال: تمرين سريع لنقل الأثر في 7 دقائق..."
                />
              </div>
            </div>
          </div>
        )}

        {/* Section 4: Je vérifie (Checklist) */}
        {activeSection === 'checklist' && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <div>
                <h3 className="font-bold text-slate-900 text-base">5. Je vérifie (شبكة الفحص البيداغوجي الصارم)</h3>
                <p className="text-xs text-slate-500">
                  تحقق من المعايير السبعة قبل مصادقة الحصة وإدراجها في الجذاذة النهائية.
                </p>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-100 text-indigo-800">
                {completedChecksCount} من 7 معتمدة
              </span>
            </div>

            <div className="space-y-2.5">
              {[
                {
                  key: 'objectifsPertinents' as const,
                  label: 'الأهداف واضحة ومحددة ومطابقة للمنهاج الرسمي',
                  desc: 'Objectifs clairs et pertinents',
                },
                {
                  key: 'contenuCorrect' as const,
                  label: 'المحتوى العلمي والبيداغوجي سليم وخالٍ من الهلوسة',
                  desc: 'Contenu scientifiquement / pédagogiquement correct',
                },
                {
                  key: 'niveauAdapte' as const,
                  label: 'المستوى مناسب للقدرات الحقيقية لتلاميذ هذا القسم',
                  desc: 'Niveau adapté aux élèves',
                },
                {
                  key: 'tempsRealiste' as const,
                  label: 'التوقيت المقترح واقعي وقابل للإنجاز دون تسرع أو هدر',
                  desc: 'Temps réaliste pour chaque phase',
                },
                {
                  key: 'activiteRealisable' as const,
                  label: 'النشاط قابل للتطبيق فعلاً بالوسائل المتوفرة في المعهد',
                  desc: 'Activité réalisable avec le matériel disponible',
                },
                {
                  key: 'elevesActifs' as const,
                  label: 'التلاميذ فاعلون ومشاركون (وليسوا مجرد متلقين سلبيين)',
                  desc: 'Élèves actifs (pas seulement passifs)',
                },
                {
                  key: 'evaluationCorrespond' as const,
                  label: 'التقويم يقيس مباشرة وبدقة تحقق الأهداف المسطرة',
                  desc: 'L’évaluation correspond bien aux objectifs',
                },
              ].map((item) => {
                const checked = worksheet.verification[item.key];
                return (
                  <div
                    key={item.key}
                    onClick={() => handleChecklistToggle(item.key)}
                    className={`p-3.5 rounded-xl border flex items-start gap-3 cursor-pointer transition-all ${
                      checked
                        ? 'bg-emerald-50/80 border-emerald-300 text-emerald-950'
                        : 'bg-slate-50 border-slate-200 text-slate-600'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => {}}
                      className="mt-0.5 rounded text-emerald-600 focus:ring-emerald-500"
                    />
                    <div>
                      <div className="text-xs font-bold">{item.label}</div>
                      <div className="text-2xs opacity-70 font-mono">{item.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Footer controls */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <div className="text-xs text-slate-500">
            {activeSection !== 'checklist' ? 'يمكنك التنقل بين الأقسام أعلاه لمراجعة البيانات.' : 'جميع البيانات جاهزة ومحفوظة.'}
          </div>

          <button
            type="button"
            onClick={onComplete}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-colors shadow-xs"
          >
            <span>مصادقة ورقة العمل ← تفعيل الحوار البيداغوجي المباشر</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
