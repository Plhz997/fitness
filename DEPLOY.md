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
   - `AI_PROVIDER=deepseek`
   - `DEEPSEEK_API_KEY`
   - `DEEPSEEK_MODEL=deepseek-chat`
   - `DEEPSEEK_VISION_MODEL=deepseek-v4-flash`
   - `DEEPSEEK_BASE_URL=https://api.deepseek.com`
   - `DEEPSEEK_VISION_BASE_URL=https://api.deepseek.com`
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
  "provider": "deepseek",
  "model": "deepseek-chat",
  "visionModel": "deepseek-v4-flash",
  "hasApiKey": true,
  "mode": "live",
  "visionReady": true
}
```

This confirms the key is configured. The final proof is uploading a real food photo in the app. If the API key is invalid, expired, or the selected DeepSeek endpoint does not accept image input, the app will show the real provider error instead of returning fake food results.

## DeepSeek Notes

The app is now configured to use DeepSeek by default:

```bash
AI_PROVIDER=deepseek
DEEPSEEK_API_KEY=your_key
DEEPSEEK_MODEL=deepseek-chat
DEEPSEEK_VISION_MODEL=deepseek-v4-flash
DEEPSEEK_BASE_URL=https://api.deepseek.com
DEEPSEEK_VISION_BASE_URL=https://api.deepseek.com
```

DeepSeek's public API may reject image input depending on your account and model access. If you use a compatible hosted or self-deployed DeepSeek-VL endpoint, set `DEEPSEEK_VISION_BASE_URL` and `DEEPSEEK_VISION_MODEL` to that endpoint/model.
