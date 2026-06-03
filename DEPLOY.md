# Deploy

This app is ready for long-term deployment on Render.

## Local preview

Run the app from the project folder:

```bash
npm install
PORT=4210 npm start
```

Open:

```text
http://localhost:4210
```

Do not open `index.html` with `file://` for AI features. The frontend must call the Node API server.

## Render Blueprint

1. Open this link:
   https://render.com/deploy?repo=https://github.com/Plhz997/fitness
2. Connect the GitHub repository.
3. Set environment variables:
   - `AI_PROVIDER=qwen`
   - `QWEN_API_KEY`
   - `QWEN_MODEL=qwen-plus`
   - `QWEN_VISION_MODEL=qwen3-vl-plus`
   - `QWEN_BASE_URL=https://dashscope.aliyuncs.com/compatible-mode/v1`
   - `QWEN_VISION_BASE_URL=https://dashscope.aliyuncs.com/compatible-mode/v1`
4. Deploy the web service.

Render will run:

```bash
npm install
npm start
```

The app reads `PORT` from the hosting provider and serves both the frontend and API from the same URL.

## Verify AI

After deployment, open:

```text
https://your-render-url.onrender.com/api/health
```

Expected JSON should look like:

```json
{
  "provider": "qwen",
  "model": "qwen-plus",
  "visionModel": "qwen3-vl-plus",
  "hasApiKey": true,
  "mode": "live",
  "visionReady": true
}
```

This confirms the key is configured. The final proof is uploading a real food photo in the app. If the key is invalid or the model name is unavailable, the app will show the real provider error instead of returning fake food results.

## Qwen Notes

The app uses Alibaba Cloud DashScope's OpenAI-compatible endpoint:

```bash
AI_PROVIDER=qwen
QWEN_API_KEY=your_dashscope_key
QWEN_MODEL=qwen-plus
QWEN_VISION_MODEL=qwen3-vl-plus
QWEN_BASE_URL=https://dashscope.aliyuncs.com/compatible-mode/v1
QWEN_VISION_BASE_URL=https://dashscope.aliyuncs.com/compatible-mode/v1
```

You can also set `DASHSCOPE_API_KEY` instead of `QWEN_API_KEY`.
