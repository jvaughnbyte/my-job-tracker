import { NavLink  } from 'react-router-dom'

export default function Sidebar () {
 const links = [
  { to: '/',            label: 'Dashboard' },
  { to: '/addJobs',       label: 'AddJobs' },
  { to: '/analytics',       label: 'Analytics' },
  { to: '/settings',     label: 'Settings' }
    ]

    return (
        <div className="w-60 border-r border-gray-800 bg-gray-900 p-4 space-y-2">
  {links.map(link => (
    <NavLink
      key={link.to}
      to={link.to}
      className={({ isActive }) =>
        `block px-3 py-2 rounded ${
          isActive
            ? "bg-blue-500 text-white"
            : "text-gray-400 hover:bg-gray-800"
        }`
      }
    >
      {link.label}
    </NavLink>
  ))}
</div>
    )
}