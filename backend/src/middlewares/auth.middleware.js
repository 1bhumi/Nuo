import HandleError from "../utils/HandleError.js";
import jwt from "jsonwebtoken"
import User from "../models/user.model.js"
import HandleResponse from "../utils/HandleResponse.js";

const authentication = async (req,res,next) => {
    try {
        const token = req.cookies?.access_token //taking access token from cookies 

        if(!token){
            return res
            .status(400)
            .json(
                new HandleResponse(400, "Login session is expired!!")
            )
        }

        //now we will decode this access token with the secret key from .env file
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN)

        //after decoding token we will get user data then we will find the users id from
        // database and store user details in "user variable"
        const user = await User.findById(decodedToken.id).select("-password -refreshToken")

        //now we will store this user fetched through id in request body 
        req.user = user

        next()

    } catch (error) {
        return res 
        .status(400) 
        .json(
            new HandleError(400, `auth.middleware.js :: authentication :: ERROR : ${error?.message}`)
        )
    }
}

export default authentication
