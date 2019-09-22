//Desenvolva a tarefa proposta no tempo proposto.
//Conforme visto até agora, desenvolva o exercício proposto com que você aprendeu até o presente momento. 

//Exercícip do while:
   /*
      “Conforme aprendemos na última aula da seção 3 
      “Comandos de decisão ” em nossa aula extra. 
      Utilizando o switch case e o do while, construa
      um menu com 4 opções se o usuário digitar 0 ele sai do menu.”
   */

  var readline = require('readline-sync');

  var valor = parseInt(readline.question('Informe um numero valor: '));

   do {
      switch (valor) {
         case 1:
            console.log('Inicio');
            break;

         case 2:
            console.log('Cadastro');
            break;

         case 3:
            console.log('Placar');
            break;

         case 4:
            console.log('Jogo');
            break;
      
         default:
               console.log('Opção inexistente !!!');
            break;
      }

      valor = parseInt(readline.question('Informe um numero valor: '));
   } while (valor != 0);


//EXERCÍCIO MASTER (O DESAFIO):
   /*
      É a hora de ir mais lá na frente e pesquisar um pouco sobre nossa próxima seção !!!
      Nossa próxima seção abordará vetores e matrizes, tente resolver esse desafio utilizando
      esses recursos que não aprendemos ainda, se não conseguir, tudo bem, nossa próxima seção
      abordará isto.
      Faça um programa leia 20 números inteiros, depois exiba-os em ordem crescente.
   */

  var readline = require('readline-sync');

  var valor;
  var vetor = new Array();

  for (var i = 0; i < 20; i++) {
     valor = parseInt(readline.question('Informe um numero valor: '));

     vetor.push(valor);
  }
   vetor = vetor.sort(function(a,b){return a-b});
   for (var i = 0; i < 20; i++)
      console.log(vetor[i]);

   
    
