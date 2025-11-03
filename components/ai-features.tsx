"use client";

import { motion } from "framer-motion";
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
    title: "AI-Generated Questions",
    description:
      "Smart algorithms create unlimited practice questions tailored to your course content and difficulty level.",
  },
  {
    icon: Sparkles,
    title: "Smart Flashcards",
    description:
      "Adaptive flashcards that focus on concepts you find challenging, powered by spaced repetition.",
  },
  {
    icon: Target,
    title: "Lecture-Specific Quizzes",
    description:
      "Quizzes perfectly aligned with your exact lecture content and course materials.",
  },
  {
    icon: Zap,
    title: "Instant Feedback",
    description:
      "Get immediate explanations and detailed breakdowns of correct and incorrect answers.",
  },
  {
    icon: BookOpen,
    title: "Offline Access",
    description:
      "Download quizzes and study materials to learn anywhere, even without internet.",
  },
  {
    icon: TrendingUp,
    title: "Performance Analytics",
    description:
      "Track your progress with detailed insights and personalized recommendations.",
  },
];

export default function AIFeatures() {
  return (
    <section className="py-16 sm:py-20 px-4 bg-[#393939] relative overflow-hidden">
      {/* Background patterns - diagonal lines left */}
      <div className="absolute left-0 top-0 w-64 sm:w-96 h-full opacity-5">
        <svg className="w-full h-full" viewBox="0 0 400 800">
          <path
            d="M 0 0 L 200 400"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M 0 100 L 100 400"
            stroke="white"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M 0 200 L 50 400"
            stroke="white"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M 0 400 L 200 800"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      {/* Background patterns - circles right */}
      <div className="absolute right-0 top-0 w-64 sm:w-96 h-full opacity-5">
        <svg className="w-full h-full" viewBox="0 0 400 800">
          <circle
            cx="300"
            cy="100"
            r="60"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
          <circle
            cx="320"
            cy="300"
            r="80"
            stroke="white"
            strokeWidth="1.5"
            fill="none"
          />
          <circle
            cx="280"
            cy="500"
            r="70"
            stroke="white"
            strokeWidth="1"
            fill="none"
          />
          <circle
            cx="310"
            cy="700"
            r="90"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
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
              MAGICAL FEATURES
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            Study Smarter, Not Harder
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
            Powered by cutting-edge AI to make your learning journey more
            effective and personalized
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Large Card - Full Stack Development (spans 2 rows, 1 col) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:row-span-2 bg-[#1a1a1a] rounded-3xl p-8 border border-gray-800 hover:border-white/30 transition-all group"
          >
            <div className="flex flex-col h-full">
              <div className="mb-6">
                <div className="inline-flex p-4 rounded-2xl bg-white/5">
                  <Brain className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                AI-Generated Questions
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                We build{" "}
                <span className="text-white font-semibold">
                  scalable, production-ready applications
                </span>{" "}
                using modern frameworks and best practices.
              </p>
              <div className="mt-auto space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  <span className="text-sm">React, Next.js & TypeScript</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  <span className="text-sm">Node.js & Python backends</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  <span className="text-sm">Cloud deployment & DevOps</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mobile Apps */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:border-black transition-all"
          >
            <div className="mb-4">
              <Sparkles className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-2xl font-bold text-black mb-3">
              Smart Flashcards
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Native iOS & Android apps, or cross-platform solutions with React
              Native.
            </p>
          </motion.div>

          {/* UI/UX Design */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:border-black transition-all"
          >
            <div className="mb-4">
              <Target className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-2xl font-bold text-black mb-3">
              Lecture-Specific Quizzes
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Beautiful, intuitive interfaces designed with your users in mind.
            </p>
          </motion.div>

          {/* MVP Launch (wider card) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-[#1a1a1a] rounded-3xl p-8 border border-gray-800 hover:border-white/30 transition-all"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Instant Feedback
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Get to market fast with a minimum viable product in weeks, not
                  months.
                </p>
              </div>
              <div>
                {/* Progress indicator */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-white text-sm mb-2">
                    <span>Typical Timeline</span>
                    <span className="font-semibold">8 weeks</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-green-500 rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Team Augmentation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:border-black transition-all"
          >
            <div className="mb-4">
              <BookOpen className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-2xl font-bold text-black mb-3">
              Offline Access
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Extend your team with expert developers who integrate seamlessly.
            </p>
            {/* Team avatars placeholder */}
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white"></div>
              <div className="w-10 h-10 rounded-full bg-gray-400 border-2 border-white"></div>
              <div className="w-10 h-10 rounded-full bg-gray-500 border-2 border-white"></div>
            </div>
          </motion.div>

          {/* Analytics & Growth */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:border-black transition-all"
          >
            <div className="mb-4">
              <TrendingUp className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-2xl font-bold text-black mb-3">
              Performance Analytics
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Data-driven insights to{" "}
              <span className="text-black font-semibold">
                optimize and scale
              </span>{" "}
              your product.
            </p>
            {/* Mini chart placeholder */}
            <div className="flex items-end gap-1 h-16">
              <div
                className="flex-1 bg-gray-300 rounded-t"
                style={{ height: "40%" }}
              ></div>
              <div
                className="flex-1 bg-gray-400 rounded-t"
                style={{ height: "60%" }}
              ></div>
              <div
                className="flex-1 bg-gray-500 rounded-t"
                style={{ height: "50%" }}
              ></div>
              <div
                className="flex-1 bg-green-500 rounded-t"
                style={{ height: "100%" }}
              ></div>
            </div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
        >
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-black mb-2">
              50K+
            </div>
            <div className="text-sm sm:text-base text-gray-600">
              Active Students
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-black mb-2">
              1M+
            </div>
            <div className="text-sm sm:text-base text-gray-600">
              Quizzes Completed
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-black mb-2">
              95%
            </div>
            <div className="text-sm sm:text-base text-gray-600">
              Improvement Rate
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-black mb-2">
              500+
            </div>
            <div className="text-sm sm:text-base text-gray-600">
              Universities
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
