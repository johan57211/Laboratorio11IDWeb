let respuesta;
do{
    let numero = Number(prompt("Ingrese hasta q numero quieres calcular primos"));

    for (let i = 2; i<= numero; i++){
        let esPrimo = true;
        for (let j = 2; j <= Math.sqrt(i); j++){
            if (i%j == 0){
                esPrimo=false;
                break;
            }
        }
        if(esPrimo){
            console.log(i);
        }
        
    }
    respuesta = prompt("¿Desea continuar?");
}
while (respuesta === "si");