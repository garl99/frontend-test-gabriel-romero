"use client";
import React from "react";
import Image from "next/image";
import Logo from "@/assets/svg/Logo.svg";
import Menu from "@/assets/svg/Menu.svg";
import { Text, TextVariant } from "@/components/text";
import { Button } from "@/components/button";

export default function Navbar() {
  return (
    <header>
      <nav className="bg-white border-gray-200">
        <div className="mx-5 md:mx-0 flex flex-wrap items-center justify-between py-4">
          <div className="flex">
            <a
              href="https://flowbite.com/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <Image src={Logo} alt="Logo" />
            </a>
            <div
              className="hidden w-full mdlg:flex mdlg:w-auto"
              id="navbar-default"
            >
              <ul className="font-medium flex flex-col p-4 ml-8 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-2 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
                <li className="flex items-center">
                  <Text
                    variant={TextVariant.GrayMdSemiBold}
                    headingType="a"
                    href="#"
                    className="py-0 px-3"
                    text="Home"
                  />
                </li>
                <li className="flex items-center">
                  <Text
                    variant={TextVariant.GrayMdSemiBold}
                    headingType="a"
                    href="#"
                    className="py-0 px-3"
                    text="Products"
                  />
                </li>
                <li className="flex items-center">
                  <Text
                    variant={TextVariant.GrayMdSemiBold}
                    headingType="a"
                    href="#"
                    className="py-0 px-3"
                    text="Resources"
                  />
                </li>
                <li className="flex items-center">
                  <Text
                    variant={TextVariant.GrayMdSemiBold}
                    headingType="a"
                    href="#"
                    className="py-0 px-3"
                    text="Pricing"
                  />
                </li>
              </ul>
            </div>
          </div>

          <div>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-darkBlue rounded-lg mdlg:hidden"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <Image src={Menu} alt="Menu" />
            </button>

            <div className="hidden mdlg:block md:space-x-5" >
              <Text
                variant={TextVariant.GrayMdSemiBold}
                headingType="a"
                href="#"
                className="py-0 px-3"
                text="Log in"
              />
              <Button text="Sign up" variant="Primary" onClick={() => {}} />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
