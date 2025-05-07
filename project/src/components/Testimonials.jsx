import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Los Angeles, CA",
      text: "Us2Ups has completely transformed my fitness routine. The personalized workouts and nutrition plans have helped me achieve my goals faster than I ever imagined."
    },
    {
      name: "David Lee",
      location: "Denver, CO",
      text: "As a busy professional, Us2Ups has made it convenient for me to stay active and healthy. The variety of workouts and the easy-to-use interface make fitness enjoyable and accessible."
    },
    {
      name: "Maria Garcia",
      location: "Miami, FL",
      text: "I have tried many fitness apps, but Us2Ups stands out for its user-friendly design and effective workout programs. The motivation and support from the community keep me motivated to stay consistent."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Client Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8">
              <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
              <div>
                <h4 className="font-bold text-lg">{testimonial.name}</h4>
                <p className="text-gray-500">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 