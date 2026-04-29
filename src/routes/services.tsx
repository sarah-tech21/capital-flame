import { createFileRoute } from "@tanstack/react-router";
import { Flame, Snowflake, Waves, Zap, Wind, Wrench, Shield, Clock } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CallStrip } from "@/components/CallStrip";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Capital Flame HVAC & Pool Heater Ottawa" },
      { name: "description", content: "Furnace, A/C, pool heater, gas line, humidifier and BBQ hookups. Repair, install, inspection and maintenance across Ottawa." },
      { property: "og:title", content: "Capital Flame Services — HVAC & Pool Heater Ottawa" },
      { property: "og:description", content: "Complete home comfort services from a TSSA-certified Ottawa pro." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Flame, title: "Furnace Repair & Installation", items: ["Diagnostic & repair", "New furnace installation", "Annual maintenance", "Safety inspection"] },
  { icon: Snowflake, title: "Air Conditioning", items: ["A/C repair & tune-up", "System inspection", "Pre-season service", "Cooling diagnostics"] },
  { icon: Waves, title: "Pool Heater Specialists", items: ["Repair on all makes", "New installations", "Service & winterization", "Inspection & diagnostics"] },
  { icon: Zap, title: "Gas Line Services", items: ["Underground gas lines", "Gas range hookups", "BBQ hookups", "Code-compliant installs"] },
  { icon: Wind, title: "Central Humidifiers", items: ["Install & service", "Filter replacement", "System tune-up", "Whole-home comfort"] },
  { icon: Wrench, title: "24/7 Emergency Service", items: ["After-hours response", "Weekend availability", "No-heat emergencies", "Bilingual service"] },
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="bg-gradient-hero py-20 text-primary-foreground">
        <div className="mx-auto max-w-5xl px-4 text-center md:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-flame">Full-Service HVAC</span>
          <h1 className="mt-3 font-display text-5xl tracking-tight md:text-7xl">Our Services</h1>
          <p className="mx-auto mt-5 max-w-2xl text-primary-foreground/80">
            One trusted technician for every season — heating, cooling, gas and pool heaters.
            All work performed by a TSSA-certified professional.
          </p>
        </div>
      </section>

      <section className="bg-gradient-warm py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="rounded-2xl border border-border bg-card p-8 shadow-card">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-flame text-primary-foreground shadow-elegant">
                  <s.icon className="h-7 w-7" />
                </div>
                <h2 className="mt-5 font-display text-2xl tracking-wide">{s.title}</h2>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {s.items.map((i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-flame" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-3 md:px-8">
          {[
            { icon: Shield, title: "Licensed & Insured", desc: "TSSA registered, fully certified, fully insured. Work performed to code, every time." },
            { icon: Clock, title: "Open 7 Days a Week", desc: "Including weekends and after-hours emergency response when you need it most." },
            { icon: Wrench, title: "Honest Pricing", desc: "Transparent estimates. We won't recommend work that isn't needed — that's the Capital Flame promise." },
          ].map((b) => (
            <div key={b.title} className="text-center">
              <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-flame text-primary-foreground shadow-elegant">
                <b.icon className="h-8 w-8" />
              </div>
              <h3 className="mt-5 font-display text-2xl">{b.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <CallStrip />
      <SiteFooter />
    </div>
  );
}
