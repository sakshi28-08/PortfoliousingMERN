import { FaGithub, FaLinkedin } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6">

        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <a href="/" className="text-3xl font-bold">
            <span className="text-white">Sakshi</span>
            
          </a>

          {/* Menu */}
          <ul className="hidden md:flex items-center gap-10 text-gray-300 font-medium">

            <li>
              <a
                href="#about"
                className="hover:text-cyan-400 transition duration-300"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#skills"
                className="hover:text-cyan-400 transition duration-300"
              >
                Skills
              </a>
            </li>

            <li>
              <a
                href="#projects"
                className="hover:text-cyan-400 transition duration-300"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="hover:text-cyan-400 transition duration-300"
              >
                Contact
              </a>
            </li>

          </ul>

          {/* Right Side */}
          <div className="flex items-center gap-5">

            <a
              href="https://github.com/sakshi28-08"
              target="_blank"
              rel="noreferrer"
              className="
                w-10 h-10
                flex items-center justify-center
                rounded-full
                bg-slate-800
                hover:bg-cyan-500
                transition
              "
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/sakshi-ojha-97b23a212"
              target="_blank"
              rel="noreferrer"
              className="
                w-10 h-10
                flex items-center justify-center
                rounded-full
                bg-slate-800
                hover:bg-cyan-500
                transition
              "
            >
              <FaLinkedin />
            </a>

            <a
              href="#contact"
              className="
                hidden md:block
                bg-cyan-500
                hover:bg-cyan-600
                px-6 py-2.5
                rounded-full
                font-medium
                transition
                shadow-lg
              "
            >
              Hire Me
            </a>

          </div>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;