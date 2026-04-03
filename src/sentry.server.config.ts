import * as Sentry from "@sentry/nextjs";

const tracesSampleRate = Number.parseFloat(
  process.env.SENTRY_TRACES_SAMPLE_RATE ?? "",
);

Sentry.init({
  dsn: process.env.SENTRY_DSN ?? process.env.NEXT_PUBLIC_SENTRY_DSN,
  environment: process.env.SENTRY_ENVIRONMENT ?? process.env.NODE_ENV,
  release: process.env.SENTRY_RELEASE,
  sendDefaultPii: process.env.SENTRY_SEND_DEFAULT_PII === "true",
  tracesSampleRate: Number.isFinite(tracesSampleRate)
    ? tracesSampleRate
    : process.env.NODE_ENV === "development"
      ? 1.0
      : 0.1,
});
