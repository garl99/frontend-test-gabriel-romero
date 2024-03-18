import Jira from "@/assets/svg//Jira.svg";
import Dropbox from "@/assets/svg/Dropbox.svg";
import Drive from "@/assets/svg/GoogleDrive.svg";
import Itercom from "@/assets/svg/Intercom.svg";
import Notion from "@/assets/svg/Notion.svg";
import Slack from "@/assets/svg/Slack.svg";
import { Item } from "@/components/item";
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
        <Item item={item} cta="View integration" iconClassName="p-0.5" key={item.name}/>
      ))}
    </div>
  );
}
