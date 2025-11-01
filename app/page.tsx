import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Features from "@/components/features";
import FeatureShowcase from "@/components/feature-showcase";
import TechStack from "@/components/tech-stack";
import Team from "@/components/team";
import Contact from "@/components/contact";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      {/* <Features /> */}
      <FeatureShowcase />
      <TechStack />
      <Team />
      {/* <Contact /> */}
      <CTA />
      <Footer />
    </main>
  );
}
