//Desenvolva a tarefa proposta no tempo proposto.
//Conforme visto até agora, desenvolva o exercício proposto com que você aprendeu até o presente momento. 

//Exercício 3:
   /*
     Faça um ALTERAR onde o usuário digite
     qual valor deseja altear e qual o valor
     que ocupará o lugar do valor antigo e o 
     programa só deixará alterar se o novo 
     valor for par e se o valor antigo existir 
     no vetor.

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
   
   function Alterar(n1, n2){
      var retorno = false;
      var pos = Localizar(n1);
      if(pos != -1 && Localizar(n2) == -1){
          retorno = true;
          numeros[pos] = n2;
      }
   
      return retorno;
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
   
      //Alterar
      if (opmenu == 4){
         var n1 = parseInt(readline.question("Digite um numero que ver alterar: "));
         var n2 = parseInt(readline.question("Digite o novo numero: "));
         if(NumeroPar(n2)==true){
            if (Alterar(n1,n2)==true){
                  console.log("Valor alterado");
            }else{
                  console.log("Valor nao encontrado ou ja existente no array (vetor)");
            }
         }else{
            console.log("O array armazena apenas numeros pares....");
         }
      }
   }
   Listar()
   console.log("Obrigado por utilizar o sistema!!!!");