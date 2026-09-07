/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { User } from 'firebase/auth';
import { initAuth, googleSignIn, logout } from './firebase';
import {
  SessionId,
  StageIdSession1,
  StageIdSession2,
  StageIdSession3,
  StageIdSession4,
  TeacherWorksheet,
  PedagogicalDeliverable,
  ParticipantFichePrompt,
  Session2ToolboxItem,
  Session3Worksheet,
  Session3Fiche,
  Session4ParticipantWorksheet,
  Session4Deliverable,
} from './types';
import {
  WORKSHOP_SESSIONS,
  WORKSHOP_STAGES_SESSION_1,
  WORKSHOP_STAGES_SESSION_2,
  WORKSHOP_STAGES_SESSION_3,
  WORKSHOP_STAGES_SESSION_4,
  COMPETENCIES,
  COMPETENCIES_SESSION_2,
  COMPETENCIES_SESSION_3,
  COMPETENCIES_SESSION_4,
  DEFAULT_SESSION_2_TOOLBOX,
  DEFAULT_SESSION_3_WORKSHEET,
  DEFAULT_SESSION_3_FICHE,
  DEFAULT_SESSION_4_WORKSHEET,
  DEFAULT_SESSION_4_DELIVERABLE,
} from './data/workshopData';

import { Header } from './components/Header';
import { SessionSelector } from './components/SessionSelector';
import { TimelineNav } from './components/TimelineNav';
import { CompetenciesModal } from './components/CompetenciesModal';
import { GoogleSheetsModal } from './components/GoogleSheetsModal';

// Session 1 stage components
import { StageIntro } from './components/stages/StageIntro';
import { StageSimplePrompt } from './components/stages/StageSimplePrompt';
import { StageContextPrompt } from './components/stages/StageContextPrompt';
import { StageDialogue } from './components/stages/StageDialogue';
import { StageBreak } from './components/stages/StageBreak';
import { StageProblemChoice } from './components/stages/StageProblemChoice';
import { StageFirstPrompt } from './components/stages/StageFirstPrompt';
import { StageCritique } from './components/stages/StageCritique';
import { StageTrustCheck } from './components/stages/StageTrustCheck';
import { StageDeliverable } from './components/stages/StageDeliverable';

// Session 2 stage components
import { StageS2Review } from './components/stages_s2/StageS2Review';
import { StageS2WeakPrompt } from './components/stages_s2/StageS2WeakPrompt';
import { StageS2StepBuilder } from './components/stages_s2/StageS2StepBuilder';
import { StageS2Comparison } from './components/stages_s2/StageS2Comparison';
import { StageS2Break } from './components/stages_s2/StageS2Break';
import { StageS2Deconstruct } from './components/stages_s2/StageS2Deconstruct';
import { StageS2WriteTest } from './components/stages_s2/StageS2WriteTest';
import { StageS2Dialogue } from './components/stages_s2/StageS2Dialogue';
import { StageS2BattleMisunderstand } from './components/stages_s2/StageS2BattleMisunderstand';
import { StageS2ToolboxDeliverable } from './components/stages_s2/StageS2ToolboxDeliverable';

// Session 3 stage components
import { StageS3Review } from './components/stages_s3/StageS3Review';
import { StageS3RawPrompt } from './components/stages_s3/StageS3RawPrompt';
import { StageS3StepByStep } from './components/stages_s3/StageS3StepByStep';
import { StageS3ContextInjection } from './components/stages_s3/StageS3ContextInjection';
import { StageS3Break } from './components/stages_s3/StageS3Break';
import { StageS3Worksheet } from './components/stages_s3/StageS3Worksheet';
import { StageS3InteractiveBuilder } from './components/stages_s3/StageS3InteractiveBuilder';
import { StageS3AiInspector } from './components/stages_s3/StageS3AiInspector';
import { StageS3FicheConversion } from './components/stages_s3/StageS3FicheConversion';
import { StageS3Deliverable } from './components/stages_s3/StageS3Deliverable';

