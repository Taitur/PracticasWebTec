const {getConnection, sql} = require("../db")
const path = require("path")
const {getSalt, hashPassword} = require(path.join(__dirname, "..", "hash.js"))

const getUsers = async (req, res) =>{
    const pool = await getConnection()
    const result = await pool.request().query("select * from users")
    res.json(result.recordset)
}

const getUser = async (req, res) =>{
    const pool = await getConnection()
    const result = await pool.request()
        .input("id", sql.Int, req.params.id)
        .query("select * from users where id = @id")
    res.json(result.recordset[0])
}

const getLastUserId = async (req, res) =>{
    const pool = await getConnection()
    const result = await pool.request().query("SELECT id FROM users ORDER BY id DESC")
    res.json(result.recordset[0])
    return result.recordset[0].id
}



const postUser = async (req, res) =>{
    const {name, age, points, username, password} = req.body
    const id = req.params.id
    const salt = getSalt()
    const hashedPassword = hashPassword(password, salt)
    const pool = await getConnection()
    const result = await pool.request()
        .input("id", sql.Int, id)
        .input("name", sql.VarChar, name)
        .input("age", sql.Int, age)
        .input("points", sql.Int, points)
        .input("username", sql.VarChar, username)
        .input("password", sql.VarChar,salt + hashedPassword)
        .query("insert into users (id,name, age, points, username, password) values (@id,@name, @age, @points, @username, @password)")
    res.json({status: "Login exitoso"})
}

const putUser = async (req, res) =>{
    const {name, age, points, username, password} = req.body
    const pool = await getConnection()
    const result = await pool.request()
        .input("id", sql.Int, req.params.id)
        .input("name", sql.VarChar, name)
        .input("age", sql.Int, age)
        .input("points", sql.Int, points)
        .input("username", sql.VarChar, username)
        .input("password", sql.VarChar, password)
        .query("update users set name=@name, age=@age, points=@points, username=@username, password=@password where id = @id")
    res.json({status: "Update exitoso"})
}

const deleteUser = async (req, res) =>{
    const pool = await getConnection()
    const result = await pool.request()
        .input("id", sql.Int, req.params.id)
        .query("delete from users where id = @id")
    res.json(result)
}

module.exports = {getUsers, getUser, postUser, deleteUser, putUser, getLastUserId}
