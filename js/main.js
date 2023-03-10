let nav = document.querySelector("#nav");
let open =  document.querySelector(".bi, .bi-list");
let close = document.querySelector(".close-menu");
let divname = document.querySelector("#divName");



open.addEventListener("click", ()=> {
    nav.classList.add("visible");
    divname.classList.add("visibilityimgHeader");
    open.classList.add("hiddenBtn");
    close.classList.remove("close-menu");
})



document.addEventListener("click", function(e){

    var clic = e.target;
    if(nav.className == "visible" && clic != open){
        nav.classList.remove("visible")
        divname.classList.remove("visibilityimgHeader");
        open.classList.remove("hiddenBtn");
        close.classList.add("close-menu");

    }
});



window.addEventListener('scroll', ()=>{
    let container = document.querySelector(".animation");
    let posObj = container.getBoundingClientRect().top
    let tamanioDePantalla = window.innerHeight/1

    if(posObj < tamanioDePantalla)
        container.style.animation = 'move 1s ease-out';
})