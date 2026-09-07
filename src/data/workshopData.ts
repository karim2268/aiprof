import {
  StageInfo,
  Competency,
  VerificationChallenge,
  SessionMeta,
  Session2ToolboxItem,
  Session3Worksheet,
  Session3Fiche,
  Session3LessonRow,
  Session3AiInspectorReview,
  Session4PromptToolboxItem,
  Session4ParticipantWorksheet,
  Session4Deliverable,
  Session4ExerciseItem,
  Session4VerificationRow,
} from '../types';

export const WORKSHOP_SESSIONS: SessionMeta[] = [
  {
    id: 'session_1',
    sessionNumber: 1,
    title: 'De la curiosité à la première expérience',
    subtitle: 'من الفضول إلى التجربة الأولى: كسر الحاجز النفسي وأول مهمة بيداغوجية',
    titleAr: 'من الفضول إلى التجربة الأولى',
    titleFr: 'De la curiosité à la première expérience',
    duration: 'ساعتان (120 دقيقة)',
    focus: '90% تطبيقي • كسر الخوف • بناء سياق • فحص النتيجة',
    nature: '90% تطبيقي',
    targetAudience: 'أساتذة جميع الاختصاصات (مبتدئ)',
    generalObjective:
      'في نهاية الحصة، يكون الأستاذ قد جرّب بنفسه استعمال الذكاء الاصطناعي لإنجاز مهمة بيداغوجية حقيقية، وفهم أن القيمة ليست في "طرح سؤال على ChatGPT"، وإنما في الحوار معه وتوجيهه ومراجعة نتائجه.',
    primaryTool: 'ChatGPT / Gemini',
    status: 'completed',
    stageCount: 10,
  },
  {
    id: 'session_2',
    sessionNumber: 2,
    title: 'كيفاش نحكي مع الـAI باش يفهمني؟',
    subtitle: 'Du simple prompt au dialogue pédagogique: بناء الـPrompt الفعال وتطويره بالحوار',
    titleAr: 'كيفاش نحكي مع الـAI باش يفهمني؟',
    titleFr: 'Du simple prompt au dialogue pédagogique',
    duration: 'ساعتان (120 دقيقة)',
    focus: 'تطبيقي جدًا • نموذج RÔLE + CONTEXTE + TÂCHE + PUBLIC + CONTRAINTES + FORMAT',
    nature: 'تطبيقي جدًا',
    targetAudience: 'أساتذة جميع الاختصاصات بالمعهد',
    generalObjective:
      'تمكين الأستاذ من الانتقال من استعمال AI بطريقة عشوائية ("اعمللي درس على...") إلى استعماله من خلال طلب واضح، سياقي، قابل للتعديل، ثم تطوير النتيجة عبر الحوار. فكرة الحصة: Prompt جيد ≠ إجابة سحرية من أول محاولة، بل قاعدة انطلاق لحوار بيداغوجي ذكي.',
    primaryTool: 'ChatGPT (الأساسي)',
    secondaryTool: 'Gemini (مقارنة اختيارية)',
    status: 'completed',
    stageCount: 10,
  },
  {
    id: 'session_3',
    sessionNumber: 3,
    title: 'Préparer un cours avec l’IA',
    subtitle: 'De l’idée à une séance pédagogique prête à l’emploi: من الفكرة إلى حصة بيداغوجية جاهزة للاستعمال',
    titleAr: 'تحضير درس كامل مع AI',
    titleFr: 'Préparer un cours avec l’IA',
    duration: 'ساعتان (120 دقيقة)',
    focus: '90% تطبيقي • الأستاذ مصمم بيداغوجي وAI مساعد • جذاذة كاملة جاهزة للاستعمال',
    nature: '90% تطبيقي',
    targetAudience: 'أساتذة جميع الاختصاصات بالمعهد',
    generalObjective:
      'تمكين الأستاذ من استعمال AI كمساعد في تصميم وتحضير حصة كاملة، مع المحافظة على دوره كصاحب القرار البيداغوجي. الفكرة ليست: "AI حضّرلي درس"، بل: "AI يساعدني نفكر في الحصة، نقترح، نجرّب، نراجع، ونطوّر".',
    primaryTool: 'ChatGPT (الأساسي)',
    secondaryTool: 'Gemini (مقارنة اختيارية)',
    status: 'completed',
    stageCount: 10,
  },
  {
    id: 'session_4',
    sessionNumber: 4,
    title: 'Créer des exercices et des évaluations avec l’IA',
    subtitle: 'De l’idée à une évaluation cohérente et personnalisée: من الفكرة إلى تقييم متماسك ومخصص',
    titleAr: 'إنشاء التمارين والتقييمات مع AI',
    titleFr: 'Créer des exercices et des évaluations avec l’IA',
    duration: 'ساعتان (120 دقيقة)',
    focus: '90% تطبيقي • Objectif → Question → Exercice → Évaluation → Corrigé → Vérification',
    nature: '90% تطبيقي',
    targetAudience: 'أساتذة جميع الاختصاصات بالمعهد',
    generalObjective:
      'تمكين الأستاذ من استعمال AI في مختلف مراحل بناء التقييم: Objectif → Question → Exercice → Évaluation → Corrigé → Vérification → Amélioration، وليس فقط "اعمللي 10 أسئلة". AI لا يصنع التقييم مكان الأستاذ؛ AI يساعد الأستاذ على بناء بنك أسئلة، تنويعها، مراجعتها وتكييفها.',
    primaryTool: 'ChatGPT (الأساسي)',
    secondaryTool: 'Gemini (مقارنة عند الحاجة)',
    status: 'active',
    stageCount: 10,
  },
];

export const UPCOMING_SESSIONS = [
  {
    number: 5,
    title: 'Différenciation pédagogique avec l’IA',
    subtitle: 'تكييف الموارد للتلاميذ ذوي صعوبات التعلم والمستويات المتباينة',
  },
  {
    number: 6,
    title: 'Générer des visuels et supports pédagogiques',
    subtitle: 'توليد الرسوم التوضيحية والخطاطات الذهنية والجداول',
  },
  {
    number: 7,
    title: 'L’IA pour le feedback et l’évaluation des copies',
    subtitle: 'تحليل أخطاء التلاميذ وصياغة تغذية راجعة بيداغوجية مشجعة',
  },
  {
    number: 8,
    title: 'Éthique, intégrité et esprit critique des élèves',
    subtitle: 'تأطير استعمال التلاميذ للذكاء الاصطناعي وتجنب الغش',
  },
  {
    number: 9,
    title: 'Automatiser les tâches administratives de l’enseignant',
    subtitle: 'إعداد المذكرات، بطاقات المتابعة، والتقارير في دقائق',
  },
  {
    number: 10,
    title: 'Mon Chef-d’œuvre Pédagogique IA',
    subtitle: 'عرض المشاريع الفردية وتثبيت صندوق الأدوات الشامل',
  },
];

export const COMPETENCIES_SESSION_1: Competency[] = [
  {
    code: 'C1',
    title: 'استعمال أداة AI',
    description: 'فتح واستعمال ChatGPT أو Gemini لإنجاز مهمة تعليمية حقيقية.',
    indicator: 'تسجيل الدخول، إدخال طلب، واستلام إجابة بيداغوجية.',
  },
  {
    code: 'C2',
    title: 'إعطاء سياق (Contextualiser)',
    description: 'تقديم معلومات أساسية ومحددة: المادة، المستوى، الموضوع، والهدف البيداغوجي.',
    indicator: 'صياغة Prompt غني بالسياق يتضمن القيود والجمهور المستهدف.',
  },
  {
    code: 'C3',
    title: 'تقييم الإجابة (Évaluer)',
    description: 'طرح الأسئلة النقدية: هل الإجابة صحيحة؟ هل تناسب تلامذتي؟ هل تطابق البرنامج؟',
    indicator: 'تحديد نقاط الضعف ونواقص المقترح الأول بدقة.',
  },
  {
    code: 'C4',
    title: 'الحوار مع AI (Dialoguer)',
    description: 'عدم الاكتفاء بالإجابة الأولى: Demander → Observer → Corriger → Améliorer.',
    indicator: 'إجراء جولتين على الأقل من الحوار التعديلي والتوجيه المستمر.',
  },
  {
    code: 'C5',
    title: 'فهم حدود AI (Vérifier)',
    description: 'إدراك أن AI مساعد وليس مرجعاً نهائياً، والتحقق الدائم من سلامة المحتوى.',
    indicator: 'رصد الأخطاء المحتملة واعتماد الأمانة العلمية والبيداغوجية.',
  },
];

export const COMPETENCIES_SESSION_2: Competency[] = [
  {
    code: 'C1',
    title: 'تحديد المهمة (Tâche)',
    description: 'أن يعرف الأستاذ بالضبط ماذا يريد من الذكاء الاصطناعي وصياغة الهدف المحدد.',
    indicator: 'تحديد فعل إجرائي دقيق (أنشئ، حضّر، صمّم، بسّط، لخّص).',
  },
  {
    code: 'C2',
    title: 'إعطاء السياق (Contexte)',
    description: 'تحديد: المادة، المستوى الدراسي، الموضوع، الهدف التعلمي، الوقت، ومستوى التلامذة.',
    indicator: 'إدماج كافة محددات البيئة المدرسية التونسية في نص الـPrompt.',
  },
  {
    code: 'C3',
    title: 'تحديد القيود (Contraintes)',
    description: 'تأطير العمل: 50 دقيقة، 30 تلميذاً، مستوى متوسط، دون إنترنت، بالعربية مع المصطلحات الفرنسية...',
    indicator: 'حصر المخرجات بشروط واقعية مانعة للإسهاب أو الخروج عن الإطار.',
  },
  {
    code: 'C4',
    title: 'تحديد شكل النتيجة (Format)',
    description: 'تحديد الهيئة المطلوبة: جدول، خطوات، أسئلة، QCM، بطاقة بيداغوجية، نص، أو عرض.',
    indicator: 'طلب تنظيم بصري مهيكل (جدول بالأزمنة والأدوار والوسائل).',
  },
  {
    code: 'C5',
    title: 'تحسين الـPrompt (Amélioration)',
    description: 'المقارنة الدورية: Prompt 1 → النتيجة → تحليل → Prompt 2 → نتيجة أفضل وأدق.',
    indicator: 'التدرج من البسيط إلى المعقد وعدم التوقف عند الصياغة الأولى.',
  },
  {
    code: 'C6',
    title: 'إدارة الحوار (Follow-up Prompts)',
    description: 'استعمال أسئلة المتابعة لتطوير وتوجيه النتيجة بدل إعادة البداية من الصفر كل مرة.',
    indicator: 'استخدام أوامر التعديل: بسّط، تعمّق، قيّد، أضف تلميحات، حوّل إلى جدول.',
  },
];

export const COMPETENCIES_SESSION_3: Competency[] = [
  {
    code: 'C1',
    title: 'تحويل البرنامج إلى أهداف (Objectifs & Prérequis)',
    description: 'إعطاء AI موضوع الدرس والسياق وطلب مساعدته في تحديد: أهداف التعلم (قابلة للقياس)، المكتسبات القبلية، والكفاءات المستهدفة.',
    indicator: 'صياغة 3 إلى 4 أهداف إجرائية محددة ومقاسة مرتبطة بالبرنامج الرسمي.',
    subItems: ['Objectifs d’apprentissage', 'Prérequis indispensables', 'Compétences visées'],
  },
  {
    code: 'C2',
    title: 'بناء سيناريو الحصة (Scénario pédagogique)',
    description: 'استعمال AI لاقتراح: وضعية انطلاق مشكلة، أنشطة استكشافية، أسئلة توجيهية، خطة تركيب المفهوم، وتقويم تكويني.',
    indicator: 'هيكلة سيناريو صفي متسلسل منطقياً يجعل التلميذ نشطاً وفاعلاً.',
    subItems: ['Situation de départ', 'Activités d’exploration', 'Questions guides', 'Synthèse & Évaluation'],
  },
  {
    code: 'C3',
    title: 'تكييف الحصة مع القيود (Différenciation & Contraintes)',
    description: 'تعديل المقترح حسب: المستوى الحقيقي للتلامذة، الزمن المتاح، عدد التلامذة (مثلاً 32)، والوسائل المتوفرة (سبورة ووثائق فقط).',
    indicator: 'إعادة تكييف الأنشطة لتعمل في ظل غياب التكنولوجيا أو وجود تفاوت في مستويات المتعلمين.',
    subItems: ['المستوى الحقيقي والتمايز', 'إكراهات الزمن والعدد', 'الوسائل المادية المتاحة'],
  },
  {
    code: 'C4',
    title: 'نقد إنتاج AI ومراجعة الجاهزية (AI Reviewer Mode)',
    description: 'اكتشاف: أنشطة غير قابلة للتطبيق، أهداف غير مناسبة، محتوى زائد، أخطاء معرفية، أو عدم واقعية في التوقيت والوسائل.',
    indicator: 'رصد الثغرات البيداغوجية واستعمال دور "المفتش التربوي" لفحص السيناريو قبل اعتماده.',
    subItems: ['نشاط غير واقعي أو مفرط الطول', 'أهداف عامة لا تحقق التعلم', 'فحص الدقة العلمية والمعرفية'],
  },
  {
    code: 'C5',
    title: 'إنتاج جذاذة التحضير (Fiche de préparation)',
    description: 'تحويل مخرجات الحوار البيداغوجي إلى جدول حصة منظم وقابل للاستعمال الفوري في القسم، مع حفظه وتصديره.',
    indicator: 'إخراج جذاذة كاملة بجدول زمني يوزع الأدوار والأنشطة والوسائل وأساليب التقويم.',
    subItems: ['جدول زمني بالأدوار والوسائط', 'منتوج بيداغوجي كامل وجاهز', 'تصدير رقمي منظم'],
  },
];

