"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const listings = [
  {
    id: 1,
    address: "2928 W 5th St, APT 9H",
    city: "Brooklyn, NY 11224",
    neighborhood: "Coney Island",
    price: 285000,
    beds: 2,
    baths: 1,
    sqft: 850,
    maintenance: 685,
    taxes: 0,
    type: "Co-op",
    status: "For Sale",
    features: ["Ocean Views", "Elevator Building", "Laundry in Building", "Near Subway (F/Q)", "Beach 2 Blocks Away", "Storage Unit"],
    description:
      "Stunning high-floor co-op with breathtaking ocean views in the heart of Coney Island. This bright and airy 2-bedroom unit features large windows that flood the space with natural light. Steps to the beach, boardwalk, and subway. An exceptional opportunity in one of Brooklyn's most beloved neighborhoods.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    badge: "Ocean Views",
    zillow: "https://www.zillow.com/homedetails/2928-W-5th-St-APT-9H-Brooklyn-NY-11224/245055298_zpid/",
  },
  {
    id: 2,
    address: "444 Neptune Ave, APT 9S",
    city: "Brooklyn, NY 11224",
    neighborhood: "Coney Island",
    price: 260000,
    beds: 1,
    baths: 1,
    sqft: 720,
    maintenance: 620,
    taxes: 0,
    type: "Co-op",
    status: "For Sale",
    features: ["High Floor", "Updated Kitchen", "Elevator Building", "Near Boardwalk", "F/Q Subway Access", "Doorman Building"],
    description:
      "Beautifully updated 1-bedroom co-op on a high floor with sweeping views of the Coney Island neighborhood. Features a renovated kitchen, generous closet space, and a welcoming layout. Enjoy the vibrant Coney Island lifestyle — beach, boardwalk, Nathan's, and amusement parks all at your doorstep.",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
    badge: "Just Listed",
    zillow: "https://www.zillow.com/homedetails/444-Neptune-Ave-APT-9S-Brooklyn-NY-11224/250366291_zpid/",
  },
];

function formatPrice(p: number) {
  return "$" + p.toLocaleString();
}

export default function Listings() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="listings" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[#C9A84C] font-semibold uppercase tracking-wider text-sm">Featured Properties</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1B2B6B] mt-2 mb-4">Current Listings</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Handpicked properties in Brooklyn's most desirable neighborhoods — ready for you to call home.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {listings.map((l, i) => (
            <motion.div
              key={l.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="card-hover bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg"
            >
              {/* Image */}
              <div className="relative h-60 overflow-hidden">
                <img src={l.image} alt={l.address} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute top-4 left-4 bg-[#C9A84C] text-[#111d4a] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  {l.badge}
                </span>
                <span className="absolute top-4 right-4 bg-[#1B2B6B]/80 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {l.type} · {l.status}
                </span>
                <div className="absolute bottom-4 left-4">
                  <p className="text-white font-extrabold text-3xl">{formatPrice(l.price)}</p>
                  <p className="text-white/80 text-sm">{l.neighborhood}</p>
                </div>
              </div>

              {/* Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1B2B6B] mb-0.5">{l.address}</h3>
                <p className="text-gray-400 text-sm mb-4">{l.city}</p>

                {/* Stats row */}
                <div className="flex gap-5 mb-5">
                  {[
                    { icon: "🛏", val: `${l.beds} Bed${l.beds > 1 ? "s" : ""}` },
                    { icon: "🚿", val: `${l.baths} Bath` },
                    { icon: "📐", val: `${l.sqft} sqft` },
                  ].map((s) => (
                    <div key={s.val} className="flex items-center gap-1.5 text-gray-600 text-sm font-medium">
                      <span>{s.icon}</span>
                      <span>{s.val}</span>
                    </div>
                  ))}
                </div>

                <p className="text-gray-500 text-sm leading-relaxed mb-5">{l.description}</p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {l.features.map((f) => (
                    <span key={f} className="bg-[#1B2B6B]/8 text-[#1B2B6B] text-xs font-medium px-3 py-1 rounded-full border border-[#1B2B6B]/15">
                      {f}
                    </span>
                  ))}
                </div>

                {/* Maintenance */}
                <div className="flex justify-between items-center text-sm text-gray-500 border-t border-gray-100 pt-4 mb-5">
                  <span>Monthly Maintenance</span>
                  <span className="font-semibold text-gray-700">${l.maintenance}/mo</span>
                </div>

                {/* CTA buttons */}
                <div className="flex gap-3">
                  <a
                    href="#contact"
                    className="flex-1 text-center bg-[#1B2B6B] hover:bg-[#2D4A9A] text-white font-bold py-3 rounded-xl transition-colors text-sm"
                  >
                    Schedule Tour
                  </a>
                  <a
                    href={l.zillow}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center border-2 border-[#1B2B6B] text-[#1B2B6B] hover:bg-[#1B2B6B] hover:text-white font-bold py-3 rounded-xl transition-all text-sm"
                  >
                    View on Zillow
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coming soon banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 rounded-2xl p-8 text-center"
          style={{ background: "linear-gradient(135deg, #111d4a, #1B2B6B)" }}
        >
          <p className="text-[#C9A84C] font-semibold uppercase tracking-wider text-sm mb-2">More Coming Soon</p>
          <h3 className="text-white text-2xl font-bold mb-3">Looking for something specific?</h3>
          <p className="text-white/70 mb-6 max-w-lg mx-auto">
            We have off-market listings and new properties added weekly. Tell us what you're looking for.
          </p>
          <a
            href="#contact"
            className="inline-block bg-[#C9A84C] hover:bg-[#e8c97e] text-[#111d4a] font-bold px-8 py-3 rounded-xl transition-colors"
          >
            Contact Our Team
          </a>
        </motion.div>
      </div>
    </section>
  );
}
