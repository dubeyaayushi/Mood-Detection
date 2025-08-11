import express from "express";
import { getUsers, signout } from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verify.User.js"; // Importing the verifyToken middleware

const router = express.Router()

router.get("/getusers", verifyToken, getUsers) /* ye humari api ka end point rahega jo hum controller mein create karenge */    

router.post("/signout", signout)
 
export default router







