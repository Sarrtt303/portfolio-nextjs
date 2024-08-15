import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Intro = () => {
  return (
    <section className="flex items-center justify-between h-screen px-8 bg-white">
      <div className="max-w-lg">
        <h1 className="text-5xl font-bold text-black mb-4">
          Hi, I'm Muhammad Umair <br /> UI & UX Designer
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          I specialize in creating beautiful, user-friendly interfaces for web and mobile applications. Let's work together to bring your ideas to life.
        </p>
        <button className="bg-custom-orange text-white font-semibold py-2 px-4 rounded">
          Hire Me
        </button>
      </div>
      <div className="flex flex-col items-center">
        <img 
          src="/Intro.png" 
          alt="Muhammad Umair" 
          className="h-92 w-92 object-cover mb-4"
        />
        <div className="flex space-x-4">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookF} className="text-2xl text-black bg-black" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="text-2xl text-gray-700" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} className="text-2xl text-gray-700" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedinIn} className="text-2xl text-gray-700" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
