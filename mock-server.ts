import { createMiddleware } from '@mswjs/http-middleware';
import cors from 'cors';
import express from 'express';
import logger from 'pino-http';

import { handlers } from '@/testing/handlers/southParkHandlers';

const app = express();

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  }),
);

app.use(express.json());
app.use(
  logger({
    level: 'info',
    redact: ['req.headers', 'res.headers'],
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true,
        translateTime: true,
      },
    },
  }),
);
app.use(createMiddleware(...handlers));

const PORT = 8000
app.listen(PORT, () => {
  console.log(
    `Mock API server started at http://localhost:${PORT}`,
  );
});

