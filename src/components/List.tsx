export default function List() {
  return (
    <div className=" my-32">
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-center my-20">
        Featured Sports
      </h2>
      <div className="flex gap-10 ml-32">
        <div className="">
          <img
            src="/Karate.jpg"
            alt=""
            className="object-fit w-96 rounded-2xl aspect-video "
          />
          <h4 className="text-lg font-bold ml-4 mt-3">Karate</h4>
        </div>
        <div className="">
          <img
            src="/MMA.jpg"
            alt=""
            className="object-fit w-96 rounded-2xl aspect-video "
          />
          <h4 className="text-lg font-bold ml-4 mt-3">Mixed Martial Arts</h4>
        </div>
        <div className="">
          <img
            src="/Jiujutsu.jpg"
            alt=""
            className="object-fit w-96 rounded-2xl aspect-video "
          />
          <h4 className="text-lg font-bold ml-4 mt-3">Jiujutsu</h4>
        </div>
      </div>
    </div>
  );
}
