"use client";
import { motion } from "framer-motion";

const hoods = [
  { name: "Coney Island", emoji: "🎡", desc: "Beachside living with iconic boardwalk vibes", avg: "$280K" },
  { name: "Brighton Beach", emoji: "🌊", desc: "Vibrant cultural hub meets oceanfront calm", avg: "$310K" },
  { name: "Bay Ridge", emoji: "🌉", desc: "Suburban charm with stunning bridge views", avg: "$520K" },
  { name: "Bensonhurst", emoji: "🍕", desc: "Rich heritage, tight-knit community", avg: "$480K" },
  { name: "Sheepshead Bay", emoji: "⛵", desc: "Waterfront dining and great schools", avg: "$420K" },
  { name: "Borough Park", emoji: "🏘", desc: "Established neighborhood, solid value", avg: "$550K" },
];

export default function Neighborhoods() {
  return (
    <section className="py-24" style={{ background: "linear-gradient(135deg, #111d4a 0%, #1B2B6B 100%)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[#C9A84C] font-semibold uppercase tracking-wider text-sm">Explore Brooklyn</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-2 mb-4">Neighborhoods We Serve</h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Deep local expertise across Brooklyn's most sought-after communities.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {hoods.map((h, i) => (
            <motion.div
              key={h.name}
              initial={{ opacity: 0, scale: 0.93 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-hover bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/15 rounded-2xl p-6 cursor-default"
            >
              <div className="text-4xl mb-3">{h.emoji}</div>
              <h3 className="text-white font-bold text-lg mb-1">{h.name}</h3>
              <p className="text-white/60 text-sm mb-4">{h.desc}</p>
              <div className="flex justify-between items-center border-t border-white/10 pt-3">
                <span className="text-white/50 text-xs uppercase tracking-wider">Avg. Price</span>
                <span className="text-[#C9A84C] font-bold">{h.avg}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
