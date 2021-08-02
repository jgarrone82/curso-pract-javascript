// Funciones para usar en el HTML
//Cuadrado
function CalcularPrecioConDesc() {
    const inputPrecio = document.getElementById("inputPrecio").value
    const inputDescuento = document.getElementById("inputDescuento").value
    //const input = document.getElementById("inputCuadrado");  
    const precioConDesc = PrecioConDescuento(inputPrecio, inputDescuento);

    const output = document.getElementById("outputDescuento");
    console.log(output);
    output.textContent = "$ " + precioConDesc;
};

function PrecioConDescuento(precio,descuento){
    return ((precio * (100-descuento))/100).toFixed(2);
}