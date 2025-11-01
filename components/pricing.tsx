import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const plans = [
  {
    name: "Free",
    price: "0",
    description: "Perfect for trying out BetaForge",
    features: [
      "5 quizzes per month",
      "Basic AI generation",
      "Progress tracking",
      "Community support",
    ],
    cta: "Get Started Free",
    popular: false,
  },
  {
    name: "Student",
    price: "9",
    description: "For serious learners",
    features: [
      "Unlimited quizzes",
      "Advanced AI generation",
      "Detailed analytics",
      "Study groups",
      "Offline access",
      "Priority support",
      "Custom timers",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Pro",
    price: "19",
    description: "For academic excellence",
    features: [
      "Everything in Student",
      "AI tutor chat",
      "Video explanations",
      "Spaced repetition",
      "Export quizzes",
      "API access",
      "White-label option",
      "Dedicated support",
    ],
    cta: "Go Pro",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-24 px-4 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-black text-white text-sm font-semibold px-4 py-2 rounded-full">
              PRICING
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your learning journey. Cancel anytime.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative p-8 rounded-3xl transition-all duration-300 ${
                plan.popular
                  ? "bg-black text-white border-4 border-black shadow-2xl scale-105 md:scale-110"
                  : "bg-white border-2 border-gray-200 hover:border-gray-300 hover:shadow-xl"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-white text-black text-sm font-bold px-4 py-1 rounded-full">
                    MOST POPULAR
                  </span>
                </div>
              )}

              {/* Plan header */}
              <div className="mb-6">
                <h3
                  className={`text-2xl font-bold mb-2 ${
                    plan.popular ? "text-white" : "text-black"
                  }`}
                >
                  {plan.name}
                </h3>
                <p className={plan.popular ? "text-gray-300" : "text-gray-600"}>
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span
                    className={`text-5xl font-bold ${
                      plan.popular ? "text-white" : "text-black"
                    }`}
                  >
                    ${plan.price}
                  </span>
                  <span
                    className={plan.popular ? "text-gray-300" : "text-gray-600"}
                  >
                    /month
                  </span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.popular ? "bg-white/20" : "bg-black/10"
                      }`}
                    >
                      <Check
                        className={`w-3 h-3 ${
                          plan.popular ? "text-white" : "text-black"
                        }`}
                      />
                    </div>
                    <span
                      className={
                        plan.popular ? "text-gray-200" : "text-gray-700"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                className={`w-full py-6 rounded-full font-semibold text-lg ${
                  plan.popular
                    ? "bg-white text-black hover:bg-gray-100"
                    : "bg-black text-white hover:bg-gray-800"
                }`}
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>

        {/* Bottom note */}
        <div className="text-center mt-16">
          <p className="text-gray-600">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
}
