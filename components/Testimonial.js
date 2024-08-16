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

  const handleTabClick = (index) => {
    setCurrent(index);
  };

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-black mb-4">Testimonials</h2>
        <p className="text-lg text-gray-700 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique amet sed massa nibh lectus netus in.
        </p>

        <div className="relative flex items-center justify-center">
          <div className="flex items-center justify-center overflow-x-hidden whitespace-nowrap ">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ease-in-out flex flex-col items-center  ${
                  index === current
                    ? 'opacity-100 z-10 transform scale-100'
                    : 'opacity-40 z-0 transform scale-75'
                }`}
                style={{
                  flex: '0 0 auto', // Ensure the testimonial card does not shrink or grow
                  width: '70vw', // Adjust width as needed
                  maxWidth: '600px', // Maximum width to avoid stretching too far
                  margin: '0 50px', // Add margin to allow space for overflow
                }}
              >
                <img
                  src={testimonial.imgSrc}
                  alt={testimonial.author}
                  className="rounded-full w-32 h-32 object-cover shadow-lg mb-4"
                />
                <div className="bg-white p-6 rounded-lg shadow-lg text-left">
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
        </div>

        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleTabClick(index)}
              className={`w-7 h-2 text-white font-bold rounded-lg ${
                index === current ? 'bg-custom-orange' : 'bg-gray-300'
              }`}
            >
             
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
