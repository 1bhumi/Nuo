import { createCategory } from "../controllers/category.controller.js";
import authentication from "../middlewares/auth.middleware.js";
import Router from "express";

const router =  Router()

router.use(authentication)

router.route("/createCategory").post(createCategory)

export default router;