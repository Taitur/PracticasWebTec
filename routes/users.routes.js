const express = require("express")
const router = express.Router()
const path = require("path")

const users = require(path.join(__dirname,"..", "controllers", "users.controllers.js"))

router.get("/lastId", users.getLastUserId)
router.get("/:id", users.getUser)
router.get("/", users.getUsers)
router.post("/:id", users.postUser)
router.put("/:id", users.putUser)
router.delete("/:id", users.deleteUser)


module.exports = router
