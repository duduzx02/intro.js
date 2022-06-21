const operacaoes =['soma', 'subtracao', 'multiplicacao', 'divisao']; //array de funções

let i = 0; //contador

while(i < operacaoes.length){ //while para percorrer o array operacaoes e imprimir as funções
    console.log(operacaoes[i]); 
    i++;//incrementa o contador
}//fim do while

const nomes = ['João', 'Maria', 'José', 'Pedro']; //array de nomes

c = 0; //contador
do{
    console.log(nomes[c]); //imprime o nome do array nomes
    c++;//incrementa o contador
} while(c < nomes.length); //fim do while
