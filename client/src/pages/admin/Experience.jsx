import { useEffect, useState } from "react";
import axios from "axios";
import {
  Briefcase,
  Building2,
  Calendar,
  FileText,
  Pencil,
  Trash2,
  Plus,
} from "lucide-react";
import { motion } from "framer-motion";

function Experience() {
  const [experience, setExperience] = useState([]);

  const [formData, setFormData] = useState({
    company: "",
    role: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const [editId, setEditId] = useState(null);

  const API = "http://localhost:5000/api/experience";

  const fetchExperience = async () => {
    const res = await axios.get(API);
    setExperience(res.data);
  };

  useEffect(() => {
    fetchExperience();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (editId) {
      await axios.put(`${API}/${editId}`, formData);
    } else {
      await axios.post(API, formData);
    }

    setEditId(null);

    setFormData({
      company: "",
      role: "",
      startDate: "",
      endDate: "",
      description: "",
    });

    fetchExperience();
  };

  const deleteExperience = async (id) => {
    await axios.delete(`${API}/${id}`);
    fetchExperience();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white p-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-5xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Experience Dashboard
          </h1>

          <p className="text-slate-400 mt-2">
            Manage your professional journey
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 shadow-2xl">

              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Plus className="text-cyan-400" />
                {editId ? "Update Experience" : "Add Experience"}
              </h2>

              <form
                onSubmit={submitHandler}
                className="space-y-4"
              >
                <div className="relative">
                  <Building2
                    className="absolute left-3 top-3 text-slate-400"
                    size={18}
                  />

                  <input
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-slate-800/50 border border-slate-700 pl-10 p-3 rounded-xl outline-none focus:border-cyan-400"
                  />
                </div>

                <div className="relative">
                  <Briefcase
                    className="absolute left-3 top-3 text-slate-400"
                    size={18}
                  />

                  <input
                    name="role"
                    placeholder="Job Role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full bg-slate-800/50 border border-slate-700 pl-10 p-3 rounded-xl outline-none focus:border-cyan-400"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">

                  <div className="relative">
                    <Calendar
                      className="absolute left-3 top-3 text-slate-400"
                      size={18}
                    />

                    <input
                      type="date"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleChange}
                      className="w-full bg-slate-800/50 border border-slate-700 pl-10 p-3 rounded-xl"
                    />
                  </div>

                  <div className="relative">
                    <Calendar
                      className="absolute left-3 top-3 text-slate-400"
                      size={18}
                    />

                    <input
                      type="date"
                      name="endDate"
                      value={formData.endDate}
                      onChange={handleChange}
                      className="w-full bg-slate-800/50 border border-slate-700 pl-10 p-3 rounded-xl"
                    />
                  </div>
                </div>

                <div className="relative">
                  <FileText
                    className="absolute left-3 top-3 text-slate-400"
                    size={18}
                  />

                  <textarea
                    rows="5"
                    name="description"
                    placeholder="Describe your responsibilities..."
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full bg-slate-800/50 border border-slate-700 pl-10 p-3 rounded-xl resize-none"
                  />
                </div>

                <button
                  className="w-full py-3 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transition-all duration-300"
                >
                  {editId
                    ? "Update Experience"
                    : "Add Experience"}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Experience List */}
          <div className="lg:col-span-2 space-y-6">
            {experience.map((item, index) => (
              <motion.div
                key={item._id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-cyan-500/40 transition-all duration-300"
              >
                <div className="flex justify-between items-start">

                  <div>
                    <h2 className="text-2xl font-bold text-cyan-400">
                      {item.company}
                    </h2>

                    <p className="text-lg text-slate-300 mt-1">
                      {item.role}
                    </p>

                    <p className="text-sm text-slate-500 mt-2">
                      {item.startDate} → {item.endDate}
                    </p>

                    <p className="text-slate-400 mt-4 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex gap-3">

                    <button
                      onClick={() => {
                        setFormData(item);
                        setEditId(item._id);
                      }}
                      className="p-3 rounded-xl bg-yellow-500/20 text-yellow-400 hover:scale-110 transition"
                    >
                      <Pencil size={18} />
                    </button>

                    <button
                      onClick={() =>
                        deleteExperience(item._id)
                      }
                      className="p-3 rounded-xl bg-red-500/20 text-red-400 hover:scale-110 transition"
                    >
                      <Trash2 size={18} />
                    </button>

                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Experience;