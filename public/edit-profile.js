const main = async () => {
    const name = document.getElementById("name")
    const username = document.getElementById("username")
    const age = document.getElementById("age")
    const points = document.getElementById("points")
    const btnSave = document.getElementById("btnSave")
    const btnCancel = document.getElementById("btnCancel")

    const userId = localStorage.getItem("userId")

    const loadUserData = async () => {
        const user = await fetch(`http://localhost:3000/users/${userId}`)
        const userData = await user.json()
        name.value = userData.name
        username.value = userData.username
        age.value = userData.age
        points.value = userData.points
        return userData.password
    }

    const currentPassword = await loadUserData()

    const updateUser = async () => {
        const user = {
            name: name.value,
            username: username.value,
            age: age.value,
            points: points.value,
            password: currentPassword
        }

        const res = await fetch(`http://localhost:3000/users/${userId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })

        if (res.ok) {
            window.location.href = "profile.html"
        } else {
            alert("Error al actualizar los datos")
        }
    }

    btnSave.addEventListener("click", updateUser)
    btnCancel.addEventListener("click", () => {
        window.location.href = "profile.html"
    })
}

window.onload = main
