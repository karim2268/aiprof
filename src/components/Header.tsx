import React from 'react';
import { Sparkles, Award, Clock, LogOut, CheckCircle2 } from 'lucide-react';
import { User } from 'firebase/auth';
import { GoogleSignInButton } from './GoogleSignInButton';
import { SessionMeta } from '../types';

interface HeaderProps {
  sessionMeta: SessionMeta;
  user: User | null;
  onSignIn: () => void;
  onSignOut: () => void;
  isLoggingIn: boolean;
  onOpenCompetencies: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  sessionMeta,
  user,
  onSignIn,
  onSignOut,
  isLoggingIn,
  onOpenCompetencies,
}) => {
  return (
    <header className="bg-indigo-950 border-b border-indigo-900/80 text-white sticky top-0 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Title & Metadata */}
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-indigo-900/90 text-indigo-300 flex items-center justify-center border border-indigo-700/60 shadow-xs flex-shrink-0">
            <Sparkles className="w-6 h-6 text-indigo-400" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2 py-0.5 rounded-md bg-indigo-600 text-white text-xs font-bold font-mono">
                الحصة {sessionMeta.sessionNumber}
              </span>
              <h1 className="text-xl font-bold tracking-tight text-white font-sans">
                {sessionMeta.titleFr}
              </h1>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-indigo-900/80 text-indigo-200 border border-indigo-700/60">
                {sessionMeta.titleAr}
              </span>
            </div>
            <div className="flex items-center gap-3 mt-1 text-xs text-indigo-200/80 font-medium flex-wrap">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-indigo-400" />
                {sessionMeta.duration}
              </span>
              <span className="w-1 h-1 rounded-full bg-indigo-700" />
              <span className="text-emerald-300 bg-emerald-950/80 border border-emerald-800/60 px-1.5 py-0.5 rounded text-[11px] font-bold">
                {sessionMeta.nature}
              </span>
              <span className="w-1 h-1 rounded-full bg-indigo-700" />
              <span className="text-indigo-200">{sessionMeta.targetAudience}</span>
            </div>
          </div>
        </div>

        {/* Action Controls & Google Account */}
        <div className="flex items-center gap-3 self-end md:self-auto">
          <button
            type="button"
            onClick={onOpenCompetencies}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-indigo-100 bg-indigo-900/90 hover:bg-indigo-800 border border-indigo-700/80 transition-colors shadow-xs"
          >
            <Award className="w-4 h-4 text-indigo-400" />
            <span>الكفاءات المستهدفة بالحصة</span>
          </button>


          {user ? (
            <div className="flex items-center gap-2 pl-1 border-r border-indigo-800 pr-3 mr-1">
              <div className="text-right">
                <div className="text-xs font-bold text-white flex items-center gap-1 justify-end">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>{user.displayName || user.email?.split('@')[0]}</span>
                </div>
                <div className="text-[10px] text-indigo-300 truncate max-w-[140px]">
                  {user.email}
                </div>
              </div>
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt={user.displayName || 'Teacher'}
                  className="w-8 h-8 rounded-full border border-indigo-700 object-cover"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="w-8 h-8 rounded-full bg-indigo-800 text-indigo-200 font-bold text-xs flex items-center justify-center border border-indigo-700">
                  {user.displayName ? user.displayName.charAt(0) : 'T'}
                </div>
              )}
              <button
                type="button"
                onClick={onSignOut}
                title="تسجيل الخروج"
                className="p-1.5 text-indigo-300 hover:text-white hover:bg-indigo-800 rounded-lg transition-colors"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <GoogleSignInButton
              onClick={onSignIn}
              isLoading={isLoggingIn}
              text="Google Sheets ربط"
              variant="light"
            />
          )}
        </div>
      </div>
    </header>
  );
};
