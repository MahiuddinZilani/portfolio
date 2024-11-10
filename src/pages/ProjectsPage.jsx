import React, { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const loadProjects = async () => {
      try {
        const response = await fetch("./projects.json");
        const data = await response.json();
        setProjects(data.projects);
      } catch (error) {
        console.error("Error to load projects!", error);
      }
    };
    loadProjects();
  }, []);

  console.log(projects);

  return (
    <div className="grid grid-cols-1 w-2/3 lg:w-full mx-auto lg:grid-cols-3 my-32 max-w-screen-xl">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectsPage;
