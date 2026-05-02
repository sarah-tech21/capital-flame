import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-C_Xjei1k.js";
import { c as createLucideIcon, S as SiteHeader, P as Phone, M as MapPin, C as Clock, b as Mail, a as SiteFooter } from "./SiteFooter-B1XqOJHP.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-DbohzTEb.js";
const __iconNode = [
  [
    "path",
    {
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
      key: "18887p"
    }
  ]
];
const MessageSquare = createLucideIcon("message-square", __iconNode);
function ContactPage() {
  const [sent, setSent] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-gradient-hero py-20 text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-4 text-center md:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-[0.3em] text-brand-flame", children: "Get In Touch" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 font-display text-5xl tracking-tight md:text-7xl", children: "Let's Get You Comfortable." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-5 max-w-xl text-primary-foreground/80", children: "Call or text — we answer fast. Open 7 days a week with 24/7 emergency service." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-gradient-warm py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:6134221125", className: "flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-elegant", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-flame text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-6 w-6" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Call Us" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl", children: "613-422-1125" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "sms:6134221125", className: "flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-elegant", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-flame text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-6 w-6" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Text Us" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl", children: "613-422-1125" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-flame text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-6 w-6" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Visit / Mail" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-semibold", children: "68 Huntersfield Dr, Ottawa, ON K1T 3L7" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-flame text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-6 w-6" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Hours" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-semibold", children: "Open 7 Days · 24/7 Emergency" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
        e.preventDefault();
        setSent(true);
      }, className: "rounded-2xl border border-border bg-card p-8 shadow-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl", children: "Request a Quote" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Send a quick message and we'll get back to you fast." }),
        sent ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 rounded-xl bg-gradient-flame p-6 text-center text-primary-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "mx-auto h-8 w-8" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 font-display text-2xl", children: "Thanks — we'll be in touch!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-primary-foreground/85", children: "For urgent service please call 613-422-1125." })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, placeholder: "Your name", className: "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand-flame" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "tel", placeholder: "Phone number", className: "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand-flame" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand-flame", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Service needed…" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Furnace repair / install" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Air conditioning" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Pool heater" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Gas line / BBQ hookup" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Other" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 4, placeholder: "Tell us briefly what you need…", className: "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand-flame" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "w-full rounded-full bg-gradient-flame py-4 font-bold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.02]", children: "Send Request" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  ContactPage as component
};
