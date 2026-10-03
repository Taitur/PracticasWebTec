const main = () => {
    const check1 = document.getElementById("check1")
    const check2 = document.getElementById("check2")
    const btncheck = document.getElementById("btncheck")
    const countrieList = document.getElementById("countries")
    const regionList = document.getElementById("regions")
    const hidbutton = document.getElementById("hidbutton")
    const radio1 = document.getElementById("r1")
    const radio2 = document.getElementById("r2")
    const radio3 = document.getElementById("r3")

    const actualizar = () => {
        btncheck.disabled = !(check1.checked && check2.checked)
    }

    const actualizarRadio = () => {
        hidbutton.hidden = !(radio1.checked || radio2.checked || radio3.checked)
    }

    if (countrieList != null) {
        fetch('./country-region-data.json')
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
    }

    check1.addEventListener("change", actualizar)
    check2.addEventListener("change", actualizar)
    radio1.addEventListener("change", actualizarRadio)
    radio2.addEventListener("change", actualizarRadio)
    radio3.addEventListener("change", actualizarRadio)

}

window.onload = main
