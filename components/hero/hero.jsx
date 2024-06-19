import React from "react";

import { ChevronDown } from "lucide-react";
import Logo from "@/components/logo";
import Drawer from "@/components/hero/drawer";
import HeroDetails from "@/components/hero/heroDetails";

export default function ServiceHero() {
  return (
    <div className="h-screen bg-cover bg-center  relative lg:p-8 " style={{}}>
      <div className="absolute top-0 left-0 w-full z-50 flex justify-between items-center p-8">
        <Logo className="ml-4" /> {/* Adjust margin as needed */}
        <Drawer className="mr-4" /> {/* Adjust margin as needed */}
      </div>
      <div className="h-full flex items-center overflow-hidden">
        <HeroDetails></HeroDetails>
      </div>
    </div>
  );
}
