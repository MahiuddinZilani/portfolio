// import { GoPin } from "react-icons/go";
import { SiPinboard } from "react-icons/si";
import "../App.css";

const educationData = [
  {
    institution: "Comilla University",
    institutionImage:
      "https://i.ibb.co.com/60M1Wnv/Logo-of-Comilla-University.png",
    degree: "B.Sc. in Engineering in CSE",
    duration: "2014-2019",
    result: "3.14 CGPA",
    board: "National University Board",
    description:
      "Focused on programming, problem solving, full-stack development, data structures, and algorithms.",
  },
  {
    institution: "Chittagong Cantonment Public College",
    institutionImage:
      "https://i.ibb.co.com/w4kn0K0/Chittagong-Cantonment-Public-College-seal.png",
    degree: "Higher Secondary Certificate",
    duration: "2010-2012",
    result: "4.50 GPA",
    board: "Chattogram Education Board",
    description: "Majored in Science, focusing on Mathematics and Physics.",
  },
  {
    institution: "Chakhmil High School",
    institutionImage: "https://i.ibb.co.com/WptSCB2/chakhmil-high-school.jpg",
    degree: "Secondary School Certificate",
    duration: "2010",
    result: "5.00 GPA",
    board: "Dinajpur Education Board",
    description: "Major in Science",
  },
];

const EducationPage = () => {
  return (
    <section className="bg-gray-200 dark:bg-gray-900 py-12 px-4">
      <h2 className="text-3xl text-center font-bold mb-8 text-indigo-600 dark:text-indigo-400">
        Education
      </h2>
      <div className="container mx-auto max-w-4xl relative before:absolute before:left-1/2 before:top-0 before:h-full before:w-1 before:bg-gray-300 dark:before:bg-gray-700">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className={`mb-8 flex ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            } items-center w-full`}
          >
            <div className="relative w-1/2">
              <div className="absolute w-10 h-10 bg-red-600 dark:bg-red-500 rounded-full -left-4 -top-4"></div>
              {/* <div
                className=" text-6xl -left-[8%] -top-[12%] z-20 text-red-600 bg-transparent"
                style={{
                  filter:
                    "drop-shadow(0 0 8px rgba(255, 0, 0, 0.8)) drop-shadow(0 0 24px rgba(255, 0, 0, 0.4))",
                  animation: "glow 1s infinite alternate",
                }}
              >
                <GoPin />
              </div> */}
              <div
                className="absolute text-5xl -left-[8%] -top-[6%] lg:-top-[12%] z-20 text-indigo-600"
                style={{
                  filter: `
                      drop-shadow(0 0 40px rgba(255, 0, 0, 0.9))
                      drop-shadow(0 0 80px rgba(0, 255, 0, 0.9))
                      drop-shadow(0 0 120px rgba(0, 0, 255, 0.9))
                    `,
                  animation: "multiColorGlow 2s infinite alternate",
                }}
              >
                <SiPinboard />
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl">
                <img
                  src={edu.institutionImage}
                  alt={`${edu.institution} logo`}
                  className="w-20 h-20 mb-4 rounded-full object-cover mx-auto"
                />
                <h3 className="text-xl font-semibold text-indigo-700 dark:text-indigo-400 mb-1 text-center">
                  {edu.degree}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 font-medium mb-1 text-center">
                  {edu.institution}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 italic text-center mb-4">
                  {edu.duration}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 italic text-center mb-4">
                  <span className="font-semibold">Board:</span> {edu.board}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 italic text-center mb-4">
                  <span className="font-semibold">Result:</span> {edu.result}
                </p>
                {/* <p className="text-gray-700 dark:text-gray-200 mt-2 text-center">
                  {edu.description}
                </p> */}
              </div>
            </div>
            <div className="flex-1"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationPage;
