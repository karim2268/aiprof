import React, { useState } from 'react';
import { Clock, Swords, HelpCircle, ArrowLeft, ArrowRight, Award, AlertTriangle, Lightbulb, CheckCircle2 } from 'lucide-react';
import { SESSION_2_PROMPT_BATTLES, SESSION_2_MISUNDERSTAND_EXAMPLE } from '../../data/workshopData';

interface StageS2BattleMisunderstandProps {
  onComplete: () => void;
  onPrev: () => void;
}

export const StageS2BattleMisunderstand: React.FC<StageS2BattleMisunderstandProps> = ({
  onComplete,
  onPrev,
}) => {
  const [activeTab, setActiveTab] = useState<'battle' | 'misunderstand'>('battle');
  const [votedTeam, setVotedTeam] = useState<'A' | 'B' | null>(null);

  const battle = SESSION_2_PROMPT_BATTLES[0];

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white font-mono font-bold flex items-center justify-center text-sm shadow-xs flex-shrink-0">
              01:45
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-800 border border-indigo-200 mb-1.5">
                <Clock className="w-3 h-3 text-indigo-600" />
                <span>الحصة 2 • 10 دقائق (01:45 → 01:55) • الكفاءة C4: المنافسة وتحليل سوء الفهم</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                تحدي «Prompt Battle» ونشاط «AI فهمني غلط»
              </h2>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                نقارن إبداعات الأساتذة لنرى أي صياغة تفوقت بيداغوجياً، ثم نفكك لغز سوء الفهم: هل العيب في ذكاء الآلة أم في غموض الرسالة؟
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 p-1 bg-slate-100 rounded-xl border border-slate-200">
            <button
              onClick={() => setActiveTab('battle')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'battle' ? 'bg-indigo-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              1. مسابقة Prompt Battle
            </button>
            <button
              onClick={() => setActiveTab('misunderstand')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'misunderstand' ? 'bg-indigo-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              2. نشاط «AI فهمني غلط»
            </button>
          </div>
        </div>
      </div>

      {activeTab === 'battle' ? (
        /* Prompt Battle Tab */
        <div className="space-y-6">
          <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold">
                <Swords className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">{battle.taskTitle}</h4>
                <p className="text-xs text-slate-600">قارن الصياغتين وحدد أيهما أحق بالفوز في القسم الحقيقي.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Team A */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="text-xs font-bold text-slate-700">{battle.promptTeamA.team}</span>
                <span className="text-xs font-mono font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md">
                  التقييم: {battle.promptTeamA.score}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900 text-slate-200 font-mono text-xs border border-slate-800 leading-relaxed">
                "{battle.promptTeamA.prompt}"
              </div>

              <div className="text-xs space-y-1.5 text-slate-600">
                <div><strong>المخرج الفعلي:</strong> {battle.promptTeamA.aiOutputSummary}</div>
                <div className="text-rose-700"><strong>نواقص النتيجة:</strong> {battle.promptTeamA.flaws}</div>
              </div>

              <button
                type="button"
                onClick={() => setVotedTeam('A')}
                className={`w-full py-2 rounded-xl text-xs font-bold border transition-colors ${
                  votedTeam === 'A' ? 'bg-indigo-50 border-indigo-500 text-indigo-700' : 'hover:bg-slate-50 text-slate-600 border-slate-200'
                }`}
              >
                {votedTeam === 'A' ? 'صوتت لهذه المجموعة' : 'صوت للمجموعة A'}
              </button>
            </div>

            {/* Team B */}
            <div className="bg-white rounded-2xl p-6 border border-indigo-200 shadow-xs space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 left-0 h-1.5 bg-indigo-600" />
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-amber-500" />
                  <span className="text-xs font-bold text-slate-900">{battle.promptTeamB.team}</span>
                </div>
                <span className="text-xs font-mono font-bold bg-emerald-50 text-emerald-700 px-2.5 py-0.5 rounded-md border border-emerald-200">
                  التقييم: {battle.promptTeamB.score}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900 text-emerald-300 font-mono text-xs border border-slate-800 leading-relaxed max-h-32 overflow-y-auto">
                "{battle.promptTeamB.prompt}"
              </div>

              <div className="text-xs space-y-1.5 text-slate-600">
                <div><strong>المخرج الفعلي:</strong> {battle.promptTeamB.aiOutputSummary}</div>
                <div className="text-emerald-700"><strong>سر التفوق:</strong> {battle.promptTeamB.flaws}</div>
              </div>

              <button
                type="button"
                onClick={() => setVotedTeam('B')}
                className={`w-full py-2 rounded-xl text-xs font-bold border transition-colors ${
                  votedTeam === 'B' ? 'bg-indigo-600 border-indigo-700 text-white' : 'hover:bg-indigo-50 text-indigo-700 border-indigo-200'
                }`}
              >
                {votedTeam === 'B' ? '✓ الفائزة بجدارة بيداغوجية!' : 'صوت للمجموعة B'}
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Misunderstanding Activity Tab */
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold text-lg shadow-xs">
              🤔
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base">
                نشاط «AI فهمني غلط» (5 دقائق من التأمل النقدي)
              </h3>
              <p className="text-xs text-slate-500">
                عندما لا يعطينا الذكاء الاصطناعي ما نريده... هل نلوم الآلة أم نراجع طريقة تواصلنا؟
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Prompt with ambiguity */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                <span>الـPrompt الغامض المأخوذ من الواقع:</span>
              </div>
              <div className="p-3 bg-slate-900 text-amber-300 font-mono text-xs rounded-lg">
                "{SESSION_2_MISUNDERSTAND_EXAMPLE.ambiguousPrompt}"
              </div>
              <div className="text-xs text-slate-600 leading-relaxed">
                <strong>كيف فسره الذكاء الاصطناعي؟</strong>
                <p className="mt-1">{SESSION_2_MISUNDERSTAND_EXAMPLE.howAiUnderstoodIt}</p>
              </div>
            </div>

            {/* Core insight */}
            <div className="p-5 rounded-xl bg-indigo-900 text-white space-y-3 shadow-sm flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider">
                  <Lightbulb className="w-4 h-4" />
                  <span>الدرس البيداغوجي الأساسي:</span>
                </div>
                <p className="text-xs text-indigo-100 leading-relaxed">
                  {SESSION_2_MISUNDERSTAND_EXAMPLE.pedagogicalLesson}
                </p>
              </div>

              <div className="p-3 bg-white/10 rounded-lg text-2xs text-indigo-200 border border-white/10">
                <strong>القاعدة الذهبية:</strong> إذا لم تقدم السياق بوضوح، سيملأ الذكاء الاصطناعي الفراغ من توقعاته الإحصائية!
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-200">
        <button
          type="button"
          onClick={onPrev}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-medium text-xs transition-colors"
        >
          <ArrowRight className="w-4 h-4" />
          <span>السابق: الحوار الذكي وFollow-up Prompts</span>
        </button>

        <button
          type="button"
          onClick={onComplete}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-sm transition-all"
        >
          <span>التالي: المنتوج الإجباري (Mon AI Teacher Toolbox)</span>
          <ArrowLeft className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
