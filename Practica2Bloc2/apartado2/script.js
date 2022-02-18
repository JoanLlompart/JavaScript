function calcDescuento() {
    let marcaCoche = prompt("Elige la marca que quieres. \n [Ford] \n [Seat] \n [Citroen] \n [Audi] ")
    switch (marcaCoche) {
        case "Ford":
            descuento = 0.90;            
            break;

        case "Seat":
            descuento = 0.92;            
            break;

        case "Citroen":
            descuento = 0.94;
            break;

        case "Audi":
            descuento = 0.96;            
            break;
    
        default:
            descuento = 1;            
            break;
    }

    let preuCotxo = parseInt(prompt("Pon el precio del coche"));
    alert(preuCotxo * descuento)


}
