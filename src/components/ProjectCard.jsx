import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";

const ProjectCard = ({ project }) => {
  const { name, description, technologies, repository, liveDemo, image } =
    project;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800 transform transition hover:scale-105 duration-300">
      <div className="relative">
        <img
          className="w-full h-48 object-cover"
          src={image}
          alt={`${name} snapshot`}
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <a
            href={liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white p-3 mx-2 bg-blue-600 rounded-full hover:bg-blue-700 transition duration-200"
            title="View Live Demo"
          >
            <FaEye size={20} />
          </a>
          <a
            href={repository}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white p-3 mx-2 bg-gray-800 rounded-full hover:bg-gray-900 transition duration-200"
            title="View Repository"
          >
            <FaGithub size={20} />
          </a>
        </div>
      </div>
      <div className="p-6 flex flex-col  ">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {name}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-700 rounded-full px-2 py-1"
            >
              {tech}
            </span>
          ))}
        </div>
        {/* <button className="w-full flex-1 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded transition duration-200">
          More Details
        </button> */}
      </div>
    </div>
  );
};

export default ProjectCard;
