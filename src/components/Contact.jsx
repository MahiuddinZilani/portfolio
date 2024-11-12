import React from "react";

function Contact() {
  return (
    <section className="py-20 px-8 bg-gray-900 text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Contact Me</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-gray-800 text-white"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-gray-800 text-white"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 rounded-lg bg-gray-800 text-white"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 bg-indigo-500 text-white rounded-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
