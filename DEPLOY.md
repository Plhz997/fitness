# Deploy

This app is ready for long-term deployment on Render.

## Render Blueprint

1. Open this link:
   https://render.com/deploy?repo=https://github.com/Plhz997/fitness
2. Connect the GitHub repository.
3. Set environment variables:
   - `OPENAI_API_KEY`
   - `OPENAI_MODEL=gpt-5-mini`
4. Deploy the web service.

Render will run:

```bash
npm install
npm start
```

The app reads `PORT` from the hosting provider and serves both the frontend and API from the same URL.
