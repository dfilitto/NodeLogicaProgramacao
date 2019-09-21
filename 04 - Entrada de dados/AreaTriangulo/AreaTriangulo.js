var readline = require("readline-sync");
var calculaarea = require("area-triangulo-df");
var base = 0;
var altura = 0;
var area = 0;

console.log("Calcula a área de um triangulo");
base = parseFloat(readline.question("Base: "));
altura = parseFloat(readline.question("Altura: "));
//area = (base * altura) / 2;
area = calculaarea(base,altura);
console.log("A area do triangulo e: "+area);