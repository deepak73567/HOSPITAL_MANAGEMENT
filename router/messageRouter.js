import express from "express";
import { getAllMessages, sendMessage } from "../controller/messageController.js";
import { isAdminAuthenticated } from "../middlewares/auth.js";

const router=express.Router();//created instance of router



router.post("/send",sendMessage);
router.get("/getall",isAdminAuthenticated,getAllMessages);

export default router;