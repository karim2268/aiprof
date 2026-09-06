export type SessionId = 'session_1' | 'session_2';

export interface SessionMeta {
  id: SessionId;
  sessionNumber: number;
  title: string;
  subtitle: string;
  titleAr: string;
  titleFr: string;
  duration: string;
  focus: string;
  nature: string;
  targetAudience: string;
  generalObjective: string;
  primaryTool: string;
  secondaryTool?: string;
  status: 'active' | 'completed' | 'upcoming';
  stageCount: number;
}

export type StageIdSession1 =
  | 'intro'
  | 'simple_prompt'
  | 'context_prompt'
  | 'dialogue'
  | 'break'
  | 'problem_choice'
  | 'first_prompt'
  | 'iterative_critique'
  | 'trust_and_limits'
  | 'deliverable';

export type StageIdSession2 =
  | 's2_review'
  | 's2_weak_prompt'
  | 's2_step_builder'
  | 's2_comparison'
  | 's2_break'
  | 's2_deconstruct'
  | 's2_write_test'
  | 's2_dialogue'
  | 's2_battle_misunderstand'
  | 's2_toolbox_deliverable';

export type StageId = StageIdSession1 | StageIdSession2;

export interface StageInfo {
  id: StageId;
  timeRange: string;
  durationMinutes: number;
  title: string;
  subtitle: string;
  competencyCode?: 'C1' | 'C2' | 'C3' | 'C4' | 'C5' | 'C6';
  keyTakeaway: string;
}

export type WorkshopStage = StageInfo;

export interface Competency {
  code: 'C1' | 'C2' | 'C3' | 'C4' | 'C5' | 'C6';
  title: string;
  description: string;
  indicator?: string;
  subItems?: string[];
}

export interface TeacherWorksheet {
  subject: string;
  customSubject?: string;
  gradeLevel: string;
  topic: string;
  objective: string;
  constraints: string;
  resourceType: 'activity' | 'exercise' | 'qcm' | 'problem_situation' | 'summary' | 'questions' | 'lesson_plan';
  customResourceType?: string;
}

export interface IterationStep {
  id: string;
  instruction: string;
  prompt: string;
  response: string;
  improvementGoal: string;
}

export interface PedagogicalDeliverable {
  id: string;
  teacherName?: string;
  subject: string;
  gradeLevel: string;
  topic: string;
  resourceType: string;
  initialPrompt: string;
  version1Content: string;
  critiquePoints: string[];
  refinementPrompt: string;
  finalContent: string;
  isVerified: boolean;
  verificationNotes: string;
  createdAt: string;
  sheetUrl?: string;
  spreadsheetId?: string;
}

export interface VerificationChallenge {
  id: string;
  subject: string;
  topic: string;
  aiOutputSnippet: string;
  subtleError: string;
  explanation: string;
  consequenceIfBelieved: string;
  correctPedagogicalFact: string;
}

// Session 2 specific types
export interface ParticipantFichePrompt {
  task: string;
  role: string;
  customRole?: string;
  subject: string;
  gradeLevel: string;
  topic: string;
  objective: string;
  publicDetails: string;
  duration: string;
  classSize: string;
  language: string;
  availableTools: string;
  studentLevel: string;
  format: string;
  customFormat?: string;
}

export interface Session2ToolboxItem {
  id: string;
  category: 'lesson_prep' | 'exercise_gen' | 'question_set' | 'simplification' | 'review_refine';
  categoryLabel: string;
  title: string;
  promptText: string;
  usageTips: string;
  isCustomized?: boolean;
}

export interface Session2Deliverable {
  id: string;
  teacherName?: string;
  subject: string;
  gradeLevel: string;
  fiche: ParticipantFichePrompt;
  generatedPrompt: string;
  toolboxPrompts: Session2ToolboxItem[];
  betweenSessionsTask: string;
  isVerified: boolean;
  createdAt: string;
  sheetUrl?: string;
  spreadsheetId?: string;
}
