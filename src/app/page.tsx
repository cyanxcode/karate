import Details from "@/components/Details";
import Features from "@/components/Features";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HeroSection2 from "@/components/HeroSection2";
import Image from "next/image";

export default function Option() {
  return (
    <main>
      <section className="">
        <HeroSection2 />
      </section>
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
