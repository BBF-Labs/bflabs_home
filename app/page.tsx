import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import AIFeatures from "@/components/ai-features";
import Partners from "@/components/partners";
import DeveloperAPI from "@/components/developer-api";
import Team from "@/components/team";
import Contact from "@/components/contact";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <AIFeatures />
      <Partners />
      <DeveloperAPI />
      <Team />
      <Contact />
      <CTA />
      <Footer />
    </main>
  );
}
