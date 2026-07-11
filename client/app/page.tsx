import Hero from "@/modules/hero/Hero";
import { Header } from "@/shared/header/Header";
import { About } from "@/modules/About";
import { FeaturedReelsSection } from "@/modules/FeaturedReelsSection";
import { MotionGraphicsSection } from "@/modules/MotionGraphicsSection";
import { HowIWorkSection } from "@/modules/HowIWorkSection";
import { ContactSection } from "@/modules/ContactSection";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <FeaturedReelsSection />
      <MotionGraphicsSection />
      {/* <ToolsSection /> */}
      <HowIWorkSection />
      <ContactSection />
    </>
  );
}
