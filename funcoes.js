//TIPO DE DADO DE REFERENCIA

//FUNÇÃO - FUNCTION


//Declaração de função
function exibirMensagem(firstName, lastName /*parametros*/){//parametros são os argumentos da função
   //código da função
    console.log(`Olá ${firstName} ${lastName}!, tudo bem!`); //Exibe a mensagem na tela
}


// Chamada de função
exibirMensagem('Eduardo', 'lima');//argumentos são os valores passados para a função

exibirMensagem('Augusto', 'lima');//argumentos são os valores passados para a função

function media(a, b){
    let m = (a + b) / 2;
    return m;
}

console.log(media(10, 20));