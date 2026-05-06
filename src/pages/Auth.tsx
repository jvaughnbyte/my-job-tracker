import { useState } from "react"
import { signIn, signUp } from "../lib/auth"
import { useNavigate } from "react-router-dom";


export default function Auth() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate();

  async function handleSignUp() {
    const { error } = await signUp(email, password)
    if (error) alert(error.message)
    else alert("Check your email to confirm!")
  }

  async function handleSignIn() {
    const { error } = await signIn(email, password)
    navigate(`/`)
    if (error) alert(error.message)
  }

  return (
    <div className="flex flex-col gap-4 max-w-sm mx-auto mt-20">
      <input
        className="input"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="input"
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleSignUp} className="bg-blue-500 text-white p-2">
        Sign Up
      </button>

      <button onClick={handleSignIn} className="bg-green-500 text-white p-2">
        Log In
      </button>
    </div>
  )
}