export const COMPETENCIES_SESSION_4: Competency[] = [
  {
    code: 'C1',
    title: 'صياغة أهداف التقييم (Définir l’évaluation)',
    description: 'الانطلاق من أهداف التعلم لتحديد: شنوة نحب نقيس بالضبط؟ ما نوع الأسئلة المناسبة؟ ما مستوى الصعوبة المطلوب؟',
    indicator: 'ربط كل سؤال أو تمرين بهدف تعلمي دقيق وقابل للقياس، دون البدء العشوائي من السؤال.',
    subItems: ['Définition des objectifs mesurables', 'Choix des formats adaptés', 'Niveau de difficulté ciblé'],
  },
  {
    code: 'C2',
    title: 'توليد تمارين متنوعة (Générer des exercices variés)',
    description: 'استعمال AI لاقتراح: تمارين تطبيق مباشر، وضعيات إشكالية، أسئلة تفكير، وأسئلة QCM مع مشتتات ذكية (Distracteurs).',
    indicator: 'بناء سلسلة تمارين متدرجة من البسيط المباشر إلى المركب دون توليد الحل فوراً.',
    subItems: ['Application directe', 'Situation concrète / problème', 'Questions de réflexion & Distracteurs'],
  },
  {
    code: 'C3',
    title: 'بناء اختبار متماسك (Structurer une évaluation)',
    description: 'تجميع التمارين في اختبار متكامل: تدرج الصعوبة، احترام التوقيت، وضوح التعليمات، وتوزيع النقاط (Barème).',
    indicator: 'إعداد موضوع اختبار رسمي متوازن وموزع زمنياً بسلم تنقيط مبرر وعناصر إجابة نموذجية.',
    subItems: ['Gestion du temps (45-60 min)', 'Barème justifié sur 20', 'Consignes claires et non équivoques'],
  },
  {
    code: 'C4',
    title: 'مراجعة ونقد التقييم (Critiquer avec l’IA - Reviewer)',
    description: 'استعمال AI كمراجع تربوي لاكتشاف: أسئلة غامضة، أسئلة تقيس الحفظ فقط، خلل في التوقيت، أو سلم غير عادل.',
    indicator: 'تشغيل دور المراجع التربوي الصارم والتحليل الذاتي لفحص التقييم قبل اعتماده.',
    subItems: ['Détection d’ambiguïtés', 'Équilibre des difficultés', 'Vérification du timing et barème'],
  },
  {
    code: 'C5',
    title: 'تكييف التقييم والتمايز (Différenciation)',
    description: 'توليد نسخ ميسرة أو متقدمة لنفس التمرين لمراعاة الفروق الفردية بين التلاميذ في نفس القسم.',
    indicator: 'صياغة 3 مسارات لنفس الهدف: ميسرة (دعم)، قياسية، وتحدي (Défi للمتفوقين).',
    subItems: ['Version soutien / guidée', 'Version standard', 'Version défi / approfondissement'],
  },
  {
    code: 'C6',
    title: 'تدقيق الحلول وسلم التنقيط (Vérifier le corrigé)',
    description: 'مراجعة دقيقة للحلول التي يقترحها AI والتأكد من صحتها العلمية وخلوها من الهلوسة والأخطاء قبل تقديمها للتلاميذ.',
    indicator: 'رصد وتصحيح أي خطأ علمي أو حسابي في عناصر الإجابة المقترحة وتأكيد مسؤولية الأستاذ المعرفية.',
    subItems: ['Vérification d’exactitude', 'Détection d’hallucinations', 'Validation du barème de notation'],
  },
];

// Alias for backward compatibility
export const COMPETENCIES = COMPETENCIES_SESSION_1;

export const WORKSHOP_STAGES_SESSION_1: StageInfo[] = [
  {
    id: 'intro',
    timeRange: '00:00 → 00:10',
    durationMinutes: 10,
    title: 'افتتاحية: شنوة ينجم يعمل AI للأستاذ؟',
    subtitle: 'عصف ذهني حول المهام اليومية الأكثر استهلاكاً للوقت',
    keyTakeaway: 'الذكاء الاصطناعي أداة مساعدة لتوفير الوقت في المهام الروتينية والتحضيرية.',
  },
  {
    id: 'simple_prompt',
    timeRange: '00:10 → 00:20',
    durationMinutes: 10,
    title: 'التجربة الأولى: Prompt بسيط جدًا',
    subtitle: '«حضّرلي درس حول الاحتباس الحراري...» وقراءة النتيجة ونقدها',
    competencyCode: 'C1',
    keyTakeaway: 'AI لا يقرأ أفكارنا، والنتيجة السطحية هي انعكاس مباشر للطلب السطحي.',
  },
  {
    id: 'context_prompt',
    timeRange: '00:20 → 00:35',
    durationMinutes: 15,
    title: 'التجربة الثانية: نعطيه السياق',
    subtitle: 'نفس المهمة مع تفاصيل المادة، التوقيت، المستوى، والوضعية المشكلة',
    competencyCode: 'C2',
    keyTakeaway: 'كلما زاد وضوح السياق والقيود، زادت جودة الإجابة وقابليتها للتطبيق في القسم.',
  },
  {
    id: 'dialogue',
    timeRange: '00:35 → 00:50',
    durationMinutes: 15,
    title: 'التجربة الثالثة: فن الحوار مع AI',
    subtitle: 'AI ليس Google: Demander → Observer → Corriger → Améliorer',
    competencyCode: 'C4',
    keyTakeaway: 'مع Google نبحث ونجد، ومع AI نطلب ونناقش ونصحح ونطور.',
  },
  {
    id: 'break',
    timeRange: '00:50 → 01:00',
    durationMinutes: 10,
    title: 'استراحة قصيرة وتحدي التفكير ☕',
    subtitle: 'فكر في درس واحد من مادتك ستعمل عليه في الجزء التطبيقي',
    keyTakeaway: 'اختيار حاجة حقيقية من صميم عملك اليومي.',
  },
  {
    id: 'problem_choice',
    timeRange: '01:00 → 01:10',
    durationMinutes: 10,
    title: 'النشاط العملي 1: اختار مشكلتك',
    subtitle: 'كل أستاذ يحدد مهمة حقيقية يحتاجها فعلياً هذا الأسبوع',
    competencyCode: 'C2',
    keyTakeaway: 'القاعدة: لا تختار موضوعاً خيالياً، اختر حاجة تحتاجها فعلاً.',
  },
  {
    id: 'first_prompt',
    timeRange: '01:10 → 01:30',
    durationMinutes: 20,
    title: 'النشاط العملي 2: أول Prompt شخصي',
    subtitle: 'تعبئة ورقة العمل: Ma première demande à l’IA',
    competencyCode: 'C1',
    keyTakeaway: 'بناء Prompt منظم ومحكم يمثل 80% من نجاح النتيجة.',
  },
  {
    id: 'iterative_critique',
    timeRange: '01:30 → 01:45',
    durationMinutes: 15,
    title: 'النشاط العملي 3: لا تقبل الإجابة الأولى!',
    subtitle: 'مصفوفة النقد البيداغوجي ومقارنة Version 1 مع Version 2',
    competencyCode: 'C3',
    keyTakeaway: 'قوة الأستاذ تكمن في نظرته النقدية لتوجيه الذكاء الاصطناعي نحو الأفضل.',
  },
  {
    id: 'trust_and_limits',
    timeRange: '01:45 → 01:55',
    durationMinutes: 10,
    title: 'لحظة حاسمة: هل نثق في AI؟',
    subtitle: '⚠️ Toujours vérifier: اكتشاف الأخطاء والهلوسة والأمانة العلمية',
    competencyCode: 'C5',
    keyTakeaway: 'AI مساعد، وليس مرجعاً نهائياً. الأستاذ هو المسؤول الوحيد عما يقدمه للتلميذ.',
  },
  {
    id: 'deliverable',
    timeRange: '01:55 → 02:00',
    durationMinutes: 5,
    title: 'الخروج بمنتوج بيداغوجي معتمد',
    subtitle: 'توثيق المورد النهائي وتصديره مباشرة إلى Google Sheets',
    competencyCode: 'C4',
    keyTakeaway: 'كل أستاذ يغادر الورشة وبيده مورد بيداغوجي جاهز للقسم تم إنشاؤه بالحوار والمراجعة.',
  },
];

export const WORKSHOP_STAGES_SESSION_2: StageInfo[] = [
  {
    id: 's2_review',
    timeRange: '00:00 → 00:10',
    durationMinutes: 10,
    title: 'رجوع إلى الحصة الأولى وتجميع المشاكل',
    subtitle: 'شكون جرّب AI منذ الحصة الفارطة؟ وشنوة المشاكل اللي ظهرت على السبورة؟',
    keyTakeaway: 'المشاكل الشائعة ليست عيباً في الأداة، بل هي نتيجة غياب السياق والوضوح في الطلب.',
  },
  {
    id: 's2_weak_prompt',
    timeRange: '00:10 → 00:25',
    durationMinutes: 15,
    title: 'التجربة 1: فحص الـPrompt الضعيف',
    subtitle: '«حضّرلي درس عن الطاقة الشمسية» وتحليل شنوة ينقص AI باش يفهمنا',
    competencyCode: 'C1',
    keyTakeaway: 'الـPrompt الغامض يعطي إجابة عامة غير صالحة لأي قسم واقعي.',
  },
  {
    id: 's2_step_builder',
    timeRange: '00:25 → 00:40',
    durationMinutes: 15,
    title: 'التجربة 2: نبني الـPrompt معًا بالتدريج',
    subtitle: 'تطبيق النموذج: Rôle + Tâche + Public + Contraintes + Format خطوة بخطوة',
    competencyCode: 'C2',
    keyTakeaway: 'بناء الـPrompt يشبه إعطاء تعليمات واضحة لمساعد ذكي لا يقرأ النوايا.',
  },
  {
    id: 's2_comparison',
    timeRange: '00:40 → 00:50',
    durationMinutes: 10,
    title: 'المقارنة الحاسمة: Prompt A مقابل Prompt B',
    subtitle: 'Prompt جيد ≠ Prompt طويل... بل Prompt واضح يعطي AI ما يحتاجه للمهمة',
    competencyCode: 'C5',
    keyTakeaway: 'الفارق الجوهري ليس في عدد الكلمات، بل في كمية الدقة البيداغوجية والقيود المحددة.',
  },
  {
    id: 's2_break',
    timeRange: '00:50 → 01:00',
    durationMinutes: 10,
    title: 'استراحة وتحدي التفكير الذهني ☕',
    subtitle: 'تحدي ما بعد الاستراحة: كل أستاذ سيبني الـPrompt المثالي لمهمة حقيقية',
    keyTakeaway: 'استجمع فكرة حقيقية من صلب تحضيرك لهذا الأسبوع.',
  },
  {
    id: 's2_deconstruct',
    timeRange: '01:00 → 01:15',
    durationMinutes: 15,
    title: 'النشاط 1: فكك المهمة البيداغوجية',
    subtitle: 'تعبئة Fiche participant: المهمة، الدور، السياق، الجمهور، القيود، والشكل',
    competencyCode: 'C3',
    keyTakeaway: 'خريطة ذهنية سداسية تنظم طلبك وتمنحك تحكماً كاملاً في مخرجات الذكاء الاصطناعي.',
  },
  {
    id: 's2_write_test',
    timeRange: '01:15 → 01:30',
    durationMinutes: 15,
    title: 'النشاط 2: اكتب الـPrompt وجربه في الأداة',
    subtitle: 'قاعدة ذهبية: ممنوع الاكتفاء بالنتيجة الأولى! ابدأ بسيطاً ثم أضف ما ينقصك',
    competencyCode: 'C5',
    keyTakeaway: 'المسار البيداغوجي الفعال: Prompt → Résultat → Analyse → Amélioration.',
  },
  {
    id: 's2_dialogue',
    timeRange: '01:30 → 01:45',
    durationMinutes: 15,
    title: 'النشاط 3: الحوار الذكي (Follow-up Prompts)',
    subtitle: 'مكتبة الأسئلة الموجهة: للتبسيط، للتعمق، للتعديل، للتنظيم، ولإضافة التفكير',
    competencyCode: 'C6',
    keyTakeaway: 'لا تبدأ المحادثة من الصفر كل مرة؛ أعد توجيه الذكاء الاصطناعي في نفس الحوار.',
  },
  {
    id: 's2_battle_misunderstand',
    timeRange: '01:45 → 01:55',
    durationMinutes: 10,
    title: 'تحدي «Prompt Battle» ونشاط «AI فهمني غلط»',
    subtitle: 'مقارنة صياغات الفرق لنفس المهمة + تحليل كيف يفهم AI الطلب الغامض',
    competencyCode: 'C4',
    keyTakeaway: 'التواصل مع AI يشبه التواصل مع شخص ذكي لكنه لا يعرف السياق المضمر في رأسك.',
  },
  {
    id: 's2_toolbox_deliverable',
    timeRange: '01:55 → 02:00',
    durationMinutes: 5,
    title: 'المنتوج الإجباري: Mon AI Teacher Toolbox',
    subtitle: '5 Prompts شخصية جاهزة في صندوق الأدوات + تصدير إلى Google Sheets',
    competencyCode: 'C1',
    keyTakeaway: 'كل أستاذ يغادر بحقيبة أدوات عملية جاهزة للتوظيف الفوري بين الحصتين.',
  },
];

