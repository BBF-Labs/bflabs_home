"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  Brain,
  Zap,
  Target,
  BookOpen,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Content Generation",
    description:
      "Advanced algorithms create personalized learning content at scale for your institution's unique curriculum.",
  },
  {
    icon: Sparkles,
    title: "Adaptive Learning Paths",
    description:
      "Intelligent systems that automatically adjust content difficulty and pacing based on learner performance.",
  },
  {
    icon: Target,
    title: "Multi-Tenant Architecture",
    description:
      "Secure, scalable infrastructure designed for schools and institutions with isolated data and custom branding.",
  },
  {
    icon: Zap,
    title: "Real-Time Analytics",
    description:
      "Comprehensive dashboards and insights to track learner progress, engagement, and outcomes across your organization.",
  },
  {
    icon: BookOpen,
    title: "RESTful APIs",
    description:
      "Complete developer-friendly APIs to integrate our platform seamlessly into your existing systems.",
  },
  {
    icon: TrendingUp,
    title: "Enterprise-Grade Security",
    description:
      "SOC 2 compliant infrastructure with SSO, role-based access control, and comprehensive audit logs.",
  },
];

export default function AIFeatures() {
  return (
    <section className="py-32 px-6 bg-black relative overflow-hidden">
      {/* Gradient orbs */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-48 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-48 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" />
      </div> */}

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header - Stripe style */}
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
              Platform Capabilities
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-purple-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Built for{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              scale
            </span>
            <br />
            <span className="text-gray-400">and flexibility</span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto font-light">
            Enterprise-ready infrastructure designed for educational
            institutions that demand reliability, security, and performance
          </p>
        </motion.div>

        {/* Features Grid - Stripe card style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                {/* Gradient border on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-300" />

                <div className="relative h-full bg-[#0a0a0a] backdrop-blur-sm border border-white/10 rounded-2xl p-8 group-hover:bg-white/5 group-hover:border-purple-500/50 transition-all duration-300">
                  {/* Icon with gradient background */}
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-white/10 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-purple-400" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed group-hover:text-white/80 transition-colors">
                    {feature.description}
                  </p>

                  {/* Hover arrow */}
                  <div className="mt-6 flex items-center text-white/40 group-hover:text-purple-400 transition-colors">
                    <span className="text-sm font-medium mr-2">Learn more</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
