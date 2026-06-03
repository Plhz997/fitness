import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";

const PORT = Number(process.env.PORT) || 4173;
const ROOT = process.cwd();

async function loadLocalEnv() {
  try {
    const text = await readFile(join(ROOT, ".env"), "utf8");
    for (const line of text.split(/\r?\n/)) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const separator = trimmed.indexOf("=");
      if (separator === -1) continue;
      const key = trimmed.slice(0, separator).trim();
      const value = trimmed.slice(separator + 1).trim();
      if (key && process.env[key] === undefined) {
        process.env[key] = value;
      }
    }
  } catch {
    // Local .env is optional; deployments can provide environment variables directly.
  }
}

await loadLocalEnv();

const MODEL = process.env.OPENAI_MODEL || "gpt-5-mini";
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const AI_PROVIDER = process.env.AI_PROVIDER || "qwen";
const QWEN_API_KEY = process.env.QWEN_API_KEY || process.env.DASHSCOPE_API_KEY;
const QWEN_MODEL = process.env.QWEN_MODEL || "qwen-plus";
const QWEN_VISION_MODEL = process.env.QWEN_VISION_MODEL || "qwen3-vl-plus";
const QWEN_BASE_URL = process.env.QWEN_BASE_URL || "https://dashscope.aliyuncs.com/compatible-mode/v1";
const QWEN_VISION_BASE_URL = process.env.QWEN_VISION_BASE_URL || QWEN_BASE_URL;

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
};

function sendJson(res, status, payload) {
  res.writeHead(status, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(payload));
}

async function readJson(req) {
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const text = Buffer.concat(chunks).toString("utf8");
  return text ? JSON.parse(text) : {};
}

function extractJson(text) {
  const fenced = text.match(/```json\s*([\s\S]*?)\s*```/i);
  const raw = fenced ? fenced[1] : text;
  const start = raw.indexOf("{");
  const end = raw.lastIndexOf("}");
  if (start === -1 || end === -1) throw new Error("Model response did not include JSON.");
  return JSON.parse(raw.slice(start, end + 1));
}

async function callOpenAI({ system, userText, image }) {
  if (!OPENAI_API_KEY) {
    return { mocked: true };
  }

  const content = [{ type: "input_text", text: userText }];
  if (image) {
    content.push({ type: "input_image", image_url: image });
  }

  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: MODEL,
      input: [
        { role: "system", content: [{ type: "input_text", text: system }] },
        { role: "user", content },
      ],
      text: { format: { type: "json_object" } },
    }),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error?.message || "OpenAI API request failed.");
  }

  const outputText =
    data.output_text ||
    data.output
      ?.flatMap((item) => item.content || [])
      .map((item) => item.text || "")
      .join("\n") ||
    "";

  return extractJson(outputText);
}

async function callQwenJson({ system, userText }) {
  if (!QWEN_API_KEY) {
    return { mocked: true };
  }

  const response = await fetch(`${QWEN_BASE_URL}/chat/completions`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${QWEN_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: QWEN_MODEL,
      messages: [
        { role: "system", content: `${system}\nReturn strict JSON only.` },
        { role: "user", content: userText },
      ],
      response_format: { type: "json_object" },
      stream: false,
    }),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error?.message || "Qwen API request failed.");
  }
  return extractJson(data.choices?.[0]?.message?.content || "{}");
}

async function callQwenVision({ system, userText, image }) {
  if (!QWEN_API_KEY) {
    throw new Error("缺少 QWEN_API_KEY 或 DASHSCOPE_API_KEY，无法调用通义千问视觉识别接口。");
  }

  const response = await fetch(`${QWEN_VISION_BASE_URL}/chat/completions`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${QWEN_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: QWEN_VISION_MODEL,
      messages: [
        { role: "system", content: `${system}\nReturn strict JSON only.` },
        {
          role: "user",
          content: [
            { type: "text", text: userText },
            { type: "image_url", image_url: { url: image } },
          ],
        },
      ],
      response_format: { type: "json_object" },
      stream: false,
    }),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(
      data.error?.message ||
        "通义千问图片识别请求失败。请检查 QWEN_API_KEY、QWEN_VISION_MODEL 和 QWEN_VISION_BASE_URL。",
    );
  }
  return extractJson(data.choices?.[0]?.message?.content || "{}");
}

function callTextJson(payload) {
  return AI_PROVIDER === "qwen" ? callQwenJson(payload) : callOpenAI(payload);
}

function mockFoodAnalysis() {
  return {
    foods: [
      { id: "rice", name: "米饭", kcalRange: [165, 195], protein: 3, carb: 41, fat: 0.4, portion: "一碗", cooking: "清蒸", box: { left: 12, top: 17, width: 34, height: 30 } },
      { id: "pork", name: "红烧肉", kcalRange: [390, 455], protein: 18, carb: 10, fat: 34, portion: "一份", cooking: "红烧", box: { left: 47, top: 18, width: 38, height: 31 } },
      { id: "greens", name: "青菜", kcalRange: [75, 105], protein: 4, carb: 9, fat: 4, portion: "一份", cooking: "油炒", box: { left: 14, top: 53, width: 36, height: 26 } },
      { id: "soup", name: "鸡蛋汤", kcalRange: [55, 85], protein: 6, carb: 2, fat: 4, portion: "一碗", cooking: "水煮", box: { left: 55, top: 54, width: 29, height: 27 } }
    ],
    summary: {
      totalKcalRange: [690, 840],
      confidence: "未确认份量，建议让用户校正米饭与红烧肉份量。"
    }
  };
}

