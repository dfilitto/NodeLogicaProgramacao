//Desenvolva a tarefa proposta no tempo proposto.
//Conforme visto até agora, desenvolva o exercício proposto com que você aprendeu até o presente momento. 

//Exercício 1:
   /*
      Faça uma função que receba por parâmetro  
     seu nome e sua idade, pegue o ano atual tire a 
     diferença e exiba seu nome com seu ano de 
     nascimento concatenados.
   */

function exibirAnoNasc(nome, idade) {
   var anoAtual = new Date().getFullYear();
   var anoNasc = anoAtual - idade;
   console.log(`Meu nome é ${nome}, nasci no ano de ${anoNasc} e tenho ${idade} anos.`);
}
      
exibirAnoNasc('Vinicius', 23);