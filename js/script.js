var link = document.querySelector(".nav-btn")
var button = document.querySelector(".mobile-close")
var nav = document.querySelector(".main-navigation")
var site = document.querySelector(".site-navigation")
var logo = document.querySelector(".header-logo")


link.addEventListener("click", function () {
    nav.classList.add("mobile-main-nav")
    site.classList.add("mobile-site-nav")
    button.classList.add("close-btn")
    link.classList.add("nav-btn-none")
    logo.classList.add("header-logo-none")
})

button.addEventListener("click", function () {
    nav.classList.remove("mobile-main-nav")
    site.classList.remove("mobile-site-nav")
    link.classList.remove("nav-btn-none")
    logo.classList.remove("header-logo-none")
    button.classList.remove("close-btn")
})









