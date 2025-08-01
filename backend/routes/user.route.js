import express from "express";
import { getUsers } from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js"; // Importing the verifyToken middleware

const router = express.Router()

router.get("/getusers", verifyToken, getUsers) /* ye humari api ka end point rahega jo hum controller mein create karenge */    


 
export default router







