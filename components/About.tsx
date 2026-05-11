"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[#C9A84C] font-semibold uppercase tracking-wider text-sm">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1B2B6B] mt-2 mb-6">
              Brooklyn's Real Estate Experts
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              Azbel Real Estate was founded with a single mission: to provide Brooklyn buyers, sellers, and investors with the personalized, expert service they deserve. We're not a big-box brokerage — we're a dedicated local team with deep neighborhood knowledge and genuine relationships.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              With over 15 years serving Brooklyn communities from Coney Island to Bay Ridge, we've helped hundreds of families find their place in this extraordinary borough. Whether you're buying your first co-op or expanding your investment portfolio, we treat every transaction with the same care and commitment.
            </p>

            <div className="grid grid-cols-2 gap-5 mb-8">
              {[
                { num: "500+", label: "Properties Sold" },
                { num: "15+", label: "Years in Brooklyn" },
                { num: "98%", label: "Client Satisfaction" },
                { num: "$2B+", label: "Total Transactions" },
              ].map((s) => (
                <div key={s.label} className="bg-[#f0f4ff] rounded-2xl p-5">
                  <div className="text-3xl font-extrabold text-[#1B2B6B]">{s.num}</div>
                  <div className="text-gray-500 text-sm mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-block bg-[#1B2B6B] hover:bg-[#2D4A9A] text-white font-bold px-8 py-4 rounded-xl transition-colors"
            >
              Meet Our Team →
            </a>
          </motion.div>

          {/* Image / visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div
              className="rounded-3xl overflow-hidden shadow-2xl h-[500px] relative"
              style={{ background: "linear-gradient(135deg, #111d4a, #1B2B6B)" }}
            >
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
                alt="Brooklyn real estate"
                className="w-full h-full object-cover opacity-70 mix-blend-luminosity"
              />
              {/* Overlay card */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 rounded-2xl p-6 shadow-xl backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#1B2B6B] flex items-center justify-center text-2xl">🏡</div>
                  <div>
                    <p className="font-bold text-[#1B2B6B] text-lg">Local Expertise</p>
                    <p className="text-gray-500 text-sm">Brooklyn born and raised — we know every block.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-6 -right-6 bg-[#C9A84C] text-[#111d4a] rounded-2xl p-5 shadow-xl font-bold text-center">
              <div className="text-3xl font-extrabold">15+</div>
              <div className="text-xs uppercase tracking-wide">Years Trusted</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
