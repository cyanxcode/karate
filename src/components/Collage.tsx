import CollageRow from "./CollageRow";

export default function Collage() {
  return (
    <main className="flex w-full h-full ">
      <div className="flex flex-col w-[40%] mt-20 ">
        <h2 className="text-5xl font-extrabold">
          Unbeatable <br />
          Fight Club
        </h2>
        <p className="my-3 text-lg">
          #1 Academy in meerut for self defence and martial arts training.
        </p>
      </div>
      <div className="flex flex-col gap-3 w-[60%] justify-center items-center">
        <CollageRow />
        <div className="ml-24">
          <CollageRow />
        </div>
        <CollageRow />
      </div>
    </main>
  );
}
