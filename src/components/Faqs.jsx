import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4 bg-gray-900">
      <button
        className="flex justify-between items-center w-full  py-2 px-4 rounded-md focus:outline-none"
        onClick={toggleOpen}
      >
        <span className="text-lg  text-gray-400 font-semibold">{question}</span>
        <svg
          className={`w-6 h-6 ${isOpen ? 'transform rotate-180' : ''} text-gray-200` }
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && <p className="mt-2 bg-gray-900 border-t border-gray-500 text-gray-200 p-2 ">{answer}</p>}
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: 'What is Tailwind CSS?',
      answer:
        'Tailwind CSS is a utility-first CSS framework for building custom designs quickly. It provides low-level utility classes that you can use to build designs directly in your HTML.',
    },
    {
      question: 'How do I install Tailwind CSS?',
      answer:
        'You can install Tailwind CSS via npm or yarn. First, install it using `npm install tailwindcss` or `yarn add tailwindcss`. Then, create a configuration file using `npx tailwindcss init` or `yarn tailwindcss init`. Finally, include Tailwind CSS in your CSS file or build process.',
    },
    // Add more FAQ items as needed
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQ;
