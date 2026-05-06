import { NavLink  } from 'react-router-dom'
import { useUser } from "../hooks/useUser"
import { signOut } from "../lib/auth"


export default function MobileNavbar () {
  
    const user = useUser()

  const links = [
  { to: '/',            label: 'Dashboard' },
  { to: '/addJobs',       label: 'AddJobs' },
  { to: '/analytics',       label: 'Analytics' },
  { to: '/settings',     label: 'Settings' },
]

return (
  <div className="fixed bottom-0 left-0 right-0 bg-gray-700 border-t border-gray-600 flex justify-around py-2 md:hidden">
  {user ? (
         <div className="flex gap-3">
           <span>{user.email}</span>
           <button onClick={signOut}>Logout</button>
         </div>
       ) : (
         <a href="/auth">Login</a>
       )}
       
       {links.map(link => (
    <NavLink
      key={link.to}
      to={link.to}
      className= {({ isActive }) =>
        `block px-3 py-2 rounded ${
          isActive
            ? "bg-blue-500 text-white"
            : "text-white"
        }`
      }
    >
      {link.label}
    </NavLink>
  ))}
</div>
        
    )
}