export const WORKSHOP_STAGES_SESSION_3: StageInfo[] = [
  {
    id: 's3_review',
    timeRange: '00:00 → 00:10',
    durationMinutes: 10,
    title: 'الرجوع إلى التجربة السابقة (Reality Check)',
    subtitle: 'شنوة عملتوا بالـAI منذ الحصة الثانية؟ وعرض نماذج وتحديات الميدان',
    competencyCode: 'C4',
    keyTakeaway: 'النتيجة الأولى لـ AI نادراً ما تكون جاهزة للاستعمال مباشرة؛ الحوار هو جوهر التحضير.',
  },
  {
    id: 's3_raw_prompt',
    timeRange: '00:10 → 00:25',
    durationMinutes: 15,
    title: 'تجربة الصدمة: «حضّرلي درس» الخام',
    subtitle: '«حضّرلي درسًا حول التحولات الكيميائية» واكتشاف وهم الإجابة السحرية',
    competencyCode: 'C4',
    keyTakeaway: 'AI يعطينا "محتوى"، لكنه لا يعطينا بالضرورة "تجربة تعلم جيدة".',
  },
  {
    id: 's3_step_by_step',
    timeRange: '00:25 → 00:45',
    durationMinutes: 20,
    title: 'نبني الحصة خطوة بخطوة (Workflow)',
    subtitle: 'الأهداف ← الوضعية الانطلاقية ← النشاط الاستكشافي ← التقويم التكويني',
    competencyCode: 'C1',
    keyTakeaway: 'تقسيم عملية التصميم إلى 4 محطات بيداغوجية يجعل المخرجات متماسكة ودقيقة.',
  },
  {
    id: 's3_context_injection',
    timeRange: '00:45 → 00:55',
    durationMinutes: 10,
    title: 'لحظة الحقيقة: «هل AI يعرف قسمي؟»',
    subtitle: 'حقن واقع القسم: 32 تلميذاً، مستوى متوسط، لا حاسوب، سبورة وأوراق فقط',
    competencyCode: 'C3',
    keyTakeaway: 'السياق يصنع الفارق! بدون قيودك الواقعية ستحصل على سيناريو خيالي غير قابل للتطبيق.',
  },
  {
    id: 's3_break',
    timeRange: '00:55 → 01:05',
    durationMinutes: 10,
    title: 'استراحة وتأمل بيداغوجي عميق ☕',
    subtitle: 'Préparer avec l’IA vs Faire préparer par l’IA: الأستاذ مصمم وAI مساعد',
    competencyCode: 'C4',
    keyTakeaway: 'الأولى هي الهدف، والثانية هي الخطر. "AI اقترح وأنا اخترت وعدّلت".',
  },
  {
    id: 's3_worksheet',
    timeRange: '01:05 → 01:20',
    durationMinutes: 15,
    title: 'النشاط العملي 1: ورقة عمل الأستاذ',
    subtitle: 'CONSTRUIRE MA SÉANCE AVEC L’IA: تحديد درس حقيقي وإكراهات القسم السبعة',
    competencyCode: 'C1',
    keyTakeaway: 'لا تبدأ مع AI دون أن تحدد في ورقتك أهدافك وجمهورك ووسائلك.',
  },
  {
    id: 's3_interactive_builder',
    timeRange: '01:20 → 01:40',
    durationMinutes: 20,
    title: 'النشاط العملي 2: بناء الحصة بالحوار',
    subtitle: 'Workflow تطبيقي كامل من 6 خطوات: أهداف، وضعية، نشاط، تكييف، أسئلة، وتقويم',
    competencyCode: 'C2',
    keyTakeaway: 'الحوار المتدرج يمنحك السيطرة الكاملة على كل دقيقة من دقائق الحصة.',
  },
  {
    id: 's3_ai_inspector',
    timeRange: '01:40 → 01:50',
    durationMinutes: 10,
    title: 'النشاط العملي 3: AI ينتقد الحصة (المفتش)',
    subtitle: '«تصرف كمفتش تربوي وراجع هذا السيناريو...»: رصد نقاط الضعف وغير الواقعي',
    competencyCode: 'C4',
    keyTakeaway: 'استعمال AI كـ Reviewer ومراجع نقدي صارم يكشف الثغرات قبل دخول القسم.',
  },
  {
    id: 's3_fiche_conversion',
    timeRange: '01:50 → 01:57',
    durationMinutes: 7,
    title: 'تحويل الحوار إلى Fiche de préparation',
    subtitle: 'صياغة جدول الحصة الموزع: الزمن | دور الأستاذ | دور التلميذ | النشاط | الوسائل',
    competencyCode: 'C5',
    keyTakeaway: 'تنظيم الحوار في جذاذة رسمية أنيقة يجعل الحصة جاهزة فورياً للتنفيذ الصفي.',
  },
  {
    id: 's3_deliverable',
    timeRange: '01:57 → 02:00',
    durationMinutes: 3,
    title: 'المنتوج الإجباري ومهمة ما بين الحصتين',
    subtitle: 'جذاذة كاملة + تصدير Google Sheets + مهمة التجريب الصفي وتدوين الملاحظات',
    competencyCode: 'C5',
    keyTakeaway: 'الـAI ينجم يقترحلك حصة... أما إنت وحدك تعرف قسمك وتلامذتك.',
  },
];

export const WORKSHOP_STAGES_SESSION_4: StageInfo[] = [
  {
    id: 's4_review',
    timeRange: '00:00 → 00:10',
    durationMinutes: 10,
    title: 'الرجوع إلى الحصة الثالثة وتغذية راجعة صفية',
    subtitle: 'شكون جرّب الحصة أو النشاط في القسم؟ وشنوة اكتشفتوا أن AI ما يعرفوش على قسمكم؟',
    competencyCode: 'C1',
    keyTakeaway: 'الواقع الميداني والخبرة الصفية هي البوصلة؛ AI يجهل عادات تلامذتك ومستواهم الحقيقي.',
  },
  {
    id: 's4_raw_prompt',
    timeRange: '00:10 → 00:25',
    durationMinutes: 15,
    title: 'تجربة الصدمة: «اعمللي 10 تمارين»',
    subtitle: '«اعمللي 10 تمارين حول النسب المئوية للسنة التاسعة» ونقد العيوب الصامتة',
    competencyCode: 'C1',
    keyTakeaway: 'المشكل موش في قدرة AI على توليد الأسئلة، بل هل تقيس ما نريد قياسه فعلاً؟',
  },
  {
    id: 's4_graduated_exercise',
    timeRange: '00:25 → 00:40',
    durationMinutes: 15,
    title: 'نبني تمرينًا بطريقة أفضل: الانطلاق من الهدف',
    subtitle: 'تحديد الهدف والمستوى وبناء 4 تمارين متدرجة (مباشر، حياتي، مركب، تفكير) دون حلول فورية',
    competencyCode: 'C2',
    keyTakeaway: 'لا نبدأ من السؤال؛ نبدأ من الهدف. هذا هو الفارق الجوهري بين التوليد العشوائي والتصميم البيداغوجي.',
  },
  {
    id: 's4_exam_constraints',
    timeRange: '00:40 → 00:50',
    durationMinutes: 10,
    title: 'من «تمارين مبعثرة» إلى «اختبار متكامل»',
    subtitle: 'حقن القيود الواقعية: 45 دقيقة، 20 نقطة، تغطية الأهداف، وتوزيع النقاط مع التبرير',
    competencyCode: 'C4',
    keyTakeaway: 'القيود الحقيقية (الوقت، الباريم، العدد) هي التي تحوّل الأسئلة إلى اختبار متوازن وواقعي.',
  },
  {
    id: 's4_ai_reviewer',
    timeRange: '00:50 → 01:00',
    durationMinutes: 10,
    title: 'AI كمراجع تربوي صارم (Reviewer Mode)',
    subtitle: 'تحليل الاختبار واكتشاف: الغموض، التكرار، الأخطاء، اختلال الصعوبة، وواقعية التوقيت',
    competencyCode: 'C5',
    keyTakeaway: 'التحول الثلاثي لـ AI: من مولّد (Generator) إلى مراجع (Reviewer) ثم مساعد (Assistant).',
  },
  {
    id: 's4_break',
    timeRange: '01:00 → 01:10',
    durationMinutes: 10,
    title: 'استراحة وتأمل بيداغوجي عميق ☕',
    subtitle: 'L’IA peut générer des questions. L’enseignant construit l’évaluation.',
    keyTakeaway: 'AI يمكن أن يولد أسئلة لا نهائية، لكن الأستاذ وحده هو من يبني تقييماً ذا معنى.',
  },
  {
    id: 's4_participant_fiche',
    timeRange: '01:10 → 01:25',
    durationMinutes: 15,
    title: 'النشاط 1 — Fiche participant: بناء تمرين شخصي',
    subtitle: 'بطاقة المشارك: تحديد الهدف بدقة، المستوى، نوع السؤال، ومستوى الصعوبة المطلوب',
    competencyCode: 'C3',
    keyTakeaway: 'كلما كان الهدف الإجرائي ونوع السؤال محدداً، جاء التمرين مصوباً نحو المهارة المنشودة.',
  },
  {
    id: 's4_exam_builder',
    timeRange: '01:25 → 01:40',
    durationMinutes: 15,
    title: 'النشاط 2 — إنشاء اختبار كامل مع التحليل الذاتي',
    subtitle: 'بناء موضوع اختبار متكامل + طلب التحليل الذاتي: «Analyse ton propre sujet»',
    competencyCode: 'C4',
    keyTakeaway: 'لا تأخذ النتيجة كما هي؛ اطلب منه نقد موضوعه واقتراح التعديلات الضرورية فقط.',
  },
  {
    id: 's4_differentiation_challenge',
    timeRange: '01:40 → 01:57',
    durationMinutes: 17,
    title: 'النشاط 3 وتحدي التصحيح: التمايز وفحص الـCorrigé',
    subtitle: 'نفس الهدف في 3 مسارات (دعم / عادي / تحدي) + فحص أخطاء وهلوسات الـCorrigé',
    competencyCode: 'C6',
    keyTakeaway: 'حتى الحلول وسلالم التنقيط التي يولدها الذكاء الاصطناعي يجب أن تخضع للتدقيق العلمي الصارم.',
  },
  {
    id: 's4_deliverable',
    timeRange: '01:57 → 02:00',
    durationMinutes: 3,
    title: 'المنتوج الإجباري ومهمة ما بين الحصتين',
    subtitle: 'Une évaluation prête à être retravaillée + مكتبة Prompts + تصدير إلى Google Sheets',
    competencyCode: 'C1',
    keyTakeaway: 'الفرض الباهي موش اللي فيه برشة أسئلة... الفرض الباهي هو اللي يقيس بالضبط شنوّة نحب نعرف.',
  },
];

// Default stages backward compatibility
export const WORKSHOP_STAGES = WORKSHOP_STAGES_SESSION_1;

// Session 2 Interactive Data Sets
export const SESSION_2_REVIEW_PROBLEMS = [
  {
    id: 'p1',
    problem: 'أعطاني إجابة عامة ومجردة',
    cause: 'غياب السياق والمستوى الدراسي المحدد',
    solution: 'حدد المستوى (مثلاً: 1 ثانوي تونس) والمفهوم بدقة.',
  },
  {
    id: 'p2',
    problem: 'لم يفهمني وخرج عن الموضوع',
    cause: 'الطلب كان غامضاً أو يحتمل عدة معانٍ في الذاكرة',
    solution: 'حدد الدور والمهمة بفعل إجرائي صريح (أنشئ وضعية مشكلة).',
  },
  {
    id: 'p3',
    problem: 'الإجابة طويلة جداً وتملأ صفحات',
    cause: 'لم نحدد قيود الحجم وشكل الإخراج',
    solution: 'اطلب الحجم: "في صفحة واحدة قابلة للطباعة" أو "جدول مختصر".',
  },
  {
    id: 'p4',
    problem: 'المستوى صعيب على التلامذة',
    cause: 'افتراض الذكاء الاصطناعي لمستوى أكاديمي جامعي افتراضي',
    solution: 'صف جمهورك: "تلامذة مستوى متوسط، قسم به 30 تلميذاً".',
  },
  {
    id: 'p5',
    problem: 'أعطاني معلومات غالطة أو مشوهة',
    cause: 'الهلوسة وتلفيق التواريخ والمعادلات لملء الفراغ',
    solution: 'قاعدة Toujours vérifier ومطابقة المحتوى مع المنهاج الرسمي.',
  },
  {
    id: 'p6',
    problem: 'طلبت تمرينًا وأعطاني شيئًا روتينياً لا يعجبني',
    cause: 'الاعتماد على إجابة وحيدة دون ممارسة الحوار التعديلي',
    solution: 'استعمل Follow-up prompts للتعديل: أضف تلميحات، تدرج، أو سياقاً حياتياً.',
  },
];

