import React from 'react';

const Contact = () => {
  return (
    <section className="py-20 bg-white" id="contact">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Холбоо барих</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Бидэнтэй холбогдоорой</h3>
              <p className="text-gray-600 mb-8">
                Асуулт, санал хүсэлтээ илгээхийн тулд доорх мэдээллийг ашиглана уу.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="text-2xl">📍</div>
                <div>
                  <h4 className="font-semibold">Хаяг</h4>
                  <p className="text-gray-600">Улаанбаатар хот, Сүхбаатар дүүрэг</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-2xl">📞</div>
                <div>
                  <h4 className="font-semibold">Утас</h4>
                  <p className="text-gray-600">+976 9999 9999</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-2xl">✉️</div>
                <div>
                  <h4 className="font-semibold">И-мэйл</h4>
                  <p className="text-gray-600">info@hubsite.mn</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-xl p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Нэр</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-300"
                  placeholder="Нэрээ оруулна уу"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">И-мэйл</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-300"
                  placeholder="И-мэйл хаягаа оруулна уу"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Мессэж</label>
                <textarea
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-300"
                  rows="4"
                  placeholder="Мессэжээ бичнэ үү"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
              >
                Илгээх
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 