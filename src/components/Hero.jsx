// import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Particle from "./Particle";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

const Hero = () => {
  return (
    <section
      id="tsparticles"
      className="bg-gray-900 text-white h-screen flex items-center justify-center z-10"
    >
      <Particle />
      <section className="px-10  bg-black">
        <div className="grid lg:grid-cols-3 items-center justify-items-center gap-5 ">
          <div className="order-1 lg:order-1 shadow-2xl lg:col-span-1">
            <img
              className="h-80 w-80 object-cover lg:w-[500px] lg:h-[500px] "
              src={"./ai-edition-self.png"}
              alt=""
            />
          </div>
          <div className="order-2 lg:order-2  flex flex-col justify-center lg:items-start text-center sm:text-left lg:col-span-2">
            <p className="text-4xl font-bold md:text-7xl  text-white ">
              This is <span className="text-orange-600">Mahiuddin Zilani</span>.
            </p>
            <p className="text-3xl  md:text-6xl text-white flex gap-3 justify-center items-center">
              <span>I am a </span>
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 leading-normal">
                <Typewriter
                  options={{
                    strings: [
                      "Full Stack Dev.",
                      "MERN Stack Dev.",
                      "Software Dev.",
                      "Web Designer.",
                      "Programmer.",
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 80,
                    delay: 75,
                  }}
                />
              </span>
            </p>
            <p className="mt-2 md:text-lg sm:text-sm  text-white ">
              Designer and Developer devoted to crafting beautiful web
              experiences focused on simplicity and purpose.
            </p>
            <div className="flex justify-center md:justify-start">
              <Link
                to={
                  "https://drive.google.com/file/d/1cxlx44BZSr201Zs3jhSxPTjnn9uyns7A/view?usp=sharing"
                }
                target="blank"
              >
                <button className="text-lg md:text-2xl bg-orange-600 text-black font-bold py-2 m-2 px-8 mt-10 hover:bg-zinc-800 hover:text-white rounded-full">
                  Resume
                </button>
              </Link>

              <Link
                to={"https://github.com/MahiuddinZilani"}
                className="flex gap-4 items-center"
                target="blank"
              >
                <button className="text-lg md:text-3xl bg-orange-600 text-black font-bold py-2 m-2 px-8 mt-10 hover:bg-zinc-800 hover:text-white rounded-full ">
                  <FaGithub />
                </button>
                {/* <span> Github</span> */}
              </Link>

              <Link
                to={"https://www.linkedin.com/in/mahiuddin-zilani-081a7628a/"}
                className="flex gap-0.5 items-center"
                target="blank"
              >
                <button className="text-lg md:text-3xl bg-orange-600 text-black font-bold py-2 m-2 px-8 mt-10 hover:bg-zinc-800 hover:text-white rounded-full ">
                  {/* <span> Linked</span> */}
                  <FaLinkedinIn className="" />
                </button>
              </Link>
            </div>

            {/* <SocialMedia /> */}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Hero;
