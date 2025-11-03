"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaAndroid,
  FaApple,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
  SiFigma,
  SiFlutter,
  SiOpenai,
} from "react-icons/si";

const technologies = [
  {
    name: "React",
    icon: FaReact,
    color: "#61DAFB",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#FFFFFF",
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "#339933",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "#4169E1",
  },
  {
    name: "Figma",
    icon: SiFigma,
    color: "#F24E1E",
  },
  {
    name: "Flutter",
    icon: SiFlutter,
    color: "#02569B",
  },
  {
    name: "Python",
    icon: FaPython,
    color: "#FFD43B",
  },
  {
    name: "iOS",
    icon: FaApple,
    color: "#FFFFFF",
  },
  {
    name: "Android",
    icon: FaAndroid,
    color: "#3DDC84",
  },
  {
    name: "OpenAI",
    icon: SiOpenai,
    color: "#FFFFFF",
  },
];

export default function TechStack() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 bg-[#1a1a1a] relative overflow-hidden">
      {/* Background patterns - circuit lines left */}
      <div className="absolute left-0 top-0 w-64 sm:w-96 h-full opacity-10">
        <svg className="w-full h-full" viewBox="0 0 400 800">
          <path
            d="M 50 50 L 100 50 L 100 100 L 150 100"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="50" cy="50" r="4" fill="white" />
          <circle cx="100" cy="50" r="4" fill="white" />
          <circle cx="100" cy="100" r="4" fill="white" />
          <circle cx="150" cy="100" r="4" fill="white" />

          <path
            d="M 50 200 L 80 200 L 80 250 L 120 250"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="50" cy="200" r="4" fill="white" />
          <circle cx="120" cy="250" r="4" fill="white" />

          <path
            d="M 30 350 L 70 350 L 70 400 L 110 400 L 110 450"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="30" cy="350" r="4" fill="white" />
          <circle cx="110" cy="450" r="4" fill="white" />
        </svg>
      </div>

      {/* Background patterns - tech symbols right */}
      <div className="absolute right-0 top-0 w-64 sm:w-96 h-full opacity-10">
        <svg className="w-full h-full" viewBox="0 0 400 800">
          <path
            d="M 300 80 L 340 80 L 340 120 L 300 120 Z"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M 350 50 L 380 80 L 350 110"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />

          <circle
            cx="320"
            cy="200"
            r="30"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M 320 180 L 320 220 M 300 200 L 340 200"
            stroke="white"
            strokeWidth="2"
          />

          <path
            d="M 310 350 L 330 330 L 350 350 L 330 370 Z"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M 300 450 L 350 450 L 325 500 Z"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Gradient glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Technologies
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-4">
            Leveraging cutting-edge tools to build exceptional digital products
          </p>
        </motion.div>

        {/* Tech icons container with border */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Glowing border effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-white/20 via-gray-400/20 to-white/20 rounded-3xl blur opacity-30" />

          {/* Main container */}
          <div className="relative bg-[#1a1a1a]/80 backdrop-blur-xl rounded-3xl border border-white/10 p-8 sm:p-12 md:p-16">
            {/* Tech grid */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 gap-8 sm:gap-12 md:gap-16">
              {technologies.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="flex flex-col items-center justify-center gap-3 group cursor-pointer"
                  >
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                      className="relative"
                    >
                      {/* Glow effect on hover */}
                      <div
                        className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                        style={{ backgroundColor: tech.color }}
                      />
                      <Icon
                        size={48}
                        color={tech.color}
                        className="relative z-10 transition-all duration-300"
                      />
                    </motion.div>

                    {/* Tech name */}
                    <span className="text-xs sm:text-sm font-medium text-white/60 group-hover:text-white transition-colors duration-300 text-center">
                      {tech.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
