import React, { useState } from "react";

const Faq = () => {
  const faqData = [
    {
      question: "Whats unique about us ? ",
      answer: "What sets us apart is our distinctive approach to teaching, which includes project-based learning, mentorship from young professionals who truly understand students, collaborative group learning, a well-structured curriculum, unlimited technical mock interviews, resume building tailored to industry standards, and expert guidance on creating a standout LinkedIn profile",
    },
    {
      question: "How do we differ from traditional college training programs?",
      answer: "While colleges focus heavily on theoretical knowledge across subjects like Java, DSA, and Angular, our program is designed to bridge the gap between theory and real-world application. We emphasize practical implementation, aligning our training with industry expectations to prepare candidates for the demands of the professional world.  ",
    },
    {
      question: "Who can benefit from this course?",
      answer: "This course is beneficial for any student, regardless of their current year of study or academic discipline. It is designed for all those who are passionate about pursuing a career as a software developer.",
    },
    {
      question: "How long does the course last?",
      answer: "The duration of the course varies depending on the program chosen by the student, with the longest course extending up to six months. Additionally, after completing the course, students receive unlimited mock interviews, LinkedIn guidance, and resume-building assistance, all at no extra cost.",
    },
    {
      question: "Can a beginner or someone from a non-technical background join this course?",
      answer: "Absolutely! Our course is designed to accommodate both beginners and individuals from non-technical backgrounds. For beginners, we start from complete scratch, ensuring a thorough understanding of the fundamentals. In contrast, our intermediate batch progresses at a faster pace, building on existing knowledge to advance quickly.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-start justify-center gap-3 p-8 bg-white">
      <div className="w-full p-3 flex flex-col gap-6 ">
        <div className="text-2xl font-semibold text-orange-400 ">
          <h1>FREQUENTLY ASKED QUESTIONS</h1>
        </div>
      </div>
      <div className="flex w-full justify-start">
        <div className="flex flex-col flex-wrap w-full gap-5 p-5">
          {faqData.map((item, index) => (
            <div key={index} className="pb-4 border-b-2 text-gray-600 border-orange-300">
              <button
                className="text-lg font-semibold flex justify-between items-center w-full text-left hover:text-orange-300 transition duration-300"
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
