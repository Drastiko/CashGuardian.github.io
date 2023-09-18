function convertirMoneda() {
  const monto = parseFloat(document.querySelector(".form-control").value);
  const monedaNatal = document.getElementById("moneda-natal").value;
  const monedaCambio = document.getElementById("moneda-cambio").value;
  const tasasDeCambio = {
    usd: 1.0,
    eur: 0.85,
    gbp: 0.73,
    jpy: 110,
    cny: 6.45,
    aud: 1.36,
    mxn: 20.15,
    brl: 5.26,
    cad: 1.26,
    inr: 73.5,
    krw: 1.116,
    zar: 14.75,
    chf: 0.92,
    ars: 100,
    cop: 3.8,
    pen: 4.0,
    clp: 800,
    uyu: 43,
    crc: 635,
    dop: 57,
    gtq: 7.75,
  };
  if (
    isNaN(monto) ||
    monedaNatal === "Selecciona una moneda natal" || monedaCambio === "Selecciona una moneda de cambio") {
    mostrarMensajeError();
  } 
  else {
    const resultado = (monto * tasasDeCambio[monedaCambio]) / tasasDeCambio[monedaNatal];
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.textContent = `${monto} ${monedaNatal} = ${resultado.toFixed()} ${monedaCambio}`;
    cambiarFecha();
    mostrarMensaje();
  }
}
const conversor = document.getElementById("convertir");
conversor.addEventListener("click", convertirMoneda);

function mostrarMensajeError() {
  var mensaje = document.getElementById("mensaje");
  mensaje.style.display = "block";

  setTimeout(function () {
    mensaje.style.display = "none";
  }, 3000);
}


function mostrarMensaje() {
    var mensaje = document.getElementById("mensaje-correcto");
    mensaje.style.display = "block";
  
    setTimeout(function () {
      mensaje.style.display = "none";
    }, 3000);
  }

const dineroCantidad = document.querySelector(".cantidadTotal");
const montoInput = document.querySelector(".form-control");

montoInput.addEventListener("input", () => {
  const monto = parseFloat(montoInput.value);
  if (!isNaN(monto)) {
    dineroCantidad.textContent = monto.toFixed(2);
  } else {
    dineroCantidad.textContent = "0.00";
  }
});

function cambiarFecha() {
  const fechaElement = document.getElementById("fecha-conversion");
  const fechaActual = new Date(); // Obtiene la fecha actual
  fechaElement.textContent = fechaActual.toString(); // Actualiza el contenido del elemento con la nueva fecha
}
