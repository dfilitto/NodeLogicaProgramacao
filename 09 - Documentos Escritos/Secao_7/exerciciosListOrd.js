//Desenvolva a tarefa proposta no tempo proposto.
//Conforme visto até agora, desenvolva o exercício proposto com que você aprendeu até o presente momento. 

//Exercício 2:
   /*
     Faça um LISTAR modificado que 
     exiba o vetor ordenado.
   */

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
   if (NumeroPar(n) == true && Localizar(n) == -1){
       numeros.push(n);
   } else {
      console.log('Este numero nao e par ou ja foi inserido !!! Tente novamente.')
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

function Listar(){
   for(var i=0; i < numeros.length; i++){
       console.log("["+i+"] = "+numeros[i]);
   }
}

function OrdenarVetor(){
   numeros = numeros.sort(function(pos, pos1) {
  return pos - pos1;
});
   console.log('Vetor Ordenado !!!');
}


  function ExibeMenu(){
   var retorno = 0;
       console.log("Sistema de controle de numeros pares");
       console.log("1 - Inserir um numero");
       console.log("2 - Listar os numeros cadastrados");
       console.log("3 - Excluir um numero");
       console.log("4 - Alterar um numero no array");
       console.log("5 - Localizar um número no array");
       console.log("6 - Ordenar o vetor");
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

    //Ordenar
    if (opmenu == 6){
      OrdenarVetor();
  }
}
Listar()
console.log("Obrigado por utilizar o sistema!!!!");