"use client";

import { Button } from "@/components/button";
import { HeadingType, Text, TextVariant } from "@/components/text";
import Image from "next/image";
import React from "react";
import Chart from "@/assets/svg/Chart.svg";
import ActiveUsers from "@/assets/svg/ActiveUsers.svg";

export default function Heading() {
  return (
    <div className="p-0 md:py-5 mx-auto flex flex-col items-center">
      <div className="bg-primary w-full h-554 md:h-674 md:rounded-3xl flex flex-col items-center justify-center p-3 md:p-32">
        <Text
          variant={TextVariant.LightLg}
          text="Grow your users."
          className="text-center"
        />
        <Text
          variant={TextVariant.AccentLg}
          text="Smarter."
          className="text-center"
        />
        <Text
          variant={TextVariant.AccentMd}
          className="pt-5 text-center"
          text="Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups."
        />
        <div className="w-full flex justify-center mt-5">
          <Button
            text="Get started"
            variant="Primary"
            className="w-full md:w-129 h-48"
            onClick={() => {}}
          />
        </div>

        <div className="pt-5 flex flex-col md:flex-row md:space-x-1">
          <Text
            variant={TextVariant.AccentSm}
            text="We care about your data in our"
            className="text-center md:text-left"
          />

          <Text
            variant={TextVariant.AccentSm}
            className="text-center md:text-left underline"
            text="privacy policy."
            headingType="a"
            href="#"
          />
        </div>
      </div>

      <div className="bg-white w-341 h-272 lg:w-800 lg:h-460 md:w-554 md:h-374 relative bottom-16 rounded-3xl flex flex-col items-center justify-center p-3 md:p-16 shadow-2xl">
        <Text
          variant={TextVariant.PrimaryXs}
          className="w-full md:text-left"
          text="Users over time"
          headingType={HeadingType.h2}
          href="#"
        />
        <Image className="w-full" src={Chart} alt="chart" />
        <Image className="absolute -bottom-20 -right-20 bg-white rounded-full" src={ActiveUsers} alt="ative users" />
      </div>
    </div>
  );
}
