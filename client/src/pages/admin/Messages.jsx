import { useEffect, useState } from "react";
import axios from "axios";
import { FaTrash } from "react-icons/fa";

function Messages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  const API = "http://localhost:5000/api/contact";

  const fetchMessages = async () => {
    try {
      const res = await axios.get(API);

      setMessages(
        Array.isArray(res.data) ? res.data : []
      );
    } catch (error) {
      console.log("Fetch Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const deleteMessage = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this message?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(`${API}/${id}`);

      setMessages((prev) =>
        prev.filter((msg) => msg._id !== id)
      );
    } catch (error) {
      console.log("Delete Error:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex justify-center items-center">
        <div className="w-14 h-14 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 md:p-10">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold">
          Contact Messages
        </h1>

        <div className="bg-cyan-600 px-5 py-2 rounded-xl font-semibold">
          Total: {messages.length}
        </div>
      </div>

      {messages.length === 0 ? (
        <div className="bg-slate-900 rounded-2xl p-10 text-center text-slate-400">
          No Messages Found
        </div>
      ) : (
        <div className="grid gap-6">
          {messages.map((msg) => (
            <div
              key={msg._id}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500 transition"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-cyan-400">
                    {msg.name}
                  </h3>

                  <p className="text-slate-400 mt-1">
                    {msg.email}
                  </p>
                </div>

                <button
                  onClick={() => deleteMessage(msg._id)}
                  className="bg-red-500 hover:bg-red-600 p-3 rounded-xl"
                >
                  <FaTrash />
                </button>
              </div>

              <p className="mt-5 text-slate-300 leading-relaxed">
                {msg.message}
              </p>

              <p className="mt-4 text-sm text-slate-500">
                {new Date(
                  msg.createdAt
                ).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Messages;