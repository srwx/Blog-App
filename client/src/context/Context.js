import { createContext, useReducer } from "react"
import Reducer from "./Reducer"

const initialUser = {
  user: null,
  isFetching: false,
  isError: false,
}

export const UserContext = createContext(initialUser)

export function ContextProvider({ children }) {
  // useReducer() รับ parameter 2 ตัวคือ
  //    - Reducer : เป็นฟังก์ชันสร้างเอง ที่ใช้ switch-case ตรวจสอบ action.type และ return state ใหม่ออกมา
  //    - initialUser : ค่าเริ่มต้นของ reducer
  // useReducer() return 2 ค่าคือ
  //    - userState : state ใหม่ที่ return มาจากฟังก์ชันสร้างเองที่ชื่อ Reducer (ฟังก์ชันที่ใช้ switch-case ตรวจสอบ)
  //    - dispatch : ฟังก์ชันที่ใช้กำหนด action (dispatch จะรับ parameter คือก้อน object ที่มี property เป็น "type" และ "payload" (optional) โดย parameter นี้จะถูกส่งไปเป็น parameter ที่ชื่อ action ในฟังก์ชัน Reducer)
  const [userState, dispatch] = useReducer(Reducer, initialUser)

  return (
    <UserContext.Provider value={{ ...userState, dispatch }}>
      {children}
    </UserContext.Provider>
  )
}
