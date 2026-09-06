import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-initialize Gemini AI client safely
let aiClient: GoogleGenAI | null = null;
function getAIClient(): GoogleGenAI | null {
  if (!aiClient && process.env.GEMINI_API_KEY) {
    aiClient = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  }
  return aiClient;
}

// Health check endpoint
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    hasGeminiKey: Boolean(process.env.GEMINI_API_KEY),
    timestamp: new Date().toISOString(),
  });
});

// Interactive Pedagogical AI Completion API (Optional in-app assistant)
app.post('/api/generate', async (req: Request, res: Response) => {
  try {
    const { prompt, systemInstruction } = req.body;

    if (!prompt || typeof prompt !== 'string') {
      res.status(400).json({ error: 'Prompt is required' });
      return;
    }

    const ai = getAIClient();
    if (!ai) {
      // If API key is not configured, provide a rich educational fallback
      res.json({
        text: `[تنبيه: يمكنك نسخ الـ Prompt مباشرة وتجربته في ChatGPT أو Gemini]\n\nنموذج إجابة توضيحية لـ Prompt:\n${prompt.slice(0, 120)}...\n\n- النشاط المقترح: وضعية استكشافية تفاعلية.\n- التوقيت: 15 دقيقة للعمل الجماعي + 10 دقائق للتأليف.\n- ملاحظة: ننصحك بمراجعة هذه الإجابة عبر أسئلة التقييم الأربعة (C3)!`,
        isSimulated: true,
      });
      return;
    }

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction:
          systemInstruction ||
          'أنت مساعد ذكاء اصطناعي بيداغوجي مخصص لمساعدة الأساتذة في التعليم الثانوي والأساسي. أجب بدقة وواقعية وبيداغوجيا نشطة وبنية واضحة قابلة للتطبيق في أقسام حقيقية.',
      },
    });

    res.json({
      text: response.text || 'لا توجد إجابة',
      isSimulated: false,
    });
  } catch (error: any) {
    console.error('AI Generation error:', error);
    res.status(500).json({
      error: error?.message || 'حدث خطأ أثناء توليد الإجابة',
    });
  }
});

async function startServer() {
  // Vite dev middleware vs static production files
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
