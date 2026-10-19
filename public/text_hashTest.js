const path = require('path');
const {getSalt,hashPassword} = require(path.join(__dirname, '../hash.js'));

let texto = "hola, esto es una verificación de hash"
let salt = getSalt();
let hashedText = hashPassword(texto, salt);

console.log("Primer texto hasheado: ", hashedText);
texto = "otro texto para hashear";
let hashedText2 = hashPassword(texto, salt);
console.log("texto hasheado cambiado: ", hashedText2);