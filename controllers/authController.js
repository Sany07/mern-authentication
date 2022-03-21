const User = require('../models/userModel')
const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');

// @desc Login Controller
const loginUser = asyncHandler(async(req, res)=>{
    const {email, password} = req.body

    // if (!email || password) {
    //     throw new Error('Please add all fields',res.statusCode=400)
    // }

    const user = await User.findOne({email}).select("+password");
    
    if(!user){
        throw new Error('Invalid Credentials',res.status=400)
    }
    console.log(password, user.password);
    const isMach = await user.comparePassword(password)
    if (!isMach) {
        console.log(isMach);
        throw new Error('Invalid Credentials',res.status=400)
    }

    res.status(200)
    res.json({     
         _id: user.id,
        name: user.name,
        email: user.email,
    })

})

const registerUser = asyncHandler(async(req, res)=>{
    
    const { userName, email, password} = req.body

    if (!userName || !email || !password) {
        throw new Error('Please add all fields', res.status(400))
    }
    const isUserNameExist = await User.findOne({ userName });

    if (isUserNameExist) {
        throw new Error('Username already exists', res.status(400))
    }
    const isEmailExist = await User.findOne({ email });
    if (isEmailExist) {
        throw new Error('Email already exists', res.status(400))
    }

    const user = await User.create({
        userName,
        email,
        password
    })
    
    if (user) {
        res.status(201).json({
          _id: user.id,
          name: user.userName,
          email: user.email,
          token: generateToken(user._id),
        })
      } else {
        
        throw new Error('Registration Failed',res.status(400))
      }
    
})

// Generate JWT
    const generateToken = (id) => {
        return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
        })
    }


module.exports ={
    loginUser,
    registerUser
}