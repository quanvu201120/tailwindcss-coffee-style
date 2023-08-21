const topMenu = document.getElementById("ct-top-menu")
const toggleTopMenu = document.getElementById("ct-toggle-top-menu")

document.addEventListener("click", (event) => {
    if (toggleTopMenu.contains(event.target)) {
        //click toggle top menu
        console.log(toggleTopMenu);
        console.log(event.target);
        topMenu.classList.toggle("hidden")
        topMenu.classList.toggle("ct-top-menu-expanded")
    }
    else {
        //click outside
        if (topMenu.classList.contains("ct-top-menu-expanded")) {
            topMenu.classList.add("hidden")
            topMenu.classList.remove("ct-top-menu-expanded")
        }
    }
})