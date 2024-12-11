import React from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A modern portfolio website to showcase my projects.",
    technologies: ["React", "CSS", "JavaScript"],
    liveLink: "https://myportfolio.com",
    codeLink: "https://github.com/myusername/portfolio"
  },
  {
    id: 2,
    title: "E-commerce Store",
    description: "A fully functional e-commerce store with cart and payment integration.",
    technologies: ["React", "Redux", "Node.js", "Stripe API"],
    liveLink: "https://mystore.com",
    codeLink: "https://github.com/myusername/ecommerce-store"
  },
  {
    id: 3,
    title: "Weather App",
    description: "A simple weather application using OpenWeatherMap API.",
    technologies: ["React", "TypeScript", "API Integration"],
    liveLink: "https://myweatherapp.com",
    codeLink: "https://github.com/myusername/weather-app"
  },
  {
    id: 4,
    title: "Interactive registrarion form",
    description: "This is an interactive registration form for a pet walking service.",
    technologies: ["React", "API Integration"],
    codeLink: "http://localhost:5173/Form"
  }

];

const Projects = () => {
  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Technologies:</strong> {project.technologies.join(", ")}</p>
            <div className="project-links">
              <a href={project.codeLink} target="_blank" rel="noopener noreferrer">View Page</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;