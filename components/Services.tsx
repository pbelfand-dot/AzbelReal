"use client";
import { motion } from "framer-motion";

const services = [
  {
    icon: "🏠",
    title: "Buyer Representation",
    desc: "We guide first-time buyers and seasoned investors through every step — from search to closing — ensuring you get the best deal.",
  },
  {
    icon: "💼",
    title: "Seller Services",
    desc: "Professional staging advice, strategic pricing, and maximum market exposure to sell your property faster and at top dollar.",
  },
  {
    icon: "📊",
    title: "Market Analysis",
    desc: "Comprehensive neighborhood reports and comparative market analyses to help you make data-driven decisions with confidence.",
  },
  {
    icon: "🏢",
    title: "Investment Properties",
    desc: "Identify high-yield opportunities in Brooklyn's growing market. From multifamily to commercial, we know the numbers.",
  },
  {
    icon: "🤝",
    title: "Co-op & Condo Expertise",
    desc: "Navigating NYC's unique co-op board approvals and condo regulations? We've done it hundreds of times. We know the process.",
  },
  {
    icon: "📋",
    title: "Relocation Services",
    desc: "Moving to Brooklyn from out of state? We offer remote tours, virtual walkthroughs, and full concierge relocation support.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[#C9A84C] font-semibold uppercase tracking-wider text-sm">What We Do</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1B2B6B] mt-2 mb-4">Our Services</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Full-service real estate — from first showing to final signature.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-hover group bg-[#f8f9fc] hover:bg-[#1B2B6B] rounded-2xl p-7 border border-gray-100 cursor-default"
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-lg font-bold text-[#1B2B6B] group-hover:text-white mb-2 transition-colors">{s.title}</h3>
              <p className="text-gray-500 group-hover:text-white/70 text-sm leading-relaxed transition-colors">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
