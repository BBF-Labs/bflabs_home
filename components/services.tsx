"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Lightbulb,
  Palette,
  Globe,
  Smartphone,
  Layers,
  Workflow,
  Cloud,
  Headset,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Technology Advisory",
    description: "Strategic technology consulting to align your business goals",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Systems & UX Design",
    description: "Crafting intuitive user experiences and robust architectures",
    icon: Palette,
  },
  {
    number: "03",
    title: "Web Development",
    description: "Building fast, scalable web applications",
    icon: Globe,
  },
  {
    number: "04",
    title: "Mobile Development",
    description: "Native and cross-platform mobile solutions",
    icon: Smartphone,
  },
  {
    number: "05",
    title: "Platform Development",
    description: "Custom platforms and SaaS solutions",
    icon: Layers,
  },
  {
    number: "06",
    title: "Systems Integration",
    description: "Seamlessly connecting your tech stack",
    icon: Workflow,
  },
  {
    number: "07",
    title: "Cloud & Infrastructure",
    description: "Scalable cloud solutions and infrastructure",
    icon: Cloud,
  },
  {
    number: "08",
    title: "Managed Support Services",
    description: "24/7 technical support and maintenance",
    icon: Headset,
  },
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className="py-12 sm:py-16 px-4 bg-[#393939] relative overflow-hidden"
    >
      {/* Background patterns - wavy lines left */}
      <div className="absolute left-0 top-0 w-64 sm:w-96 h-full opacity-10">
        <svg className="w-full h-full" viewBox="0 0 400 800">
          <path
            d="M 0 0 Q 100 100 0 200 T 0 400 T 0 600 T 0 800"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M 50 0 Q 150 100 50 200 T 50 400 T 50 600 T 50 800"
            stroke="white"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M 100 0 Q 200 100 100 200 T 100 400 T 100 600 T 100 800"
            stroke="white"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>

      {/* Background patterns - diagonal lines right */}
      <div className="absolute right-0 top-0 w-64 sm:w-96 h-full opacity-10">
        <svg className="w-full h-full" viewBox="0 0 400 800">
          <path
            d="M 400 0 L 0 400"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M 400 100 L 100 400"
            stroke="white"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M 400 200 L 200 400"
            stroke="white"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M 400 400 L 0 800"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-block mb-4">
            <span className="bg-white text-black text-sm font-semibold px-4 py-2 rounded-full">
              BF LABS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
            Custom Solutions & Consulting
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            Beyond our quiz platform, we build robust applications and deliver
            trustworthy solutions for clients worldwide
          </p>
        </motion.div>

        {/* Vertical Flow Layout */}
        <div className="relative">
          {/* Center vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden md:block" />

          {services.map((service, index) => {
            const Icon = service.icon;
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative mb-8 sm:mb-12 last:mb-0"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Left side */}
                  <div
                    className={`${
                      isLeft ? "md:text-right" : "md:order-2"
                    } relative`}
                  >
                    <motion.div
                      whileHover={{ x: isLeft ? -10 : 10 }}
                      transition={{ duration: 0.3 }}
                      className="inline-block"
                    >
                      {/* Number */}
                      <div className="flex items-start gap-4 md:inline-flex">
                        <span className="text-5xl sm:text-6xl md:text-7xl font-black text-white/5">
                          {service.number}
                        </span>
                        <div className={`${isLeft ? "md:mr-8" : "md:ml-8"}`}>
                          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-white/80 transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-gray-400 max-w-xs">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Center icon */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.1 + 0.3,
                        type: "spring",
                      }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      className="relative group cursor-pointer"
                    >
                      {/* Glow */}
                      <div className="absolute inset-0 bg-white rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
                      {/* Icon container */}
                      <div className="relative bg-black border-2 border-white/20 rounded-full p-3 group-hover:border-white/60 transition-all">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Right side - empty spacer for alignment */}
                  <div
                    className={`${isLeft ? "md:order-2" : ""} hidden md:block`}
                  />
                </div>

                {/* Mobile icon */}
                <div className="md:hidden mt-4 flex items-center gap-3">
                  <div className="bg-white/5 border border-white/10 rounded-lg p-2">
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Connecting line for mobile */}
                {index < services.length - 1 && (
                  <div className="md:hidden h-8 w-px bg-white/10 ml-12 mt-4" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
