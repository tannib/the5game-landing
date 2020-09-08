const inputName = document.querySelector("#name")
const inputSurname = document.querySelector("#surname")
const inputMail = document.querySelector("#email")
const inputUser = document.querySelector("#username")
const inputPwd = document.querySelector("#password")

document.querySelector(".signup").addEventListener("click", () => {
    document.querySelector(".popup__1__registration").style.opacity = "1"
    document.querySelector(".popup__1__registration").style.visibility = "visible"
    document.querySelector(".popup__1").style.opacity = "1"
    document.querySelector(".popup__1").style.visibility = "visible"
    inputName.value = ""
    inputSurname.value = ""
    inputMail.value = ""
    inputUser.value = ""
    inputPwd.value = ""

})

document.querySelector("#nav__list--signup").addEventListener("click", () => {
    document.getElementById("navi-toggle").checked = false
    document.querySelector(".popup__1__registration").style.opacity = "1"
    document.querySelector(".popup__1__registration").style.visibility = "visible"
    document.querySelector(".popup__1").style.opacity = "1"
    document.querySelector(".popup__1").style.visibility = "visible"
    document.querySelector(".popup__1__registration").style.transitionDelay = ".4s"
    document.querySelector(".popup__1").style.transition = ".4s"
    inputName.value = ""
    inputSurname.value = ""
    inputMail.value = ""
    inputUser.value = ""
    inputPwd.value = ""
})

document.querySelector(".registration__icon").addEventListener("click", () => {
    document.querySelector(".popup__1__registration").style.opacity = "0"
    document.querySelector(".popup__1__registration").style.visibility = "hidden"
    document.querySelector(".popup__1").style.opacity = "0"
    document.querySelector(".popup__1").style.visibility = "hidden"
    document.querySelector(".popup__2__login").style.opacity = "0"
    document.querySelector(".popup__2__login").style.visibility = "hidden"
})

document.querySelector(".popup__1__blankspace").addEventListener("click", () => {
    if(inputName.value.length === 0 && inputSurname.value.length === 0 && inputMail.value.length === 0 && inputUser.value.length === 0 && inputPwd.value.length === 0) {
        document.querySelector(".popup__1__registration").style.opacity = "0"
        document.querySelector(".popup__1__registration").style.visibility = "hidden"
        document.querySelector(".popup__1").style.opacity = "0"
        document.querySelector(".popup__1").style.visibility = "hidden"
        document.querySelector(".popup__2__login").style.opacity = "0"
        document.querySelector(".popup__2__login").style.visibility = "hidden"
    }
})

document.querySelector("#login__from__signup").addEventListener("click", () => {
        document.querySelector(".popup__1__registration").style.opacity = "0"
        document.querySelector(".popup__1__registration").style.visibility = "hidden"
        document.querySelector(".popup__1").style.opacity = "0"
        document.querySelector(".popup__1").style.visibility = "hidden"
        document.querySelector(".popup__2").style.opacity = "1"
        document.querySelector(".popup__2").style.visibility = "visible"
        document.querySelector(".popup__2__login").style.opacity = "1"
        document.querySelector(".popup__2__login").style.visibility = "visible"
})