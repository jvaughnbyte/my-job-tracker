import { NavLink  } from 'react-router-dom'
import { useUser } from "../hooks/useUser"
import { signOut } from "../lib/auth"
import { useNavigate } from "react-router-dom";


export default function Navbar() {
  const user = useUser();
  const navigate = useNavigate();

  const links = [
    { to: "/", label: "Dashboard" },
    { to: "/addJobs", label: "AddJobs" },
    { to: "/analytics", label: "Analytics" },
    { to: "/settings", label: "Settings" },
  ];

  return (
    <>
      {/* TOP NAV */}
      <header className="flex items-center justify-between px-4 py-3 border-b border-gray-800 bg-gray-900">
        <h1 className="text-lg font-semibold">Job Tracker</h1>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400 font-medium"
                  : "text-gray-400 hover:text-white"
              }
            >
              {link.label}
            </NavLink>
          ))}

          {user && (
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-400">
                {user.email}
              </span>

              <button
                className="px-3 py-1 bg-red-500/20 text-red-400 rounded hover:bg-red-500/30"
                onClick={async () => {
                  await signOut();
                  navigate("/auth");
                }}
              >
                Logout
              </button>
            </div>
          )}
        </div>

        {/* MOBILE LOGOUT BUTTON */}
        {user && (
          <div className="md:hidden flex items-center gap-3">
            <span className="text-sm text-gray-400">
                {user.email}
              </span>
              <button
            className="text-sm text-red-400"
            onClick={async () => {
              await signOut();
              navigate("/auth");
            }}
          >
            Logout
          </button>
          </div>
        )}
      </header>

      {/* MOBILE BOTTOM NAV */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-700 border-t border-gray-600 flex justify-around py-2 md:hidden">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `block px-3 py-2 rounded ${
                isActive
                  ? "bg-blue-500 text-white" 
                  : "text-gray-400"
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </>
  );
}