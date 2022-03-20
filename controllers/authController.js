const User = require('../models/userModel')
const asyncHandler = require('express-async-handler')
const ErrorResponse = require("../middlewares/errorResponse")

// @desc Login Controller
const loginUser = asyncHandler(async(req, res)=>{
    const { email, password} = req.body
    if (!email || password) {
        throw new Error('Please add all fields',res.statusCode=400)
    }
    
})

const registerUser = asyncHandler(async(req, res)=>{
    
    const { userName, email, password} = req.body

    const user = await User.create({
        userName,
        email,
        password
    })
    
    if(user){
        res.status(200)
        res.json('User Created')
    }
    
})

module.exports ={
    loginUser,
    registerUser
}