export const SESSION_2_PROMPT_BUILDER_STEPS = [
  {
    stepNumber: 1,
    component: 'RÔLE (الدور)',
    addition: 'أنت أستاذ علوم في التعليم الثانوي التونسي.',
    purpose: 'تثبيت الشخصية والمنظومة التربوية التونسية',
  },
  {
    stepNumber: 2,
    component: 'TÂCHE (المهمة)',
    addition: 'أريد إعداد حصة حول الطاقة الشمسية.',
    purpose: 'تحديد العمل المطلوب بدقة',
  },
  {
    stepNumber: 3,
    component: 'PUBLIC (الجمهور المستهدف)',
    addition: 'لفائدة تلامذة السنة الأولى ثانوي.',
    purpose: 'ضبط الفئة العمرية والمعارف السابقة',
  },
  {
    stepNumber: 4,
    component: 'NIVEAU (مستوى القسم)',
    addition: 'مستوى متوسط.',
    purpose: 'معايرة درجة الصعوبة وصياغة الأنشطة',
  },
  {
    stepNumber: 5,
    component: 'CONTRAINTE TEMPS (قيد الوقت)',
    addition: 'مدة الحصة 55 دقيقة.',
    purpose: 'توزيع التوقيت الواقعي على مراحل الحصة',
  },
  {
    stepNumber: 6,
    component: 'OBJECTIF (الهدف التعلمي)',
    addition: 'الهدف هو فهم مبدأ تحويل الطاقة الشمسية إلى طاقة كهربائية.',
    purpose: 'توجيه الذكاء الاصطناعي نحو الكفاءة المستهدفة',
  },
  {
    stepNumber: 7,
    component: 'STRUCTURE (الهيكل البيداغوجي)',
    addition: 'أريد أن تبدأ الحصة بوضعية مشكلة، ثم نشاطًا جماعيًا، ثم خلاصة وتقويمًا قصيرًا.',
    purpose: 'ضمان التمشي البيداغوجي النشيط',
  },
  {
    stepNumber: 8,
    component: 'FORMAT (شكل النتيجة)',
    addition: 'قدم النتيجة في شكل جدول يوضح الزمن، دور الأستاذ، دور التلميذ، والوسائل التعليمية.',
    purpose: 'الحصول على جذاذة بيداغوجية مهيكلة فوراً للقسم',
  },
];

export const SESSION_2_FOLLOWUP_PROMPTS = [
  {
    id: 'f1',
    category: 'للتبسيط',
    title: 'تبسيط للمستوى المتوسط',
    prompt: 'بسّط هذا النشاط ليصبح مناسبًا لتلامذة مستوى متوسط في التعليم الأساسي/الثانوي، واستعمل لغة سهلة ومباشرة.',
    exampleContext: 'عندما تكون المفاهيم شديدة التعقيد أو الشرح مجرداً.',
  },
  {
    id: 'f2',
    category: 'للتعمق',
    title: 'تحدي وإثراء',
    prompt: 'اجعل النشاط أكثر تحديًا لتلامذة متفوقين دون تغيير الهدف البيداغوجي، وأضف سؤال تفكير نقدي.',
    exampleContext: 'لتمايز التعلم ودعم التلاميذ السريعين في القسم.',
  },
  {
    id: 'f3',
    category: 'للتعديل',
    title: 'التطبيق في قسم مكتظ',
    prompt: 'أعد صياغة النشاط ليكون قابلاً للتطبيق العملي في قسم يضم 35 تلميذًا مع العمل في مجموعات رباعية وبأقل قدر من الفوضى.',
    exampleContext: 'لتكييف خطة الدرس مع واقع القاعات التونسية.',
  },
  {
    id: 'f4',
    category: 'لإضافة التفكير',
    title: 'تقديم تلميحات بدل الحل',
    prompt: 'لا تعطِ الإجابة للتلميذ مباشرة، بل أضف 3 تلميحات بيداغوجية متدرجة تقود التلميذ لاكتشاف الحل بنفسه.',
    exampleContext: 'لتحفيز الاستقصاء والمحاولة المستقلة.',
  },
  {
    id: 'f5',
    category: 'للمراجعة',
    title: 'التدقيق والبحث عن العيوب',
    prompt: 'راجع إجابتك السابقة بنظرة متفقد بيداغوجي، وابحث عن الأخطاء المحتملة أو النقاط غير الواضحة ثم صححها.',
    exampleContext: 'استغلال قدرة الذكاء الاصطناعي على النقد الذاتي.',
  },
  {
    id: 'f6',
    category: 'للتنظيم',
    title: 'تحويل إلى جدول زمني',
    prompt: 'حوّل النتيجة كاملة إلى جدول منظم يتضمن: التوقيت، المرحلة، دور الأستاذ، دور التلميذ، ومؤشر النجاح.',
    exampleContext: 'للحصول على شكل بصري منظم قابل للإدراج في الجذاذة.',
  },
  {
    id: 'f7',
    category: 'للتقليص',
    title: 'اختصار في صفحة طباعة',
    prompt: 'اختصر هذا المحتوى بدقة في صفحة A4 واحدة موجزة يمكن طباعتها وتوزيعها مباشرة على التلاميذ.',
    exampleContext: 'لتوفير الورق وتقديم مطبوعة مركزة دون حشو.',
  },
];

export const SESSION_2_PROMPT_BATTLES = [
  {
    id: 'battle_1',
    taskTitle: 'مهمة التحدي: أنشئ نشاطاً لتلامذة السنة الثانية ثانوي حول موضوع الطاقة / المتتاليات / البلاغة',
    promptTeamA: {
      team: 'المجموعة A (طلب سطحي)',
      prompt: 'اعمللي تمرين في مادة الرياضيات حول المتتاليات الحسابية لتلامذة 2 ثانوي.',
      aiOutputSummary: 'تمارين نمطية حسابية مباشرة، بدون سياق حياتي، بدون تدرج في الصعوبة، وحلول جافة.',
      score: '5/10',
      flaws: 'غياب التدرج، إهمال وقت الحصة، وانعدام الوضعية التحفيزية.',
    },
    promptTeamB: {
      team: 'المجموعة B (طلب مهيكل بنموذج الورشة)',
      prompt: 'أنت أستاذ رياضيات بالتعليم التونسي. صمم نشاطاً استكشافياً لمدة 20 دقيقة لتلامذة 2 ثانوي (اقتصاد وتصرف) لبناء مفهوم المتتالية الحسابية انطلاقاً من مسألة حياتية واقعية (ادخار شهري بمبلغ ثابت). أريد النشاط مقسماً إلى: السند، الأسئلة المتدرجة (ملاحظة، تخمين، صياغة القانون العام)، وسلم تقييم سريع في جدول.',
      aiOutputSummary: 'نشاط استكشافي مشوق يربط الرياضيات بالحياة اليومية، متدرج الخطوات، محدد بالدقيقة، ومرفق بسلم تنقيط جاهز.',
      score: '9.5/10',
      flaws: 'لا توجد؛ مطابق تماماً لمتطلبات القسم وتوجيهات البرامج الرسمية.',
    },
  },
];

export const SESSION_2_MISUNDERSTAND_EXAMPLE = {
  ambiguousPrompt: 'أعطني تمريناً سريعاً في التاريخ عن الحرب.',
  howAiUnderstoodIt: 'قد يفترض الحرب العالمية الثانية، أو حرب طروادة، أو حرب الاستقلال الأمريكية، أو حرب أوكرانيا، ويعطيك نصاً جامعياً بالإنجليزية أو الفرنسية مع أسئلة مقالية مطولة تستغرق ساعتين!',
  pedagogicalLesson: 'التواصل مع AI يشبه التواصل مع شخص ذكي وملمّ بالمكتبات العالمية، لكنه لا يعرف ما يدور في ذهنك ولا في أي سنة دراسية يدرس تلامذتك إذا لم تخبره أنت صراحةً!',
};

export const DEFAULT_SESSION_2_TOOLBOX: Session2ToolboxItem[] = [
  {
    id: 'tool_1',
    category: 'lesson_prep',
    categoryLabel: '1. تحضير درس',
    title: 'Prompt إعداد جذاذة درس كاملة',
    promptText: 'أنت أستاذ [المادة] في التعليم الثانوي التونسي. صمم جذاذة بيداغوجية لحصة [الموضوع] مدتها 55 دقيقة لتلامذة [المستوى الدراسي] (مستوى متوسط). أريد أن تبدأ الحصة بوضعية مشكلة مشوقة، تليها أنشطة تفاعلية للأفواج، ثم حوصلة وتقويم تكويني مدته 10 دقائق. قدم المخرجات في جدول يوضح التوقيت، دور الأستاذ، دور التلميذ، والوسائل.',
    usageTips: 'استبدل المتغيرات بين معقوفتين بالمادة والمستوى والهدف الحقيقي لحصتك القادمة.',
  },
  {
    id: 'tool_2',
    category: 'exercise_gen',
    categoryLabel: '2. إنشاء تمارين',
    title: 'Prompt توليد تمارين متدرجة الصعوبة',
    promptText: 'أنشئ 3 تمارين متدرجة الصعوبة حول [الموضوع البيداغوجي] لتلامذة [المستوى الدراسي]: تمرين 1 للتطبيق المباشر للمكتسبات (سهل)، تمرين 2 للإدماج وتوظيف القواعد في سياق جديد (متوسط)، وتمرين 3 مسألة مركبة لقياس الكفاءة (تحدٍ). مع إرفاق كل تمرين بإصلاح مفصل مع سلم تقديري للنقاط.',
    usageTips: 'ممتاز لإعداد أوراق الأنشطة المنزلية أو الفروض التأليفية والمراقبة.',
  },
  {
    id: 'tool_3',
    category: 'question_set',
    categoryLabel: '3. إعداد أسئلة',
    title: 'Prompt أسئلة تقويم تكويني سريع (QCM / بطاقة خروج)',
    promptText: 'صغ 5 أسئلة تقويم تكويني (QCM) حول [الموضوع] لتلامذة [المستوى]. لكل سؤال 4 خيارات مع إجابة صحيحة واحدة و3 مشتتات ذكية تعكس الأخطاء الشائعة للتلاميذ. واشرح لماذا قد يختار التلميذ كل خيار خاطئ لتوظيفها في العلاج البيداغوجي.',
    usageTips: 'يساعدك على اكتشاف التصورات الخاطئة (Misconceptions) لدى التلاميذ في 5 دقائق.',
  },
  {
    id: 'tool_4',
    category: 'simplification',
    categoryLabel: '4. تبسيط محتوى',
    title: 'Prompt تبسيط مفهوم معقد مع تشبيه ملموس',
    promptText: 'اشرح مفهوم [المفهوم الصعب] بطريقة مبسطة جداً لتلميذ عمره [العمر/المستوى] يجد صعوبة في الفهم النظري. استخدم تشبيهاً ملموساً من الحياة اليومية التونسية وقصة قصيرة، وتجنب المصطلحات المعقدة دون الإخلال بالدقة العلمية.',
    usageTips: 'حل سحري لدعم التلاميذ المتعثرين وإعداد كبسولات الدعم والتدارك.',
  },
  {
    id: 'tool_5',
    category: 'review_refine',
    categoryLabel: '5. مراجعة وتحسين مورد',
    title: 'Prompt نقد وتجويد وثيقة بيداغوجية سابقة',
    promptText: 'إليك هذا التمرين/المورد البيداغوجي الذي أعددته: "[الصق النص هنا]". بصفتك متفقداً بيداغوجياً خبيراً، انقد هذا المورد من حيث: 1) سلامة الصياغة اللغوية، 2) ملاءمة التوقيت، 3) صعوبة الأسئلة. ثم اقترح نسخة محسنة وأكثر جاذبية وتحفيزاً للتلميذ.',
    usageTips: 'ضعه دائماً كـ Follow-up prompt لتحسين أي ورقة عمل قبل طباعتها.',
  },
];


