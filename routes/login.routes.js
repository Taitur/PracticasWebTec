const express = require("express")
const router = express.Router()
const path = require("path")
const {login, loginGet} = require(path.join(__dirname,".." ,"controllers", "login.controllers.js"))

router.post("/", login)

router.get("/", loginGet)

module.exports = router