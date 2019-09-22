//Desenvolva a tarefa proposta no tempo proposto.
//Conforme visto até agora, desenvolva o exercício proposto com que você aprendeu até o presente momento. 

//Exercício1:
    /*
        Faça a leitura de 2 valores inteiros e exiba qual deles é o maior.
    */
    var readline = require('readline-sync');

    var valor1 = parseInt(readline.question('Informe o PRIMEIRO valor: '));
    var valor2 = parseInt(readline.question('Informe o SEGUNDO valor: '));

    if(valor1 > valor2)
        console.log('O maior valor é o valor1 = ' + valor1);
    else
        console.log('O maior valor é o valor2 = ' + valor2);

//Exercício 2:
    /*
        Faça a leitura do ano atual, do ano de nascimento e do nome da pessoa,
        após efetuar o cálculo, se pessoa tiver 16 anos ou mais 
        imprima que ela poderá votar.*/
    
   var readline = require('readline-sync');

   var nome = readline.question('Informe o seu nome: ');
   var anoAtual = parseInt(readline.question('Informe o ano atual: '));
   var anoNasc = parseInt(readline.question('Informe seu ano de nascimento: '));

   var idade = anoAtual - anoNasc;

   if(idade >= 16)
       console.log(`${nome} você poderá votar`);
   else
        console.log(`${nome} você NÃO poderá votar !!!`);

