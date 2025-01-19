import { createDocument } from "../controllers/document.controller.js";
import authentication from "../middlewares/auth.middleware.js";
import Router from "express";
import upload from "../middlewares/multer.middleware.js";

const router =  Router()

router.use(authentication)

router.post('/createDocument', upload.single('applicationFile'), createDocument);

export default router;