import {
  BookOpen,
  BarChart3,
  Timer,
  Zap,
  Brain,
  Target,
  Award,
  Users,
} from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Questions",
    description:
      "Generate intelligent questions from your lecture notes using advanced AI technology",
  },
  {
    icon: BookOpen,
    title: "Lecture-Specific Content",
    description:
      "Practice with quizzes perfectly tailored to your exact course material",
  },
  {
    icon: BarChart3,
    title: "Progress Analytics",
    description:
      "Track your performance with detailed insights and improvement metrics",
  },
  {
    icon: Timer,
    title: "Adaptive Testing",
    description:
      "Customize quiz duration and difficulty to match your learning pace",
  },
  {
    icon: Target,
    title: "Smart Study Plans",
    description:
      "Get personalized study recommendations based on your weak areas",
  },
  {
    icon: Zap,
    title: "Instant Feedback",
    description: "Receive immediate explanations and learn from your mistakes",
  },
  {
    icon: Award,
    title: "Achievement System",
    description: "Stay motivated with badges, streaks, and milestone rewards",
  },
  {
    icon: Users,
    title: "Study Groups",
    description:
      "Collaborate with classmates through shared quizzes and leaderboards",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-16 sm:py-20 md:py-24 px-4 bg-white relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-200 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-200 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-4">
            <span className="bg-black text-white text-sm font-semibold px-4 py-2 rounded-full">
              SERVICES
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-black px-4">
            Services We Provide
          </h2>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl border-2 border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-black rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-black">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 bg-black opacity-0 group-hover:opacity-5 rounded-bl-full transition-opacity" />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
