import axios from "axios";
import { useState } from "react";
const API_URL = import.meta.env.VITE_API_URL;
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await axios.post(`${API_URL}/api/contact`, formData);

      alert(res.data.message);

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      alert("Something went wrong!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Contact <span className="text-cyan-400">Me</span>
          </h2>

          <p className="text-gray-400 mt-4">
            Have a project in mind? Let's connect.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Side */}
          <div>
            <h3 className="text-3xl font-semibold mb-8">Get In Touch</h3>

            <div className="space-y-6">
              <div className="flex items-center gap-4 bg-slate-900 p-5 rounded-xl">
                <FaEnvelope className="text-cyan-400 text-2xl" />
                <div>
                  <h4>Email</h4>
                  <p className="text-gray-400">jsakshi058@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-slate-900 p-5 rounded-xl">
                <FaPhone className="text-cyan-400 text-2xl" />
                <div>
                  <h4>Phone</h4>
                  <p className="text-gray-400">+91-8756730327</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-5 mt-8">
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noreferrer"
                className="text-3xl hover:text-cyan-400 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noreferrer"
                className="text-3xl hover:text-cyan-400 transition"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Right Side Form */}
          <form
            onSubmit={submitHandler}
            className="bg-slate-900 p-8 rounded-2xl border border-slate-800"
          >
            <div className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="
                  w-full p-4 rounded-xl
                  bg-slate-800 text-white
                  outline-none
                  border border-slate-700
                  focus:border-cyan-400
                "
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="
                  w-full p-4 rounded-xl
                  bg-slate-800 text-white
                  outline-none
                  border border-slate-700
                  focus:border-cyan-400
                "
              />

              <textarea
                rows="6"
                name="message"
                placeholder="Your Message"
                required
                value={formData.message}
                onChange={handleChange}
                className="
                  w-full p-4 rounded-xl
                  bg-slate-800 text-white
                  outline-none
                  border border-slate-700
                  focus:border-cyan-400
                "
              />

              <button
                type="submit"
                disabled={loading}
                className="
                  w-full
                  bg-cyan-500
                  hover:bg-cyan-600
                  py-4
                  rounded-xl
                  font-semibold
                  transition
                "
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
