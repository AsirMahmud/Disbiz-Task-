import React from "react";

export default function ServiceHeroDetails() {
  return (
    <div className="flex lg:pt-0  lg:flex-row flex-col-reverse items-center justify-center gap-4 bg-black/20 h-full">
      <div className="text-white p-8 lg:w-[50%] text">
        <h2 className="mb-4 font-light lg:text-7xl text-4xl">Services</h2>
        <p className="text-lg lg:text-2xl mb-4 w-full">
          Every service we offer has one purpose: to turn total strangers into
          loyal customers. As a brand experience agency, we combine smart
          research and strategy with rich design and technology to help{" "}
          <span className="text-primary">grow your brand.</span>
        </p>
      </div>
      <div className="lg:w-[768px] w-[50%] h-[500px] lg:h-[768px]">
        <img
          className="object-contain h-full w-full"
          src="https://w0.peakpx.com/wallpaper/555/241/HD-wallpaper-astronaut-in-black-amoled-balc-galaxy-space.jpg"
          alt="Astronaut in space"
        />
      </div>
    </div>
  );
}
