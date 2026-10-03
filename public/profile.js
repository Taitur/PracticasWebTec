const main = async () => {
    const namePro = document.getElementById("nameProfile")
    const usernamePro = document.getElementById("usernameProfile")
    const agePro = document.getElementById("ageProfile")
    const pointsPro = document.getElementById("pointsProfile")
    const editButton = document.getElementById("editProfile")
    const deleteButton = document.getElementById("deleteUser")

    console.log(localStorage.getItem("userId"))
    const user = await fetch(`http://localhost:3000/users/${localStorage.getItem("userId")}`)
    const userData = await user.json()
    namePro.innerText = userData.name
    usernamePro.innerText = userData.username
    agePro.innerText = userData.age
    pointsPro.innerText = userData.points

    editButton.addEventListener("click", () => {
        window.location.href = "edit-profile.html"
    })
    deleteButton.addEventListener("click", async () => {
        const user = await fetch(`http://localhost:3000/users/${localStorage.getItem("userId")}`, {method: "DELETE"})
        namePro.innerText = ""
        usernamePro.innerText = ""
        agePro.innerText = ""
        pointsPro.innerText = ""
        window.location.href = "index.html"
    })
}

window.onload = main
