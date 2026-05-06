import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from 'react-router-dom'

export default function AppLayout() {
  return (
    <div className="h-screen bg-slate-900 text-gray-200 flex flex-col">
          <Navbar />
          <div className="flex flex-1 overflow-hidden">
                <div className="hidden md:block">
                      <Sidebar />
                </div>
                <main className="flex-1 p-4 md:p-6 overflow-y-auto">
                      <Outlet />
                </main>
          </div>
    </div>
  );
}

