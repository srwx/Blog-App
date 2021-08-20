const bcrypt = require("bcrypt")
const router = require("express").Router()
const User = require("../models/User")

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body // รับและ destructuring ข้อมูลที่ส่งมาทาง body
    const user = await User.findOne({ username })

    // x && y : จะ return y เมื่อ x เป็น truly
    !user &&
      res.status(403).json({ message: "Username or password incorrect." }) // ถ้า query ข้อมูลแล้วไม่เจอ user ให้ return status 403

    const checkPassword = await bcrypt.compare(password, user.password)
    !checkPassword &&
      res.status(403).json({ message: "Username or password incorrect." })

    const { _id, profilePic, ...others } = user // filter user-object (เอาแค่ _id, profilePic นอกนั้นไม่เอา)
    res.json({ _id, username, profilePic })
  } catch (err) {
    console.log(err)
  }
})

// REGISTER
router.post("/register", async (req, res) => {
  try {
    const { username, password, email } = req.body // destructuring ข้อมูลที่ส่งมาจาก form

    // generated salt and hashed password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const newUser = {
      username,
      password: hashedPassword,
      email,
    }
    await User.create(newUser) // เพิ่ม newUser ลงใน User collection
    res.json({
      message:
        "Register success, Now you can close this popup and go to login.",
    })
  } catch (err) {
    res.status(409).json("This username already exists.")
  }
})

module.exports = router
