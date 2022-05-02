//Helpers

function esPar(numero){
    return numero % 2 === 0;
};

function calcularPromedio(listaNum){
    return listaNum.reduce((suma = 0 , a) => suma + a) / listaNum.length;
};

//Mediana general

const salarios = Argentina.map(
    persona => persona.salary
);

const salariosOrdenados = salarios.sort(
    (salarioA, salarioB) => salarioA-salarioB
);

function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);
    if (esPar(lista.length)){
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];
        return calcularPromedio([personaMitad1, personaMitad2]);
    }else{
        const personaMitad = lista[mitad];
        return personaMitad;
    }
};

//Mediana 10% más rico

const medianaGeneral = medianaSalarios(salariosOrdenados);

const inicioCorte = salariosOrdenados.length * 0.9;
const finCorte = salariosOrdenados.length;

const salariosTop10 = salariosOrdenados.slice(
    inicioCorte,
    finCorte,
);

console.log(inicioCorte);

const medianaTop10 = medianaSalarios(salariosTop10);

console.log({
    medianaGeneral,
    medianaTop10,
});

