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
        { name: "C", icon: <SiCplusplus color="#00599C" /> },
        { name: "C++", icon: <SiCplusplus color="#00599C" /> },
        { name: "Java", icon: <DiJava color="#007396" /> },
        { name: "Python", icon: <DiPython color="#3776AB" /> },
        { name: "JavaScript", icon: <DiJavascript1 color="#F7DF1E" /> },
        { name: "TypeScript", icon: <DiNodejsSmall color="#3178C6" /> },
      ],
    },
    {
      category: "Frontend",
      items: [
        { name: "HTML", icon: <FaHtml5 color="#E34F26" /> },
        { name: "CSS", icon: <FaCss3Alt color="#1572B6" /> },
        { name: "Tailwind", icon: <SiTailwindcss color="#38B2AC" /> },
        { name: "Bootstrap", icon: <SiBootstrap color="#7952B3" /> },
        { name: "React", icon: <FaReact color="#61DAFB" /> },
        { name: "Next.js", icon: <SiNextdotjs color="#000000" /> },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
        { name: "Express", icon: <FaNodeJs color="#000000" /> },
        { name: "Next.js", icon: <SiNextdotjs color="#000000" /> },
      ],
    },
    {
      category: "Database",
      items: [
        { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
        { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
        { name: "MS Access", icon: <FaDatabase color="#A4373A" /> },
        { name: "Oracle", icon: <SiOracle color="#F80000" /> },
      ],
    },
    {
      category: "Tools",
      items: [
        { name: "Git", icon: <FaGit color="#F05032" /> },
        { name: "GitHub", icon: <FaGithub color="#181717" /> },
        { name: "Vercel", icon: <SiNextdotjs color="#000000" /> },
        { name: "Netlify", icon: <FaReact color="#00C7B7" /> },
        { name: "Surge", icon: <FaReact color="#40A9F3" /> },
        { name: "Firebase", icon: <SiFirebase color="#FFCA28" /> },
      ],
    },
    {
      category: "Operating Systems",
      items: [
        { name: "Windows", icon: <FaWindows color="#0078D6" /> },
        { name: "Linux", icon: <FaLinux color="#FCC624" /> },
      ],
    },
  ];

  return (
    <div className="container mx-auto p-8 my-28">
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
                  <div className="text-2xl mr-3">{skill.icon}</div>
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
