import { Card } from "@/components/ui/card";

const technologies = [
  {
    name: "React",
    category: "Frontend",
    description: "Building dynamic user interfaces",
  },
  {
    name: "Node.js",
    category: "Backend",
    description: "Scalable server applications",
  },
  {
    name: "TypeScript",
    category: "Language",
    description: "Type-safe development",
  },
  { name: "Python", category: "Backend", description: "AI & data processing" },
  {
    name: "Next.js",
    category: "Framework",
    description: "Production-ready React apps",
  },
  {
    name: "MongoDB",
    category: "Database",
    description: "Flexible NoSQL storage",
  },
  {
    name: "Docker",
    category: "DevOps",
    description: "Container orchestration",
  },
  {
    name: "PostgreSQL",
    category: "Database",
    description: "Reliable SQL database",
  },
  { name: "GraphQL", category: "API", description: "Efficient data querying" },
  {
    name: "Tailwind CSS",
    category: "Styling",
    description: "Utility-first CSS framework",
  },
  {
    name: "Firebase",
    category: "Backend",
    description: "Real-time app development",
  },
];

export default function TechStack() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-4">
            <span className="bg-black text-white text-sm font-semibold px-4 py-2 rounded-full">
              OUR TECH STACK
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-black px-4">
            Technologies We Master
            <span className="block text-gray-600">At BF Labs</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Leveraging the best tools and frameworks to deliver exceptional
            digital experiences
          </p>
        </div>

        {/* Tech grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {technologies.map((tech, index) => (
            <Card
              key={index}
              className="group bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl border-2 border-gray-100 hover:border-black transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-center"
            >
              <div className="mb-3 sm:mb-4">
                <h3 className="text-lg sm:text-xl font-bold text-black mb-1">
                  {tech.name}
                </h3>
                <span className="text-xs font-semibold text-gray-500">
                  {tech.category}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {tech.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
