"use client";

import React, { useState } from 'react';

const skills = ['Web Design', 'UI/UX', 'App Design', 'Graphic Design'];

const projectImages = {
  'Web Design': [
    { src: '/web-1.png', description: 'Responsive website layout' },
    { src: '/web-2.png', description: 'E-commerce platform' },
    { src: '/web-3.png', description: 'Portfolio website' },
  ],
  'UI/UX': [
    { src: '/ui-ux-1.png', description: 'Mobile app interface' },
    { src: '/ui-ux-2.png', description: 'Dashboard design' },
    { src: '/ui-ux-3.png', description: 'Wireframe prototype' },
  ],
  'App Design': [
    { src: '/app-design-1.png', description: 'Social media app' },
    { src: '/app-design-2.png', description: 'Health tracking app' },
    { src: '/app-design-3.png', description: 'Fitness app' },
  ],
  'Graphic Design': [
    { src: '/graphic-design-1.png', description: 'Logo design' },
    { src: '/graphic-design-2.png', description: 'Poster design' },
    { src: '/graphic-design-3.png', description: 'Branding materials' },
  ],
};

const MyProjects = () => {
  const [selectedSkill, setSelectedSkill] = useState('Web Design');

  
  const allProjects = Object.values(projectImages).flat();

  const projectsToDisplay =
    selectedSkill === 'All' ? allProjects : projectImages[selectedSkill];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-black mb-4">My Projects</h2>
        <p className="text-lg text-gray-700 mb-12">
        Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus. Phasellus consequat urna tellus
        </p>
        <div className="mb-8 flex justify-center space-x-4">
          <button
            onClick={() => setSelectedSkill('All')}
            className={`px-4 py-2 rounded-lg ${
              selectedSkill === 'All'
                ? 'bg-custom-orange text-white'
                : 'bg-gray-200 text-black'
            }`}
          >
            All
          </button>
          {skills.map(skill => (
            <button
              key={skill}
              onClick={() => setSelectedSkill(skill)}
              className={`px-4 py-2 rounded-lg ${
                selectedSkill === skill
                  ? 'bg-custom-orange text-white'
                  : 'bg-gray-200 text-black'
              }`}
            >
              {skill}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {projectsToDisplay.map((project, index) => (
            <div key={index} className="w-72">
              <img
                src={project.src}
                alt={project.description}
                className="mb-4 rounded-lg shadow-md object-cover h-48 w-full"
              />
              <h3 className="text-xl font-semibold text-custom-orange mb-2">{selectedSkill}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
