"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function DeveloperAPI() {
  return (
    <section className="py-16 sm:py-20 md:px-4 bg-[#393939] relative overflow-hidden">
      {/* Background patterns - brackets/code left */}
      <div className="absolute left-0 top-0 w-64 sm:w-96 h-full opacity-5">
        <svg className="w-full h-full" viewBox="0 0 400 800">
          <path
            d="M 100 50 L 50 100 L 100 150"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M 100 200 L 50 250 L 100 300"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M 100 350 L 50 400 L 100 450"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
          <text
            x="20"
            y="100"
            font-family="monospace"
            font-size="30"
            fill="white"
            opacity="0.3"
          >
            {"<>"}
          </text>
          <text
            x="20"
            y="250"
            font-family="monospace"
            font-size="30"
            fill="white"
            opacity="0.3"
          >
            {"{ }"}
          </text>
        </svg>
      </div>

      {/* Background patterns - code symbols right */}
      <div className="absolute right-0 top-0 w-64 sm:w-96 h-full opacity-5">
        <svg className="w-full h-full" viewBox="0 0 400 800">
          <path
            d="M 300 50 L 350 100 L 300 150"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M 300 200 L 350 250 L 300 300"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
          <line
            x1="280"
            y1="380"
            x2="370"
            y2="380"
            stroke="white"
            strokeWidth="2"
          />
          <line
            x1="280"
            y1="420"
            x2="370"
            y2="420"
            stroke="white"
            strokeWidth="2"
          />
          <line
            x1="280"
            y1="460"
            x2="370"
            y2="460"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid sm:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Phone Mockup */}
          <div className="flex justify-center px-1 sm:px-0">
            <Card className="relative w-full sm:max-w-md h-[450px] sm:h-[500px] bg-[#1a1a1a] rounded-[2.5rem] sm:rounded-[3rem] p-6 sm:p-8 overflow-hidden border-6 sm:border-8 border-gray-800 shadow-2xl">
              {/* Background pattern - diagonal lines top right */}
              <div className="absolute top-0 right-0 w-40 sm:w-48 h-40 sm:h-48 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 200 200">
                  <path
                    d="M 20 0 L 40 0 M 40 0 L 60 0 M 60 0 L 80 0 M 80 0 L 100 0 M 100 0 L 120 0 M 120 0 L 140 0"
                    stroke="white"
                    strokeWidth="8"
                    transform="rotate(45 100 100)"
                  />
                  <path
                    d="M 0 20 L 0 40 M 0 40 L 0 60 M 0 60 L 0 80 M 0 80 L 0 100 M 0 100 L 0 120"
                    stroke="white"
                    strokeWidth="8"
                    transform="rotate(45 100 100)"
                  />
                </svg>
              </div>

              {/* API Code Display */}
              <div className="relative z-10 space-y-4 mt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="font-mono text-xs text-white space-y-1">
                    <div className="text-gray-400">// Initialize SDK</div>
                    <div>
                      <span className="text-purple-400">const</span>{" "}
                      <span className="text-white">betaforge</span>{" "}
                      <span className="text-pink-400">=</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-blue-400">require</span>
                      <span className="text-yellow-300">(</span>
                      <span className="text-green-400">'betaforge-sdk'</span>
                      <span className="text-yellow-300">)</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                  <div className="font-mono text-xs text-white space-y-1">
                    <div className="text-gray-400">// Create Quiz</div>
                    <div>
                      <span className="text-purple-400">const</span>{" "}
                      <span className="text-white">quiz</span>{" "}
                      <span className="text-pink-400">=</span>{" "}
                      <span className="text-pink-400">await</span>
                    </div>
                    <div className="pl-2">
                      <span className="text-gray-300">betaforge.quizzes</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-blue-400">.create</span>
                      <span className="text-yellow-300">({"{"}</span>
                      <span className="text-cyan-400">...</span>
                      <span className="text-yellow-300">{"}"}</span>
                      <span className="text-yellow-300">)</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-white text-sm">
                        Full API Documentation
                      </div>
                      <div className="text-xs text-gray-400">
                        Interactive examples & guides
                      </div>
                    </div>
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                      <span className="text-black text-xs">→</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left px-4 sm:px-6 lg:px-8">
            <div className="inline-block mb-4">
              <span className="bg-white text-black text-xs font-bold px-3 py-1 rounded-full">
                FOR DEVELOPERS
              </span>
            </div>
            <div className="text-sm font-semibold text-gray-300 mb-2">
              Integration & Development
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white">
              Developer Tools & API
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6 sm:mb-8">
              Integrate our quiz platform into your applications with powerful
              REST APIs. Upload custom questions, manage quiz content, and
              access detailed analytics programmatically.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-3 text-gray-200">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shrink-0">
                  <span className="text-black text-xs">✓</span>
                </div>
                <span>RESTful API Access</span>
              </li>
              <li className="flex items-center gap-3 text-gray-200">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shrink-0">
                  <span className="text-black text-xs">✓</span>
                </div>
                <span>Custom Question Upload</span>
              </li>
              <li className="flex items-center gap-3 text-gray-200">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shrink-0">
                  <span className="text-black text-xs">✓</span>
                </div>
                <span>Analytics & Webhooks</span>
              </li>
              <li className="flex items-center gap-3 text-gray-200">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shrink-0">
                  <span className="text-black text-xs">✓</span>
                </div>
                <span>Pre-built SDKs & Libraries</span>
              </li>
              <li className="flex items-center gap-3 text-gray-200">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shrink-0">
                  <span className="text-black text-xs">✓</span>
                </div>
                <span>OAuth 2.0 Authentication</span>
              </li>
              <li className="flex items-center gap-3 text-gray-200">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shrink-0">
                  <span className="text-black text-xs">✓</span>
                </div>
                <span>99.9% Uptime Guarantee</span>
              </li>
            </ul>
            <Button className="bg-white text-black hover:bg-gray-100 px-6 sm:px-8 py-6 rounded-full font-semibold text-base">
              Get API Access
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
