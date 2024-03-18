import Image from "next/image";
import { FC } from "react";

export enum InputVariants {
  Outline = "Outline",
  Custom = "Custom",
}

type AllInputVariants = keyof typeof InputVariants;

interface Props {
  variant?: AllInputVariants;
  classNameContainer?: string;
  classNameInput?: string;
  placeholder: string;
  svg?: string;
}

const variantClasses: Record<
  InputVariants,
  { container: string; input: string }
> = {
  [InputVariants.Outline]: {
    container:
      "h-48 w-full flex justify-between px-3 py-0 bg-gray-50 border border-gray-100 text-gray-500 text-base rounded-lg placeholder-gray-300",
    input: "outline-none",
  },

  [InputVariants.Custom]: {
    container: "",
    input: "",
  },
};

export const Input: FC<Props> = ({
  variant = InputVariants.Custom,
  classNameInput,
  classNameContainer,
  placeholder,
  svg,
}) => {
  const variantClass = variantClasses[variant] || "";
  const tagPropsContainer: any = {
    className: `${variantClass.container} ${classNameContainer}`,
  };
  const tagPropsInput: any = {
    className: `${variantClass.input} ${classNameInput} ${
      svg ? "w-11/12" : "w-full"
    }`,
  };

  return (
    <div {...tagPropsContainer}>
      <input
        {...tagPropsInput}
        type="text"
        placeholder={placeholder}
        required
      />
      {svg && <Image src={svg} alt="Icono" className="cursor-pointer" />}
    </div>
  );
};
