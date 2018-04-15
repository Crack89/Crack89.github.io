var button = document.getElementsByClassName("menu-icon")[0];
var menu = document.getElementsByClassName("menu")[0];
button.onclick = function() {
    menu.classList.toggle("show");
    return false;
}


var marginY = 0;
var destination = 0;
var speed = 9;
var scroller = null;

function initScroll(elementId){
    destination = document.getElementById(elementId).offsetTop;
    // console.log(destination);
    scroller = setTimeout(function(){
        initScroll(elementId);
    }, 1);

    marginY = marginY + speed;

    if(marginY >=destination){
        clearTimeout(scroller);
    }

    window.scroll(0, marginY);
}
function toTop(){
    scroller = setTimeout(function(){
        toTop();
    }, 1);

    marginY = marginY - speed;

    if(marginY <= 0){
        clearTimeout(scroller);
    }

    window.scroll(0, marginY);
}