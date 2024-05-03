const hamburguer = document.getElementById("hamburguer")
const menu = document.querySelector(".menu")

hamburguer.addEventListener("click", ()=>{
    menu.classList.toggle("aberto")
})