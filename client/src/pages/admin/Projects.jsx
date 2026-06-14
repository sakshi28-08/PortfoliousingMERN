import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

import {
  FaFolderOpen,
  FaGithub,
  FaGlobe,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

function Projects() {
  const [projects, setProjects] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    github: "",
    live: "",
    image: "",
  });

  const [editId, setEditId] = useState(null);

  const API = "http://localhost:5000/api/projects";

  const fetchProjects = async () => {
    try {
      const res = await axios.get(API);
      setProjects(
        Array.isArray(res.data)
          ? res.data
          : res.data.data || []
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editId) {
        await axios.put(
          `${API}/${editId}`,
          formData
        );
      } else {
        await axios.post(
          API,
          formData
        );
      }

      setFormData({
        title: "",
        description: "",
        github: "",
        live: "",
        image: "",
      });

      setEditId(null);

      fetchProjects();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (project) => {
    setFormData({
      title: project.title || "",
      description:
        project.description || "",
      github: project.github || "",
      live: project.live || "",
      image: project.image || "",
    });

    setEditId(project._id);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleDelete = async (id) => {
    const confirmDelete =
      window.confirm(
        "Delete this project?"
      );

    if (!confirmDelete) return;

    try {
      await axios.delete(
        `${API}/${id}`
      );

      fetchProjects();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white p-6 md:p-10">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Projects Dashboard
          </h1>

          <p className="text-slate-400 mt-3 text-lg">
            Manage and showcase your
            portfolio projects
          </p>
        </div>

        {/* Form */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <FaFolderOpen
              size={28}
              className="text-cyan-400"
            />

            <h2 className="text-2xl font-bold">
              {editId
                ? "Update Project"
                : "Add New Project"}
            </h2>
          </div>

          <form
            onSubmit={handleSubmit}
            className="grid md:grid-cols-2 gap-5"
          >
            <input
              type="text"
              name="title"
              placeholder="Project Title"
              value={formData.title}
              onChange={handleChange}
              className="bg-slate-800/60 border border-slate-700 rounded-xl p-4 outline-none focus:border-cyan-400"
              required
            />

            <input
              type="text"
              name="image"
              placeholder="Image URL"
              value={formData.image}
              onChange={handleChange}
              className="bg-slate-800/60 border border-slate-700 rounded-xl p-4 outline-none focus:border-cyan-400"
              required
            />

            <input
              type="text"
              name="github"
              placeholder="Github URL"
              value={formData.github}
              onChange={handleChange}
              className="bg-slate-800/60 border border-slate-700 rounded-xl p-4 outline-none focus:border-cyan-400"
            />

            <input
              type="text"
              name="live"
              placeholder="Live Demo URL"
              value={formData.live}
              onChange={handleChange}
              className="bg-slate-800/60 border border-slate-700 rounded-xl p-4 outline-none focus:border-cyan-400"
            />

            <textarea
              rows="5"
              name="description"
              placeholder="Project Description"
              value={formData.description}
              onChange={handleChange}
              className="md:col-span-2 bg-slate-800/60 border border-slate-700 rounded-xl p-4 outline-none focus:border-cyan-400 resize-none"
              required
            />

            <button
              type="submit"
              className="md:col-span-2 py-4 rounded-xl font-bold text-lg bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 hover:scale-[1.02] transition-all duration-300"
            >
              {editId
                ? "Update Project"
                : "Add Project"}
            </button>
          </form>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-12">
          {projects.map(
            (project, index) => (
              <motion.div
                key={project._id}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay:
                    index * 0.08,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-500/40 transition-all duration-500"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={
                      project.image ||
                      "https://via.placeholder.com/500x300"
                    }
                    alt={
                      project.title
                    }
                    className="w-full h-56 object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                </div>

                <div className="p-6">
                  <h2 className="text-2xl font-bold">
                    {project.title}
                  </h2>

                  <p className="text-slate-400 mt-3 line-clamp-3">
                    {
                      project.description
                    }
                  </p>

                  <div className="flex gap-3 mt-5 flex-wrap">
                    {project.github && (
                      <a
                        href={
                          project.github
                        }
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-xl hover:bg-slate-700 transition"
                      >
                        <FaGithub />
                        Github
                      </a>
                    )}

                    {project.live && (
                      <a
                        href={
                          project.live
                        }
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 bg-cyan-500 px-4 py-2 rounded-xl hover:bg-cyan-400 transition"
                      >
                        <FaGlobe />
                        Live Demo
                      </a>
                    )}
                  </div>

                  <div className="flex gap-3 mt-6">
                    <button
                      onClick={() =>
                        handleEdit(
                          project
                        )
                      }
                      className="flex-1 py-3 rounded-xl bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30 transition"
                    >
                      <FaEdit className="mx-auto" />
                    </button>

                    <button
                      onClick={() =>
                        handleDelete(
                          project._id
                        )
                      }
                      className="flex-1 py-3 rounded-xl bg-red-500/20 text-red-400 hover:bg-red-500/30 transition"
                    >
                      <FaTrash className="mx-auto" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )
          )}
        </div>

        {projects.length === 0 && (
          <div className="text-center mt-20 text-slate-500 text-xl">
            No Projects Found
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;