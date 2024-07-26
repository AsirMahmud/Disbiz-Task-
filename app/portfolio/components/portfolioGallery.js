import { Button } from "@/components/ui/button";
import React from "react";

export default function PortfolioGallery() {
  const data1 = [
    {
      src: "/p1.jpg",
      alt: "",
      className: "w-full h-[40%] object-cover overflow-hidden",
    },
    {
      src: "Asset 4-100.jpg",
      alt: "",
      className: "w-full h-[25%] overflow-hidden",
    },
    {
      src: "Asset 5-100.jpg",
      alt: "",
      className: "w-full h-[35%] overflow-hidden",
    },
  ];

  const data2 = [
    {
      src: "p3.jpg",
      alt: "",
      className: "w-full h-[35%] object-cover overflow-hidden",
    },
    {
      src: "p4.jpg",
      alt: "",
      className: "w-full h-[40%] overflow-hidden",
    },
    {
      src: "p5.jpg",
      alt: "",
      className: "w-full h-[25%] overflow-hidden",
    },
    {
      src: "p6.jpg",
      alt: "",
      className: "w-full h-[25%] overflow-hidden",
    },
  ];
  return (
    <div className="flex flex-col lg:h-full gap-8">
      <div className="lg:h-full">
        <div className="flex gap-4  h-[70%] w-full">
          <div className="flex h-full flex-col w-full gap-4 overflow-hidden ">
            {data1.map((item) => (
              <div className={item.className} key={item.src}>
                <img
                  className="w-full h-full object-cover"
                  src={item.src}
                  alt={item.alt || "Image Description"}
                />
              </div>
            ))}
          </div>
          <div className="flex h-full flex-col w-full gap-4 overflow-hidden ">
            {data2.map((item) => (
              <div className={item.className} key={item.src}>
                <img
                  className="w-full h-full object-cover"
                  src={item.src}
                  alt={item.alt || "Image Description"}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* "colo" div spans across two columns */}

      <div className="flex justify-center">
        <Button className="rounded-none">VIEW OTHER WORK</Button>
      </div>
    </div>
  );
}
