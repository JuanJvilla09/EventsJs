// Selección de elementos DOM con querySelector
const menu = document.querySelector('div[style*="position:fixed;background-color:black"]');
const myBtn = document.getElementById('myBtn');
let lastScrollPosition = window.pageYOffset;

// Controlador de evento scroll
window.addEventListener('scroll', function() {
    const currentScrollPosition = window.pageYOffset;
    
    // Mostrar/ocultar botón
    if (currentScrollPosition > 100) {
        myBtn.style.display = "block";
    } else {
        myBtn.style.display = "none";
    }
    
    // Cambia el color del menú al bajar
    if (currentScrollPosition > lastScrollPosition) {
        menu.style.backgroundColor = 'darkblue';
    } else {
        menu.style.backgroundColor = 'black';
    }
    
    lastScrollPosition = currentScrollPosition;
});

// Controlador de clic para el botón
myBtn.addEventListener('click', function() {
    // Scroll del  principio
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    
    // Oculta botón inmediatamente
    myBtn.style.display = "none";
    
    // Oculta menú con una breve transicion
    menu.style.transition = 'transform 0.3s ease-out';
    menu.style.transform = 'translateY(-100%)';
    
    // Restaura el menu despues de un Scroll completo
    setTimeout(() => {
        menu.style.transform = 'translateY(0)';
    }, 500);
});