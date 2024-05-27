import Image from "next/image";
import { RiMenu2Fill } from "react-icons/ri";
export default function Header() {
  return (
    <nav className="w-full h-20 flex justify-between items-center px-10">
      <div className="text-xl font-extrabold flex">
        {" "}
        <RiMenu2Fill size={25} className="mt-1 mr-16" />
        <Image
          src="/UFC.jpg"
          width={30}
          height={5}
          alt="UFC"
          className="mr-4"
        />
        Unbeatable Fight Club
      </div>
      <div className="flex gap-6 collapse md:visible">
        <li className=" text-md  font-medium list-none">Pricing</li>
        <li className=" text-md  font-medium list-none">About</li>
        <li className=" text-md  font-medium list-none">Contact</li>
      </div>
    </nav>
  );
}
