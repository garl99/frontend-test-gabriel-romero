import React from "react";
import Notion from "@/assets/svg/Notion.svg";
import Slack from "@/assets/svg/Slack.svg";
import Drive from "@/assets/svg/GoogleDrive.svg";
import Itercom from "@/assets/svg/Intercom.svg";
import Jira from "@/assets/svg//Jira.svg";
import Dropbox from "@/assets/svg/Dropbox.svg";
import IconArrow from "@/assets/svg/IconArrow.svg";
import Image from "next/image";
import { Text, TextVariant } from "@/components/text";
export default function IntegrationsList() {
  const integrations = [
    {
      img: Notion,
      name: "Notion integration",
      description:
        "Work faster and smarter by integrating directly with Notion, right in the app.",
    },
    {
      img: Slack,
      name: "Slack integration",
      description:
        "Work faster and smarter by integrating directly with Slack, right in the app. ",
    },
    {
      img: Drive,
      name: "Google Drive integration",
      description:
        "Work faster and smarter by integrating directly with Google Drive, right in the app. ",
    },
    {
      img: Itercom,
      name: "Intercom integration",
      description:
        "Work faster and smarter by integrating directly with Intercom, right in the app. ",
    },
    {
      img: Jira,
      name: "Jira integration",
      description:
        "Work faster and smarter by integrating directly with Jira, right in the app. ",
    },
    {
      img: Dropbox,
      name: "Dropbox integration",
      description:
        "Work faster and smarter by integrating directly with Dropbox, right in the app.",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
      {integrations.map((item) => (
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
              text="View integration"
              className="text-center"
            />
            <Image src={IconArrow} alt="Arrow Right" />
          </div>
        </div>
      ))}
    </div>
  );
}
