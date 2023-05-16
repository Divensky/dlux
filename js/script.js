let toggle = document.querySelector(".toggle");
let menu = document.querySelector("header");

/* Toggle flyout menu */
function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
            // change the menu icon to mobile menu
            toggle.querySelector("img").src = "img/icon_menu.svg";
    } else {
        menu.classList.add("active");

        // change the menu icon to close button
        toggle.querySelector("img").src = "img/icon_exit_menu.svg";
    }
}
/* Event Listener */
toggle.addEventListener("click", toggleMenu, false);