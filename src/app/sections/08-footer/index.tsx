import { Chip } from "@/components/chip";
import { Text, TextVariant } from "@/components/text";
import Image from "next/image";
import React from "react";
import GooglePlay from "@/assets/svg/GooglePlay.svg";
import AppStore from "@/assets/svg/AppStore.svg";
import Logo from "@/assets/svg/Logo.svg";

export default function Footer() {
  const product = [
    { name: "Overview", new: false },
    { name: "Features", new: false },
    { name: "Solutions", new: true },
    { name: "Tutorials", new: false },
    { name: "Pricing", new: false },
    { name: "Releases", new: false },
  ];

  const company = [
    { name: "About us", new: false },
    { name: "Careers", new: false },
    { name: "Press", new: false },
    { name: "News", new: false },
    { name: "Media kit", new: false },
    { name: "Contact", new: false },
  ];
  return (
    <footer className="mt-16 mx-4 md:mx-0">
      <div className="md:w-full flex flex-col-reverse md:flex-row justify-between">
        <div className="flex mt-12 gap-10">
          <div className="flex flex-col gap-3">
            <Text variant={TextVariant.PrimaryXXs} text="Product" />
            {product.map((item, index) => (
              <div className="flex gap-2" key={index}>
                <Text
                  variant={TextVariant.SecondaryMd}
                  headingType="a"
                  text={item.name}
                  className="cursor-pointer hover:underline"
                />
                {item.new && (
                  <Chip
                    text="New"
                    className="w-12 border-secondary"
                    classNameText="font-semibold"
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <Text variant={TextVariant.PrimaryXXs} text="Company" />
            {company.map((item, index) => (
              <Text
                variant={TextVariant.SecondaryMd}
                headingType="a"
                text={item.name}
                className="cursor-pointer hover:underline"
                key={index}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <Text variant={TextVariant.PrimaryXXs} text="Get the app" />
          <div className="flex space-x-4 md:flex-col md:space-y-4 md:space-x-0">
            <Image alt="Google Play" src={GooglePlay} />
            <Image alt="Google Play" src={AppStore} />
          </div>
        </div>
      </div>

      <div className="md:w-full flex space-y-6 flex-col md:flex-row justify-between md:items-end border-t border-gray-100 mt-16 mb-6">
        <Image src={Logo} alt="Logo" className="mt-6" />
        <Text
          variant={TextVariant.GrayMd}
          text="© 2077 Untitled UI. All rights reserved."
        />
      </div>
    </footer>
  );
}
