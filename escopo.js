// escopo de variáveis e constantes

 x = 1; // variável global

console.log(x);

function soma(a, b) {
  z = a + b; // variável local
    return(z);
}

console.log(soma(1, 2));

const gravidade = 9.8;// constante // não pode ser alterada // variável global

console.log(gravidade);

function quedaLivre(altura) {
  velocidade = (altura * gravidade);
    return(velocidade);
    alert(velocidade); //Não é possível chamar a alguma coisa dentro de uma função após o retorno de um valor
}

    console.log(quedaLivre(30));


// escopo de funções

function converter(){
    let km = document.querySelector('#km').value;
    document.querySelector('#resultado').textContent = km * 1.609;
}