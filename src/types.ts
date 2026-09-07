export type SessionId = 'session_1' | 'session_2' | 'session_3' | 'session_4';

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

export type StageIdSession3 =
  | 's3_review'
  | 's3_raw_prompt'
  | 's3_step_by_step'
  | 's3_context_injection'
  | 's3_break'
  | 's3_worksheet'
  | 's3_interactive_builder'
  | 's3_ai_inspector'
  | 's3_fiche_conversion'
  | 's3_deliverable';

export type StageIdSession4 =
  | 's4_review'
  | 's4_raw_prompt'
  | 's4_graduated_exercise'
  | 's4_exam_constraints'
  | 's4_ai_reviewer'
  | 's4_break'
  | 's4_participant_fiche'
  | 's4_exam_builder'
  | 's4_differentiation_challenge'
  | 's4_deliverable';

export type StageId = StageIdSession1 | StageIdSession2 | StageIdSession3 | StageIdSession4;

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

// Session 3 Specific Interfaces
export interface Session3LessonRow {
  id: string;
  time: string;
  phase: string;
  teacherRole: string;
  studentRole: string;
  activity: string;
  materials: string;
  evaluation: string;
}

export interface Session3Worksheet {
  // 1. Mon cours
  matiere: string;
  niveau: string;
  theme: string;
  duree: string;
  // 2. Mes élèves
  niveauGeneral: 'Faible' | 'Moyen' | 'Bon' | 'Hétérogène';
  nombreEleves: string | number;
  difficultesParticulieres: string;
  // 3. Mes contraintes
  materielDisponible: string[]; // 'Tableau', 'PC', 'Vidéoprojecteur', 'Smartphone', 'Documents imprimés', 'Internet', 'Autre'
  autreMateriel?: string;
  // 4. Ce que je demande à l'IA
  demandeIA: {
    objectifs: string;
    situationDepart: string;
    activite: string;
    evaluation: string;
  };
  // 5. Je vérifie
  verification: {
    objectifsPertinents: boolean;
    contenuCorrect: boolean;
    niveauAdapte: boolean;
    tempsRealiste: boolean;
    activiteRealisable: boolean;
    elevesActifs: boolean;
    evaluationCorrespond: boolean;
  };
}

export interface Session3AiInspectorReview {
  pointsForts: string[];
  pointsFaibles: string[];
  elementsIrrealistes: string[];
  ameliorationsConseillees: string[];
  teacherDecisions: {
    accept: string[];
    reject: string[];
    justification: string;
  };
}

export interface Session3Fiche {
  id: string;
  teacherName?: string;
  matiere: string;
  niveau: string;
  theme: string;
  duree: string;
  objectifs: string[];
  prerequis: string[];
  situationDepart: string;
  deroulement: Session3LessonRow[];
  synthese: string;
  evaluationFinale: string;
  inspectorReview: Session3AiInspectorReview;
  betweenSessionsTask: {
    action: string;
    questions: string[];
  };
  isVerified: boolean;
  createdAt: string;
  sheetUrl?: string;
  spreadsheetId?: string;
}

// ==========================================
// SESSION 4: CRÉER DES EXERCICES ET ÉVALUATIONS
// ==========================================

export interface Session4PromptToolboxItem {
  id: string;
  category: string;
  title: string;
  prompt: string;
  purpose: string;
}

export interface Session4VerificationRow {
  id?: string;
  numero: number;
  question: string;
  objectif: string;
  difficulte: 'Facile' | 'Moyenne' | 'Difficile';
  tempsEstime: string;
  bareme: string;
  isAppropriate: boolean;
}

export interface Session4ParticipantWorksheet {
  // ① Mes objectifs
  matiere: string;
  niveau: string;
  theme: string;
  objectifs: string[];
  // ② Mes contraintes
  dureeMinutes: number;
  nombreEleves: string | number;
  baremeTotal: number;
  materielAutorise: string;
  niveauGeneral: 'Faible' | 'Moyen' | 'Bon' | 'Hétérogène';
  // ③ Type d'évaluation
  typesChoisis: string[];
  // ④ Je vérifie le résultat
  verificationRows: Session4VerificationRow[];
  // ⑤ AI Review
  aiReview: {
    estEquilibre: boolean;
    questionsAmbigues: string;
    tempsRealiste: boolean;
    alignementObjectifs: boolean;
  };
}

export interface Session4ExerciseItem {
  id: string;
  numero: number;
  titre: string;
  type: string; // QCM, Vrai/Faux, Application, Problème, Réflexion, Situation complexe
  objectif: string;
  difficulte: 'Facile' | 'Moyenne' | 'Difficile' | 'Progressif';
  points: number;
  tempsEstime: string;
  enonce: string;
  baremeDetaille: string;
  corrigeDetaille: string;
  reponseAttendue?: string;
  differentiation: {
    simplifiee: string; // تلميذ يواجه صعوبات
    standard: string;   // تلميذ عادي
    defi: string;       // تلميذ متفوق
  };
  piegesEtErreursCourantes?: string;
}

export interface Session4AiReviewerReport {
  questionsAmbigues: string[];
  erreursPotentielles: string[];
  questionsRepetitives: string[];
  desequilibreDifficulte: string;
  nonConformiteObjectifs: string[];
  realismeTemporel: string;
  recommandations: string[];
  decisionEnseignant: {
    modificationsAcceptees: string[];
    modificationsRejetees: string[];
    justification: string;
  };
}

export interface Session4Deliverable {
  id: string;
  teacherName?: string;
  matiere: string;
  niveau: string;
  titreEvaluation: string;
  duree: string;
  baremeTotal: number;
  consignesGenerales: string;
  objectifsEvalues: string[];
  exercices: Session4ExerciseItem[];
  baremeExplication: string;
  aiReviewReport: Session4AiReviewerReport;
  missionEntreSessions: {
    action: string;
    description: string;
    etapes: string[];
  };
  isVerified: boolean;
  createdAt: string;
  sheetUrl?: string;
  spreadsheetId?: string;
}