function mockNutritionOcr() {
  return {
    productName: "高蛋白酸奶",
    servingSize: "100g",
    perServing: { energyKcal: 196, protein: 8.6, fat: 5.2, carbs: 28.4, sodiumMg: 260 },
    per100g: { energyKcal: 196, protein: 8.6, fat: 5.2, carbs: 28.4, sodiumMg: 260 },
    extractedText: "能量 820kJ 蛋白质 8.6g 脂肪 5.2g 碳水化合物 28.4g 钠 260mg"
  };
}

async function handleApi(req, res, pathname) {
  try {
    const body = await readJson(req);

    if (pathname === "/api/analyze-food-image") {
      if (AI_PROVIDER === "qwen") {
        if (!body.image) {
          return sendJson(res, 400, { error: "No image was provided for food analysis." });
        }
        const result = await callQwenVision({
          image: body.image,
          system: "You are a nutrition vision assistant. Return strict JSON only. Estimate food items, bounding boxes in percentage coordinates, macros, cooking method, portion, confidence, and calorie ranges. Use ranges, not single-point certainty.",
          userText: "Analyze this meal image. JSON shape: {foods:[{id,name,kcalRange:[min,max],protein,carb,fat,portion,cooking,box:{left,top,width,height}}],summary:{totalKcalRange:[min,max],confidence}}."
        });
        return sendJson(res, 200, result);
      }
      if (!OPENAI_API_KEY) {
        return sendJson(res, 503, {
          error: "缺少 OPENAI_API_KEY，无法进行真实拍照识别。请在本地 .env 或部署平台环境变量中配置有效 OpenAI Key。"
        });
      }
      if (!body.image) {
        return sendJson(res, 400, { error: "No image was provided for food analysis." });
      }
      const result = await callOpenAI({
        image: body.image,
        system: "You are a nutrition vision assistant. Return strict JSON only. Estimate food items, bounding boxes in percentage coordinates, macros, cooking method, portion, confidence, and calorie ranges. Use ranges, not single-point certainty.",
        userText: "Analyze this meal image. JSON shape: {foods:[{id,name,kcalRange:[min,max],protein,carb,fat,portion,cooking,box:{left,top,width,height}}],summary:{totalKcalRange:[min,max],confidence}}."
      });
      return sendJson(res, 200, result);
    }

    if (pathname === "/api/ocr-nutrition") {
      const result = await callTextJson({
        image: body.image,
        system: "You extract nutrition facts from Chinese or English package labels. Return strict JSON only. If a value is not visible, use null.",
        userText: "OCR this nutrition facts panel and extract productName, servingSize, perServing, per100g, and extractedText. Fields: energyKcal, protein, fat, carbs, sodiumMg."
      });
      if (result.mocked) return sendJson(res, 200, { ...mockNutritionOcr(), mocked: true });
      return sendJson(res, 200, result);
    }

    if (pathname === "/api/barcode-lookup") {
      return sendJson(res, 200, {
        barcode: body.barcode || "6900000000000",
        productName: "全麦蛋白棒",
        kcalPer100g: 390,
        proteinPer100g: 22,
        fatPer100g: 9,
        carbsPer100g: 48,
        source: OPENAI_API_KEY ? "demo-food-database" : "mock-food-database"
      });
    }

    if (pathname === "/api/weekly-report") {
      const result = await callTextJson({
        system: "You are a nutrition coach for a student calorie-tracking app. Return strict JSON only.",
        userText: `Generate a weekly report JSON from these records: ${JSON.stringify(body.records || [])}. Shape: {summary, warnings:[], badges:[], keywords:[]}.`
      });
      return sendJson(res, 200, result.mocked ? {
        summary: "本周共记录 18 餐，日均摄入 1760 kcal。周三摄入最高，主要来自晚餐和奶茶。",
        warnings: ["饮料热量偏高，建议优先选择无糖饮品。", "蛋白质占比偏低，可增加鸡蛋、牛奶或豆制品。"],
        badges: ["记录小能手", "周报达人"],
        keywords: ["食堂", "奶茶", "蛋白偏低"]
      } : result);
    }

    if (pathname === "/api/health") {
      return sendJson(res, 200, getHealthPayload());
    }

    return sendJson(res, 404, { error: "Unknown API route." });
  } catch (error) {
    return sendJson(res, 500, { error: error.message });
  }
}

function getHealthPayload() {
  const activeKey = AI_PROVIDER === "qwen" ? QWEN_API_KEY : OPENAI_API_KEY;
  return {
    provider: AI_PROVIDER,
    model: AI_PROVIDER === "qwen" ? QWEN_MODEL : MODEL,
    visionModel: AI_PROVIDER === "qwen" ? QWEN_VISION_MODEL : MODEL,
    baseUrl: AI_PROVIDER === "qwen" ? QWEN_BASE_URL : undefined,
    hasApiKey: Boolean(activeKey),
    mode: activeKey ? "live" : "mock",
    visionReady: Boolean(activeKey),
  };
}

async function serveStatic(req, res, pathname) {
  const safePath = pathname === "/" ? "index.html" : pathname.slice(1);
  const filePath = normalize(join(ROOT, safePath));
  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  try {
    const file = await readFile(filePath);
    res.writeHead(200, { "Content-Type": mimeTypes[extname(filePath)] || "application/octet-stream" });
    res.end(file);
  } catch {
    res.writeHead(404);
    res.end("Not found");
  }
}

createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  if (req.method === "GET" && url.pathname === "/api/health") {
    sendJson(res, 200, getHealthPayload());
    return;
  }
  if (req.method === "POST" && url.pathname.startsWith("/api/")) {
    await handleApi(req, res, url.pathname);
    return;
  }
  await serveStatic(req, res, url.pathname);
}).listen(PORT, () => {
  console.log(`Fitness AI app running at http://localhost:${PORT}`);
});
