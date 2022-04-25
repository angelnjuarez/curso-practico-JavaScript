function calcularPrecioConDescuento(precio, descuento){
    const porcentajeConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajeConDescuento) /100;

    return precioConDescuento;
}

function obtenerPrecioConDescuento(){
    const inputPrecio = document.getElementById("inputPrecio");
    const precio = inputPrecio.value;

    const inputDescuento = document.getElementById("inputDescuento");
    const descuento = inputDescuento.value;

    const precioConDescuento = calcularPrecioConDescuento(precio, descuento);
    const resultadoP = document.getElementById("ResultadoPrecio");
    resultadoP.innerText = "El precio con descuento es: $" + precioConDescuento;
}