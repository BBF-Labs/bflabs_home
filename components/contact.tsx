"use client";

import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-16 sm:py-20 px-4 bg-[#1a1a1a] text-white relative overflow-hidden">
      {/* Background patterns - geometric shapes left */}
      <div className="absolute left-0 top-0 w-64 sm:w-96 h-full opacity-10">
        <svg className="w-full h-full" viewBox="0 0 400 800">
          <rect
            x="20"
            y="50"
            width="60"
            height="60"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
          <circle
            cx="50"
            cy="180"
            r="30"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
          <polygon
            points="50,280 80,330 20,330"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      {/* Background patterns - lines right */}
      <div className="absolute right-0 top-0 w-64 sm:w-96 h-full opacity-10">
        <svg className="w-full h-full" viewBox="0 0 400 800">
          <path d="M 300 100 L 350 100" stroke="white" strokeWidth="2" />
          <path d="M 300 150 L 380 150" stroke="white" strokeWidth="2" />
          <path d="M 300 200 L 360 200" stroke="white" strokeWidth="2" />
          <path d="M 300 350 L 350 350" stroke="white" strokeWidth="2" />
          <path d="M 300 400 L 380 400" stroke="white" strokeWidth="2" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            contact us
          </h2>
          <p className="text-base sm:text-lg text-gray-400">
            Get in touch with our team
          </p>
        </div>

        {/* Contact Form and Info Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Form - Takes 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            {/* Top Row - Name and Email */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-[#1a1a1a] border border-gray-800 rounded-xl px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors"
                />
              </div>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full bg-[#1a1a1a] border border-gray-800 rounded-xl px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors"
                />
              </div>
            </div>

            {/* Second Row - Company and Phone */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Company (optional)"
                  className="w-full bg-[#1a1a1a] border border-gray-800 rounded-xl px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors"
                />
              </div>
              <div className="relative">
                <input
                  type="tel"
                  placeholder="Phone (optional)"
                  className="w-full bg-[#1a1a1a] border border-gray-800 rounded-xl px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors"
                />
              </div>
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                placeholder="Tell us about your project..."
                rows={6}
                className="w-full bg-[#1a1a1a] border border-gray-800 rounded-xl px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors resize-none"
              />
            </div>
          </div>

          {/* Contact Info - Takes 1 column */}
          <div className="space-y-6">
            {/* Phone Numbers */}
            <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-6">
              <div className="mb-4">
                <p className="text-xs text-gray-500 uppercase mb-1">USA</p>
                <a
                  href="tel:+16469725340"
                  className="text-white hover:text-gray-300 transition-colors font-medium"
                >
                  +1 (646) 972-5340
                </a>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase mb-1">GHANA</p>
                <a
                  href="tel:+233543876146"
                  className="text-white hover:text-gray-300 transition-colors font-medium"
                >
                  +233 (54) 387-6146
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-6">
              <p className="text-xs text-gray-500 uppercase mb-2">EMAIL</p>
              <a
                href="mailto:contact@radiantsoftwarelabs.com"
                className="text-white hover:text-gray-300 transition-colors font-medium break-words text-sm"
              >
                contact@radiantsoftwarelabs.com
              </a>
            </div>

            {/* Quick Call Button */}
            <button className="w-full bg-[#1a1a1a] border border-gray-800 rounded-xl p-6 hover:border-white/30 transition-all group">
              <div className="flex items-center justify-center gap-2">
                <svg
                  className="w-5 h-5 text-white"
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
                <span className="text-white font-medium">quick call</span>
              </div>
            </button>

            {/* Submit Button */}
            <Button className="w-full bg-white hover:bg-gray-200 text-black rounded-xl py-6 text-base font-semibold">
              <span>get that quote</span>
              <Send className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
