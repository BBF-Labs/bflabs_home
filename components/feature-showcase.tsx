import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Users, TrendingUp } from "lucide-react";

export default function FeatureShowcase() {
  return (
    <>
      {/* Solutions Header */}
      <section className="py-16 sm:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block mb-4">
            <span className="bg-black text-white text-sm font-semibold px-4 py-2 rounded-full">
              OUR PLATFORM
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-black px-4">
            Make Your Learning Exceptional
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Master your courses with lecture-specific quizzes and comprehensive
            assessments. Experience up to 95% improvement in exam performance.
          </p>
        </div>
      </section>

      {/* Solution 1 - Quiz Platform (LIVE) */}
      <section className="py-16 sm:py-20 md:px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Phone Mockup */}
            <div className="flex justify-center px-1 sm:px-0">
              <Card className="relative w-full sm:max-w-md h-[450px] sm:h-[500px] bg-black rounded-[2.5rem] sm:rounded-[3rem] p-6 sm:p-8 overflow-hidden border-6 sm:border-8 border-gray-800 shadow-2xl">
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
              <div className="text-sm font-semibold text-gray-500 mb-2">
                Interactive Learning
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-black">
                Quiz Platform
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8">
                Practice with lecture-specific quizzes tailored to your exact
                course content. Access comprehensive assessments with custom
                timers and instant feedback.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>Lecture-Specific Quizzes</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>Progress Tracking & Analytics</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>Offline Access & Custom Timers</span>
                </li>
              </ul>
              <Button className="bg-black text-white hover:bg-gray-800 px-6 py-6 rounded-full font-semibold">
                Start Learning <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solution 2 - Real-Time Notifications */}
      <section className="py-16 sm:py-20 mmd:px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left px-4 sm:px-6 lg:px-8">
              <div className="inline-block mb-4">
                <span className="bg-black text-white text-xs font-bold px-3 py-1 rounded-full">
                  SOON
                </span>
              </div>
              <div className="text-sm font-semibold text-gray-500 mb-2">
                Smart Notifications
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-black">
                Real-Time Notifications
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8">
                Stay updated with instant notifications for quiz completions,
                score updates, and achievement milestones. Get immediate
                feedback and track your learning progress in real-time.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>Instant Score Updates</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>Achievement Milestones</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>Progress Tracking Alerts</span>
                </li>
              </ul>
              <Button
                variant="outline"
                className="border-2 border-black text-black hover:bg-black hover:text-white px-6 py-6 rounded-full font-semibold"
              >
                Coming Soon
              </Button>
            </div>

            {/* Phone Mockup */}
            <div className="flex justify-center px-1 sm:px-0">
              <Card className="relative w-full sm:max-w-md h-[450px] sm:h-[500px] bg-black rounded-[2.5rem] sm:rounded-[3rem] p-6 sm:p-8 overflow-hidden border-6 sm:border-8 border-gray-800 shadow-2xl">
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

                {/* Notification cards */}
                <div className="relative z-10 space-y-4 mt-16">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 flex items-center gap-3">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0">
                      <span className="text-2xl">💬</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-white text-sm">
                        Quiz Completed
                      </div>
                      <div className="text-xs text-gray-300 truncate">
                        Chemistry Chapter 5 - Score: 95%
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 flex items-center gap-3">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0">
                      <span className="text-2xl font-bold text-black">β</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-white text-sm">
                        BetaForge
                      </div>
                      <div className="text-xs text-gray-300 truncate">
                        Your Quiz Progress Has Been Recorded
                      </div>
                    </div>
                    <div className="text-xs text-gray-400">1 min ago</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Solution 3 - Developer Tools */}
      <section className="py-16 sm:py-20 md:px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Phone Mockup */}
            <div className="flex justify-center px-1 sm:px-0">
              <Card className="relative w-full sm:max-w-md h-[450px] sm:h-[500px] bg-black rounded-[2.5rem] sm:rounded-[3rem] p-6 sm:p-8 overflow-hidden border-6 sm:border-8 border-gray-800 shadow-2xl">
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
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <div className="font-mono text-xs text-white space-y-1">
                      <div className="text-gray-400">// Quiz API</div>
                      <div>
                        <span className="text-white">POST</span>{" "}
                        <span className="text-gray-300">/api/quiz/submit</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                    <div className="font-mono text-xs text-white space-y-1">
                      <div className="text-gray-400">// Response</div>
                      <div>
                        <span className="text-gray-300">score:</span>{" "}
                        <span className="text-white">95</span>
                      </div>
                      <div>
                        <span className="text-gray-300">correct:</span>{" "}
                        <span className="text-white">28/30</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-white text-sm">
                          API Documentation
                        </div>
                        <div className="text-xs text-gray-400">
                          Integrate with your app
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
                <span className="bg-black text-white text-xs font-bold px-3 py-1 rounded-full">
                  SOON
                </span>
              </div>
              <div className="text-sm font-semibold text-gray-500 mb-2">
                Integration & Development
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-black">
                Developer Tools & API
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8">
                Integrate our quiz platform into your applications with powerful
                REST APIs. Upload custom questions, manage quiz content, and
                access detailed analytics programmatically.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>RESTful API Access</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>Custom Question Upload</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>Analytics & Webhooks</span>
                </li>
              </ul>
              <Button
                variant="outline"
                className="border-2 border-black text-black hover:bg-black hover:text-white px-6 py-6 rounded-full font-semibold"
              >
                Coming Soon
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
