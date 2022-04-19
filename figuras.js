//Codigo del cuadrado
console.group("Cuadrados");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado es: " + perimetroCuadrado + " cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es: " + areaCuadrado + " cm**2");
console.groupEnd();

//Codigo triangulo
console.group("Triangulos");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log(
    "Los lados del triangulo miden: " 
    + ladoTriangulo1 + " cm, " 
    + ladoTriangulo2 + " cm, " 
    + baseTriangulo + " cm"
    );

    const alturaTriangulo = 5.5;
console.log("La altura del triangulo es de: " + alturaTriangulo + " cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perímetro del triangulo es: " + perimetroTriangulo + " cm");


const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;
console.log("El área del triangulo es: " + areaTriangulo + " cm**2");
console.groupEnd();

//Codigo del circulo
console.group("Circulos");

const radioCirculo = 4;
const diametroCirculo = radioCirculo*2;
const pi = Math.PI;
console.log("PI mide: " + pi);
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

const perimetroCirculo = diametroCirculo * pi;
console.log("El perímetro del circulo es: " + perimetroCirculo + " cm");

const areaCirculo = (radioCirculo * radioCirculo) * pi;
console.log("El área del circulo es: " + areaCirculo + " cm**2");
console.groupEnd();