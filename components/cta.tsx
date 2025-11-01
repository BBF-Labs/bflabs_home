import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 bg-black text-white relative overflow-hidden">
      {/* Background patterns - white wavy lines left */}
      <div className="absolute left-0 top-0 w-64 sm:w-96 h-full opacity-10">
        <svg className="w-full h-full" viewBox="0 0 400 800">
          <path
            d="M 0 0 Q 100 100 0 200 T 0 400 T 0 600 T 0 800"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M 50 0 Q 150 100 50 200 T 50 400 T 50 600 T 50 800"
            stroke="white"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M 100 0 Q 200 100 100 200 T 100 400 T 100 600 T 100 800"
            stroke="white"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>

      {/* Background patterns - white diagonal lines right */}
      <div className="absolute right-0 top-0 w-64 sm:w-96 h-full opacity-10">
        <svg className="w-full h-full" viewBox="0 0 400 800">
          <path
            d="M 400 0 L 0 400"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M 400 100 L 100 400"
            stroke="white"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M 400 200 L 200 400"
            stroke="white"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M 400 400 L 0 800"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left - Content */}
          <div className="px-2 sm:px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              Ready to Transform Your Business?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-6 sm:mb-8 md:mb-10 leading-relaxed">
              Let's work together to bring your vision to life. Contact us today
              for a free consultation and discover how we can help your business
              grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button className="w-full sm:w-auto bg-white text-black hover:bg-gray-100 px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base md:text-lg rounded-full font-semibold group">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-black px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base md:text-lg rounded-full"
              >
                Schedule a Call
              </Button>
            </div>
          </div>

          {/* Right - Contact Links */}
          <div className="space-y-4 px-2 sm:px-4">
            <div className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6">
              Get In Touch
            </div>

            {/* Email */}
            <a
              href="mailto:betaforgelabs@bfabs.com"
              className="flex items-center gap-4 bg-white text-black px-6 py-4 rounded-2xl hover:bg-gray-100 transition-all group"
            >
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div className="font-semibold text-lg">
                betaforgelabs@bfabs.com
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+1234567890"
              className="flex items-center gap-4 bg-white text-black px-6 py-4 rounded-2xl hover:bg-gray-100 transition-all group"
            >
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div className="font-semibold text-lg">123-456-7890</div>
            </a>

            {/* Location */}
            <div className="flex items-center gap-4 bg-white text-black px-6 py-4 rounded-2xl">
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center shrink-0">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div className="font-semibold text-lg">Accra, Ghana</div>
            </div>

            {/* About Platform */}
            <div className="mt-8 pt-6 border-t border-gray-800">
              <h3 className="text-lg sm:text-xl font-bold mb-3 text-white">
                Why Choose BetaForge?
              </h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                We're a team of passionate developers and designers dedicated to
                building innovative digital solutions. From web apps to
                AI-powered platforms, we turn your ideas into reality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
