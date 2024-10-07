const express = require("express")
const {addData,showData,showOneData,editData,deleteData} = require('../controlers/movies')
const movieRoutes = express.Router()

movieRoutes.post('/addData', addData)
movieRoutes.get('/showData', showData)
movieRoutes.get('/showData/:id', showOneData)
movieRoutes.put('/editData/:id', editData)
movieRoutes.delete('/deleteData/:id', deleteData)

module.exports = movieRoutes