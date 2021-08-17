const router = require("express").Router()
const User = require("../models/User")

// LOGIN
router.post("/login", (req, res) => {
  const { username, password } = req.body // รับและ destructuring ข้อมูลที่ส่งมาทาง body
  console.log(`${username} ${password}`)
})

// Register
router.post("/register", (req, res) => {
  try {
    const newUser = req.body
    User.create(newUser) // ไม่ต้องดัก err เพราะถ้าเกิด err โปรแกรมจะเด้งเข้า catch อยู่แล้ว
  } catch (err) {
    console.log(err)
  }
})

module.exports = router
