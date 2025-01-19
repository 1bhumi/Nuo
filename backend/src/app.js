import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express()

// Middleware to parse JSON request bodies
app.use(express.json({limit: "20kb"}))
app.use(express.urlencoded({limit: "30kb", extended: true}))
app.use(express.static("public"))

// Middleware to enable CORS connect frontend with backend
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(cookieParser())

//set routes path to access the api
import userRouter from "./routes/user.route.js"
import categoryRouter from "./routes/category.route.js"
import documentRouter from "./routes/document.route.js"

app.use("/api/v1/user", userRouter)
app.use("/api/v1/category", categoryRouter)
app.use("/api/v1/document", documentRouter)

export default app