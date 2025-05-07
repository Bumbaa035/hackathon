import React from 'react';

const Features = () => {
  const features = [
    {
      title: "Personalization",
      subtitle: "Tailored for You",
      description: "Customize your workout routines and fitness goals to fit your preferences and needs. Our app adapts to your progress and feedback, ensuring a personalized experience."
    },
    {
      title: "Progress Tracking",
      subtitle: "Monitor Your Achievements",
      description: "Track your fitness journey with detailed progress reports and insights. Stay motivated by visualizing your achievements and celebrating milestones."
    },
    {
      title: "Nutrition Guidance",
      subtitle: "Fuel Your Body Right",
      description: "Access expert nutrition advice and meal plans to complement your workouts and enhance your overall well-being."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
              <h4 className="text-blue-600 font-semibold mb-4">{feature.subtitle}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 