//Laços de repetição - loops

// for (inicialização; condição; incremento) {

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //array de números de 1 a 10 

    for (let i = 0; i < numeros.length; i++) { //for para percorrer o array numeros e imprimir os números 
        console.log(numeros[i]); 
    }


    const operacaoes =['soma', 'subtracao', 'multiplicacao', 'divisao']; //array de funções

    function montaTexto() { //função para montar o texto
        let textodalista = '';
        for (let i = 0; i < operacaoes.length; i++) { //for para percorrer o array operacaoes e imprimir as funções
            textodalista += '<li>' + operacaoes[i] + '</li>';//concatenação de texto
        }
        return textodalista;//retorna o texto
    }

    document.querySelector('#lista').innerHTML = montaTexto();

    console.log(montaTexto());
