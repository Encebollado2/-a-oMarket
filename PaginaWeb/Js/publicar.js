// 1. Seleccionar elementos
const modal = document.getElementById("modalPublicar");
const btnAbrirModal = document.querySelector(".header__actions .btn-primary");
const formProducto = document.getElementById("formProducto");
const gridProductos = document.querySelector(".products-grid");

// 2. Funciones para abrir y cerrar el modal
btnAbrirModal.addEventListener("click", () => {
    modal.style.display = "flex";
});

function cerrarModal() {
    modal.style.display = "none";
}

// 3. Manejar el envío del formulario
formProducto.addEventListener("submit", function(evento) {
    evento.preventDefault(); // Evita que la página se recargue

    // Obtener los valores que escribió el usuario
    const nombre = document.getElementById("prodNombre").value;
    const precio = parseFloat(document.getElementById("prodPrecio").value).toFixed(2);
    const ubicacion = document.getElementById("prodUbicacion").value;
    const imagenUrl = document.getElementById("prodImagen").value;

    // Crear la estructura HTML del nuevo producto
    const nuevoProductoHTML = `
        <article class="product-card">
            <div class="card-image">
                <img src="${imagenUrl}" onerror="this.src='https://via.placeholder.com/300'" alt="${nombre}">
                <span class="badge">Nuevo</span>
            </div>
            <div class="card-content">
                <h3 class="card-title">${nombre}</h3>
                <div class="card-location">
                    <span class="material-icons-round" style="font-size: 14px;">place</span> ${ubicacion}
                </div>
                <div class="card-footer">
                    <span class="price">$${precio}</span>
                    <button class="btn-icon" title="Chat"><span class="material-icons-round">chat_bubble_outline</span></button>
                </div>
            </div>
        </article>
    `;

    // Insertar el nuevo producto al principio de la lista
    gridProductos.insertAdjacentHTML("afterbegin", nuevoProductoHTML);

    // Limpiar el formulario y cerrar el modal
    formProducto.reset();
    cerrarModal();
});