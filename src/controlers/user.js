
const { User } = require("../models/user")

const loginUser = async(req, res) => {
    const {name,password} = req.body

    const username = await User.findOne({name:name})

    if (username) {
        if (username.password === password) {
           
            res.status(201).json({
                msg: "user is Login"
            })
        } else {
            res.status(401).json({
                msg: "user password increct"
            })
        }
    }else{
        res.status(404).json({
            msg:"user not faund"
        })
    }
    
}

const logoutUser = (req, res) => {
    res.status(201).json({
        msg: "user logout"
    })
}

const registerUser = async (req, res) => {
    const { name, password, email } = req.body

    const username = await User.findOne({ name: name })
    

    if (!username) {
        await User.create({
            name: name,
            password: password,
            email: email
        })
        res.status(201).json({
            msg: "user register sucssesfully"
        })
    }else{
        res.status(409).json({
            msg:"User allrady exist"
        })
    }

}


module.exports = { loginUser, logoutUser, registerUser }