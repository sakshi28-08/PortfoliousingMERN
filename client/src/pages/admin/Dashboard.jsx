import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  FaProjectDiagram,
  FaTools,
  FaBriefcase,
  FaEnvelope,
} from "react-icons/fa";

function Dashboard() {
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  const API = "http://localhost:5000/api";
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);

      const projectRes = await axios
        .get(`${API}/projects`)
        .catch(() => ({ data: [] }));

      const skillRes = await axios
        .get(`${API}/skills`)
        .catch(() => ({ data: [] }));

      const experienceRes = await axios
        .get(`${API}/experience`)
        .catch(() => ({ data: [] }));

      const messageRes = await axios
        .get(`${API}/contact`)
        .catch(() => ({ data: [] }));

      setProjects(
        Array.isArray(projectRes.data)
          ? projectRes.data
          : projectRes.data.data || []
      );

      setSkills(
        Array.isArray(skillRes.data)
          ? skillRes.data
          : skillRes.data.data || []
      );

      setExperience(
        Array.isArray(experienceRes.data)
          ? experienceRes.data
          : experienceRes.data.data || []
      );

      setMessages(
        Array.isArray(messageRes.data)
          ? messageRes.data
          : messageRes.data.data || []
      );
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const cards = [
    {
      title: "Projects",
      count: projects.length,
      icon: <FaProjectDiagram size={28} />,
      color: "from-cyan-500 to-blue-600",
    },
    {
      title: "Skills",
      count: skills.length,
      icon: <FaTools size={28} />,
      color: "from-purple-500 to-pink-600",
    },
    {
      title: "Experience",
      count: experience.length,
      icon: <FaBriefcase size={28} />,
      color: "from-green-500 to-emerald-600",
    },
    {
      title: "Messages",
      count: messages.length,
      icon: <FaEnvelope size={28} />,
      color: "from-orange-500 to-red-600",
    },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white p-6 md:p-10">
      
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-5xl font-bold">
          Admin Dashboard
        </h1>

        <p className="text-slate-400 mt-3">
          Welcome back Sakshi 👋
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`bg-gradient-to-r ${card.color}
            rounded-3xl p-6 shadow-lg
            hover:scale-105 transition duration-300`}
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-white/80">
                  {card.title}
                </p>

                <h2 className="text-4xl font-bold mt-2">
                  {card.count}
                </h2>
              </div>

              {card.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-4 gap-4 mt-10">
        <button
          onClick={() => navigate("/admin/projects")}
          className="bg-cyan-600 hover:bg-cyan-700 p-4 rounded-2xl font-semibold transition"
        >
          Add Project
        </button>

        <button
          onClick={() => navigate("/admin/skills")}
          className="bg-purple-600 hover:bg-purple-700 p-4 rounded-2xl font-semibold transition"
        >
          Add Skill
        </button>

        <button
          onClick={() => navigate("/admin/experience")}
          className="bg-green-600 hover:bg-green-700 p-4 rounded-2xl font-semibold transition"
        >
          Add Experience
        </button>

        <button
          onClick={() => navigate("/admin/messages")}
          className="bg-orange-600 hover:bg-orange-700 p-4 rounded-2xl font-semibold transition"
        >
          View Messages
        </button>
      </div>

      {/* Recent Projects & Messages */}
      <div className="mt-12 grid lg:grid-cols-2 gap-6">

        {/* Projects */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
          <h2 className="text-2xl font-semibold mb-5">
            Recent Projects
          </h2>

          <div className="space-y-4">
            {projects.length === 0 ? (
              <p className="text-slate-400">
                No projects found
              </p>
            ) : (
              projects.slice(0, 5).map((project) => (
                <div
                  key={project._id}
                  className="bg-slate-800 p-4 rounded-xl"
                >
                  <h3 className="font-semibold text-lg">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 text-sm mt-2">
                    {project.description?.slice(0, 80)}
                    ...
                  </p>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Messages */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-2xl font-semibold">
              Recent Messages
            </h2>

            <button
              onClick={() =>
                navigate("/admin/messages")
              }
              className="bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-xl text-sm"
            >
              View All
            </button>
          </div>

          <div className="space-y-4">
            {messages.length === 0 ? (
              <p className="text-slate-400">
                No messages found
              </p>
            ) : (
              messages.slice(0, 5).map((msg) => (
                <div
                  key={msg._id}
                  className="bg-slate-800 p-4 rounded-xl"
                >
                  <h3 className="font-semibold text-cyan-400">
                    {msg.name}
                  </h3>

                  <p className="text-slate-400 text-sm">
                    {msg.email}
                  </p>

                  <p className="text-slate-300 text-sm mt-2">
                    {msg.message?.slice(0, 80)}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Recent Skills */}
      <div className="mt-12 bg-slate-900 border border-slate-800 rounded-3xl p-6">
        <h2 className="text-2xl font-semibold mb-6">
          Recent Skills
        </h2>

        <div className="flex flex-wrap gap-3">
          {skills.length === 0 ? (
            <p className="text-slate-400">
              No skills added
            </p>
          ) : (
            skills.slice(0, 10).map((skill) => (
              <span
                key={skill._id}
                className="bg-slate-800 px-4 py-2 rounded-full border border-slate-700 text-cyan-400"
              >
                {skill.name}
              </span>
            ))
          )}
        </div>
      </div>

      {/* Summary */}
      <div className="mt-12 bg-slate-900 border border-slate-800 rounded-3xl p-8">
        <h2 className="text-2xl font-semibold mb-6">
          Portfolio Summary
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-800 rounded-2xl p-6">
            <h3 className="text-slate-400">
              Skills Added
            </h3>
            <p className="text-3xl font-bold mt-2">
              {skills.length}
            </p>
          </div>

          <div className="bg-slate-800 rounded-2xl p-6">
            <h3 className="text-slate-400">
              Projects Added
            </h3>
            <p className="text-3xl font-bold mt-2">
              {projects.length}
            </p>
          </div>

          <div className="bg-slate-800 rounded-2xl p-6">
            <h3 className="text-slate-400">
              Experience Added
            </h3>
            <p className="text-3xl font-bold mt-2">
              {experience.length}
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Dashboard;