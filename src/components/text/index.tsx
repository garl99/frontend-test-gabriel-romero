import { FC } from "react";

export enum HeadingType {
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
  h5 = "h5",
  h6 = "h6",
  p = "p",
  a = "a",
}

type AllHeadingType = keyof typeof HeadingType;

export enum TextVariant {
  PrimaryXXs = "PrimaryXXs",
  PrimaryXs = "PrimaryXs",
  PrimarySm = "PrimarySm",
  PrimaryMd = "PrimaryMd",
  PrimaryLg = "PrimaryLg",
  AccentSm = "AccentSm",
  AccentMd = "AccentMd",
  AccentLg = "AccentLg",
  LightXs = "LightXs",
  LightSm = "LightSm",
  LightMd = "LightMd",
  LightLg = "LightLg",
  GrayMd = "GrayMd",
  GrayMdSemiBold = "GrayMdSemiBold",
  GrayLg = "GrayLg",
  GrayDarkMd = "GrayDarkMd",
  SecondarySm = "SecondarySm",
  SecondaryMd = "SecondaryMd",
  Custom = "Custom",
}

type AllTextVariants = keyof typeof TextVariant;

const variantClasses: Record<TextVariant, string> = {
  [TextVariant.PrimaryXXs]: "text-sm md:text-sm text-darkBlue font-semibold",
  [TextVariant.PrimaryXs]: "text-sm md:text-lg text-darkBlue font-semibold",
  [TextVariant.PrimarySm]: "text-lg md:text-xl text-darkBlue font-semibold",
  [TextVariant.PrimaryMd]: "text-3xl md:text-4xl text-darkBlue font-semibold",
  [TextVariant.PrimaryLg]: "text-3xl md:text-5xl text-darkBlue font-semibold",
  [TextVariant.AccentSm]: "text-sm md:text-sm text-accent font-normal",
  [TextVariant.AccentMd]: "text-lg md:text-xl text-accent font-normal",
  [TextVariant.AccentLg]: "text-4xl md:text-7xl text-accent font-semibold",
  [TextVariant.LightXs]: "text-sm md:text-base text-white font-semibold",
  [TextVariant.LightSm]: "text-sm md:text-lg text-white font-semibold",
  [TextVariant.LightMd]: "text-3xl md:text-4xl text-white font-medium",
  [TextVariant.LightLg]: "text-4xl md:text-7xl text-white font-semibold",
  [TextVariant.GrayMd]: "text-base md:text-base text-gray-400 font-normal",
  [TextVariant.GrayMdSemiBold]: "text-sm md:text-base text-gray-400 font-semibold",
  [TextVariant.GrayLg]: "text-lg md:text-xl text-gray-400 font-normal",
  [TextVariant.GrayDarkMd]: "text-sm md:text-base text-gray-500 font-semibold",
  [TextVariant.SecondarySm]: "text-base md:text-sm text-secondary font-normal ",
  [TextVariant.SecondaryMd]: "text-base md:text-base text-secondary font-semibold",
  [TextVariant.Custom]: "",
};

interface Props {
  variant?: AllTextVariants;
  text: string;
  className?: string;
  headingType?: AllHeadingType;
  href?: string;
}

export const Text: FC<Props> = ({
  variant = TextVariant.Custom,
  className = "",
  text,
  headingType = HeadingType.p,
  href,
}: Props) => {
  const variantClass = variantClasses[variant] || "";
  const Tag = headingType;

  const tagProps: any = { className: `${variantClass} ${className}` };
  if (Tag === HeadingType.a && href) {
    tagProps.href = href;
  }

  return <Tag {...tagProps}>{text}</Tag>;
};
