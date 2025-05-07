import React from 'react';
import { motion } from 'framer-motion';

const Statistics = () => {
  const stats = [
    {
      number: "10,000+",
      label: "Идэвхтэй хэрэглэгч",
      description: "Өдөр бүр идэвхтэй ашиглаж буй хэрэглэгчид",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      number: "50,000+",
      label: "Нийтлэл",
      description: "Онлайн дээр нийтлэгдсэн агуулга",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      number: "1,000+",
      label: "Компани",
      description: "Бидэнтэй хамтран ажиллаж буй байгууллагууд",
      gradient: "from-green-500 to-green-600"
    },
    {
      number: "99%",
      label: "Сэтгэл ханамж",
      description: "Хэрэглэгчдийн бидэнд өгсөн үнэлгээ",
      gradient: "from-orange-500 to-orange-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Манай амжилтууд
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Бид өдөр бүр өсөж, хөгжиж байгаа бөгөөд энэ нь таны итгэл найдварын үр дүн юм
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <motion.div 
                    initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className={`text-4xl font-bold mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
                  >
                    {stat.number}
                  </motion.div>
                  <div className={`h-1 w-12 bg-gradient-to-r ${stat.gradient} rounded-full mb-4`}></div>
                  <h3 className="text-xl font-semibold mb-2">{stat.label}</h3>
                  <p className="text-gray-600 text-sm">{stat.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Statistics; 