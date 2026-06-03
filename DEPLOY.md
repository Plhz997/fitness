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
   - `OPENAI_API_KEY`
   - `OPENAI_MODEL=gpt-5-mini`
   - `AI_PROVIDER=openai`
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

Expected JSON:

```json
{
  "provider": "openai",
  "model": "gpt-5-mini",
  "hasApiKey": true,
  "mode": "live",
  "visionReady": true
}
```

This confirms the key is configured. The final proof is uploading a real food photo in the app. If the API key is invalid or expired, the app will show the real provider error instead of returning fake food results.

## DeepSeek

You can use DeepSeek for text-only features such as weekly reports and nutrition advice:

```bash
AI_PROVIDER=deepseek
DEEPSEEK_API_KEY=your_key
DEEPSEEK_MODEL=deepseek-chat
DEEPSEEK_BASE_URL=https://api.deepseek.com
```

Photo food recognition still needs a vision model. If `AI_PROVIDER=deepseek`, `/api/analyze-food-image` will return a clear error instead of fake default food data.
