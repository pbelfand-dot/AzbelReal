"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Hero() {
  const [searchType, setSearchType] = useState<"buy" | "rent">("buy");

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #111d4a 0%, #1B2B6B 50%, #2D4A9A 100%)",
      }}
    >
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-10 bg-white"
            style={{
              width: `${120 + i * 80}px`,
              height: `${120 + i * 80}px`,
              left: `${10 + i * 15}%`,
              top: `${5 + i * 12}%`,
            }}
            animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.5 }}
          />
        ))}
      </div>

      {/* Gold accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: "linear-gradient(90deg, #C9A84C, #e8c97e, #C9A84C)" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block bg-[#C9A84C]/20 border border-[#C9A84C]/40 text-[#e8c97e] text-sm font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wider uppercase">
            Brooklyn's Premier Real Estate Agency
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight mb-6"
        >
          Find Your{" "}
          <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #C9A84C, #e8c97e)" }}>
            Dream Home
          </span>
          <br />in Brooklyn
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto mb-10"
        >
          Azbel Real Estate connects buyers and sellers across Brooklyn's most vibrant neighborhoods. Expert guidance, trusted results.
        </motion.p>

        {/* Search bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="bg-white rounded-2xl shadow-2xl p-3 max-w-3xl mx-auto"
        >
          <div className="flex gap-2 mb-3 px-1">
            {(["buy", "rent"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setSearchType(t)}
                className={`px-5 py-1.5 rounded-lg text-sm font-semibold transition-all capitalize ${
                  searchType === t
                    ? "bg-[#1B2B6B] text-white"
                    : "text-gray-500 hover:text-[#1B2B6B]"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Search by neighborhood, address, or zip code..."
              className="flex-1 px-4 py-3 rounded-xl border border-gray-200 text-gray-700 text-sm"
            />
            <select className="sm:w-44 px-4 py-3 rounded-xl border border-gray-200 text-gray-600 text-sm">
              <option>Any Price</option>
              <option>Under $300K</option>
              <option>$300K – $500K</option>
              <option>$500K – $800K</option>
              <option>$800K+</option>
            </select>
            <button className="bg-[#1B2B6B] hover:bg-[#2D4A9A] text-white font-bold px-7 py-3 rounded-xl transition-colors text-sm">
              Search
            </button>
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-8 mt-12"
        >
          {[
            { value: "500+", label: "Homes Sold" },
            { value: "15+", label: "Years Experience" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "$2B+", label: "in Transactions" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-extrabold text-[#C9A84C]">{stat.value}</div>
              <div className="text-white/60 text-xs mt-0.5 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#listings"
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <svg className="w-7 h-7 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </motion.a>
    </section>
  );
}
