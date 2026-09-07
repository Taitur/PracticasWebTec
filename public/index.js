const express = require("express");
const path = require("path");
const {isAuth} = require("./middlewares.js");


const app = express();
const PORT = 3000;
const URL = "http://localhost:"+PORT;


app.use(express.static("public"))
app.use(express.static("public/img"))
app.use(express.json())

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
});
app.get("/index", (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
});

app.get("/login", (req, res) =>{

   res.sendFile(path.join(__dirname, 'index.html'))
})

app.get("/tags", (req, res) =>{

    res.sendFile(path.join(__dirname,'tags.html'))
})
app.get("/profile", (req, res) =>{

    res.sendFile(path.join(__dirname, 'profile.html'))
})

app.get("/form", (req, res) =>{

    res.sendFile(path.join(__dirname, 'form.html'))
})

app.get("/home", (req, res) =>{

    res.sendFile(path.join(__dirname, 'home.html'))
})



app.listen( PORT, () =>{
    console.log("Corriendo en la dirección: " + URL)
})