const router = require("express").Router()
const User = require("../models/User")

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
