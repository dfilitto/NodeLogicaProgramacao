//Desenvolva a tarefa proposta no tempo proposto.
//Conforme visto até agora, desenvolva o exercício proposto com que você aprendeu até o presente momento. 



//EXERCÍCIO MASTER (O DESAFIO):
   /*
      É a hora de resolver algo mais complexo !!!
      Conforme vimos em nossa primeira aula desta seção,
      faça uma matriz onde ela armazene em cada linha um 
      registro diferente e nas colunas informações do mesmo,
      por exemplo:

      id    nome     sexo     anoNasc.
      1     Ana      f        1980
      2     Fabi     f        2000
      3    Alan     m        1996
      4     Pedro    m        1996
      5    José     m        1940
      
      quando o ID for 0(zero) acaba a inserção.
      Ao final exiba todos calculando quantos anos cada 
      um tem.
   */

  var readline = require('readline-sync');
  var pessoas = [];
  var id;
  var nome;
  var sexo;
  var anoNasc;

  do {
     var linha = new Array();

     id = parseInt(readline.question('id: '));
     linha.push(id);
  
     nome = readline.question('Nome: ');
     linha.push(nome);
  
     sexo = readline.question('Sexo[M-F]: ');
     linha.push(sexo);
  
     anoNasc = parseInt(readline.question('Ano de Nascimento: '));
     linha.push(anoNasc);
  
     pessoas.push(linha);
  }while(id != 0);

  console.log('\n-----------------\n')

  let idadeAtual;
  let anoAtual = new Date().getFullYear();

  for(var i = 0; i < pessoas.length - 1; i++) {
     let info = '';

     for(var j = 0; j < pessoas[i].length; j++)
        info += `${pessoas[i][j]} \n`;
     
     idadeAtual = anoAtual - pessoas[i][j-1];
     info += `${idadeAtual} anos \n-----------------\n`;

     console.log(info);
  }
  
   
