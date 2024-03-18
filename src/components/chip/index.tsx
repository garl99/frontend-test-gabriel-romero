import { FC } from "react";
import { Text, TextVariant } from "../text";

interface Props {
  text: string;
  className?: string;
  classNameText?: string;
}

export const Chip: FC<Props> = ({ text, className, classNameText }) => {
  return (
    <div
      className={`w-105 h-28 rounded-full border border-accent flex justify-center items-center ${className}`}
    >
      <Text
        variant={TextVariant.SecondarySm}
        text={text}
        className={classNameText}
      />
    </div>
  );
};
