import React from "react";
import Logo from "../logo";
import Drawer from "./drawer";
import HeroDetails from "./heroDetails";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <div
      className="h-screen bg-cover bg-center  relative lg:p-8 "
      style={{
        backgroundImage: "url('https://wallpapercave.com/wp/wp7158761.jpg')",
      }}
    >
      <div className="absolute top-0 left-0 w-full z-50 flex justify-between items-center p-8">
        <Logo className="ml-4" /> {/* Adjust margin as needed */}
        <Drawer className="mr-4" /> {/* Adjust margin as needed */}
      </div>
      <HeroDetails></HeroDetails>
      <div className="absolute lg:bottom-[10%] bottom-[30%] w-full   "></div>
    </div>
  );
}
