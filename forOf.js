
    const operacaoes =['soma', 'subtracao', 'multiplicacao', 'divisao']; //array de funções

    function montaTexto() { //função para montar o texto
        let textodalista = '';
        for (let operacao of operacaoes) { //for para percorrer o array operacaoes e imprimir as funções
            textodalista += '<li>' + operacao + '</li>';//concatenação de texto
        }
        return textodalista;//retorna o texto
    }

    document.querySelector('#lista').innerHTML = montaTexto();

    console.log(montaTexto());


    let jogares =[
        {nome: 'Jogador 1', 
        pontos: 10
        },
        {nome: 'Jogador 2', 
        pontos: 20
        },
        {nome: 'Jogador 3', 
        pontos: 30
        },
    ];

    for (let jogador of jogares) { //for para percorrer o array jogares e imprimir os jogadores
        console.log(jogador.nome + ' ' + jogador.pontos); 
        console.log(jogador);//imprime o objeto
    } 