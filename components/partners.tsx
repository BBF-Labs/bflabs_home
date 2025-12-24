"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
  {
    name: "Stanford University",
    logo: "https://cdn-icons-png.flaticon.com/512/2702/2702154.png",
  },
  {
    name: "MIT",
    logo: "https://cdn-icons-png.flaticon.com/512/2702/2702602.png",
  },
  {
    name: "UC Berkeley",
    logo: "https://cdn-icons-png.flaticon.com/512/2702/2702134.png",
  },
  {
    name: "Harvard University",
    logo: "https://cdn-icons-png.flaticon.com/512/2702/2702135.png",
  },
  {
    name: "Carnegie Mellon",
    logo: "https://cdn-icons-png.flaticon.com/512/2702/2702153.png",
  },
  {
    name: "Oxford University",
    logo: "https://cdn-icons-png.flaticon.com/512/2702/2702137.png",
  },
  {
    name: "Yale University",
    logo: "https://cdn-icons-png.flaticon.com/512/2702/2702150.png",
  },
  {
    name: "Princeton University",
    logo: "https://cdn-icons-png.flaticon.com/512/2702/2702149.png",
  },
  {
    name: "Columbia University",
    logo: "https://cdn-icons-png.flaticon.com/512/2702/2702136.png",
  },
  {
    name: "Cornell University",
    logo: "https://cdn-icons-png.flaticon.com/512/2702/2702151.png",
  },
  {
    name: "University of Chicago",
    logo: "https://cdn-icons-png.flaticon.com/512/2702/2702152.png",
  },
  {
    name: "Johns Hopkins",
    logo: "https://cdn-icons-png.flaticon.com/512/2702/2702138.png",
  },
];

const stats = [
  { value: "500K+", label: "Active Learners" },
  { value: "150+", label: "Partner Institutions" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "50M+", label: "Assessments Delivered" },
];

export default function Partners() {
  return (
    <section
      id="partners"
      className="py-32 px-6 bg-black relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-purple-500" />
            <span className="text-sm font-medium text-purple-400 uppercase tracking-wider">
              Partners
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-purple-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              leading
            </span>
            <br />
            <span className="text-gray-400">institutions worldwide</span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto font-light">
            Universities and schools rely on BetaForge to power their digital
            learning experiences
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-white/60 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Infinite Scrolling Logo Strip */}
        <div className="relative mb-20">
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

          <div className="overflow-hidden">
            <motion.div
              className="flex gap-8 md:gap-12"
              animate={{
                x: [0, -1920],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {/* First set of logos */}
              {partners.map((partner, index) => (
                <div
                  key={`first-${index}`}
                  className="shrink-0 flex items-center justify-center"
                >
                  <div className="relative group">
                    {/* Logo container */}
                    <div className="w-24 h-24 rounded-2xl bg-white flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300 shadow-2xl p-4">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={80}
                        height={80}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    {/* University name on hover */}
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      <span className="text-xs text-white/70 font-medium">
                        {partner.name}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {partners.map((partner, index) => (
                <div
                  key={`second-${index}`}
                  className="shrink-0 flex items-center justify-center"
                >
                  <div className="relative group">
                    {/* Logo container */}
                    <div className="w-24 h-24 rounded-2xl bg-white flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300 shadow-2xl p-4">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={80}
                        height={80}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    {/* University name on hover */}
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      <span className="text-xs text-white/70 font-medium">
                        {partner.name}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-white/60 mb-6">
            Interested in partnering with us?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-white text-black hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all hover:scale-105"
          >
            Become a partner
          </a>
        </motion.div>
      </div>
    </section>
  );
}
