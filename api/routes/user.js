const router = require("express").Router()
const User = require("../models/User")

// VIEW USER INFO
router.get("/userinfo", async (req, res) => {
  try {
    const userId = req.body._id
    const userData = await User.findById(userId)
    res.json(userData)
  } catch (err) {
    console.log(err)
  }
})

// EDIT USER INFO
router.put("")

module.exports = router
