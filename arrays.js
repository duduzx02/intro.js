//tipo de dado de referência
//array - vetor - lista - arranjo


let nomes = ['Maria', 'João', 'José'];//declaração de variáveis

nomes[3] = 'Paulo';//adiciona um elemento na posição 3
nomes.push('Pedro');//adiciona um elemento no final do array
nomes.unshift('Márcia');//adiciona um elemento no início do array
nomes.pop();//remove o último elemento do array
nomes.shift();//remove o primeiro elemento do array



console.log(nomes);
console.log(nomes[0]);
console.log(nomes[1]);
console.log(nomes[2]);



let jogares = [
    {
        nome: 'Pedro', 
        posicao: 'Atacante'
    },
    {
        nome: 'Paulo',
        posicao: 'Meio-campo'
    }
];

console.log(jogares);

//split - divide uma string em um array 

const email = 'fulano@gmail.com'; 

let emailArray = email.split('@'); //divide a string em um array

console.log(emailArray);

const PalavrasChave = 'JavaScript, NodeJS, ReactJS, React Native';
const js = PalavrasChave.split(',');//divide a string em um array

console.log(js);

const tiposdeJS = js.toString();//transforma um array em uma string

console.log(tiposdeJS);

const tiposdeJS2 = js.join(' | ');//transforma um array em uma string

console.log(tiposdeJS2);


const cidades = []//cria um array vazio

//push - adiciona um elemento no final do array

cidades.push('São Paulo');//adiciona um elemento no final do array
cidades.push('Rio de Janeiro');//adiciona um elemento no final do array
cidades.push('Belo Horizonte', 'João Pessoa');//adiciona um elemento no final do array

console.log(cidades);

//unshift - adiciona um elemento no início do array

cidades.unshift('Fortaleza');//adiciona um elemento no início do array
cidades.unshift('Brasília');//adiciona um elemento no início do array

console.log(cidades);

//pop - remove o último elemento do array - retorna o valor removido 

let cidadeRemovida = cidades.pop();

console.log(cidadeRemovida);

console.log(cidades);

//shift - remove o primeiro elemento do array - retorna o valor removido

cidadeRemovida = cidades.shift(); 

console.log(cidadeRemovida);

console.log(cidades);

//splice - remove um elemento ou mais do array utilizando índice - retorna o valor removido

cidades.splice(1, 1);//remove o elemento na posição 1

console.log(cidades);

cidades.splice(1); //remove todos os elementos a partir da posição 1

console.log(cidades);

// concat - concatena dois ou mais arrays

const nomesecidades = nomes.concat(cidades); //concatena o array nomes com o array cidades

console.log(nomesecidades);