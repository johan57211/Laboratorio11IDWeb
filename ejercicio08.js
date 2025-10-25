let respuesta;
const PI = 3.14;
do{
    let opcion = prompt("==ELIJA UNA OPCION=="+
        "\n1- Area del Circulo"+
        "\n2- Area del Rectangulo"
    )

    switch(opcion) {
        case "1":
            let radio = Number(prompt("Ingrese el radio del circulo: "));
            let areaCirculo = radio ** 2 * PI;
            console.log("El area del circulo es: "+areaCirculo);
            break;
        
        case "2":
            let ancho = Number(prompt("Ingrese el ancho del rectangulo: "));
            let alto = Number(prompt("Ingrese el alto del rectangulo: "));
            let areaRectangulo = ancho * alto;
            console.log("El area del rectangulo es: "+areaRectangulo);
            break;
    }
    respuesta = prompt("¿Desea continuar?");
}
while (respuesta === "si");