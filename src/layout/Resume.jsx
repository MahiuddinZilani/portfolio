const Resume = () => {
  return (
    <div className="container mx-auto p-8 max-w-screen-lg">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Mahiuddin Zilani</h1>
        <p className="text-lg">
          Full-Stack MERN Developer | IT Professional with Expertise in Modern
          Web Solutions and Digital Transformation
        </p>
        <div className="mt-4">
          <p>
            Email:{" "}
            <a href="mailto:zilani.cse.cou@gmail.com" className="text-blue-500">
              zilani.cse.cou@gmail.com
            </a>
          </p>
          <p>Phone: +880 01521448596</p>
          <p>Location: O. R. Nizam Road, Chattogram, Bangladesh</p>
          <p>Date of Birth: January 8, 1995</p>
        </div>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>

        <div className="mb-6">
          <h3 className="text-xl font-bold">Assistant Programmer</h3>
          <p className="italic">
            ICT Division, Ministry of Posts, Telecommunications & ICT,
            Bangladesh (01/2023 - Present)
          </p>
          <p>
            Contribute to developing, implementing, and maintaining software
            solutions supporting digital transformation initiatives under the
            ministry. Responsibilities include spreading ICT knowledge at the
            rural level, troubleshooting technical issues, enhancing system
            security, and participating in projects that advance national
            digital infrastructure and services.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-bold">Assistant General Manager (IT)</h3>
          <p className="italic">
            Bangladesh Rural Electrification Board (BREB) (09/2021 - 01/2023)
          </p>
          <p>
            Served as Head of IT, designing the electricity distribution line
            for the Feni district using GIS technology, maintaining the billing
            system, managing hardware and software procurement, and evaluating
            tenders. These contributions supported the digital transformation of
            BREB in Bangladesh.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>

        <div className="mb-4">
          <h3 className="text-xl font-bold">B.Sc. in Engineering</h3>
          <p className="italic">
            Comilla University, Computer Science and Engineering (2014 - 2019)
          </p>
          <p>Bangladesh</p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-bold">Higher Secondary Certificate</h3>
          <p className="italic">
            Chittagong Cantonment Public College, Science (2010 - 2012)
          </p>
          <p>Chattogram</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <p>
          React.js, Backend Development, TypeScript, JavaScript, Node.js,
          Express.js, Next.js, MongoDB, Linux, Tailwind CSS
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Languages</h2>
        <p>English: Advanced</p>
      </section>
    </div>
  );
};

export default Resume;
