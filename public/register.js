const main = async () => {
    const username = document.getElementById("username")
    const password = document.getElementById("password")
    const age = document.getElementById("age")
    const name = document.getElementById("name")
    const btnRegister = document.getElementById("btnRegister")

    const register = async () => {
        try {
            let id = await fetch(`http://localhost:3000/users/lastId`)
            id = await id.json()
            id = (id && id.id ? parseInt(id.id) : 0) + 1

            const user = {
                age: age.value,
                name: name.value,
                username: username.value,
                password: password.value,
                points: 0
            }

            const res = await fetch(`http://localhost:3000/users/${id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            })

            if (!res.ok) {
                alert("No se pudo registrar el usuario. Intenta de nuevo.")
                return
            }

            alert("Usuario registrado correctamente.")
            window.location.href = "index.html"
        } catch (err) {
            console.error(err)
            alert("No se pudo registrar el usuario. Intenta de nuevo.")
        }
    }

    btnRegister.addEventListener("click", register)

}

window.onload = main
