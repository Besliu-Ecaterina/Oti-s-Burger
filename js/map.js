var find = document.querySelector(".found")
var map = document.querySelector(".hide-map")
var btn = document.querySelector(".map-close")

    find.addEventListener("click", function (evt) {
        evt.preventDefault();
        map.classList.add("show-map")
    })

    btn.addEventListener("click", function () {
        map.classList.remove("show-map")
    })
