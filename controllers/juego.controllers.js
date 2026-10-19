const {getConnection, sql} = require("../db")
const path = require("path")

const getJuego = (req, res) =>{
    res.sendFile(path.join(__dirname,"..","public", 'juego.html'))
}

const getJuegoUser = async (req, res) =>{
    const pool = await getConnection()
    const result = await pool.request()
        .input("id", sql.Int, req.params.id)
        .query("select name, points from users where id = @id")
    if(result.recordset.length === 0){
        res.status(404).json({message: "Usuario no encontrado"})
        return
    }
    res.json(result.recordset[0])
}

const putJuegoPoints = async (req, res) =>{
    const {points} = req.body
    const pool = await getConnection()
    await pool.request()
        .input("id", sql.Int, req.params.id)
        .input("points", sql.Int, points)
        .query("update users set points=@points where id = @id")
    res.json({status: "Puntos actualizados"})
}

module.exports = {getJuego, getJuegoUser, putJuegoPoints}