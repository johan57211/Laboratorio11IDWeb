let edad = Number(prompt("Ingrese su edad:"));

if (edad >= 60) {
    console.log("Adulto Mayor");
} else if (edad >= 18) {
    console.log("Adulto");
} else if (edad >= 12) {
    console.log("Adolescente");
} else {
    console.log("Niño");
}
