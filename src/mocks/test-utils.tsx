import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { FC } from "react";

export const testingClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      cacheTime: Infinity,
    },
  },
  logger: {
    log: console.log,
    warn: console.warn,
    // ✅ no more errors on the console for tests
    error:
      process.env.APP_ENV === "test"
        ? () => {
            return null;
          }
        : console.error,
  },
});

export const AllTheProviders = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <QueryClientProvider client={testingClient}>{children}</QueryClientProvider>
  );
};

export * from "@testing-library/react";
