"use client";

import Image from "next/image";
import React from "react";
import ImageCTA1 from "@/assets/svg/ImageCTA1.svg";
import ImageCTA2 from "@/assets/svg/ImageCTA2.svg";
import ImageCTA3 from "@/assets/svg/ImageCTA3.svg";
import ImageCTA4 from "@/assets/svg/ImageCTA4.svg";
import ImageCTA5 from "@/assets/svg/ImageCTA5.svg";

import ImageCTA1Res from "@/assets/svg/ImageCTA1Res.svg";
import ImageCTA2Res from "@/assets/svg/ImageCTA2Res.svg";
import ImageCTA3Res from "@/assets/svg/ImageCTA3Res.svg";
import ImageCTA4Res from "@/assets/svg/ImageCTA4Res.svg";
import ImageCTA5Res from "@/assets/svg/ImageCTA5Res.svg";

import { Text, TextVariant } from "@/components/text";
import { BtnVariants, Button } from "@/components/button";

export default function CTA() {
  return (
    <section className="mt-24 px-4 md:px-0">
      <div className="flex flex-col md:flex-row overflow-hidden">
        <div className="w-full h-338 md:h-400 md:w-4/6 flex flex-col items-center justify-center p-0 md:p-8">
          <Text
            variant={TextVariant.PrimaryLg}
            text="No long-term contracts. No catches."
            className="w-full"
          />
          <Text
            variant={TextVariant.GrayLg}
            text="Start your 30-day free trial today."
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
        <div className="w-full md:flex-col md:w-auto items-center gap-4 hidden md:flex">
          <div className="flex flex-col md:flex-row items-end gap-4">
            <Image src={ImageCTA1} alt="image cta" />
            <Image src={ImageCTA2} alt="image cta" className="w-full" />
          </div>
          <div className="flex flex-col md:flex-row items-start gap-4">
            <Image src={ImageCTA3} alt="image cta" />
            <Image src={ImageCTA4} alt="image cta" />
            <Image src={ImageCTA5} alt="image cta" />
          </div>
        </div>

        <div className="w-full flex-col md:w-auto items-center gap-4 flex md:hidden">
          <Image src={ImageCTA1Res} alt="image cta" className="w-full" />
          <Image src={ImageCTA2Res} alt="image cta" className="w-full" />
          <Image src={ImageCTA3Res} alt="image cta" className="w-full" />
          <Image src={ImageCTA4Res} alt="image cta" className="w-full" />
          <Image src={ImageCTA5Res} alt="image cta" className="w-full" />
        </div>
      </div>
    </section>
  );
}
