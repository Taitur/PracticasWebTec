const express = require("express");
const path = require("path");
const morgan = require("morgan");
require('dotenv').config()
const indexRoutes = require(path.join(__dirname,"routes", "index.routes.js"))
const usersRoutes = require(path.join(__dirname,"routes", "users.routes.js"))
const loginRoutes = require(path.join(__dirname,"routes", "login.routes.js"))
const marcoRoutes = require(path.join(__dirname,"routes", "marco.routes.js"))
const pingRoutes = require(path.join(__dirname,"routes", "ping.routes.js"))
const juegoRoutes = require(path.join(__dirname, "routes","juego.routes.js"))



const app = express();
const PORT = Number(process.env.PORT) || 3000;
const URL = "http://localhost:"+PORT;

app.use(morgan("dev"))
app.use(express.static("public"))
app.use(express.static("public/img"))
app.use(express.json())
app.use("/", indexRoutes)
app.use("/users", usersRoutes)
app.use("/login", loginRoutes)
app.use("/marco", marcoRoutes)
app.use("/ping", pingRoutes)
app.use("/juego", juegoRoutes)




app.listen( PORT, () =>{
    console.log("Corriendo en la dirección: " + URL)
})

module.exports = app