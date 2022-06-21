// CONDICIONAIS2  

let nota1, nota2;

    nota1 = 10; 
    nota2 = 0;

function media(nota1, nota2) { // função para calcular a média de duas notas e retornar a média 
    let media = (nota1 + nota2) / 2;
    return media;
}

  let resultado = media(nota1, nota2); 

    // Operador ternário (condição ? verdadeiro : falso) - retorna o valor verdadeiro ou falso

    let situação = resultado >=6 ? "Aprovado" : "Reprovado";

    console.log(situação);

    let resultado2 = resultado >=6 ? "Aprovado" : resultado >=4 ? "Recuperação" : "Reprovado";

    console.log(resultado2);

    // Operador switch (condição ? verdadeiro : falso) - retorna o valor verdadeiro ou falso

    let op = 25; // opção escolhida pelo usuário -- pode ser uma string, um número, etc.

    switch (op) { // switch é um operador que recebe uma condição e retorna um valor
        case 1:
            console.log("Opção 1");//
            break; // break é um comando que finaliza a execução do switch
        case 2:
            console.log("Opção 2");
            break;
        case 3:
            console.log("Opção 3");
            break;
        default:// caso não seja nenhuma das opções acima, o default será executado
            console.log("Opção inválida");
    }

    console.log("Fim");

