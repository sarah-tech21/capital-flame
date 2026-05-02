import { createRootRoute, HeadContent, Link, Outlet, Scripts } from "@tanstack/react-router";
import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl text-brand-flame">404</h1>
        <h2 className="mt-4 font-display text-2xl">Page Not Found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          That page doesn't exist. Let's get you back home.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex rounded-full bg-gradient-flame px-6 py-3 text-sm font-bold text-primary-foreground"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Capital Flame — HVAC & Pool Heater Experts in Ottawa" },
      { name: "description", content: "Capital Flame: 25+ years of trusted HVAC, furnace, A/C and pool heater service across Ottawa. TSSA certified. Call 613-422-1125." },
      { name: "author", content: "Capital Flame" },
      { property: "og:title", content: "Capital Flame — HVAC & Pool Heater Experts in Ottawa" },
      { property: "og:description", content: "Capital Flame: 25+ years of trusted HVAC, furnace, A/C and pool heater service across Ottawa. TSSA certified. Call 613-422-1125." },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Capital Flame — HVAC & Pool Heater Experts in Ottawa" },
      { name: "twitter:description", content: "Capital Flame: 25+ years of trusted HVAC, furnace, A/C and pool heater service across Ottawa. TSSA certified. Call 613-422-1125." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/c93c87df-a1bf-4661-a0a4-24abac3eda74/id-preview-68694d8d--9e972cc6-8850-43d6-8e92-09a6a7896562.lovable.app-1777746329000.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/c93c87df-a1bf-4661-a0a4-24abac3eda74/id-preview-68694d8d--9e972cc6-8850-43d6-8e92-09a6a7896562.lovable.app-1777746329000.png" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: () => <Outlet />,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
