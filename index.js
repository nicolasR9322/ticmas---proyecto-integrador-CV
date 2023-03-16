let menu = document.querySelector(".menu-barra");
let closeBtn = document.querySelector(".close")
let navbar = document.querySelector(".navbar")

menu.addEventListener("click", abrirMenu)
closeBtn.addEventListener("click", cerrarMenu)

let cerrarLinks = document.querySelectorAll(".link-close");

for (let i = 0; i < cerrarLinks.length; i++) {
  cerrarLinks[i].addEventListener("click",cerrarMenu)
}

function abrirMenu() {
    navbar.style.width = "100%";
  }

function cerrarMenu() {
    navbar.style.width = "0";
}



for (let i = 0; i < cerrarLinks.length; i++) {
  if(window.matchMedia("(min-width:768px)").matches){
    cerrarLinks[i].addEventListener("click", abrirMenu)
  } else {
    cerrarLinks[i].addEventListener("click", cerrarMenu)
  }
  
};