"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const reviews = [
  {
    name: "Maria S.",
    location: "Coney Island",
    stars: 5,
    text: "Azbel Real Estate helped us find our dream apartment on the 9th floor with ocean views. The process was seamless and the team was incredibly patient with all our questions. Couldn't be happier!",
    role: "First-time Buyer",
  },
  {
    name: "David K.",
    location: "Brighton Beach",
    stars: 5,
    text: "I was selling my mother's co-op and needed an agent who understood the Brooklyn market. They priced it perfectly, we got multiple offers above asking, and closed in under 60 days. Remarkable.",
    role: "Seller",
  },
  {
    name: "Rachel & Tom M.",
    location: "Bay Ridge",
    stars: 5,
    text: "As a couple relocating from New Jersey, we had no idea where to start. Azbel walked us through six Brooklyn neighborhoods, explained the co-op board process, and found us the perfect place. True professionals.",
    role: "Relocation Buyers",
  },
  {
    name: "Yuri B.",
    location: "Bensonhurst",
    stars: 5,
    text: "I've worked with three different agents in Brooklyn over the years. Azbel Real Estate is in a different league — responsive, knowledgeable, and they actually listen. My go-to for every deal.",
    role: "Investor",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 bg-[#f8f9fc]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[#C9A84C] font-semibold uppercase tracking-wider text-sm">Client Stories</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1B2B6B] mt-2 mb-4">What Our Clients Say</h2>
        </motion.div>

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-3xl shadow-xl p-10 mb-8 text-center"
        >
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(reviews[active].stars)].map((_, i) => (
              <span key={i} className="text-[#C9A84C] text-2xl">★</span>
            ))}
          </div>
          <p className="text-gray-600 text-xl leading-relaxed italic mb-8 max-w-2xl mx-auto">
            "{reviews[active].text}"
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#1B2B6B] flex items-center justify-center text-white font-bold text-lg">
              {reviews[active].name[0]}
            </div>
            <div className="text-left">
              <div className="font-bold text-[#1B2B6B]">{reviews[active].name}</div>
              <div className="text-gray-400 text-sm">{reviews[active].role} · {reviews[active].location}</div>
            </div>
          </div>
        </motion.div>

        {/* Dots */}
        <div className="flex justify-center gap-3">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-full transition-all ${i === active ? "bg-[#1B2B6B] w-8 h-3" : "bg-gray-300 w-3 h-3"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
