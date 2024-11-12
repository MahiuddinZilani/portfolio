import React, { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const response = await fetch("./projects.json");
        const data = await response.json();
        setProjects(data.projects);
      } catch (error) {
        console.error("Error loading projects!", error);
      } finally {
        setLoading(false); // Stop loading after fetch attempt (success or error)
      }
    };
    loadProjects();
  }, []);

  return (
    <div className="bg-gray-200">
      <div className="w-full dark:bg-gray-900 max-w-screen-xl mx-auto py-16">
        <h1 className="text-3xl font-bold text-center mb-6">My Projects</h1>
        {loading ? (
          <div className="text-center text-xl font-semibold">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mx-auto">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
