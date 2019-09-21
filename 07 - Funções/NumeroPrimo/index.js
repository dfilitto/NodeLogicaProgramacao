var readline = require("readline-sync");
var n = 0;
var count = 0;
var i = 0;



function NumeroPrimo(n){
    var retorno = false;
    //dividir o numero n vezes
    for(i=1; i <= n;i++){
        if(n%i==0){
            count = count + 1;
        }
    }
    if(count == 2)
    {
        retorno = true;
    } 
    return retorno;
}

//parte principal do programa
console.log("Programa que verifica se um numero e primo");
n = parseInt(readline.question("Informe um numero inteiro: "));
var resposta = NumeroPrimo(n);
if(resposta == true)
{
    console.log("O numero "+n+" e um numero primo");
} else
{
    console.log("O numero "+n+" nao e um numero primo");
}
