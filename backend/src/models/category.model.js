import mongoose, {Schema} from "mongoose";

const categorySchema = new Schema({
    name:{              //category name must be unique 
        type: String,
        required: true,
        unique: true
    },
    },{timestamps:true})

const Category = mongoose.model("Category", categorySchema);

export default Category;