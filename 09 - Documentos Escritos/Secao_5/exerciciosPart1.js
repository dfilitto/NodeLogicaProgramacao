//Desenvolva a tarefa proposta no tempo proposto.
//Conforme visto até agora, desenvolva o exercício proposto com que você aprendeu até o presente momento. 

//Exercício 1:
   /*
      Faça um programa em que o usuário digite 10 números 
      os armazenando em um vetor e ao final faça outra repetição 
      somando estes valores.
   */
   var readline = require('readline-sync');
   var numeros = new Array();
   var numero;
   var soma = 0;
   
   for(var i = 0; i < 10; i++){ 
      numero = parseInt(readline.question('Informe um numero valor: '));
      numeros.push(numero);
   }

   for(var i = 0; i < 10; i++)
      soma += numeros[i];
  
  console.log(`Soma =  ${soma}`);
      
   
//Exercício 2:
   /*
      Faça um programa em que utilizando 2 vetores, no primeiro
      armazene 5 nomes e no segundo 5 notas, ao final exiba 
      o nome do aluno e sua nota desta forma:

         Aluno 1: Danilo; nota: 9;
         Aluno 2: Vinicius; nota: 10;
         .
         .
         .
   */

   var readline = require('readline-sync');
   var vetNomes = new Array();
   var vetNotas = [];
   var nome;
   var nota;
  
   for(var i = 0; i < 5; i++) {
      nome = readline.question('Nome: ');
      vetNomes.push(nome);

      nota = parseInt(readline.question('Nota: '));
      vetNotas.push(nota);
   }

   for(var i = 0; i < 5; i++)
      console.log(`Aluno ${i+1}: ${vetNomes[i]}; nota: ${vetNotas[i]};`);