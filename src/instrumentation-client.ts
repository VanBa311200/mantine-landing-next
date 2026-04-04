import * as Sentry from "@sentry/nextjs";

const isProduction = process.env.NODE_ENV === "production";
const tracesSampleRate = Number.parseFloat(
  process.env.SENTRY_TRACES_SAMPLE_RATE ?? "",
);
const replaysSessionSampleRate = Number.parseFloat(
  process.env.SENTRY_REPLAYS_SESSION_SAMPLE_RATE ?? "",
);
const replaysOnErrorSampleRate = Number.parseFloat(
  process.env.SENTRY_REPLAYS_ON_ERROR_SAMPLE_RATE ?? "",
);

if (isProduction) {
  Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    environment: process.env.VERCEL_ENV,
    release: process.env.VERCEL_GIT_COMMIT_SHA,
    sendDefaultPii: process.env.SENTRY_SEND_DEFAULT_PII === "true",
    tracesSampleRate: Number.isFinite(tracesSampleRate)
      ? tracesSampleRate
      : 0.1,
    replaysSessionSampleRate: Number.isFinite(replaysSessionSampleRate)
      ? replaysSessionSampleRate
      : 0.1,
    replaysOnErrorSampleRate: Number.isFinite(replaysOnErrorSampleRate)
      ? replaysOnErrorSampleRate
      : 1.0,
    integrations: [Sentry.replayIntegration()],
  });
}

export const onRouterTransitionStart: typeof Sentry.captureRouterTransitionStart = (
  ...args
) => {
  if (!isProduction) {
    return;
  }

  return Sentry.captureRouterTransitionStart(...args);
};
