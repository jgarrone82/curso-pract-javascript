// Código del cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
  return lado * 4;
}
console.log("El perí­metro del cuadrado es: " + perimetroCuadrado(ladoCuadrado) + "cm");

function areaCuadrado(lado) {
  return lado * lado;
}
console.log("El Área del cuadrado es: " + areaCuadrado(ladoCuadrado) + "cm2");
console.groupEnd();

// Código del triángulo
console.group("Triángulos");

const lado1 = 6;
const lado2 = 6;
const base = 4;
const altura = 5.5;
console.log("La altura del triángulo es de: " + altura + "cm");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
console.log("El perí­metro del triángulo es: " + perimetroTriangulo(lado1,lado2,base) + "cm");

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
console.log("El Área del triángulo es: " + areaTriangulo(base, altura) + "cm2");

console.groupEnd();

// Código del cí­rculo
console.group("Cálculos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");

// Diámetro
function diametroCirculo(radio) {
  return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Área
function areaCirculo(radio) {
  return (radio * radio) * PI;
}

console.groupEnd();


// Funciones para usar en el HTML
//Cuadrado
function calcularPerimetroCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;

    const perimetro = perimetroCuadrado(value);

    const output = document.getElementById("outputCuadrado");
    output.textContent = perimetro + " m";
};
function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);

    const output = document.getElementById("outputCuadrado");
    output.textContent = area + " m²";
};

//Triangulo

function calcularPerimetroTriangulo() {
    const inputA = document.getElementById("inputTrianguloLadoA");
    const valueA = Number(inputA.value);
    const inputB = document.getElementById("inputTrianguloLadoB");
    const valueB = Number(inputB.value);
    const inputBase = document.getElementById("inputTrianguloBase");
    const valueBase = Number(inputBase.value);

    const perimetro = perimetroTriangulo(valueA, valueB, valueBase);

    const output = document.getElementById("outputTriangulo");
    output.textContent = perimetro + " m";

};

function calcularAreaTriangulo() {

    const inputBase = document.getElementById("inputTrianguloBase");
    const valueBase = Number(inputBase.value);
    const inputAltura = document.getElementById("inputTrianguloAltura");
    const valueAltura = Number(inputAltura.value);
    
    const area = areaTriangulo(valueBase, valueAltura);

    const output = document.getElementById("outputTriangulo");
    output.textContent = area + " m²";
};

// Circulo

function calcularPerimetroCirculo() {
    const inputCirculo = document.getElementById("inputCirculo");
    const value = Number(inputCirculo.value);

    const perimetro = perimetroCirculo(value);

    const output = document.getElementById("outputCirculo");
    output.textContent = perimetro.toFixed(4) + " m";
};

function calcularAreaCirculo() {
    const inputCirculo = document.getElementById("inputCirculo");
    const value = Number(inputCirculo.value);

    const area = areaCirculo(value);

    const output = document.getElementById("outputCirculo");
    output.textContent = area.toFixed(4) + " m²";
};