import React, { useState } from 'react';
import { Clock, Briefcase, FileSpreadsheet, Copy, Check, Download, ExternalLink, Sparkles, BookOpen, CheckCircle2, HeartHandshake } from 'lucide-react';
import { Session2ToolboxItem, Session2Deliverable, ParticipantFichePrompt } from '../../types';
import { DEFAULT_SESSION_2_TOOLBOX } from '../../data/workshopData';

interface StageS2ToolboxDeliverableProps {
  fiche: ParticipantFichePrompt;
  toolbox: Session2ToolboxItem[];
  onChangeToolbox: (newToolbox: Session2ToolboxItem[]) => void;
  onOpenSheetsModal: () => void;
  isSheetsConnected: boolean;
  onPrev: () => void;
  deliverableSheetUrl?: string;
}

export const StageS2ToolboxDeliverable: React.FC<StageS2ToolboxDeliverableProps> = ({
  fiche,
  toolbox,
  onChangeToolbox,
  onOpenSheetsModal,
  isSheetsConnected,
  onPrev,
  deliverableSheetUrl,
}) => {
  const [copiedAll, setCopiedAll] = useState(false);
  const [activeEditingId, setActiveEditingId] = useState<string | null>(null);

  const handleUpdatePromptText = (id: string, newText: string) => {
    onChangeToolbox(
      toolbox.map((item) => (item.id === id ? { ...item, promptText: newText, isCustomized: true } : item))
    );
  };

  const handleCopyAll = () => {
    const text = toolbox
      .map(
        (item, idx) =>
          `=== [${idx + 1}] ${item.categoryLabel} ===\nالعنوان: ${item.title}\nالـPrompt:\n${item.promptText}\nنصيحة الاستعمال: ${item.usageTips}\n`
      )
      .join('\n----------------------------------------\n\n');

    navigator.clipboard.writeText(text);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2500);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white font-mono font-bold flex items-center justify-center text-sm shadow-xs flex-shrink-0">
              01:55
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 mb-1.5">
                <Clock className="w-3 h-3 text-emerald-600" />
                <span>الحصة 2 • 5 دقائق (01:55 → 02:00) • المنتوج الإجباري للحصة</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                صندوق أدوات الأستاذ: Mon AI Teacher Toolbox (5 Prompts جاهزة)
              </h2>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                كل أستاذ يغادر الحصة وبحوزته 5 نماذج طلب مهيكلة لمادته، قابلة للاستعمال الفوري والحفظ المباشر في Google Sheets!
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopyAll}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-bold transition-colors"
            >
              {copiedAll ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700">تم نسخ الـ 5 Prompts!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-600" />
                  <span>نسخ الصندوق كاملاً</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={onOpenSheetsModal}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-xs transition-colors"
            >
              <FileSpreadsheet className="w-4 h-4" />
              <span>تصدير لـ Google Sheets</span>
            </button>
          </div>
        </div>
      </div>

      {deliverableSheetUrl && (
        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <div className="text-xs text-emerald-950">
              <strong>تم حفظ وتحديث صندوق الأدوات في Google Sheets بنجاح!</strong>
            </div>
          </div>
          <a
            href={deliverableSheetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white text-emerald-800 border border-emerald-300 text-xs font-bold hover:bg-emerald-100"
          >
            <span>فتح الجدول في Drive</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      )}

      {/* Toolbox Cards */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-indigo-600" />
            <h3 className="font-bold text-slate-900 text-base">
              النماذج الخمسة الأساسية في حقيبتك البيداغوجية:
            </h3>
          </div>
          <span className="text-xs text-slate-500 font-medium">
            مبنية وفق منهاج: {fiche.subject} ({fiche.gradeLevel})
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {toolbox.map((item, idx) => {
            const isEditing = activeEditingId === item.id;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-3 relative overflow-hidden transition-all hover:border-indigo-200"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-700 font-bold flex items-center justify-center text-xs border border-indigo-100">
                      {idx + 1}
                    </div>
                    <div>
                      <span className="text-2xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50/70 px-2 py-0.5 rounded-md ml-2">
                        {item.categoryLabel}
                      </span>
                      <strong className="text-sm text-slate-900">{item.title}</strong>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-end sm:self-auto">
                    <button
                      type="button"
                      onClick={() => setActiveEditingId(isEditing ? null : item.id)}
                      className="text-2xs font-semibold px-2.5 py-1 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600"
                    >
                      {isEditing ? 'إغلاق التعديل' : 'تخصيص النص'}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        navigator.clipboard.writeText(item.promptText);
                      }}
                      className="inline-flex items-center gap-1 text-2xs font-semibold px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                    >
                      <Copy className="w-3 h-3 text-slate-500" />
                      <span>نسخ</span>
                    </button>
                  </div>
                </div>

                {isEditing ? (
                  <textarea
                    rows={4}
                    value={item.promptText}
                    onChange={(e) => handleUpdatePromptText(item.id, e.target.value)}
                    className="w-full p-3 font-mono text-xs rounded-xl border border-indigo-300 bg-indigo-50/30 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 leading-relaxed"
                  />
                ) : (
                  <div className="p-3.5 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs leading-relaxed border border-slate-800">
                    {item.promptText}
                  </div>
                )}

                <div className="flex items-center gap-2 text-2xs text-slate-500">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                  <span><strong>نصيحة الاستعمال:</strong> {item.usageTips}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Between Sessions Homework Box */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
        <div className="flex items-center gap-2.5 border-b border-slate-100 pb-3">
          <BookOpen className="w-5 h-5 text-indigo-600" />
          <h3 className="font-bold text-slate-900 text-base">
            مهمة العمل والتطبيق بين الحصتين (Mission entre les séances):
          </h3>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-2 leading-relaxed">
          <p className="font-semibold text-slate-900">
            «جرّب أحد النماذج الخمسة على درس حقيقي هذا الأسبوع في قسمك:»
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-slate-600 pr-2">
            <li>اختر مهمة حقيقية (جذاذة درس، تمرين، أو تقويم سريع).</li>
            <li>طبق النموذج السداسي المعتمد، ولا تكتفِ بالإجابة الأولى، بل أجرِ حواراً تعديلياً بـ Follow-up prompt واحد على الأقل.</li>
            <li>احفظ النتيجة في ملفك لتقديمها ومشاركتها في بداية الحصة القادمة: <span className="font-bold text-indigo-700">Préparer un cours complet avec l’IA</span>.</li>
          </ul>
        </div>
      </div>

      {/* Closing Inspirational Message */}
      <div className="p-6 rounded-2xl bg-indigo-900 text-white shadow-md border border-indigo-800 space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-xs">
            <HeartHandshake className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">
              الرسالة الختامية للحصة الثانية:
            </span>
            <h4 className="text-base font-extrabold text-white mt-0.5">
              "Ne demandez pas seulement à l’IA de produire. Apprenez à dialoguer avec elle."
            </h4>
          </div>
        </div>

        <p className="text-xs text-indigo-100 leading-relaxed pt-1 pr-13 border-t border-indigo-800/80 font-medium">
          «ما تطلبش من الـAI يعملك حاجة وخلاص... حاورُه، وجّهو، صحّحو، وخليه يعاود يحسّن خدمتو. القيمة الحقيقية للأستاذ تكمن في نظرته النقدية وحواره البيداغوجي الذكي!»
        </p>
      </div>

      {/* Navigation Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-200">
        <button
          type="button"
          onClick={onPrev}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-medium text-xs transition-colors"
        >
          <span>السابق: تحدي المنافسة وسوء الفهم</span>
        </button>

        <button
          type="button"
          onClick={onOpenSheetsModal}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-all"
        >
          <FileSpreadsheet className="w-4 h-4" />
          <span>حفظ وتصدير صندوق الأدوات إلى Google Sheets</span>
        </button>
      </div>
    </div>
  );
};
