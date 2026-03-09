import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"

import authRoutes from "./routes/authRoutes.js"
import leaveRoutes from "./routes/leaveRoutes.js"

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/auth", authRoutes)
app.use("/api/leaves", leaveRoutes)

mongoose
.connect(process.env.MONGO_URI || process.env.MONGO_URL)
.then(() => {
  console.log("MongoDB Connected")
})
.catch((err) => {
  console.log("MongoDB Error:", err)
})

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running on port 5000")
})