import multer from "multer";

//multer configuration
const storage = multer.diskStorage(
    {
        //destination folder where files stored for temporarily
        destination: (req, file, cb) => {
            cb(null, "public/temp")
        },
        //file name for uploaded file
        filename: (req, file, cb) => {
            cb(null, file.originalname)
        }
    }
)

//creating upload middleware to use storage configuration
const upload = multer({ storage: storage })

export default upload