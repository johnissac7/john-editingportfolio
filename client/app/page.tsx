import Hero from "@/modules/hero/Hero";
import { Header } from "@/shared/header/Header";
import { About } from "@/modules/About";
import { FeaturedReelsSection } from "@/modules/FeaturedReelsSection";
import { MotionGraphicsSection } from "@/modules/MotionGraphicsSection";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <FeaturedReelsSection />
      <MotionGraphicsSection />
    </>
  );
}
