let respuesta;
let total = 0;

do {
    let precio = Number(prompt("Ingrese el precio del producto:"));
    total += precio;

    respuesta = prompt("¿Desea agregar otro producto? (si/no)");
} while (respuesta === "si");

console.log("Total parcial a pagar: " + total);

let descuento = 0;

if (total > 100) {
    console.log("Tiene un descuento del 10%.");
    descuento = total * 0.10;
} else if (total >= 50 && total <= 100) {
    console.log("Gana un cupón del 5%.");
    descuento = total * 0.05;
} else {
    console.log("No aplica descuento.");
}

let totalFinal = total - descuento;
console.log("Total final a pagar: " + totalFinal);
