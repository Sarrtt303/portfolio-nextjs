
"use client"
import React, { useState } from 'react';

const testimonials = [
  {
    quote: "Muhammad Umair is a phenomenal designer! His attention to detail is unparalleled.",
    author: "John Doe",
    imgSrc: "/person1.jpg",
  },
  {
    quote: "Working with Muhammad was a pleasure. His designs always exceeded our expectations.",
    author: "Jane Smith",
    imgSrc: "/person1.png",
  },
  {
    quote: "I highly recommend Muhammad for any UI/UX projects. His skills are top-notch!",
    author: "Alice Johnson",
    imgSrc: "/person2.png",
  },
  {
    quote: "Muhammad's creativity and professionalism are unmatched. A true expert in his field.",
    author: "Mike Brown",
    imgSrc: "/person4.jpg",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-black mb-4">Testimonials</h2>
        <p className="text-lg text-gray-700 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique amet sed massa nibh lectus netus in.
        </p>

        <div className="relative flex items-center justify-center">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ease-in-out flex flex-col items-center ${
                index === current
                  ? 'opacity-100 z-10 transform scale-100'
                  : 'opacity-40 z-0 transform scale-75'
              }`}
            >
              <img
                src={testimonial.imgSrc}
                alt={testimonial.author}
                className="rounded-full w-32 h-32 object-cover shadow-lg mb-4"
              />
              <div className="bg-white p-6 rounded-lg shadow-lg text-left max-w-sm">
                <p className="text-lg text-custom-black mb-4">
                  <span className="text-custom-orange text-4xl leading-none">“</span>
                  {testimonial.quote}
                  <span className="text-custom-orange text-4xl leading-none">”</span>
                </p>
                <h3 className="text-xl font-bold text-black">{testimonial.author}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center space-x-4 mt-8">
          <button onClick={handlePrev} className="text-custom-orange font-bold">
            Previous
          </button>
          <button onClick={handleNext} className="text-custom-orange font-bold">
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

