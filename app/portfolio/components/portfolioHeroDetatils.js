import Image from "next/image";
import React from "react";

export default function PorfolioHeroDetails() {
  return (
    <div className="flex lg:pt-0  lg:flex-row flex-col-reverse items-center justify-center gap-4 bg-black/20 h-full">
      <div className="text-white p-8 lg:w-[50%] text">
        <h2 className="mb-4 font-light lg:text-7xl text-4xl text-primary">
          Portfolio
        </h2>
        <p className="text-lg lg:text-2xl mb-4 w-full">
          We’re different. We don’t take on clients according to how many
          invoices we can send every month. Before we accept a penny of your
          budget, we meet face-to-face to make sure your needs and our skills
          make for a good fit.
        </p>
      </div>
      <div className="w-full lg:w-auto overflow-hidden   flex justify-center lg:mr-[100px] lg:mt-0 mt-40">
        <Image
          className="object-contain transform  scale-x-[-1] h-full lg:w-auto w-full"
          src="/portfolio.jpg"
          alt="Astronaut in space"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
