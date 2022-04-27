function esPar(numero){
    if (numero % 2 === 0){
        return true;
    }else{
        return false;
    }
}

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, elem){
            return valorAcumulado + elem;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

function mitadLista(lista){
    const indiceMedio = parseInt(lista.length / 2);
    return indiceMedio;
}

function ordenarLista(lista){
    const listaOrdenada = lista.sort((a, b) => a - b);
    //En la funcion lambda, si a-b<0 es negativo, a-b>0 es positivo, a-b=0 son iguales
    return lista;
}

function calcularMediana(lista){
    const listaPorOden = ordenarLista(lista);
    const indiceMedio = mitadLista(listaPorOden);
    if (esPar(lista.length)){
        const elemento1 = lista[indiceMedio-1];
        const elemento2 = lista[indiceMedio];

        const promedioElementos = calcularMediaAritmetica([
            elemento1,
            elemento2]);

        return promedioElementos;

    }else{
        return lista[indiceMedio];
    }
}