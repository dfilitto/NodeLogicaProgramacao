var readline = require('readline-sync');
var nome1 = "";
var nome2 = "";
var dinheiro1 = 0;
var dinheiro2 = 0;
var valorpao = 0;
var qtdepao = 0;
var totalpao = 0;

console.log("Comprar pao");
//Entrada de dados
nome1 = readline.question("Qual o seu nome?: ");
dinheiro1 = parseFloat(readline.question(nome1+" quanto voce possui de dinheiro?: "));

nome2 = readline.question("Qual o seu nome?: ");
dinheiro2 = parseFloat(readline.question(nome2+" quanto voce possui de dinheiro?: "));

valorpao = parseFloat(readline.question("Qual o valor do pao?: "));
qtdepao = parseFloat(readline.question("Quantos paes voce vai querer comprar?:"));
totalpao = valorpao * qtdepao;
//operador lógico ou - ||
/*
 v || v = v
 v || f = v
 f || v = v
 f || f = f
*/
if((dinheiro1 > totalpao) || (dinheiro2 > totalpao)){
    console.log("Parabens "+nome1+" e "+nome2+"!!!! Hoje vai ter pao");
}else{
    console.log("Que pena "+nome1+" e "+nome2+"!!!! Nao temos dinheiro para comprar pao");
}




