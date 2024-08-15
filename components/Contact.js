import React from 'react';

const Contact = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center ">
        {/* Title */}
        <h2 className="text-4xl font-bold text-black mb-4">Let's Design Together</h2>
        
        {/* Description */}
        <p className="text-lg text-gray-700 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique amet sed massa nibh lectus netus in.
        </p>
        
        {/* Input and Button */}
        <div className="flex justify-center items-center space-x-4">
          <input
            type="email"
            placeholder="Enter your email here"
            className="p-3 w-2/3 max-w-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-custom-orange"
          />
          <button className="bg-custom-orange text-white p-3 rounded-md hover:bg-orange-600 transition duration-300">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;