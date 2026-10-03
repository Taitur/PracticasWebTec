const express = require("express")
const router = express.Router()
const path = require("path")
const {getIndex, getTags, getProfile, getForm, getHome, getLogin, getRegister} = require(path.join(__dirname, "..", "controllers", "index.controllers"))

router.get("/", getIndex);
router.get("/index", getIndex);


router.get("/tags", getTags)
router.get("/profile", getProfile)

router.get("/form", getForm)

router.get("/home", getHome)

router.get("/register", getRegister)

module.exports = router