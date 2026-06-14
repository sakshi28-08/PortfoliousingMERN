import { FaReact, FaLaptopCode, FaBriefcase } from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-slate-950 to-black text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Get to know more about my journey, experience and
            passion for web development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div>

            <h3 className="text-3xl font-semibold mb-6">
              Frontend Developer & MERN Stack Enthusiast
            </h3>

            <p className="text-gray-300 leading-8 mb-6">
              Hi, I'm <span className="text-cyan-400">Sakshi Ojha</span>,
              a passionate Frontend Developer with experience
              building responsive and user-friendly web applications
              using React.js, Next.js, JavaScript, Tailwind CSS
              and Bootstrap.
            </p>

            <p className="text-gray-300 leading-8 mb-6">
              I started my professional journey as a Frontend
              Developer and worked on real-world projects where
              I developed modern UI interfaces, reusable
              components and responsive designs.
            </p>

            <p className="text-gray-300 leading-8">
              Along with frontend development, I have basic
              knowledge of backend technologies in the MERN
              Stack and continuously improve my skills through
              hands-on projects and learning.
            </p>

          </div>

          {/* Right Side Cards */}
          <div className="grid gap-6">

            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-cyan-400 transition">
              <FaBriefcase className="text-4xl text-cyan-400 mb-4" />
              <h4 className="text-xl font-semibold mb-2">
                Experience
              </h4>
              <p className="text-gray-400">
                2+ years of experience working on React.js,
                Next.js and modern frontend technologies.
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-cyan-400 transition">
              <FaLaptopCode className="text-4xl text-cyan-400 mb-4" />
              <h4 className="text-xl font-semibold mb-2">
                Projects
              </h4>
              <p className="text-gray-400">
                Built responsive websites, landing pages,
                portfolios, dashboards and business websites.
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-cyan-400 transition">
              <FaReact className="text-4xl text-cyan-400 mb-4" />
              <h4 className="text-xl font-semibold mb-2">
                Technologies
              </h4>
              <p className="text-gray-400">
                React.js, Next.js, JavaScript, Tailwind CSS,
                Bootstrap, HTML, CSS and basic MERN Stack.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;