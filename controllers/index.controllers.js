const {getConnection, sql} = require("../db")
const path = require("path")

const getHome = (req, res) =>{
    res.sendFile(path.join(__dirname,"..","public", 'home.html'))
}

const getIndex = (req, res) =>{
    res.sendFile(path.join(__dirname,"..","public", 'index.html'))
}

const getRegister = (req, res) =>{
    res.sendFile(path.join(__dirname,"..","public", 'register.html'))
}

const getProfile = (req, res) =>{
    res.sendFile(path.join(__dirname,"..","public", 'profile.html'))
}

const getForm = (req, res) =>{
    res.sendFile(path.join(__dirname,"..","public", 'form.html'))
}

const getTags = (req, res) =>{
    res.sendFile(path.join(__dirname,"..","public", 'tags.html'))
}


module.exports = {getHome, getIndex, getRegister, getProfile, getForm, getTags}
