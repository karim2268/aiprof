import React from 'react';
import { WorkshopStage } from '../types';
import { StageId } from '../types';
import { ChevronRight, ChevronLeft, CheckCircle } from 'lucide-react';

interface TimelineNavProps {
  stages: WorkshopStage[];
  currentStage: StageId;
  onSelectStage: (stage: StageId) => void;
  completedStages: Record<StageId, boolean>;
}

export const TimelineNav: React.FC<TimelineNavProps> = ({
  stages,
  currentStage,
  onSelectStage,
  completedStages,
}) => {
  const currentIndex = stages.findIndex((s) => s.id === currentStage);

  const handlePrev = () => {
    if (currentIndex > 0) {
      onSelectStage(stages[currentIndex - 1].id);
    }
  };

  const handleNext = () => {
    if (currentIndex < stages.length - 1) {
      onSelectStage(stages[currentIndex + 1].id);
    }
  };

  return (
    <div className="bg-slate-900 text-slate-200 border-b border-slate-800/80 py-2.5 px-4 shadow-inner">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        <button
          type="button"
          onClick={handlePrev}
          disabled={currentIndex <= 0}
          className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 disabled:opacity-30 disabled:pointer-events-none transition-colors"
          title="المرحلة السابقة"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Scrollable Stage Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
          {stages.map((stage) => {
            const isActive = stage.id === currentStage;
            const isDone = completedStages[stage.id];

            return (
              <button
                key={stage.id}
                type="button"
                onClick={() => onSelectStage(stage.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs whitespace-nowrap transition-all flex-shrink-0 ${
                  isActive
                    ? 'bg-indigo-600 text-white font-bold shadow-sm ring-1 ring-indigo-400/30'
                    : isDone
                    ? 'bg-slate-800/90 text-emerald-400 hover:bg-slate-800 font-medium border border-slate-700/50'
                    : 'bg-slate-800/40 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                }`}
              >
                <span className="font-mono text-[11px] opacity-75">{stage.timeRange.split(' ')[0]}</span>
                <span>{stage.title.split(':')[0]}</span>
                {isDone && !isActive && <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />}
                {stage.competencyCode && (
                  <span
                    className={`text-[10px] px-1 py-0.2 rounded font-mono ${
                      isActive ? 'bg-indigo-950 text-indigo-200' : 'bg-slate-700 text-slate-300'
                    }`}
                  >
                    {stage.competencyCode}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={handleNext}
          disabled={currentIndex >= stages.length - 1}
          className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 disabled:opacity-30 disabled:pointer-events-none transition-colors"
          title="المرحلة التالية"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

