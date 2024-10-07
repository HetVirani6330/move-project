const Movie = require('../models/movies')


const addData = async (req, res) => {
    const { name, director, stars, date } = req.body
    const movieName = await Movie.findOne({ name: name })
    if (!movieName) {
        await Movie.create({
            name: name,
            director: director,
            stars: stars,
            date: date
        })
        res.status(201).json({
            msg: "movie add"
        })
    } else {
        res.status(409).json({
            msg: "movie allredy add"
        })
    }

}
const showData = async (req, res) => {
    const showData = await Movie.find()
    res.status(201).json({
        movie: showData
    })
}
const showOneData = async (req, res) => {
    const id = req.params['id']
    const showOneData = await Movie.findOne({ _id: id })
    if (!showOneData) {
        res.status(409).json({
            msg: 'not found'
        })
    } else {
        res.status(200).json(showOneData)
    }
}
const editData = async (req, res) => {
    const id = req.params['id']
    const { name } = req.body

    const data = await Movie.findOne({ _id: id })
    const movieName = await Movie.findOne({ name: name })

    if (data) {
        if (movieName) {
            res.status(409).json({
                msg: "movie allredy add"
            })
        } else {
            await Movie.updateOne({ _id: id }, req.body)
            res.status(201).json({
                msg: "edit sucsessfully"
            })
        }
    } else {
        res.status(409).json({
            msg: "movie not funde"
        })
    }
}
const deleteData = async (req, res) => {
    const id  = req.params['id']

    const data = await Movie.findOne({_id:id})

    if (data) {
        await Movie.deleteOne({_id:id})
        res.status(200).json({
            msg:"delete secssesfully"
        })
    } else {
        res.status(409).json({
            msg: "movie not funde"
        })
    }
}

module.exports = { addData, showData, showOneData, editData, deleteData }