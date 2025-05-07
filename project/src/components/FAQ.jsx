import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I get started with Us2Ups?",
      answer: "To begin using Us2Ups, simply download the app from your app store, create an account, and start exploring the various features and workout plans available."
    },
    {
      question: "Is Us2Ups suitable for all fitness levels?",
      answer: "Yes, Us2Ups caters to individuals of all fitness levels. Whether you're a beginner or an experienced athlete, our app offers customizable programs to meet your specific needs and goals."
    },
    {
      question: "Can I track my progress on the app?",
      answer: "Absolutely! Us2Ups allows you to monitor your progress, track your workouts, set fitness goals, and view detailed insights to help you stay motivated and on track towards achieving your desired results."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">FAQs</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full text-left bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold">{faq.question}</h3>
                  <span className="text-blue-600 text-2xl">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </div>
                {openIndex === index && (
                  <p className="mt-4 text-gray-600">{faq.answer}</p>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 