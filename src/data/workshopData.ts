import { StageInfo, Competency, VerificationChallenge, SessionMeta, Session2ToolboxItem } from '../types';

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
    status: 'active',
    stageCount: 10,
  },
];

export const UPCOMING_SESSIONS = [
  {
    number: 3,
    title: 'Préparer un cours complet avec l’IA',
    subtitle: 'بناء حصة تعليمية متكاملة (وضعية انطلاق، أنشطة، تقييم)',
  },
  {
    number: 4,
    title: 'Créer des exercices et des évaluations formatives',
    subtitle: 'صناعة بنك تمارين تفاعلي وسلالم تقييم معيارية',
  },
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
