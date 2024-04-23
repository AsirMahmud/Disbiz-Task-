import { Dot } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import Footer from "../footer";

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
                <li key={i} className="flex font-bold">
                  <Dot></Dot>
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-[60%] bg-primary flex flex-col gap-4  text-white lg:p-8 p-8 lg:pr-56">
            <p>
              Disbiz is your trusted partner in the ever-evolving marketing
              landscape. Our team of seasoned professionals brings a wealth of
              experience and a passion for helping businesses flourish. We go
              beyond cookie-cutter solutions, crafting tailored marketing
              strategies designed to propel your brand forward. From meticulous
              audience analysis to captivating content creation, we ensure every
              touchpoint resonates with your target market. Disbiz doesn't just
              execute campaigns; we become an extension of your team,
              collaborating closely to understand your unique goals and
              challenges.
            </p>
            <p>
              Our comprehensive suite of services encompasses everything you
              need to succeed in today's dynamic market. We'll elevate your
              brand awareness through strategic social media management and
              targeted advertising campaigns. Our skilled content creators craft
              compelling narratives that engage your audience and drive
              qualified leads. Disbiz leverages the power of search engine
              optimization (SEO) to ensure your brand is easily discoverable by
              potential customers. Through meticulous data analysis, we measure
              the effectiveness of each initiative, constantly refining your
              strategy to maximize return on investment (ROI).
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
              dicta, aspernatur temporibus incidunt animi, id quibusdam nulla,
              labore qui nam eveniet. Possimus placeat iste incidunt consectetur
              hic, animi corrupti, adipisci perferendis aut saepe aspernatur et
              praesentium est ut eligendi. Harum, illo totam! Corporis
              doloremque quaerat amet. Tempora praesentium quam, quasi ratione
              nulla eligendi pariatur nobis ipsam voluptatem perspiciatis rem
              dolores vitae eaque incidunt aut mollitia amet dolorum hic commodi
              voluptatum quia enim! Voluptate reiciendis minus magnam pariatur
              fugit ipsum quas! Tempora adipisci a eveniet molestiae rerum iusto
              ad saepe quam recusandae dignissimos quia accusantium suscipit
              ipsum, excepturi nulla necessitatibus expedita.
            </p>

            <div className="">
              {" "}
              <Button className="rounded-none mt-8 hover:bg-black/40 bg-black text-primary">
                View More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
