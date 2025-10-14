import { useRef } from "react";
import { Hero } from "@/components/Hero";
import { DemoSection } from "@/components/DemoSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  const demoRef = useRef<HTMLDivElement>(null);

  const scrollToDemo = () => {
    demoRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Hero onTryDemo={scrollToDemo} />
      <div ref={demoRef}>
        <DemoSection />
      </div>
      <FeaturesSection />
      <HowItWorksSection />
      <Footer />
    </div>
  );
}
