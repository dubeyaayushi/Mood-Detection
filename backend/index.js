import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cookieParser from "cookie-parser"
import authRoutes from "./routes/auth.route.js"
import userRoutes from "./routes/user.route.js"
import travelStoryRoutes from "./routes/travelStory.route.js"
import cors from "cors"

import path from "path"
import { fileURLToPath } from "url"



dotenv.config()
mongoose.connect(process.env.MONGO_URI).then(
    () => {
        console.log("Database is connected")
    }).catch((err) => {
        console.log(err)
    })

const app = express()

const allowedOrigins = [
  "http://localhost:5173", // local dev
  // "https://mood-detection-frontend.onrender.com" // deployed frontend
];

app.use(cors({
    origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },

    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
    
}))


app.use(cookieParser())


app.use(express.json())//for allowing json objects in req body
app.use(express.urlencoded({ extended: true }))

app.listen(3000,() => {

    console.log("Server is running on port 3000")

})  

app.use("/api/auth", authRoutes)
app.use("/api/user", userRoutes)
app.use("/api/travel-story", travelStoryRoutes)

//server static file from the uploads and assets directory 
const __filename =  fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename) 

app.use("/uploads", express.static(path.join(__dirname, "uploads")))
app.use("/assets", express.static(path.join(__dirname, "assets"))   )

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500

    const message = err.message || "Internal Server error"
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })

})


