import Details from "@/components/Details";
import Features from "@/components/Features";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function Option() {
  return (
    <main className="bg-gradient-to-b from-cyan-300 via-white via-40% to-blue-400">
      <Header />
      <section className="py-10 ">
        <HeroSection />
      </section>
      <section className="py-10">
        <Features />
      </section>
      <section className="py-10">
        <Details />
      </section>
    </main>
  );
}
