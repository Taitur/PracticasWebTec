const express = require("express")
const router = express.Router()
const path = require("path")

const ping = require(path.join(__dirname, "..","controllers", "ping.controllers.js"))


module.exports = router
