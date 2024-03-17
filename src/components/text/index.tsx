import { FC } from "react";

export enum TextVariant {
  PrimaryXXs = "primary-xxs",
  PrimaryXs = "primary-xs",
  PrimarySm = "primary-sm",
  PrimaryMd = "primary-md",
  PrimaryLg = "primary-lg",
  SecondarySm = "secondary-sm",
  SecondaryMd = "secondary-md",
  SecondaryLg = "secondary-lg",
  LightXs = "light-xs",
  LightSm = "light-sm",
  LightMd = "light-md",
  LightLg = "light-lg",
  GrayMd = "gray-md",
  GrayMdSemiBold = "gray-md-semibold",
  GrayLg = "gray-lg",
  GrayDarkMd = "gray-dark-md",
  PurpleSm = "purple-sm",
  PurpleMd = "purple-md",
  Custom = "custom",
}
interface Props {
  variant: TextVariant;
  text: string;
  className?: string;
}

const variantClasses: Record<TextVariant, string> = {
  [TextVariant.PrimaryXXs]: "text-sm md:text-sm text-darkBlue font-semibold",
  [TextVariant.PrimaryXs]: "text-sm md:text-lg text-darkBlue font-semibold",
  [TextVariant.PrimarySm]: "text-sm md:text-xl text-darkBlue font-semibold",
  [TextVariant.PrimaryMd]: "text-sm md:text-4xl text-darkBlue font-semibold",
  [TextVariant.PrimaryLg]: "text-sm md:text-5xl text-darkBlue font-semibold",
  [TextVariant.SecondarySm]: "text-sm md:text-sm text-accent font-semibold",
  [TextVariant.SecondaryMd]: "text-sm md:text-xl text-accent font-normal",
  [TextVariant.SecondaryLg]: "text-sm md:text-7xl text-accent font-semibold",
  [TextVariant.LightXs]: "text-sm md:text-base text-white font-semibold",
  [TextVariant.LightSm]: "text-sm md:text-lg text-white font-semibold",
  [TextVariant.LightMd]: "text-sm md:text-4xl text-white font-medium",
  [TextVariant.LightLg]: "text-sm md:text-7xl text-white font-semibold",
  [TextVariant.GrayMd]: "text-sm md:text-base text-gray-400 font-normal",
  [TextVariant.GrayMdSemiBold]:
    "text-sm md:text-base text-gray-400 font-semibold",
  [TextVariant.GrayLg]: "text-sm md:text-xl text-gray-400 font-normal",
  [TextVariant.GrayDarkMd]: "text-sm md:text-base text-gray-500 font-semibold",
  [TextVariant.PurpleSm]: "text-sm md:text-sm text-primary font-normal ",
  [TextVariant.PurpleMd]: "text-sm md:text-base text-primary font-semibold",
  [TextVariant.Custom]: "",
};

export const Text: FC<Props> = ({ variant, className = "", text }) => {
  const variantClass = variantClasses[variant] || "";
  return <p className={`${variantClass} ${className}`}>{text}</p>;
};
