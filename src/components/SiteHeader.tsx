import { Link } from "@tanstack/react-router";
import { Phone, Menu, X, Flame } from "lucide-react";
import { useState } from "react";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const links = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ] as const;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-flame shadow-elegant md:h-12 md:w-12">
            <Flame className="h-6 w-6 text-primary-foreground animate-flicker md:h-7 md:w-7" />
          </span>
          <span className="font-display text-xl tracking-wide text-foreground md:text-2xl">Capital Flame</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-semibold uppercase tracking-wider text-foreground/80 transition-colors hover:text-brand-flame"
              activeProps={{ className: "text-brand-flame" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="tel:6134221125"
            className="hidden items-center gap-2 rounded-full bg-gradient-flame px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-elegant transition-transform hover:scale-105 md:inline-flex"
          >
            <Phone className="h-4 w-4" />
            613-422-1125
          </a>
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="flex flex-col gap-1 p-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-base font-semibold text-foreground hover:bg-muted"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="tel:6134221125"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-flame px-5 py-3 text-sm font-bold text-primary-foreground"
            >
              <Phone className="h-4 w-4" /> Call 613-422-1125
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
