import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Star, Shield, Clock, Award, Wrench, Flame, Snowflake, Waves, Zap, CheckCircle2, ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CallStrip } from "@/components/CallStrip";
import vanImg from "@/assets/van.png";
import poolHeater1 from "@/assets/pool-heater-1.png";
import poolHeater2 from "@/assets/pool-heater-2.png";
import poolEquipment from "@/assets/pool-equipment.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Capital Flame — Ottawa HVAC, Furnace & Pool Heater Experts" },
      { name: "description", content: "5-star rated HVAC contractor in Ottawa. Furnace, A/C and pool heater repair, install & maintenance. TSSA certified. 25+ years. Call 613-422-1125." },
      { property: "og:title", content: "Capital Flame — Ottawa HVAC & Pool Heater Experts" },
      { property: "og:description", content: "Trusted by Ottawa homeowners for 25+ years. Bilingual service, 24/7 emergency, open 7 days." },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: Flame, title: "Furnace Service", desc: "Repair, inspection, maintenance and installation for every furnace make." },
  { icon: Snowflake, title: "Air Conditioning", desc: "Keep cool all summer with expert A/C repair, tune-up and inspection." },
  { icon: Waves, title: "Pool Heaters", desc: "Our specialty. Repair, service, installation & inspection for all brands." },
  { icon: Zap, title: "Gas Lines & Hookups", desc: "Underground gas lines, BBQ and gas range hookups done safely to code." },
];

