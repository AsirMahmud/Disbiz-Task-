import React from "react";
import { Button } from "../ui/button";

export default function HeroDetails() {
  return (
    <div className="flex flex-col lg:items-start gap-4 bg-black/20 justify-center  h-full">
      <div className="text-center lg:text-start">
        <h1 className=" lg:text-[90px] lg:leading-[100px]  text-4xl   text-white">
          Ready to build <br /> a website?{" "}
        </h1>
      </div>
      <div className="flex gap-4 lg:gap-10 justify-center">
        <Button className="bg-black/0 lg:w-[192px] lg:h:[56px] bg-none border-2 hover:text-white border-primary text-primary rounded-none">
          SERVICES
        </Button>
        <Button className="rounded-none lg:w-[192px] lg:h:[56px]">
          HIRE US
        </Button>
      </div>
    </div>
  );
}
