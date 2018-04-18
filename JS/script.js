const button = document.getElementsByClassName("menu-icon")[0];
const menu = document.getElementsByClassName("menu")[0];
button.onclick = function() {
    menu.classList.toggle("show");
    return false;
}


let marginY = 0;
let destination = 0;
const speed = 9;
let scroller = null;

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

const message = document.getElementById("message");

message.addEventListener("click", function(){
    alert("Sorry, but this contact form is not valid yet. If you would like to contact me, please use my phone numer or e-mail :)")
})