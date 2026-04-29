import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Mail, Flame } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-brand-deep text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <Flame className="h-7 w-7 text-brand-flame animate-flicker" />
            <span className="font-display text-3xl tracking-wide">Capital Flame</span>
          </div>
          <p className="mt-4 max-w-md text-sm text-primary-foreground/70">
            Fully Certified, Licensed & TSSA Registered. 25+ years keeping Ottawa homes
            warm in winter, cool in summer, and pools heated all season long.
          </p>
          <p className="mt-4 text-xs uppercase tracking-widest text-brand-flame">
            Bilingual Service · 24/7 Emergency
          </p>
        </div>
        <div>
          <h4 className="font-display text-xl tracking-wide">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/" className="hover:text-brand-flame">Home</Link></li>
            <li><Link to="/services" className="hover:text-brand-flame">Services</Link></li>
            <li><Link to="/about" className="hover:text-brand-flame">About</Link></li>
            <li><Link to="/contact" className="hover:text-brand-flame">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-xl tracking-wide">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/70">
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-brand-flame" /> <a href="tel:6134221125" className="hover:text-brand-flame">613-422-1125</a></li>
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-brand-flame" /> 68 Huntersfield Dr, Ottawa, ON</li>
            <li className="flex items-start gap-2"><Clock className="mt-0.5 h-4 w-4 text-brand-flame" /> Open 7 Days/Week</li>
            <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-brand-flame" /> www.capitalflame.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-6 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} Capital Flame. Professional Quality Home Services in Ottawa.
      </div>
    </footer>
  );
}
