const btnMenu = document.getElementById("btn-menu");
const menuMovil = document.querySelector(".menu-movil");

let menuAbierto = false;

function abrirMenu() {
    menuMovil.style.right = "0";
    btnMenu.style.right = "250px"; // Ajusta el valor para ajustar la posición del botón
    menuAbierto = true;
}

function cerrarMenu() {
    menuMovil.style.right = "-250px";
    btnMenu.style.right = "0"; // Restaura la posición original del botón cuando se cierra el menú
    menuAbierto = false;
}

btnMenu.addEventListener("click", function (e) {
    e.stopPropagation();
    if (menuAbierto) {
        cerrarMenu();
    } else {
        abrirMenu();
    }
});

document.addEventListener("click", function (e) {
    if (menuAbierto && e.target !== menuMovil && e.target !== btnMenu) {
        cerrarMenu();
    }
});

menuMovil.addEventListener("click", function (e) {
    e.stopPropagation(); 
});

// Cierra el menú si se hace clic en cualquier otro lugar de la página
document.addEventListener("click", function () {
    if (menuAbierto) {
        cerrarMenu();
    }
});
