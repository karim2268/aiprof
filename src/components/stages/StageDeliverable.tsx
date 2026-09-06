import React, { useState } from 'react';
import { PedagogicalDeliverable } from '../../types';
import {
  Award,
  FileSpreadsheet,
  Printer,
  Copy,
  Check,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';
import { User } from 'firebase/auth';

interface StageDeliverableProps {
  deliverable: PedagogicalDeliverable;
  onUpdateDeliverable: (updates: Partial<PedagogicalDeliverable>) => void;
  user: User | null;
  onTriggerSheetsExport: () => void;
  sheetUrl?: string;
  onBack: () => void;
}

export const StageDeliverable: React.FC<StageDeliverableProps> = ({
  deliverable,
  onUpdateDeliverable,
  user,
  onTriggerSheetsExport,
  sheetUrl,
  onBack,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyFullCard = () => {
    const text = `بطاقة مورد بيداغوجي معتمد
ورشة: De la curiosité à la première expérience
الأستاذ: ${deliverable.teacherName || user?.displayName || 'أستاذ مشارك'}
المادة: ${deliverable.subject} | المستوى: ${deliverable.gradeLevel}
الموضوع: ${deliverable.topic}
نوع المورد: ${deliverable.resourceType}

--- نص المورد البيداغوجي المراجع ---
${deliverable.finalContent}

--- مراجعة الأستاذ وملاحظات التحقق ---
${deliverable.verificationNotes || 'تمت مراجعة المحتوى والتحقق من سلامته ومطابقته للبرنامج الرسمي.'}
تاريخ الإنجاز: ${new Date(deliverable.createdAt).toLocaleDateString('ar-TN')}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white font-mono font-bold flex items-center justify-center text-sm shadow-xs flex-shrink-0">
              01:55
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-800 border border-indigo-200 mb-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" />
                <span>الخروج بمنتوج • 5 دقائق (01:55 → 02:00) • إنجاز الورشة</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                الخروج بمنتوج بيداغوجي معتمد ✅
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                كل أستاذ يغادر الورشة وبيده مورد بيداغوجي حقيقي تم إنشاؤه وتطويره بالحوار ومراجعته بدقة، ومحفوظ في Google Sheets.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 text-xs font-medium transition-colors"
            >
              <Printer className="w-4 h-4" />
              <span>طباعة / PDF</span>
            </button>

            <button
              type="button"
              onClick={handleCopyFullCard}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 text-xs font-medium transition-colors"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'تم نسخ البطاقة' : 'نسخ البطاقة'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Deliverable Resource Printable Card */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm relative overflow-hidden">
        {/* Certificate Seal Stamp */}
        <div className="absolute top-6 left-6 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold text-xs">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>مورد مراجع ومصادق عليه من الأستاذ</span>
        </div>

        <div className="border-b border-slate-200 pb-5 mb-6">
          <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500 font-bold block mb-1">
            Fiche Ressource Pédagogique • بطاقة مورد بيداغوجي
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-sans">
            {deliverable.topic || 'مورد بيداغوجي تطبيقي'}
          </h3>
          <div className="flex items-center gap-3 mt-2 text-xs text-slate-600 font-medium flex-wrap">
            <span className="bg-slate-100 px-2 py-0.5 rounded text-slate-800 font-bold">
              المادة: {deliverable.subject}
            </span>
            <span className="bg-slate-100 px-2 py-0.5 rounded text-slate-800">
              المستوى: {deliverable.gradeLevel}
            </span>
            <span className="bg-indigo-50 text-indigo-900 border border-indigo-100 px-2 py-0.5 rounded font-bold">
              النوع: {deliverable.resourceType}
            </span>
          </div>
        </div>

        {/* Teacher details & Verification input */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
          <div>
            <label className="block font-bold text-slate-700 mb-1">اسم الأستاذ المسؤول:</label>
            <input
              type="text"
              value={deliverable.teacherName || user?.displayName || ''}
              onChange={(e) => onUpdateDeliverable({ teacherName: e.target.value })}
              placeholder="اكتب اسمك الكامل هنا..."
              className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">
              ملاحظة التدقيق والمطابقة البيداغوجية:
            </label>
            <input
              type="text"
              value={deliverable.verificationNotes}
              onChange={(e) => onUpdateDeliverable({ verificationNotes: e.target.value })}
              placeholder="مثال: تمت المراجعة والتحقق من التوقيت والمفاهيم العلمية..."
              className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Final Resource Content */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              نص المورد البيداغوجي المعتمد للقسم (Contenu Validé):
            </h4>
            <span className="text-[11px] text-emerald-700 font-bold">
              صيغ بالحوار والتنقيح التفاعلي
            </span>
          </div>

          <div className="p-5 rounded-xl bg-slate-50/80 border border-slate-200 text-sm text-slate-900 leading-relaxed font-sans whitespace-pre-line">
            {deliverable.finalContent}
          </div>
        </div>

        {/* Google Sheets Integration Card */}
        <div className="mt-8 p-5 rounded-xl bg-indigo-50/60 border border-indigo-100 text-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-3 text-right">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center flex-shrink-0 shadow-xs">
              <FileSpreadsheet className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-bold text-sm text-slate-900">تصدير وحفظ المورد في Google Sheets</h5>
              <p className="text-xs text-slate-600 mt-0.5">
                إنشاء جدول مركزي في Google Drive يجمع كافة الموارد البيداغوجية الناتجة عن الورشة.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {sheetUrl ? (
              <a
                href={sheetUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-xs hover:bg-indigo-700 transition-colors shadow-xs"
              >
                <span>فتح ملف Google Sheets</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <button
                type="button"
                onClick={onTriggerSheetsExport}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-xs hover:bg-indigo-700 transition-colors shadow-xs cursor-pointer"
              >
                <FileSpreadsheet className="w-4 h-4" />
                <span>حفظ المورد في Google Sheets</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Acquired Competencies Checklist */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
        <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
          <Award className="w-4 h-4 text-indigo-600" />
          <span>حصيلة الكفاءات المكتسبة خلال ساعتي التكوين:</span>
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 text-xs">
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
            <div className="font-mono font-bold text-indigo-700 mb-1">C1 — استعمال الأداة</div>
            <div className="text-slate-600 text-[11px]">فتح واستعمال ChatGPT / Gemini</div>
          </div>
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
            <div className="font-mono font-bold text-indigo-700 mb-1">C2 — إعطاء السياق</div>
            <div className="text-slate-600 text-[11px]">المادة، المستوى، الهدف، والقيود</div>
          </div>
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
            <div className="font-mono font-bold text-indigo-700 mb-1">C3 — تقييم الإجابة</div>
            <div className="text-slate-600 text-[11px]">مصفوفة النقد وفحص الملاءمة</div>
          </div>
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
            <div className="font-mono font-bold text-indigo-700 mb-1">C4 — فن الحوار</div>
            <div className="text-slate-600 text-[11px]">Demander → Observer → Corriger</div>
          </div>
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
            <div className="font-mono font-bold text-indigo-700 mb-1">C5 — حدود الذكاء</div>
            <div className="text-slate-600 text-[11px]">⚠️ Toujours vérifier ومسؤولية الأستاذ</div>
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-200">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-100 text-xs font-medium"
        >
          <ArrowRight className="w-4 h-4" />
          <span>العودة للحظة فحص الثقة</span>
        </button>

        <div className="text-xs text-slate-500 font-medium">
          تهانينا لكافة الأساتذة على إنجاز أول مورد بيداغوجي بالذكاء الاصطناعي بنجاح! 🎉
        </div>
      </div>
    </div>
  );
};
