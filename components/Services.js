import React from 'react';

const services = [
  {
    title: 'UI/UX',
    description: 'Creating user-friendly and engaging interfaces.',
    image: '/ui-ux-icon.png',
  },
  {
    title: 'Graphic Design',
    description: 'Crafting visually appealing graphics and logos.',
    image: '/graphic-design-icon.png',
  },
  {
    title: 'App Design',
    description: 'Designing intuitive and functional mobile apps.',
    image: '/app-design-icon.png',
  },
  {
    title: 'Web Design',
    description: 'Building responsive and beautiful websites.',
    image: '/web-design-icon.png',
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-black mb-4">My Services</h2>
        <p className="text-lg text-gray-700 mb-12">
          I offer a wide range of design services to help bring your ideas to life.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-100 shadow-md rounded-lg p-6 w-72">
              <img src={service.image} alt={service.title} className="h-24 w-24 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-black mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
