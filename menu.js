const btnMenu = document.getElementById("btn-menu");
const menuMovil = document.querySelector(".menu-movil");

let menuAbierto = false;

function abrirMenu() {
    menuMovil.style.right = "0";
    btnMenu.style.right = "250px"; 
    menuAbierto = true;
}

function cerrarMenu() {
    menuMovil.style.right = "-250px";
    btnMenu.style.right = "0"; 
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

document.addEventListener("click", function () {
    if (menuAbierto) {
        cerrarMenu();
    }
});
