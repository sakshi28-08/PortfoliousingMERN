// import { FaExternalLinkAlt } from "react-icons/fa";

// function Projects() {
//   const projects = [
//     {
//       title: "ISGPB Website",
//       description:
//         "Developed a modern and fully responsive website for the Indian Society of Genetics and Plant Breeding. Ensured cross-device compatibility and optimized loading performance.",
//       tech: "React.js, Tailwind CSS",
//       link: "https://www.isgpb.org/",
//     },
//     {
//       title: "Get Your Quote - Dewar Plumbers",
//       description:
//         "Created a service quotation platform enabling users to request custom quotes online with dynamic form handling and responsive UI.",
//       tech: "React.js, Tailwind CSS",
//       link: "https://getyourquote.dewarplumbers.ie/",
//     },
//     {
//       title: "Journal System (Open Journal Cloud)",
//       description:
//         "Developed a journal management platform for academic publications with a focus on usability and intuitive navigation.",
//       tech: "React.js",
//       link: "https://classic-theme.openjournalcloud.com/",
//     },
//     {
//       title: "Indian Academy of Horticultural Science",
//       description:
//         "Built a dynamic homepage with live CSV data integration, responsive image carousel, animations and smooth transitions.",
//       tech: "React.js, Tailwind CSS, CSV Parsing",
//       link: "https://iahs.org.in/",
//     },
//   ];

//   return (
//     <section
//       id="projects"
//       className="py-24 bg-gradient-to-b from-black to-slate-950 text-white"
//     >
//       <div className="max-w-7xl mx-auto px-6">

//         <div className="text-center mb-16">
//           <h2 className="text-5xl font-bold">
//             My <span className="text-cyan-400">Projects</span>
//           </h2>

//           <p className="text-gray-400 mt-4">
//             Some of the projects I have worked on professionally.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-8">

//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="
//                 bg-slate-900
//                 border border-slate-800
//                 rounded-2xl
//                 p-8
//                 hover:border-cyan-400
//                 hover:-translate-y-2
//                 transition-all duration-300
//               "
//             >
//               <h3 className="text-2xl font-bold mb-4 text-cyan-400">
//                 {project.title}
//               </h3>

//               <p className="text-gray-300 mb-4 leading-7">
//                 {project.description}
//               </p>

//               <div className="mb-6">
//                 <span className="text-sm text-cyan-300">
//                   Tech Stack:
//                 </span>
//                 <p className="text-gray-400">
//                   {project.tech}
//                 </p>
//               </div>

//               <a
//                 href={project.link}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="
//                   inline-flex items-center gap-2
//                   bg-cyan-500 hover:bg-cyan-600
//                   px-5 py-3 rounded-xl
//                   transition
//                 "
//               >
//                 View Project
//                 <FaExternalLinkAlt />
//               </a>
//             </div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// }

// export default Projects;
import { useEffect, useState } from "react";
import axios from "axios";
import { FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/projects"
        );

        setProjects(res.data);
      } catch (error) {
        console.log("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-b from-black to-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            My <span className="text-cyan-400">Projects</span>
          </h2>

          <p className="text-gray-400 mt-4">
            Some of the projects I have worked on professionally.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project._id}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">
                {project.title}
              </h3>

              <p className="text-gray-300 mb-4 leading-7">
                {project.description}
              </p>

              <div className="mb-6">
                <span className="text-sm text-cyan-300">
                  Tech Stack:
                </span>

                <p className="text-gray-400">
                  {Array.isArray(project.technologies)
                    ? project.technologies.join(", ")
                    : project.technologies}
                </p>
              </div>

              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 px-5 py-3 rounded-xl transition"
              >
                View Project
                <FaExternalLinkAlt />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;