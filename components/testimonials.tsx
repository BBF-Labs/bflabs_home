"use client";

import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Medical Student",
    image: "SJ",
    rating: 5,
    content:
      "BetaForge completely transformed how I study. I went from barely passing to top of my class. The AI-generated quizzes are incredibly accurate to our lecture material.",
  },
  {
    name: "Michael Chen",
    role: "Engineering Major",
    image: "MC",
    rating: 5,
    content:
      "The progress tracking feature is a game-changer. I can see exactly which topics I need to focus on. My exam scores have improved by 30%!",
  },
  {
    name: "Emily Rodriguez",
    role: "Business Analytics",
    image: "ER",
    rating: 5,
    content:
      "I love how easy it is to create quizzes from my notes. Within minutes, I have a complete practice test ready. It's like having a personal tutor 24/7.",
  },
  {
    name: "David Osei",
    role: "Computer Science",
    image: "DO",
    rating: 5,
    content:
      "The instant feedback and explanations help me understand concepts I struggled with. BetaForge made studying actually enjoyable for the first time!",
  },
  {
    name: "Amara Williams",
    role: "Law Student",
    image: "AW",
    rating: 5,
    content:
      "As a law student, memorization is crucial. BetaForge's adaptive testing keeps me sharp and ready. I passed the bar exam on my first try!",
  },
  {
    name: "James Park",
    role: "Psychology Major",
    image: "JP",
    rating: 5,
    content:
      "The study groups feature is fantastic! My classmates and I compete on leaderboards, which makes studying so much more engaging and fun.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 px-4 bg-black text-white relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="bg-white text-black text-sm font-semibold px-4 py-2 rounded-full">
              TESTIMONIALS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Loved By Students
            <span className="block text-gray-400">Everywhere</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Join thousands of students who have transformed their academic
            performance
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="relative bg-white/5 backdrop-blur-sm border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              {/* Background patterns - varied for each card */}
              {index % 3 === 0 && (
                <div className="absolute top-0 right-0 w-24 h-24 opacity-5">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="white"
                      strokeWidth="1"
                      fill="none"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="30"
                      stroke="white"
                      strokeWidth="1"
                      fill="none"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="20"
                      stroke="white"
                      strokeWidth="1"
                      fill="none"
                    />
                  </svg>
                </div>
              )}
              {index % 3 === 1 && (
                <div className="absolute bottom-0 left-0 w-32 h-32 opacity-5">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <path
                      d="M 10 50 Q 30 30 50 50 T 90 50"
                      stroke="white"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path
                      d="M 10 70 Q 30 50 50 70 T 90 70"
                      stroke="white"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </div>
              )}
              {index % 3 === 2 && (
                <div className="absolute top-1/2 right-0 w-20 h-20 opacity-5">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <pattern
                      id={`dots-${index}`}
                      x="0"
                      y="0"
                      width="15"
                      height="15"
                      patternUnits="userSpaceOnUse"
                    >
                      <circle cx="7.5" cy="7.5" r="1.5" fill="white" />
                    </pattern>
                    <rect
                      x="0"
                      y="0"
                      width="100"
                      height="100"
                      fill={`url(#dots-${index})`}
                    />
                  </svg>
                </div>
              )}

              {/* Rating */}
              <div className="flex gap-1 mb-4 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 mb-6 leading-relaxed relative z-10">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center font-bold text-black">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom stats */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <span className="font-semibold">4.9/5</span>
            <span className="text-gray-400">from over 10,000 reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}
