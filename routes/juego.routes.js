const express = require("express")
const router = express.Router()
const path = require("path")

const {getJuego, getJuegoUser, putJuegoPoints} = require(path.join(__dirname, "..", "controllers", "juego.controllers.js"))

router.get("/", getJuego)
router.get("/:id", getJuegoUser)
router.put("/:id", putJuegoPoints)

module.exports = router