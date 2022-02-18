
var mesosAny = ["Gener","Febrer" , " Març", "Abril","Maig", "Juny" , "Juliol", "Agost","Setembre","Octubre", "Novembre","Desembre"];
mesosAny[1] = "Gener";
mesosAny[2] = "Febrer";
mesosAny[3] = "Març";
mesosAny[4] = "Abril";
mesosAny[5] = "Maig";
mesosAny[6] = "Juny";
mesosAny[7] = "Juliol";
mesosAny[8] = "Agost";
mesosAny[9] = "Setembre";
mesosAny[10] = "Octubre";
mesosAny[11] = "Novembre";
mesosAny[12 = "Desembre";


for (let index = 0; index < array.length; index++) {
    const element = array[index];
    document.write(mesosAny[5])
}



mesosAny.forEach(mes => {
    document.write("<h3>"+ mes + "</h3>")
});