let contPares = 0;
let contImpares = 0;
for(let i = 0; i < 10; i++){
    let num = Number(prompt("Ingrese un numero: "))
    if (num % 2 == 0){
        contPares++;
    }
    else {
        contImpares++;
    }
}
console.log("Numeros Pares: "+contPares+"\nNumeros Impares: "+contImpares);