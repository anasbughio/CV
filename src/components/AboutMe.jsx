// src/components/AboutMe.jsx

import React from 'react';

const AboutMe = ({ name }) => {
  return (
    <section className="about-me-section">
      <h3>🎯 Objectives</h3>
      <p>
        Hello! I'm {name}. I am passionate about UI/UX design and Web Design. I am a skilled Front-end Developer and master of Graphic Design tools such as Photoshop and Sketch.
      </p>
      <p>
        My objective is to leverage my skills in a challenging environment to develop user-centric and visually appealing web applications.
      </p>
    </section>
  );
};

export default AboutMe;