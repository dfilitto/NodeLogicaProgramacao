//Desenvolva a tarefa proposta no tempo proposto.
//Conforme visto até agora, desenvolva o exercício proposto com que você aprendeu até o presente momento. 


//EXERCÍCIO MASTER (O DESAFIO):
   /*
      É a hora de mostrar que você aprendeu tudo !!!
      Utilizando tudo que nós aprendemos até agora 
      (variáveis, estruturas de decisão e repetição, vetores e agora funções)
      monte uma calculadora com as 4 operação básicas da matemática
      (/, *, -, +) 
      Para facilitar, todas as operações serão 
      feitas apenas com 2 valores, por exemplo:
      2 + 2
      2 - 2
      2 * 2
      2 / 2

      o usuário entrará com 2 valores mais uma 
      operação, se o usuário entrar com 3 zeros 
      por exemplo:
      (2,2,+) saída  4
      (2,8,*) saída  16
      (0,0,0) saída  programa finalizado

       Enquanto o programa não termina você irá exibir
      os resultados na tela e ir guardando em um vetor. 
      Quando o programa finalizar exiba o vetor, o 
      maior valor e o menor valor, por exemplo:
   */


  function somar(a, b) {return a + b;}
  function subtrair(a, b) {return a - b;}
  function multiplicar(a, b) {return a * b;}
  function dividir(a, b) {return a / b;}

  function armazenar(valor, vet) {
     return vet.push(valor);
  }

  function exibirvetorMaiorMenor(vetResult) {

     var maior = 0;
     var menor = 100000;

     console.log('\n-------------------------------\n');
     console.log('vetor:');
     
     for (var i = 0; i < vetResult.length; i++) {
        console.log(vetResult[i]);
        
        if(vetResult[i] > maior)
           maior = vetResult[i];

        if(vetResult[i] < menor)
           menor = vetResult[i];
     }

     console.log('\n-------------------------------\n');
     console.log(`Maior = ${maior} e Menor = ${menor}`);
  }


  function gerenciarCalculadora(valor1, valor2, operacao) {
     
     switch(operacao) {
        case '+':
           return somar(valor1, valor2)
           break;

        case '-':
           return subtrair(valor1, valor2)
           break;
        
        case '*':
           return multiplicar(valor1, valor2)
           break;

        case '/':
           return dividir(valor1, valor2)
           break;
           
     }
  }

function main() {
  var readline = require('readline-sync');
  var v1;
  var v2;
  var op;
  var resultado;
  var vetorResultados = [];
  var continuar;

  do {
     v1 = parseInt(readline.question('valor 1: '));
     v2 = parseInt(readline.question('valor 2: '));
     op = readline.question('operacao[+, -, *, /]: ');

     resultado = gerenciarCalculadora(v1, v2, op);
     console.log(`${v1} ${op} ${v2} = ${resultado}`);
     console.log('\n-------------------------------\n');
     
     if(v1 == 0 && v2 == 0 && op == '0')
        continuar =  false;
     else {
        armazenar(resultado, vetorResultados);
        continuar =  true;
     }

  }while(continuar);

  exibirvetorMaiorMenor(vetorResultados);

  console.log('Programa finalizado !!!');
}

main();