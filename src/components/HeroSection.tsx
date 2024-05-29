export default function HeroSection() {
  return (
    <>
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
          <div>
            <h1 className="block text-2xl font-bold text-gray-800 sm:text-3xl lg:text-5xl lg:leading-tight">
              Learn self-defence, Karate &{" "}
              <span className="text-blue-600">Mix Martial Arts</span>
            </h1>
            <p className="mt-3 text-lg text-gray-800">
              Check out Unbreakable Fight Club, offering classes in Karate, MMA,
              and practical self-defense techniques for all ages and experience
              levels.
            </p>

            <div className="mt-7 grid gap-3 w-full sm:inline-flex">
              <a
                className="py-3 px-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                href="#"
              >
                Call Us
              </a>
              <a
                className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none "
                href="#"
              >
                Find on Map
              </a>
            </div>
          </div>

          <div className="relative ms-4">
            <img
              className="w-full rounded-xl"
              src="/bg1.jpg"
              alt="Image Description"
            />
          </div>
        </div>
      </div>
    </>
  );
}
