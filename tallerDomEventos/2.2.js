let boton =document.querySelector(".dropbtn");
let menu = document.querySelector("#myDropdown");

boton.addEventListener("click", () => {
    menu.classList.toggle("show");
})