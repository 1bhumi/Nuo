import express from "express"
import cookieParser from "cookie-parser"

const app = express()

// Middleware to parse JSON request bodies
app.use(express.json({limit: "20kb"}))
app.use(express.urlencoded({limit: "30kb", extended: true}))
app.use(express.static("public"))

app.use(cookieParser())

//set routes path to access the api
import userRouter from "./routes/user.route.js"

app.use("/api/v1/user", userRouter)

export default app