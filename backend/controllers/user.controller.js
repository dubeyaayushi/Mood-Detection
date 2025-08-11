import User from '../models/user.model.js';


export const getUsers = async(req, res, next) => {

    const userId =  req.user.id 

    const isValidUser =  await User.findOne({_id: userId })

    if(!isValidUser) {

        return next(errorHandler(401, "Unauthorized access! Please login again."))
    }

    const {password: pass, ...rest} = isValidUser._doc

    res.status(200).json(rest)
}


export const signout = async(req, res, next) => {

    try{

        res.clearCookie("access_token").status(200).json("User has been Loggedout successfully !")
    }catch (error){
        next(error)
    }
}


