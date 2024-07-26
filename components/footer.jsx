import React from "react";
import Logo from "./logo";
import Logo2 from "./logo2";

export default function Footer() {
  return (
    <footer className="mx-auto flex w-full mt-4 bg-[url('/footer.svg')] bg-no-repeat lg:justify-center  ">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="w-full">
          <div className="w-full flex">
            <div>
              <Logo2></Logo2>

              <div className="mt-4 w flex w-full flex-col lg:flex-row justify-evenly text-white">
                <p className="max-w-sm">
                  Disbiz is a full-service branding and creative agency
                  specializing in brand development, graphic design, packaging
                  design, web development and marketing strategy.
                </p>
                <div className="w-full justify-between lg:-mt-32 mt-4   lg:ml-16 flex-col lg:flex-row gap-16 text-white flex ">
                  <div className=" absolute">
                    <img></img>
                  </div>
                  <div className="w-full flex flex-col gap-4">
                    <h1 className="text-lg">GET TO KNOW US</h1>
                    <ul className="flex  flex-col gap-4">
                      <li>
                        <a href="#our-work">Our Work</a>
                      </li>
                      <li>
                        <a href="#branding-design">Branding & Design</a>
                      </li>
                      <li>
                        <a href="#website-development">Website Development</a>
                      </li>
                      <li>
                        <a href="#packaging-marketing">Packaging & Marketing</a>
                      </li>
                    </ul>
                  </div>

                  <div className="flex  flex-col gap-4">
                    <h2 className="text-lg">CONTACT US</h2>
                    <p>
                      Email:{" "}
                      <a href="mailto:abcxyz@gmail.com">abcxyz@gmail.com</a>
                    </p>
                    <p>
                      Phone: <a href="tel:+8801759538261">01759538261</a>
                    </p>
                    <p>Address: Banasree, Dhaka - 1219, Bangladesh</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-xs text-white">
          &copy; 2022. Company Name. Created By Asir Mahmud.
        </p>
      </div>
    </footer>
  );
}
