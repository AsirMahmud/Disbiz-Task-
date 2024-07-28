"use client";
import React from "react";
import { ReactTyped } from "react-typed";
export default function TypedText() {
  return (
    <div>
      {" "}
      <h1 className="text-4xl lg:text-[90px] lg:leading-[100px] text-white">
        Ready to Build <br />
        <ReactTyped
          strings={["a Website", "a packaging"]}
          typeSpeed={200}
          backSpeed={100}
          startDelay={300}
          backDelay={250}
          loop
        ></ReactTyped>
      </h1>
    </div>
  );
}
