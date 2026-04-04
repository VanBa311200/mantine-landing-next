import * as Sentry from "@sentry/nextjs";

const tracesSampleRate = Number.parseFloat(
  process.env.SENTRY_TRACES_SAMPLE_RATE ?? "",
);

Sentry.init({
  dsn: process.env.SENTRY_DSN ?? process.env.NEXT_PUBLIC_SENTRY_DSN,
  environment: process.env.VERCEL_ENV,
  release: process.env.VERCEL_GIT_COMMIT_SHA,
  sendDefaultPii: process.env.SENTRY_SEND_DEFAULT_PII === "true",
  tracesSampleRate: Number.isFinite(tracesSampleRate)
    ? tracesSampleRate
    : process.env.NODE_ENV === "development"
      ? 1.0
      : 0.1,
});
