import * as Sentry from "@sentry/nextjs";

const isProduction = process.env.NODE_ENV === "production";
export const dynamic = "force-dynamic";

class SentryExampleAPIError extends Error {
  constructor(message: string | undefined) {
    super(message);
    this.name = "SentryExampleAPIError";
  }
}

// A faulty API route to test Sentry's error monitoring
export function GET() {
  if (!isProduction) {
    return Response.json(
      {
        ok: false,
        message: "Sentry example API is disabled outside production.",
      },
      { status: 403 },
    );
  }

  Sentry.logger.info("Sentry example API called");
  throw new SentryExampleAPIError(
    "This error is raised on the backend called by the example page.",
  );
}
