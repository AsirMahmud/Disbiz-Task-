import React from "react";
import ServiceHero from "./components/serviceHero";
import { Button } from "@/components/ui/button";
import { Dot } from "lucide-react";
import Image from "next/image";

export default function page() {
  const data = [
    {
      header: "Branding & Design",
      details:
        "We are firm believers that when your brand shifts from an inawrd focus to finding deep connections with your audience, that's where the magic happens. Our approach to brand strategy focuses on diving deep into your audience’s daily lives, values, pains, gains, and behaviours to uncover golden opportunities for genuine brand connection.       ",
      listItems: [
        "    Bran,d Strategy",
        "    Logo Design",
        "    Animating Logo",
        "    Brand Naming",
        "    Brand Messaging + Positioning",
        "    Visual Identity",
        "    Brand Asset Development",
        "    Brand Packaging + Materials",
      ],
      images: ["logo1", "logo2", "logo3", "logo4"],
    },
    {
      header: "Web Design & Development",
      details:
        "We like to say we’re a marketing agency that prefers to get our hands dirty. That means we approach every website through the lens of how it will impact and drive your marketing goals. It should be, after all, your  hardest working and most successful sales representative. ",
      listItems: [
        "    Digital Strategy",
        "    UX + UI Design",
        "    Content Development",
        "    Rapid Prototyping",
        "    Web Development",
        "    Quality Assurance",
        "    Ongoing Optimization",
        "    Maintenance + Hosting",
      ],
      images: ["dev1", "dev2", "dev3", "dev4"],
    },
    {
      header: "Marketing & Content",
      details:
        "Every brand has a story to tell. We’re here to make sure that story spreads as far and wide as possible. By focusing on using the right tool for the right audience, Loomo has produced dozens of award-winning advertising and marketing campaigns for brands across North America. Go ahead, give us your wildest idea and we’ll make it a reality. ",
      listItems: [
        "    Strategy + Planning",
        "    Branded Digital",
        "    Social Media Engagement",
        "    Video + Media Production",
        "    Digital Advertising ",
        "    Integrated Campaigns",
        "    Reporting + Optimization",
      ],
      images: ["m1", "m2", "m3", "m4"],
    },
  ];
  return (
    <>
      <div className="">
        <ServiceHero></ServiceHero>
      </div>
      <div className="lg:p-32 p-4 flex flex-col gap-32 text-white">
        {data.map((i) => (
          <div
            key={i.header}
            className="flex lg:flex-row flex-col gap-16 lg:gap-32 justify-between"
          >
            <div key={i.header} className="flex lg:w-[50%] flex-col gap-4">
              <h1 className="text-2xl">{i.header}</h1>
              <p className="text-lg">{i.details}</p>
              <ul className="flex gap-2 flex-col ">
                {i.listItems.map((j) => (
                  <li className="flex items-center gap-4" key={i.header}>
                    <Dot></Dot>
                    {j}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-[50%] flex  w-full gap-2">
              <div className="w-full flex flex-col gap-8">
                <div className="lg:w-[200px] rounded xl border-2 border h-[200px] overflow-hidden">
                  <img
                    src={"./" + i.images[0] + ".jpg"}
                    className="w-full h-full object-cover"
                  ></img>
                </div>
                <div className="lg:w-[200px] rounded xl border-2 border h-[200px] overflow-hidden">
                  <img
                    src={"./" + i.images[1] + ".jpg"}
                    className="w-full h-full object-cover"
                  ></img>
                </div>
              </div>
              <div className="w-full flex flex-col lg:-m-10  gap-8">
                <div className="lg:w-[200px] rounded xl border-2 border h-[200px] overflow-hidden">
                  <img
                    src={"./" + i.images[2] + ".jpg"}
                    className="w-full h-full object-cover"
                  ></img>
                </div>
                <div className="lg:w-[200px] rounded xl border-2 border h-[200px] overflow-hidden">
                  <img
                    src={"./" + i.images[3] + ".jpg"}
                    className="w-full h-full object-cover"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center bg-primary  p-2">
        <Button className="border border-white rounded-none  hover:animate-out">
          READY TO LAUNCH? GET IN TOUCH NOW
        </Button>
      </div>
    </>
  );
}
