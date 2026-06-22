import { Link, Outlet, useNavigate } from "react-router-dom";

function AdminLayout() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen flex bg-slate-950 text-white">

      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 p-6 flex flex-col">

        <h2 className="text-2xl font-bold mb-8">
          Admin Panel
        </h2>

        <nav className="flex flex-col gap-4 flex-1">

          <Link
            to="/admin/dashboard"
            className="hover:text-cyan-400"
          >
            Dashboard
          </Link>

          <Link
            to="/admin/projects"
            className="hover:text-cyan-400"
          >
            Projects
          </Link>

          <Link
            to="/admin/skills"
            className="hover:text-cyan-400"
          >
            Skills
          </Link>

          <Link
            to="/admin/experience"
            className="hover:text-cyan-400"
          >
            Experience
          </Link>

          <Link
            to="/admin/messages"
            className="hover:text-cyan-400"
          >
            Messages
          </Link>
        </nav>

        {/* Logout Button */}
        <button
          onClick={logout}
          className="mt-8 w-full bg-red-600 hover:bg-red-700 py-2 rounded-lg font-medium transition"
        >
          Logout
        </button>

      </aside>

      {/* Page Content */}
      <main className="flex-1 p-8">
        <Outlet />
      </main>

    </div>
  );
}

export default AdminLayout;