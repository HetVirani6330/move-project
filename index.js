const express = require('express')
const mongoose = require('mongoose')
const userRoute = require('./src/routes/user')
const movieRoutes = require('./src/routes/movies')

const app = express()
app.use(express.json())



app.use('/user', userRoute)
app.use('/movie', movieRoutes)

app.listen(7000, () => {
    mongoose.connect("mongodb://localhost:27017/movies")
})