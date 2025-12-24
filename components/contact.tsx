"use client";

import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-16 sm:py-20 px-4 bg-black text-white relative overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-purple-500" />
            <span className="text-sm font-medium text-purple-400 uppercase tracking-wider">
              Get In Touch
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-purple-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Let's Build{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              Something Amazing
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            Ready to transform your learning platform? We're here to help bring
            your vision to life
          </p>
        </div>

        {/* Contact Form and Info Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Form - Takes 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            {/* Top Row - Name and Email */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl opacity-0 group-focus-within:opacity-50 blur transition-opacity" />
                <input
                  type="text"
                  placeholder="Your name"
                  className="relative w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all backdrop-blur-sm"
                />
              </div>
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl opacity-0 group-focus-within:opacity-50 blur transition-opacity" />
                <input
                  type="email"
                  placeholder="Email address"
                  className="relative w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all backdrop-blur-sm"
                />
              </div>
            </div>

            {/* Second Row - Company and Phone */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl opacity-0 group-focus-within:opacity-50 blur transition-opacity" />
                <input
                  type="text"
                  placeholder="Company (optional)"
                  className="relative w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all backdrop-blur-sm"
                />
              </div>
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl opacity-0 group-focus-within:opacity-50 blur transition-opacity" />
                <input
                  type="tel"
                  placeholder="Phone (optional)"
                  className="relative w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all backdrop-blur-sm"
                />
              </div>
            </div>

            {/* Message */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl opacity-0 group-focus-within:opacity-50 blur transition-opacity" />
              <textarea
                placeholder="Tell us about your project..."
                rows={6}
                className="relative w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all resize-none backdrop-blur-sm"
              />
            </div>
          </div>

          {/* Contact Info - Takes 1 column */}
          <div className="space-y-6">
            {/* Phone Numbers */}
            <div className="relative group bg-white/5 border border-white/10 hover:border-purple-500/50 rounded-xl p-6 backdrop-blur-sm transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="mb-4">
                  <p className="text-xs text-purple-400 uppercase mb-1 font-medium">
                    USA
                  </p>
                  <a
                    href="tel:+16469725340"
                    className="text-white hover:text-purple-400 transition-colors font-medium"
                  >
                    +1 (646) 972-5340
                  </a>
                </div>
                <div>
                  <p className="text-xs text-purple-400 uppercase mb-1 font-medium">
                    GHANA
                  </p>
                  <a
                    href="tel:+233543876146"
                    className="text-white hover:text-purple-400 transition-colors font-medium"
                  >
                    +233 (54) 387-6146
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="relative group bg-white/5 border border-white/10 hover:border-pink-500/50 rounded-xl p-6 backdrop-blur-sm transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-orange-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <p className="text-xs text-pink-400 uppercase mb-2 font-medium">
                  EMAIL
                </p>
                <a
                  href="mailto:contact@radiantsoftwarelabs.com"
                  className="text-white hover:text-pink-400 transition-colors font-medium break-words text-sm"
                >
                  contact@radiantsoftwarelabs.com
                </a>
              </div>
            </div>

            {/* Quick Call Button */}
            <button className="relative w-full bg-white/5 border border-white/10 hover:border-orange-500/50 rounded-xl p-6 transition-all group overflow-hidden backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex items-center justify-center gap-2">
                <svg
                  className="w-5 h-5 text-orange-400 group-hover:scale-110 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-white font-medium">Quick Call</span>
              </div>
            </button>

            {/* Submit Button */}
            <Button className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 text-white rounded-xl py-6 text-base font-semibold shadow-lg hover:shadow-purple-500/50 transition-all">
              <span>Send Message</span>
              <Send className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
