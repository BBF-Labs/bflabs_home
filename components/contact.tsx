import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-black">
              Want to bring a project to life?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8 sm:mb-12">
              Whether you're starting something new or need help improving an
              existing project, I'd love to collaborate. Let's build something
              impactful together.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-500 mb-1">
                    Email
                  </div>
                  <div className="text-lg font-semibold text-black">
                    fazeel@gmail.com
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-500 mb-1">
                    Phone
                  </div>
                  <div className="text-lg font-semibold text-black">
                    123-456-7890
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-500 mb-1">
                    Location
                  </div>
                  <div className="text-lg font-semibold text-black">
                    Greater Accra, Accra, Ghana
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 sm:mt-12">
              <p className="text-2xl sm:text-3xl font-bold text-black mb-2">
                Text us,
              </p>
              <p className="text-2xl sm:text-3xl font-bold text-black">
                Let's get to work.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl border-2 border-gray-100 shadow-xl">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  Full Name*
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-black focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  Email*
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-black focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  Message*
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-black focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <Button className="w-full bg-black text-white hover:bg-gray-800 px-8 py-6 text-lg rounded-full font-semibold">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
