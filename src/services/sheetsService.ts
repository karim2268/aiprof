import { PedagogicalDeliverable, Session3Fiche } from '../types';

export interface SheetCreationResult {
  spreadsheetId: string;
  spreadsheetUrl: string;
  title: string;
}

export const createWorkshopSpreadsheet = async (
  accessToken: string,
  customTitle?: string
): Promise<SheetCreationResult> => {
  const title =
    customTitle ||
    `De la curiosité à la première expérience - الموارد البيداغوجية (${new Date().toLocaleDateString('fr-FR')})`;

  const response = await fetch('https://sheets.googleapis.com/v4/spreadsheets', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      properties: {
        title,
        locale: 'ar_TN',
        autoRecalc: 'ON_CHANGE',
      },
      sheets: [
        {
          properties: {
            title: 'الموارد البيداغوجية',
            gridProperties: {
              frozenRowCount: 1,
            },
          },
        },
      ],
    }),
  });

  if (!response.ok) {
    const errData = await response.json().catch(() => ({}));
    throw new Error(errData?.error?.message || 'فشل إنشاء ملف Google Sheets');
  }

  const data = await response.json();
  const spreadsheetId = data.spreadsheetId;
  const spreadsheetUrl = `https://docs.google.com/spreadsheets/d/${spreadsheetId}/edit`;

  // Initialize Header Row
  const headers = [
    'المعرف',
    'تاريخ الإنجاز',
    'اسم الأستاذ',
    'المادة',
    'المستوى الدراسي',
    'موضوع الدرس',
    'نوع المورد البيداغوجي',
    'الـ Prompt المبدئي',
    'ملاحظات النقد (❌ ما الذي لم يعجبني؟)',
    'الـ Prompt بعد الحوار والتعديل',
    'المورد البيداغوجي النهائي المعتمد',
    'تم التحقق من الأستاذ (⚠️)',
    'ملاحظات التدقيق والملاءمة',
  ];

  await appendRowToSpreadsheet(accessToken, spreadsheetId, 'الموارد البيداغوجية', headers);

  // Format header row style
  try {
    await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}:batchUpdate`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        requests: [
          {
            repeatCell: {
              range: {
                sheetId: 0,
                startRowIndex: 0,
                endRowIndex: 1,
              },
              cell: {
                userEnteredFormat: {
                  backgroundColor: { red: 0.1, green: 0.45, blue: 0.3 },
                  textFormat: {
                    bold: true,
                    foregroundColor: { red: 1.0, green: 1.0, blue: 1.0 },
                    fontSize: 11,
                  },
                  horizontalAlignment: 'CENTER',
                  verticalAlignment: 'MIDDLE',
                },
              },
              fields: 'userEnteredFormat(backgroundColor,textFormat,horizontalAlignment,verticalAlignment)',
            },
          },
        ],
      }),
    });
  } catch (formatErr) {
    console.warn('Header styling skipped:', formatErr);
  }

  return {
    spreadsheetId,
    spreadsheetUrl,
    title,
  };
};

export const appendRowToSpreadsheet = async (
  accessToken: string,
  spreadsheetId: string,
  sheetName: string,
  rowValues: string[]
): Promise<void> => {
  const encodedRange = encodeURIComponent(`${sheetName}!A1`);
  const response = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${encodedRange}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        values: [rowValues],
      }),
    }
  );

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err?.error?.message || 'فشل إضافة السطر إلى Google Sheets');
  }
};

export const exportDeliverableToSheet = async (
  accessToken: string,
  spreadsheetId: string,
  deliverable: PedagogicalDeliverable
): Promise<string> => {
  const row = [
    deliverable.id,
    new Date(deliverable.createdAt).toLocaleString('ar-TN'),
    deliverable.teacherName || 'أستاذ مشارك',
    deliverable.subject,
    deliverable.gradeLevel,
    deliverable.topic,
    deliverable.resourceType,
    deliverable.initialPrompt,
    deliverable.critiquePoints.join(' | '),
    deliverable.refinementPrompt,
    deliverable.finalContent,
    deliverable.isVerified ? 'نعم - تمت مراجعته بدقة' : 'قيد المراجعة',
    deliverable.verificationNotes || 'مطابق للبرنامج والتوقيت',
  ];

  await appendRowToSpreadsheet(accessToken, spreadsheetId, 'الموارد البيداغوجية', row);
  return `https://docs.google.com/spreadsheets/d/${spreadsheetId}/edit`;
};

