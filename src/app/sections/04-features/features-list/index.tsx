import Click from "@/assets/svg/Click.svg";
import IconArrow from "@/assets/svg/IconArrow.svg";
import Inboxes from "@/assets/svg/Inboxes.svg";
import Zap from "@/assets/svg/Zap.svg";
import { Text, TextVariant } from "@/components/text";
import Image from "next/image";
export default function FeaturesList() {
  const features = [
    {
      img: Inboxes,
      name: "Share team inboxes",
      description:
        "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    },
    {
      img: Zap,
      name: "Deliver instant answers",
      description:
        "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
    },
    {
      img: Click,
      name: "Manage your team with reports",
      description:
        "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
      {features.map((item) => (
        <div className="flex flex-col justify-center items-center">
          <Image src={item.img} alt={item.name} />
          <Text
            variant={TextVariant.PrimarySm}
            text={item.name}
            className="text-center mt-4"
          />
          <Text
            variant={TextVariant.GrayMd}
            text={item.description}
            className="text-center mt-2"
          />
          <div className="flex justify-center items-center mt-5 space-x-3 cursor-pointer">
            <Text
              variant={TextVariant.SecondaryMd}
              text="Learn more"
              className="text-center"
            />
            <Image src={IconArrow} alt="Arrow Right" />
          </div>
        </div>
      ))}
    </div>
  );
}
