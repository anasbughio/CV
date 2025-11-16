// src/components/Skills.jsx

import React from 'react';

// Example data structure for skills
const technicalSkills = [
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 85 },
  { name: 'JavaScript', level: 75 },
  { name: 'ReactJS', level: 80 },
];

const designSkills = [
  { name: 'Adobe Photoshop', level: 90 }, // Example from the prompt [cite: 23]
  { name: 'Sketch', level: 85 },         // Example from the prompt [cite: 24]
  { name: 'Adobe XD', level: 75 },        // Example from the prompt [cite: 25]
];


const Skills = () => {
  const SkillBar = ({ name, level }) => (
    <div className="skill-item">
      <p>{name}</p>
      {/* The style width should be controlled by CSS or a state/prop */}
      <div className="skill-bar-container">
        <div 
          className="skill-bar-fill" 
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
  
  return (
    <section className="professional-skills-section">
      <h3>✨ Professional Skills</h3>
      <div className="skills-grid">
        <div className="skills-column">
            <h4>Front-end Technologies</h4>
            {technicalSkills.map((skill, index) => (
                <SkillBar key={index} name={skill.name} level={skill.level} />
            ))}
        </div>
        <div className="skills-column">
            <h4>Design Tools</h4>
            {designSkills.map((skill, index) => (
                <SkillBar key={index} name={skill.name} level={skill.level} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;