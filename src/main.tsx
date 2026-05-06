import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import AddJobs from './pages/AddJobs'
import Analytics from './pages/Analytics'
import Settings from './pages/Settings'
import Auth from './pages/Auth'
import JobDetails from './pages/JobDetails'
import { Toaster } from 'react-hot-toast'
import ProtectedRoute from './components/ProtectedRoute'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "addJobs",
        element: (
          <ProtectedRoute>
            <AddJobs />
          </ProtectedRoute>
        ),
      },
      {
        path: "analytics",
        element: (
          <ProtectedRoute>
            <Analytics />
          </ProtectedRoute>
        ),
      },
      {
        path: "settings",
        element: (  <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        ),
      },
      {
        path: "jobs/:id",
        element: (
          <ProtectedRoute>
            <JobDetails />
          </ProtectedRoute>
        ),
      },
      {
        path: "auth",
        element: <Auth />,
      },
    ],
  },
]);
   


createRoot(document.getElementById('root')).render(
   
    <>
      <RouterProvider router={router} />
      <Toaster position="top-right" />
    </>
    

)