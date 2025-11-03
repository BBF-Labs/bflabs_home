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
  // {
  //   name: "Alex Morgan",
  //   role: "DevOps Engineer",
  //   memoji: "👨🏽‍💻",
  //   bio: "Infrastructure expert ensuring scalable deployments",
  //   linkedin: "#",
  //   twitter: "#",
  //   email: "alex@bfabs.com",
  // },
];

export default function Team() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 bg-[#1a1a1a] text-white relative overflow-hidden">
      {/* Background patterns - circuit lines left */}
      <div className="absolute left-0 top-0 w-64 sm:w-96 h-full opacity-5">
        <svg className="w-full h-full" viewBox="0 0 400 800">
          <path
            d="M 50 100 L 150 100 L 150 200 L 250 200"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="50" cy="100" r="4" fill="white" />
          <circle cx="150" cy="100" r="4" fill="white" />
          <circle cx="150" cy="200" r="4" fill="white" />
          <circle cx="250" cy="200" r="4" fill="white" />
          <path
            d="M 50 300 L 100 300 L 100 400 L 200 400"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="50" cy="300" r="4" fill="white" />
          <circle cx="100" cy="300" r="4" fill="white" />
          <circle cx="100" cy="400" r="4" fill="white" />
          <circle cx="200" cy="400" r="4" fill="white" />
        </svg>
      </div>

      {/* Background patterns - tech symbols right */}
      <div className="absolute right-0 top-0 w-64 sm:w-96 h-full opacity-5">
        <svg className="w-full h-full" viewBox="0 0 400 800">
          <text
            x="300"
            y="100"
            fontFamily="monospace"
            fontSize="40"
            fill="white"
            opacity="0.5"
          >
            {"{ }"}
          </text>
          <text
            x="280"
            y="250"
            fontFamily="monospace"
            fontSize="40"
            fill="white"
            opacity="0.5"
          >
            {"</>"}
          </text>
          <path
            d="M 280 350 L 320 390 L 280 430"
            stroke="white"
            strokeWidth="3"
            fill="none"
          />
          <path
            d="M 340 350 L 300 390 L 340 430"
            stroke="white"
            strokeWidth="3"
            fill="none"
          />
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
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="group text-white p-4 sm:p-6 rounded-xl sm:rounded-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-transparent border-0"
            >
              {/* Memoji Avatar */}
              <div className="mb-6 flex justify-center">
                <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full flex items-center justify-center text-7xl sm:text-8xl group-hover:scale-110 transition-transform">
                  {member.memoji}
                </div>
              </div>

              {/* Member Info */}
              <div className="text-center mb-4">
                <h3 className="text-lg sm:text-xl font-bold mb-1">
                  {member.name}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-gray-400 mb-2">
                  {member.role}
                </p>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {member.bio}
                </p>
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-2 pt-3">
                <a
                  href={member.linkedin}
                  className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors group/icon"
                >
                  <Linkedin className="w-4 h-4 text-white group-hover/icon:scale-110 transition-transform" />
                </a>
                <a
                  href={member.twitter}
                  className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors group/icon"
                >
                  <Twitter className="w-4 h-4 text-white group-hover/icon:scale-110 transition-transform" />
                </a>
                <a
                  href={`mailto:${member.email}`}
                  className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors group/icon"
                >
                  <Mail className="w-4 h-4 text-white group-hover/icon:scale-110 transition-transform" />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
