import Drawer from "@/components/hero/drawer";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

import React from "react";

export default function page() {
  const formField = [
    {
      label: "What is your name?",
      type: "text",
      required: true,
      name: "fullName",
    },
    {
      label: "Company Name",
      type: "text",
      required: true,
      name: "companyName",
    },
    {
      label: "Phone Number",
      type: "tel",
      required: true,
      name: "phoneNumber",
    },
    {
      label: "Email Address",
      type: "email",
      required: true,
      name: "emailAddress",
    },
    {
      label: "What can we help you with?",
      type: "textarea",
      required: true,
      name: "helpRequest",
    },
  ];

  return (
    <>
      <div className=" w-full z-50 flex justify-between items-center p-8">
        <Link href="/">
          {" "}
          <Logo className="ml-4" />
        </Link>{" "}
        {/* Adjust margin as needed */}
        <Drawer className="mr-4" /> {/* Adjust margin as needed */}
      </div>
      <div className="w-full text-white flex flex-col gap-8 p-16">
        <h1 className="lg:text-6xl text-4xl">Contact Us</h1>
        <div className="grid grid-cols-2 lg:w-1/2 gap-y-8 gap-x-8 ">
          {formField.map((i) => (
            <div key={i.name} className="">
              <div className=" w-full gap-4 flex flex-col max-w-sm  ">
                <Label htmlFor={i.type} className="text-2xl">
                  {i.label}
                  <sup>*</sup>
                </Label>
                <input
                  type={i.type}
                  id={i.name}
                  placeholder={i.name}
                  className="capitalize  bg-black text-white  border-b-4 border-primary"
                />
              </div>
            </div>
          ))}
        </div>
        <div>
          <Button className="rounded-none">Contact Us</Button>
        </div>
      </div>
    </>
  );
}