// Session 4 stage components
import { StageS4Review } from './components/stages_s4/StageS4Review';
import { StageS4RawPrompt } from './components/stages_s4/StageS4RawPrompt';
import { StageS4GraduatedExercise } from './components/stages_s4/StageS4GraduatedExercise';
import { StageS4ExamConstraints } from './components/stages_s4/StageS4ExamConstraints';
import { StageS4AiReviewer } from './components/stages_s4/StageS4AiReviewer';
import { StageS4Break } from './components/stages_s4/StageS4Break';
import { StageS4ParticipantFiche } from './components/stages_s4/StageS4ParticipantFiche';
import { StageS4ExamBuilder } from './components/stages_s4/StageS4ExamBuilder';
import { StageS4DifferentiationChallenge } from './components/stages_s4/StageS4DifferentiationChallenge';
import { StageS4Deliverable } from './components/stages_s4/StageS4Deliverable';

export default function App() {
  // Auth state
  const [user, setUser] = useState<User | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);

  // Active session selector: 'session_1' | 'session_2' | 'session_3' | 'session_4'
  const [currentSession, setCurrentSession] = useState<SessionId>('session_4');

  // Modals state
  const [isCompetenciesOpen, setIsCompetenciesOpen] = useState<boolean>(false);
  const [isSheetsModalOpen, setIsSheetsModalOpen] = useState<boolean>(false);

  // Session 1 stage navigation
  const [currentStageSession1, setCurrentStageSession1] = useState<StageIdSession1>('intro');
  const [completedStagesSession1, setCompletedStagesSession1] = useState<Record<StageIdSession1, boolean>>({
    intro: false,
    simple_prompt: false,
    context_prompt: false,
    dialogue: false,
    break: false,
    problem_choice: false,
    first_prompt: false,
    iterative_critique: false,
    trust_and_limits: false,
    deliverable: false,
  });

  // Session 2 stage navigation
  const [currentStageSession2, setCurrentStageSession2] = useState<StageIdSession2>('s2_review');
  const [completedStagesSession2, setCompletedStagesSession2] = useState<Record<StageIdSession2, boolean>>({
    s2_review: false,
    s2_weak_prompt: false,
    s2_step_builder: false,
    s2_comparison: false,
    s2_break: false,
    s2_deconstruct: false,
    s2_write_test: false,
    s2_dialogue: false,
    s2_battle_misunderstand: false,
    s2_toolbox_deliverable: false,
  });

  // Session 3 stage navigation
  const [currentStageSession3, setCurrentStageSession3] = useState<StageIdSession3>('s3_review');
  const [completedStagesSession3, setCompletedStagesSession3] = useState<Record<StageIdSession3, boolean>>({
    s3_review: false,
    s3_raw_prompt: false,
    s3_step_by_step: false,
    s3_context_injection: false,
    s3_break: false,
    s3_worksheet: false,
    s3_interactive_builder: false,
    s3_ai_inspector: false,
    s3_fiche_conversion: false,
    s3_deliverable: false,
  });

  // Session 3 Data state
  const [s3Worksheet, setS3Worksheet] = useState<Session3Worksheet>(DEFAULT_SESSION_3_WORKSHEET);
  const [s3Fiche, setS3Fiche] = useState<Session3Fiche>(DEFAULT_SESSION_3_FICHE);
  const [s3DeliverableSheetUrl, setS3DeliverableSheetUrl] = useState<string | undefined>(undefined);

  // Session 4 stage navigation
  const [currentStageSession4, setCurrentStageSession4] = useState<StageIdSession4>('s4_review');
  const [completedStagesSession4, setCompletedStagesSession4] = useState<Record<StageIdSession4, boolean>>({
    s4_review: false,
    s4_raw_prompt: false,
    s4_graduated_exercise: false,
    s4_exam_constraints: false,
    s4_ai_reviewer: false,
    s4_break: false,
    s4_participant_fiche: false,
    s4_exam_builder: false,
    s4_differentiation_challenge: false,
    s4_deliverable: false,
  });

  // Session 4 Data state
  const [s4Worksheet, setS4Worksheet] = useState<Session4ParticipantWorksheet>(DEFAULT_SESSION_4_WORKSHEET);
  const [s4Deliverable, setS4Deliverable] = useState<Session4Deliverable>(DEFAULT_SESSION_4_DELIVERABLE);
  const [s4DeliverableSheetUrl, setS4DeliverableSheetUrl] = useState<string | undefined>(undefined);

  // Session 1 interactive worksheet data
  const [worksheet, setWorksheet] = useState<TeacherWorksheet>({
    subject: 'الرياضيات',
    gradeLevel: 'السنة الأولى ثانوي',
    topic: 'الدوال الخطية والتآلفية',
    objective: 'بناء مفهوم الدالة انطلاقاً من وضعية حياتية ملموسة',
    constraints: 'مدة 50 دقيقة، قسم به 30 تلميذاً، مستويات متباينة',
    resourceType: 'exercise',
  });

  const [version1Response, setVersion1Response] = useState<string>(
    `سلسلة تمارين مقترحة حول الدوال:\n1. تمرين 1: حساب صور الأعداد 2 و 5 بالدالة f(x) = 3x - 1.\n2. تمرين 2: مثل الدالة بيانياً في معلم متعامد متجانس.\n3. تمرين 3: مسألة حول فاتورة استهلاك الماء.`
  );

  const [deliverable, setDeliverable] = useState<PedagogicalDeliverable>({
    id: `RES-${Date.now().toString().slice(-4)}`,
    teacherName: '',
    subject: 'الرياضيات',
    gradeLevel: 'السنة الأولى ثانوي',
    topic: 'الدوال الخطية والتآلفية',
    resourceType: 'تمارين متدرجة الصعوبة',
    initialPrompt: '',
    version1Content: '',
    critiquePoints: ['صعب جداً على التلامذة', 'غير مناسب للوقت المحدد'],
    refinementPrompt: '',
    finalContent: `مورد بيداغوجي منقح: وضعية استكشافية وتطبيقية في الدوال الخطية والتآلفية
الفئة المستهدفة: تلامذة 1 ثانوي (مستوى متوسط) | التوقيت الإجمالي: 50 دقيقة

المرحلة 1: وضعية الانطلاق الحياتية (12 دقيقة)
- السند: مقارنة بين عرضين لاشتراك نادي رياضي (العرض A: دفع 5 دنانير لكل حصة، العرض B: اشتراك شهري 15 ديناراً + دينارين لكل حصة).
- المهمة للأفواج: ملء جدول يحدد التكلفة حسب عدد الحصص (2، 5، 10 حصص).
- الهدف: إدراك التلميذ للفرق بين التناسبية البسيطة (الدالة الخطية) والتناسبية المصحوبة بثابت (الدالة التآلفية).

المرحلة 2: التأليف وبناء المفهوم الرياضي (18 دقيقة)
- صياغة رياضية: f(x) = 5x و g(x) = 2x + 15.
- تمثيل بياني تفاعلي مبسط على السبورة مع تحديد نقطة تقاطع المستقيمين.

المرحلة 3: تقويم تكويني سريع وملموس (15 دقيقة)
- تمرين ذاتي: أيهما أفضل لمشترك ينوي حضور 4 حصص في الشهر؟ برر إجابتك بيانياً ثم جبرياً.

المرحلة 4: بطاقة الخروج (5 دقائق)
- سؤال سريع لكل تلميذ: ميز بين الدالة الخطية والتآلفية في جملة رياضية واحدة.`,
    isVerified: true,
    verificationNotes: 'مطابق للبرنامج الرسمي للتعليم الثانوي التونسي وموزع زمنياً بدقة.',
    createdAt: new Date().toISOString(),
    sheetUrl: undefined,
  });

  // Session 2 Participant Fiche & Toolbox state
  const [s2Fiche, setS2Fiche] = useState<ParticipantFichePrompt>({
    role: 'أستاذ رياضيات في التعليم الثانوي التونسي',
    subject: 'الرياضيات',
    gradeLevel: 'السنة الثانية ثانوي (شعبة الاقتصاد والتصرف)',
    topic: 'المتتاليات الحسابية وتطبيقاتها المالية',
    objective: 'صياغة الحد العام لمتتالية حسابية وحساب مجموع حدود متتابعة في سياق واقعي ملموس',
    task: 'تصميم جذاذة حصة استكشافية وتطبيقية مدتها 55 دقيقة مع وضعية انطلاق وسلسلة تمارين متدرجة',
    publicDetails: 'تلاميذ شعبة اقتصاد وتصرف، يحتاجون إلى ربط الحسابات الرياضية بمسائل الادخار والفائدة البسيطة',
    duration: '55 دقيقة',
    classSize: '32 تلميذاً',
    language: 'العربية مع الرموز والمصطلحات الرياضية المعتمدة في تونس',
    availableTools: 'السبورة + مطبوعة ورقية موحدة + آلة حاسبة علمية',
    studentLevel: 'متوسط ومتفاوت',
    format: 'جدول زمني يوزع الأنشطة وأدوار الأستاذ والتلاميذ، يليه نص المسألة الاستكشافية وسلم التقييم',
  });

  const [s2Toolbox, setS2Toolbox] = useState<Session2ToolboxItem[]>(DEFAULT_SESSION_2_TOOLBOX);
  const [s2DeliverableSheetUrl, setS2DeliverableSheetUrl] = useState<string | undefined>(undefined);

  // Listen to Firebase Auth state on mount
  useEffect(() => {
    const unsubscribe = initAuth(
      (currentUser, token) => {
        setUser(currentUser);
        setAccessToken(token);
        if (currentUser.displayName && !deliverable.teacherName) {
          setDeliverable((prev) => ({ ...prev, teacherName: currentUser.displayName || '' }));
        }
      },
      () => {
        setUser(null);
        setAccessToken(null);
      }
    );
    return () => unsubscribe();
  }, []);

  const handleSignIn = async () => {
    setIsLoggingIn(true);
    try {
      const result = await googleSignIn();
      if (result) {
        setUser(result.user);
        setAccessToken(result.accessToken);
        if (result.user.displayName) {
          setDeliverable((prev) => ({ ...prev, teacherName: result.user.displayName || '' }));
        }
      }
    } catch (error) {
      console.error('Sign in failed:', error);
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleSignOut = async () => {
    await logout();
    setUser(null);
    setAccessToken(null);
  };

  // Active Session Metadata
  const activeSessionMeta =
    WORKSHOP_SESSIONS.find((s) => s.id === currentSession) || WORKSHOP_SESSIONS[0];

  const activeStages =
    currentSession === 'session_1'
      ? WORKSHOP_STAGES_SESSION_1
      : currentSession === 'session_2'
      ? WORKSHOP_STAGES_SESSION_2
      : currentSession === 'session_3'
      ? WORKSHOP_STAGES_SESSION_3
      : WORKSHOP_STAGES_SESSION_4;

  const currentStageId =
    currentSession === 'session_1'
      ? currentStageSession1
      : currentSession === 'session_2'
      ? currentStageSession2
      : currentSession === 'session_3'
      ? currentStageSession3
      : currentStageSession4;

  const activeCompetencies =
    currentSession === 'session_1'
      ? COMPETENCIES
      : currentSession === 'session_2'
      ? COMPETENCIES_SESSION_2
      : currentSession === 'session_3'
      ? COMPETENCIES_SESSION_3
      : COMPETENCIES_SESSION_4;

  const handleSelectStage = (stageId: string) => {
    if (currentSession === 'session_1') {
      setCurrentStageSession1(stageId as StageIdSession1);
    } else if (currentSession === 'session_2') {
      setCurrentStageSession2(stageId as StageIdSession2);
    } else if (currentSession === 'session_3') {
      setCurrentStageSession3(stageId as StageIdSession3);
    } else {
      setCurrentStageSession4(stageId as StageIdSession4);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const markCompletedAndNavigateS1 = (completedId: StageIdSession1, nextId: StageIdSession1) => {
    setCompletedStagesSession1((prev) => ({ ...prev, [completedId]: true }));
    setCurrentStageSession1(nextId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const markCompletedAndNavigateS2 = (completedId: StageIdSession2, nextId: StageIdSession2) => {
    setCompletedStagesSession2((prev) => ({ ...prev, [completedId]: true }));
    setCurrentStageSession2(nextId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const markCompletedAndNavigateS3 = (completedId: StageIdSession3, nextId: StageIdSession3) => {
    setCompletedStagesSession3((prev) => ({ ...prev, [completedId]: true }));
    setCurrentStageSession3(nextId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const markCompletedAndNavigateS4 = (completedId: StageIdSession4, nextId: StageIdSession4) => {
    setCompletedStagesSession4((prev) => ({ ...prev, [completedId]: true }));
    setCurrentStageSession4(nextId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleS3WorksheetChange = (updated: Session3Worksheet) => {
    setS3Worksheet(updated);
    setS3Fiche((prev) => ({
      ...prev,
      matiere: updated.matiere,
      niveau: updated.niveau,
      theme: updated.theme,
      duree: updated.duree,
    }));
  };

  const handleS4WorksheetChange = (updated: Session4ParticipantWorksheet) => {
    setS4Worksheet(updated);
    setS4Deliverable((prev) => ({
      ...prev,
      matiere: updated.matiere,
      niveau: updated.niveau,
      baremeTotal: updated.baremeTotal,
      objectifsEvalues: updated.objectifs,
    }));
  };

  const handleWorksheetUpdate = (updates: Partial<TeacherWorksheet>) => {
    setWorksheet((prev) => {
      const updated = { ...prev, ...updates };
      setDeliverable((d) => ({
        ...d,
        subject: updated.subject,
        gradeLevel: updated.gradeLevel,
        topic: updated.topic,
        resourceType: updated.resourceType,
      }));
      return updated;
    });
  };

  const handleReceiveInitialResponse = (prompt: string, response: string) => {
    setVersion1Response(response);
    setDeliverable((prev) => ({
      ...prev,
      initialPrompt: prompt,
      version1Content: response,
    }));
  };

  const handleUpdateFinalDeliverable = (
    critiques: string[],
    refinementPrompt: string,
    version2Response: string
  ) => {
    setDeliverable((prev) => ({
      ...prev,
      critiquePoints: critiques,
      refinementPrompt,
      finalContent: version2Response,
    }));
  };

  const handleTriggerSheetsExport = async () => {
    if (!user || !accessToken) {
      try {
        const result = await googleSignIn();
        if (result) {
          setUser(result.user);
          setAccessToken(result.accessToken);
          setIsSheetsModalOpen(true);
        }
      } catch (err) {
        console.error('Login required for sheets export:', err);
      }
    } else {
      setIsSheetsModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800 selection:bg-indigo-100 selection:text-indigo-900">
      {/* Top Header with Active Session Meta & Auth */}
      <Header
        sessionMeta={activeSessionMeta}
        user={user}
        onSignIn={handleSignIn}
        onSignOut={handleSignOut}
        isLoggingIn={isLoggingIn}
        onOpenCompetencies={() => setIsCompetenciesOpen(true)}
      />

      {/* Multi-Session Switcher & Institute 10-Session Roadmap */}
      <SessionSelector
        currentSession={currentSession}
        onSelectSession={(sessId) => {
          setCurrentSession(sessId);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* 2-Hour Timeline Stage Navigation */}
      <TimelineNav
        stages={activeStages}
        currentStage={currentStageId}
        onSelectStage={handleSelectStage}
        completedStages={
          currentSession === 'session_1'
            ? (completedStagesSession1 as any)
            : currentSession === 'session_2'
            ? (completedStagesSession2 as any)
            : currentSession === 'session_3'
            ? (completedStagesSession3 as any)
            : (completedStagesSession4 as any)
        }
      />

      {/* Main Stage View Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-8">
        {currentSession === 'session_1' ? (
          /* ================= SESSION 1 STAGES ================= */
          <>
            {currentStageSession1 === 'intro' && (
              <StageIntro onComplete={() => markCompletedAndNavigateS1('intro', 'simple_prompt')} />
            )}

            {currentStageSession1 === 'simple_prompt' && (
              <StageSimplePrompt
                onBack={() => setCurrentStageSession1('intro')}
                onComplete={() => markCompletedAndNavigateS1('simple_prompt', 'context_prompt')}
              />
            )}

            {currentStageSession1 === 'context_prompt' && (
              <StageContextPrompt
                onBack={() => setCurrentStageSession1('simple_prompt')}
                onComplete={() => markCompletedAndNavigateS1('context_prompt', 'dialogue')}
              />
            )}

            {currentStageSession1 === 'dialogue' && (
              <StageDialogue
                onBack={() => setCurrentStageSession1('context_prompt')}
                onComplete={() => markCompletedAndNavigateS1('dialogue', 'break')}
              />
            )}

            {currentStageSession1 === 'break' && (
              <StageBreak
                onBack={() => setCurrentStageSession1('dialogue')}
                onComplete={() => markCompletedAndNavigateS1('break', 'problem_choice')}
              />
            )}

            {currentStageSession1 === 'problem_choice' && (
              <StageProblemChoice
                worksheet={worksheet}
                onUpdateWorksheet={handleWorksheetUpdate}
                onBack={() => setCurrentStageSession1('break')}
                onComplete={() => markCompletedAndNavigateS1('problem_choice', 'first_prompt')}
              />
            )}

            {currentStageSession1 === 'first_prompt' && (
              <StageFirstPrompt
                worksheet={worksheet}
                onUpdateWorksheet={handleWorksheetUpdate}
                initialResponse={version1Response}
                onReceiveInitialResponse={handleReceiveInitialResponse}
                onBack={() => setCurrentStageSession1('problem_choice')}
                onComplete={() => markCompletedAndNavigateS1('first_prompt', 'iterative_critique')}
              />
            )}

            {currentStageSession1 === 'iterative_critique' && (
              <StageCritique
                worksheet={worksheet}
                version1Response={version1Response}
                savedCritiques={deliverable.critiquePoints}
                savedVersion2={deliverable.finalContent}
                onUpdateFinalDeliverable={handleUpdateFinalDeliverable}
                onBack={() => setCurrentStageSession1('first_prompt')}
                onComplete={() => markCompletedAndNavigateS1('iterative_critique', 'trust_and_limits')}
              />
            )}

            {currentStageSession1 === 'trust_and_limits' && (
              <StageTrustCheck
                onBack={() => setCurrentStageSession1('iterative_critique')}
                onComplete={() => markCompletedAndNavigateS1('trust_and_limits', 'deliverable')}
              />
            )}

            {currentStageSession1 === 'deliverable' && (
              <StageDeliverable
                deliverable={deliverable}
                onUpdateDeliverable={(updates) => setDeliverable((prev) => ({ ...prev, ...updates }))}
                user={user}
                sheetUrl={deliverable.sheetUrl}
                onTriggerSheetsExport={handleTriggerSheetsExport}
                onBack={() => setCurrentStageSession1('trust_and_limits')}
              />
            )}
          </>
        ) : currentSession === 'session_2' ? (
          /* ================= SESSION 2 STAGES ================= */
          <>
            {currentStageSession2 === 's2_review' && (
              <StageS2Review
                onComplete={() => markCompletedAndNavigateS2('s2_review', 's2_weak_prompt')}
              />
            )}

            {currentStageSession2 === 's2_weak_prompt' && (
              <StageS2WeakPrompt
                onPrev={() => setCurrentStageSession2('s2_review')}
                onComplete={() => markCompletedAndNavigateS2('s2_weak_prompt', 's2_step_builder')}
              />
            )}

            {currentStageSession2 === 's2_step_builder' && (
              <StageS2StepBuilder
                onPrev={() => setCurrentStageSession2('s2_weak_prompt')}
                onComplete={() => markCompletedAndNavigateS2('s2_step_builder', 's2_comparison')}
              />
            )}

            {currentStageSession2 === 's2_comparison' && (
              <StageS2Comparison
                onPrev={() => setCurrentStageSession2('s2_step_builder')}
                onComplete={() => markCompletedAndNavigateS2('s2_comparison', 's2_break')}
              />
            )}

            {currentStageSession2 === 's2_break' && (
              <StageS2Break
                onPrev={() => setCurrentStageSession2('s2_comparison')}
                onComplete={() => markCompletedAndNavigateS2('s2_break', 's2_deconstruct')}
              />
            )}

            {currentStageSession2 === 's2_deconstruct' && (
              <StageS2Deconstruct
                fiche={s2Fiche}
                onChangeFiche={setS2Fiche}
                onPrev={() => setCurrentStageSession2('s2_break')}
                onComplete={() => markCompletedAndNavigateS2('s2_deconstruct', 's2_write_test')}
              />
            )}

            {currentStageSession2 === 's2_write_test' && (
              <StageS2WriteTest
                fiche={s2Fiche}
                onPrev={() => setCurrentStageSession2('s2_deconstruct')}
                onComplete={() => markCompletedAndNavigateS2('s2_write_test', 's2_dialogue')}
              />
            )}

            {currentStageSession2 === 's2_dialogue' && (
              <StageS2Dialogue
                onPrev={() => setCurrentStageSession2('s2_write_test')}
                onComplete={() => markCompletedAndNavigateS2('s2_dialogue', 's2_battle_misunderstand')}
              />
            )}

            {currentStageSession2 === 's2_battle_misunderstand' && (
              <StageS2BattleMisunderstand
                onPrev={() => setCurrentStageSession2('s2_dialogue')}
                onComplete={() => markCompletedAndNavigateS2('s2_battle_misunderstand', 's2_toolbox_deliverable')}
              />
            )}

            {currentStageSession2 === 's2_toolbox_deliverable' && (
              <StageS2ToolboxDeliverable
                fiche={s2Fiche}
                toolbox={s2Toolbox}
                onChangeToolbox={setS2Toolbox}
                onOpenSheetsModal={handleTriggerSheetsExport}
                isSheetsConnected={Boolean(user && accessToken)}
                onPrev={() => setCurrentStageSession2('s2_battle_misunderstand')}
                deliverableSheetUrl={s2DeliverableSheetUrl}
              />
            )}
          </>
        ) : currentSession === 'session_3' ? (
          /* ================= SESSION 3 STAGES ================= */
          <>
            {currentStageSession3 === 's3_review' && (
              <StageS3Review
                onComplete={() => markCompletedAndNavigateS3('s3_review', 's3_raw_prompt')}
              />
            )}

            {currentStageSession3 === 's3_raw_prompt' && (
              <StageS3RawPrompt
                onPrev={() => setCurrentStageSession3('s3_review')}
                onComplete={() => markCompletedAndNavigateS3('s3_raw_prompt', 's3_step_by_step')}
              />
            )}

            {currentStageSession3 === 's3_step_by_step' && (
              <StageS3StepByStep
                onPrev={() => setCurrentStageSession3('s3_raw_prompt')}
                onComplete={() => markCompletedAndNavigateS3('s3_step_by_step', 's3_context_injection')}
              />
            )}

            {currentStageSession3 === 's3_context_injection' && (
              <StageS3ContextInjection
                onPrev={() => setCurrentStageSession3('s3_step_by_step')}
                onComplete={() => markCompletedAndNavigateS3('s3_context_injection', 's3_break')}
              />
            )}

            {currentStageSession3 === 's3_break' && (
              <StageS3Break
                onComplete={() => markCompletedAndNavigateS3('s3_break', 's3_worksheet')}
              />
            )}

            {currentStageSession3 === 's3_worksheet' && (
              <StageS3Worksheet
                worksheet={s3Worksheet}
                onChangeWorksheet={handleS3WorksheetChange}
                onComplete={() => markCompletedAndNavigateS3('s3_worksheet', 's3_interactive_builder')}
              />
            )}

            {currentStageSession3 === 's3_interactive_builder' && (
              <StageS3InteractiveBuilder
                worksheet={s3Worksheet}
                fiche={s3Fiche}
                onChangeFiche={setS3Fiche}
                onComplete={() => markCompletedAndNavigateS3('s3_interactive_builder', 's3_ai_inspector')}
              />
            )}

            {currentStageSession3 === 's3_ai_inspector' && (
              <StageS3AiInspector
                fiche={s3Fiche}
                onChangeFiche={setS3Fiche}
                onComplete={() => markCompletedAndNavigateS3('s3_ai_inspector', 's3_fiche_conversion')}
              />
            )}

            {currentStageSession3 === 's3_fiche_conversion' && (
              <StageS3FicheConversion
                fiche={s3Fiche}
                onChangeFiche={setS3Fiche}
                onComplete={() => markCompletedAndNavigateS3('s3_fiche_conversion', 's3_deliverable')}
              />
            )}

            {currentStageSession3 === 's3_deliverable' && (
              <StageS3Deliverable
                fiche={s3Fiche}
                onOpenSheetsModal={handleTriggerSheetsExport}
                sheetsExportUrl={s3DeliverableSheetUrl || null}
              />
            )}
          </>
        ) : (
          /* ================= SESSION 4 STAGES ================= */
          <>
            {currentStageSession4 === 's4_review' && (
              <StageS4Review
                onComplete={() => markCompletedAndNavigateS4('s4_review', 's4_raw_prompt')}
              />
            )}

            {currentStageSession4 === 's4_raw_prompt' && (
              <StageS4RawPrompt
                onPrev={() => setCurrentStageSession4('s4_review')}
                onComplete={() => markCompletedAndNavigateS4('s4_raw_prompt', 's4_graduated_exercise')}
              />
            )}

            {currentStageSession4 === 's4_graduated_exercise' && (
              <StageS4GraduatedExercise
                onPrev={() => setCurrentStageSession4('s4_raw_prompt')}
                onComplete={() => markCompletedAndNavigateS4('s4_graduated_exercise', 's4_exam_constraints')}
              />
            )}

            {currentStageSession4 === 's4_exam_constraints' && (
              <StageS4ExamConstraints
                onPrev={() => setCurrentStageSession4('s4_graduated_exercise')}
                onComplete={() => markCompletedAndNavigateS4('s4_exam_constraints', 's4_ai_reviewer')}
              />
            )}

            {currentStageSession4 === 's4_ai_reviewer' && (
              <StageS4AiReviewer
                onPrev={() => setCurrentStageSession4('s4_exam_constraints')}
                onComplete={() => markCompletedAndNavigateS4('s4_ai_reviewer', 's4_break')}
              />
            )}

            {currentStageSession4 === 's4_break' && (
              <StageS4Break
                onComplete={() => markCompletedAndNavigateS4('s4_break', 's4_participant_fiche')}
              />
            )}

            {currentStageSession4 === 's4_participant_fiche' && (
              <StageS4ParticipantFiche
                worksheet={s4Worksheet}
                onChangeWorksheet={handleS4WorksheetChange}
                onPrev={() => setCurrentStageSession4('s4_break')}
                onComplete={() => markCompletedAndNavigateS4('s4_participant_fiche', 's4_exam_builder')}
              />
            )}

            {currentStageSession4 === 's4_exam_builder' && (
              <StageS4ExamBuilder
                deliverable={s4Deliverable}
                onChangeDeliverable={setS4Deliverable}
                onPrev={() => setCurrentStageSession4('s4_participant_fiche')}
                onComplete={() => markCompletedAndNavigateS4('s4_exam_builder', 's4_differentiation_challenge')}
              />
            )}

            {currentStageSession4 === 's4_differentiation_challenge' && (
              <StageS4DifferentiationChallenge
                deliverable={s4Deliverable}
                onPrev={() => setCurrentStageSession4('s4_exam_builder')}
                onComplete={() => markCompletedAndNavigateS4('s4_differentiation_challenge', 's4_deliverable')}
              />
            )}

            {currentStageSession4 === 's4_deliverable' && (
              <StageS4Deliverable
                deliverable={s4Deliverable}
                onOpenSheetsModal={handleTriggerSheetsExport}
                sheetsExportUrl={s4DeliverableSheetUrl || null}
                onPrev={() => setCurrentStageSession4('s4_differentiation_challenge')}
              />
            )}
          </>
        )}
      </main>

      {/* Competencies Educational Framework Modal */}
      <CompetenciesModal
        isOpen={isCompetenciesOpen}
        onClose={() => setIsCompetenciesOpen(false)}
        sessionMeta={activeSessionMeta}
        competencies={activeCompetencies}
      />

      {/* Mandatory User Confirmation Dialog for Google Sheets creation/export */}
      <GoogleSheetsModal
        isOpen={isSheetsModalOpen}
        onClose={() => setIsSheetsModalOpen(false)}
        sessionNumber={currentSession === 'session_1' ? 1 : currentSession === 'session_2' ? 2 : currentSession === 'session_3' ? 3 : 4}
        deliverable={currentSession === 'session_1' ? deliverable : undefined}
        session2Data={
          currentSession === 'session_2'
            ? {
                subject: s2Fiche.subject,
                gradeLevel: s2Fiche.gradeLevel,
                toolbox: s2Toolbox,
              }
            : undefined
        }
        session3Data={currentSession === 'session_3' ? s3Fiche : undefined}
        session4Data={currentSession === 'session_4' ? s4Deliverable : undefined}
        accessToken={accessToken}
        userEmail={user?.email || undefined}
        onExportSuccess={(sheetUrl) => {
          if (currentSession === 'session_1') {
            setDeliverable((prev) => ({ ...prev, sheetUrl }));
          } else if (currentSession === 'session_2') {
            setS2DeliverableSheetUrl(sheetUrl);
          } else if (currentSession === 'session_3') {
            setS3DeliverableSheetUrl(sheetUrl);
          } else {
            setS4DeliverableSheetUrl(sheetUrl);
          }
        }}
      />
    </div>
  );
}
