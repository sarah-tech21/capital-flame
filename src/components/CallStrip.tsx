import { Phone } from "lucide-react";

export function CallStrip() {
  return (
    <section className="bg-gradient-flame py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-center md:flex-row md:text-left md:px-8">
        <div>
          <h3 className="font-display text-3xl text-primary-foreground md:text-4xl">
            Need Service Today? We're Open 7 Days a Week.
          </h3>
          <p className="mt-1 text-primary-foreground/85">
            24/7 emergency service across Ottawa, Orleans, Kanata, Nepean, Barrhaven & more.
          </p>
        </div>
        <a
          href="tel:6134221125"
          className="inline-flex items-center gap-3 rounded-full bg-brand-deep px-7 py-4 font-display text-2xl tracking-wider text-primary-foreground shadow-elegant transition-transform hover:scale-105"
        >
          <Phone className="h-6 w-6" /> 613-422-1125
        </a>
      </div>
    </section>
  );
}
