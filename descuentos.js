const cupones = [
    {
       name : "Jujutsu",
       descuento : 15,
    },
    {
        name : "Chainsawman",
        descuento : 30,
    },
    {
        name : "Haikyuu",
        descuento : 25,
    },
];

function calcularPrecioConDescuento(precio, descuento){
    const porcentajeConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajeConDescuento) /100;

    return precioConDescuento;
}

function obtenerPrecioConDescuento(){
    const inputPrecio = document.getElementById("inputPrecio");
    const precio = inputPrecio.value;

    const inputCupon = document.getElementById("inputCupon");
    const valorCupon = inputCupon.value;


    const esValorCuponValido = function(cupon){
        return cupon.name === valorCupon;
    }

    const cuponUsuario = cupones.find(esValorCuponValido);

    if(!cuponUsuario){
        alert("El cupón " + valorCupon + " no es válido.")
    }else{
        const descuento = cuponUsuario.descuento;
        const precioConDescuento = calcularPrecioConDescuento(precio, descuento);

        const resultadoP = document.getElementById("ResultadoPrecio");
        resultadoP.innerText = "El precio con descuento es: $" + precioConDescuento;
    }
}