export const createSession2Spreadsheet = async (
  accessToken: string,
  customTitle?: string
): Promise<SheetCreationResult> => {
  const title =
    customTitle ||
    `Mon AI Teacher Toolbox - الحصة 2 (${new Date().toLocaleDateString('fr-FR')})`;

  const response = await fetch('https://sheets.googleapis.com/v4/spreadsheets', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      properties: {
        title,
        locale: 'ar_TN',
        autoRecalc: 'ON_CHANGE',
      },
      sheets: [
        {
          properties: {
            title: 'صندوق أدوات الأستاذ',
            gridProperties: {
              frozenRowCount: 1,
            },
          },
        },
      ],
    }),
  });

  if (!response.ok) {
    const errData = await response.json().catch(() => ({}));
    throw new Error(errData?.error?.message || 'فشل إنشاء ملف Google Sheets للحصة الثانية');
  }

  const data = await response.json();
  const spreadsheetId = data.spreadsheetId;
  const spreadsheetUrl = `https://docs.google.com/spreadsheets/d/${spreadsheetId}/edit`;

  const headers = [
    'الرقم',
    'تاريخ الحفظ',
    'المادة',
    'المستوى الدراسي',
    'الفئة البيداغوجية',
    'عنوان الـ Prompt',
    'نص الـ Prompt المهيكل',
    'إرشادات التوظيف في القسم',
  ];

  await appendRowToSpreadsheet(accessToken, spreadsheetId, 'صندوق أدوات الأستاذ', headers);

  return {
    spreadsheetId,
    spreadsheetUrl,
    title,
  };
};

export const exportSession2ToolboxToSheet = async (
  accessToken: string,
  spreadsheetId: string,
  deliverable: {
    subject: string;
    gradeLevel: string;
    toolbox: { categoryLabel: string; title: string; promptText: string; usageTips: string }[];
  }
): Promise<string> => {
  for (let i = 0; i < deliverable.toolbox.length; i++) {
    const item = deliverable.toolbox[i];
    const row = [
      String(i + 1),
      new Date().toLocaleString('ar-TN'),
      deliverable.subject,
      deliverable.gradeLevel,
      item.categoryLabel,
      item.title,
      item.promptText,
      item.usageTips,
    ];
    await appendRowToSpreadsheet(accessToken, spreadsheetId, 'صندوق أدوات الأستاذ', row);
  }

  return `https://docs.google.com/spreadsheets/d/${spreadsheetId}/edit`;
};

export const createSession3Spreadsheet = async (
  accessToken: string,
  customTitle?: string
): Promise<SheetCreationResult> => {
  const title =
    customTitle ||
    `Fiche de préparation - الحصة 3 (${new Date().toLocaleDateString('fr-FR')})`;

  const response = await fetch('https://sheets.googleapis.com/v4/spreadsheets', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      properties: {
        title,
        locale: 'ar_TN',
        autoRecalc: 'ON_CHANGE',
      },
      sheets: [
        {
          properties: {
            title: 'جذاذة الحصة البيداغوجية',
            gridProperties: {
              frozenRowCount: 1,
            },
          },
        },
        {
          properties: {
            title: 'فحص المفتش وقرارات الأستاذ',
            gridProperties: {
              frozenRowCount: 1,
            },
          },
        },
      ],
    }),
  });

  if (!response.ok) {
    const errData = await response.json().catch(() => ({}));
    throw new Error(errData?.error?.message || 'فشل إنشاء ملف Google Sheets للحصة الثالثة');
  }

  const data = await response.json();
  const spreadsheetId = data.spreadsheetId;
  const spreadsheetUrl = `https://docs.google.com/spreadsheets/d/${spreadsheetId}/edit`;

  // Headers for Sheet 1: Progression table
  const headersSheet1 = [
    'المرحلة الزمنية',
    'الطور البيداغوجي',
    'دور الأستاذ (Enseignant)',
    'دور التلميذ (Élève)',
    'النشاط وسند العمل (Activité)',
    'الوسائل والوسائط (Moyens)',
    'أسلوب التقويم (Évaluation)',
  ];
  await appendRowToSpreadsheet(accessToken, spreadsheetId, 'جذاذة الحصة البيداغوجية', headersSheet1);

  // Headers for Sheet 2: Audit & Review
  const headersSheet2 = [
    'العنصر المفحوص',
    'التشخيص البيداغوجي لـ AI Reviewer',
    'قرار الأستاذ البيداغوجي',
    'التعليل والتكييف الواقعي',
  ];
  await appendRowToSpreadsheet(accessToken, spreadsheetId, 'فحص المفتش وقرارات الأستاذ', headersSheet2);

  return {
    spreadsheetId,
    spreadsheetUrl,
    title,
  };
};

