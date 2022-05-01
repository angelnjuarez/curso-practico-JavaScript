    const lista1 = [
        1,
        2,
        3,
        1,
        2,
        3,
        4,
        2,
        2,
        2,
        1,
    ];

    function contarElementos(lista){
        const listaCount = {};
        //Toma un array de objetos y crea un nuevo array que
        //contiene los nuevos objetos formateados.
        lista.map(
            function(elemento){
                if (listaCount[elemento]){
                    listaCount[elemento] += 1;
                }else{
                    listaCount[elemento] = 1;
                }
            }
        );
        return listaCount;
    }

    function calcularModaYConteo(lista){
        const listaCount = contarElementos(lista);
        const lista1Array = Object.entries(listaCount).sort(
            function (elem1, elem2){
                return elem1[1] - elem2[1];
            }
        );
        return lista1Array[lista1Array.length-1];
    }

    //Función reducida, pero que no devuelve cant de apareciones y es menos eficiente
    function calcularModa(lista){
    //[...nombreArray] No modifica el array original
        return [...lista]
        .sort(
    //Devuelve un nuevo array, con los elementos que son ===a, y luego cuenta el tamanio del array
            (a,b) => lista.filter(v => v===a).length
                   - lista.filter(v => v===b).length
        )
        .pop();
    };