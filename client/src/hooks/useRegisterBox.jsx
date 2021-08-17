import { useState } from "react"
import axios from "axios"

export default function usePopupBox() {
  const [registerBoxOpen, setRegisterBoxOpen] = useState(false)

  // function for enable/disable login popup (handle loginBoxOpen state)
  const registerClick = () => {
    setRegisterBoxOpen((prev) => !prev)
  }

  // function for handle form when user register
  const registerSubmit = async (event) => {
    event.preventDefault()
    const username = event.target.username.value
    const password = event.target.password.value
    const email = event.target.email.value
    axios.post("/auth/register", { username, password, email })
  }

  return { registerBoxOpen, registerClick, registerSubmit }
}
