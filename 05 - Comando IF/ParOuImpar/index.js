var readline = require('readline-sync');
var n = 0;
var resto = 0; 

console.log("Verifica que um número informado é par ou impar");
n = parseInt(readline.question("Informe um número inteiro: "));
resto = n%2;

// ==, <, <=, >, >= e !=
if(resto == 0){
    console.log("O número informado é par");
}

if(resto != 0){
    console.log("O número informado é impar");
}