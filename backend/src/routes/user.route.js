import { signup, login, userlist} from "../controllers/user.controller.js";
import Router from "express"
import authentication from "../middlewares/auth.middleware.js";

const router = new Router()

router.route("/signup").post(signup)
router.route("/login").post(login)

router.route("/list").get(authentication, userlist)

export default router