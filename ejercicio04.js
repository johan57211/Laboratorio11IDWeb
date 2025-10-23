let respuesta;
do{
    let num = Number(prompt("Ingrese el numero del que desea la tabla de mutiplicar"))
    for (let i = 1; i<=12; i++){
        console.log(num+" * "+i + " = "+(num * i))
    }
    respuesta = prompt("Desea continuar? (si/no)")
}
while(respuesta ==="si")
