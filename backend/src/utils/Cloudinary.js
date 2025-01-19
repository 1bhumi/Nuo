import { v2 as cloudinary } from "cloudinary"
import fs from "fs"
import dotenv from "dotenv"

dotenv.config({path: "./.env"})

//cloudinary configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

//function to upload file on cloudinary
const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null; //return null if no path 

        //upload file to cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, { resource_type: "auto" })
        fs.unlinkSync(localFilePath) // delete file locally after upload
        return response
    } catch (error) {
        fs.unlinkSync(localFilePath) //enure local file deleted even after error
        console.log(`ERROR :: ${error?.message}`)
    }
}

export default uploadOnCloudinary