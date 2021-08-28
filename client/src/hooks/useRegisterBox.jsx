import { useState } from "react"
import axios from "axios"

export default function usePopupBox() {
  const [registerBoxOpen, setRegisterBoxOpen] = useState(false)
  const [registerResponse, setRegisterResponse] = useState(null)

  // function for enable/disable login popup (handle loginBoxOpen state)
  const registerClick = () => {
    setRegisterBoxOpen((prev) => !prev)
    setRegisterResponse(null)
  }

  // function for handle form when user register
  const registerSubmit = async (event) => {
    try {
      event.preventDefault()
      const username = event.target.username.value
      const password = event.target.password.value
      const firstname = event.target.firstname.value
      const lastname = event.target.lastname.value
      const email = event.target.email.value
      const axiosRes = await axios.post("/auth/register", {
        username,
        password,
        firstname,
        lastname,
        email,
      }) // ส่ง object {username, password, email} ผ่าน HTTP request body และรอรับ response (รับ response เก็บไว้ในตัวแปร axiosRes)
      const resData = {
        status: axiosRes.status,
        message: axiosRes.data.message,
      }
      setRegisterResponse(resData)
    } catch (err) {
      const resData = {
        status: 409,
        message: `This username already exists. Please change your username for register.`,
      }
      setRegisterResponse(resData)
    }
  }

  return { registerBoxOpen, registerClick, registerSubmit, registerResponse }
}
