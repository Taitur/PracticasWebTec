const {getConnection, sql} = require("../db")
const path = require("path")
const {hashPassword} = require("../hash")
const {getSalt} = require("../hash")

const login = async(req, res) =>{
    const {username, password} = req.body
    const pool = await getConnection()
    const result = await pool.request()
        .input("username", sql.VarChar, username)
        .query("select * from users where username = @username")
    if(result.recordset.length === 0){
        res.status(401).json({message: "Invalid credentials"})
        return
    }
    console.log(result.recordset.length)
    const user = result.recordset[0]
    const salt = user.password.substring(0, process.env.SALT_SIZE)
    const hashedPassword = hashPassword(password, salt)
    if(user.password === salt + hashedPassword){
        res.json({ id: user.id, username: user.username })
    }else{
        res.status(401).json({message: "Invalid credentials"})
    }
}



const loginGet = async(req, res) =>{
    res.sendFile(path.join(__dirname, 'index.html'))
}

module.exports = {login, loginGet}
