var numero1 = parseInt(prompt("Introdueix un numero"));
var numero2 = parseInt(prompt("Introdueix un numero"));
var numero3 = parseInt(prompt("Introdueix un numero"));
var numero4 = parseInt(prompt("Introdueix un numero"));
var numero5 = parseInt(prompt("Introdueix un numero"));
var numero6 = parseInt(prompt("Introdueix un numero"));
var numero7 = parseInt(prompt("Introdueix un numero"));
var numero8 = parseInt(prompt("Introdueix un numero"));
var numero9 = parseInt(prompt("Introdueix un numero"));
var numero10 = parseInt(prompt("Introdueix un numero"));


var numeros = [];
numeros.push(numero1,numero2,numero3,numero4,numero5,numero6,numero7,numero8,numero9,numero10);

numeros.sort(function(a,b){return a -b});

alert(numeros);