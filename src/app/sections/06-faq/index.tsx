import { Text, TextVariant } from "@/components/text";
import QuestionsList from "./questions-list";

export default function FAQ() {
  return (
    <section className="flex flex-col justify-center items-center mt-24 px-5 md:px-0">
      <Text
        variant={TextVariant.PrimaryMd}
        text="Frequently asked questions"
        className="mt-4 text-center"
      />
      <Text
        variant={TextVariant.GrayLg}
        text="Everything you need to know about the product and billing."
        className="mt-5 text-center px-0 md:px-32"
      />
      <QuestionsList />
    </section>
  );
}
