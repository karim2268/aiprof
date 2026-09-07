import React, { useState } from 'react';
import { FileSpreadsheet, CheckCircle2, AlertCircle, ExternalLink, X, ShieldCheck } from 'lucide-react';
import { PedagogicalDeliverable, Session2ToolboxItem, Session3Fiche, Session4Deliverable } from '../types';
import {
  createWorkshopSpreadsheet,
  exportDeliverableToSheet,
  createSession2Spreadsheet,
  exportSession2ToolboxToSheet,
  createSession3Spreadsheet,
  exportSession3FicheToSheet,
  createSession4Spreadsheet,
  exportSession4DeliverableToSheet,
} from '../services/sheetsService';

interface GoogleSheetsModalProps {
  isOpen: boolean;
  onClose: () => void;
  sessionNumber?: number;
  deliverable?: PedagogicalDeliverable;
  session2Data?: {
    subject: string;
    gradeLevel: string;
    toolbox: Session2ToolboxItem[];
  };
  session3Data?: Session3Fiche;
  session4Data?: Session4Deliverable;
  accessToken: string | null;
  userEmail?: string;
  onExportSuccess: (sheetUrl: string) => void;
}

export const GoogleSheetsModal: React.FC<GoogleSheetsModalProps> = ({
  isOpen,
  onClose,
  sessionNumber = 1,
  deliverable,
  session2Data,
  session3Data,
  session4Data,
  accessToken,
  userEmail,
  onExportSuccess,
}) => {
  const [isExporting, setIsExporting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successUrl, setSuccessUrl] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleConfirmExport = async () => {
    if (!accessToken) {
      setError('يرجى تسجيل الدخول بحساب Google أولاً للمتابعة.');
      return;
    }

    setIsExporting(true);
    setError(null);

    try {
      if (sessionNumber === 4 && session4Data) {
        // Session 4 export
        const sheetInfo = await createSession4Spreadsheet(
          accessToken,
          `Évaluation & Exercices IA - الحصة 4 (${session4Data.matiere} - ${session4Data.niveau})`
        );
        const finalUrl = await exportSession4DeliverableToSheet(
          accessToken,
          sheetInfo.spreadsheetId,
          session4Data
        );
        setSuccessUrl(finalUrl);
        onExportSuccess(finalUrl);
      } else if (sessionNumber === 3 && session3Data) {
        // Session 3 export
        const sheetInfo = await createSession3Spreadsheet(
          accessToken,
          `Fiche de préparation - الحصة 3 (${session3Data.matiere} - ${session3Data.niveau})`
        );
        const finalUrl = await exportSession3FicheToSheet(
          accessToken,
          sheetInfo.spreadsheetId,
          session3Data
        );
        setSuccessUrl(finalUrl);
        onExportSuccess(finalUrl);
      } else if (sessionNumber === 2 && session2Data) {
        // Session 2 export
        const sheetInfo = await createSession2Spreadsheet(
          accessToken,
          `Mon AI Teacher Toolbox - الحصة 2 (${session2Data.subject} - ${session2Data.gradeLevel})`
        );
        const finalUrl = await exportSession2ToolboxToSheet(
          accessToken,
          sheetInfo.spreadsheetId,
          session2Data
        );
        setSuccessUrl(finalUrl);
        onExportSuccess(finalUrl);
      } else if (deliverable) {
        // Session 1 export
        const sheetInfo = await createWorkshopSpreadsheet(
          accessToken,
          `De la curiosité à la première expérience - الموارد البيداغوجية (${deliverable.subject})`
        );

        const finalUrl = await exportDeliverableToSheet(
          accessToken,
          sheetInfo.spreadsheetId,
          deliverable
        );

        setSuccessUrl(finalUrl);
        onExportSuccess(finalUrl);
      }
    } catch (err: any) {
      console.error('Google Sheets export failed:', err);
      setError(err?.message || 'حدث خطأ أثناء تصدير البيانات إلى Google Sheets');
    } finally {
      setIsExporting(false);
    }
  };

  const isSession4 = sessionNumber === 4;
  const isSession3 = sessionNumber === 3;
  const isSession2 = sessionNumber === 2;
  const fileName = isSession4
    ? `Évaluation & Exercices IA - الحصة 4 (${session4Data?.matiere || 'المادة'} - ${session4Data?.niveau || 'المستوى'})`
    : isSession3
    ? `Fiche de préparation - الحصة 3 (${session3Data?.matiere || 'المادة'} - ${session3Data?.niveau || 'المستوى'})`
    : isSession2
    ? `Mon AI Teacher Toolbox - الحصة 2 (${session2Data?.subject || 'المادة'})`
    : `De la curiosité à la première expérience - الموارد البيداغوجية (${deliverable?.subject || 'المادة'})`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
      <div className="bg-white rounded-2xl max-w-xl w-full p-6 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-100">
              <FileSpreadsheet className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-slate-900">
                {isSession4
                  ? 'تأكيد حفظ موضوع التقييم وبنك التمارين في Google Sheets'
                  : isSession3
                  ? 'تأكيد حفظ جذاذة الحصة البيداغوجية في Google Sheets'
                  : isSession2
                  ? 'تأكيد حفظ صندوق الأدوات (5 Prompts) في Google Sheets'
                  : 'تأكيد حفظ المورد في Google Sheets'}
              </h3>
              <p className="text-xs text-slate-500">
                إنشاء وتحديث جدول البيانات الشخصي عبر Google Drive & Sheets API
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {successUrl ? (
          <div className="py-6 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900">تم التصدير بنجاح!</h4>
              <p className="text-sm text-slate-600 mt-1">
                {isSession4
                  ? 'تم إنشاء جدول التقييم والتمارين (3 أوراق: الموضوع وسلم التنقيط، التمايز البيداغوجي، وتقرير AI Reviewer) في حسابك Google Drive.'
                  : isSession3
                  ? 'تم إنشاء جدول الجذاذة البيداغوجية (Fiche de préparation) مع جدول سير الحصة وملاحظات المفتش في حسابك Google Drive.'
                  : isSession2
                  ? 'تم إنشاء جدول حقيبة الأدوات وحفظ الـ 5 Prompts الشخصية في حسابك Google Drive.'
                  : 'تم إنشاء جدول الموارد البيداغوجية وإدراج بطاقتك بنجاح في حسابك Google Drive.'}
              </p>
            </div>
            <div className="pt-2">
              <a
                href={successUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition-colors shadow-xs"
              >
                <span>فتح ملف Google Sheets</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        ) : (
          <div className="py-4 space-y-4">
            <div className="bg-indigo-50/80 border border-indigo-200/80 rounded-xl p-3.5 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-indigo-700 flex-shrink-0 mt-0.5" />
              <div className="text-xs text-indigo-950 leading-relaxed">
                <strong>طلب إذن صريح:</strong> سيقوم التطبيق بإنشاء ملف Google Sheets جديد
                باسم <span className="font-mono font-bold">"{fileName}"</span> في
                حساب Google الخاص بك ({userEmail || 'حسابك المتصل'}) وإضافة السجلات المعتمدة.
              </div>
            </div>

            {/* Data summary preview */}
            <div className="border border-slate-200 rounded-xl p-3.5 bg-slate-50 text-xs space-y-2">
              <div className="font-bold text-slate-700">
                {isSession4
                  ? 'بيانات التقييم وبنك الأسئلة المزمع تصديرها:'
                  : isSession3
                  ? 'بيانات جذاذة الحصة المزمع تصديرها:'
                  : isSession2
                  ? 'بيانات صندوق الأدوات المزمع تصديرها:'
                  : 'بيانات المورد المزمع تصديرها:'}
              </div>
              {isSession4 && session4Data ? (
                <div className="space-y-1.5 text-slate-600">
                  <div className="grid grid-cols-2 gap-2">
                    <div><span className="text-slate-400">المادة:</span> {session4Data.matiere}</div>
                    <div><span className="text-slate-400">المستوى:</span> {session4Data.niveau}</div>
                    <div><span className="text-slate-400">الموضوع:</span> {session4Data.titreEvaluation}</div>
                    <div><span className="text-slate-400">المدة والعدد:</span> {session4Data.duree} ({session4Data.baremeTotal} نقطة)</div>
                  </div>
                  <div className="pt-1 text-emerald-700 font-semibold">
                    يتضمن {session4Data.exercices.length} تمارين متدرجة مع سلم التنقيط (Barème) وعناصر الإجابة + مسارات التمايز الثلاثية وتقرير AI Reviewer.
                  </div>
                </div>
              ) : isSession3 && session3Data ? (
                <div className="space-y-1.5 text-slate-600">
                  <div className="grid grid-cols-2 gap-2">
                    <div><span className="text-slate-400">المادة:</span> {session3Data.matiere}</div>
                    <div><span className="text-slate-400">المستوى:</span> {session3Data.niveau}</div>
                    <div><span className="text-slate-400">الموضوع:</span> {session3Data.theme}</div>
                    <div><span className="text-slate-400">المدة:</span> {session3Data.duree}</div>
                  </div>
                  <div className="pt-1 text-indigo-700 font-semibold">
                    يتضمن جدول سير الحصة ({session3Data.deroulement.length} مراحل مفصلة) + ورقة فحص وملاحظات المفتش التربوي.
                  </div>
                </div>
              ) : isSession2 && session2Data ? (
                <div className="space-y-1.5 text-slate-600">
                  <div className="flex gap-4">
                    <div><span className="text-slate-400">المادة:</span> {session2Data.subject}</div>
                    <div><span className="text-slate-400">المستوى:</span> {session2Data.gradeLevel}</div>
                  </div>
                  <div className="pt-1 text-indigo-700 font-semibold">
                    يتضمن 5 نماذج طلب مهيكلة: (تحضير درس، إنشاء تمارين، إعداد أسئلة، تبسيط، ومراجعة).
                  </div>
                </div>
              ) : deliverable ? (
                <div className="grid grid-cols-2 gap-2 text-slate-600">
                  <div><span className="text-slate-400">المادة:</span> {deliverable.subject}</div>
                  <div><span className="text-slate-400">المستوى:</span> {deliverable.gradeLevel}</div>
                  <div><span className="text-slate-400">موضوع الدرس:</span> {deliverable.topic}</div>
                  <div><span className="text-slate-400">نوع المورد:</span> {deliverable.resourceType}</div>
                </div>
              ) : null}
            </div>

            {error && (
              <div className="bg-rose-50 border border-rose-200 text-rose-800 p-3 rounded-xl text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0 text-rose-600" />
                <span>{error}</span>
              </div>
            )}

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
              <button
                type="button"
                onClick={onClose}
                disabled={isExporting}
                className="px-4 py-2 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-100 transition-colors"
              >
                إلغاء
              </button>
              <button
                type="button"
                onClick={handleConfirmExport}
                disabled={isExporting}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-medium text-sm hover:bg-emerald-700 transition-colors shadow-xs disabled:opacity-50"
              >
                {isExporting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    <span>جاري التصدير لـ Google Sheets...</span>
                  </>
                ) : (
                  <>
                    <FileSpreadsheet className="w-4 h-4" />
                    <span>تأكيد وإنشاء الملف في Google Drive</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

