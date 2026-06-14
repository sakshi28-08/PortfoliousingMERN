// import {
//   FaHtml5,
//   FaCss3Alt,
//   FaJs,
//   FaReact,
//   FaNodeJs,
//   FaBootstrap,
//   FaGitAlt,
// } from "react-icons/fa";

// import {
//   SiNextdotjs,
//   SiTailwindcss,
//   SiExpress,
//   SiMongodb,
// } from "react-icons/si";

// function Skills() {
//   const skills = [
//     { name: "HTML5", icon: <FaHtml5 size={45} /> },
//     { name: "CSS3", icon: <FaCss3Alt size={45} /> },
//     { name: "JavaScript", icon: <FaJs size={45} /> },
//     { name: "React.js", icon: <FaReact size={45} /> },
//     { name: "Next.js", icon: <SiNextdotjs size={45} /> },
//     { name: "Tailwind CSS", icon: <SiTailwindcss size={45} /> },
//     { name: "Bootstrap", icon: <FaBootstrap size={45} /> },
//     { name: "Node.js", icon: <FaNodeJs size={45} /> },
//     { name: "Express.js", icon: <SiExpress size={45} /> },
//     { name: "MongoDB", icon: <SiMongodb size={45} /> },
//     { name: "Git", icon: <FaGitAlt size={45} /> },
//   ];

//   return (
//     <section
//       id="skills"
//       className="py-24 bg-black text-white"
//     >
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Heading */}
//         <div className="text-center mb-16">
//           <h2 className="text-5xl font-bold">
//             My <span className="text-cyan-400">Skills</span>
//           </h2>

//           <p className="text-gray-400 mt-4">
//             Technologies and tools I use to build modern web applications.
//           </p>
//         </div>

//         {/* Skills Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

//           {skills.map((skill) => (
//             <div
//               key={skill.name}
//               className="
//                 bg-slate-900
//                 border border-slate-800
//                 rounded-2xl
//                 p-8
//                 text-center
//                 hover:border-cyan-400
//                 hover:-translate-y-2
//                 hover:shadow-[0_0_25px_rgba(34,211,238,0.3)]
//                 transition-all
//                 duration-300
//               "
//             >
//               <div className="flex justify-center text-cyan-400 mb-4">
//                 {skill.icon}
//               </div>

//               <h3 className="text-lg font-semibold">
//                 {skill.name}
//               </h3>
//             </div>
//           ))}

//         </div>

//       </div>
//     </section>
//   );
// }

// export default Skills;
import { useEffect, useState } from "react";
import axios from "axios";

function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/skills"
        );

        setSkills(res.data);
      } catch (error) {
        console.log("Error fetching skills:", error);
      }
    };

    fetchSkills();
  }, []);

  return (
    <section
      id="skills"
      className="py-24 bg-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            My <span className="text-cyan-400">Skills</span>
          </h2>

          <p className="text-gray-400 mt-4">
            Technologies I work with.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.length > 0 ? (
            skills.map((skill) => (
              <div
                key={skill._id}
                className="
                  px-6 py-3
                  rounded-xl
                  bg-slate-900
                  border border-slate-800
                  hover:border-cyan-400
                  hover:-translate-y-1
                  transition-all duration-300
                "
              >
                {skill.name}
              </div>
            ))
          ) : (
            <p className="text-gray-400">
              No skills found.
            </p>
          )}
        </div>

      </div>
    </section>
  );
}

export default Skills;