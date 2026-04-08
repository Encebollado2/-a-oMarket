// Js/main.js

let subMenu = document.getElementById("profileMenu");

function toggleMenu() {
    subMenu.classList.toggle("active");
}

// Cerrar el menú si se hace clic fuera de él
window.addEventListener('click', function(e) {
    // Buscamos el contenedor del perfil
    const profileWrapper = document.querySelector('.profile-wrapper');
    
    // Verificamos si existe el wrapper antes de comprobar el clic
    if (profileWrapper) {
        // Si el clic NO fue dentro del wrapper del perfil, cierra el menú
        if (!profileWrapper.contains(e.target)) {
            subMenu.classList.remove("active");
        }
    }
});