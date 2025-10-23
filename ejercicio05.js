let respuesta;

do {
    let monto = Number(prompt("Ingrese el monto que va a retirar: "));

    let bill100 = Math.floor(monto / 100);
    monto = monto % 100;

    let bill50 = Math.floor(monto / 50);
    monto = monto % 50;

    let bill20 = Math.floor(monto / 20);
    monto = monto % 20;

    let bill10 = Math.floor(monto / 10);
    monto = monto % 10;

    console.log("Billetes de 100: " + bill100 +
                "\nBilletes de 50: " + bill50 +
                "\nBilletes de 20: " + bill20 +
                "\nBilletes de 10: " + bill10);

    if (monto > 0) {
        console.log("Quedó un remanente de: " + monto + " (no se puede retirar con billetes disponibles)");
    }

    respuesta = prompt("Desea continuar? (si/no)");
} while (respuesta === "si");
