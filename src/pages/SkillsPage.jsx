import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGit,
  FaGithub,
  FaDatabase,
  FaWindows,
  FaLinux,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiBootstrap,
  SiNextdotjs,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiOracle,
  SiCplusplus,
} from "react-icons/si";
import { DiJava, DiJavascript1, DiPython, DiNodejsSmall } from "react-icons/di";

const SkillsPage = () => {
  const skills = [
    {
      category: "Programming Languages",
      items: [
        { name: "C", icon: <SiCplusplus /> },
        { name: "C++", icon: <SiCplusplus /> },
        { name: "Java", icon: <DiJava /> },
        { name: "Python", icon: <DiPython /> },
        { name: "JavaScript", icon: <DiJavascript1 /> },
        { name: "TypeScript", icon: <DiNodejsSmall /> },
      ],
    },
    {
      category: "Frontend",
      items: [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "Tailwind", icon: <SiTailwindcss /> },
        { name: "Bootstrap", icon: <SiBootstrap /> },
        { name: "React", icon: <FaReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express", icon: <FaNodeJs /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
      ],
    },
    {
      category: "Database",
      items: [
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "MS Access", icon: <FaDatabase /> },
        { name: "Oracle", icon: <SiOracle /> },
      ],
    },
    {
      category: "Tools",
      items: [
        { name: "Git", icon: <FaGit /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "Vercel", icon: <SiNextdotjs /> },
        { name: "Netlify", icon: <FaReact /> },
        { name: "Surge", icon: <FaReact /> },
        { name: "Firebase", icon: <SiFirebase /> },
      ],
    },
    {
      category: "Operating Systems",
      items: [
        { name: "Windows", icon: <FaWindows /> },
        { name: "Linux", icon: <FaLinux /> },
      ],
    },
  ];

  return (
    <div className="container mx-auto my-28 p-8">
      <h1 className="text-3xl font-bold text-center mb-6">My Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skillGroup, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 dark:bg-gray-800"
          >
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
              {skillGroup.category}
            </h2>
            <ul className="space-y-2">
              {skillGroup.items.map((skill, idx) => (
                <li
                  key={idx}
                  className="flex items-center text-gray-700 dark:text-gray-300"
                >
                  <div className="text-2xl text-indigo-500 mr-3">
                    {skill.icon}
                  </div>
                  <span className="text-lg">{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;
