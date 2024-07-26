import Drawer from "@/components/hero/drawer";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
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
      <div className="w-full z-50 flex justify-between items-center p-8">
        <Link href="/">
          <Logo className="ml-4" />
        </Link>
        <Drawer className="mr-4" />
      </div>
      <div className="w-full  text-white flex flex-col gap-16 p-8 lg:p-16">
        <h1 className="text-4xl lg:text-6xl">Contact Us</h1>
        <div className="flex flex-col-reverse lg:flex-row gap-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-y-16 lg:gap-x-16 lg:w-1/2">
            {formField.map((i) => (
              <div key={i.name} className="">
                <div className="w-full gap-4 flex flex-col max-w-sm">
                  <Label htmlFor={i.type} className="text-2xl">
                    {i.label}
                    <sup>*</sup>
                  </Label>
                  <input
                    type={i.type}
                    id={i.name}
                    placeholder={i.name}
                    className="capitalize bg-black text-white border-b-4 border-primary"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="w-full lg:w-1/2">
            <Image
              src="/contact.jpg"
              width={400}
              height={400}
              className="w-full -mt-36 h-auto object-cover"
              alt="Contact"
            />
          </div>
        </div>
        <div>
          <Button className="rounded-none">Contact Us</Button>
        </div>
      </div>
    </>
  );
}
