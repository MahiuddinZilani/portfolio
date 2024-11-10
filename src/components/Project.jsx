import React from "react";

const projects = [
  {
    title: "Project One",
    description: "Description for project one.",
    link: "#",
  },
  {
    title: "Project Two",
    description: "Description for project two.",
    link: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-20 px-8 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <a href={project.link} className="text-indigo-500 underline">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
