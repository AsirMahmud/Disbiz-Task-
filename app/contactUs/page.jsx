"use client";
import Drawer from "@/components/hero/drawer";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { useForm } from "react-hook-form";

export default function Page() {
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      toast({
        title: "Successfull",
        variant: "success",
      });

      const result = await response.json();
    } catch (error) {
      toast({
        title: "Uh oh! Something went wrong.",
        variant: "destructive",
        description: "Contact recorded successfully",
      });
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <div className="w-full z-50 flex justify-between items-center p-8">
        <Link href="/">
          <Logo className="ml-4" />
        </Link>
        <Drawer className="mr-4" />
      </div>
      <div className="w-full text-white flex flex-col gap-16 p-8 lg:p-16">
        <h1 className="text-4xl lg:text-6xl">Contact Us</h1>
        <div className="flex flex-col-reverse lg:flex-row gap-16">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-16  lg:gap-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-y-16 lg:gap-x-16 ">
              {[
                { label: "What is your name?", type: "text", name: "name" },
                { label: "Company Name", type: "text", name: "company" },
                { label: "Phone Number", type: "tel", name: "phone" },
                { label: "Email Address", type: "email", name: "email" },
                {
                  label: "What can we help you with?",
                  type: "textarea",
                  name: "helpRequest",
                },
              ].map((field) => (
                <div
                  key={field.name}
                  className="w-full gap-4 flex flex-col max-w-sm"
                >
                  <Label htmlFor={field.name} className="text-2xl">
                    {field.label}
                    <sup>*</sup>
                  </Label>
                  {field.type === "textarea" ? (
                    <textarea
                      id={field.name}
                      {...register(field.name, { required: true })}
                      placeholder={field.label}
                      className=" lowercase bg-black  border-b-4 border-primary"
                    />
                  ) : (
                    <Input
                      type={field.type}
                      id={field.name}
                      {...register(field.name, { required: true })}
                      placeholder={field.label}
                      className=" bg-black text-white border-b-4 border-primary"
                    />
                  )}
                  {errors[field.name] && (
                    <p className="text-red-500">This field is required</p>
                  )}
                </div>
              ))}
            </div>
            <div className="flex ">
              <Button type="submit" className="rounded-none">
                Contact Us
              </Button>
            </div>
          </form>
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
      </div>
    </>
  );
}
