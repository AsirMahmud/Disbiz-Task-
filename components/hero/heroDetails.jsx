import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

import TypedText from "./typedText";

export default function HeroDetails() {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full h-screen bg-black lg:mt-[100px] lg:pt-0">
      <div className="flex flex-col items-center lg:items-start gap-4 justify-center h-full p-8 lg:p-0">
        <div className="text-center lg:text-left">
          <TypedText></TypedText>
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
      <div className="w-full lg:w-auto overflow-hidden   flex justify-center lg:mr-[100px] lg:mt-0 mt-40">
        <Image
          className="object-contain h-full lg:w-auto w-full"
          src="/hero.jpg"
          alt="Astronaut in space"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
