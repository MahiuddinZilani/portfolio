import React from "react";
import { FaGithub, FaEye, FaHtml5, FaCss3 } from "react-icons/fa";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

// Define icons and colors for each technology
const technologyIcons = {
  HTML: { icon: <FaHtml5 />, color: "#E34F26" },
  CSS: { icon: <FaCss3 />, color: "#1572B6" },
  React: { icon: <FaReact />, color: "#61DAFB" },
  "Node.js": { icon: <FaNodeJs />, color: "#339933" },
  Express: { icon: <SiExpress />, color: "#000000" },
  MongoDB: { icon: <SiMongodb />, color: "#47A248" },
  "Tailwind CSS": { icon: <SiTailwindcss />, color: "#38B2AC" },
  tsParticles: { icon: <SiTypescript />, color: "#3178C6" },
  GitHub: { icon: <FaGithub />, color: "#181717" },
  Firebase: { icon: <SiFirebase />, color: "#FFCA28" },
};

const ProjectCard = ({ project }) => {
  const { name, description, technologies, repository, liveDemo, image } =
    project;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800 transition hover:scale-105 duration-300">
      <div className="relative">
        <img
          className="w-full h-48 object-cover"
          src={image}
          alt={`${name} snapshot`}
        />
        <div className="absolute inset-0 flex items-center justify-center gap-8 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <a
            href={liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white p-3 mx-2 bg-gray-500 rounded-full hover:bg-gray-900 transition duration-200"
            title="View Live Demo"
          >
            <FaEye size={20} />
          </a>
          <a
            href={repository}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white p-3 mx-2 bg-gray-500 rounded-full hover:bg-gray-900 transition duration-200"
            title="View Repository"
          >
            <FaGithub size={20} />
          </a>
        </div>
      </div>
      <div className="p-6 flex flex-col bg-zinc-50 h-full ">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {name}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4 ">
          {technologies.map((tech, index) => {
            const techInfo = technologyIcons[tech];
            return (
              <span
                key={index}
                className="flex items-center justify-between space-x-1 text-sm font-bold rounded-full px-2 py-1 bg-stone-200"
                style={{ color: techInfo?.color }}
              >
                {techInfo?.icon}
                <span>{tech}</span>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
