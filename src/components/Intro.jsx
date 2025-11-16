// src/components/Intro.jsx

import React from 'react';
// Import your CSS file for styling
import '../CSS/index.css'; 
import profile from '../assets/anas.jpg';

const Intro = ({ name, title, phone, email, address, imageUrl }) => {
  return (
    <header className="intro-section">
      <div className="profile-image-container">
        {/* Placeholder for the CV picture  */}
        <img src={profile} alt={`${name}'s profile`} className="profile-picture"  />
      </div>
      <div className="header-details">
        <h1 className="name">{name}</h1>
        <h2 className="title">{title}</h2>
        <div className="contact-info">
          <p>📧 Email: {email}</p>
          <p>📞 Phone: {phone}</p>
          <p>📍 Address: {address}</p>
        </div>
        {/* You can include the Download CV and Hire Me buttons here [cite: 9, 10] */}
        <div className="actions">
          <button className="download-btn">Download CV</button>
          <button className="hire-btn">Hire Me</button>
        </div>
      </div>
    </header>
  );
};

export default Intro;