var moneda1,moneda2, multiplicador;

var eleccion_divisa = prompt("Introduce el simbolo de la moneda que quieres convertir. ejemplo[€]  [$] ")


switch(eleccion_divisa) {
    case "€":
        moneda1 = eleccion_divisa;
        moneda2 = "$";
        multiplicador = 1.15;
        break;

    case "$":
        moneda1 = eleccion_divisa;
        moneda2 = "€";
        multiplicador = 0.87;
        break;

    default:
        break;
}


var cantidad_divisa = parseInt(prompt("Pon el numero que quieres convertir")).toFixed(2);

resultado = cantidad_divisa + " " + moneda1 + " equivalen a " + (cantidad_divisa * multiplicador).toFixed(2) + " " + moneda2;

alert(resultado);
document.write(resultado)