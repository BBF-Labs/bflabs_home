"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Code2, Terminal, BookOpen, Zap } from "lucide-react";

export default function DeveloperAPI() {
  return (
    <section
      id="developers"
      className="py-32 px-6 bg-black relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-purple-500" />
              <span className="text-sm font-medium text-purple-400 uppercase tracking-wider">
                For Developers
              </span>
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-purple-500" />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Build with our
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                powerful APIs
              </span>
            </h2>

            <p className="text-lg text-white/60 mb-8 leading-relaxed">
              Complete REST APIs and SDKs for seamless integration. Build custom
              learning experiences with comprehensive documentation and
              developer tools.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              {[
                { icon: Code2, text: "RESTful API with OpenAPI specs" },
                {
                  icon: Terminal,
                  text: "Official SDKs for Node, Python, Ruby",
                },
                { icon: BookOpen, text: "Interactive API documentation" },
                { icon: Zap, text: "Webhooks & real-time events" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-[oklch(0.70_0.18_200)]" />
                  </div>
                  <span className="text-white/80">{item.text}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-6 text-base font-semibold">
                View documentation
              </Button>
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/5 rounded-full px-8 py-6 text-base font-semibold"
              >
                Get API keys
              </Button>
            </div>
          </motion.div>

          {/* Right - Code Example */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-linear-to-r from-[oklch(0.65_0.25_280)] to-[oklch(0.70_0.18_200)] rounded-3xl opacity-20 blur-2xl" />

            <div className="relative bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
              {/* Terminal Header */}
              <div className="bg-white/5 border-b border-white/10 px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs text-white/40 ml-2 font-mono">
                  app.js
                </span>
              </div>

              {/* Code Content */}
              <div className="p-6 font-mono text-sm overflow-x-auto">
                <div className="space-y-3">
                  <div>
                    <span className="text-gray-500">
                      // Initialize BetaForge SDK
                    </span>
                  </div>
                  <div>
                    <span className="text-purple-400">import</span>
                    <span className="text-white"> BetaForge </span>
                    <span className="text-purple-400">from</span>
                    <span className="text-green-400"> 'betaforge-sdk'</span>
                    <span className="text-white">;</span>
                  </div>
                  <div className="h-2" />
                  <div>
                    <span className="text-purple-400">const</span>
                    <span className="text-white"> client </span>
                    <span className="text-pink-400">=</span>
                    <span className="text-purple-400"> new</span>
                    <span className="text-purple-400"> BetaForge</span>
                    <span className="text-yellow-300">({"{"}</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-purple-400">apiKey</span>
                    <span className="text-white">: </span>
                    <span className="text-green-400">
                      process.env.BETAFORGE_KEY
                    </span>
                  </div>
                  <div>
                    <span className="text-yellow-300">{"});"}</span>
                  </div>
                  <div className="h-2" />
                  <div>
                    <span className="text-gray-500">// Create assessment</span>
                  </div>
                  <div>
                    <span className="text-purple-400">const</span>
                    <span className="text-white"> assessment </span>
                    <span className="text-pink-400">=</span>
                    <span className="text-purple-400"> await</span>
                    <span className="text-white"> client</span>
                  </div>
                  <div className="pl-2">
                    <span className="text-white">.assessments.</span>
                    <span className="text-purple-400">create</span>
                    <span className="text-yellow-300">({"{"}</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-purple-400">title</span>
                    <span className="text-white">: </span>
                    <span className="text-green-400">'Biology Exam'</span>
                    <span className="text-white">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-purple-400">difficulty</span>
                    <span className="text-white">: </span>
                    <span className="text-green-400">'advanced'</span>
                  </div>
                  <div className="pl-2">
                    <span className="text-yellow-300">{"});"}</span>
                  </div>
                </div>
              </div>

              {/* Status Badge */}
              <div className="absolute top-16 right-4 bg-green-500/20 border border-green-500/30 rounded-full px-3 py-1.5 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-green-300 font-medium">
                  Connected
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
