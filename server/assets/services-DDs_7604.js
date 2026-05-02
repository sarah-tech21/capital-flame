import { T as jsxRuntimeExports } from "./worker-entry-C_Xjei1k.js";
import { c as createLucideIcon, S as SiteHeader, C as Clock, a as SiteFooter } from "./SiteFooter-B1XqOJHP.js";
import { S as Shield, C as CallStrip } from "./CallStrip-Ddi-f4h_.js";
import { F as FlameKindling, S as Snowflake, W as Waves, Z as Zap, a as Wrench } from "./zap-B950x8EP.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-DbohzTEb.js";
const __iconNode = [
  ["path", { d: "M12.8 19.6A2 2 0 1 0 14 16H2", key: "148xed" }],
  ["path", { d: "M17.5 8a2.5 2.5 0 1 1 2 4H2", key: "1u4tom" }],
  ["path", { d: "M9.8 4.4A2 2 0 1 1 11 8H2", key: "75valh" }]
];
const Wind = createLucideIcon("wind", __iconNode);
const furnaceImg = "/assets/service-furnace-OwUfKnIM.jpg";
const acImg = "/assets/service-ac-C48mnL3t.jpg";
const poolImg = "/assets/service-pool-BVJ3ZgIW.jpg";
const gasImg = "/assets/service-gas-CEbBjkrv.jpg";
const humidifierImg = "/assets/service-humidifier-DtQUgF-B.jpg";
const emergencyImg = "/assets/service-emergency-MACI7UsN.jpg";
const services = [{
  icon: FlameKindling,
  image: furnaceImg,
  title: "Furnace Repair & Installation",
  items: ["Diagnostic & repair", "New furnace installation", "Annual maintenance", "Safety inspection"]
}, {
  icon: Snowflake,
  image: acImg,
  title: "Air Conditioning",
  items: ["A/C repair & tune-up", "System inspection", "Pre-season service", "Cooling diagnostics"]
}, {
  icon: Waves,
  image: poolImg,
  title: "Specialists",
  items: ["Repair on all makes", "New installations", "Service & winterization", "Inspection & diagnostics"]
}, {
  icon: Zap,
  image: gasImg,
  title: "Gas Line Services",
  items: ["Underground gas lines", "Gas range hookups", "BBQ hookups", "Code-compliant installs"]
}, {
  icon: Wind,
  image: humidifierImg,
  title: "Central Humidifiers",
  items: ["Install & service", "Filter replacement", "System tune-up", "Whole-home comfort"]
}, {
  icon: Wrench,
  image: emergencyImg,
  title: "24/7 Emergency Service",
  items: ["After-hours response", "Weekend availability", "No-heat emergencies", "Bilingual service"]
}];
function ServicesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-gradient-hero py-20 text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-4 text-center md:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-[0.3em] text-brand-flame", children: "Full-Service HVAC" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 font-display text-5xl tracking-tight md:text-7xl", children: "Our Services" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-5 max-w-2xl text-primary-foreground/80", children: "One trusted technician for every season — heating, cooling, gas and pool heaters. All work performed by a TSSA-certified professional." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-gradient-warm py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4 md:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-2", children: services.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card sm:flex-row", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-48 w-full shrink-0 overflow-hidden sm:h-auto sm:w-2/5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: s.image, alt: s.title, width: 768, height: 768, loading: "lazy", className: "h-full w-full object-cover" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-flame text-primary-foreground shadow-elegant", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-2xl tracking-wide", children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 space-y-2 text-sm text-muted-foreground", children: s.items.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-flame" }),
          i
        ] }, i)) })
      ] })
    ] }, s.title)) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-3 md:px-8", children: [{
      icon: Shield,
      title: "Licensed & Insured",
      desc: "TSSA registered, fully certified, fully insured. Work performed to code, every time."
    }, {
      icon: Clock,
      title: "Open 7 Days a Week",
      desc: "Including weekends and after-hours emergency response when you need it most."
    }, {
      icon: Wrench,
      title: "Honest Pricing",
      desc: "Transparent estimates. We won't recommend work that isn't needed — that's the Capital Flame promise."
    }].map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-flame text-primary-foreground shadow-elegant", children: /* @__PURE__ */ jsxRuntimeExports.jsx(b.icon, { className: "h-8 w-8" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 font-display text-2xl", children: b.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: b.desc })
    ] }, b.title)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CallStrip, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  ServicesPage as component
};
