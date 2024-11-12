import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaDribbble,
  FaInstagram,
  FaYoutube,
  FaMedium,
  FaStackOverflow,
  FaBehance,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { FaTelegram, FaWhatsapp, FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/zilani.cse.cou/",
    icon: <FaFacebook className="text-blue-600" />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mahiuddin-zilani-081a7628a/",
    icon: <FaLinkedin className="text-blue-700" />,
  },
  {
    name: "X",
    url: "https://twitter.com/yourprofile",
    icon: <FaXTwitter className="text-black-500" />,
  },
  {
    name: "GitHub",
    url: "https://github.com/MahiuddinZilani",
    icon: <FaGithub className="text-gray-800" />,
  },
  {
    name: "Whatsapp",
    url: "https://wa.me/01521448596",
    icon: <FaWhatsapp className="text-green-600" />,
  },
  {
    name: "Instagram",
    url: "https://instagram.com/yourprofile",
    icon: <FaInstagram className="text-pink-500" />,
  },
  {
    name: "YouTube",
    url: "https://youtube.com/yourchannel",
    icon: <FaYoutube className="text-red-600" />,
  },
  {
    name: "Telegram",
    url: "https://t.me/zilani_cse",
    icon: <FaMedium className="text-black" />,
    icon: <FaTelegram className="text-blue-600" />,
  },
  {
    name: "Stack Overflow",
    url: "https://stackoverflow.com/users/yourprofile",
    icon: <FaStackOverflow className="text-orange-500" />,
  },
];

const professionalLinks = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourprofile",
    icon: <FaLinkedin className="text-blue-700" />,
  },
  {
    name: "GitHub",
    url: "https://github.com/yourprofile",
    icon: <FaGithub className="text-gray-800" />,
  },
  {
    name: "Stack Overflow",
    url: "https://stackoverflow.com/users/yourprofile",
    icon: <FaStackOverflow className="text-orange-500" />,
  },
  {
    name: "Medium",
    url: "https://medium.com/@yourprofile",
    icon: <FaMedium className="text-black" />,
  },
  {
    name: "Behance",
    url: "https://behance.net/yourprofile",
    icon: <FaBehance className="text-blue-600" />,
  },
];

const ContactPage = () => {
  return (
    <section className="bg-gray-200 dark:bg-gray-900 py-12 px-4">
      <h2 className="text-3xl text-center font-bold mb-8 text-indigo-600 dark:text-indigo-400">
        Contact Me
      </h2>

      <div className="container mx-auto max-w-2xl">
        {/* Email and Phone */}
        <div className="flex justify-center mb-6">
          <a
            href="mailto:youremail@example.com"
            className="flex items-center text-lg font-semibold text-gray-800 dark:text-gray-200 mx-4"
          >
            <FaEnvelope className="mr-2 " />{" "}
            <span className="text-indigo-600">zilani.cse.cou@gmail.com</span>
          </a>
          <a
            href="tel:+8801521-448596"
            className="flex items-center text-lg font-semibold text-gray-800 dark:text-gray-200 mx-4"
          >
            <FaPhone className="mr-2" />{" "}
            <span className="text-gray-600">+88 01521-448596</span>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center mb-8 space-x-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-200 text-2xl"
              title={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <form className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg mx-auto">
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-200"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-200"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
              Message Type
            </label>
            <select
              className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-200"
              required
            >
              <option>Feedback</option>
              <option>Contact</option>
              <option>Suggestion</option>
              <option>Recommendation</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
              Message
            </label>
            <textarea
              className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-200"
              rows="4"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-bold py-3 rounded hover:bg-indigo-700 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
