const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const UserSchema = mongoose.Schema({
    firstName:{
        type: String,
        trim: true,
    },
    lastName:{
        type: String,
        trim: true,
    },
    userName:{
        type: String,
        required: [true, 'Please enter a valid username'],
        unique: true,
        trim: true
    },
    email:{
        type: String,
        required: [true, 'Please a valid email'],
        unique: true,
        trim: true
    },
    password:{
        type: String,
        required: [true, 'Please enter your password'],
        minLength: [6, 'Your password must be longer than 6 characters'],
        select: false
    }
},
    {
    timestamps: true,
})

UserSchema.pre('save', async function(next){

    if(!this.isModified('password')){
        next()
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt);
    next();

});


module.exports = mongoose.model('User',UserSchema)