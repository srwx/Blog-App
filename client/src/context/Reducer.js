// ฟังก์ชัน Reducer สำหรับใช้ใน useReducer() ในไฟล์ Context.js
// ฟังก์ชัน Reducer รับ parameter 2 ตัวคือ
//    - state : state ล่าสุด (ก่อนจะเปลี่ยนแปลง)
//    - action : ก้อน object ที่มี property 2 ตัวคือ "type" และ "payload"
// ฟังก์ชัน Reducer จะเช็ค "type" ว่าเป็นอะไร ด้วย switch-case และเมื่อเข้าไปที่ case ใดแล้ว จะ return ค่า state ใหม่ออกไปจาก useReducer()

export default function Reducer(state, action) {
  switch (action.type) {
    case "LOGIN_START":
      return {
        ...state,
        isFetching: true,
      }
    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: action.payload,
      }
    case "LOGIN_FAILURE":
      return {
        ...state,
        isError: true,
      }
    default:
      return state
  }
}
