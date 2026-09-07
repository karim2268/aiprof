import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  FileEdit, 
  CheckCircle2, 
  Target, 
  Sliders, 
  ListChecks, 
  Plus, 
  Trash2, 
  AlertCircle,
  HelpCircle,
  Layers,
  Sparkles
} from 'lucide-react';
import { Session4ParticipantWorksheet, Session4VerificationRow } from '../../types';

interface StageS4ParticipantFicheProps {
  worksheet: Session4ParticipantWorksheet;
  onChangeWorksheet: (updated: Session4ParticipantWorksheet) => void;
  onPrev?: () => void;
  onComplete: () => void;
}

export const StageS4ParticipantFiche: React.FC<StageS4ParticipantFicheProps> = ({
  worksheet,
  onChangeWorksheet,
  onPrev,
  onComplete,
}) => {
  const [activeSection, setActiveSection] = useState<'objectifs' | 'contraintes' | 'types' | 'verification' | 'review'>('objectifs');

  const handleUpdate = <K extends keyof Session4ParticipantWorksheet>(key: K, value: Session4ParticipantWorksheet[K]) => {
    onChangeWorksheet({ ...worksheet, [key]: value });
  };

  const handleAddObjective = () => {
    handleUpdate('objectifs', [...worksheet.objectifs, 'هدف تعلمي إجرائي جديد']);
  };

  const handleRemoveObjective = (index: number) => {
    const updated = worksheet.objectifs.filter((_, i) => i !== index);
    handleUpdate('objectifs', updated);
  };

  const handleObjectiveChange = (index: number, text: string) => {
    const updated = [...worksheet.objectifs];
    updated[index] = text;
    handleUpdate('objectifs', updated);
  };

  const toggleType = (type: string) => {
    if (worksheet.typesChoisis.includes(type)) {
      handleUpdate('typesChoisis', worksheet.typesChoisis.filter((t) => t !== type));
    } else {
      handleUpdate('typesChoisis', [...worksheet.typesChoisis, type]);
    }
  };

  const handleAddVerificationRow = () => {
    const newRow: Session4VerificationRow = {
      id: `q-${Date.now()}`,
      numero: worksheet.verificationRows.length + 1,
      question: `سؤال جديد ${worksheet.verificationRows.length + 1}`,
      objectif: worksheet.objectifs[0] || 'الهدف الرئيسي',
      difficulte: 'Moyenne',
      tempsEstime: '10 دقائق',
      bareme: '4 نقاط',
      isAppropriate: true,
    };
    handleUpdate('verificationRows', [...worksheet.verificationRows, newRow]);
  };

  const handleRemoveVerificationRow = (id: string) => {
    handleUpdate('verificationRows', worksheet.verificationRows.filter((r) => r.id !== id));
  };

  const handleVerificationRowChange = (id: string, updates: Partial<Session4VerificationRow>) => {
    const updated = worksheet.verificationRows.map((r) => (r.id === id ? { ...r, ...updates } : r));
    handleUpdate('verificationRows', updated);
  };

  const availableTypes = [
    { id: 'QCM', label: 'أسئلة متعددة الاختيارات (QCM)', desc: 'للتحقق السريع من المفاهيم والمصطلحات' },
    { id: 'Vrai/Faux', label: 'صحيح / خطأ مع التعليل', desc: 'لكشف سوء الفهم والمفاهيم الخاطئة' },
    { id: 'Application', label: 'تمارين تطبيق مباشر', desc: 'لقياس الكفاءات الآلية القاعدية' },
    { id: 'Problème', label: 'مسألة مركبة / وضعية حياتية', desc: 'لحل وضعية متعددة الخطوات' },
    { id: 'Situation complexe', label: 'وضعية إدماجية دالة', desc: 'للتحليل والمقارنة والتقييم النقدي' },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-teal-950 via-slate-900 to-emerald-950 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/20 text-teal-200 border border-teal-400/30 text-xs font-semibold">
            <span>الحصة 4 • المرحلة 7 (01:10 → 01:25)</span>
            <span>•</span>
            <span>🧩 النشاط 1: بطاقة المشارك (Fiche Participant)</span>
          </div>

          <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
            بطاقة المشارك: <span className="text-teal-300">CRÉER MON ÉVALUATION</span>
          </h1>

          <p className="text-teal-100/90 text-base max-w-3xl leading-relaxed">
            الآن ينتقل كل أستاذ إلى التطبيق الفعلي على درسه ومادته: ملء محددات التقييم (الأهداف، القيود، نوع الأسئلة، وشبكة التحقق الذاتي) قبل الانتقال لصياغة الاختبار.
          </p>
        </div>
      </div>

      {/* Interactive Tabs */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="border-b border-slate-200 bg-slate-50 flex overflow-x-auto p-2 gap-1">
          <button
            onClick={() => setActiveSection('objectifs')}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs shrink-0 flex items-center gap-2 transition ${
              activeSection === 'objectifs'
                ? 'bg-teal-700 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-200/60'
            }`}
          >
            <Target className="w-4 h-4" />
            <span>① أهدافي (Mes Objectifs)</span>
          </button>

          <button
            onClick={() => setActiveSection('contraintes')}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs shrink-0 flex items-center gap-2 transition ${
              activeSection === 'contraintes'
                ? 'bg-teal-700 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-200/60'
            }`}
          >
            <Sliders className="w-4 h-4" />
            <span>② قيود الواقع (Mes Contraintes)</span>
          </button>

          <button
            onClick={() => setActiveSection('types')}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs shrink-0 flex items-center gap-2 transition ${
              activeSection === 'types'
                ? 'bg-teal-700 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-200/60'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>③ نوع التقييم (Types)</span>
          </button>

          <button
            onClick={() => setActiveSection('verification')}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs shrink-0 flex items-center gap-2 transition ${
              activeSection === 'verification'
                ? 'bg-teal-700 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-200/60'
            }`}
          >
            <ListChecks className="w-4 h-4" />
            <span>④ شبكة التحقق (Je Vérifie)</span>
          </button>

          <button
            onClick={() => setActiveSection('review')}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs shrink-0 flex items-center gap-2 transition ${
              activeSection === 'review'
                ? 'bg-teal-700 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-200/60'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>⑤ فحص AI (AI Review)</span>
          </button>
        </div>

        <div className="p-6">
          {/* SECTION 1: OBJECTIFS */}
          {activeSection === 'objectifs' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">المادة الدراسية</label>
                  <input
                    type="text"
                    value={worksheet.matiere}
                    onChange={(e) => handleUpdate('matiere', e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
                    placeholder="مثال: الرياضيات / الفرنسية / العلوم..."
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">المستوى الدراسي</label>
                  <input
                    type="text"
                    value={worksheet.niveau}
                    onChange={(e) => handleUpdate('niveau', e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
                    placeholder="مثال: السنة التاسعة أساسي / 3 ثانوي..."
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">المحور أو موضوع الدرس</label>
                  <input
                    type="text"
                    value={worksheet.theme}
                    onChange={(e) => handleUpdate('theme', e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
                    placeholder="مثال: النسب المئوية وتطبيقاتها الحياتية"
                  />
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <h3 className="font-bold text-slate-900 text-sm">ما الذي أريد قياسه بدقة؟ (الأهداف الإجرائية)</h3>
                    <p className="text-xs text-slate-500">صغ الأهداف في صيغة أفعال سلوكية قابلة للملاحظة والقياس</p>
                  </div>
                  <button
                    onClick={handleAddObjective}
                    className="inline-flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-lg bg-teal-50 text-teal-700 hover:bg-teal-100 border border-teal-200 transition"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>إضافة هدف</span>
                  </button>
                </div>

                <div className="space-y-2.5">
                  {worksheet.objectifs.map((obj, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center text-xs font-bold shrink-0">
                        {idx + 1}
                      </span>
                      <input
                        type="text"
                        value={obj}
                        onChange={(e) => handleObjectiveChange(idx, e.target.value)}
                        className="flex-1 px-3.5 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:ring-2 focus:ring-teal-500 outline-none"
                        placeholder="اكتب الهدف الإجرائي..."
                      />
                      {worksheet.objectifs.length > 1 && (
                        <button
                          onClick={() => handleRemoveObjective(idx)}
                          className="p-2 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 transition"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* SECTION 2: CONTRAINTES */}
          {activeSection === 'contraintes' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">مدة الاختبار (بالدقائق)</label>
                  <input
                    type="number"
                    value={worksheet.dureeMinutes}
                    onChange={(e) => handleUpdate('dureeMinutes', Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
                    placeholder="45"
                  />
                  <span className="text-[11px] text-slate-500">الزمن الواقعي للحصة</span>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">العدد الإجمالي للنقاط (Barème)</label>
                  <input
                    type="number"
                    value={worksheet.baremeTotal}
                    onChange={(e) => handleUpdate('baremeTotal', Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
                    placeholder="20"
                  />
                  <span className="text-[11px] text-slate-500">عادة 20 أو 10 نقاط</span>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">عدد تلاميذ القسم</label>
                  <input
                    type="text"
                    value={worksheet.nombreEleves}
                    onChange={(e) => handleUpdate('nombreEleves', e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
                    placeholder="30 تلميذاً"
                  />
                  <span className="text-[11px] text-slate-500">يؤثر في سرعة التصحيح</span>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">المستوى العام للقسم</label>
                  <select
                    value={worksheet.niveauGeneral}
                    onChange={(e) => handleUpdate('niveauGeneral', e.target.value as any)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-teal-500 outline-none bg-white"
                  >
                    <option value="Hétérogène">غير متجانس (متباين الصعوبات)</option>
                    <option value="Moyen">متوسط</option>
                    <option value="Faible">يحتاج دعماً مكثفاً</option>
                    <option value="Bon">جيد جداً ومتفوق</option>
                  </select>
                  <span className="text-[11px] text-slate-500">لتوجيه تدرج الصعوبة</span>
                </div>
              </div>

              <div className="space-y-1.5 pt-2">
                <label className="text-xs font-bold text-slate-700">الوسائل والأدوات المسموح بها في الاختبار</label>
                <input
                  type="text"
                  value={worksheet.materielAutorise}
                  onChange={(e) => handleUpdate('materielAutorise', e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
                  placeholder="مثال: آلة حاسبة علمية مسموحة، أدوات هندسية، مسوّدة..."
                />
              </div>
            </div>
          )}

          {/* SECTION 3: TYPES */}
          {activeSection === 'types' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="text-xs text-slate-600">
                اختر الأنماط التقييمية التي تريد دمجها في هذا الموضوع (يستحسن تنويع نمطين إلى ثلاثة):
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {availableTypes.map((item) => {
                  const isSelected = worksheet.typesChoisis.includes(item.id);
                  return (
                    <div
                      key={item.id}
                      onClick={() => toggleType(item.id)}
                      className={`p-4 rounded-xl border cursor-pointer transition flex items-start gap-3 ${
                        isSelected
                          ? 'bg-teal-50/80 border-teal-500 shadow-xs'
                          : 'bg-white hover:bg-slate-50 border-slate-200'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 ${
                        isSelected ? 'bg-teal-700 text-white' : 'border border-slate-300'
                      }`}>
                        {isSelected && <CheckCircle2 className="w-4 h-4" />}
                      </div>
                      <div className="space-y-0.5">
                        <div className="text-xs font-bold text-slate-900">{item.label}</div>
                        <div className="text-[11px] text-slate-500">{item.desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* SECTION 4: VERIFICATION */}
          {activeSection === 'verification' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <h3 className="font-bold text-slate-900 text-sm">شبكة الفحص والتحقق للأسئلة المقترحة</h3>
                  <p className="text-xs text-slate-500">تحقق من كل سؤال قبل اعتماده في الفرض النهائي</p>
                </div>
                <button
                  onClick={handleAddVerificationRow}
                  className="inline-flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-lg bg-teal-50 text-teal-700 hover:bg-teal-100 border border-teal-200 transition"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>إضافة سؤال للفحص</span>
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-right text-xs border border-slate-200 rounded-xl overflow-hidden">
                  <thead className="bg-slate-100/80 text-slate-700 font-bold border-b border-slate-200">
                    <tr>
                      <th className="p-3">السؤال / التمرين</th>
                      <th className="p-3">الهدف المرتبط</th>
                      <th className="p-3">درجة الصعوبة</th>
                      <th className="p-3">الزمن المقدر</th>
                      <th className="p-3">النقاط</th>
                      <th className="p-3 text-center">مناسب للقسم؟</th>
                      <th className="p-3 text-center">إجراء</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    {worksheet.verificationRows.map((row) => (
                      <tr key={row.id} className="hover:bg-slate-50/60 transition">
                        <td className="p-3 font-medium">
                          <input
                            type="text"
                            value={row.question}
                            onChange={(e) => handleVerificationRowChange(row.id, { question: e.target.value })}
                            className="w-full bg-transparent border-b border-dashed border-slate-300 focus:border-teal-500 outline-none py-1"
                          />
                        </td>
                        <td className="p-3">
                          <input
                            type="text"
                            value={row.objectif}
                            onChange={(e) => handleVerificationRowChange(row.id, { objectif: e.target.value })}
                            className="w-full bg-transparent border-b border-dashed border-slate-300 focus:border-teal-500 outline-none py-1"
                          />
                        </td>
                        <td className="p-3">
                          <select
                            value={row.difficulte}
                            onChange={(e) => handleVerificationRowChange(row.id, { difficulte: e.target.value as any })}
                            className="rounded border border-slate-200 p-1 bg-white"
                          >
                            <option value="Facile">سهل (قاعدي)</option>
                            <option value="Moyenne">متوسط</option>
                            <option value="Difficile">صعب (تحدٍ)</option>
                          </select>
                        </td>
                        <td className="p-3">
                          <input
                            type="text"
                            value={row.tempsEstime}
                            onChange={(e) => handleVerificationRowChange(row.id, { tempsEstime: e.target.value })}
                            className="w-20 rounded border border-slate-200 p-1"
                          />
                        </td>
                        <td className="p-3">
                          <input
                            type="text"
                            value={row.bareme}
                            onChange={(e) => handleVerificationRowChange(row.id, { bareme: e.target.value })}
                            className="w-16 rounded border border-slate-200 p-1"
                          />
                        </td>
                        <td className="p-3 text-center">
                          <input
                            type="checkbox"
                            checked={row.isAppropriate}
                            onChange={(e) => handleVerificationRowChange(row.id, { isAppropriate: e.target.checked })}
                            className="w-4 h-4 rounded text-teal-600 focus:ring-teal-500"
                          />
                        </td>
                        <td className="p-3 text-center">
                          <button
                            onClick={() => handleRemoveVerificationRow(row.id)}
                            className="text-slate-400 hover:text-rose-600 transition"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* SECTION 5: AI REVIEW */}
          {activeSection === 'review' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-800">1. هل الاختبار متوازن؟</span>
                    <input
                      type="checkbox"
                      checked={worksheet.aiReview.estEquilibre}
                      onChange={(e) =>
                        handleUpdate('aiReview', { ...worksheet.aiReview, estEquilibre: e.target.checked })
                      }
                      className="w-4 h-4 rounded text-teal-600"
                    />
                  </div>
                  <p className="text-[11px] text-slate-500">يشمل أسئلة سهلة للمتعثرين وأسئلة مركبة لفرز المتفوقين.</p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-800">2. هل الزمن واقعي تماماً؟</span>
                    <input
                      type="checkbox"
                      checked={worksheet.aiReview.tempsRealiste}
                      onChange={(e) =>
                        handleUpdate('aiReview', { ...worksheet.aiReview, tempsRealiste: e.target.checked })
                      }
                      className="w-4 h-4 rounded text-teal-600"
                    />
                  </div>
                  <p className="text-[11px] text-slate-500">يتيح 5 دقائق إضافية في النهاية للمراجعة والتثبت.</p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-800">3. مطابقة الأهداف بنسبة 100%</span>
                    <input
                      type="checkbox"
                      checked={worksheet.aiReview.alignementObjectifs}
                      onChange={(e) =>
                        handleUpdate('aiReview', { ...worksheet.aiReview, alignementObjectifs: e.target.checked })
                      }
                      className="w-4 h-4 rounded text-teal-600"
                    />
                  </div>
                  <p className="text-[11px] text-slate-500">كل سؤال يرتبط بهدف مدرج في المنهاج التونسي.</p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-2">
                  <span className="text-xs font-bold text-slate-800 block">4. ملاحظات الغموض والصياغة:</span>
                  <input
                    type="text"
                    value={worksheet.aiReview.questionsAmbigues}
                    onChange={(e) =>
                      handleUpdate('aiReview', { ...worksheet.aiReview, questionsAmbigues: e.target.value })
                    }
                    className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-300 bg-white"
                    placeholder="لا يوجد غموض بعد التعديل الأخير"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200">
        <button
          onClick={onPrev}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-700 font-medium text-sm hover:bg-slate-50 transition"
        >
          <ArrowRight className="w-4 h-4" />
          <span>المرحلة السابقة: الاستراحة</span>
        </button>

        <button
          onClick={onComplete}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition hover:translate-x-0.5"
        >
          <span>المرحلة التالية: النشاط 2 — إنشاء اختبار كامل مع التحليل الذاتي</span>
          <ArrowLeft className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
