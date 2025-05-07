import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const contentTypes = [
    {
      icon: "💼",
      title: "Ажлын байр",
      description: "Шинэ ажлын байрны мэдээлэл",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: "🎓",
      title: "Сургалт",
      description: "Мэргэжлийн сургалтууд",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: "📝",
      title: "Блог",
      description: "Сонирхолтой нийтлэлүүд",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: "🛒",
      title: "Бараа",
      description: "Шинэ барааны мэдээлэл",
      gradient: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-10 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute top-40 right-10 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
          </div>
        </div>
      </div>

      {/* Auth Buttons */}
      <div className="absolute top-6 right-6 flex items-center gap-4">
        <motion.button
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="px-4 py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
        >
          Нэвтрэх
        </motion.button>
        <motion.button
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-colors duration-200"
        >
          Бүртгүүлэх
        </motion.button>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
            >
              Монголын хамгийн том контент платформ
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Таны бизнесийг дараагийн түвшинд гаргахад туслахад бэлэн байна
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-colors duration-200">
                Эхлэх
              </button>
              <button className="px-6 py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200 border border-gray-200">
                Дэлгэрэнгүй
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-12 grid grid-cols-3 gap-4"
            >
              <div className="text-center p-4 rounded-lg bg-white/50 backdrop-blur-sm">
                <div className="text-2xl font-bold text-blue-600 mb-1">10K+</div>
                <div className="text-sm font-medium text-gray-600">Хэрэглэгч</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-white/50 backdrop-blur-sm">
                <div className="text-2xl font-bold text-purple-600 mb-1">50K+</div>
                <div className="text-sm font-medium text-gray-600">Нийтлэл</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-white/50 backdrop-blur-sm">
                <div className="text-2xl font-bold text-green-600 mb-1">99%</div>
                <div className="text-sm font-medium text-gray-600">Сэтгэл ханамж</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Content Types */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {contentTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-200">
                    <div className={`h-12 w-12 rounded-lg bg-gradient-to-r ${type.gradient} mb-4 transform transition-transform duration-300 group-hover:rotate-6 flex items-center justify-center text-2xl`}>
                      {type.icon}
                    </div>
                    <h3 className="font-medium text-gray-900 mb-2">{type.title}</h3>
                    <p className="text-sm text-gray-600">{type.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-blue-400 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero; 