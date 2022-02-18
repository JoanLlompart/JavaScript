var nota = prompt("Escribe la nota que has sacado:[0/10]");
var mensaje = "";
switch (nota) {
    case "0":
    case "1":
    case "2":
    case "3":
        mensaje = "suspendido";
        break
    case "4":
        mensaje = "Casi";
        break
    case "5":
        mensaje = "Muy justo";
        break
    case "6":
    case "7":
        mensaje = "Vas bien";
        break
    case "8":
        mensaje = "Muy bien";
        break
    case "9":
    case "10":
        mensaje = "Excelente";
        break

    }
    
alert("Tu nota es : " + nota)