import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
const btn = ["Our Work", "Services", "Contact"];
export default function Drawer() {
  return (
    <Sheet className="">
      <SheetTrigger>
        <Menu className=" h-9  w-9   text-primary"></Menu>
      </SheetTrigger>
      <SheetContent side="left" className=" flex flex-col gap-8 bg-primary">
        <div className="w-[70%]">
          <img src="https://utfs.io/f/2f079d5d-4ba3-4f9b-afda-b65134963660-xxqnqc.jpg"></img>
        </div>
        <div className="flex flex-col lg:text-3xl text-2xl gap-4 ">
          {btn.map((i) => (
            <Link
              key={i}
              href={
                i === "Services"
                  ? "/services"
                  : i === "Contact"
                  ? "/contactUs"
                  : i === "Our Work"
                  ? "/portfolio"
                  : "/"
              }
            >
              {" "}
              <div
                key={i}
                className="text-slate-200 hover:bg-white hover:text-black cursor-pointer text-center w-[50%] "
              >
                {i}
              </div>
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
