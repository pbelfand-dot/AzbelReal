"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Home", href: "#home" },
  { label: "Listings", href: "#listings" },
  { label: "Mortgage", href: "#mortgage" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#111d4a] shadow-2xl py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Azbel Real Estate" width={120} height={50} className="h-12 w-auto object-contain" />
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-white/90 hover:text-[#C9A84C] font-medium text-sm tracking-wide transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-block bg-[#C9A84C] hover:bg-[#e8c97e] text-[#111d4a] font-bold text-sm px-5 py-2.5 rounded-lg transition-colors duration-200"
        >
          Free Consultation
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white mb-1.5 transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white mb-1.5 transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-[#111d4a] border-t border-white/10 overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="text-white/90 hover:text-[#C9A84C] font-medium text-base transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#contact" onClick={() => setOpen(false)} className="block w-full text-center bg-[#C9A84C] text-[#111d4a] font-bold py-2.5 rounded-lg">
                  Free Consultation
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
