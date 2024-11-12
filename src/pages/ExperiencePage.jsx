import { FaBuilding, FaCalendarAlt } from "react-icons/fa";

const experienceData = [
  {
    position: "Assistant Programmer",
    company:
      "ICT Division, Ministry of Posts, Telecommunications, and Information Technology",
    duration: "2023 - Present",
    location: "Dhaka, Bangladesh",
    responsibilities: [
      "Developed and maintained web applications to support governmental ICT projects.",
      "Enhanced database management for optimized performance.",
      "Collaborated on projects aimed at digitalizing various governmental processes.",
    ],
    companyLogo: "https://i.ibb.co.com/Fx33SYF/ict-division.jpg",
  },
  {
    position: "Departmental Head of IT",
    company: "PBS, Feni District",
    duration: "2021 - 2022",
    location: "Feni, Bangladesh",
    responsibilities: [
      "Designed electricity distribution line using GIS.",
      "Maintained the PBS billing system and led the procurement of IT hardware and software.",
      "Contributed to digitalization initiatives at PBS in Bangladesh.",
    ],
    companyLogo: "https://i.ibb.co.com/R6kSkJW/breb.png",
  },
];

const ExperiencePage = () => {
  return (
    <section className="bg-gray-200 dark:bg-gray-900 py-12 px-4">
      <h2 className="text-3xl text-center font-bold my-12 text-indigo-600 dark:text-indigo-400">
        Experience
      </h2>
      <div className="container flex flex-col lg:flex-row mx-auto gap-12">
        {experienceData.map((exp, index) => (
          <div key={index} className="">
            <div className="min-h-full bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl">
              <img
                src={exp.companyLogo}
                alt={`${exp.company} logo`}
                className="w-24 h-24 mb-4 rounded-full object-cover mx-auto"
              />
              <h3 className="text-xl font-semibold text-indigo-700 dark:text-indigo-400 mb-1 text-center">
                {exp.position}
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 font-medium mb-1 text-center">
                {exp.company}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 italic text-center mb-4">
                <FaCalendarAlt className="inline mr-1" /> {exp.duration}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 italic text-center mb-4">
                Location: {exp.location}
              </p>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-200">
                {exp.responsibilities.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperiencePage;
