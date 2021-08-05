const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv").config() // ทำให้ไฟล์นี้สามารถเข้าถึงตัวแปรในไฟล์ .env ได้ด้วยคำสั่ง process.env.{ชื่อตัวแปร}
const app = express()
const PORT = 5000

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log(`Connected to MongoDB...`))
  .catch((err) => console.log(err))

app.listen(PORT, () => console.log(`server start at port ${PORT}...`))
