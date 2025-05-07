import React from 'react';
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      title: "Олон төрлийн агуулга",
      description: "Зар, сургалт, блог, бараа гэх мэт олон төрлийн агуулгыг нэг дороос оруулж, харах боломжтой",
      gradient: "from-blue-500 to-blue-600",
      stats: "1000+",
      pattern: (
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-lg"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-blue-500 rounded-lg transform rotate-45"></div>
          </div>
        </div>
      )
    },
    {
      title: "Хялбар удирдлага",
      description: "Хэрэглэгчид ойлгомжтой, хялбар удирдлагатай интерфэйс",
      gradient: "from-purple-500 to-purple-600",
      stats: "99%",
      pattern: (
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-lg"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-purple-500 rounded-full"></div>
          </div>
        </div>
      )
    },
    {
      title: "Аюулгүй байдал",
      description: "Хамгийн сүүлийн үеийн аюулгүй байдлын систем",
      gradient: "from-green-500 to-green-600",
      stats: "24/7",
      pattern: (
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-lg"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-green-500 transform rotate-45"></div>
          </div>
        </div>
      )
    },
    {
      title: "24/7 Дэмжлэг",
      description: "Таны асуулт, санал хүсэлтэд 24 цагийн дотор хариу өгөх",
      gradient: "from-orange-500 to-orange-600",
      stats: "1hr",
      pattern: (
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-lg"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-orange-500 rounded-lg"></div>
          </div>
        </div>
      )
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 right-10 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute bottom-40 left-10 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Онцлог шинж чанарууд
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Манай платформ нь таны бизнесийг дараагийн түвшинд гаргахад туслахад бэлэн байна
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group relative h-full"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white rounded-lg p-6 hover:shadow-lg transition-all duration-200 h-full flex flex-col">
                <div className={`h-14 w-14 rounded-lg bg-gradient-to-r ${feature.gradient} mb-5 transform transition-transform duration-300 group-hover:rotate-6 overflow-hidden`}>
                  {feature.pattern}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{feature.description}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                    {feature.stats}
                  </span>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="text-blue-600"
                  >
                    →
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="mt-16 text-center"
        >
          <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
            Дэлгэрэнгүй мэдээлэл →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Features; 