import app from "./app.js"
import dbConnect from "./database/db.connection.js"
import dotenv from "dotenv"

dotenv.config() //to process .env file

dbConnect() //connect to database server (promise)
.then(()=>{
    console.log("Database Connected!!!")

    app.on("error", (error) =>{ //error handling
        console.log(error)
    });

    app.listen(process.env.PORT || 9000, ()=>{ //server listen to port  number
        console.log("Server is running on port", process.env.PORT)  
    })
    
})

.catch(error =>{
    console.log(`index.js :: dbConnect() :: ERROR ${error?.message}`)
})