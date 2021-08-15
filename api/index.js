// Dependencies
const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv").config() // ทำให้ไฟล์นี้สามารถเข้าถึงตัวแปรในไฟล์ .env ได้ด้วยคำสั่ง process.env.{ชื่อตัวแปร}

// Router
const authRouter = require("./routes/auth")

// ------------------------------------------------------------------------------------------------------------

const app = express() // Create app object from express
const PORT = 5000 // set PORT number

// connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(console.log(`Connected to MongoDB...`))
  .catch((err) => console.log(err))

// Middleware
app.use(express.json()) // แปลงข้อมูลที่ request ส่งมาทาง body จาก Object เป็น JSON Object

// Call routes in api folder
app.use("/api/auth", authRouter)

app.listen(PORT, () => console.log(`server start at port ${PORT}...`))
