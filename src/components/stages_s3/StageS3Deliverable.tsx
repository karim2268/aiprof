import React, { useState } from 'react';
import { Clock, FileSpreadsheet, CheckCircle2, Download, Copy, Check, Printer, Sparkles, ExternalLink, Calendar, HelpCircle, ShieldCheck } from 'lucide-react';
import { Session3Fiche } from '../../types';

interface StageS3DeliverableProps {
  fiche: Session3Fiche;
  onOpenSheetsModal: () => void;
  sheetsExportUrl: string | null;
}

export const StageS3Deliverable: React.FC<StageS3DeliverableProps> = ({
  fiche,
  onOpenSheetsModal,
  sheetsExportUrl,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopySummary = () => {
    const text = `جذاذة تحضير درس: ${fiche.theme}
المادة: ${fiche.matiere} | المستوى: ${fiche.niveau} | المدة: ${fiche.duree}

الأهداف:
${fiche.objectifs.map((o) => `- ${o}`).join('\n')}

وضعية الانطلاق:
${fiche.situationDepart}

سير الحصة:
${fiche.deroulement.map((r) => `[${r.time}] ${r.phase}: ${r.activity}`).join('\n')}

الخلاصة:
${fiche.synthese}

التقويم التكويني:
${fiche.evaluationFinale}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white font-mono font-bold flex items-center justify-center text-sm shadow-xs flex-shrink-0">
              01:57
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 mb-1.5">
                <Clock className="w-3 h-3 text-emerald-600" />
                <span>الحصة 3 • 3 دقائق (01:57 → 02:00) • المنتوج الإجباري ومهمة الأسبوع</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                المنتوج النهائي للحصة: جذاذة قابلة للتنفيذ الميداني
              </h2>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                كل أستاذ يخرج اليوم بجذاذة كاملة ومحقونة بقيود قسمه وواقع تلامذته، مع مهمة تجربة نشاط صفي حقيقي.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopySummary}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'تم النسخ!' : 'نسخ الملخص'}</span>
            </button>
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>طباعة</span>
            </button>
          </div>
        </div>
      </div>

      {/* Deliverable Status & Google Sheets Export Card */}
      <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white shadow-lg space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-2xs uppercase tracking-wider font-bold text-emerald-200 bg-white/10 px-2.5 py-1 rounded-md">
              المنتوج الإجباري للحصة الثالثة (Livrable Obligatoire)
            </span>
            <h3 className="text-xl font-bold text-white">
              جذاذة تحضير درس: {fiche.theme}
            </h3>
            <p className="text-xs text-emerald-100 font-medium">
              {fiche.matiere} • {fiche.niveau} • جدول سير الحصة ({fiche.deroulement.length} مراحل) • فحص المفتش
            </p>
          </div>

          <div className="flex items-center gap-3">
            {sheetsExportUrl ? (
              <a
                href={sheetsExportUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-emerald-900 font-bold text-xs hover:bg-emerald-50 transition-colors shadow-md"
              >
                <span>فتح الملف في Google Sheets</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            ) : (
              <button
                type="button"
                onClick={onOpenSheetsModal}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-emerald-900 font-bold text-xs hover:bg-emerald-50 transition-colors shadow-md hover:scale-102"
              >
                <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
                <span>تصدير الجذاذة إلى Google Sheets</span>
              </button>
            )}
          </div>
        </div>

        <div className="pt-4 border-t border-emerald-500/40 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div className="bg-white/10 p-2.5 rounded-lg">
            <span className="text-emerald-200 text-2xs block">الوعاء الزمني</span>
            <span className="font-bold">{fiche.duree}</span>
          </div>
          <div className="bg-white/10 p-2.5 rounded-lg">
            <span className="text-emerald-200 text-2xs block">عدد الأهداف</span>
            <span className="font-bold">{fiche.objectifs.length} أهداف إجرائية</span>
          </div>
          <div className="bg-white/10 p-2.5 rounded-lg">
            <span className="text-emerald-200 text-2xs block">فحص المفتش</span>
            <span className="font-bold">معتمد ومعدل</span>
          </div>
          <div className="bg-white/10 p-2.5 rounded-lg">
            <span className="text-emerald-200 text-2xs block">حالة التحقق</span>
            <span className="font-bold text-emerald-200">جاهز للتنفيذ الصفي</span>
          </div>
        </div>
      </div>

      {/* Between Sessions Field Mission (مهمة ما بين الحصتين) */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
        <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
          <Calendar className="w-5 h-5 text-indigo-600" />
          <div>
            <h3 className="font-bold text-slate-900 text-base">
              مهمة ما بين الحصتين: الاختبار الميداني الحقيقي في القسم
            </h3>
            <p className="text-xs text-slate-500">
              بين الحصة 3 والحصة 4: ينتقل الأستاذ من شاشة الحاسوب إلى قاعة الدرس.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-indigo-50/70 border border-indigo-200 text-xs text-indigo-950 font-medium leading-relaxed">
          <strong>التعليمة الميدانية:</strong> «اختر نشاطاً واحداً فقط من هذه الجذاذة (وضعية الانطلاق أو النشاط الاستكشفي) وطبّقه هذا الأسبوع مع تلامذتك في القسم الحقيقي.»
        </div>

        <div className="space-y-2.5">
          <div className="text-xs font-bold text-slate-800">
            الأسئلة الثلاثة التي ستجيب عنها في افتتاح الحصة الرابعة:
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-xl border border-emerald-200 bg-emerald-50/60 space-y-1.5">
              <span className="text-2xs font-bold text-emerald-800 uppercase tracking-wider block">
                السؤال 1 • النجاح
              </span>
              <p className="text-xs font-bold text-emerald-950">
                «شنوة اللي مشى مليح كيف ما اقترح الـAI؟»
              </p>
              <p className="text-2xs text-slate-600">
                (تفاعل التلامذة، وضوح السند، سهولة الفهم...)
              </p>
            </div>

            <div className="p-3.5 rounded-xl border border-amber-200 bg-amber-50/60 space-y-1.5">
              <span className="text-2xs font-bold text-amber-800 uppercase tracking-wider block">
                السؤال 2 • التعطل
              </span>
              <p className="text-xs font-bold text-amber-950">
                «شنوة اللي تعطل أو كان غير واقعي في القسم؟»
              </p>
              <p className="text-2xs text-slate-600">
                (الوقت ضاق، الأسئلة كانت غامضة، التلامذة تشتتوا...)
              </p>
            </div>

            <div className="p-3.5 rounded-xl border border-rose-200 bg-rose-50/60 space-y-1.5">
              <span className="text-2xs font-bold text-rose-800 uppercase tracking-wider block">
                السؤال 3 • الخبرة الميدانية
              </span>
              <p className="text-xs font-bold text-rose-950">
                «شنوة النقطة اللي كان فيها الـAI غالط تماماً وصلحتها؟»
              </p>
              <p className="text-2xs text-slate-600">
                (خطأ علمي، مصطلح غير معتمد، افتراض خاطئ لمستوى التلامذة...)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Concluding Philosophy Banner */}
      <div className="p-6 rounded-2xl bg-slate-900 text-white text-center space-y-2.5 shadow-md">
        <Sparkles className="w-5 h-5 text-amber-400 mx-auto" />
        <p className="text-base md:text-lg font-bold font-serif leading-relaxed text-slate-100">
          «L’IA peut préparer un cours. Mais seul l’enseignant connaît vraiment sa classe.»
        </p>
        <p className="text-xs text-slate-300 font-medium">
          الذكاء الاصطناعي مساعد ممتاز ومسرّع عمل... ولكنك أنت دائماً وأبداً صاحب القرار البيداغوجي الأول والأخير.
        </p>
      </div>
    </div>
  );
};
