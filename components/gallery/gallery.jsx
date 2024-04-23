import React from "react";
import { Button } from "../ui/button";

export default function Gallery() {
  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-2 gap-4 ">
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid col-span-2 overflow-hidden w-full">
          <img
            className="md:h-[400px] object-cover  w-full"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
            alt=""
          />
        </div>
      </div>

      {/* "colo" div spans across two columns */}

      <div className="flex justify-center">
        <Button className="rounded-none">VIEW OTHER WORK</Button>
      </div>
    </div>
  );
}
