import React, { useState } from 'react';
import { INITIAL_BRAINSTORM_ITEMS } from '../../data/workshopData';
import { ThumbsUp, Plus, ArrowLeft, Presentation, Sparkles, Clock } from 'lucide-react';

interface StageIntroProps {
  onComplete: () => void;
}

export const StageIntro: React.FC<StageIntroProps> = ({ onComplete }) => {
  const [items, setItems] = useState(INITIAL_BRAINSTORM_ITEMS);
  const [votedItems, setVotedItems] = useState<Record<string, boolean>>({});
  const [customInput, setCustomInput] = useState('');

  const handleVote = (id: string) => {
    const hasVoted = votedItems[id];
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, votes: item.votes + (hasVoted ? -1 : 1) } : item
      )
    );
    setVotedItems((prev) => ({ ...prev, [id]: !hasVoted }));
  };

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customInput.trim()) return;
    const newItem = {
      id: Date.now().toString(),
      title: customInput.trim(),
      votes: 1,
    };
    setItems((prev) => [newItem, ...prev]);
    setVotedItems((prev) => ({ ...prev, [newItem.id]: true }));
    setCustomInput('');
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Stage Header Banner */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white font-mono font-bold flex items-center justify-center text-sm shadow-xs flex-shrink-0">
              00:00
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-800 border border-indigo-200 mb-1.5">
                <Clock className="w-3.5 h-3.5 text-indigo-600" />
                <span>الافتتاحية • 10 دقائق (00:00 → 00:10)</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                شنوة ينجم يعمل الذكاء الاصطناعي للأستاذ؟
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                لا نبدأ بشرح الذكاء الاصطناعي ونظرياته، بل ننطلق من الواقع الميداني واليومي للمدرس.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 max-w-sm">
            <div className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
              <Presentation className="w-4 h-4 text-indigo-600" />
              <span>توجيه المدرب للمجموعة:</span>
            </div>
            «شنوة أكثر حاجة تاخذلكم وقت في خدمتكم كأستاذ؟» نجمع الإجابات على السبورة ثم نجرب حياً أمام الجميع.
          </div>
        </div>
      </div>

      {/* Interactive Whiteboard */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-100">
          <div>
            <h3 className="font-bold text-lg text-slate-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-indigo-600" />
              <span>السبورة التفاعلية: المهام الأكثر استهلاكاً للوقت</span>
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              انقر على أي مهمة لتسجيل تصويتك وتحديد أولويات الأساتذة في القاعة
            </p>
          </div>

          {/* Add custom item form */}
          <form onSubmit={handleAddItem} className="flex items-center gap-2">
            <input
              type="text"
              value={customInput}
              onChange={(e) => setCustomInput(e.target.value)}
              placeholder="أضف مهمة أخرى تستنزف وقتك..."
              className="px-3.5 py-2 rounded-xl text-xs border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50/50 min-w-[240px]"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-1 px-3.5 py-2 rounded-xl bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-700 transition-colors shadow-xs"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>إضافة للسبورة</span>
            </button>
          </form>
        </div>

        {/* Chips Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          {items.map((item) => {
            const hasVoted = votedItems[item.id];
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleVote(item.id)}
                className={`text-right p-3.5 rounded-xl border transition-all flex flex-col justify-between min-h-[96px] ${
                  hasVoted
                    ? 'bg-indigo-50/90 border-indigo-300 shadow-xs text-indigo-950 font-medium'
                    : 'bg-slate-50/70 border-slate-200 hover:border-slate-300 text-slate-800'
                }`}
              >
                <span className="text-xs font-bold leading-relaxed">{item.title}</span>
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-200/50">
                  <span className="text-[11px] font-mono text-slate-500">
                    {item.votes} أستاذ يشاركونك الرأي
                  </span>
                  <div
                    className={`p-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors ${
                      hasVoted
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-200/80 text-slate-600 hover:bg-slate-300'
                    }`}
                  >
                    <ThumbsUp className="w-3 h-3" />
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Transition statement quote box */}
        <div className="mt-8 p-5 rounded-xl bg-slate-900 text-slate-100 flex flex-col md:flex-row items-center justify-between gap-4 border border-slate-800">
          <div className="space-y-1 text-right">
            <span className="text-indigo-400 font-mono text-xs font-bold">
              الخلاصة الانتقالية للانطلاق:
            </span>
            <blockquote className="text-base md:text-lg font-bold tracking-tight text-white">
              «اليوم باش نجربوا هل AI ينجم يعاونّا في الحاجات هاذي، موش نظريًا، بل توا قدامكم.»
            </blockquote>
          </div>

          <button
            type="button"
            onClick={onComplete}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md transition-all flex-shrink-0"
          >
            <span>الانتقال للتجربة الأولى (Prompt بسيط)</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
