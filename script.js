var button = document.getElementsByClassName("menu-icon")[0];
var menu = document.getElementsByClassName("menu")[0];
button.onclick = function() {
    menu.classList.toggle("show");
    return false;
}