export const SUBJECT_PRESETS = [
  {
    subject: 'الرياضيات',
    defaultGrade: 'السنة الأولى ثانوي',
    sampleTopic: 'الدوال الخطية والتآلفية',
    sampleObjective: 'بناء مفهوم الدالة انطلاقاً من وضعية حياتية ملموسة',
    sampleConstraints: 'مدة 50 دقيقة، قسم به 30 تلميذاً، مستويات متباينة',
    type: 'exercise',
  },
  {
    subject: 'اللغة العربية',
    defaultGrade: 'السنة الثانية ثانوي',
    sampleTopic: 'أساليب البلاغة: الاستعارة والتشبيه',
    sampleObjective: 'تمييز الاستعارة عن التشبيه وتحليل أثرها الجمالي في بيت شعري',
    sampleConstraints: 'نصوص من الشعر التونسي أو العربي القديم، نشاط ثنائي',
    type: 'activity',
  },
  {
    subject: 'علوم الحياة والأرض',
    defaultGrade: 'السنة الثالثة ثانوي',
    sampleTopic: 'الانقسام الخيطي المتساوي وتضاعف ADN',
    sampleObjective: 'رسم مراحل الانقسام واستنتاج الحفاظ على الصيغة الصبغية',
    sampleConstraints: 'قسم علمي، اعتماد وثائق ورسوم تخطيطية',
    type: 'problem_situation',
  },
  {
    subject: 'التاريخ والجغرافيا',
    defaultGrade: 'السنة الرابعة ثانوي (بكالوريا)',
    sampleTopic: 'الحرب العالمية الثانية: الأسباب والنتائج الجيوسياسية',
    sampleObjective: 'تحليل خريطة تاريخية لاستنتاج التغيرات الحدودية بعد 1945',
    sampleConstraints: 'التحضير للامتحان الوطني، 55 دقيقة',
    type: 'problem_situation',
  },
  {
    subject: 'الفرنسية (Français)',
    defaultGrade: '1ère année secondaire',
    sampleTopic: 'La nouvelle réaliste (Guy de Maupassant)',
    sampleObjective: 'Identifier les caractéristiques du réalisme à travers un extrait court',
    sampleConstraints: 'Classe hétérogène, travail en îlots de 4 élèves, 45 minutes',
    type: 'activity',
  },
  {
    subject: 'الفيزياء والكيمياء',
    defaultGrade: 'السنة الأولى ثانوي',
    sampleTopic: 'الدارة الكهربائية البسيطة وقوانين شدة التيار',
    sampleObjective: 'تطبيق قانون العقد في دارة متفرعة',
    sampleConstraints: 'تجارب تطبيقية افتراضية، تدرج من البسيط إلى المركب',
    type: 'exercise',
  },
  {
    subject: 'الإعلامية (Informatique)',
    defaultGrade: 'السنة الثانية علوم الإعلامية',
    sampleTopic: 'الخوارزميات وهياكل التكرار (Boucles)',
    sampleObjective: 'كتابة خوارزمية لحساب المجموع باستخدام Pour و Tant que',
    sampleConstraints: 'تطبيق عملي على لغة Python، 50 دقيقة',
    type: 'exercise',
  },
  {
    subject: 'الفلسفة',
    defaultGrade: 'السنة الرابعة ثانوي (آداب)',
    sampleTopic: 'الخصوصية والكونية',
    sampleObjective: 'أشكلة مفهوم الهوية الثقافية في ظل العولمة',
    sampleConstraints: 'نص فلسفي قصير مع أسئلة مرافقة للتفكيك والتحليل',
    type: 'questions',
  },
];

export const INITIAL_BRAINSTORM_ITEMS = [
  { id: '1', title: 'تحضير الدرس وجذاذة النشاط', votes: 14 },
  { id: '2', title: 'إعداد الفروض والامتحانات', votes: 19 },
  { id: '3', title: 'تصحيح أوراق التلامذة والملاحظات', votes: 22 },
  { id: '4', title: 'البحث عن تمارين متدرجة الصعوبة', votes: 16 },
  { id: '5', title: 'إعداد عروض تقديمية ووثائق مصورة', votes: 11 },
  { id: '6', title: 'تبسيط مفهوم معقد لتلامذة ضعاف', votes: 15 },
  { id: '7', title: 'ابتكار وضعية مشكلة مشوقة كبداية للحصة', votes: 17 },
  { id: '8', title: 'تكييف الدرس لتلامذة ذوي صعوبات تعلم', votes: 13 },
];

export const VERIFICATION_CHALLENGES: VerificationChallenge[] = [
  {
    id: 'history_tunisia',
    subject: 'التاريخ',
    topic: 'تاريخ تونس المعاصر',
    aiOutputSnippet:
      '«...أعلنت الجمهورية التونسية رسمياً وألغي النظام الملكي في 20 مارس 1956 برئاسة الحبيب بورقيبة...»',
    subtleError: 'الخلط بين تاريخ الاستقلال وتاريخ إعلان الجمهورية.',
    explanation:
      '20 مارس 1956 هو تاريخ الاستقلال، بينما إعلان الجمهورية كان في 25 جويلية 1957. الذكاء الاصطناعي يدمج الأحداث القريبة تاريخياً بسهولة دون تنبيه!',
    consequenceIfBelieved: 'تقديم تاريخ خاطئ في الامتحان أو الدرس الوطني يضلل التلميذ.',
    correctPedagogicalFact:
      'الاستقلال: 20 مارس 1956 | إعلان الجمهورية وإلغاء الملكية: 25 جويلية 1957.',
  },
  {
    id: 'science_mitosis',
    subject: 'علوم الحياة والأرض',
    topic: 'الانقسام الخيطي المتساوي',
    aiOutputSnippet:
      '«خلال الطور الانفصالي (Anaphase) تنقسم الصبغيات المضاعفة وتنتقل كروماتيدات كل صبغي نحو نفس القطب من الخلية...»',
    subtleError: 'ادعاء انتقال الكروماتيدات نحو نفس القطب!',
    explanation:
      'في الطور الانفصالي، تنفصل كروماتيدتا كل صبغي وتهاجر كل واحدة منهما نحو قطبين متقابلين متعاكسين، وليس نحو نفس القطب.',
    consequenceIfBelieved: 'تشويه المفهوم العلمي البيولوجي الأساسي لكيفية انقسام الخلية والحفاظ على عدد الصبغيات.',
    correctPedagogicalFact: 'تتحرك الكروماتيدات نحو قطبين متقابلين متعاكسين للخلية بفعل خيوط المغزل اللاوني.',
  },
  {
    id: 'arabic_grammar',
    subject: 'اللغة العربية',
    topic: 'إعراب الممنوع من الصرف',
    aiOutputSnippet:
      '«في الجملة "صليتُ في مساجدَ المدينةِ"، كلمة "مساجدَ" مجرورة بالفتحة نيابة عن الكسرة لأنها ممنوعة من الصرف على صيغة منتهى الجموع.»',
    subtleError: 'تطبيق حكم المنع من الصرف رغم الإضافة!',
    explanation:
      'الممنوع من الصرف إذا أُضيف (مساجد المدينة) أو عُرّف بـ "الـ" فإنه يُجرّ بالكسرة الظاهرة الأصلية، ولا يجر بالفتحة.',
    consequenceIfBelieved: 'تدريس قاعدة نحوية مغلوطة للتلاميذ في مناظرة وطنية.',
    correctPedagogicalFact: 'الممنوع من الصرف يجر بالكسرة الظاهرة إذا كان مضافاً أو معرفاً بـ (الـ).',
  },
  {
    id: 'math_limits',
    subject: 'الرياضيات',
    topic: 'مفهوم النهايات والقسمة على صفر',
    aiOutputSnippet:
      '«بما أن الدالة f(x) = 1/x عند اقتراب x من 0 تعطي قيمة غير محددة، فإن نهاية f(x) عندما يؤول x إلى 0 تساوي دائماً +∞.»',
    subtleError: 'تجاهل إشارة الصفر (0+ مقابل 0-) وتوحيد النهاية إلى +∞ خطأً!',
    explanation:
      'النهاية على اليمين تؤول إلى +∞، بينما النهاية على اليسار تؤول إلى -∞، وبالتالي النهاية عند 0 غير موجودة دون تحديد جهة الاقتراب.',
    consequenceIfBelieved: 'خطأ رياضي فادح يربك التلاميذ في حساب الدوال والنهايات.',
    correctPedagogicalFact: 'lim (1/x) عندما x -> 0+ هي +∞، وعندما x -> 0- هي -∞، والنهاية العامة غير معرّفة.',
  },
];

// ==========================================
// SESSION 3 INTERACTIVE DATA & PEDAGOGY
// ==========================================

export const SESSION_3_RAW_PROMPT_EXPERIMENT = {
  rawPrompt: 'حضّرلي درسًا حول التحولات الكيميائية للسنة الثالثة ثانوي',
  rawAiOutput: `خطة درس: التحولات الكيميائية
المستوى: السنة الثالثة ثانوي
المدة: 50 دقيقة

1. المقدمة (10 دقائق):
يقوم الأستاذ بتعريف التفاعل الكيميائي ويشرح الفرق بين التحول السريع والتحول البطيء.

2. العرض النظري (25 دقيقة):
- شرح مفهوم كمية المادة وجدول التقدم.
- كتابة معادلة أكسدة-إرجاع وشرح العوامل الحركية (درجة الحرارة، التراكيز).
- حل تمرين تطبيقي على السبورة.

3. الخاتمة والتقويم (15 دقيقة):
سؤال التلاميذ شفوياً وتوزيع ورقة تمارين للواجب المنزلي.`,
  critiquePoints: [
    {
      criterion: 'وضوح الأهداف',
      status: 'fail',
      note: 'أهداف عامة جداً وغامضة: ماذا سيتعلم التلميذ بالضبط؟ أي كفاءة مستهدفة؟',
    },
    {
      criterion: 'دور التلميذ (النشاط)',
      status: 'fail',
      note: 'التلميذ سلبي 100% (يستمع للأستاذ فقط). لا وجود لوضعية مشكلة أو استكشاف ذاتي!',
    },
    {
      criterion: 'واقعية الزمن',
      status: 'fail',
      note: '25 دقيقة لشرح جدول التقدم والأكسدة-إرجاع وحل تمرين معقد؟ مستحيل إنجازه في الواقع!',
    },
    {
      criterion: 'التقويم التكويني',
      status: 'fail',
      note: 'مجرد "سؤال شفوي وتمارين للمنزل" دون أداة واضحة لقياس مدى فهم كل متعلم.',
    },
  ],
  coreTakeaway: 'AI أعطانا محتوى نظرياً، لكنه لم يعطنا بالضرورة تجربة تعلم جيدة أو سيناريو صفياً قابلاً للحياة!',
};

export const SESSION_3_WORKFLOW_STEPS = [
  {
    stepNumber: 1,
    title: 'المرحلة 1: تحديد الأهداف (Objectifs & Prérequis)',
    pedagogicalGoal: '3 إلى 4 أهداف قابلة للملاحظة والقياس ومربوطة بالمعارف السابقة',
    promptTemplate: `المادة: [المادة]
المستوى: [المستوى الدراسي]
الموضوع: [موضوع الدرس]

ساعدني في تحديد:
1. المكتسبات القبلية الضرورية التي يحتاجها التلميذ قبل هذا الدرس.
2. 3 إلى 4 أهداف تعليمية واضحة ومحددة وقابلة للملاحظة والقياس (تستعمل أفعالاً إجرائية مثل: يفسر، يقارن، يحسب، يستنتج).
3. الصعوبات المعرفية والتمثلات الخاطئة الشائعة لدى التلاميذ في هذا المفهوم.`,
    sampleInput: {
      matiere: 'العلوم الفيزيائية',
      niveau: '3 ثانوي علوم تجريبية',
      theme: 'العوامل الحركية المؤثرة في سرعة التفاعل الكيميائي',
    },
  },
  {
    stepNumber: 2,
    title: 'المرحلة 2: الوضعية الانطلاقية (Situation de départ)',
    pedagogicalGoal: 'وضعية مشكلة قريبة من واقع التلميذ تثير فضوله وتدفعه للتساؤل',
    promptTemplate: `انطلاقاً من الأهداف السابقة، اقترح عليّ:
3 وضعيات انطلاق مختلفة تثير فضول التلميذ وتطرح مشكلة حقيقية من واقعه اليومي (مثل: حفظ الأطعمة في الثلاجة، صدأ الحديد السريع، أو الألعاب النارية).
لكل وضعية: اذكر السياق، المشكل المطروح، وسؤال الانطلاق الموجه للقسم.`,
    sampleInput: {
      matiere: 'العلوم الفيزيائية',
      niveau: '3 ثانوي علوم تجريبية',
      theme: 'سرعة التحولات الكيميائية',
    },
  },
  {
    stepNumber: 3,
    title: 'المرحلة 3: النشاط الاستكشفي (Activité de découverte)',
    pedagogicalGoal: 'بناء نشاط يجعل التلميذ فاعلاً يكتشف المفهوم بنفسه لا متلقياً سلبياً',
    promptTemplate: `اختر الوضعية الأولى واقترح نشاطاً استكشافياً مدته 20 دقيقة، يجعل التلميذ يكتشف المفهوم بنفسه.
أريد:
- سند العمل (وثيقة، جدول بيانات، أو تجربة صفية مبسطة).
- تعليمات موجهة واضحة للتلميذ (Consignes).
- الأسئلة التوجيهية التي يطرحها الأستاذ لتيسير العمل في مجموعات صغيرة.
- الخلاصة أو المفهوم المستهدف صياغته مع التلاميذ.`,
    sampleInput: {
      matiere: 'العلوم الفيزيائية',
      niveau: '3 ثانوي علوم تجريبية',
      theme: 'العوامل الحركية',
    },
  },
  {
    stepNumber: 4,
    title: 'المرحلة 4: التقويم التكويني (Évaluation formative)',
    pedagogicalGoal: 'التحقق السريع في آخر الحصة (5 إلى 10 دقائق) من تحقق الأهداف',
    promptTemplate: `اقترح تقويماً تكوينياً سريعاً (10 دقائق) يمكن إنجازه فردياً في نهاية الحصة للتحقق من تحقق الأهداف الثلاثة.
أريد:
- سؤال تطبيق مباشر (التحقق من الفهم).
- وضعية جديدة قصيرة لنقل الأثر (Transfert).
- سلم تقييم ذاتي سريع (Checklist) للأستاذ لرصد المتعثرين فورياً.`,
    sampleInput: {
      matiere: 'العلوم الفيزيائية',
      niveau: '3 ثانوي علوم تجريبية',
      theme: 'العوامل الحركية',
    },
  },
];

