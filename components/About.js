import React from 'react';

const SkillBar = ({ skill, level }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span>{skill}</span>
      <span>{level}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div className="bg-custom-orange h-2.5 rounded-full" style={{ width: `${level}%` }}></div>
    </div>
  </div>
);

const AboutSection = () => {
  const skills = [
    { name: 'Web Design', level: 90 },
    { name: 'UI/UX', level: 85 },
    { name: 'App Design', level: 80 },
    { name: 'Graphic Design', level: 80 },
    // Add more skills as needed
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex-shrink-0">
          <img 
            src="/About.png" 
            alt="About" 
            className="h-96 w-96 object-cover"
          />
        </div>
        <div className="max-w-md text-black ml-8">
          <h2 className="text-3xl text-black font-bold mb-8">About Me</h2>
          <p className="mb-8 text-custom-black">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra.
          </p>
          {skills.map((skill, index) => (
            <SkillBar key={index} skill={skill.name} level={skill.level} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
