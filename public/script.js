



const main = () =>{
    const username = document.getElementById("username")
    const password = document.getElementById("password")
    const btn = document.getElementById("btn")
    const check1 = document.getElementById("check1")
    const check2 = document.getElementById("check2")
    const btncheck = document.getElementById("btncheck")
    const countrieList = document.getElementById("countries")
    const regionList = document.getElementById("regions")
    const hidbutton = document.getElementById("hidbutton")
    const radio1 = document.getElementById("r1")
    const radio2 = document.getElementById("r2")
    const radio3 = document.getElementById("r3")
    const btnshowusr = document.getElementById("btnshowusr")
    const usr = document.getElementById("usr")
    if(usr)usr.innerText = localStorage.getItem("username")



    const login = () =>{
        if (username.value === "patxi" && password.value ==="angulo" ){
            alert("Login correcto")
            localStorage.setItem("username", username.value)
            window.location.href = "/home"

        }else{
            alert("Login incorrecto")
        }
    }

    if (btn) {
        btn.addEventListener("click", login)
    }






    fetch('/country-region-data.json')
        .then(res => res.json())
        .then(datosPaises => {
            datosPaises.forEach(country => {
                const newCountry = document.createElement("option")
                newCountry.text = country.countryName
                newCountry.value = country.countryCode
                countrieList.appendChild(newCountry)

                country.regions.forEach(region => {
                    const newRegion = document.createElement("option")
                    newRegion.text = region.name
                    newRegion.value = region.shortCode
                    regionList.appendChild(newRegion)
                })
            })
        })
        .catch(err => console.error("Error cargando JSON:", err))


    const actualizar = () => {
        btncheck.disabled = !(check1.checked && check2.checked)
    }

    const actualizarRadio = () => {
        hidbutton.hidden = !(radio1.checked || radio2.checked || radio3.checked)
    }

    const actualizarUsuario = () => {
        usr.hidden = !usr.hidden
    }


    if(check1){
        check1.addEventListener("change", actualizar)

    }

    if( check2 ){
        check2.addEventListener("change", actualizar)
    }

    if( radio1 ){

        radio1.addEventListener("change", actualizarRadio)

    }

    if( radio2 ){
        radio2.addEventListener("change", actualizarRadio)
    }

    if( radio3 ){
        radio3.addEventListener("change", actualizarRadio)

    }

    if( btnshowusr){
        btnshowusr.addEventListener("click", actualizarUsuario)
    }


}

window.onload = main