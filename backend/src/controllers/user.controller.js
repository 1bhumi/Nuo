import HandleError from "../utils/HandleError.js";
import HandleResponse from "../utils/HandleResponse.js";
import AsyncHandler from "../utils/AsyncHandler.js";
import User from "../models/user.model.js"

const signup = AsyncHandler(async(req,res)=> {

    const {fullName, email, password} = req.body

    //fields validation
    if(!fullName || !email || !password){
        return res
        .status(400)
        .json(
            new HandleError(400, "All field required!!")
        )
    }

    if(!fullName?.trim()){
        return res
        .status(400)
        .json(
            new HandleError(400, "Please enter a full name!!")
        )
    }
    if(!/([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}/.test(email?.trim().toLowerCase())){
        return res
        .status(400)
        .json(
            new HandleError(400, "Please enter a valid email address!!")
        )
    }
    if(password?.trim().length < 8 || password?.trim().length > 16 ){
        return res
        .status(400)
        .json(
            new HandleError(400, "Password must be between 8 to 16 characters!!")
        )
    }

    //check if user already exists
    const existedUser = await User.findOne({email: email?.trim().toLowerCase()})
    if(existedUser){
        return res
        .status(400)
        .json(
            new HandleError(400, "User already exists!!")
        )
    }

    //if user not exists then create one new documents
    const user = await User.create({
        fullName: fullName?.trim(),
        email: email?.trim().toLowerCase(),
        password: password?.trim()
    })

    const isCreatedUser = await User.findById(user._id)
    if(!isCreatedUser){
        return res
        .status(500)
        .json(
            new HandleError(400, "Something went wrong. Please try again!!!")
        )
    }

    //if user created successfully then send response
    return res
    .status(200)
    .json(
        new HandleResponse(200, "User created successfully!!", user)
    )
})

const login = AsyncHandler(async(req,res)=>{
    const {email, password} =req.body

    //fields validation
    if(!email || !password){
        return res
        .status(400)
        .json(
            new HandleError(400, "All field required!!")
        )
    }
    if(!/([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}/.test(email?.trim().toLowerCase())){
        return res
        .status(400)
        .json(
            new HandleError(400, "Please enter a valid email address!!")
        )
    }
    if(password?.length < 8 || password?.length > 16 ){
        return res
        .status(400)
        .json(
            new HandleError(400, "Password must be between 8 to 16 characters!!")
        )
    }

    //check if the user existed or not
    const existedUser = await User.findOne({email: email?.trim().toLowerCase()})
    if(!existedUser){
        return res
        .status(401)
        .json(
            new HandleError(401, "Invalid email or password!!")
        )
    }
    //check if the password is correct or not
    const correctPassword = await existedUser.comparePassword(password)
    if(!correctPassword){
        return res
        .status(400)
        .json(
            new HandleError(400, "Incorrect password!!")
        )
    }

    //token generation
    const accessToken = existedUser.generateAccessToken()
    const refreshToken = existedUser.generateRefreshToken()

    existedUser.refreshToken = refreshToken
    await existedUser.save({validateBeforeSave: false})

    //set cookie options
    const options = {
        httpOnly: true,
        secure: true
    }

    //send reponse if credentials are correct
    return res
    .status(200)
    .cookie("access_token", accessToken, options)
    .cookie("refresh_token", refreshToken, options)
    .json(
        new HandleResponse(200, "Login Successfully!!")
    )

})

const userlist = AsyncHandler(async(req,res)=> {
    const user = await User.find().select("-password -refreshToken")
    if(!user){
        return res
        .status(400)
        .json(
            new HandleError( 400, "user not found!!")
        )
    }
    return res
    .status(200)
    .json(
        new HandleResponse(200, "User list!!", user)
    )
})

export {
    signup,
    login,
    userlist
}