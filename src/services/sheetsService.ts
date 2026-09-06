import { PedagogicalDeliverable } from '../types';

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

