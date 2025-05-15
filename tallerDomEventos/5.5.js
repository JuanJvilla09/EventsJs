const checkbox = document.querySelector("#myCheck"); // Selecciona por ID
const text = document.querySelector("#text"); // Selecciona por ID

//Eventp
checkbox.addEventListener("change", function() {
text.style.display = this.checked ? "block" : "none";
});