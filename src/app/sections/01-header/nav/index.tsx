"use client"
import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/assets/svg/Logo.svg";
import Menu from "@/assets/svg/Menu.svg";
import Close from "@/assets/svg/Close.svg";
import { Text, TextVariant } from "@/components/text";
import { Button } from "@/components/button";

const NavLink = ({
  href,
  text,
  className,
}: {
  href: string;
  text: string;
  className?: string;
}) => (
  <li className={`flex items-center hover:underline ${className}`}>
    <Text
      variant={TextVariant.GrayMdSemiBold}
      headingType="a"
      href={href}
      className="py-0 px-3"
      text={text}
    />
  </li>
);

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu((prevState) => !prevState);
  };

  return (
    <header>
      <nav className="bg-white border-gray-200">
        <div className="mx-5 md:mx-0 flex flex-wrap items-center justify-between py-4">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
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
                <NavLink href="#" text="Home" />
                <NavLink href="#" text="Products" />
                <NavLink href="#" text="Resources" />
                <NavLink href="#" text="Pricing" />
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
              onClick={toggleMenu}
            >
              <Image src={openMenu ? Close : Menu} alt="Menu" />
            </button>

            <div className="hidden mdlg:flex md:space-x-5">
              <NavLink href="#" text="Log in" />
              <Button text="Sign up" variant="Primary" onClick={() => {}} />
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`bg-white border-gray-200 ${
          openMenu ? "flex md:hidden" : "hidden"
        }`}
      >
        <ul className="w-full font-medium flex flex-col p-4 ml-8 md:p-0 mt-4 bg-gray-50 md:flex-row md:space-x-2 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white space-y-4">
          <NavLink href="#" text="Home" className="justify-end" />
          <NavLink href="#" text="Products" className="justify-end" />
          <NavLink href="#" text="Resources" className="justify-end" />
          <NavLink href="#" text="Pricing" className="justify-end" />
        </ul>
      </div>
    </header>
  );
}
