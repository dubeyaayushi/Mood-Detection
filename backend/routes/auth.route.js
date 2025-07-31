import express from "express";

const router = express.Router();

router.post("/signup", signup) /* ye humari api ka end point rahega abb ye ek signup function hai jo hum controller mein create karenge */

export default router;
