import { Card } from "@/components/ui/card";
import { Linkedin, Twitter, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    handle: "@sarahjohnson",
    memoji: "👩🏽‍💼",
    bio: "Visionary leader with 10+ years in digital product design. Led the transformation of 3 EdTech startups from concept to acquisition. Passionate about democratizing education through technology.",
    linkedin: "#",
    twitter: "#",
    email: "sarah@bfabs.com",
  },
  {
    name: "Michael Chen",
    role: "Lead Developer",
    handle: "@michaelchen",
    memoji: "👨🏻‍💻",
    bio: "Full-stack wizard specializing in React and Node.js. Built scalable systems serving 10M+ users. Former tech lead at Google, now building the future of learning platforms.",
    linkedin: "#",
    twitter: "#",
    email: "michael@bfabs.com",
  },
  {
    name: "Emily Rodriguez",
    role: "UI/UX Designer",
    handle: "@emilyrodriguez",
    memoji: "👩🏻‍🎨",
    bio: "Creative designer crafting beautiful user experiences. 8 years designing for Fortune 500 companies. Obsessed with pixel-perfect interfaces and delightful interactions.",
    linkedin: "#",
    twitter: "#",
    email: "emily@bfabs.com",
  },
  {
    name: "David Kim",
    role: "AI Engineer",
    handle: "@davidkim",
    memoji: "👨🏻‍🔬",
    bio: "Machine learning expert building intelligent solutions. PhD in AI from MIT. Previously at OpenAI working on education models. Making AI accessible for everyone.",
    linkedin: "#",
    twitter: "#",
    email: "david@bfabs.com",
  },
  {
    name: "Jessica Taylor",
    role: "Product Manager",
    handle: "@jessicataylor",
    memoji: "👩🏾‍💼",
    bio: "Bringing ideas to life with strategic product vision. 12 years shipping products that users love. Former PM at Spotify. Data-driven decision maker with a passion for education.",
    linkedin: "#",
    twitter: "#",
    email: "jessica@bfabs.com",
  },
];

export default function Team() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 bg-black text-white relative overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-purple-500" />
            <span className="text-sm font-medium text-purple-400 uppercase tracking-wider">
              Our Team
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-purple-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4">
            Meet the{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              Brilliant Minds
            </span>
            <span className="block mt-2 text-gray-400">Behind BetaForge</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-4">
            A diverse team of innovators, engineers, and designers committed to
            transforming enterprise learning
          </p>
        </div>

        {/* Team grid - Equal width cards like testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="group relative text-white p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 bg-[#0a0a0a] border border-white/10 hover:border-purple-500/50 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                {/* Avatar and name section */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-md opacity-0 group-hover:opacity-30 transition-opacity" />
                    <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center text-4xl border border-white/20">
                      {member.memoji}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold mb-0.5 truncate">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-1">
                      {member.handle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed mb-4">
                  {member.bio}
                </p>

                {/* Role badge */}
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4">
                  <span className="text-xs font-medium text-purple-400">
                    {member.role}
                  </span>
                </div>

                {/* Social links */}
                <div className="flex gap-2 pt-2 border-t border-white/5">
                  <a
                    href={member.linkedin}
                    className="w-8 h-8 bg-white/5 hover:bg-purple-500/20 border border-white/10 hover:border-purple-500/50 rounded-lg flex items-center justify-center transition-all"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-gray-400 hover:text-purple-400" />
                  </a>
                  <a
                    href={member.twitter}
                    className="w-8 h-8 bg-white/5 hover:bg-pink-500/20 border border-white/10 hover:border-pink-500/50 rounded-lg flex items-center justify-center transition-all"
                  >
                    <Twitter className="w-3.5 h-3.5 text-gray-400 hover:text-pink-400" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="w-8 h-8 bg-white/5 hover:bg-orange-500/20 border border-white/10 hover:border-orange-500/50 rounded-lg flex items-center justify-center transition-all"
                  >
                    <Mail className="w-3.5 h-3.5 text-gray-400 hover:text-orange-400" />
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
