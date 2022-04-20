//Codigo del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado){
    return lado * 4;
};
//console.log("El perímetro del cuadrado es: " + perimetroCuadrado + " cm");

function areaCuadrado(lado){
    return lado * lado;
};
//console.log("El área del cuadrado es: " + areaCuadrado + " cm^2");
console.groupEnd();

//Codigo triangulo
console.group("Triangulos");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
};
//console.log("El perímetro del triangulo es: " + perimetroTriangulo + " cm");


function areaTriangulo(base, altura){
    return (base * altura)/2;
};
//console.log("El área del triangulo es: " + areaTriangulo + " cm^2");
console.groupEnd();

//Codigo del circulo
console.group("Circulos");


function diametroCirculo(radio){
    return radio*2;
};

function perimetroCirculo(radio){
    return diametroCirculo(radio) * Math.PI;
};
//console.log("El perímetro del circulo es: " + perimetroCirculo + " cm");

function areaCirculo(radio){
    return (radio*radio)*Math.PI;
};
//console.log("El área del circulo es: " + areaCirculo + " cm^2");
console.groupEnd();