export const exportSession3FicheToSheet = async (
  accessToken: string,
  spreadsheetId: string,
  fiche: Session3Fiche
): Promise<string> => {
  // Add Header context info in Sheet 1
  await appendRowToSpreadsheet(accessToken, spreadsheetId, 'جذاذة الحصة البيداغوجية', [
    'المادة والمستوى',
    `${fiche.matiere} - ${fiche.niveau}`,
    'موضوع الحصة',
    fiche.theme,
    'المدة الزمنية',
    fiche.duree,
    `تاريخ الإنجاز: ${fiche.createdAt}`,
  ]);

  await appendRowToSpreadsheet(accessToken, spreadsheetId, 'جذاذة الحصة البيداغوجية', [
    'الأهداف التعليمية',
    fiche.objectifs.join(' | '),
    'المكتسبات القبلية',
    fiche.prerequis.join(' | '),
    'وضعية الانطلاق',
    fiche.situationDepart,
    '---',
  ]);

  // Append lesson rows
  for (const row of fiche.deroulement) {
    await appendRowToSpreadsheet(accessToken, spreadsheetId, 'جذاذة الحصة البيداغوجية', [
      row.time,
      row.phase,
      row.teacherRole,
      row.studentRole,
      row.activity,
      row.materials,
      row.evaluation,
    ]);
  }

  // Append Synthesis row
  await appendRowToSpreadsheet(accessToken, spreadsheetId, 'جذاذة الحصة البيداغوجية', [
    'الخلاصة والتركيب النهائي',
    fiche.synthese,
    'التقويم التكويني الختامي',
    fiche.evaluationFinale,
    'الأستاذ المشرف',
    fiche.teacherName || 'أستاذ المعهد',
    'جاهز للتنفيذ الصفي',
  ]);

  // Export Sheet 2: Inspector Review
  for (const pf of fiche.inspectorReview.pointsForts) {
    await appendRowToSpreadsheet(accessToken, spreadsheetId, 'فحص المفتش وقرارات الأستاذ', [
      'نقطة قوة بيداغوجية',
      pf,
      'تم اعتمادها وتثبيتها في الجذاذة',
      'تعزز فاعلية المتعلم وملاءمة السند',
    ]);
  }

  for (const pf of fiche.inspectorReview.pointsFaibles) {
    await appendRowToSpreadsheet(accessToken, spreadsheetId, 'فحص المفتش وقرارات الأستاذ', [
      'نقطة ضعف / خطر صامت',
      pf,
      'تمت معالجتها بإضافة تدابير تمايزية',
      'توفير بطاقات مساندة وتحديد أدوار الثنائيات',
    ]);
  }

  for (const irr of fiche.inspectorReview.elementsIrrealistes) {
    await appendRowToSpreadsheet(accessToken, spreadsheetId, 'فحص المفتش وقرارات الأستاذ', [
      'عنصر غير واقعي (زمن / وسائل)',
      irr,
      'تم تعديل الزمن وتبسيطه للواقع التونسي',
      'الانضباط الصارم وحساب وقت توزيع الأوراق',
    ]);
  }

  await appendRowToSpreadsheet(accessToken, spreadsheetId, 'فحص المفتش وقرارات الأستاذ', [
    'القرار النهائي للأستاذ',
    `المقبول: ${fiche.inspectorReview.teacherDecisions.accept.join(' • ')} | المرفوض: ${fiche.inspectorReview.teacherDecisions.reject.join(' • ')}`,
    'صاحب القرار البيداغوجي الأول والأخير',
    fiche.inspectorReview.teacherDecisions.justification,
  ]);

  return `https://docs.google.com/spreadsheets/d/${spreadsheetId}/edit`;
};

