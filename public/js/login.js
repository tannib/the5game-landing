const loginUser = document.querySelector("#username--login")
const loginPwd = document.querySelector("#password--login")

document.querySelector(".login").addEventListener("click", () => {
    document.querySelector(".popup__2__login").style.opacity = "1"
    document.querySelector(".popup__2__login").style.visibility = "visible"
    document.querySelector(".popup__2").style.opacity = "1"
    document.querySelector(".popup__2").style.visibility = "visible"
    loginUser.value = ""
    loginPwd.value = ""
})

document.querySelector("#nav__list--login").addEventListener("click", () => {
    document.getElementById("navi-toggle").checked = false
    document.querySelector(".popup__2__login").style.opacity = "1"
    document.querySelector(".popup__2__login").style.visibility = "visible"
    document.querySelector(".popup__2").style.opacity = "1"
    document.querySelector(".popup__2").style.visibility = "visible"
    document.querySelector(".popup__2__login").style.transitionDelay = ".4s"
    document.querySelector(".popup__2").style.transition = ".4s"
    loginUser.value = ""
    loginPwd.value = ""
})

document.querySelector(".login__icon").addEventListener("click", () => {
    document.querySelector(".popup__1__registration").style.opacity = "0"
    document.querySelector(".popup__1__registration").style.visibility = "hidden"
    document.querySelector(".popup__2").style.opacity = "0"
    document.querySelector(".popup__2").style.visibility = "hidden"
    document.querySelector(".popup__2__login").style.opacity = "0"
    document.querySelector(".popup__2__login").style.visibility = "hidden"
})


document.querySelector(".popup__2__blankspace").addEventListener("click", () => {
    if(loginUser.value.length === 0 && loginPwd.value.length === 0) {
        document.querySelector(".popup__1__registration").style.opacity = "0"
        document.querySelector(".popup__1__registration").style.visibility = "hidden"
        document.querySelector(".popup__2").style.opacity = "0"
        document.querySelector(".popup__2").style.visibility = "hidden"
        document.querySelector(".popup__2__login").style.opacity = "0"
        document.querySelector(".popup__2__login").style.visibility = "hidden"
    }
})

document.querySelector("#signup__from__login").addEventListener("click", () => {
    document.querySelector(".popup__2__login").style.opacity = "0"
    document.querySelector(".popup__2__login").style.visibility = "hidden"
    document.querySelector(".popup__2").style.opacity = "0"
    document.querySelector(".popup__2").style.visibility = "hidden"
    document.querySelector(".popup__1").style.opacity = "1"
    document.querySelector(".popup__1").style.visibility = "visible"
    document.querySelector(".popup__1__registration").style.opacity = "1"
    document.querySelector(".popup__1__registration").style.visibility = "visible"
})