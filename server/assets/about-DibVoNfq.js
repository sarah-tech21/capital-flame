import { T as jsxRuntimeExports } from "./worker-entry-C_Xjei1k.js";
import { c as createLucideIcon, S as SiteHeader, a as SiteFooter } from "./SiteFooter-B1XqOJHP.js";
import { S as Shield, C as CallStrip } from "./CallStrip-Ddi-f4h_.js";
import { S as Star, A as Award } from "./star-XGq7lxp0.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-DbohzTEb.js";
const __iconNode = [
  [
    "path",
    {
      d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
      key: "mvr1a0"
    }
  ]
];
const Heart = createLucideIcon("heart", __iconNode);
const vanImg = "/assets/capital-flame-sign-B8k9cIMv.png";
function AboutPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-gradient-hero py-20 text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-4 text-center md:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-[0.3em] text-brand-flame", children: "Our Story" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 font-display text-5xl tracking-tight md:text-7xl", children: "25 Years of Trust in Ottawa." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2 md:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: vanImg, alt: "Capital Flame Heating, Cooling & Pool Heater sign", className: "rounded-3xl shadow-elegant" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl tracking-tight md:text-5xl", children: "Honest work. Done right. Every time." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-muted-foreground", children: "Capital Flame is a fully Certified, Licensed and TSSA Registered company with over 25 years of experience in the HVAC industry. Founded and run by Philippe, we've built our reputation one Ottawa home at a time — through dependable workmanship, transparent pricing and friendly, bilingual service." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "From furnaces and air conditioners to our specialty — pool heaters — we treat every call like it matters, because it does. That's why our customers keep coming back year after year." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-gradient-warm py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4 md:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-4", children: [{
      icon: Star,
      label: "5.0",
      sub: "Google Rating"
    }, {
      icon: Award,
      label: "25+",
      sub: "Years Experience"
    }, {
      icon: Shield,
      label: "TSSA",
      sub: "Certified"
    }, {
      icon: Heart,
      label: "100%",
      sub: "Customer-First"
    }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-8 text-center shadow-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "mx-auto h-8 w-8 text-brand-flame" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 font-display text-5xl text-foreground", children: s.label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm uppercase tracking-widest text-muted-foreground", children: s.sub })
    ] }, s.sub)) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-brand-deep py-20 text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl px-4 text-center md:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl tracking-tight md:text-5xl", children: "Our Promise" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-5 text-lg text-primary-foreground/80", children: [
        "We show up on time. We explain what we find. ",
        "\n",
        "And we leave your home better than we found it."
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CallStrip, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  AboutPage as component
};
