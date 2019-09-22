//Desenvolva a tarefa proposta no tempo proposto.
//Conforme visto até agora, desenvolva o exercício proposto com que você aprendeu até o presente momento. 

//Exercício1:
    /*
       Informe um valor inteiro se ele for menor que 5 e 
       ele for 2 ou 4 exiba "ok" se não exiba "não ok".
    */
   var readline = require('readline-sync');

   var valor = parseInt(readline.question('Informe o número: '));

   if( valor < 5 && (valor == 2 || valor == 4))
       console.log('Ok');
   else
       console.log('Não ok');