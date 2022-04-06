const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
var validator = require('validator');

const UserSchema = mongoose.Schema({
    firstName:{
        type: String,
        trim: true,
        maxLength: [8, 'Your firstname cannot exceed 8 characters']
    },
    lastName:{
        type: String,
        trim: true,
        maxLength: [8, 'Your lastname cannot exceed 8 characters']

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
        validate: [validator.isEmail, 'Please enter valid email address'],
        unique: true,
        trim: true
    },
    password:{
        type: String,
        required: [true, 'Please enter your password'],
        minLength: [6, 'Your password must be longer than 6 characters'],
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

UserSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };

module.exports = mongoose.model('User',UserSchema)