import multer from "multer";
import path from "path";

//storage configuration
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "./uploads/")
    },
    /*file---> jo bhi file humein upload karni hai vo


    cb--> ek call back function hai 

    uploads---> ek file jo hum create karenge jaha hum apni images upload karenge, ye humari destination file hai 
    */
        filename: function(req, file, cb){
            cb(null, Date.now() + path.extname(file.originalname))//unique file name
        } 

})


//file filter to accept only images
const fileFilter = (req, file, cb) => {
    if(file.mimetype.startsWith("image/")) {
        cb(null, true); // Accept the file
    }else{
        cb(new Error("Only image files are allowed!"), false); // Reject the file
    }
}


//initialize multer instance
const upload = multer({storage, fileFilter})



export default upload






