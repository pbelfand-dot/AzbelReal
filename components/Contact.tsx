"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "", interest: "buy" });
  const [sent, setSent] = useState(false);

  const handle = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[#C9A84C] font-semibold uppercase tracking-wider text-sm">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1B2B6B] mt-2 mb-4">Contact Us</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Ready to buy, sell, or just have questions? Our team responds within the hour.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="rounded-3xl p-10 h-full flex flex-col justify-between"
              style={{ background: "linear-gradient(135deg, #111d4a, #1B2B6B)" }}
            >
              <div>
                <h3 className="text-white text-2xl font-bold mb-2">Azbel Real Estate</h3>
                <p className="text-white/60 mb-10">Brooklyn, NY's trusted real estate partner</p>

                <div className="space-y-6">
                  {[
                    { icon: "📍", label: "Office", val: "Brooklyn, New York" },
                    { icon: "📞", label: "Phone", val: "(718) 555-0192" },
                    { icon: "✉️", label: "Email", val: "info@azbelrealestate.com" },
                    { icon: "🕐", label: "Hours", val: "Mon–Sat: 9am – 7pm" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <span className="text-2xl mt-0.5">{item.icon}</span>
                      <div>
                        <div className="text-white/50 text-xs uppercase tracking-wider">{item.label}</div>
                        <div className="text-white font-medium">{item.val}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-white/15">
                <p className="text-white/60 text-sm mb-4">Follow us</p>
                <div className="flex gap-4">
                  {["Facebook", "Instagram", "LinkedIn"].map((s) => (
                    <a
                      key={s}
                      href="#"
                      className="bg-white/10 hover:bg-[#C9A84C] text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors"
                    >
                      {s}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-10">
                <div className="text-7xl mb-6">✅</div>
                <h3 className="text-2xl font-bold text-[#1B2B6B] mb-3">Message Received!</h3>
                <p className="text-gray-500 max-w-sm">
                  Thank you for reaching out. One of our agents will contact you within the hour.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-8 text-[#1B2B6B] font-semibold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handle} className="space-y-5">
                {/* Interest selector */}
                <div>
                  <label className="block text-sm font-semibold text-[#1B2B6B] mb-2">I'm looking to…</label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { val: "buy", label: "Buy" },
                      { val: "sell", label: "Sell" },
                      { val: "invest", label: "Invest" },
                    ].map((opt) => (
                      <button
                        key={opt.val}
                        type="button"
                        onClick={() => setForm({ ...form, interest: opt.val })}
                        className={`py-3 rounded-xl text-sm font-bold border-2 transition-all ${
                          form.interest === opt.val
                            ? "bg-[#1B2B6B] text-white border-[#1B2B6B]"
                            : "bg-white text-gray-600 border-gray-200 hover:border-[#1B2B6B]"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-[#1B2B6B] mb-1.5">Full Name *</label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Jane Smith"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-700 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1B2B6B] mb-1.5">Phone</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="(718) 555-0000"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-700 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1B2B6B] mb-1.5">Email Address *</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="jane@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-700 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1B2B6B] mb-1.5">Message</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about what you're looking for — budget, neighborhood, timeline..."
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-700 text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1B2B6B] hover:bg-[#2D4A9A] text-white font-bold py-4 rounded-xl transition-colors text-sm tracking-wide"
                >
                  Send Message →
                </button>
                <p className="text-center text-xs text-gray-400">
                  We respect your privacy. Your information will never be shared.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
