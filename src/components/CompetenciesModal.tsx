import React from 'react';
import { X, Award, Target, CheckCircle2 } from 'lucide-react';
import { SessionMeta, Competency } from '../types';

interface CompetenciesModalProps {
  isOpen: boolean;
  onClose: () => void;
  sessionMeta: SessionMeta;
  competencies: Competency[];
}

export const CompetenciesModal: React.FC<CompetenciesModalProps> = ({
  isOpen,
  onClose,
  sessionMeta,
  competencies,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center border border-indigo-100">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-slate-900">
                الكفاءات المستهدفة والإطار البيداغوجي للحصة {sessionMeta.sessionNumber}
              </h3>
              <p className="text-xs text-slate-500">
                {sessionMeta.titleFr} • {sessionMeta.duration} • {sessionMeta.nature}
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

        {/* General Objective */}
        <div className="mt-4 p-4 rounded-xl bg-indigo-50/70 border border-indigo-200/80">
          <div className="flex items-center gap-2 text-indigo-900 font-bold text-sm mb-1">
            <Target className="w-4 h-4 text-indigo-600" />
            <span>🎯 1. الهدف العام للحصة</span>
          </div>
          <p className="text-xs text-indigo-950 leading-relaxed font-medium">
            {sessionMeta.generalObjective}
          </p>
        </div>

        {/* Competencies */}
        <div className="mt-5 space-y-3">
          <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            🎓 2. الكفاءات المستهدفة (C1 → C{competencies.length})
          </h4>

          <div className="grid gap-2.5">
            {competencies.map((comp) => (
              <div
                key={comp.code}
                className="p-3 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-indigo-200 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <span className="px-2 py-0.5 rounded-md bg-indigo-600 text-white font-mono font-bold text-xs flex-shrink-0 mt-0.5">
                    {comp.code}
                  </span>
                  <div className="space-y-1">
                    <h5 className="text-xs font-bold text-slate-900">{comp.title}</h5>
                    <p className="text-2xs text-slate-600 leading-relaxed">{comp.description}</p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {comp.subItems.map((item, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700"
                        >
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          <span>{item}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors"
          >
            إغلاق ومتابعة الحصة
          </button>
        </div>
      </div>
    </div>
  );
};

