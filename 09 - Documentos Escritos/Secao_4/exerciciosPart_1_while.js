//Desenvolva a tarefa proposta no tempo proposto.
//Conforme visto até agora, desenvolva o exercício proposto com que você aprendeu até o presente momento. 

//Exercício 1:
    /*
        Faça um programa que leia números inteiros  e só 
        saia do laço de repetição se o número 0 for digitado.
    */
   var readline = require('readline-sync');

   var valor = parseInt(readline.question('Informe um numero valor: '));

   while(valor != 0)
       valor = parseInt(readline.question('Informe um numero valor: '));

    
 

//Exercício 2:
    /*
        Faça um programa que leia um número inteiro e se
        ele for par exiba o número digitado 10 vezes se for
        impar exiba o número digitado 5 vezes (utilizando o comando while).
    */

   var readline = require('readline-sync');

   var valor = parseInt(readline.question('Informe um numero valor: '));
   var contador = 0;

   if(valor%2)
        contador = 5;
    else
        contador = 10;

    while(contador != 0){
        console.log(valor);
        contador--;
    }