
//menu dla małych ekranów
const button = document.getElementsByClassName("menu-icon")[0];
const menu = document.getElementsByClassName("menu")[0];
button.onclick = () => {
    menu.classList.toggle("show");
    return false;
}

//smooth scroll do dołu 
let marginY = 0;
let destination = 0;
const speed = 9;
let scroller = null;

const initScroll = (elementId) => {
    destination = document.getElementById(elementId).offsetTop;
    scroller = setTimeout(() => {
        initScroll(elementId);
    }, 1);

    marginY = marginY + speed;

    if(marginY >=destination){
        clearTimeout(scroller);
    }

    window.scroll(0, marginY);
}

//smooth scroll do góry
function toTop(){
    scroller = setTimeout(() =>{
        toTop();
    }, 1);

    marginY = marginY - speed;

    if(marginY <= 0){
        clearTimeout(scroller);
    }

    window.scroll(0, marginY);
}

//alert do formularza kontaktowego
const message = document.getElementById("message");

message.addEventListener("click", () => {
    alert("Sorry, but this contact form is not valid yet. If you would like to contact me, please use my phone numer or e-mail :)")
})