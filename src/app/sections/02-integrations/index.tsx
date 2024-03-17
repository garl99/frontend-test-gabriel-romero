import { Chip } from "@/components/chip";
import { Text, TextVariant } from "@/components/text";
import React from "react";
import IntegrationsList from "./integrations-list";

export default function Integrations() {
  return (
    <section className="flex flex-col justify-center items-center mt-5 px-8 md:px-0">
      <Chip text="Integrations" />
      <Text
        variant={TextVariant.PrimaryMd}
        text="Get more value from your tools"
        className="mt-4 text-center"
      />
      <Text
        variant={TextVariant.GrayLg}
        text="Connect your tools, connect your teams. With over 100 apps already available in our directory, your team’s favourite tools are just a click away."
        className="mt-5 text-center px-0 md:px-32"
      />
      <IntegrationsList />
    </section>
  );
}
