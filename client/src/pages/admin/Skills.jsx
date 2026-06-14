import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

import {
  Brain,
  Plus,
  Pencil,
  Trash2,
  Sparkles,
} from "lucide-react";

function Skills() {
  const [skills, setSkills] = useState([]);
  const [name, setName] = useState("");
  const [editId, setEditId] = useState(null);

  const API = "http://localhost:5000/api/skills";

  const fetchSkills = async () => {
    try {
      const res = await axios.get(API);
      setSkills(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      if (editId) {
        await axios.put(`${API}/${editId}`, {
          name,
        });
      } else {
        await axios.post(API, {
          name,
        });
      }

      setName("");
      setEditId(null);

      fetchSkills();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteSkill = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this skill?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(`${API}/${id}`);
      fetchSkills();
    } catch (error) {
      console.log(error);
    }
  };

  const editSkill = (skill) => {
    setName(skill.name);
    setEditId(skill._id);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white p-6 md:p-10">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Skills Dashboard
          </h1>

          <p className="text-slate-400 mt-3">
            Manage your professional skills
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400">
                  Total Skills
                </p>

                <h2 className="text-4xl font-bold mt-2">
                  {skills.length}
                </h2>
              </div>

              <Brain
                size={40}
                className="text-cyan-400"
              />
            </div>
          </div>
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
          className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 mb-10"
        >
          <div className="flex items-center gap-3 mb-6">
            <Plus className="text-cyan-400" />

            <h2 className="text-2xl font-bold">
              {editId
                ? "Update Skill"
                : "Add New Skill"}
            </h2>
          </div>

          <form
            onSubmit={submitHandler}
            className="flex flex-col md:flex-row gap-4"
          >
            <input
              type="text"
              placeholder="Enter Skill Name"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              className="flex-1 bg-slate-800/60 border border-slate-700 rounded-xl p-4 outline-none focus:border-cyan-400"
              required
            />

            <button
              className="px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 hover:scale-105 transition duration-300"
            >
              {editId
                ? "Update Skill"
                : "Add Skill"}
            </button>
          </form>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill._id}
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: index * 0.05,
              }}
              whileHover={{
                y: -8,
              }}
              className="group backdrop-blur-xl bg-white/5 border border-white/10 hover:border-cyan-500/40 rounded-3xl p-6 transition-all duration-500"
            >
              <div className="flex justify-between items-start">
                <div>
                  <Sparkles
                    className="text-cyan-400 mb-3"
                    size={22}
                  />

                  <h2 className="text-xl font-semibold">
                    {skill.name}
                  </h2>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={() =>
                    editSkill(skill)
                  }
                  className="flex-1 py-3 rounded-xl bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30 transition"
                >
                  <Pencil
                    size={18}
                    className="mx-auto"
                  />
                </button>

                <button
                  onClick={() =>
                    deleteSkill(skill._id)
                  }
                  className="flex-1 py-3 rounded-xl bg-red-500/20 text-red-400 hover:bg-red-500/30 transition"
                >
                  <Trash2
                    size={18}
                    className="mx-auto"
                  />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {skills.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            No Skills Added Yet
          </div>
        )}
      </div>
    </div>
  );
}

export default Skills;