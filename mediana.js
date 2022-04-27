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
    const indiceMitad = parseInt(lista.length / 2);
    return indiceMitad;
}

function calcularMediana(lista){
    const indiceMedio = mitadLista(lista);
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