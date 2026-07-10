import Image from "next/image";
import { Header } from "@/shared/header/Header";
import { Hero } from "@/modules/hero/Hero";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
    </div>
  );
}
