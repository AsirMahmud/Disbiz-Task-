import React from "react";
import { Button } from "../ui/button";
import Logo from "../logo";
import Link from "next/link";

export default function HeroDetails() {
  return (
    <div className="flex lg:pt-0  lg:flex-row flex-col-reverse items-center justify-between w-full gap-4 bg-black/20 h-full">
      <div className="flex flex-col lg:items-start gap-4 bg-black/20 justify-center  h-full">
        <div className="text-center lg:text-start">
          <h1 className=" lg:text-[90px] lg:leading-[100px]  text-4xl   text-white">
            Ready to build <br /> a website?{" "}
          </h1>
        </div>
        <div className="flex gap-4 lg:gap-10 justify-center">
          <Link href="/services">
            {" "}
            <Button className="bg-black/0 lg:w-[192px] lg:h:[56px] bg-none border-2 hover:text-white border-primary text-primary rounded-none">
              SERVICES
            </Button>
          </Link>
          <Link href="/contactUs">
            <Button className="rounded-none lg:w-[192px] lg:h:[56px]">
              HIRE US
            </Button>
          </Link>
        </div>
      </div>
      <div>
        <div className=" lg:h-auto h-[500px] lg:mr-[100px]">
          <img
            className="object-contain h-full w-full"
            src="https://w0.peakpx.com/wallpaper/555/241/HD-wallpaper-astronaut-in-black-amoled-balc-galaxy-space.jpg"
            alt="Astronaut in space"
          />
        </div>
      </div>
    </div>
  );
}
