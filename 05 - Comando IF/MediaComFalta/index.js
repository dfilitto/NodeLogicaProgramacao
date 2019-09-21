var readline = require('readline-sync');
//variáveis de entrada
var n1 = 0;
var n2 = 0;
var n3 = 0;
var n4 = 0;
var nome = "";
var totaldeaula = 0;
var totaldefaltas = 0;
//variáveis para armazenar os calculos
var media = 0;
var percentualfaltas = 0;

console.log('Programa que calcula a média de um aluno');
nome = readline.question("Qual o seu nome?: ");
n1 = parseFloat(readline.question("Informe a 1 nota: "));
n2 = parseFloat(readline.question("Informe a 2 nota: "));
n3 = parseFloat(readline.question("Informe a 3 nota: "));
n4 = parseFloat(readline.question("Informe a 4 nota: "));
totaldeaula = parseInt(readline.question("Informe a quantidade de aulas do curso: "));
totaldefaltas = parseInt(readline.question("Informe o total de faltas: "));
media = (n1+n2+n3+n4)/4;
console.log(nome+" sua media e "+media);
percentualfaltas = (totaldefaltas*100)/totaldeaula;
console.log(nome+" seu percentual de faltas e "+percentualfaltas);
if((media >= 6) && (percentualfaltas <=25)){
    console.log('Parabens!!!! Você foi aprovado');
} else{
    console.log('Que pena!!!! Você não foi aprovado');
}

