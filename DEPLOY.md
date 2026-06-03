# Deploy

This app is ready for long-term deployment on Render.

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

## DeepSeek

You can use DeepSeek for text-only features such as weekly reports and nutrition advice:

```bash
AI_PROVIDER=deepseek
DEEPSEEK_API_KEY=your_key
DEEPSEEK_MODEL=deepseek-chat
DEEPSEEK_BASE_URL=https://api.deepseek.com
```

Photo food recognition still needs a vision model. If `AI_PROVIDER=deepseek`, `/api/analyze-food-image` will return a clear error instead of fake default food data.
