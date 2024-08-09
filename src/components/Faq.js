import React, { useState } from "react";

const Faq = () => {
  const faqData = [
    {
      question: "What is your return policy?",
      answer: "Our return policy allows returns within 30 days of purchase.",
    },
    {
      question: "How long does shipping take?",
      answer: "Shipping typically takes 3-5 business days.",
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we offer international shipping to selected countries.",
    },
    {
      question: "How can I track my order?",
      answer: "You can track your order using the tracking link in your email.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-20 p-8 bg-white">
      <div className="w-[35rem] p-3 flex flex-col gap-6 ">
        <div className="text-2xl font-semibold text-[#D1B080] ">
          <h1>FREQUENTLY ASKED QUESTIONS</h1>
        </div>
        <div>
          <h1 className="font-serif text-5xl text-black">You Have a Question?</h1>
        </div>
        <div className="font-thin">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            condimentum, lacus non faucibus congue, lectus quam viverra nulla,
            quis egestas neque sapien ac magna.
          </p>
        </div>
        <div className="font-thin">
          <p>
            Phasellus turpis mauris, varius at ex et, tincidunt rutrum mauris.
            Cras quis ex ullamcorper, porttitor justo quis.
          </p>
        </div>
      </div>
      <div className="flex justify-start">
        <div className="flex flex-col flex-wrap w-full gap-5 p-5">
          {faqData.map((item, index) => (
            <div key={index} className="pb-4 border-b-2 border-orange-300">
              <button
                className="text-lg font-semibold flex justify-between items-center w-full text-left hover:text-[#D1B080] transition duration-300"
                onClick={() => toggleAccordion(index)}
              >
                {item.question}
                <span className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              {openIndex === index && (
                <p className="mt-2 text-gray-600">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
