import HandleError from "../utils/HandleError.js";
import HandleResponse from "../utils/HandleResponse.js";
import AsyncHandler from "../utils/AsyncHandler.js";
import Category from "../models/category.model.js";


//create category api
const createCategory = AsyncHandler(async(req,res)=>{
    const {name } = req.body

    //validation for category
    if(!name || name?.trim() === ''){
        return res
        .status(400)
        .json(
            new HandleError(400, "Category name is required!!")
        )
    }

    //check if category is already existed
    const existedCategory = await Category.findOne({name: name?.trim()})

    if(existedCategory){
        return res
        .status(400)
        .json(
            new HandleError(400, "Category already exists!!")
        )
    }
    
    //if category not exists then create one new documents
    const category = await Category.create({
        name: name?.trim()
    })

    // //check if category created successfully or not
    // const isCreatedCategory = await Category.findOne({name: name?.trim()})

    // if(!isCreatedCategory){
    //     return res
    //     .status(500)
    //     .json(
    //         new HandleError(500, "Failed to create category!!")
    //     )
    // }

    //return response if created successfully
    return res
    .status(201)
    .json(
        new HandleResponse(201, "Category created successfully!!", category)
    )
})


export {
    createCategory,
}