export const SESSION_3_CONTEXT_COMPARISON = {
  unconstrainedPrompt: 'اقترح نشاطاً تطبيقياً حول التحولات الكيميائية',
  unconstrainedAiIdea: 'تقسيم القسم إلى مخابر وتوزيع حواسيب فردية مع استخدام برمجيات محاكاة ثلاثية الأبعاد ومشاهدة فيديو مدته 15 دقيقة ثم إجراء تجارب بمحاليل برمنغنات البوتاسيوم في أوانٍ زجاجية متطورة.',
  constraintsApplied: {
    elevesCount: '32 تلميذاً في قاعة عادية',
    level: 'مستوى متوسط وتفاوت كبير في الفهم',
    material: 'لا يوجد حاسوب ولا إنترنت، سبورة وأوراق طباعة فقط',
    time: '50 دقيقة كحد أقصى',
  },
  contextInjectionPrompt: `أعد تكييف هذا النشاط تماماً وفق القيود الصارمة التالية:
- عدد التلامذة: 32 تلميذاً، في قاعة عادية.
- المستوى: متوسط مع وجود تلامذة بطيئي الفهم.
- الوسائل: لا يوجد إنترنت ولا مسلاط ولا حواسيب. سبورة بيضاء وأوراق عمل مطبوعة فقط.
- العمل: في مجموعات ثنائية أو رباعية (بالمقاعد المتجاورة).
- الزمن المتاح للنشاط: 18 دقيقة بالضبط.`,
  realisticAiOutput: `نشاط مكيّف (32 تلميذاً • سبورة + ورقة عمل):
- التنظيم: العمل في ثنائيات (كل تلميذين يتقاسمان ورقة مطبوعة واحدة لتوفير الورق).
- السند: ورقة بها جدولان لمنحنيين بيانيين يقارنان سرعة التفاعل عند 20°C و50°C.
- دور التلميذ (10 دقائق): قراءة المنحنى، استخراج مدة اختفاء اللون، والإجابة عن سؤالين محددين في الورقة.
- دور الأستاذ: التجول بين الصفوف لتوجيه الثنائيات المتعثرة وتقديم بطاقة تلميح (Carte coup de pouce).
- الحوصلة (8 دقائق): ممثل من فوج يكتب الاستنتاج على السبورة، ومصادقة جماعية.`,
  keyMessage: 'السياق هو ما يحول الاقتراح النظري الرنان إلى خطة صفية قابلة للحياة في واقعنا المدرسي!',
};

export const SESSION_3_INSPECTOR_PROMPT = {
  instruction: `تصرف كمفتش تربوي صارم وخبير بيداغوجي.
راجع هذا السيناريو المقترح للحصة.
حدد بموضوعية:
1. نقاط القوة البيداغوجية.
2. نقاط الضعف والمخاطر الصامتة في القسم.
3. الأجزاء غير الواقعية (من حيث الزمن، أو الوسائل، أو مستوى التلامذة).
4. مقترحات محددة لتعديل الحصة دون إعادة كتابتها كاملة.`,
  sampleAiCritique: {
    pointsForts: [
      'الوضعية الانطلاقية مستمدة من الواقع المعيش (حفظ الحليب في الصيف).',
      'الأهداف الإجرائية مصوغة بأفعال قابلة للقياس (يقارن، يستنتج، يعلل).',
      'إدماج العمل التشاركي في ثنائيات يشجع الحوار بين الأقران.',
    ],
    pointsFaibles: [
      'مرحلة التجميع والمصادقة على السبورة خصص لها 8 دقائق فقط، وهي غير كافية لـ 16 ثنائياً إن حدث نقاش حاد.',
      'النشاط يفترض أن جميع التلاميذ يتقنون قراءة المنحنيات البيانية، بينما قد يتعثر ربع القسم في استخراج القيم من المحاور.',
      'غياب نشاط تمايزي للتلاميذ السريعين (Ceux qui finissent plus vite).',
    ],
    elementsIrrealistes: [
      'توزيع الأوراق وجمعها وشرح التعليمات قد يستهلك 4 دقائق من وقت الحصة لم تُحسب في التوزيع الزمني.',
    ],
    ameliorationsConseillees: [
      'إضافة تلميح بصري مساند على السبورة يذكر بكيفية قراءة محاور المنحنى.',
      'إضافة سؤال إثرائي اختياري (Défi bonus) للتلاميذ السريعين لمنع الفوضى.',
      'تحديد دور واضح لكل تلميذ داخل الثنائية (قارئ ومعلّق / كاتب ومؤقت).',
    ],
  },
};

export const DEFAULT_SESSION_3_WORKSHEET: Session3Worksheet = {
  matiere: 'العلوم الفيزيائية',
  niveau: 'السنة الثالثة ثانوي (شعبة علوم تجريبية)',
  theme: 'العوامل الحركية وتأثير درجة الحرارة على سرعة التفاعل',
  duree: 'حصة واحدة (55 دقيقة)',
  niveauGeneral: 'Moyen',
  nombreEleves: '32 تلميذاً',
  difficultesParticulieres: 'صعوبة في قراءة المنحنيات البيانية وتفاوت ملحوظ بين المتفوقين وبطيئي الاستيعاب.',
  materielDisponible: ['Tableau', 'Documents imprimés'],
  demandeIA: {
    objectifs: 'تحديد مفهوم العامل الحركي، وتفسير تأثير درجة الحرارة على التصادمات الفعالة.',
    situationDepart: 'مقارنة فساد الأطعمة خارج الثلاجة في الصيف مقابل حفظها في الشتاء.',
    activite: 'استثمار وثيقة تتضمن منحنيين بيانيين لسرعة التفاعل الكيميائي عند درجتي حرارة مختلفتين.',
    evaluation: 'تطبيق سريع على ظاهرة طبيعية جديدة (نضج الفواكه أو الصدأ) في 5 دقائق.',
  },
  verification: {
    objectifsPertinents: true,
    contenuCorrect: true,
    niveauAdapte: true,
    tempsRealiste: true,
    activiteRealisable: true,
    elevesActifs: true,
    evaluationCorrespond: true,
  },
};

export const DEFAULT_SESSION_3_FICHE: Session3Fiche = {
  id: 'fiche_s3_demo',
  teacherName: 'أستاذ المعهد',
  matiere: 'العلوم الفيزيائية',
  niveau: '3 ثانوي علوم تجريبية',
  theme: 'العوامل الحركية وتأثير درجة الحرارة على سرعة التفاعل الكيميائي',
  duree: '55 دقيقة',
  objectifs: [
    'تعريف العامل الحركي في تفاعل كيميائي.',
    'استنتاج أثر رفع درجة الحرارة على تسريع التحول الكيميائي انطلاقاً من معطيات تجريبية.',
    'تفسير تأثير درجة الحرارة مجهرياً بازدياد وتيرة التصادمات الفعالة.',
  ],
  prerequis: [
    'مفهوم التفاعل الكيميائي ومواد المتفاعلات والنواتج.',
    'جدول التقدم وكمية المادة (mol).',
    'قراءة واستخراج المعطيات من منحنى بياني دالتي الزمن والتركيز.',
  ],
  situationDepart:
    '«لماذا نحفظ الأطعمة سريعة التلف في الثلاجة صيفاً؟ وما الفرق بين حليب يُترك في المطبخ في شهر جويلية وحليب محفوظ عند 4°C؟» طرح المشكل: ما أثر درجة الحرارة على وتيرة التحولات الكيميائية؟',
  deroulement: [
    {
      id: 'row_1',
      time: '00 → 08 د (8 د)',
      phase: 'وضعية الانطلاق',
      teacherRole: 'طرح التساؤل المعيش وتوزيع ورقة العمل واستدراج الفرضيات',
      studentRole: 'التفكير الفردي واقتراح فرضيات أولية وتدوينها على الورقة',
      activity: 'مناقشة ظاهرة فساد الحليب وتحديد السؤال الإشكالي',
      materials: 'السبورة + صورة واقعية في ورقة العمل',
      evaluation: 'ملاحظة تمثلات التلاميذ وتدوين الفرضيات المتناقضة على السبورة',
    },
    {
      id: 'row_2',
      time: '08 → 28 د (20 د)',
      phase: 'نشاط استكشافي',
      teacherRole: 'التجول بين المجموعات وتقديم بطاقات التلميح ومراقبة تقدم الثنائيات',
      studentRole: 'العمل في ثنائيات: قراءة المنحنيين البيانيين، حساب السرعة الابتدائية، واستنتاج القاعدة',
      activity: 'استثمار منحنى بياني لتفاعل يوديد البوتاسيوم مع بيروكسوديكبريتات عند 20°C و45°C',
      materials: 'ورقة عمل مطبوعة ثنائية + مسودة',
      evaluation: 'تقويم تكويني مرحلي: المرور بالصفوف والتحقق من سلامة استخراج الإحداثيات',
    },
    {
      id: 'row_3',
      time: '28 → 42 د (14 د)',
      phase: 'المصادقة والتركيب',
      teacherRole: 'تنظيم التدخلات وكتابة البناء المفاهيمي الموحد والتفسير المجهري',
      studentRole: 'عرض عمل ثنائيتين على السبورة، المناقشة الجماعية وتدوين الخلاصة التركيبية',
      activity: 'صياغة الاستنتاج: درجة الحرارة عامل حركي يرفع طاقة الجزيئات ويزيد التصادمات الفعالة',
      materials: 'السبورة البيضاء (تخطيط مفاهيمي منظم)',
      evaluation: 'طرح أسئلة ضبط سريعة للتأكد من زوال اللبس',
    },
    {
      id: 'row_4',
      time: '42 → 52 د (10 د)',
      phase: 'تقويم تكويني ختامي',
      teacherRole: 'توزيع تمرين التطبيق السريع ومراقبة الإنجاز الفردي الصامت',
      studentRole: 'إنجاز فردي لتمرين نقل الأثر: تفسير استواء الخبز السريع في الفرن الساخن',
      activity: 'تمرين كتابي قصير (3 أسئلة مباشرة)',
      materials: 'ورقة التقويم الفردي التكويني',
      evaluation: 'تصحيح نموذجي مقتضب وجمع عينة 5 أوراق لرصد التعثرات',
    },
    {
      id: 'row_5',
      time: '52 → 55 د (3 د)',
      phase: 'اختتام وواجب',
      teacherRole: 'تحديد التمرين البيتي والربط بالحصة القادمة (تأثير التركيز)',
      studentRole: 'تدوين الواجب في الكراس',
      activity: 'ربط المعرفة بالحصة اللاحقة',
      materials: 'كراس التلميذ',
      evaluation: 'ملاحظة جاهزية التلاميذ',
    },
  ],
  synthese:
    'درجة الحرارة عامل حركي يسرّع التفاعلات الكيميائية؛ فكلما ارتفعت درجة الحرارة، ازدادت الطاقة الحركية للجسيمات وازداد احتمال التصادمات الفعالة، مما يقلص مدة التحول.',
  evaluationFinale:
    'تمرين تطبيقي قصير (سؤال نقل الأثر وسؤال تفسير مجهري) مدته 7 دقائق، مع سلم تنقيط ذاتي من 3 بنود.',
  inspectorReview: {
    pointsForts: [
      'تدرج بيداغوجي محكم من الواقع المعيش إلى التجريد المجهري.',
      'ملاءمة تامة للوسائل المتوفرة (أوراق مطبوعة وسبورة فقط دون الحاجة لتجهيزات مستحيلة).',
      'تخصيص وقت واضح للتقويم التكويني داخل الحصة بدل ترحيله كلياً للمنزل.',
    ],
    pointsFaibles: [
      'الزمن المخصص للمصادقة على السبورة مضغوط وقد يتجاوز 14 دقيقة إذا كثرت الأسئلة.',
      'ضرورة توفير بديل للتلاميذ الذين ينهون قراءة المنحنى في أقل من 10 دقائق.',
    ],
    elementsIrrealistes: [
      'مرحلة التقييم النهائي تحتاج انضباطاً صارماً في الوقت حتى لا تقتطع من زمن الحصة الموالية.',
    ],
    ameliorationsConseillees: [
      'تجهيز بطاقة دعم للتلاميذ المتعثرين في قراءة المنحنيات.',
      'سؤال إضافي اختياري (Défi) للمتفوقين لضمان هدوء القسم.',
    ],
    teacherDecisions: {
      accept: [
        'إضافة بطاقة تلميح (Carte coup de pouce) لقراءة المنحنى البياني.',
        'إدراج سؤال تحدي اختياري للمتفوقين.',
      ],
      reject: [
        'رفض حذف التفسير المجهري لأن البرنامج الرسمي يشترطه في هذه الوحدة.',
      ],
      justification:
        'قبلت الملاحظات التنظيمية والتمايزية لأنها تحمي وقت القسم، ورفضت حذف التفسير المجهري لالتزامي بالبرنامج الرسمي.',
    },
  },
  betweenSessionsTask: {
    action: 'جرّب نشاطاً واحداً من هذه الجذاذة في قسمك الحقيقي هذا الأسبوع.',
    questions: [
      'شنوة اللي مشى مليح كيف ما اقترح الـAI؟',
      'شنوة اللي تعطل أو كان غير واقعي في القسم؟',
      'شنوة النقطة اللي كان فيها الـAI غالط تماماً وصلحتها بخبرتك الميدانية؟',
    ],
  },
  isVerified: true,
  createdAt: new Date().toLocaleDateString('ar-TN'),
};

