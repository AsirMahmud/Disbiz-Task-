import React from "react";
import PortfolioHero from "./components/portfolioHero";
import { Button } from "@/components/ui/button";
import Gallery from "@/components/gallery/gallery";
import { Star, StarIcon } from "lucide-react";
import { StarFilledIcon } from "@radix-ui/react-icons";
import PortfolioGallery from "./components/portfolioGallery";
const data = [
  {
    name: "John Smith",
    title: "CEO at Tech Inno",
    testimonial:
      "I have been working alongside John for over a year now and I can say without a doubt that he is one of the most professional and driven CEOs I have ever worked with. He always puts his company first and is an inspiration to everyone looking to grow in this industry.",
  },
  {
    name: "Emily Johnson",
    title: "Marketing Manager",
    testimonial:
      "Working on projects with Emily has been a breath of fresh air. She understands her role well and knows how to push projects forward for the best outcome. Her customer support is efficient, often going above and beyond to ensure that our marketing efforts are successful. She is quick to resolve any issues we face and offers solutions that are effective and easy to implement.",
  },
  {
    name: "Michael Brown",
    title: "IT Specialist",
    testimonial:
      "What sets this domain management service apart is its robust security features and intuitive dashboard. As someone who handles IT for a large corporation, I need to ensure that our domains are secure and easily manageable. This service exceeds my expectations in every aspect. It's reliable, efficient, and well worth the investment.pen_spark.",
  },
];

export default function page() {
  return (
    <div className="w-full flex flex-col gap-8">
      <PortfolioHero></PortfolioHero>
      <div className=" max-w-[1426px] flex flex-col gap-8 lg:gap-16 mx-auto w-full h-full">
        <Button className="rounded-none w-full p-4  lg:text-3xl text-xl">
          Some of our work
        </Button>
        <PortfolioGallery></PortfolioGallery>
      </div>
      {/* <div className="w-full flex lg:p-8 p-4 lg:flex-row flex-col bg-gradient-to-r from-primary to-black">
        <h1 className="lg:w-[40%] text-wrap  lg:text-6xl text-2xl text-white">
          What Our &nbsp; Review Says
        </h1>
        <div className="flex lg:flex-row flex-col  flex-1 gap-4">
          {data.map((i) => (
            <div
              key={i}
              className="w-full flex flex-col gap-4 p-4 bg-white rounded-2xl  h-full "
            >
              <div key={i} className="flex">
                {Array(5)
                  .fill()
                  .map((i) => (
                    <StarFilledIcon className=" w-8 h-8  font-bold text-yellow-300"></StarFilledIcon>
                  ))}
              </div>
              <div className="flex flex-col gap-1 flex-1">
                <p className="flex-1 h-full  text-xs font-extralight">
                  " {i.testimonial} "
                </p>
                <h1 className="text-2xl text-primary">{i.name}</h1>
                <h2 className="text-lg text-primary">{i.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
}
