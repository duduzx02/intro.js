//condicionais - if, else 

let nota1 = 7;
let nota2 = 7;

function memdia(nota1, nota2) {
    let media = (nota1 + nota2) / 2;
    return media;
}

let resultado = memdia(nota1, nota2);

console.log(resultado);

//if - se a condição for verdadeira, executa o bloco de código

if(resultado >= 7) { 
console.log(`Aprovado com ${resultado}`);
} 



else if(resultado >= 5) { 
    console.log(`Recuperação com ${resultado}`);
}

// else - se a condição for falsa, executa o bloco de código

else {
    console.log(`Reprovado com ${resultado}`);	
}

console.log(`Fim do programa`);

if (nota1 === 0 || nota2 === 0) { // || - ou pelo menos um deve ser verdadeiro
    console.log(`Desclassificado`);
}

else{
    console.log(`Classificado`);
}

if(nota1 >= 7 && nota2 >= 7) { // && - ambos devem ser verdadeiros
    console.log(`Otimo desempenho`);
}
else{
    console.log(`Desempenho regular`);
}
