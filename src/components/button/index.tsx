import { FC } from "react";
import { Text, TextVariant } from "../text";

export enum BtnVariants {
  Primary = "Primary",
  Outline = "Outline",
  Custom = "Custom",
}

type AllBtnVariants = keyof typeof BtnVariants;
interface Props {
  variant?: AllBtnVariants;
  className?: string;
  text: string;
  onClick: any;
}

const variantClasses: Record<
  BtnVariants,
  { className: string; textVariant: TextVariant }
> = {
  [BtnVariants.Primary]: {
    className: "w-95 h-44 bg-hi bg-highlight rounded-md",
    textVariant: TextVariant.LightXs,
  },
  [BtnVariants.Outline]: {
    className: "w-95 h-44 bg-white border border-gray-100 rounded-md",
    textVariant: TextVariant.GrayDarkMd,
  },
  [BtnVariants.Custom]: { className: "", textVariant: TextVariant.Custom },
};

export const Button: FC<Props> = ({
  onClick,
  variant = BtnVariants.Custom,
  text,
  className,
}) => {
  const variantClass = variantClasses[variant] || "";
  const tagProps: any = { className: `${variantClass.className} ${className}` };
  return (
    <button {...tagProps} onClick={onClick}>
      <Text text={text} variant={variantClass.textVariant} />
    </button>
  );
};
