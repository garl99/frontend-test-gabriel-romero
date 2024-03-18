import { FC } from "react";
import { HeadingType, Text, TextVariant } from "../text";
import IconArrow from "@/assets/svg/IconArrow.svg";
import Image from "next/image"; // Asegúrate de importar Image

interface Props {
  item: { img: string; name: string; description: string };
  cta: string;
  iconClassName?: string;
}

export const Item: FC<Props> = ({ item, cta, iconClassName }) => {
  const { img, name, description } = item;
  return (
    <div className="flex flex-col justify-center items-center">
      <div
        className={`border border-gray-100 border-opacity-50 rounded-xl ${iconClassName}`}
      >
        <Image src={img} alt={name} />
      </div>
      <Text
        variant={TextVariant.PrimarySm}
        text={name}
        className="text-center mt-4"
        headingType={HeadingType.h3}
      />
      <Text
        variant={TextVariant.GrayMd}
        text={description}
        className="text-center mt-2"
      />
      <div className="flex justify-center items-center mt-5 space-x-3 cursor-pointer">
        <Text
          variant={TextVariant.SecondaryMd}
          text={cta}
          className="text-center"
        />
        <Image src={IconArrow} alt="Arrow Right" />
      </div>
    </div>
  );
};
