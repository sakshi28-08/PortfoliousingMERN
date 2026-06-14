import { useEffect, useState } from "react";
import axios from "axios";

function Experience() {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/experience"
        );

        setExperiences(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchExperiences();
  }, []);

  return (
    <section
      id="experience"
      className="py-24 bg-black text-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Work <span className="text-cyan-400">Experience</span>
          </h2>

          <p className="text-gray-400 mt-4">
            My professional journey and experience.
          </p>
        </div>

        <div className="space-y-8">

          {experiences.map((exp) => (
            <div
              key={exp._id}
              className="
                bg-slate-900
                border border-slate-800
                p-8
                rounded-2xl
                hover:border-cyan-400
                transition
              "
            >
              <h3 className="text-2xl font-bold text-cyan-400">
                {exp.role}
              </h3>

              <h4 className="text-lg mt-2">
                {exp.company}
              </h4>

              <p className="text-gray-400 mt-2">
                {exp.startDate} - {exp.endDate}
              </p>

              <p className="text-gray-300 mt-4">
                {exp.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;