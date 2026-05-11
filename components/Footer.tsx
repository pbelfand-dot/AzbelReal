import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ background: "#0d1535" }} className="text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Image src="/logo.png" alt="Azbel Real Estate" width={140} height={56} className="h-14 w-auto object-contain mb-4" />
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              Azbel Real Estate — Brooklyn's trusted partner for buying, selling, and investing in residential real estate since 2009.
            </p>
            <div className="flex gap-3 mt-6">
              {["FB", "IG", "LI"].map((s) => (
                <a key={s} href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C9A84C] flex items-center justify-center text-xs font-bold transition-colors">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold text-[#C9A84C] uppercase tracking-wider text-xs mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "#home" },
                { label: "Listings", href: "#listings" },
                { label: "Mortgage Calculator", href: "#mortgage" },
                { label: "Services", href: "#services" },
                { label: "About Us", href: "#about" },
                { label: "Contact", href: "#contact" },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-white/60 hover:text-[#C9A84C] text-sm transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-[#C9A84C] uppercase tracking-wider text-xs mb-5">Contact</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li>Brooklyn, New York</li>
              <li>(718) 555-0192</li>
              <li>info@azbelrealestate.com</li>
              <li>Mon–Sat: 9am – 7pm</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Azbel Real Estate. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Licensed Real Estate Broker · New York State
          </p>
        </div>
      </div>
    </footer>
  );
}
