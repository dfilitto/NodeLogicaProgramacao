//Desenvolva a tarefa proposta no tempo proposto.
//Conforme visto até agora, desenvolva o exercício proposto com que você aprendeu até o presente momento. 

//Exercício 1:
   /*
      Faça um programa em que o usuário digite 5 números 
      inteiros positivos e ao final exiba o maior entre eles.
   */
  var readline = require('readline-sync');
  var valor;
  var maiorValor = 0;
  
  for(var i = 0; i < 5; i++){ 
     valor = parseInt(readline.question('Informe um numero valor: '));
  
     if(valor > maiorValor)
        maiorValor = valor;
  }
  
  console.log(`O maior valor digitado foi: ${maiorValor}`);
      
   
//Exercício 2:
   /*
      Faça um programa em que o usuário digite 3 nomes e suas respectivas idades
      ao final exiba o nome e a idade do mais velho e do mais novo.

   */

  var readline = require('readline-sync');
  var nome;
  var maisVelho;
  var maisNovo;
  var idade = 0;
  var maiorIdade = 0;
  var menorIdade = 999;
  
   for(var i = 0; i < 3; i++){ 
      nome = readline.question('Nome: ');
      idade = parseInt(readline.question('Idade: '));

      if(idade > maiorIdade) {
         maisVelho = nome;
         maiorIdade = idade;
      }
      if(idade < menorIdade) {
         maisNovo = nome;
         menorIdade = idade;
      }
   }
  
  console.log(`${maisVelho} é o mais velho !!! com ${maiorIdade} anos`);
  console.log(`${maisNovo} é o mais novo !!! com ${menorIdade} anos`);