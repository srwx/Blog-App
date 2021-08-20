const router = require("express").Router()
const User = require("../models/User")

// VIEW USER INFO
router.get("/:username", async (req, res) => {
  try {
    const usernameQuery = req.params.username
    const userData = await User.findOne({ username: usernameQuery })

    if (userData) {
      const { profilePic, _id, username, email } = userData
      return res.json({ profilePic, _id, username, email }) // ใช้ return เพื่อให้โค้ดหยุดรันที่บรรทัดนี้ ป้องกันการรัน res.status(404) ข้างล่างต่อ
    }
    res.status(404).json({ message: `username ${usernameQuery} not found.` })
  } catch (err) {
    console.log(err)
  }
})

// EDIT USER INFO
router.put("/:id", async (req, res) => {
  try {
    req.body._id !== req.params.id &&
      res.status(401).json({ message: `You can't edit this user!` }) // ถ้า _id ใน body (มาจาก login) ไม่ตรงกับ id ของ params ให้ return res.status(403)
  } catch (err) {
    console.log(err)
  }
})

// DELETE USER
router.delete("/:id")

module.exports = router
