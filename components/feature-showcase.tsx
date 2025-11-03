import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Users, TrendingUp } from "lucide-react";

export default function FeatureShowcase() {
  return (
    <>
      {/* Solutions Header */}
      {/* Solution 1 - Personalized Quizzes */}
      <section className="py-16 sm:py-20 px-4 bg-[#393939] relative overflow-hidden">
        {/* Background patterns - dots left */}
        <div className="absolute left-0 top-0 w-64 sm:w-96 h-full opacity-5">
          <svg className="w-full h-full" viewBox="0 0 400 800">
            <pattern
              id="featureDots1"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="20" cy="20" r="3" fill="white" />
            </pattern>
            <rect
              x="0"
              y="0"
              width="400"
              height="800"
              fill="url(#featureDots1)"
            />
          </svg>
        </div>

        {/* Background patterns - grid right */}
        <div className="absolute right-0 top-0 w-64 sm:w-96 h-full opacity-5">
          <svg className="w-full h-full" viewBox="0 0 400 800">
            <defs>
              <pattern
                id="grid1"
                width="50"
                height="50"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 50 0 L 0 0 0 50"
                  fill="none"
                  stroke="white"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="400" height="800" fill="url(#grid1)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block mb-4">
            <span className="bg-white text-black text-sm font-semibold px-4 py-2 rounded-full">
              OUR PLATFORM
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white px-4">
            Make Your Learning Exceptional
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto px-4">
            Master your courses with lecture-specific quizzes and comprehensive
            assessments. Experience up to 95% improvement in exam performance.
          </p>
        </div>
      </section>

      {/* Solution 1 - Quiz Platform (LIVE) */}
      <section className="py-16 sm:py-20 md:px-4 bg-[#393939] relative overflow-hidden">
        {/* Background patterns - zigzag left */}
        <div className="absolute left-0 top-0 w-64 sm:w-96 h-full opacity-5">
          <svg className="w-full h-full" viewBox="0 0 400 800">
            <path
              d="M 0 0 L 50 50 L 0 100 L 50 150 L 0 200 L 50 250 L 0 300 L 50 350 L 0 400"
              stroke="white"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M 50 0 L 100 50 L 50 100 L 100 150 L 50 200 L 100 250 L 50 300 L 100 350 L 50 400"
              stroke="white"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
        </div>

        {/* Background patterns - waves right */}
        <div className="absolute right-0 top-0 w-64 sm:w-96 h-full opacity-5">
          <svg className="w-full h-full" viewBox="0 0 400 800">
            <path
              d="M 400 0 Q 300 50 400 100 T 400 200 T 400 300 T 400 400"
              stroke="white"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M 350 0 Q 250 50 350 100 T 350 200 T 350 300 T 350 400"
              stroke="white"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid sm:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Phone Mockup */}
            <div className="flex justify-center px-1 sm:px-0">
              <Card className="relative w-full sm:max-w-md h-[450px] sm:h-[500px] bg-[#1a1a1a] rounded-[2.5rem] sm:rounded-[3rem] p-6 sm:p-8 overflow-hidden border-6 sm:border-8 border-gray-800 shadow-2xl">
                {/* Background pattern - curved lines */}
                <div className="absolute inset-0 opacity-10">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 400 600"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M 0 100 Q 200 50 400 100 T 800 100"
                      stroke="white"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path
                      d="M 0 250 Q 200 200 400 250 Q 600 300 800 250"
                      stroke="white"
                      strokeWidth="1.5"
                      fill="none"
                    />
                    <circle
                      cx="350"
                      cy="450"
                      r="80"
                      stroke="white"
                      strokeWidth="1"
                      fill="none"
                    />
                    <circle
                      cx="50"
                      cy="150"
                      r="60"
                      stroke="white"
                      strokeWidth="1"
                      fill="none"
                    />
                  </svg>
                </div>

                {/* Quiz Interface */}
                <div className="relative z-10 space-y-4 mt-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-xs text-gray-300">Question 5/30</div>
                      <div className="text-xs text-gray-300">⏱️ 25:00</div>
                    </div>
                    <div className="font-semibold text-white text-sm mb-3">
                      Introduction to Economics
                    </div>
                    <div className="text-xs text-gray-300">
                      What is the law of supply and demand?
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                      <div className="text-xs text-white">
                        A. Market equilibrium concept
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-3 border-2 border-white">
                      <div className="text-xs text-black font-semibold">
                        B. Price determination theory ✓
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-white text-sm">
                          Progress Tracking
                        </div>
                        <div className="text-xs text-gray-400">
                          95% accuracy rate
                        </div>
                      </div>
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                        <span className="text-2xl">📊</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Content */}
            <div className="text-center lg:text-left px-4 sm:px-6 lg:px-8">
              <div className="inline-block mb-4">
                <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  LIVE
                </span>
              </div>
              <div className="text-sm font-semibold text-gray-300 mb-2">
                Interactive Learning
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white">
                Quiz Platform
              </h2>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6 sm:mb-8">
                Practice with lecture-specific quizzes tailored to your exact
                course content. Access comprehensive assessments with custom
                timers and instant feedback.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3 text-gray-200">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shrink-0">
                    <span className="text-black text-xs">✓</span>
                  </div>
                  <span>Lecture-Specific Quizzes</span>
                </li>
                <li className="flex items-center gap-3 text-gray-200">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shrink-0">
                    <span className="text-black text-xs">✓</span>
                  </div>
                  <span>Progress Tracking & Analytics</span>
                </li>
                <li className="flex items-center gap-3 text-gray-200">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shrink-0">
                    <span className="text-black text-xs">✓</span>
                  </div>
                  <span>Offline Access & Custom Timers</span>
                </li>
              </ul>
              <Button className="bg-white text-black hover:bg-gray-100 px-6 py-6 rounded-full font-semibold">
                Start Learning <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solution 2 - Real-Time Notifications */}
    </>
  );
}
