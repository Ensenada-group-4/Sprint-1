class User {
    constructor(fullName, location, birth, email, phone) {
        this.fullName = fullName
        this.location = location
       
        this.birth = birth
        this.email = email
        this.phone = phone
    }
}

let newUser = new User()

function personalDetails() {
    newUser.fullName = prompt("Introduzca su nombre completo")
    newUser.location = prompt("Introduzca su ciudad y país de residencia")
    newUser.birth = prompt("Introduzca su fecha de nacimiento (DD/MM/YY)")

    document.getElementById("profile-fullName").innerHTML = newUser.fullName
    document.getElementById("profile-location").innerHTML =newUser.location
    document.getElementById("profile-birthDate").innerHTML = newUser.birth
    
}


function contactInformation() {
    newUser.email = prompt("Introduzca su email")
    newUser.phone = prompt("Introduzca su teléfono")

    document.getElementById("profile-email").innerHTML = newUser.email
    document.getElementById("profile-phone").innerHTML = newUser.phone
}




console.log(newUser)