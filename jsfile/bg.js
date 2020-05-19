const body=  document.querySelector("body");
const menu=  body.querySelector(".menu");

const IMG_NUMBER = 2;

function paintImage(imgNumber){
    const image = new Image();
    image.src = `images/${imgNumber}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
    switch(imgNumber){
        case 1: menu.setAttribute("style","background-color: #458485;");
        break;
        case 2: menu.setAttribute("style","background-color: #405b87;");
        break;
    }
    if(imgNumber==1){
                
    }
}

function genRandom(IMG_NUMBER){
    const number = Math.ceil(Math.random() * IMG_NUMBER);
    return number;
}
function init(){
    const randomNumber = genRandom(IMG_NUMBER);
    paintImage(randomNumber);
}

init();