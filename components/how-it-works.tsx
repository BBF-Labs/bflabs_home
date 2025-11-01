import { Upload, Sparkles, BookOpen, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Upload Your Notes",
    description:
      "Simply upload your lecture notes, slides, or study materials in any format",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "AI Generates Quizzes",
    description:
      "Our advanced AI analyzes your content and creates relevant, challenging questions",
  },
  {
    number: "03",
    icon: BookOpen,
    title: "Take Your Quiz",
    description:
      "Answer questions at your own pace with instant feedback and explanations",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Track Progress",
    description:
      "Monitor your improvement and identify areas that need more attention",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24 px-4 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-black text-white text-sm font-semibold px-4 py-2 rounded-full">
              HOW IT WORKS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
            Simple, Fast & Effective
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get started in minutes and transform your study routine forever
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 -z-10" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <Card className="bg-white p-8 rounded-3xl border-2 border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-xl h-full">
                    {/* Step number */}
                    <div className="text-6xl font-bold text-gray-100 mb-4">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold mb-4 text-black">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </Card>

                  {/* Arrow connector for desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-8 -translate-y-1/2 z-20">
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-black rounded-full" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Ready to experience the future of studying?
          </p>
          <button className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl">
            Start Your First Quiz
          </button>
        </div>
      </div>
    </section>
  );
}
