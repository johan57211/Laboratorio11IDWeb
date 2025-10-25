let respuesta;
do{
    let numero = Number(prompt("Ingrese hasta que numero desea sumar"))
    let suma = 0;
    for (let i = 1; i<=numero; i++){
        let sumar = true;
        if (i%5 == 0){
            sumar=false;
        }

        if(sumar){
            suma += i;
        }

    }
    console.log("La suma (sin multiplos de 5) es: "+suma);
    respuesta = prompt("¿Desea continuar?");
}
while (respuesta === "si");