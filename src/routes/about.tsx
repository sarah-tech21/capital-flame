import { createFileRoute } from "@tanstack/react-router";
import { Star, Award, Shield, Heart } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CallStrip } from "@/components/CallStrip";
import vanImg from "@/assets/van.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Capital Flame Ottawa HVAC" },
      { name: "description", content: "Family-run, TSSA-certified Ottawa HVAC contractor with 25+ years of experience. Meet Philippe and the Capital Flame team." },
      { property: "og:title", content: "About Capital Flame — Ottawa HVAC" },
      { property: "og:description", content: "25+ years of honest, professional home comfort service across Ottawa." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="bg-gradient-hero py-20 text-primary-foreground">
        <div className="mx-auto max-w-5xl px-4 text-center md:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-flame">Our Story</span>
          <h1 className="mt-3 font-display text-5xl tracking-tight md:text-7xl">25 Years of Trust in Ottawa.</h1>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2 md:px-8">
          <img src={vanImg} alt="Capital Flame service van" className="rounded-3xl shadow-elegant" />
          <div>
            <h2 className="font-display text-4xl tracking-tight md:text-5xl">Honest work. Done right. Every time.</h2>
            <p className="mt-5 text-muted-foreground">
              Capital Flame is a fully Certified, Licensed and TSSA Registered company with over
              25 years of experience in the HVAC industry. Founded and run by Philippe, we've built
              our reputation one Ottawa home at a time — through dependable workmanship,
              transparent pricing and friendly, bilingual service.
            </p>
            <p className="mt-4 text-muted-foreground">
              From furnaces and air conditioners to our specialty — pool heaters — we treat every
              call like it matters, because it does. That's why our customers keep coming back year
              after year.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-warm py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { icon: Star, label: "5.0", sub: "Google Rating" },
              { icon: Award, label: "25+", sub: "Years Experience" },
              { icon: Shield, label: "TSSA", sub: "Certified" },
              { icon: Heart, label: "100%", sub: "Customer-First" },
            ].map((s) => (
              <div key={s.sub} className="rounded-2xl border border-border bg-card p-8 text-center shadow-card">
                <s.icon className="mx-auto h-8 w-8 text-brand-flame" />
                <div className="mt-3 font-display text-5xl text-foreground">{s.label}</div>
                <div className="mt-1 text-sm uppercase tracking-widest text-muted-foreground">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-deep py-20 text-primary-foreground">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
          <h2 className="font-display text-4xl tracking-tight md:text-5xl">Our Promise</h2>
          <p className="mt-5 text-lg text-primary-foreground/80">
            We show up on time. We explain what we find. {"\n"}And we leave your home better than we found it.
          </p>
        </div>
      </section>

      <CallStrip />
      <SiteFooter />
    </div>
  );
}
