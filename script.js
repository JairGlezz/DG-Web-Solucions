const hamburger = document.getElementById('hamburger');
    const menuEnlaces = document.getElementById('menu-enlaces');

    hamburger.addEventListener('click', () => {
        menuEnlaces.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en cualquier enlace (opcional pero útil)
    document.querySelectorAll('.menu-enlaces a').forEach(link => {
        link.addEventListener('click', () => {
            menuEnlaces.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });