const menuIcon = document.getElementById("menuToggle")
const body = document.querySelector("body")
function displayMenu () {
    if (body.hasAttribute("id")) {
        body.removeAttribute("id")
    } else {
        body.setAttribute("id", "noNav")
    }

    menuActive()
}

function menuActive () {
    if (menuIcon.classList.contains("active")) {
        menuIcon.classList.remove("active")
    } else {
        menuIcon.classList.add("active")
    }
}

menuIcon.addEventListener("click", displayMenu)