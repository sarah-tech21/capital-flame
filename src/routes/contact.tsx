import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Clock, MessageSquare, Mail } from "lucide-react";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Capital Flame — Call 613-422-1125" },
      { name: "description", content: "Contact Capital Flame for HVAC, furnace and pool heater service in Ottawa. Call or text 613-422-1125. Open 7 days a week." },
      { property: "og:title", content: "Contact Capital Flame — Ottawa HVAC" },
      { property: "og:description", content: "Call or text 613-422-1125. Open 7 days. 24/7 emergency service." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="bg-gradient-hero py-20 text-primary-foreground">
        <div className="mx-auto max-w-5xl px-4 text-center md:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-flame">Get In Touch</span>
          <h1 className="mt-3 font-display text-5xl tracking-tight md:text-7xl">Let's Get You Comfortable.</h1>
          <p className="mx-auto mt-5 max-w-xl text-primary-foreground/80">
            Call or text — we answer fast. Open 7 days a week with 24/7 emergency service.
          </p>
        </div>
      </section>

      <section className="bg-gradient-warm py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:px-8">
          <div className="space-y-6">
            <a href="tel:6134221125" className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-elegant">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-flame text-primary-foreground"><Phone className="h-6 w-6" /></div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Call Us</div>
                <div className="font-display text-3xl">613-422-1125</div>
              </div>
            </a>
            <a href="sms:6134221125" className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-elegant">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-flame text-primary-foreground"><MessageSquare className="h-6 w-6" /></div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Text Us</div>
                <div className="font-display text-3xl">613-422-1125</div>
              </div>
            </a>
            <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-flame text-primary-foreground"><MapPin className="h-6 w-6" /></div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Visit / Mail</div>
                <div className="text-lg font-semibold">68 Huntersfield Dr, Ottawa, ON K1T 3L7</div>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-flame text-primary-foreground"><Clock className="h-6 w-6" /></div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Hours</div>
                <div className="text-lg font-semibold">Open 7 Days · 24/7 Emergency</div>
              </div>
            </div>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="rounded-2xl border border-border bg-card p-8 shadow-card"
          >
            <h2 className="font-display text-3xl">Request a Quote</h2>
            <p className="mt-1 text-sm text-muted-foreground">Send a quick message and we'll get back to you fast.</p>

            {sent ? (
              <div className="mt-8 rounded-xl bg-gradient-flame p-6 text-center text-primary-foreground">
                <Mail className="mx-auto h-8 w-8" />
                <div className="mt-3 font-display text-2xl">Thanks — we'll be in touch!</div>
                <p className="mt-1 text-sm text-primary-foreground/85">For urgent service please call 613-422-1125.</p>
              </div>
            ) : (
              <div className="mt-6 space-y-4">
                <input required placeholder="Your name" className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand-flame" />
                <input required type="tel" placeholder="Phone number" className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand-flame" />
                <select className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand-flame">
                  <option>Service needed…</option>
                  <option>Furnace repair / install</option>
                  <option>Air conditioning</option>
                  <option>Pool heater</option>
                  <option>Gas line / BBQ hookup</option>
                  <option>Other</option>
                </select>
                <textarea rows={4} placeholder="Tell us briefly what you need…" className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand-flame" />
                <button type="submit" className="w-full rounded-full bg-gradient-flame py-4 font-bold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.02]">
                  Send Request
                </button>
              </div>
            )}
          </form>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
