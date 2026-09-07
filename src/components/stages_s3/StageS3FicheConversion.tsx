import React, { useState } from 'react';
import { Clock, Table, Plus, Trash2, Edit3, ArrowLeft, CheckCircle2, Download, Printer, Eye } from 'lucide-react';
import { Session3Fiche, Session3LessonRow } from '../../types';

interface StageS3FicheConversionProps {
  fiche: Session3Fiche;
  onChangeFiche: (updated: Session3Fiche) => void;
  onComplete: () => void;
}

export const StageS3FicheConversion: React.FC<StageS3FicheConversionProps> = ({
  fiche,
  onChangeFiche,
  onComplete,
}) => {
  const [editingRowId, setEditingRowId] = useState<string | null>(null);

  const handleRowChange = (id: string, field: keyof Session3LessonRow, val: string) => {
    const updated = fiche.deroulement.map((row) => {
      if (row.id === id) {
        return { ...row, [field]: val };
      }
      return row;
    });
    onChangeFiche({ ...fiche, deroulement: updated });
  };

  const handleAddRow = () => {
    const newRow: Session3LessonRow = {
      id: `row_${Date.now()}`,
      time: '00 → 10 د (10 د)',
      phase: 'مرحلة جديدة',
      teacherRole: 'توجيه ومرافقة',
      studentRole: 'إنجاز فردي أو جماعي',
      activity: 'نشاط تطبيقي داعم',
      materials: 'السبورة + الأوراق',
      evaluation: 'ملاحظة مباشرة',
    };
    onChangeFiche({ ...fiche, deroulement: [...fiche.deroulement, newRow] });
    setEditingRowId(newRow.id);
  };

  const handleDeleteRow = (id: string) => {
    if (fiche.deroulement.length <= 1) return;
    onChangeFiche({
      ...fiche,
      deroulement: fiche.deroulement.filter((r) => r.id !== id),
    });
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white font-mono font-bold flex items-center justify-center text-sm shadow-xs flex-shrink-0">
              01:50
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-800 border border-indigo-200 mb-1.5">
                <Clock className="w-3 h-3 text-indigo-600" />
                <span>الحصة 3 • 7 دقائق (01:50 → 01:57) • جذاذة الحصة المنظمة</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                الجذاذة البيداغوجية الكاملة (Fiche de préparation)
              </h2>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                تحويل الحوار والأفكار إلى جذاذة صفية جاهزة للطباعة أو التصدير أو التنفيذ المباشر في قاعة الدرس.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleAddRow}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-indigo-50 text-indigo-700 hover:bg-indigo-100 text-xs font-bold border border-indigo-200 transition-colors shadow-2xs self-start md:self-auto"
          >
            <Plus className="w-4 h-4" />
            <span>إضافة مرحلة للجدول</span>
          </button>
        </div>
      </div>

      {/* Main Fiche Document Preview */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-6">
        {/* Document Header Table */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
          <div>
            <span className="text-slate-400 block text-2xs font-bold">المادة</span>
            <span className="font-bold text-slate-800">{fiche.matiere}</span>
          </div>
          <div>
            <span className="text-slate-400 block text-2xs font-bold">المستوى الدراسي</span>
            <span className="font-bold text-slate-800">{fiche.niveau}</span>
          </div>
          <div>
            <span className="text-slate-400 block text-2xs font-bold">موضوع الحصة</span>
            <span className="font-bold text-slate-800">{fiche.theme}</span>
          </div>
          <div>
            <span className="text-slate-400 block text-2xs font-bold">المدة الزمنية</span>
            <span className="font-bold text-slate-800">{fiche.duree}</span>
          </div>
        </div>

        {/* Objectives & Prerequisites */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-indigo-50/50 border border-indigo-100 space-y-2">
            <h4 className="font-bold text-indigo-950 flex items-center gap-1.5">
              <span>🎯 الأهداف التعليمية الإجرائية (Objectifs):</span>
            </h4>
            <ul className="space-y-1 text-slate-700">
              {fiche.objectifs.map((obj, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="text-indigo-600 font-bold">•</span>
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <h4 className="font-bold text-slate-900 flex items-center gap-1.5">
              <span>📚 المكتسبات القبلية الضرورية (Prérequis):</span>
            </h4>
            <ul className="space-y-1 text-slate-700">
              {fiche.prerequis.map((pre, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="text-slate-400 font-bold">•</span>
                  <span>{pre}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Situation de départ */}
        <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200 text-xs space-y-1.5">
          <h4 className="font-bold text-amber-950">💡 وضعية الانطلاق وسؤال الإشكال:</h4>
          <p className="text-slate-700 leading-relaxed font-sans">{fiche.situationDepart}</p>
        </div>

        {/* Progression Table (Tableau de déroulement) */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Table className="w-4 h-4 text-indigo-600" />
              <span>جدول سير الحصة البيداغوجية (Déroulement temporel)</span>
            </h4>
            <span className="text-2xs text-slate-400">انقر على أي خلية للتعديل المباشر</span>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-right text-xs border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200 text-2xs">
                  <th className="p-2.5 w-24">الزمن</th>
                  <th className="p-2.5 w-28">الطور</th>
                  <th className="p-2.5">دور الأستاذ</th>
                  <th className="p-2.5">دور التلميذ</th>
                  <th className="p-2.5">النشاط والسند</th>
                  <th className="p-2.5 w-24">الوسائل</th>
                  <th className="p-2.5 w-28">التقويم</th>
                  <th className="p-2.5 w-10 text-center">إجراء</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {fiche.deroulement.map((row) => (
                  <tr key={row.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-2">
                      <input
                        type="text"
                        value={row.time}
                        onChange={(e) => handleRowChange(row.id, 'time', e.target.value)}
                        className="w-full bg-transparent border-0 focus:ring-1 focus:ring-indigo-500 rounded p-1 font-mono text-2xs text-indigo-900 font-bold"
                      />
                    </td>
                    <td className="p-2 font-bold text-slate-800">
                      <input
                        type="text"
                        value={row.phase}
                        onChange={(e) => handleRowChange(row.id, 'phase', e.target.value)}
                        className="w-full bg-transparent border-0 focus:ring-1 focus:ring-indigo-500 rounded p-1 text-xs font-bold"
                      />
                    </td>
                    <td className="p-2">
                      <textarea
                        rows={2}
                        value={row.teacherRole}
                        onChange={(e) => handleRowChange(row.id, 'teacherRole', e.target.value)}
                        className="w-full bg-transparent border-0 focus:ring-1 focus:ring-indigo-500 rounded p-1 text-xs text-slate-700"
                      />
                    </td>
                    <td className="p-2">
                      <textarea
                        rows={2}
                        value={row.studentRole}
                        onChange={(e) => handleRowChange(row.id, 'studentRole', e.target.value)}
                        className="w-full bg-transparent border-0 focus:ring-1 focus:ring-indigo-500 rounded p-1 text-xs text-slate-700"
                      />
                    </td>
                    <td className="p-2">
                      <textarea
                        rows={2}
                        value={row.activity}
                        onChange={(e) => handleRowChange(row.id, 'activity', e.target.value)}
                        className="w-full bg-transparent border-0 focus:ring-1 focus:ring-indigo-500 rounded p-1 text-xs text-slate-700"
                      />
                    </td>
                    <td className="p-2">
                      <input
                        type="text"
                        value={row.materials}
                        onChange={(e) => handleRowChange(row.id, 'materials', e.target.value)}
                        className="w-full bg-transparent border-0 focus:ring-1 focus:ring-indigo-500 rounded p-1 text-2xs text-slate-600"
                      />
                    </td>
                    <td className="p-2">
                      <input
                        type="text"
                        value={row.evaluation}
                        onChange={(e) => handleRowChange(row.id, 'evaluation', e.target.value)}
                        className="w-full bg-transparent border-0 focus:ring-1 focus:ring-indigo-500 rounded p-1 text-2xs text-slate-600"
                      />
                    </td>
                    <td className="p-2 text-center">
                      <button
                        type="button"
                        onClick={() => handleDeleteRow(row.id)}
                        className="text-slate-300 hover:text-rose-600 p-1 rounded"
                        title="حذف هذا السطر"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Synthesis & Final Evaluation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
            <h4 className="font-bold text-slate-900">📝 الخلاصة والتركيب النهائي:</h4>
            <p className="text-slate-700 leading-relaxed">{fiche.synthese}</p>
          </div>
          <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-100 space-y-1.5">
            <h4 className="font-bold text-emerald-950">🎯 أسلوب التقويم التكويني الختامي:</h4>
            <p className="text-emerald-900 leading-relaxed">{fiche.evaluationFinale}</p>
          </div>
        </div>
      </div>

      {/* Footer to Step 10 Deliverable */}
      <div className="p-5 rounded-2xl bg-indigo-50 border border-indigo-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="text-xs text-indigo-950 leading-relaxed">
          <span className="font-bold block text-sm mb-0.5 text-indigo-900">
            الجذاذة جاهزة ومعتمدة!
          </span>
          المحطة الأخيرة: تصدير الجذاذة إلى Google Sheets، وتحديد مهمة التطبيق الميداني ما بين الحصتين.
        </div>
        <button
          type="button"
          onClick={onComplete}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors shadow-xs flex-shrink-0"
        >
          <span>المحطة الأخيرة: المنتوج الإجباري ومهمة الأسبوع</span>
          <ArrowLeft className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
