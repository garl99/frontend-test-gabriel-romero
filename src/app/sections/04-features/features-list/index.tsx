import Click from "@/assets/svg/Click.svg";
import IconArrow from "@/assets/svg/IconArrow.svg";
import Inboxes from "@/assets/svg/Inboxes.svg";
import Zap from "@/assets/svg/Zap.svg";
import { Item } from "@/components/item";
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
        <Item item={item} cta="Learn more" iconClassName="p-2.5" />
      ))}
    </div>
  );
}
