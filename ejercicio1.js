let suma=0;
let contador=0;
do{
    let input = prompt("Ingrese nota entre 0 y 20:");
    let numero = Number(input);

    if (!isNaN(numero) && numero >= 0 && numero <= 20){    
        suma += numero;
        contador++;
    }

    else console.log("Nota invalida, ingrese denuevo la nota");
}

while(contador<5);

let promedio = suma/5;
console.log("El promedio de las notas es: "+promedio.toFixed(2));