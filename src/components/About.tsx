export default function About() {
  return (
    <section className="flex w-full h-full items-center ml-20">
      <img src="/Throw.png" alt="" />
      <div className="">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold">
          About Us
        </h2>
        <p className="text-sm sm:text-md md:text-xl my-10 w-[80%] max-w-[1000px]">
          We provide training in <b>Karate and Mix Martial Arts</b> teaching
          both beginners and experts. Karate emphasizes discipline and respect
          alongside physical techniques. Training includes developing focus,
          breath control and mental strength.
        </p>
      </div>
    </section>
  );
}
