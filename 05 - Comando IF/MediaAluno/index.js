var readline = require('readline-sync');
var nome = "";
var n1 = 0;
var n2 = 0;
var n3 = 0;
var n4 = 0;
var media = 0; 

//Entrada de dados
console.log("Programa que calcula a média de um aluno");
nome = readline.question("Qual o seu nome?: ");
n1 = parseFloat(readline.question("Informe a 1 nota: "));
n2 = parseFloat(readline.question("Informe a 2 nota: "));
n3 = parseFloat(readline.question("Informe a 3 nota: "));
n4 = parseFloat(readline.question("Informe a 4 nota: "));

media = (n1+n2+n3+n4)/4;
console.log("Media: "+media);
/*
 < menor , <= menor igual
 > Maior , >= Maior igua
 == igual, != diferente
*/
if(media < 5){
    console.log(nome + " você foi reprovado!!!! \nTente novamente.");
}else{
    console.log(nome + " você foi aprovado!!!! \nParabens!!!!.");
}

