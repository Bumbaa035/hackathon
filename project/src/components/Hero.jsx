import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold mb-6">Let Your Fitness Journey Begin</h1>
            <p className="text-xl mb-8">Your path to a healthier lifestyle starts here</p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300">
              Download the App
            </button>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-3xl font-bold">368</p>
                  <p className="text-sm">Cal.</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">4.1</p>
                  <p className="text-sm">Km.</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">33</p>
                  <p className="text-sm">Min.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 