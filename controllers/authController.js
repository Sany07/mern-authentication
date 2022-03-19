const User = require('../models/userModel')
const asyncHandler = require('express-async-handler')


// @desc Login Controller
const loginUser = asyncHandler(async(req, res)=>{
    const { email, password} = req.body
    res.status(200)
    res.json('samess');
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