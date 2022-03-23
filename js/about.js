

var about1 = document.querySelector(".about-item-1")
var about2 = document.querySelector(".about-item-2")
var about3 = document.querySelector(".about-item-3")
var about4 = document.querySelector(".about-item-4")
var about5 = document.querySelector(".about-item-5")


    about1.addEventListener("click", function (About) {
        about1.classList.add("about-item-active")
        about2.classList.remove("about-item-active")
        about3.classList.remove("about-item-active")
        about4.classList.remove("about-item-active")
        about5.classList.remove("about-item-active")
    })

    about2.addEventListener("click", function (About) {
        about1.classList.remove("about-item-active")
        about2.classList.add("about-item-active")
        about3.classList.remove("about-item-active")
        about4.classList.remove("about-item-active")
        about5.classList.remove("about-item-active")
    })

    about3.addEventListener("click", function (About) {
        about1.classList.remove("about-item-active")
        about2.classList.remove("about-item-active")
        about3.classList.add("about-item-active")
        about4.classList.remove("about-item-active")
        about5.classList.remove("about-item-active")
    })

    about4.addEventListener("click", function (About) {
        about1.classList.remove("about-item-active")
        about2.classList.remove("about-item-active")
        about3.classList.remove("about-item-active")
        about4.classList.add("about-item-active")
        about5.classList.remove("about-item-active")
    })

    about5.addEventListener("click", function (About) {
        about1.classList.remove("about-item-active")
        about2.classList.remove("about-item-active")
        about3.classList.remove("about-item-active")
        about4.classList.remove("about-item-active")
        about5.classList.add("about-item-active")
    })





