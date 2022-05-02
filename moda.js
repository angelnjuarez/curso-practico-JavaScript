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
        //Toma un array de objetos y crea un nuevo array
        //que contiene los nuevos objetos formateados.
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

    const notas = [
        {
            materia: "Educacion Fisica",
            nota: 10,
            creditos: 2,
        },
        {
            materia: "Programacion",
            nota: 8,
            creditos: 5,
        },
        {
            materia: "Economia",
            nota: 7,
            creditos: 5,
        }
    ]

    function sumaNotaPorCreditos(ArrayDeNotas){
        let ArrayNotasConCreditos = [...ArrayDeNotas].map(
            a => a.nota * a.creditos
        )
        return ArrayNotasConCreditos.reduce(
            (sum=0, a) => sum + a //devuelve el acumulado de las notas*credito
        )
    };

    function sumaCreditos(ArrayDeNotas){
        let listaCreditos = [...ArrayDeNotas].map(
            a => a.creditos
        )
        return listaCreditos.reduce(
            (sum=0, a) => sum + a
        )
    }

    function promedioPonderadoNotas(ArrayDeNotas){
        return sumaNotaPorCreditos(ArrayDeNotas) / sumaCreditos(ArrayDeNotas);
    }