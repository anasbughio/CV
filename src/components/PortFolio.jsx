// src/components/Portfolio.jsx

import React from 'react';

const portfolioProjects = [
    { name: 'E-Commerce Website'},
    { name: 'Notes App' },
    { name: 'Blog Website' },
];

const PortFolio = () => {
    return (
        <section className="portfolio-section">
            <h3>🖼️ Your Portfolio Details</h3>
            <div className="portfolio-grid">
                {portfolioProjects.map((project, index) => (
                    <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="portfolio-item">
                        {/* <img src={project.image} alt={project.name} /> */}
                        <p>{project.name}</p>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default PortFolio;