export const SESSION_4_PROMPTS_TOOLBOX: Session4PromptToolboxItem[] = [
  {
    id: 'p1_raw_vs_graduated',
    category: 'توليد التمارين',
    title: 'توليد 4 تمارين متدرجة الصعوبة',
    purpose: 'الحصول على سلسلة تمارين مربوطة بالأهداف من السهل إلى المركب دون توليد الحل فوراً',
    prompt: `أنا أستاذ [المادة] لمستوى [المستوى].
هدفي البيداغوجي: [الهدف بدقة].
أنشئ 4 تمارين متدرجة:
- تمرين 1: تطبيق مباشر لقاعدة أو مفهوم بسيط.
- تمرين 2: وضعية حياتية ملموسة وواقعية.
- تمرين 3: مسألة تتطلب خطوتين أو أكثر للحل.
- تمرين 4: سؤال تفكير أو مقارنة أو كشف خطأ شائع.
الشروط: لا تكتب الحلول الآن، فقط التمارين مع تحديد الهدف المباشر لكل تمرين والوقت التقديري.`
  },
  {
    id: 'p2_exam_constraints',
    category: 'بناء الاختبار',
    title: 'بناء اختبار متكامل ومقيد',
    purpose: 'تحويل سلسلة تمارين إلى اختبار محدد بالزمن وبسلم التنقيط مع عناصر الإجابة وشبكة التقييم',
    prompt: `انطلاقاً من التمارين السابقة، ابنِ اختباراً رسمياً متكاملاً:
- المدة الإجمالية: [45 دقيقة / ساعة].
- المجموع: على [20 نقطة].
- وزع النقاط بدقة لكل سؤال مع تبرير بيداغوجي لسبب التوزيع.
- أضف عناصر الإجابة النموذجية وسلم التنقيط التفصيلي (Critères d'évaluation).`
  },
  {
    id: 'p3_ai_reviewer',
    category: 'المراجعة التربوية',
    title: 'AI كمراجع تربوي صارم (Mode Reviewer)',
    purpose: 'إخضاع الاختبار لنقد بيداغوجي محايد لكشف الثغرات والغموض والخلل الزمني',
    prompt: `تصرف الآن كمراجع تربوي خبير ومحايد.
راجع هذا الاختبار بصرامة واكتب تقريراً نقدياً صريحاً:
1. هل توجد أسئلة تحتمل أكثر من فهم أو صياغة غامضة؟
2. هل التمارين تقيس فعلاً الأهداف المحددة أم تقتصر على الحفظ والتطبيق الآلي؟
3. هل التوزيع الزمني وسلم النقاط عادل وواقعي لتلميذ متوسط؟
4. هل الصعوبة متوازنة أم أن الاختبار سهل جداً أو تعجيزي؟
5. اقترح 3 تعديلات ملموسة لتحسين الاختبار.`
  },
  {
    id: 'p4_differentiation',
    category: 'التمايز البيداغوجي',
    title: 'تكييف التمرين حسب 3 مستويات من المتعلمين',
    purpose: 'توليد نسخة ميسرة (دعم) ونسخة قياسية ونسخة تحدي لنفس الهدف',
    prompt: `خذ التمرين رقم [X] وكيفه بيداغوجياً لـ 3 فئات من التلاميذ في نفس القسم:
1. نسخة ميسرة (تلميذ يواجه صعوبات): مع أسئلة وسيطة ومساعدات بصرية/بيانية دون إعطاء الحل.
2. نسخة قياسية: لتلميذ متوسط في نسق التعلم الطبيعي.
3. نسخة تحدي (تلميذ متفوق): تتضمن تعميماً للمسألة أو سؤال استدلال إضافي يتطلب التفكير النقدي.`
  },
  {
    id: 'p5_distractors',
    category: 'بنوك الأسئلة والمشتتات',
    title: 'توليد QCM مع مشتتات مبنية على أخطاء حقيقية',
    purpose: 'بناء أسئلة متعددة الخيارات ذات قيمة تشخيصية تكشف سوء الفهم',
    prompt: `أنشئ 3 أسئلة QCM حول [الموضوع].
لكل سؤال، اقترح 4 خيارات:
- إجابة واحدة صحيحة.
- 3 خيارات خاطئة (Distracteurs) تمثل أخطاء شائعة حقيقية يقع فيها التلاميذ عادة مع تفسير سبب اختيار كل خيار خاطئ وما يكشفه من خلل في الفهم لدى التلميذ.`
  },
  {
    id: 'p6_between_sessions',
    category: 'مهمة ما بين الحصتين',
    title: 'مراجعة فرض قديم مع AI',
    purpose: 'تطبيق عملي على أرشيف الأستاذ الشخصي تمهيداً لـ NotebookLM في الحصة 5',
    prompt: `إليك نص فرض أنجزته في الموسم الماضي: [الصق الفرض].
قم بتحليله نقدياً:
1. استخرج نقاط القوة ونقاط الضعف.
2. هل الصياغة واضحة وخالية من اللبس؟
3. اقترح صيغة بديلة ومحينة لنفس الأهداف تجعل التلميذ أكثر فاعلية وتفكيراً.`
  }
];

export const DEFAULT_SESSION_4_WORKSHEET: Session4ParticipantWorksheet = {
  matiere: 'الرياضيات',
  niveau: 'السنة التاسعة من التعليم الأساسي',
  theme: 'النسب المئوية والزيادة والتخفيض وتطبيقاتها المالية',
  objectifs: [
    'حساب قيمة تخفيض أو زيادة على سعر معطى وتحديد السعر الجديد بدقة.',
    'حساب النسبة المئوية للتغير بين قيمتين معلومتين وتبرير المعنى الرياضي.',
    'حل مسألة إدماجية مركبة حول فاتورة شراء واختيار العرض التجاري الأنسب.',
    'التمييز الصارم بين نسبة الزيادة من ثمن الشراء ونسبة الربح من ثمن البيع.',
  ],
  dureeMinutes: 45,
  nombreEleves: '32 تلميذاً',
  baremeTotal: 20,
  materielAutorise: 'أدوات هندسية وآلة حاسبة علمية غير قابلة للبرمجة',
  niveauGeneral: 'Hétérogène',
  typesChoisis: ['تطبيق مباشر', 'وضعية مسألة واقعية', 'سؤال تفكير ونقد', 'QCM مع مشتتات تشخيصية'],
  verificationRows: [
    {
      id: 'v1',
      numero: 1,
      question: 'حساب ثمن سلعة بعد تخفيض 20% على سعر أصلي قدره 80 ديناراً.',
      objectif: 'تطبيق مباشر لقاعدة التخفيض',
      difficulte: 'Facile',
      tempsEstime: '5 دقائق',
      bareme: '4 نقاط',
      isAppropriate: true,
    },
    {
      id: 'v2',
      numero: 2,
      question: 'مقارنة بين عرضين تجاريين لشراء حاسوب (تخفيض 20% فوري مقابل تخفيض 15% يليه تخفيض 10%).',
      objectif: 'وضعية حياتية تتطلب تفكيك تخفيضين متتاليين وتصحيح الخطأ الشائع (20% مقابل 23.5%)',
      difficulte: 'Moyenne',
      tempsEstime: '12 دقيقة',
      bareme: '6 نقاط',
      isAppropriate: true,
    },
    {
      id: 'v3',
      numero: 3,
      question: 'مسألة مركبة: تاجر اشترى بضاعة بـ 4000 دينار ويريد ربح 20% من ثمن البيع. احسب ثمن البيع الإجمالي.',
      objectif: 'مسألة حل مشكلات تتطلب خطوتين رياضيتين ومعادلة بسيطة والتمييز بين الربح من الكلفة والربح من البيع',
      difficulte: 'Difficile',
      tempsEstime: '15 دقيقة',
      bareme: '6 نقاط',
      isAppropriate: true,
    },
    {
      id: 'v4',
      numero: 4,
      question: 'سؤال كشف الخطأ: هل زيادة 50% ثم تخفيض 50% تعيد السعر إلى قيمته الأصلية؟ برر بمثال عددي.',
      objectif: 'تفكير نقدي واستدلال رياضي وكشف تمثل خاطئ راسخ وتحديد نسبة الخسارة (25%)',
      difficulte: 'Moyenne',
      tempsEstime: '10 دقائق',
      bareme: '4 نقاط',
      isAppropriate: true,
    },
  ],
  aiReview: {
    estEquilibre: true,
    questionsAmbigues: 'تمت مراجعة صياغة المسألة 2 لتوضيح أن التخفيض الإضافي يُحسب على السعر المخفض الأول وليس على السعر المرجعي الأصلي.',
    tempsRealiste: true,
    alignementObjectifs: true,
  },
};

