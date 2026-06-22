import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import Projects from "./pages/admin/Projects";
import Skills from "./pages/admin/Skills";
import Experience from "./pages/admin/Experience";
import Messages from "./pages/admin/Messages";

import AdminLayout from "./layouts/AdminLayout";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>

      {/* Portfolio */}
      <Route path="/" element={<Home />} />

      {/* Admin Login */}
      <Route
        path="/admin/login"
        element={<Login />}
      />

      {/* Protected Admin Panel */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route
          path="dashboard"
          element={<Dashboard />}
        />

        <Route
          path="projects"
          element={<Projects />}
        />

        <Route
          path="skills"
          element={<Skills />}
        />

        <Route
          path="experience"
          element={<Experience />}
        />

        <Route
          path="messages"
          element={<Messages />}
        />
      </Route>

    </Routes>
  );
}

export default App;