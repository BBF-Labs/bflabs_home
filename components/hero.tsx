"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden">
      {/* Diagonal Gradient Stripe Component */}
      <DiagonalGradientStripe />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 pt-24 sm:pt-32 pb-16 sm:pb-20">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 xl:gap-20 items-center min-h-[calc(100vh-8rem)]">
          {/* Left Column - Text Content */}
          <div className="space-y-6 sm:space-y-8 max-w-2xl">
            {/* Announcement Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 text-sm text-white/90 transition-all group"
              >
                <span className="font-medium">Sessions 2026</span>
                <span className="text-white/60">·</span>
                <span className="text-white/70">
                  Early-bird registration now open
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-white/60 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </motion.div>

            {/* Main Headline - Multi-Color Style */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold leading-[1.1] tracking-tight"
              style={{
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
              }}
            >
              <span className="block text-white mb-1">Enterprise</span>
              <span className="block text-white mb-1">
                <span className="text-[oklch(0.70_0.24_300)]">learn</span>
                <span className="text-[oklch(0.68_0.22_310)]">ing </span>
              </span>
              <span className="block text-white">
                <span className="text-[oklch(0.72_0.24_305)]">plat</span>
                <span className="text-[oklch(0.70_0.22_300)]">form</span>
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-white/60 max-w-xl leading-relaxed"
            >
              Powerful APIs and multi-tenant infrastructure for educational
              institutions. Build, scale, and manage learning experiences that
              adapt to your needs.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-7 py-5 text-[15px] font-semibold transition-all">
                View documentation →
              </Button>
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/5 rounded-full px-7 py-5 text-[15px] font-semibold transition-all"
              >
                Contact sales
              </Button>
            </motion.div>
          </div>

          {/* Right Column - Overlapping Card Mockups */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative w-full h-[500px] sm:h-[550px] lg:h-[600px] mt-8 lg:mt-0"
          >
            <OverlappingCardMockups />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Overlapping Card Mockups - Stripe Style with Inset Shadow
function OverlappingCardMockups() {
  return (
    <div className="relative w-full h-full">
      {/* Background Card - Behind */}
      <motion.div
        initial={{ opacity: 0, y: 20, rotate: -2 }}
        animate={{ opacity: 1, y: 0, rotate: -2 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="absolute top-12 sm:top-16 lg:top-20 left-2 sm:left-4 lg:left-8 w-[280px] sm:w-[320px] lg:w-[340px] z-10"
        style={{
          boxShadow:
            "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24), inset 0 0 0 1px rgba(255,255,255,0.1)",
        }}
      >
        <div className="bg-[#18181b] rounded-xl lg:rounded-2xl p-4 sm:p-5 lg:p-6 border border-white/10">
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-white/90 font-semibold text-xs sm:text-sm">
                Weekly Progress
              </span>
              <span className="text-white/50 text-[10px] sm:text-xs">
                Accuracy ▼
              </span>
            </div>
            <div className="text-xl sm:text-2xl font-bold text-white">
              87.5%
            </div>
            <div className="text-[10px] sm:text-xs text-white/40">
              Last 7 days
            </div>
            <div className="h-20 sm:h-24 bg-gradient-to-t from-purple-500/20 to-purple-500/5 rounded-lg border border-purple-500/20"></div>
            <div className="text-[10px] sm:text-xs text-white/60">
              Quiz completion rate{" "}
              <span className="text-green-400">+12.3%</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Card - Front Center */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="absolute top-32 sm:top-36 lg:top-40 right-0 sm:right-2 lg:right-0 w-[300px] sm:w-[340px] lg:w-[360px] z-30"
        style={{
          boxShadow:
            "0 10px 40px rgba(0,0,0,0.3), 0 2px 8px rgba(0,0,0,0.2), inset 0 0 0 1px rgba(255,255,255,0.05)",
        }}
      >
        <div className="bg-white rounded-xl lg:rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gray-50/80 backdrop-blur-sm px-4 sm:px-5 py-3 sm:py-4 border-b border-gray-200/50 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <span className="text-white text-[9px] sm:text-[10px] font-bold">
                  β
                </span>
              </div>
              <span className="font-medium text-gray-700 text-[10px] sm:text-xs uppercase tracking-wide">
                BETAFORGE
              </span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 sm:p-5 lg:p-6 space-y-4 sm:space-y-5">
            {/* Quiz Card */}
            <div className="flex items-start gap-2 sm:gap-3">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                <svg
                  className="w-6 h-6 sm:w-7 sm:h-7 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 text-xs sm:text-sm">
                  Biology 101 Quiz
                </h3>
                <p className="text-gray-500 text-[10px] sm:text-xs mt-0.5">
                  Chapter 5 - Cell Division
                </p>
              </div>
            </div>

            {/* Question Preview */}
            <div className="bg-gray-50 rounded-lg sm:rounded-xl p-3 sm:p-4 space-y-2 sm:space-y-3">
              <div className="text-[10px] sm:text-xs font-medium text-gray-700">
                Question 1 of 10
              </div>
              <div className="text-xs sm:text-sm text-gray-900 font-medium">
                What is the primary function of mitochondria?
              </div>

              {/* Answer Options */}
              <div className="space-y-1.5 sm:space-y-2">
                <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-2.5 sm:px-3 py-1.5 sm:py-2 cursor-pointer hover:border-purple-300 transition-colors">
                  <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-2 border-gray-300 flex-shrink-0"></div>
                  <span className="text-[10px] sm:text-xs text-gray-700">
                    Protein synthesis
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-purple-50 border-2 border-purple-500 rounded-lg px-2.5 sm:px-3 py-1.5 sm:py-2">
                  <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-2 border-purple-500 bg-purple-500 flex items-center justify-center flex-shrink-0">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white"></div>
                  </div>
                  <span className="text-[10px] sm:text-xs text-gray-900 font-medium">
                    Energy production
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-2.5 sm:px-3 py-1.5 sm:py-2 cursor-pointer hover:border-purple-300 transition-colors">
                  <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-2 border-gray-300 flex-shrink-0"></div>
                  <span className="text-[10px] sm:text-xs text-gray-700">
                    DNA replication
                  </span>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <button className="w-full bg-black text-white rounded-lg sm:rounded-xl py-2.5 sm:py-3 text-xs sm:text-sm font-semibold hover:bg-gray-900 transition-colors">
              Submit Answer
            </button>
          </div>
        </div>
      </motion.div>

      {/* Secondary Card - Behind Right */}
      <motion.div
        initial={{ opacity: 0, y: 20, rotate: 3 }}
        animate={{ opacity: 1, y: 0, rotate: 3 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="absolute top-6 sm:top-8 lg:top-10 right-12 sm:right-14 lg:right-16 w-[260px] sm:w-[300px] lg:w-[320px] z-20"
        style={{
          boxShadow:
            "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24), inset 0 0 0 1px rgba(255,255,255,0.08)",
        }}
      >
        <div className="bg-[#18181b] rounded-xl lg:rounded-2xl p-4 sm:p-5 border border-white/10">
          <div className="space-y-2.5 sm:space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <div className="text-white/90 text-[10px] sm:text-xs font-medium">
                  AI Study Tips
                </div>
                <div className="text-white/50 text-[9px] sm:text-[10px]">
                  Based on your progress
                </div>
              </div>
            </div>
            <div className="text-white/80 text-[10px] sm:text-xs leading-relaxed">
              Focus on Chapters 3 & 7 for your upcoming exam. You're doing
              great!
            </div>
            <button className="w-full bg-white text-black rounded-full py-1.5 sm:py-2 text-[10px] sm:text-xs font-semibold hover:bg-gray-100 transition-colors">
              View Recommendations
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Professional Card Mockup Component - Modular (Keeping for reference)
function PaymentCardMockup() {
  return (
    <div className="relative">
      {/* Glow effect */}
      <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 rounded-3xl blur-2xl opacity-60" />

      {/* Main Card */}
      <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Card Header */}
        <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <span className="text-white text-xs font-bold">β</span>
              </div>
              <span className="font-semibold text-gray-900 text-sm">
                BETAFORGE
              </span>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6 space-y-6">
          {/* Product Info */}
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center flex-shrink-0">
              <svg
                className="w-8 h-8 text-purple-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 text-base">
                Premium Quiz Access
              </h3>
              <p className="text-gray-500 text-sm mt-1">$19 per month</p>
            </div>
          </div>

          {/* Payment Button */}
          <button className="w-full bg-black text-white rounded-lg py-4 font-medium text-sm hover:bg-gray-900 transition-colors flex items-center justify-center gap-2">
            <AppleIcon className="w-5 h-5" />
            Pay
          </button>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-white text-gray-500">
                Or pay with card
              </span>
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="you@example.com"
            />
          </div>

          {/* Card Information */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Card information
            </label>
            <div className="space-y-0">
              <div className="relative">
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-t-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="1234 1234 1234 1234"
                />
                <div className="absolute right-3 top-3 flex gap-1">
                  <VisaIcon />
                  <MastercardIcon />
                </div>
              </div>
              <div className="grid grid-cols-2">
                <input
                  type="text"
                  className="px-4 py-3 border-l border-b border-t-0 border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent rounded-bl-lg"
                  placeholder="MM / YY"
                />
                <input
                  type="text"
                  className="px-4 py-3 border-l border-r border-b border-t-0 border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent rounded-br-lg"
                  placeholder="CVC"
                />
              </div>
            </div>
          </div>

          {/* Country Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Country or region
            </label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
              <option>United States</option>
            </select>
          </div>

          {/* ZIP Code */}
          <div>
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="ZIP"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Icon Components - Modular
function AppleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  );
}

function VisaIcon() {
  return (
    <svg className="w-8 h-5" viewBox="0 0 48 32" fill="none">
      <rect width="48" height="32" rx="4" fill="#fff" />
      <path d="M20.5 11h-3.2l-2 10h3.2l2-10z" fill="#00579F" />
      <path
        d="M31.5 11L28 21h-3l1.7-7.4-2.2 7.4h-2l-.5-7.7L20.5 21h-2.8l2.5-10h4.3l.3 6.5L26.5 11h5z"
        fill="#FAA61A"
      />
    </svg>
  );
}

function MastercardIcon() {
  return (
    <svg className="w-8 h-5" viewBox="0 0 48 32" fill="none">
      <circle cx="18" cy="16" r="10" fill="#EB001B" />
      <circle cx="30" cy="16" r="10" fill="#F79E1B" />
      <path
        d="M24 9.6c1.8 1.5 3 3.8 3 6.4s-1.2 4.9-3 6.4c-1.8-1.5-3-3.8-3-6.4s1.2-4.9 3-6.4z"
        fill="#FF5F00"
      />
    </svg>
  );
}

function X({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

// Diagonal Gradient Stripe Component - Animated 3D Fluid Mesh
function DiagonalGradientStripe() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* The diagonal container with fluid gradient mesh */}
      <div
        className="absolute top-0 left-0 w-[200%] h-[80%] overflow-hidden"
        style={{
          transform: "rotate(-15deg) translateY(-20%)",
          transformOrigin: "top left",
        }}
      >
        {/* Fluid gradient mesh inspired by Aurora Lagoon style */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 15% 40%, oklch(0.70 0.24 300 / 0.6) 0%, oklch(0.65 0.22 310 / 0.3) 40%, transparent 70%),
              radial-gradient(ellipse 70% 45% at 35% 30%, oklch(0.68 0.23 305 / 0.5) 0%, oklch(0.64 0.25 315 / 0.25) 40%, transparent 70%),
              radial-gradient(ellipse 85% 55% at 55% 45%, oklch(0.66 0.22 310 / 0.55) 0%, oklch(0.62 0.24 300 / 0.3) 40%, transparent 70%),
              radial-gradient(ellipse 75% 48% at 75% 35%, oklch(0.70 0.25 315 / 0.5) 0%, oklch(0.66 0.23 320 / 0.28) 40%, transparent 70%),
              radial-gradient(ellipse 80% 52% at 90% 50%, oklch(0.68 0.24 305 / 0.45) 0%, oklch(0.64 0.22 300 / 0.25) 40%, transparent 70%)
            `,
            filter: "blur(60px)",
          }}
          animate={{
            background: [
              `
                radial-gradient(ellipse 80% 50% at 15% 40%, oklch(0.70 0.24 300 / 0.6) 0%, oklch(0.65 0.22 310 / 0.3) 40%, transparent 70%),
                radial-gradient(ellipse 70% 45% at 35% 30%, oklch(0.68 0.23 305 / 0.5) 0%, oklch(0.64 0.25 315 / 0.25) 40%, transparent 70%),
                radial-gradient(ellipse 85% 55% at 55% 45%, oklch(0.66 0.22 310 / 0.55) 0%, oklch(0.62 0.24 300 / 0.3) 40%, transparent 70%),
                radial-gradient(ellipse 75% 48% at 75% 35%, oklch(0.70 0.25 315 / 0.5) 0%, oklch(0.66 0.23 320 / 0.28) 40%, transparent 70%),
                radial-gradient(ellipse 80% 52% at 90% 50%, oklch(0.68 0.24 305 / 0.45) 0%, oklch(0.64 0.22 300 / 0.25) 40%, transparent 70%)
              `,
              `
                radial-gradient(ellipse 85% 52% at 18% 38%, oklch(0.70 0.24 300 / 0.6) 0%, oklch(0.65 0.22 310 / 0.3) 40%, transparent 70%),
                radial-gradient(ellipse 75% 48% at 38% 33%, oklch(0.68 0.23 305 / 0.5) 0%, oklch(0.64 0.25 315 / 0.25) 40%, transparent 70%),
                radial-gradient(ellipse 80% 50% at 58% 48%, oklch(0.66 0.22 310 / 0.55) 0%, oklch(0.62 0.24 300 / 0.3) 40%, transparent 70%),
                radial-gradient(ellipse 78% 50% at 78% 38%, oklch(0.70 0.25 315 / 0.5) 0%, oklch(0.66 0.23 320 / 0.28) 40%, transparent 70%),
                radial-gradient(ellipse 82% 54% at 92% 52%, oklch(0.68 0.24 305 / 0.45) 0%, oklch(0.64 0.22 300 / 0.25) 40%, transparent 70%)
              `,
              `
                radial-gradient(ellipse 80% 50% at 15% 40%, oklch(0.70 0.24 300 / 0.6) 0%, oklch(0.65 0.22 310 / 0.3) 40%, transparent 70%),
                radial-gradient(ellipse 70% 45% at 35% 30%, oklch(0.68 0.23 305 / 0.5) 0%, oklch(0.64 0.25 315 / 0.25) 40%, transparent 70%),
                radial-gradient(ellipse 85% 55% at 55% 45%, oklch(0.66 0.22 310 / 0.55) 0%, oklch(0.62 0.24 300 / 0.3) 40%, transparent 70%),
                radial-gradient(ellipse 75% 48% at 75% 35%, oklch(0.70 0.25 315 / 0.5) 0%, oklch(0.66 0.23 320 / 0.28) 40%, transparent 70%),
                radial-gradient(ellipse 80% 52% at 90% 50%, oklch(0.68 0.24 305 / 0.45) 0%, oklch(0.64 0.22 300 / 0.25) 40%, transparent 70%)
              `,
            ],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
}