// ==========================================
// SESSION 4 SPREADSHEET EXPORT
// ==========================================

import { Session4Deliverable } from '../types';

export const createSession4Spreadsheet = async (
  accessToken: string,
  customTitle?: string
): Promise<SheetCreationResult> => {
  const title =
    customTitle ||
    `Évaluation & Banque d’exercices IA - الحصة 4 (${new Date().toLocaleDateString('fr-FR')})`;

  const response = await fetch('https://sheets.googleapis.com/v4/spreadsheets', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      properties: {
        title,
        locale: 'ar_TN',
        autoRecalc: 'ON_CHANGE',
      },
      sheets: [
        {
          properties: {
            title: 'موضوع الاختبار وسلم التنقيط',
            gridProperties: {
              frozenRowCount: 1,
            },
          },
        },
        {
          properties: {
            title: 'التمايز البيداغوجي (3 مسارات)',
            gridProperties: {
              frozenRowCount: 1,
            },
          },
        },
        {
          properties: {
            title: 'تقرير المراجعة النقدية AI Reviewer',
            gridProperties: {
              frozenRowCount: 1,
            },
          },
        },
      ],
    }),
  });

  if (!response.ok) {
    const errData = await response.json().catch(() => ({}));
    throw new Error(errData?.error?.message || 'فشل إنشاء جدول Google Sheets للاختبار');
  }

  const data = await response.json();
  const spreadsheetId = data.spreadsheetId;
  const spreadsheetUrl = `https://docs.google.com/spreadsheets/d/${spreadsheetId}/edit`;

  // Sheet 1 Headers
  await appendRowToSpreadsheet(accessToken, spreadsheetId, 'موضوع الاختبار وسلم التنقيط', [
    'رقم التمرين',
    'عنوان التمرين',
    'النوع والنمط',
    'الهدف البيداغوجي الإجرائي',
    'درجة الصعوبة',
    'العدد (Points)',
    'الزمن المقدر',
    'نص التمرين (Énoncé)',
    'عناصر الإجابة النموذجية (Corrigé)',
    'سلم التنقيط المفصل (Barème)',
    'الأخطاء الشائعة المتوقعة',
  ]);

  // Sheet 2 Headers
  await appendRowToSpreadsheet(accessToken, spreadsheetId, 'التمايز البيداغوجي (3 مسارات)', [
    'رقم التمرين',
    'عنوان التمرين والهدف المشترك',
    'النسخة المبسطة (مسار الدعم والتوجيه)',
    'النسخة القياسية (المسار العادي للقسم)',
    'نسخة التحدي والتعمق (للمتفوقين)',
  ]);

  // Sheet 3 Headers
  await appendRowToSpreadsheet(accessToken, spreadsheetId, 'تقرير المراجعة النقدية AI Reviewer', [
    'المحور النقدي المفحوص',
    'تقرير الفحص من الذكاء الاصطناعي (AI Reviewer)',
    'قرار الأستاذ البيداغوجي (قبول / تعديل / رفض)',
    'التعليل البيداغوجي الميداني للأستاذ',
  ]);

  return {
    spreadsheetId,
    spreadsheetUrl,
    title,
  };
};

