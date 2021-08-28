// ==================================== Custom hook for LoginBox components ====================================
import { useReducer, useState } from "react"
import axios from "axios"
import { UserContext } from "../context/Context"

export default function useLoginBox() {
  const [loginBoxOpen, setLoginBoxOpen] = useState(false)
  const [loginResult, setLoginResult] = useState("")
  const { dispatch } = useReducer(UserContext)

  // function for enable/disable login popup (handle loginBoxOpen state)
  const loginClick = () => {
    setLoginBoxOpen((prev) => !prev)
    setLoginResult("")
  }

  // function for handle when user click login button
  const loginSubmit = async (event) => {
    try {
      event.preventDefault()
      const username = event.target.username.value
      const password = event.target.password.value
      const res = await axios.post("/auth/login", { username, password }) // ส่ง object {username, password} ผ่าน HTTP request body
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data })
    } catch (err) {
      setLoginResult("Username or password incorrect!")
    }
  }

  return { loginBoxOpen, loginClick, loginSubmit, loginResult }
}
