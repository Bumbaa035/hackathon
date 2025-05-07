import React from 'react';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Бүртгүүлэх",
      description: "Хурдан бүртгэл хийж, платформд нэвтрэх",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      number: "02",
      title: "Агуулга оруулах",
      description: "Өөрийн агуулгыг оруулж, харагдац тохируулах",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      number: "03",
      title: "Хэрэглэгчидтэй холбогдох",
      description: "Хэрэглэгчидтэй холбогдох",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      number: "04",
      title: "Амжилт",
      description: "Агуулгаа удирдаж, амжилтад хүрэх",
      gradient: "from-purple-500 to-blue-600"
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
          className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
        >
          Хэрхэн ажилладаг вэ?
        </motion.h2>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-200">
                <div className={`absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r ${step.gradient} text-white rounded-full flex items-center justify-center text-xl font-bold`}>
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 