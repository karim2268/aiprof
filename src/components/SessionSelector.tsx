import React, { useState } from 'react';
import { SessionId, SessionMeta } from '../types';
import { WORKSHOP_SESSIONS, UPCOMING_SESSIONS } from '../data/workshopData';
import { Calendar, ChevronDown, Check, Sparkles, BookOpen, Layers, X, Target, Clock, ArrowLeft } from 'lucide-react';

interface SessionSelectorProps {
  currentSession: SessionId;
  onSelectSession: (sessionId: SessionId) => void;
}

export const SessionSelector: React.FC<SessionSelectorProps> = ({
  currentSession,
  onSelectSession,
}) => {
  const [isRoadmapOpen, setIsRoadmapOpen] = useState(false);

  const activeSessionMeta = WORKSHOP_SESSIONS.find((s) => s.id === currentSession) || WORKSHOP_SESSIONS[0];

  return (
    <div className="bg-slate-900 border-b border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Active Session Switcher Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full sm:w-auto">
          <span className="text-2xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5 flex-shrink-0">
            <Layers className="w-3.5 h-3.5 text-indigo-400" />
            <span>حصص التكوين:</span>
          </span>

          <div className="flex items-center gap-1.5 p-1 bg-slate-950/80 rounded-xl border border-slate-800 flex-shrink-0">
            {WORKSHOP_SESSIONS.map((session) => {
              const isActive = session.id === currentSession;
              return (
                <button
                  key={session.id}
                  type="button"
                  onClick={() => onSelectSession(session.id)}
                  className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-sm ring-1 ring-indigo-400/40'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <span className="w-5 h-5 rounded-full bg-white/20 text-white flex items-center justify-center text-2xs font-mono font-bold">
                    {session.sessionNumber}
                  </span>
                  <span>{session.titleAr}</span>
                  {isActive && <Check className="w-3 h-3 text-emerald-300" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Training Roadmap Trigger */}
        <div className="flex items-center gap-2 self-end sm:self-auto flex-shrink-0">
          <button
            type="button"
            onClick={() => setIsRoadmapOpen(true)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors shadow-xs"
          >
            <Calendar className="w-3.5 h-3.5 text-indigo-400" />
            <span>خارطة التكوين الكاملة (10 حصص)</span>
            <span className="px-1.5 py-0.2 rounded-full bg-indigo-900 text-indigo-300 text-2xs font-mono">
              المعهد
            </span>
          </button>
        </div>
      </div>

      {/* Roadmap Modal */}
      {isRoadmapOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-7 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto text-slate-800 space-y-5">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-indigo-50 text-indigo-700 flex items-center justify-center border border-indigo-100">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    البرنامج التكويني البيداغوجي المتكامل لأساتذة المعهد
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    مسار تدريبي متدرج من 10 حصص تطبيقية (ساعتان لكل حصة) لتمكين الأستاذ من توظيف الذكاء الاصطناعي
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsRoadmapOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Active Sessions */}
            <div className="space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200 inline-flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>الحصص المنجزة والمتاحة في التطبيق:</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {WORKSHOP_SESSIONS.map((session) => (
                  <div
                    key={session.id}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                      session.id === currentSession
                        ? 'bg-indigo-50/70 border-indigo-400 ring-2 ring-indigo-500/20'
                        : 'bg-slate-50 border-slate-200 hover:border-indigo-300'
                    }`}
                    onClick={() => {
                      onSelectSession(session.id);
                      setIsRoadmapOpen(false);
                    }}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-indigo-600 text-white">
                        الحصة {session.sessionNumber}
                      </span>
                      <span className="text-2xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                        متاحة الآن للتنفيذ
                      </span>
                    </div>
                    <h4 className="font-bold text-sm text-slate-900">{session.titleAr}</h4>
                    <p className="text-2xs text-slate-500 italic mt-0.5">{session.titleFr}</p>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                      {session.generalObjective}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Sessions List */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-600 bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200 inline-flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>الحصص القادمة ضمن السلسلة التكوينية بالمعهد:</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                {UPCOMING_SESSIONS.map((item) => (
                  <div
                    key={item.number}
                    className="p-3.5 rounded-xl bg-slate-50/70 border border-slate-200 flex items-start gap-3"
                  >
                    <div className="w-7 h-7 rounded-lg bg-slate-200 text-slate-700 font-mono font-bold text-xs flex items-center justify-center flex-shrink-0">
                      {item.number}
                    </div>
                    <div>
                      <h5 className="font-bold text-xs text-slate-900">{item.subtitle}</h5>
                      <span className="text-2xs text-slate-500 font-medium block mt-0.5">{item.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>تطوير وتأطير خاص بأساتذة المعهد</span>
              <button
                type="button"
                onClick={() => setIsRoadmapOpen(false)}
                className="px-4 py-2 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors"
              >
                إغلاق
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
