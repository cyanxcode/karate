export default function () {
  return (
    <>
      <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl text-gray-800 uppercase font-bold flex items-center flex-col justify-center w-[full] my-10 sm:my-16 md:my-20 lg:my-32">
        <h3 className="flex items-center">
          <img
            src="/bg1.jpg"
            className="h-6 w-20 sm:h-8 md:h-10 lg:h-16 lg:w-40 rounded-[4rem] object-cover"
          />{" "}
          Learn self-defence,
        </h3>{" "}
        <h3 className="flex items-center">
          Karate
          <img
            src="/Karate.jpg"
            className="h-6 w-40 sm:h-8 md:h-10 lg:h-16 lg:w-96 rounded-[4rem] object-cover"
          />
          &
        </h3>
        <h3 className="flex items-center">
          Mix Martial Arts
          <img
            src="/Jiujutsu.jpg"
            className="h-6 w-32 sm:h-8 md:h-10 lg:h-16 lg:w-64  rounded-[4rem] object-cover"
          />{" "}
        </h3>
      </h1>
      <img
        src="Jiujutsu.jpg"
        className="w-[90%] sm:w-[75%] lg:w-[60%] aspect-video ml-[50%] translate-x-[-50%] rounded-xl"
      />
    </>
  );
}
