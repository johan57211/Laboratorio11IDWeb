let opcion;

do {
    opcion = Number(prompt(
        "===== MENÚ PRINCIPAL =====\n" +
        "Seleccione una opción:\n" +
        "1. Calcular estadísticas de N notas\n" +
        "2. Calcular promedio\n" +
        "3. Calcular valor máximo\n" +
        "4. Calcular valor mínimo\n" +
        "5. Cantidad de pares e impares\n" +
        "6. Cuántos están por encima del promedio\n" +
        "7. Contar números pares e impares en un rango\n" +
        "8. Generar una tabla de multiplicar\n" +
        "9. Salir"
    ));

    switch (opcion) {

        case 1: {
            let n = Number(prompt("¿Cuántas notas desea ingresar?"));
            let suma = 0;
            let max = 0;
            let min = 0;

            for (let i = 1; i <= n; i++) {
                let nota = Number(prompt("Ingrese la nota " + i + ":"));
                suma += nota;

                if (nota > max) max = nota;
                if (nota < min) min = nota;
            }

            let promedio = suma / n;
            console.log("Promedio: " + promedio);
            console.log("Nota máxima: " + max);
            console.log("Nota mínima: " + min);
            break;
        }

        case 2: {
            let n = Number(prompt("¿Cuántos números desea ingresar?"));
            let suma = 0;
            for (let i = 1; i <= n; i++) {
                let num = Number(prompt("Ingrese el número " + i + ":"));
                suma += num;
            }
            console.log("El promedio es: " + (suma / n));
            break;
        }

        case 3: {
            let n = Number(prompt("¿Cuántos números desea ingresar?"));
            let max = 0;
            for (let i = 1; i <= n; i++) {
                let num = Number(prompt("Ingrese el número " + i + ":"));
                if (num > max) {
                    max = num;
                }
            }
            console.log("El valor máximo es: " + max);
            break;
        }

        case 4: {
            let n = Number(prompt("¿Cuántos números desea ingresar?"));
            let min = 0;
            for (let i = 1; i <= n; i++) {
                let num = Number(prompt("Ingrese el número " + i + ":"));
                if (num < min) {
                    min = num;
                }
            }
            console.log("El valor mínimo es: " + min);
            break;
        }

        case 5: {
            let n = Number(prompt("¿Cuántos números desea ingresar?"));
            let pares = 0;
            let impares = 0;

            for (let i = 1; i <= n; i++) {
                let num = Number(prompt("Ingrese el número " + i + ":"));
                if (num % 2 === 0) {
                    pares++;
                } else {
                    impares++;
                }
            }
            console.log("Cantidad de pares: " + pares);
            console.log("Cantidad de impares: " + impares);
            break;
        }

        case 6: {
            let n = Number(prompt("¿Cuántas notas desea ingresar?"));
            let suma = 0;
            let notas = [];

            for (let i = 0; i < n; i++) {
                notas[i] = Number(prompt("Ingrese la nota " + (i + 1) + ":"));
                suma += notas[i];
            }

            let promedio = suma / n;
            let encima = 0;
            for (let i = 0; i < n; i++) {
                if (notas[i] > promedio) {
                    encima++;
                }
            }

            console.log("Promedio: " + promedio);
            console.log("Notas por encima del promedio: " + encima);
            break;
        }

        case 7: {
            let inicio = Number(prompt("Ingrese el número inicial del rango:"));
            let fin = Number(prompt("Ingrese el número final del rango:"));
            let pares = 0;
            let impares = 0;

            for (let i = inicio; i <= fin; i++) {
                if (i % 2 === 0) {
                    pares++;
                } else {
                    impares++;
                }
            }

            console.log("En el rango de " + inicio + " a " + fin + ":");
            console.log("Cantidad de pares: " + pares);
            console.log("Cantidad de impares: " + impares);
            break;
        }

        case 8: {
            let numero = Number(prompt("Ingrese el número de la tabla:"));
            let limite = Number(prompt("¿Hasta qué número desea multiplicar?"));

            console.log("Tabla del " + numero + ":");
            for (let i = 1; i <= limite; i++) {
                console.log(numero + " x " + i + " = " + (numero * i));
            }
            break;
        }

        case 9:
            console.log("Saliendo del programa...");
            break;

        default:
            console.log("Opción no válida. Intente nuevamente.");
            break;
    }

} while (opcion !== 9);
