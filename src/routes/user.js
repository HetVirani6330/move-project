const express = require('express')

const {loginUser,logoutUser,registerUser}= require('../controlers/user')

const userRoute = express.Router()

userRoute.post('/login', loginUser)
userRoute.post('/logout', logoutUser)
userRoute.post('/register', registerUser)

module.exports = userRoute