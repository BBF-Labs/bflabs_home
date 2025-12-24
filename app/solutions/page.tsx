import Navbar from "@/components/navbar";
import Services from "@/components/services";
import TechStack from "@/components/tech-stack";
import Footer from "@/components/footer";

export default function SolutionsPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-20 px-6 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
            <span className="text-sm font-medium text-white/70">Solutions</span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Custom Development
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              & Consulting
            </span>
          </h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto font-light">
            Expert technology services to bring your vision to life. From
            strategy to implementation, we build scalable solutions with modern
            technology.
          </p>
        </div>
      </section>

      <Services />
      <TechStack />
      <Footer />
    </main>
  );
}
