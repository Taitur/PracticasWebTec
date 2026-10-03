const main = () => {
    const btnshowusr = document.getElementById("btnshowusr")
    const usr = document.getElementById("usr")

    if (usr) usr.innerText = localStorage.getItem("username")

    const actualizarUsuario = () => {
        usr.hidden = !usr.hidden
    }

    btnshowusr.addEventListener("click", actualizarUsuario)
}

window.onload = main
