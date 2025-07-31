import bcryptjs from 'bcryptjs';
import User from '../models/user.model.js';
import { errorHandler } from '../utils/error.js';

export const signup = async(req, res, next) => {
    const {username, email, password} = req.body

    if(!username || !email || !password || username==="" || email==="" || password==="") {

        // return res.status(400).json({message: "All fields are required"})
        return next(errorHandler(400, "All fileds are required"))
    }


    const hasheddPassword = bcryptjs.hashSync(password, 10)

    const newUser = new User ({
        username,
         email,
        password: hasheddPassword
    })

    try{
        await newUser.save()
        res.json("Signup successful")
    }catch (error){
        res.status(500).json({message: error.message })
    }

}