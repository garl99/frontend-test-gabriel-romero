import { Chip } from "@/components/chip";
import { Text, TextVariant } from "@/components/text";
import FeaturesList from "./features-list";

export default function Features() {
  return (
    <section className="flex flex-col justify-center items-center mt-24 px-5 md:px-0">
      <Chip text="Features" />
      <Text
        variant={TextVariant.PrimaryMd}
        text="Cutting-edge features for advanced analytics"
        className="mt-4 text-center"
      />
      <Text
        variant={TextVariant.GrayLg}
        text="Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups."
        className="mt-5 text-center px-0 md:px-32"
      />
      <FeaturesList />
    </section>
  );
}
