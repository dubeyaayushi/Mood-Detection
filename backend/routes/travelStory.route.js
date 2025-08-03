import express from 'express';
import { verifyToken } from '../utils/verify.User.js';
import { addTravelStory } from '../controllers/travelStory.controller.js'; // Importing the controller function
import upload from '../utils/multer.js';
import { imageUpload } from '../controllers/travelStory.controller.js'; // Importing the image upload controller function
import { getAllTravelStory } from '../controllers/travelStory.controller.js'; // Importing the controller function for getting all travel stories
const router = express.Router();

router.post("/add", verifyToken, addTravelStory);

router.get("/get-all", verifyToken, getAllTravelStory)  

/* verifyToken is a middleware that checks if the incoming request has a valid JWT (JSON Web Token). It's used to authenticate users before allowing them to access certain routes (like adding a travel story). */


/* addTravelStory (Controller Function)
❓ What It Does:
This is the route handler (also called a controller function) that runs after verifyToken passes. It handles the logic for adding a new travel story to your database.

 */


router.post("/image-upload", upload.single("image") , imageUpload)/* route to upload image */


export default router;

