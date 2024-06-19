import React from "react";
import { Button } from "../ui/button";

export default function Gallery() {
  const data1 = [
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
      alt: "",
      className: "w-full h-[40%] object-cover overflow-hidden",
    },
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
      alt: "",
      className: "w-full h-[25%] overflow-hidden",
    },
    {
      src: "https://www.factor.niehs.nih.gov/sites/niehs-factor/files/2019/1/papers/puberty/img859558.jpg",
      alt: "",
      className: "w-full h-[35%] overflow-hidden",
    },
  ];

  const data2 = [
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg",
      alt: "",
      className: "w-full h-[35%] object-cover overflow-hidden",
    },
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
      alt: "",
      className: "w-full h-[40%] overflow-hidden",
    },
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
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
        <div className="w-full lg:h-[30%] mt-4 overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
          ></img>
        </div>
      </div>

      {/* "colo" div spans across two columns */}

      <div className="flex justify-center">
        <Button className="rounded-none">VIEW OTHER WORK</Button>
      </div>
    </div>
  );
}
