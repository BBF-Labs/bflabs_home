"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    <section className="py-32 px-6 bg-[oklch(0.10_0.01_260)] relative overflow-hidden">
      {/* Stripe-style gradient orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[oklch(0.55_0.25_280)] rounded-full blur-[150px] opacity-20" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[oklch(0.65_0.20_200)] rounded-full blur-[150px] opacity-15" />

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header - Stripe style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
            <span className="text-sm font-medium text-white/70">Our Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Built with the best
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto font-light">
            Leveraging cutting-edge technologies to deliver exceptional digital
            experiences
          </p>
        </motion.div>

        {/* Tech grid - Stripe card style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto"
        >
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                {/* Card with gradient border on hover */}
                <div className="absolute -inset-0.5 bg-linear-to-r from-[oklch(0.65_0.25_280)] to-[oklch(0.70_0.18_200)] rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-300" />

                <div className="relative h-40 bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 group-hover:bg-white/[0.06] group-hover:border-white/20 transition-all duration-300">
                  {/* Icon with glow */}
                  <div className="relative">
                    <div
                      className="absolute inset-0 blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-300"
                      style={{ backgroundColor: tech.color }}
                    />
                    <Icon
                      size={40}
                      style={{ color: tech.color }}
                      className="relative z-10 transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  {/* Tech name */}
                  <span className="text-sm font-medium text-white/50 group-hover:text-white/90 transition-colors duration-300 text-center">
                    {tech.name}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA section - Stripe style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="max-w-3xl mx-auto bg-linear-to-br from-white/5 to-white/2 backdrop-blur-sm border border-white/10 rounded-3xl p-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Want to build something amazing?
            </h3>
            <p className="text-lg text-white/60 mb-8">
              Let's turn your vision into reality with our proven tech stack
            </p>
            <Button className="bg-white text-black hover:bg-white/90 px-8 py-6 text-base font-semibold rounded-xl transition-all hover:scale-105 hover:shadow-2xl hover:shadow-[oklch(0.65_0.25_280)]/20">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
