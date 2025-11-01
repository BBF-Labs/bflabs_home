import { Card } from "@/components/ui/card";
import { Linkedin, Twitter, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    memoji: "👩🏽‍💼",
    bio: "Visionary leader with 10+ years in digital product design",
    linkedin: "#",
    twitter: "#",
    email: "sarah@bfabs.com",
  },
  {
    name: "Michael Chen",
    role: "Lead Developer",
    memoji: "👨🏻‍💻",
    bio: "Full-stack wizard specializing in React and Node.js",
    linkedin: "#",
    twitter: "#",
    email: "michael@bfabs.com",
  },
  {
    name: "Emily Rodriguez",
    role: "UI/UX Designer",
    memoji: "👩🏻‍🎨",
    bio: "Creative designer crafting beautiful user experiences",
    linkedin: "#",
    twitter: "#",
    email: "emily@bfabs.com",
  },
  {
    name: "David Kim",
    role: "AI Engineer",
    memoji: "👨🏻‍🔬",
    bio: "Machine learning expert building intelligent solutions",
    linkedin: "#",
    twitter: "#",
    email: "david@bfabs.com",
  },
  {
    name: "Jessica Taylor",
    role: "Product Manager",
    memoji: "👩🏾‍💼",
    bio: "Bringing ideas to life with strategic product vision",
    linkedin: "#",
    twitter: "#",
    email: "jessica@bfabs.com",
  },
  {
    name: "Alex Morgan",
    role: "DevOps Engineer",
    memoji: "👨🏽‍💻",
    bio: "Infrastructure expert ensuring scalable deployments",
    linkedin: "#",
    twitter: "#",
    email: "alex@bfabs.com",
  },
];

export default function Team() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 bg-black text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <pattern
            id="teamDots"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="20" cy="20" r="2" fill="white" />
          </pattern>
          <rect x="0" y="0" width="1200" height="800" fill="url(#teamDots)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-4">
            <span className="bg-white text-black text-sm font-semibold px-4 py-2 rounded-full">
              OUR TEAM
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4">
            Meet the Team
            <span className="block text-gray-400">Behind BetaForge</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto px-4">
            A diverse group of talented individuals passionate about creating
            exceptional digital experiences
          </p>
        </div>

        {/* Team grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="group bg-white/5 backdrop-blur-sm text-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl border-2 border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Memoji Avatar */}
              <div className="mb-6 flex justify-center">
                <div className="w-24 h-24 sm:w-28 sm:h-28 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-5xl sm:text-6xl group-hover:scale-110 transition-transform shadow-lg border-2 border-white/20">
                  {member.memoji}
                </div>
              </div>

              {/* Member Info */}
              <div className="text-center mb-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">
                  {member.name}
                </h3>
                <p className="text-sm font-semibold text-gray-400 mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {member.bio}
                </p>
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-3 pt-4 border-t border-white/10">
                <a
                  href={member.linkedin}
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors group/icon border border-white/20"
                >
                  <Linkedin className="w-5 h-5 text-white group-hover/icon:scale-110 transition-transform" />
                </a>
                <a
                  href={member.twitter}
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors group/icon border border-white/20"
                >
                  <Twitter className="w-5 h-5 text-white group-hover/icon:scale-110 transition-transform" />
                </a>
                <a
                  href={`mailto:${member.email}`}
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors group/icon border border-white/20"
                >
                  <Mail className="w-5 h-5 text-white group-hover/icon:scale-110 transition-transform" />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
