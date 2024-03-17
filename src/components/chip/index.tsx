import { FC } from "react";
import { Text } from "../text";

interface Props {
  text: string;
  className?: string;
}

export const Chip: FC<Props> = ({ text, className }) => {
  return (
    <div
      className={`w-105 h-28 rounded-full border border-accent flex justify-center items-center ${className}`}
    >
      <Text variant="SecondarySm" text={text} />
    </div>
  );
};
