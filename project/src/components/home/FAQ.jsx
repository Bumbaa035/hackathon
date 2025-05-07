import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const faqs = [
    {
      question: "HubSite дээр ямар төрлийн агуулга оруулах боломжтой вэ?",
      answer: "Та зар, сургалт, блог, бараа гэх мэт олон төрлийн агуулга оруулах боломжтой. Хэрэглэгч бүр өөрийн хүссэн төрлийн агуулга оруулж, удирдах боломжтой."
    },
    {
      question: "Хэрэглэгч бүртгэл хийхэд ямар мэдээлэл шаардлагатай вэ?",
      answer: "Хэрэглэгч бүртгэл хийхэд нэр, и-мэйл, утасны дугаар гэх мэт үндсэн мэдээлэл шаардлагатай. Бүртгэл хийсний дараа та агуулга оруулах, харах боломжтой болно."
    },
    {
      question: "Админ хэсэгт ямар үйлдлүүд хийх боломжтой вэ?",
      answer: "Админ хэсэгт хэрэглэгчдийн постуудыг удирдах, хэрэглэгчдийг бандах, агуулгыг шалгах зэрэг үйлдлүүд хийх боломжтой."
    },
    {
      question: "Агуулга оруулахдаа ямар файлууд хавсаргах боломжтой вэ?",
      answer: "Зураг, баримт бичиг, видео гэх мэт олон төрлийн файл хавсаргах боломжтой. Файлын хэмжээ, төрөл зэрэг нь тодорхой хязгаарлалттай."
    },
    {
      question: "Хайлт хийхдээ ямар шүүлтүүрүүд ашиглах боломжтой вэ?",
      answer: "Агуулгын төрөл, огноо, байршил, үнэ гэх мэт олон төрлийн шүүлтүүр ашиглах боломжтой. Хайлтын үр дүнг хадгалах, хуваалцах боломжтой."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 right-10 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute bottom-40 left-10 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
        >
          Түгээмэл асуултууд
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                className="w-full text-left bg-white p-6 rounded-lg shadow-md hover:shadow-xl 
                  transition-all duration-300 transform hover:-translate-y-1
                  hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
                  group relative"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-25 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {faq.question}
                    </h3>
                    <span className={`text-blue-600 text-2xl transition-all duration-300 transform
                      ${openIndex === index ? 'rotate-180' : 'rotate-0'}`}>
                      {openIndex === index ? '−' : '+'}
                    </span>
                  </div>
                  <div 
                    className={`overflow-hidden transition-all duration-500 ease-in-out
                      ${openIndex === index ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 