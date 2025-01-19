import HandleError from "../utils/HandleError.js";
import HandleResponse from "../utils/HandleResponse.js";
import AsyncHandler from "../utils/AsyncHandler.js";
import Document from "../models/document.model.js"
import Category from "../models/category.model.js"
import uploadOnCloudinary from "../utils/Cloudinary.js";
import moment from "moment"


// create document
const createDocument = AsyncHandler(async(req,res)=> {
    
    const {categoryId, applicationNo, name, expiryDate, status} = req.body

    //fields validation
    if(!categoryId || !applicationNo || !name || !expiryDate || !status){
        return res
       .status(400)
       .json(
            new HandleError(400, "All field required!!")
        )
    }

    //find category
    const category = await Category.findById(categoryId)
    if(!category){
        return res
        .status(400)
        .json(
            new HandleError(400, "Category not found!!")
        )
    }

    //validation 
    if(!applicationNo?.trim()){
        return res
        .status(400)
        .json(
            new HandleError(400, "Please enter Application number!!")
        )
    }
    if(!name?.trim()){
        return res
        .status(400)
        .json(
            new HandleError(400, "Please enter Application name!!")
        )
    }
    const isValidDate = moment(expiryDate, 'YYYY-MM-DD', true).isValid()
    if(!isValidDate){ //validate date with moment library for handling dates
        return res
        .status(400)
        .json(
            new HandleError(400, "Please enter valid Expiry date 'YYYY-MM-DD'!!")
        )
    }
    const statusValidator = ["Active", "Expiry"]
    if(!statusValidator.includes(status)){
        return res
        .status(400)
        .json(
            new HandleError(400, "Invalid status. Please enter 'Active' or 'Expiry'")
        )
    }
    
    //document file upload
    const fileLocalPath = req.file?.path; //getting local path of file 
    if(!fileLocalPath){
        return res
        .status(400)
        .json(
            new HandleError(400, "Please upload document file!!")
        )
    }
    const documentFileURL = await uploadOnCloudinary(fileLocalPath); //upload file on cloudinary and getting url in return

    if (!documentFileURL) { //validation check
        return res
            .status(400)
            .json(new HandleError(400, "File error while uploading on Cloud!!"));
    }

    //create document
    const document = await Document.create({
        categoryId,
        applicationNo: applicationNo?.trim(),
        name: name?.trim(),
        expiryDate,
        status: status?.trim(),
        applicationFile: documentFileURL?.url  
    })

    //return response
    return res
    .status(201)
    .json(
        new HandleResponse(201, "Document created successfully!!", document)
    )
})


export{
    createDocument
}