const reviews = [
  { name: "J El Ghazal", text: "Responded quickly, diagnosed the issue with my Jandy pool heater, and ordered the part right away. The technician came back promptly and completed the repair." },
  { name: "Sueng Lee", text: "My pool heater was leaking. Philip answered a text on his holidays to help me troubleshoot. Outstanding customer service." },
  { name: "Darren Mundt", text: "Outstanding service and quality work on replacing our pool heater. Went out of his way to make sure everything was done to code." },
  { name: "Chantal Renaud-Masson", text: "Philippe has been servicing and installing our furnace for the past ten years. Hardworking, honest, courteous." },
  { name: "Zafar Khan", text: "Came to repair our furnace on short notice on one of the coldest days in February. Quick, thorough and pleasant. Surprisingly affordable." },
  { name: "Bradley Skuse", text: "He's been my HVAC guy for years. Available, accommodating, explains what he finds, and very honest. Highly recommend." },
];

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, oklch(0.6 0.23 35) 0%, transparent 50%)" }} />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 md:grid-cols-2 md:px-8 md:py-28">
          <div className="text-primary-foreground">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-flame/40 bg-brand-flame/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-flame">
              <Star className="h-3.5 w-3.5 fill-brand-flame" /> 5.0
            </span>
            <h1 className="mt-6 font-display text-5xl leading-[0.95] tracking-tight md:text-7xl">
              Heat That <span className="bg-gradient-flame bg-clip-text text-transparent">Just Works</span>
              <span className="block mt-3 text-4xl md:text-5xl text-primary-foreground/90">Trusted Experts in Ottawa.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-primary-foreground/80">
              Fully certified. Fully licensed. TSSA registered. Over 25 years keeping Ottawa
              comfortable — from furnace tune-ups to summer pool heater installs.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:6134221125"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-flame px-7 py-4 font-bold text-primary-foreground shadow-elegant transition-transform hover:scale-105"
              >
                <Phone className="h-5 w-5" /> Call 613-422-1125
              </a>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/5 px-7 py-4 font-semibold text-primary-foreground backdrop-blur-sm transition-colors hover:bg-primary-foreground/10"
              >
                Our Services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-primary-foreground/10 pt-6 text-sm">
              <div><div className="font-display text-3xl text-brand-flame">25+</div><div className="text-primary-foreground/60">Years Experience</div></div>
              <div><div className="font-display text-3xl text-brand-flame">5.0★</div><div className="text-primary-foreground/60">Google Rating</div></div>
              <div><div className="font-display text-3xl text-brand-flame">24/7</div><div className="text-primary-foreground/60">Emergency</div></div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-flame opacity-30 blur-3xl" />
            <img src={vanImg} alt="Capital Flame service van in Ottawa" className="relative w-full rounded-3xl object-cover shadow-elegant" />
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-y border-border bg-muted/40">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 text-center md:grid-cols-4 md:px-8">
          {[
            { icon: Shield, label: "TSSA Certified" },
            { icon: Award, label: "25+ Years Experience" },
            { icon: Clock, label: "Open 7 Days/Week" },
            { icon: Wrench, label: "Bilingual Service" },
          ].map((b) => (
            <div key={b.label} className="flex items-center justify-center gap-3">
              <b.icon className="h-6 w-6 text-brand-flame" />
              <span className="font-semibold text-foreground">{b.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-gradient-warm py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-flame">What We Do</span>
            <h2 className="mt-3 font-display text-5xl tracking-tight md:text-6xl">Complete Home Comfort Services</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              From your furnace to your pool heater — one trusted technician for every season.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div key={s.title} className="group rounded-2xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-flame text-primary-foreground shadow-elegant">
                  <s.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display text-2xl tracking-wide">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/services" className="inline-flex items-center gap-2 font-semibold text-brand-flame hover:gap-3 transition-all">
              See all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* POOL HEATER FEATURE */}
      <section className="bg-brand-deep py-24 text-primary-foreground">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2 md:px-8">
          <div className="grid grid-cols-2 gap-4">
            <img src={poolHeater1} alt="Pool heater install" className="aspect-square w-full rounded-2xl object-cover shadow-elegant" />
            <img src={poolHeater2} alt="Raypak pool heater" className="aspect-square w-full translate-y-8 rounded-2xl object-cover shadow-elegant" />
            <img src={poolEquipment} alt="Pool equipment" className="col-span-2 aspect-video w-full rounded-2xl object-cover shadow-elegant" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-flame">Our Specialty</span>
            <h2 className="mt-3 font-display text-5xl tracking-tight md:text-6xl whitespace-pre-line">
              Ottawa's Trusted <span className="text-brand-flame text-7xl">Just{"\n"}Works.</span> Pros.
            </h2>
            <p className="mt-5 text-primary-foreground/75">
              Don't lose a single weekend of swim season. We service, repair and install all major pool heater
              brands including Hayward, Raypak, Jandy and Pentair — quickly, professionally and to code.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Diagnostic & repair on all makes",
                "New pool heater installation",
                "Annual tune-ups & winterization",
                "Gas line installation & inspection",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-flame" />
                  <span className="text-primary-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="tel:6134221125"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-flame px-7 py-4 font-bold text-primary-foreground shadow-elegant transition-transform hover:scale-105"
            >
              <Phone className="h-5 w-5" /> Book Pool Heater Service
            </a>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-flame">5.0 ★ on Google</span>
            <h2 className="mt-3 font-display text-5xl tracking-tight md:text-6xl">What Ottawa Says About Us</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r) => (
              <div key={r.name} className="rounded-2xl border border-border bg-card p-7 shadow-card">
                <div className="flex gap-1 text-brand-flame">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-brand-flame" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-foreground/85">"{r.text}"</p>
                <p className="mt-5 font-semibold text-foreground">— {r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AREAS SERVED */}
      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-7xl px-4 text-center md:px-8">
          <h2 className="font-display text-4xl tracking-tight md:text-5xl">Proudly Serving Ottawa & Surrounding Areas</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {["Ottawa", "Orleans", "Cumberland", "Kanata", "Nepean", "Barrhaven", "Gloucester", "Greely", "Manotick"].map((a) => (
              <span key={a} className="rounded-full border border-border bg-card px-5 py-2 text-sm font-semibold text-foreground shadow-sm">
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CallStrip />
      <SiteFooter />
    </div>
  );
}
