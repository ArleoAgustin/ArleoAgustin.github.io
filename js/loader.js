const loader = document.querySelector(".loader");
const main = document.querySelector("article")
const header = document.querySelector("header");
const container = document.querySelector(".container");

function init(){
    setTimeout(() =>{
           loader.style.opacity = 0;
           loader.style.display = 'none';

    }
    ,3000);
}

setTimeout(() =>{
main.style.opacity = 1; 
main.style.display = "block";

header.style.opacity = 1;
header.style.display = "block";
header.style.animation = "showHeader 4s";
header.style.top = "0px"
}
,5800);


init();
