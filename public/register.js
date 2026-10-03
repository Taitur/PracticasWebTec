const main = async () => {
    const username = document.getElementById("username")
    const password = document.getElementById("password")
    const age = document.getElementById("age")
    const name = document.getElementById("name")
    const btnRegister = document.getElementById("btnRegister")

    const register = async () => {
        let id = await fetch(`http://localhost:3000/users/lastId`)
        id = await id.json()
        console.log(id)
        id = parseInt(id.id) + 1

        const user = {
            age: age.value,
            name: name.value,
            username: username.value,
            password: password.value,
            points: 0
        }

        const res = fetch(`http://localhost:3000/users/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
    }

    btnRegister.addEventListener("click", register)

}

window.onload = main
