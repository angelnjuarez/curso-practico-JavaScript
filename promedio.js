const lista1 = [
    100,
    200,
    300,
    500,
];

//Calculo promedio
function calcularMediaAritmetica(lista){
/*     let sumaLista = 0;
    for (let i = 0; i < lista.length; i++){
    sumaLista += lista[i];
} */

    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, elem){
            return valorAcumulado + elem;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}