export const DEFAULT_SESSION_4_DELIVERABLE: Session4Deliverable = {
  id: 'S4-EVAL-MATH-9B',
  teacherName: '',
  matiere: 'الرياضيات',
  niveau: 'السنة التاسعة من التعليم الأساسي',
  titreEvaluation: 'فرض مراقبة تأليفي في الحساب: النسب المئوية وتطبيقاتها الحياتية والمالية',
  duree: '45 دقيقة',
  baremeTotal: 20,
  consignesGenerales: 'يُسمح باستعمال الآلة الحاسبة العلمية غير القابلة للبرمجة. يُشترط تبرير جميع العمليات الحسابية وكتابة المراحل بوضوح على ورقة التحرير.',
  objectifsEvalues: [
    'تطبيق النسبة المئوية لحساب مقدار الزيادة والتخفيض المباشر.',
    'نمذجة وضعية تسوق ومقارنة عروض تجارية مركبة.',
    'التفريق الصارم بين النسبة المحسوبة على سعر الشراء وتلك المحسوبة على سعر البيع.',
    'البرهنة الاستدلالية على عدم تكافؤ العمليات المئوية المتتالية وتفنيد المغالطات.',
  ],
  exercices: [
    {
      id: 'ex-1',
      numero: 1,
      titre: 'تمرين 1: تطبيق مباشر وحساب سريع (QCM تشخيصي)',
      type: 'QCM مع مشتتات ذكية',
      objectif: 'قياس الفهم القاعدي لقوانين النسبة والتخفيض وتحديد مواطن اللبس',
      difficulte: 'Facile',
      points: 4,
      tempsEstime: '8 دقائق',
      enonce: `اختر الإجابة الصحيحة الوحيدة مع التعليل في سطر واحد:
1) قميص ثمنه الأصلي 60 ديناراً خضع لتخفيض قدره 25%. ثمنه الجديد هو:
   أ) 45 ديناراً  |  ب) 50 ديناراً  |  ج) 35 ديناراً
2) ارتفع ثمن علبة حليب من 1200 مليم إلى 1500 مليم. نسبة الزيادة هي:
   أ) 30%  |  ب) 25%  |  ج) 20%
3) تخفيض 10% ثم تخفيض 10% يكافئ تخفيضاً وحيداً قدره:
   أ) 20%  |  ب) 19%  |  ج) 18.5%`,
      baremeDetaille: 'نقطة واحدة لكل اختيار صحيح (3 نقاط) + نقطة واحدة لدقة تبرير السؤال الثالث.',
      corrigeDetaille: `1) أ (45 د): 60 × (1 - 0.25) = 60 × 0.75 = 45 ديناراً.
2) ب (25%): الزيادة = 300 مليم. النسبة = (300 / 1200) × 100 = 25%.
3) ب (19%): معامل الضرب المتبقي = 0.9 × 0.9 = 0.81 أي تخفيض بنسبة (1 - 0.81) × 100 = 19%.`,
      reponseAttendue: 'اختيارات صحيحة ومبررة رياضياً.',
      differentiation: {
        simplifiee: 'توفير التذكير بالقاعدة المباشرة (السعر الجديد = السعر القديم × معامل التخفيض) لفرع الدعم.',
        standard: 'نص التمرين بشكله الحالي مع تبرير إجباري للفرع الثالث.',
        defi: 'سؤال إضافي: ما هي نسبة الزيادة اللازمة لإرجاع ثمن القميص المخفض (45 د) إلى ثمنه الأصلي (60 د)؟',
      },
      piegesEtErreursCourantes: 'المشتت (20%) في السؤال 3 هو فخ جمع النسب مباشرة (10%+10%). المشتت (20%) في السؤال 2 هو خطأ قسمة الزيادة على الثمن الجديد (300/1500) بدل الثمن القديم.',
    },
    {
      id: 'ex-2',
      numero: 2,
      titre: 'تمرين 2: وضعية مقارنة عروض تجارية (مسألة شبه مركبة)',
      type: 'وضعية حياتية ملموسة',
      objectif: 'توظيف النسب المئوية في اتخاذ قرار استهلاكي مبرر عقلانياً',
      difficulte: 'Moyenne',
      points: 6,
      tempsEstime: '12 دقيقة',
      enonce: `بمناسبة موسم التخفيضات، يريد أمين شراء حاسوب محمول ثمنه المرجعي المعروض 1200 دينار.
وجد هذا الحاسوب في متجرين مختلفين:
- المتجر الأول (A): يقدم تخفيضاً مباشراً قدره 20%، مع إمكانية الدفع على دفعتين متساويتين.
- المتجر الثاني (B): يقدم تخفيضاً أولياً قدره 15%، متبوعاً بقسيمة شراء إضافية تخفض 10% من السعر المخفض.
1) احسب المبلغ الذي سيدفعه أمين في المتجر A.
2) احسب المبلغ النهائي في المتجر B.
3) أي المتجرين أكثر فائدة لأمين؟ علل جوابك حسابياً.`,
      baremeDetaille: 'سؤال 1: 2 نقاط • سؤال 2: 2.5 نقاط • سؤال 3: 1.5 نقطة مع التعليل المقنع.',
      corrigeDetaille: `1) في المتجر A: السعر = 1200 × (1 - 0.20) = 1200 × 0.8 = 960 ديناراً.
2) في المتجر B: بعد التخفيض الأول: 1200 × 0.85 = 1020 ديناراً.
   بعد التخفيض الإضافي: 1020 × (1 - 0.10) = 1020 × 0.9 = 918 ديناراً.
3) المتجر B هو الأفضل لأمين لأن 918 د < 960 د (الفارق لصالحه 42 ديناراً).`,
      reponseAttendue: 'حسابات سليمة وتحديد واضح للمتجر الأفضل مع تبرير المقارنة.',
      differentiation: {
        simplifiee: 'إرشاد التلميذ لحساب السعر بعد التخفيض الأول خطوة بخطوة في المتجر B كبندين منفصلين (أ و ب).',
        standard: 'المسألة الحالية كاملة بدون تفكيك إضافي.',
        defi: 'إذا أراد المتجر A تقديم تخفيض وحيد ينافس المتجر B تماماً، فما هي النسبة المئوية الدقيقة التي يجب أن يعتمدها؟',
      },
      piegesEtErreursCourantes: 'الاعتقاد بأن المتجر B يخفض 25% (15+10)، بينما التخفيض الحقيقي الإجمالي هو 23.5% (1 - 0.85×0.9 = 0.235).',
    },
    {
      id: 'ex-3',
      numero: 3,
      titre: 'تمرين 3: مسألة تجارية مركبة (ثمن البيع، الشراء والربح)',
      type: 'مسألة إدماجية مركبة',
      objectif: 'التمييز الدقيق بين نسبة الربح من ثمن الشراء ونسبة الربح من ثمن البيع وبناء معادلة بسيطة',
      difficulte: 'Difficile',
      points: 6,
      tempsEstime: '15 دقيقة',
      enonce: `اشترى تاجر أجهزة إلكترونية شحنة من الطابعات بمبلغ إجمالي قدره 3600 دينار، ودفع مصاريف نقل تقدر بـ 400 دينار.
1) بيّن أن كلفة الشحنة الإجمالية تساوي 4000 دينار.
2) يريد التاجر بيع كامل الشحنة بحيث يحقق ربحاً صافياً يمثل 20% من ثمن البيع الإجمالي (وليس من ثمن الكلفة).
   ليكن S ثمن البيع الإجمالي للشحنة.
   أ) عبّر عن الربح بدلالة S.
   ب) اكتب المعادلة التي تربط بين الكلفة، والربح، وثمن البيع، ثم استنتج قيمة S.
3) إذا علمت أن الشحنة تحتوي على 25 طابعة متماثلة، فما هو ثمن بيع الطابعة الواحدة للعموم؟`,
      baremeDetaille: 'سؤال 1: 1 نقطة • سؤال 2 (أ): 1 نقطة • سؤال 2 (ب): 2.5 نقاط • سؤال 3: 1.5 نقطة.',
      corrigeDetaille: `1) الكلفة = ثمن الشراء + مصاريف النقل = 3600 + 400 = 4000 دينار.
2) أ) الربح = 0.20 × S.
   ب) لدينا: ثمن البيع = الكلفة + الربح
      أي: S = 4000 + 0.20 S
      S - 0.20 S = 4000
      0.80 S = 4000
      S = 4000 / 0.80 = 5000 دينار.
      (ملاحظة هامة: لو حسب التلميذ 4000 × 1.20 = 4800 د، فهذا خطأ شائع شهير يخلط بين نسبة الربح من الكلفة ونسبة الربح من البيع).
3) ثمن الطابعة الواحدة = 5000 / 25 = 200 دينار.`,
      reponseAttendue: 'حل جبري دقيق للمعادلة واستخراج ثمن بيع الطابعة الواحدة.',
      differentiation: {
        simplifiee: 'توجيه التلميذ: "إذا كان الربح 20% من ثمن البيع، فما هي النسبة المئوية التي تمثلها الكلفة من ثمن البيع؟ (80%)، ثم احسب 4000 ÷ 0.8".',
        standard: 'طريقة المعادلة الصريحة المعطاة في نص التمرين.',
        defi: 'إذا كانت الدولة تفرض ضريبة TVA قدرها 7% على ثمن البيع يدفعها المشتري، فما هو الثمن النهائي للطابعة الواحدة مع احتساب الأداء؟ وما هو المبلغ الذي سيجمعه التاجر لصالح إدارة الجباية؟',
      },
      piegesEtErreursCourantes: 'الوقوع في الفخ النموذجي: حساب الربح بضرب الكلفة في 20% (4000 × 0.2 = 800) وقول S = 4800 د. هذا هو الخطأ الكلاسيكي الذي يجب أن ينبه الأستاذ تلاميذه إليه.',
    },
    {
      id: 'ex-4',
      numero: 4,
      titre: 'تمرين 4: التفكير والاستدلال وكشف التناقضات',
      type: 'سؤال تفكير ونقد',
      objectif: 'تنمية الحس الرياضي النقدي والتحقق من صمود التلميذ أمام المغالطات الشائعة',
      difficulte: 'Moyenne',
      points: 4,
      tempsEstime: '10 دقائق',
      enonce: `ادعى أحد أصحاب المحلات التجارية الإشهار التالي:
«اشتريتُ منتوجاً ثم زدتُ في سعره بنسبة 50%. وبمناسبة التخفيضات أعلنتُ عن تخفيض قدره 50%، وبالتالي فأنا أبيعه بسعر الشراء الأصلي تماماً دون أي ربح أو خسارة!»
1) هل هذا الادعاء الرياضي صحيح أم خاطئ؟
2) بين ذلك باعتماد مثال عددي تختاره (افترض أن السعر الأصلي 100 دينار).
3) احسب نسبة الخسارة الحقيقية التي تعرض لها التاجر مقارنة بسعر الشراء.`,
      baremeDetaille: 'سؤال 1: 1 نقطة (بيان الخطأ) • سؤال 2: 1.5 نقطة للبرهنة بالعدد • سؤال 3: 1.5 نقطة لتحديد نسبة الخسارة الفعلية (25%).',
      corrigeDetaille: `1) هذا الادعاء خاطئ تماماً من الناحية الرياضية.
2) بمثال عددي: لنفترض أن السعر الأصلي = 100 دينار.
   - بعد زيادة 50%: يصبح السعر = 100 × 1.50 = 150 ديناراً.
   - بعد تخفيض 50% من السعر الجديد: التخفيض = 150 × 0.50 = 75 ديناراً.
   - السعر النهائي للبيع = 150 - 75 = 75 ديناراً فقط!
3) التاجر باع بـ 75 ديناراً منتوجاً اشتراه بـ 100 دينار، فهو قد خسر 25 ديناراً، أي خسر 25% من رأس ماله الأصلي.`,
      reponseAttendue: 'حجة رياضية واضحة بمثال عددي تؤكد أن التاجر خسر 25%.',
      differentiation: {
        simplifiee: 'طرح السؤال بمساعدة مباشرة: "احسب السعر بعد زيادة 50% على 100د، ثم احسب نصف المبلغ الناتج وقارنه بـ 100د".',
        standard: 'البرهنة الحرة بالمثال العددي المعطى.',
        defi: 'بشكل عام، إذا زاد سعر بنسبة x% ثم خفض بنسبة x%، أثبت أن السعر ينخفض دائماً بنسبة قدرها (x² / 100)%.',
      },
      piegesEtErreursCourantes: 'التسرع والاعتقاد بأن الزيادة تلغي النقصان إذا تساوت النسب، متناسين أن قاعدة الحساب (Base de calcul) تتغير بعد كل عملية.',
    },
  ],
  baremeExplication: 'المجموع الإجمالي 20 نقطة موزعة بيداغوجياً: 4 نقاط QCM سريع (تطبيق مباشر)، 6 نقاط للمسألة الاستهلاكية، 6 نقاط للمسألة الجبرية المركبة، و4 نقاط للاستدلال وكشف الخطأ الشائع.',
  aiReviewReport: {
    questionsAmbigues: [
      'في التمرين 2، تمت صياغة "تخفيض 10% إضافي" بدقة لتأكيد أنه يُحسب على السعر المخفض الأول وليس على السعر المرجعي الأصلي.',
      'في التمرين 3، تم التنبيه بوضوح إلى أن الربح محسوب كنسبة من ثمن البيع وليس من الكلفة.',
    ],
    erreursPotentielles: [
      'تم تصحيح خطأ شائع يقترحه AI عادة في التمرين 3 عند توليد الحل، حيث يضرب الكلفة في 1.20 عوض قسمتها على 0.80.',
    ],
    questionsRepetitives: [
      'لا يوجد تكرار؛ كل تمرين يقيس كفاءة محددة ومختلفة (QCM تشخيصي، مقارنة عروض، معادلة سعر البيع، والاستدلال المنطقي).',
    ],
    desequilibreDifficulte: 'تدرج متوازن: 20% سهل (تطبيق)، 50% متوسط (مسائل سياقية واستدلال)، و30% مركب (معادلة وحل مشكلات).',
    nonConformiteObjectifs: [],
    realismeTemporel: '45 دقيقة مناسبة جداً لتلميذ متوسط في السنة التاسعة أساسي مع تخصيص 5 دقائق للمراجعة.',
    recommandations: [
      'إرفاق ورقة مسودة إلزامية لكل تلميذ لتجنب الحساب الذهني الخاطئ.',
      'التذكير الشفوي في بداية الحصة بقراءة نص كل مسألة مرتين قبل الشروع في الإجابة.',
    ],
    decisionEnseignant: {
      modificationsAcceptees: [
        'توضيح صياغة الربح في التمرين 3 لتفادي ارتباك التلميذ.',
        'إدراج المشتتات الذكية في التمرين الأول للكشف عن الأخطاء المفاهيمية.',
        'إضافة سؤال تحدي إضافي لكل تمرين للتلاميذ المتميزين.',
      ],
      modificationsRejetees: [
        'رفض حذف التمرين الرابع لأنه يقيس الكفاءة الأهم: التفكير النقدي وتفنيد المغالطات.',
      ],
      justification: 'الهدف من التقييم ليس فقط تنقيط التلميذ بل قياس قدرته على توظيف الرياضيات في مواقف الحياة اليومية وحمايته من التضليل الإشهاري.',
    },
  },
  missionEntreSessions: {
    action: 'مراجعة فرض مراقبة أو تأليفي سابق أنجزته في الموسم الماضي وإخضاعه لتحليل نقدي مع AI.',
    description: 'تمهيداً للحصة الخامسة وأداة NotebookLM، اختر موضوع فرض حقيقي من أرشيفك واطلب من AI تشخيص نقاط القوة والضعف فيه واقتراح تكييفات للتمايز.',
    etapes: [
      '1. اختر فرضاً حقيقياً أنجزته سابقاً (ملف Word أو PDF أو صورة).',
      '2. انسخ نص الفرض في ChatGPT واطلب منه: "تصرف كمراجع تربوي محايد: ما هي الأسئلة الغامضة؟ وهل سلم التنقيط والوقت عادل؟".',
      '3. اطلب منه تحويل تمرين واحد إلى 3 مستويات (دعم، عادي، وتحدي).',
      '4. دوّن ملاحظاتك: ما الذي أضافه AI لفرضك وما الذي رفضته بخبرتك الميدانية؟',
    ],
  },
  isVerified: true,
  createdAt: new Date().toLocaleDateString('ar-TN'),
};



