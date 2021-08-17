// ==================================== Custom hook for LoginBox components ====================================
import { useState } from "react"
import axios from "axios"

export default function useLoginBox() {
  const [loginBoxOpen, setLoginBoxOpen] = useState(false)

  // function for enable/disable login popup (handle loginBoxOpen state)
  const loginClick = () => {
    setLoginBoxOpen((prev) => !prev)
  }

  // function for handle when user click login button
  const loginSubmit = async (event) => {
    event.preventDefault()
    const username = event.target.username.value
    const password = event.target.password.value
    axios.post("/auth/login", { username, password }) // ส่ง object {username, password} ผ่าน HTTP request body
  }

  return { loginBoxOpen, loginClick, loginSubmit }
}
