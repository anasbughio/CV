// src/components/Education.jsx

import React from 'react';

const educationData = [
    {
        degree: 'BS Computer Science',
        institution: 'UMT',
        years: '2022-2026',
        details: 'Focused on Advanced Web Technologies and User Experience design principles.'
    },
    
];

const Education = () => {
    return (
        <section className="education-section">
            <h3>🎓 Education Details</h3>
            {educationData.map((edu, index) => (
                <div key={index} className="edu-entry">
                    <div className="edu-header">
                        <h4>{edu.degree}</h4>
                        <span className="edu-years">{edu.years}</span>
                    </div>
                    <p className="institution">{edu.institution}</p>
                    <p>{edu.details}</p>
                </div>
            ))}
        </section>
    );
};

export default Education;