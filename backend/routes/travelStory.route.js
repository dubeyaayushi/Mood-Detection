import express from 'express';
import { verifyToken } from '../utils/verify.User.js';
import { addTravelStory } from '../controllers/travelStory.controller.js'; // Importing the controller function


const router = express.Router();

router.post("/add", verifyToken, addTravelStory);

/* verifyToken is a middleware that checks if the incoming request has a valid JWT (JSON Web Token). It's used to authenticate users before allowing them to access certain routes (like adding a travel story). */


/* addTravelStory (Controller Function)
❓ What It Does:
This is the route handler (also called a controller function) that runs after verifyToken passes. It handles the logic for adding a new travel story to your database.

 */



export default router;

