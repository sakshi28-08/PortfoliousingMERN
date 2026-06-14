import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import profileImg from "../assets/portfolioimage.jpeg";
import resumePdf from "../assets/Document/SakshiUpdatedResumeMay-1.pdf";

function Hero() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="text-cyan-400 font-medium tracking-wider">
              👋 HELLO, I'M
            </span>

            <h1 className="text-5xl md:text-7xl font-bold mt-4 leading-tight">
              Sakshi
              <span className="text-cyan-400"> Ojha</span>
            </h1>

            <h2 className="text-2xl md:text-4xl mt-5 text-gray-300">
              Frontend Developer &
              <span className="text-cyan-400"> MERN Stack Developer</span>
            </h2>

            <p className="text-gray-400 mt-6 max-w-xl leading-relaxed">
              Passionate Frontend Developer with experience in React.js,
              Next.js, JavaScript, Tailwind CSS and MERN Stack. I create
              responsive, modern and user-friendly web applications.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href={resumePdf}
                download="Sakshi_Ojha_Resume.pdf"
                className="bg-cyan-500 hover:bg-cyan-600 px-7 py-3 rounded-xl flex items-center gap-2 transition"
              >
                <FaDownload />
                Download Resume
              </a>

              <a
                href="#contact"
                className="border border-cyan-500 hover:bg-cyan-500 px-7 py-3 rounded-xl transition"
              >
                Contact Me
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-5 mt-8">
              <a
                href="https://github.com/sakshi28-08"
                target="_blank"
                rel="noreferrer"
                className="text-3xl hover:text-cyan-400 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/sakshi-ojha-97b23a212?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noreferrer"
                className="text-3xl hover:text-cyan-400 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:sakshi@example.com"
                className="text-3xl hover:text-cyan-400 transition"
              >
                <MdEmail />
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-cyan-500 rounded-full blur-3xl opacity-30"></div>

              <img
                src={profileImg}
                alt="Sakshi Ojha"
                className="relative w-80 h-80 md:w-[420px] md:h-[420px]
  object-cover rounded-full border-4 border-cyan-400
  shadow-[0_0_50px_rgba(6,182,212,0.6)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
