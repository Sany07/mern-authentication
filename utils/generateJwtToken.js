const jwt = require('jsonwebtoken')


// @desc Generate JWT
const generateJwtToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
    })
}

module.exports = generateJwtToken
