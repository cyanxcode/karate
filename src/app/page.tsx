import Details from "@/components/Details";
import Features from "@/components/Features";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function Option() {
  return (
    <main className="bg-gradient-to-b from-teal-200 via-white via-36% to-teal-100">
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
