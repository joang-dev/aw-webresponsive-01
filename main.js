const menuIcon = document.getElementById("menuToggle")
const body = document.querySelector("body")
function displayMenu () {
    if (body.hasAttribute("class")) {
        body.removeAttribute("class")
    } else {
        body.setAttribute("class", "noNav")
    }
}

menuIcon.addEventListener("click", displayMenu)