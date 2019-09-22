//Desenvolva a tarefa proposta no tempo proposto.
//Conforme visto até agora, desenvolva o exercício proposto com que você aprendeu até o presente momento. 

//Exercício1:
    /*
        Simulando uma tela de cadastro, faça a leitura da senha 
        e da confirmação da senha, verifique se ambas são iguais 
        e se autorizado é igual a "ADM", se sim, imprima "ok".
    */
    var readline = require('readline-sync');

    var senha = readline.question('Informe a senha: ');
    var confimSenha = readline.question('Reedigite a senha: ');
    var autorizado = readline.question('Voce esta autorizado[ADM, FUN]: ');

    if(senha == confimSenha && autorizado == 'ADM')
        console.log('Ok');
    else
        console.log('Acesso bloqueado !!!');