const selectNieve = document.querySelector('.nieve');
const divResultado = document.querySelector('.resultado');

// evento change
selectNieve.addEventListener('change', function() {
// Verificamos que haya una selección válida (no sea la opción vacía)
if(this.value !== '') {
divResultado.textContent = `Sabor seleccionado: ${this.options[this.selectedIndex].text}`;
// Alternativa: divResultado.textContent = `Sabor seleccionado: ${this.value}`;
} else {
    divResultado.textContent = ''; // Limpiamos si se selecciona la opción vacía
}
    });