import Footer from "@/components/footer";
import Gallery from "@/components/gallery/gallery";
import Hero from "@/components/hero/hero";
import Services from "@/components/services/services";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <Hero></Hero>
      </div>
      <div className=" justify-center items-center flex-col text-white flex ">
        <ChevronDown className="text-primary w-14 h-14 cursor-pointer  transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg"></ChevronDown>
        <div>
          <p>"Design is the silent ambassador of your brand."</p>
          <p className="  italic">
            {" "}
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; - Paul Rand
          </p>
        </div>
      </div>
      <div className="lg:h-[200vh] lg:px-56 md:p-16 p-8">
        <Gallery></Gallery>
      </div>
      <div className=" lg:pl-56 lg:p-0 md:p-16 p-8 ">
        <Services></Services>
      </div>
    </div>
  );
}
