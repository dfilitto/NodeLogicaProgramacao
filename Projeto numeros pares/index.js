// variáveis globais
var readline = require("readline-sync");
var numeros = new Array();
var opmenu = 10;

function NumeroPar(n){
    var par = false;
    if(n % 2 == 0){
        par = true;
    }
    return par;
}

function LerNumero(){
    var n = parseInt(readline.question("Digite um numero: "));
    return n;
}

function Inserir (){
    var n = LerNumero();
    if (NumeroPar(n) == true){
        numeros.push(n);
    }
}

function Listar(){
    for(var i=0; i < numeros.length; i++){
        console.log("["+i+"] = "+numeros[i]);
    }
}

function Localizar(n){
    var pos = -1;
    var i = 0;
    while(i < numeros.length && numeros[i]!=n){
        i++;
    }
    if(numeros[i]==n){
        pos = i;
    }
    return pos;
}


function Alterar(n1, n2){
    var retorno = false;
    var pos = Localizar(n1);
    if(pos != -1){
        retorno = true;
        numeros[pos] = n2;
    }
    return retorno;
}

function Excluir(n){
    var pos = Localizar(n);
    if(pos!=-1){
        //numeros[pos] = numeros[numeros.length-1];
        var i = pos;
        while(i<numeros.length-1){
            numeros[i] = numeros[i+1];
            i++;
        }
        numeros.pop();
    }
    return pos;
}
/*Opções do sistema
1 - Inserir um numero - ok
2 - Listar os números cadastrados ok
3 - Excluir um número
4 - Alterar um número no array ok
5 - Localizar um número no array ok
0 - Sair - ok
*/
function ExibeMenu(){
    var retorno = 0;
        console.log("Sistema de controle de numeros pares");
        console.log("1 - Inserir um numero");
        console.log("2 - Listar os numeros cadastrados");
        console.log("3 - Excluir um numero");
        console.log("4 - Alterar um numero no array");
        console.log("5 - Localizar um número no array");
        console.log("0 - Sair");
        retorno = parseInt(readline.question("Digite a opcao de sua escolha: "));
        console.log(retorno);
    return retorno;
}


while(opmenu!=0){
    opmenu = ExibeMenu();
    //Inserir
    if (opmenu == 1){
        Inserir();
    }
    //Listar
    if (opmenu == 2){
        Listar();
    }
    //Excluir
    if (opmenu == 3){
        var n = parseInt(readline.question("Digite um numero para excluir: "));
        var pos = Excluir(n);
        if(pos!=-1){
            console.log("Valor excluido");
        }else{
            console.log("Valor nao encontrado no array (vetor)");
        }
    }
    //Alterar
    if (opmenu == 4){
        var n1 = parseInt(readline.question("Digite um numero que ver alterar: "));
        var n2 = parseInt(readline.question("Digite o novo numero: "));
        if(NumeroPar(n2)==true){
            if (Alterar(n1,n2)==true){
                console.log("Valor alterado");
            }else{
                console.log("Valor nao encontrado no array (vetor)");
            }
        }else{
            console.log("O array armazena apenas numeros pares....");
        }
    }
    //Localizar
    if (opmenu == 5){
        var n = parseInt(readline.question("Digite um numero para ser localizado: "));
        var pos = Localizar(n);
        //var pos = numeros.indexOf(n);
        if(pos!=-1){
            console.log("Valor "+n+" foi encontrado na posicao "+pos);
        }else{
            console.log("Valor não encontrado");
        }
    }
}
console.log("Obrigado por utilizar o sistema!!!!");