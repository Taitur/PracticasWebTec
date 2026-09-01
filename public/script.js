


const username = document.getElementById("username")
const password = document.getElementById("password")
const btn = document.getElementById("btn")

const login = () =>{
    if (username.value === "patxi" && password.value ==="angulo" ){
        alert("Login correcto")
    }else{
        alert("Login incorrecto")
    }
}

btn.addEventListener("click", login)
