//elementos del DOM
    const sidebar = document.getElementById('mySidebar');
    const openBtn = document.querySelector('.openbtn');
    const closeBtn = document.querySelector('.closebtn');

    // Evento para abrir el menú
    openBtn.addEventListener('click', () => {
        sidebar.style.left = '0'; // Muestra el menú
        document.getElementById('main').style.marginLeft = '200px'; // Desplaza el contenido
    });

    // Evento para cerrar el menú
    closeBtn.addEventListener('click', () => {
        sidebar.style.left = '-200px'; // Oculta el menú
        document.getElementById('main').style.marginLeft = '0'; // Restablece el contenido
    });
