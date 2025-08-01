import express from "express";
import  {signup}  from "../controllers/auth.controller.js";
import {signin} from "../controllers/auth.controller.js"; // import signin function from auth.controller.js 
const router = express.Router();

router.post("/signup", signup) /* ye humari api ka end point rahega abb ye ek signup function hai jo hum controller mein create karenge */


router.post("/signin", signin) /* ye humari api ka end point rahega abb ye ek signin function hai jo hum controller mein create karenge */



export default router;
