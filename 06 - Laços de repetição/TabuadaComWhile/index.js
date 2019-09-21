//Programa que exibe a tabuada do número 
var readlineSync = require('readline-sync');
//armazenado na variável de nome n
//var n = parseInt(readlineSync.question('1 Valor: '));
console.log("Programa que exibe a tabuada de um número");
var n = parseInt(readlineSync.question("Informe um numero: "));
console.log("Tabuada do numero "+n);
var i = 0;
while(i<=10){
    console.log(n + " X "+ i +" = " + (n*i));
    i = i + 1;
}
