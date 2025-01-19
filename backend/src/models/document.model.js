import mongoose,{Schema} from "mongoose";

const documentSchema = new Schema({
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    applicationNo: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    expiryDate: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ["Active", "Expired"],
        default: "Active"
    },
    applicationFile: {
        type: String, //cloudinary url
        required: true
    }
}, {timestamps: true})


const Document = mongoose.model("Document", documentSchema)

export default Document;