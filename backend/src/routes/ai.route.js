import express from "express";
import { chatWithAI } from "../controllers/aicontroller.js";

const router = express.Router();

// Route for AI chat
router.post("/chat", chatWithAI);

export default router;
