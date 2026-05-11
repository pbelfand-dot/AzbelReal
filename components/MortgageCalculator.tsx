"use client";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";

export default function MortgageCalculator() {
  const [price, setPrice] = useState(320000);
  const [down, setDown] = useState(20);
  const [rate, setRate] = useState(7.1);
  const [years, setYears] = useState(30);

  const results = useMemo(() => {
    const principal = price * (1 - down / 100);
    const monthlyRate = rate / 100 / 12;
    const n = years * 12;
    const monthly =
      monthlyRate === 0
        ? principal / n
        : (principal * (monthlyRate * Math.pow(1 + monthlyRate, n))) /
          (Math.pow(1 + monthlyRate, n) - 1);
    const total = monthly * n;
    const totalInterest = total - principal;
    const downPayment = price * (down / 100);
    return { monthly, total, totalInterest, downPayment, principal };
  }, [price, down, rate, years]);

  const fmt = (n: number) =>
    "$" + Math.round(n).toLocaleString();

  return (
    <section id="mortgage" className="py-24" style={{ background: "#f0f4ff" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[#C9A84C] font-semibold uppercase tracking-wider text-sm">Plan Your Purchase</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1B2B6B] mt-2 mb-4">Mortgage Calculator</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Estimate your monthly payments and total loan costs in seconds.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Inputs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <div className="space-y-7">
              {/* Home Price */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="font-semibold text-[#1B2B6B]">Home Price</label>
                  <span className="text-[#1B2B6B] font-bold">{fmt(price)}</span>
                </div>
                <input
                  type="range"
                  min={100000}
                  max={2000000}
                  step={5000}
                  value={price}
                  onChange={(e) => setPrice(+e.target.value)}
                  className="w-full accent-[#1B2B6B] h-2 rounded-full"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>$100K</span><span>$2M</span>
                </div>
              </div>

              {/* Down Payment */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="font-semibold text-[#1B2B6B]">Down Payment</label>
                  <span className="text-[#1B2B6B] font-bold">{down}% · {fmt(price * down / 100)}</span>
                </div>
                <input
                  type="range"
                  min={3}
                  max={60}
                  step={1}
                  value={down}
                  onChange={(e) => setDown(+e.target.value)}
                  className="w-full accent-[#1B2B6B] h-2 rounded-full"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>3%</span><span>60%</span>
                </div>
              </div>

              {/* Interest Rate */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="font-semibold text-[#1B2B6B]">Interest Rate (APR)</label>
                  <span className="text-[#1B2B6B] font-bold">{rate.toFixed(1)}%</span>
                </div>
                <input
                  type="range"
                  min={2}
                  max={12}
                  step={0.1}
                  value={rate}
                  onChange={(e) => setRate(+e.target.value)}
                  className="w-full accent-[#1B2B6B] h-2 rounded-full"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>2%</span><span>12%</span>
                </div>
              </div>

              {/* Loan Term */}
              <div>
                <label className="font-semibold text-[#1B2B6B] block mb-3">Loan Term</label>
                <div className="grid grid-cols-3 gap-3">
                  {[10, 15, 20, 25, 30].map((y) => (
                    <button
                      key={y}
                      onClick={() => setYears(y)}
                      className={`py-2.5 rounded-xl text-sm font-bold transition-all ${
                        years === y
                          ? "bg-[#1B2B6B] text-white shadow-md"
                          : "bg-gray-100 text-gray-600 hover:bg-[#1B2B6B]/10"
                      }`}
                    >
                      {y} yr
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5"
          >
            {/* Monthly payment highlight */}
            <div
              className="rounded-2xl p-8 text-center flex-1 flex flex-col justify-center"
              style={{ background: "linear-gradient(135deg, #111d4a, #1B2B6B)" }}
            >
              <p className="text-white/70 uppercase tracking-wider text-sm mb-2">Est. Monthly Payment</p>
              <motion.p
                key={results.monthly}
                initial={{ scale: 0.9, opacity: 0.5 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-white font-extrabold mb-1"
                style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
              >
                {fmt(results.monthly)}
              </motion.p>
              <p className="text-[#C9A84C] text-sm">per month · {years}-year fixed</p>
            </div>

            {/* Breakdown cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Down Payment", value: fmt(results.downPayment), sub: `${down}%`, color: "#C9A84C" },
                { label: "Loan Amount", value: fmt(results.principal), sub: `${100 - down}%`, color: "#1B2B6B" },
                { label: "Total Interest", value: fmt(results.totalInterest), sub: "over loan term", color: "#e74c3c" },
                { label: "Total Cost", value: fmt(results.total + results.downPayment), sub: "all-in", color: "#2ecc71" },
              ].map((item) => (
                <div key={item.label} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                  <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">{item.label}</div>
                  <div className="font-extrabold text-lg" style={{ color: item.color }}>{item.value}</div>
                  <div className="text-xs text-gray-400">{item.sub}</div>
                </div>
              ))}
            </div>

            <div className="bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-xl p-4 text-sm text-gray-600">
              <span className="font-semibold text-[#111d4a]">💡 Note: </span>
              This is an estimate. Actual payments may vary based on credit score, lender, taxes, insurance, and HOA/maintenance fees.
              <a href="#contact" className="text-[#1B2B6B] font-semibold hover:underline ml-1">Speak with our team →</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
