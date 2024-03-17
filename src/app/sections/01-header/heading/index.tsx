"use client";

import { Button } from "@/components/button";
import { HeadingType, Text, TextVariant } from "@/components/text";
import Image from "next/image";
import React from "react";
import Chart from "@/assets/svg/Chart.svg";
import ActiveUsers from "@/assets/svg/ActiveUsers.svg";
import { Input } from "@/components/input";
import IconInput from "@/assets/svg/IconInput.svg";

export default function Heading() {
  return (
    <div className="w-full relative p-0 md:py-5 mx-auto flex flex-col items-center">
      <div className="bg-primary h-554 md:h-674 md:rounded-3xl flex flex-col items-center justify-center p-3 md:p-32">
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
        <div className="w-full flex flex-col md:flex-row justify-center mt-5 md:space-x-3">
          <div>
            <Input
              variant="Outline"
              placeholder="Enter your email"
              svg={IconInput}
            />

            <div className="pt-2 flex flex-row space-x-1">
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
          <div>
            <Button
              text="Get started"
              variant="Primary"
              className="w-full mt-5 md:mt-0 md:w-129 h-48"
              onClick={() => {}}
            />
          </div>
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
        <Image
          className="w-6/12 md:w-auto absolute -bottom-5 -right-0 md:-bottom-20 md:-right-20  bg-white rounded-full"
          src={ActiveUsers}
          alt="ative users"
        />
      </div>
    </div>
  );
}
