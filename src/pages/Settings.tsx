import { useUser } from "../hooks/useUser"
import { signOut } from "../lib/auth"
import { useNavigate } from "react-router-dom";


export default function Settings () {
          
        const user = useUser();
          const navigate = useNavigate();

          return (
        <div>
                {user && (
                            <div>
                            <h2>Account</h2>
                            <p>Email: {user.email}</p>
                
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
        )

}