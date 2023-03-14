let nav = document.querySelector("#nav");
let open =  document.querySelector(".bi, .bi-list");
let close = document.querySelector(".close-menu");
let divname = document.querySelector("#divName");
let about = document.querySelector(".about");

let btnClick;

open.addEventListener("click", ()=> {
    nav.classList.add("visible");
    divname.classList.add("visibilityimgHeader");
    open.classList.add("hiddenBtn");
    close.classList.remove("close-menu");
})



document.addEventListener("click", function(e){
    btnClick = e.target;
    var clic = e.target;
    if(nav.className == "visible" && clic != open){
        nav.classList.remove("visible")
        divname.classList.remove("visibilityimgHeader");
        open.classList.remove("hiddenBtn");
        close.classList.add("close-menu");

    }
});




window.addEventListener('scroll', ()=>{
    let container = document.querySelectorAll(".animation");
   
    for (let i = 0; i < container.length; i++){

        let posObj = container[i].getBoundingClientRect().top
        let tamanioDePantalla = window.innerHeight;
        if(posObj < tamanioDePantalla)
            container[i].style.animation = 'move 1.2s ease-out';

    }
})


let ubicacionPrincipal  = window.pageYOffset;
window.onscroll = function() {
    let Desplazamiento_Actual = window.pageYOffset;
    if(ubicacionPrincipal >= Desplazamiento_Actual){
        document.querySelector("header").style.top = '0';
    }
    else{
        if(btnClick != open)
            document.querySelector("header").style.top = '-100px';
    }
    ubicacionPrincipal = Desplazamiento_Actual;
}



setTimeout(() =>{

    about.style.margin = '28px 0px 0px 0px';
    about.style.animation = 'deslizar 4s 1';
},3000) 