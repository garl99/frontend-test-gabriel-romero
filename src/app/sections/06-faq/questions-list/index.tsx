"use client";
import MinusCircle from "@/assets/svg/MinusCircle.svg";
import PlusCircle from "@/assets/svg/PlusCircle.svg";
import { HeadingType, Text, TextVariant } from "@/components/text";
import Image from "next/image";
import { useState } from "react";
export default function QuestionsList() {
  const [questions, setQuestions] = useState([
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
      open: true,
    },
    {
      question: "Can I change my plan later?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam sem fringilla ut morbi tincidunt.",
      open: false,
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam sem fringilla ut morbi tincidunt.",
      open: false,
    },
    {
      question: "Can other info be added to an invoice?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam sem fringilla ut morbi tincidunt.",
      open: false,
    },
    {
      question: "How does billing work?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam sem fringilla ut morbi tincidunt.",
      open: false,
    },
    {
      question: "How do I change my account email?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam sem fringilla ut morbi tincidunt.",
      open: false,
    },
  ]);

  const handlerClick = (index: number) => {
    let questionsUpdated = [...questions];
    questionsUpdated[index].open = !questionsUpdated[index].open;
    setQuestions(questionsUpdated);
  };
  return (
    <div
      id="accordion-arrow-icon"
      data-accordion="open"
      className="mt-12 md:mt-16 w-full"
    >
      {questions.map((item, index) => (
        <div className="pb-3 md:p-5 border-b border-gray-200 mx-0 md:mx-40">
          <button
            type="button"
            className="flex items-start justify-between w-full py-5 font-medium rtl:text-right gap-3"
            data-accordion-target="#accordion-arrow-icon-body-2"
            aria-expanded="true"
            aria-controls="accordion-arrow-icon-body-2"
            onClick={() => {
              handlerClick(index);
            }}
          >
            <Text
              variant={TextVariant.PrimarySm}
              text={item.question}
              className="text-lg text-left"
  
              headingType={HeadingType.h3}
            />
            <Image src={item.open ? MinusCircle : PlusCircle} alt="Minus" />
          </button>
          <div
            id="accordion-arrow-icon-body-2"
            className={item.open ? "flex" : "hidden"}
            aria-labelledby="accordion-arrow-icon-heading-2"
          >
            <div>
              <Text variant="GrayMd" text={item.answer} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
