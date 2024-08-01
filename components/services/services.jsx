import { Dot } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import Footer from "../footer";
import Link from "next/link";

export default function Services() {
  const services = [
    "Brand Identity",
    "Web Design & Development",
    "Marketing Strategy",
    "Digital Advertising",
    "Print Advertising",
    "Outdoor Advertising",
    "Social Media Marketing",
    "Photography",
    "Packaging Design",
    "Apparel & Merchandise",
    "Pormotional Items",
    "Event Promotion",
    "Illustration",
  ];
  return (
    <div>
      <div className="">
        <div className="flex md:flex-row flex-col gap-4  h-full">
          <div className="md:w-[40%] flex flex-col gap-8 h-full ">
            <h1 className="lg:text-6xl text-4xl text-white font-bold ">
              Services
            </h1>
            <ul className="text-white flex lg:text-2xl flex-col font-bold gap-4">
              {services.map((i) => (
                <Link href="/services" key={i} className="flex font-bold">
                  <Dot></Dot>
                  {i}
                </Link>
              ))}
            </ul>
          </div>
          <div className="md:w-[60%] bg-primary flex flex-col gap-4  text-white lg:p-8 p-8 lg:pr-96 text-lg lg:text-2xl justify-center">
            <p>
              Disbiz is a full-service marketing agency addicted to building
              powerful brands. We wake up every day (and occasionally in the
              middle of the night) finding ways to turn potential customers into
              lifelong advocates for your business.
            </p>

            <p>
              When we talk about design, we’re talking about more than brand
              identity and advertising. For us, design is an ethic a commitment
              to clarity in the strategies we recommend, precision in marketing
              campaigns we execute, and transparency in the return on
              investment. Of course we believe in aesthetics, but our work
              always, always aims to connect people to value.
            </p>

            <p>
              Check out our list of services for more details on the skills,
              tools, and expertise we can offer to your business.
            </p>

            <div className="">
              {" "}
              <Link href="/services">
                <Button className="rounded-none mt-8 hover:bg-black/40 bg-black text-primary">
                  View More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
