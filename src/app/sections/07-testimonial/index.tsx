"use client";

import Image from "next/image";
import React from "react";
import TestimonialImage from "@/assets/svg/Testimonials.svg";
import Stars from "@/assets/svg/Stars.svg";
import { HeadingType, Text, TextVariant } from "@/components/text";
import { BtnVariants, Button } from "@/components/button";

export default function Testimonials() {
  return (
    <section className="mt-24 px-4 md:px-0">
      <div className="rounded-3xl flex flex-col md:flex-row overflow-hidden">
        <Image
          src={TestimonialImage}
          alt="image cta"
          className="w-full h-full md:w-auto"
        />
        <div className="w-full h-448 md:h-448 md:w-5/6 flex flex-col justify-center px-6 py-10 md:p-14 bg-primary">
          <Image src={Stars} alt="image cta" />

          <Text
            variant={TextVariant.LightMd}
            text="Love the simplicity of the service and the prompt customer support. We can’t imagine working without it."
            className="w-full mt-6 text-2xl"
            headingType={HeadingType.h2}
          />

          <div className="w-full flex flex-col mt-8 md:space-x-3">
            <Text
              variant={TextVariant.LightSm}
              text="— Renee Wells"
              className="w-full"
            />
            <Text
              variant={TextVariant.AccentBase}
              text="Product Designer, Quotient"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
