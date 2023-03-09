let nav = document.querySelector("#nav");
let open =  document.querySelector(".bi, .bi-list");
let divname = document.querySelector("#divName")

open.addEventListener("click", ()=> {
    nav.classList.add("visible");
    divname.classList.add("visibilityimgHeader");
    open.classList.add("hiddenBtn");

})


document.addEventListener("click", function(e){

    var clic = e.target;
    if(nav.className == "visible" && clic != open){
        nav.classList.remove("visible")
        divname.classList.remove("visibilityimgHeader");
        open.classList.remove("hiddenBtn");
    }
});