export const exportSession4DeliverableToSheet = async (
  accessToken: string,
  spreadsheetId: string,
  deliverable: Session4Deliverable
): Promise<string> => {
  // Context row on Sheet 1
  await appendRowToSpreadsheet(accessToken, spreadsheetId, 'موضوع الاختبار وسلم التنقيط', [
    'معلومات الموضوع',
    deliverable.titreEvaluation,
    `المادة: ${deliverable.matiere}`,
    `المستوى: ${deliverable.niveau}`,
    `المدة: ${deliverable.duree}`,
    `المجموع: ${deliverable.baremeTotal} نقطة`,
    `الأستاذ: ${deliverable.teacherName || 'أستاذ المعهد'}`,
    `تاريخ الإنجاز: ${deliverable.createdAt}`,
    deliverable.consignesGenerales,
    deliverable.baremeExplication,
    'جاهز للاستعمال',
  ]);

  // Append exercises to Sheet 1 & Sheet 2
  for (const ex of deliverable.exercices) {
    // Sheet 1
    await appendRowToSpreadsheet(accessToken, spreadsheetId, 'موضوع الاختبار وسلم التنقيط', [
      `تمرين ${ex.numero}`,
      ex.titre,
      ex.type,
      ex.objectif,
      ex.difficulte,
      `${ex.points} نقاط`,
      ex.tempsEstime,
      ex.enonce,
      ex.corrigeDetaille,
      ex.baremeDetaille,
      ex.piegesEtErreursCourantes || 'الانتباه للتسرع والحساب الذهني',
    ]);

    // Sheet 2: Differentiation
    if (ex.differentiation) {
      await appendRowToSpreadsheet(accessToken, spreadsheetId, 'التمايز البيداغوجي (3 مسارات)', [
        `تمرين ${ex.numero}`,
        `${ex.titre} — ${ex.objectif}`,
        ex.differentiation.simplifiee,
        ex.differentiation.standard,
        ex.differentiation.defi,
      ]);
    }
  }

  // Sheet 3: AI Reviewer Report
  const review = deliverable.aiReviewReport;
  if (review) {
    if (review.questionsAmbigues?.length) {
      for (const item of review.questionsAmbigues) {
        await appendRowToSpreadsheet(accessToken, spreadsheetId, 'تقرير المراجعة النقدية AI Reviewer', [
          'الأسئلة الغامضة أو المحتملة للتأويل',
          item,
          'مقبول مع تعديل الصياغة',
          'إزالة أي لبس لفظي أو حسابي لصالح التلميذ',
        ]);
      }
    }

    if (review.erreursPotentielles?.length) {
      for (const item of review.erreursPotentielles) {
        await appendRowToSpreadsheet(accessToken, spreadsheetId, 'تقرير المراجعة النقدية AI Reviewer', [
          'الأخطاء أو الفخاخ المحتملة',
          item,
          'تضمينها في سلم التنقيط',
          'مكافأة التفطن للفخ ببنود خاصة في الباريم',
        ]);
      }
    }

    await appendRowToSpreadsheet(accessToken, spreadsheetId, 'تقرير المراجعة النقدية AI Reviewer', [
      'توازن الصعوبة البيداغوجية',
      review.desequilibreDifficulte,
      'معتمد',
      'توزيع هرمي عادل يراعي كافة المستويات',
    ]);

    await appendRowToSpreadsheet(accessToken, spreadsheetId, 'تقرير المراجعة النقدية AI Reviewer', [
      'واقعية التوقيت الصفي',
      review.realismeTemporel,
      'معتمد مع تخصيص هامش مراجعة',
      'ترك 3 إلى 5 دقائق ختامية لضبط الورقة',
    ]);

    if (review.decisionEnseignant) {
      await appendRowToSpreadsheet(accessToken, spreadsheetId, 'تقرير المراجعة النقدية AI Reviewer', [
        'القرارات النهائية للأستاذ',
        `تم قبول: ${review.decisionEnseignant.modificationsAcceptees.join(' • ')} || تم رفض: ${review.decisionEnseignant.modificationsRejetees.join(' • ')}`,
        'الأستاذ سيد القرار التقييمي',
        review.decisionEnseignant.justification,
      ]);
    }
  }

  return `https://docs.google.com/spreadsheets/d/${spreadsheetId}/edit`;
};



