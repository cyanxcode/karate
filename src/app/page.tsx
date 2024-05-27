import About from "@/components/About";
import Collage from "@/components/Collage";
import List from "@/components/List";
import Image from "next/image";

export default function Option() {
  return (
    <main>
      <div className="relative ml-[50%] w-[95%] translate-x-[-50%] aspect-video overflow-hidden max-h-[80vh]">
        <img
          src="/bg1.jpg"
          className="absolute object-cover w-full h-full rounded-2xl object-left-top"
          alt="bg"
        />
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-white w-[40%] absolute m-5 sm:m-10 md:m-15 lg:m-20">
          A black belt is just a white belt who never quits.
        </h3>
      </div>
      <section className="mt-16 md:mt-32 w-full">
        <About />
      </section>
      <List />
    </main>
  );
}
