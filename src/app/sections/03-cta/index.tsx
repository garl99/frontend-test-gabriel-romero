"use client";

import Image from "next/image";
import React from "react";
import ImageCTA from "@/assets/svg/ImageCTA.svg";
import { HeadingType, Text, TextVariant } from "@/components/text";
import { BtnVariants, Button } from "@/components/button";

export default function CTA() {
  return (
    <section className="mt-24 px-4 md:px-0">
      <div className="rounded-3xl flex flex-col md:flex-row overflow-hidden">
        <div className="w-full h-338 md:h-400 md:w-4/6 flex flex-col items-center justify-center p-6 md:p-16 bg-primary">
          <Text
            variant={TextVariant.LightMd}
            text="Give us a shot"
            className="w-full"
            headingType={HeadingType.h2}
          />
          <Text
            variant={TextVariant.AccentMd}
            text="Join over 4,000+ startups already growing with Untitled."
            className="w-full mt-5"
          />
          <div className="w-full flex flex-col md:flex-row mt-12 md:space-x-3">
            <Button
              variant={BtnVariants.Outline}
              text="Learn more"
              className="w-full md:w-129"
              onClick={() => {}}
            />
            <Button
              variant={BtnVariants.Primary}
              text="Get started"
              className="w-full mt-3 md:mt-0 md:w-129"
              onClick={() => {}}
            />
          </div>
        </div>
        <Image src={ImageCTA} alt="image cta" className="w-full md:w-auto" />
      </div>
    </section>
  );
}
