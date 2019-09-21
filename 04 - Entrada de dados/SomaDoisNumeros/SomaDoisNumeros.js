/*Programa que 
soma dois números*/
var readlineSync = require('readline-sync');
var valor1 = 0;
var valor2 = 0;
var total = 0;


console.log('Programa que soma dois numeros');
valor1 = parseFloat(readlineSync.question('Valor A: '));
valor2 = parseFloat(readlineSync.question('Valor B: '));
total = valor1 + valor2;
console.log(valor1 + " + " + valor2 + " = " + total);