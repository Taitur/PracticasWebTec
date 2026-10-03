const crypto = require("crypto")

const getSalt = () => {

    return crypto.randomBytes(50).toString("base64url").substring(0, process.env.SALT_SIZE)
}

const hashPassword = (password, salt) => {
   const newPassword = salt + password + process.env.PEPPER
   return crypto.createHash("sha512").update(salt + password).digest("base64url")

}

module.exports = {getSalt, hashPassword}