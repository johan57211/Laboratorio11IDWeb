let respuesta;
do{
    let numero = prompt("Ingrese un numero para ver si es Armstrong: ");
    let n = numero;
    let digitos = 0;

    while(n>0){
        digitos ++;
        n = Math.floor(n/10);
    }

    n = numero;
    let suma = 0;

    while (n>0){
        let digito = n%10;
        suma += digito ** digitos;
        n = Math.floor(n/10);
    }

    if(suma == numero){
        console.log("El numero es Armstrong")
    } 
    else{
        console.log("El numero no es Armstrong")
    }

    respuesta = prompt("¿Desea continuar?");
}
while (respuesta === "si");
