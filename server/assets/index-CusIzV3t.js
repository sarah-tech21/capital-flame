import { T as jsxRuntimeExports } from "./worker-entry-C_Xjei1k.js";
import { L as Link } from "./router-DbohzTEb.js";
import { c as createLucideIcon, S as SiteHeader, P as Phone, C as Clock, a as SiteFooter } from "./SiteFooter-B1XqOJHP.js";
import { S as Shield, C as CallStrip } from "./CallStrip-Ddi-f4h_.js";
import { A as Award, S as Star } from "./star-XGq7lxp0.js";
import { a as Wrench, F as FlameKindling, S as Snowflake, W as Waves, Z as Zap } from "./zap-B950x8EP.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$1 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode$1);
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const CircleCheck = createLucideIcon("circle-check", __iconNode);
const vanImg = "/assets/van-C0aQ-IP0.png";
const poolHeater1 = "/assets/pool-heater-1-G-vd7h-p.png";
const poolHeater2 = "/assets/pool-heater-2-DsQ3vfuO.png";
const poolEquipment = "/assets/pool-equipment-Cvvgg2z_.png";
const services = [{
  icon: FlameKindling,
  title: "Furnace Service",
  desc: "Repair, inspection, maintenance and installation for every furnace make."
}, {
  icon: Snowflake,
  title: "Air Conditioning",
  desc: "Keep cool all summer with expert A/C repair, tune-up and inspection."
}, {
  icon: Waves,
  title: "Pool Heaters",
  desc: "Our specialty. Repair, service, installation & inspection for all brands."
}, {
  icon: Zap,
  title: "Gas Lines & Hookups",
  desc: "Underground gas lines, BBQ and gas range hookups done safely to code."
}];
const reviews = [{
  name: "J El Ghazal",
  text: "Responded quickly, diagnosed the issue with my Jandy pool heater, and ordered the part right away. The technician came back promptly and completed the repair."
}, {
  name: "Sueng Lee",
  text: "My pool heater was leaking. Philip answered a text on his holidays to help me troubleshoot. Outstanding customer service."
}, {
  name: "Darren Mundt",
  text: "Outstanding service and quality work on replacing our pool heater. Went out of his way to make sure everything was done to code."
}, {
  name: "Chantal Renaud-Masson",
  text: "Philippe has been servicing and installing our furnace for the past ten years. Hardworking, honest, courteous."
}, {
  name: "Zafar Khan",
  text: "Came to repair our furnace on short notice on one of the coldest days in February. Quick, thorough and pleasant. Surprisingly affordable."
}, {
  name: "Bradley Skuse",
  text: "He's been my HVAC guy for years. Available, accommodating, explains what he finds, and very honest. Highly recommend."
}];
function HomePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-gradient-hero", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-20", style: {
        backgroundImage: "radial-gradient(circle at 20% 30%, oklch(0.6 0.23 35) 0%, transparent 50%)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 md:grid-cols-[1fr_1.4fr] md:px-8 md:py-28", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-primary-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 font-display text-5xl leading-[0.95] tracking-tight md:text-7xl text-left", children: [
            "Heat That ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand-flame", children: "Lasts." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block mt-3 text-4xl md:text-5xl text-primary-foreground/90 whitespace-pre-line text-left", children: "Trusted Experts in Ottawa.\n\n" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-xl text-lg text-primary-foreground/80 whitespace-pre-line text-left", children: "Fully certified. Fully licensed. TSSA registered. Over 25 years keeping Ottawa comfortable.\nHonest Pricing. You come first." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:6134221125", className: "inline-flex items-center gap-2 rounded-full bg-gradient-flame px-7 py-4 font-bold text-primary-foreground shadow-elegant transition-transform hover:scale-105", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-5 w-5" }),
              " Call 613-422-1125"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services", className: "inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/5 px-7 py-4 font-semibold text-primary-foreground backdrop-blur-sm transition-colors hover:bg-primary-foreground/10", children: [
              "Our Services ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 grid grid-cols-3 gap-6 border-t border-primary-foreground/10 pt-6 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl text-brand-flame", children: "25+" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary-foreground/60", children: "Years Experience" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl text-brand-flame", children: "5.0★" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary-foreground/60", children: "Google Rating" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl text-brand-flame", children: "24/7" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary-foreground/60", children: "Emergency" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-4 rounded-3xl bg-gradient-flame opacity-30 blur-3xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: vanImg, alt: "Capital Flame service van in Ottawa", className: "relative w-full rounded-3xl object-cover shadow-elegant md:scale-110 md:origin-left" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-border bg-muted/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto grid max-w-7xl gap-6 px-4 py-8 text-center md:grid-cols-4 md:px-8", children: [{
      icon: Shield,
      label: "TSSA Certified"
    }, {
      icon: Award,
      label: "25+ Years Experience"
    }, {
      icon: Clock,
      label: "Open 7 Days/Week"
    }, {
      icon: Wrench,
      label: "Bilingual Service"
    }].map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(b.icon, { className: "h-6 w-6 text-brand-flame" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: b.label })
    ] }, b.label)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-gradient-warm py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 md:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-[0.3em] text-brand-flame", children: "What We Do" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-5xl tracking-tight md:text-6xl", children: "Complete Home Comfort Services" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-4 max-w-2xl text-muted-foreground", children: "From your furnace to your pool heater — one trusted technician for every season." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4", children: services.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group rounded-2xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-flame text-primary-foreground shadow-elegant", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-7 w-7" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 font-display text-2xl tracking-wide", children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: s.desc })
      ] }, s.title)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services", className: "inline-flex items-center gap-2 font-semibold text-brand-flame hover:gap-3 transition-all", children: [
        "See all services ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-brand-deep py-24 text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2 md:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: poolHeater1, alt: "Pool heater install", className: "aspect-square w-full rounded-2xl object-cover shadow-elegant" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: poolHeater2, alt: "Raypak pool heater", className: "aspect-square w-full translate-y-8 rounded-2xl object-cover shadow-elegant" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: poolEquipment, alt: "Pool equipment", className: "col-span-2 aspect-video w-full rounded-2xl object-cover shadow-elegant" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-[0.3em] text-brand-flame", children: "Our Specialty" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-3 font-display text-5xl tracking-tight md:text-6xl whitespace-pre-line", children: [
          "Ottawa's Trusted ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand-flame text-7xl" }),
          " Pros."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-primary-foreground/75", children: "Don't lose a single weekend of swim season. We service, repair and install all major pool heater brands including Hayward, Raypak, Jandy and Pentair — quickly, professionally and to code." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-3", children: ["Diagnostic & repair on all makes", "New pool heater installation", "Annual tune-ups & winterization", "Gas line installation & inspection"].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-brand-flame" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary-foreground/90", children: item })
        ] }, item)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:6134221125", className: "mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-flame px-7 py-4 font-bold text-primary-foreground shadow-elegant transition-transform hover:scale-105", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-5 w-5" }),
          " Book Service"
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 md:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-[0.3em] text-brand-flame", children: "5.0 ★ " }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-5xl tracking-tight md:text-6xl", children: "What Ottawa Says About Us" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: reviews.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-7 shadow-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 text-brand-flame", children: Array.from({
          length: 5
        }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-brand-flame" }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-sm leading-relaxed text-foreground/85", children: [
          '"',
          r.text,
          '"'
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-5 font-semibold text-foreground", children: [
          "— ",
          r.name
        ] })
      ] }, r.name)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/40 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 text-center md:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl tracking-tight md:text-5xl", children: "Proudly Serving Ottawa & Surrounding Areas" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex flex-wrap justify-center gap-3", children: ["Ottawa", "Orleans", "Cumberland", "Kanata", "Nepean", "Barrhaven", "Gloucester", "Greely", "Manotick"].map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-border bg-card px-5 py-2 text-sm font-semibold text-foreground shadow-sm", children: a }, a)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CallStrip, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  HomePage as component
};
