import React from "react";

import { ChevronDown } from "lucide-react";
import Logo from "@/components/logo";
import Drawer from "@/components/hero/drawer";
import HeroDetails from "@/components/hero/heroDetails";
import ServiceHeroDetails from "./serviceHeroDetails";

export default function ServiceHero() {
  return (
    <div
      className="lg:h-screen bg-cover bg-center  relative lg:p-8 "
      style={{}}
    >
      <div className="absolute top-0 left-0 w-full z-50 flex justify-between items-center p-8">
        <Logo className="ml-4" /> {/* Adjust margin as needed */}
        <Drawer className="mr-4" /> {/* Adjust margin as needed */}
      </div>
      <ServiceHeroDetails></ServiceHeroDetails>
      <div className="absolute lg:bottom-[10%] bottom-[30%] w-full   "></div>
    </div>
  );
}
