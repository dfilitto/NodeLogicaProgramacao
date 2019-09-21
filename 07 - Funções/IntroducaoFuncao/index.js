function ExibirMensagem(){
    console.log("Minha Primeira Funcao");
}

function ExibirMensagemPlus(txt){
    console.log(txt);
}

function NumeroPar(num){
    var retorno = false;
    if(num%2==0){
        retorno = true;
    }
    return retorno;
}

var par = NumeroPar(5);
console.log(par);
/*
ExibirMensagemPlus("Alo mundo");
var valor = "Primeira aula sobre funcoes";
ExibirMensagemPlus(valor);
*/
