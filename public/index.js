const main = () => {
    const username = document.getElementById("username")
    const password = document.getElementById("password")
    const btn = document.getElementById("btn")
    const btnGoRegister = document.getElementById("btnGoRegister")

    const login = async () => {
        const user = {
            username: username.value,
            password: password.value
        }

        const res = await fetch(`http://localhost:3000/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        const data = await res.json()
        localStorage.setItem("userId", data.id.toString())
        window.location.href = "profile.html"
    }

    btn.addEventListener("click", login)
    btnGoRegister.addEventListener("click", () => {
        window.location.href = "register.html"
    })

}

window.onload = main
