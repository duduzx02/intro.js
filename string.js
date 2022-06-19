//tipo de dado primitivo
//string - cadeia de caracteres - texto 


let nome, idade, conc, localizacao, estado;//declaração de variáveis

nome = "Maria";//atribuição de valor
idade = 20;//atribuição de valor

conc = nome + " " + idade; //concatenação

conc = `${nome} ${idade} anos.`; //template string

console.log(conc);//imprime na tela

console.log(nome.length); //tamanho da string

console.log(nome.toUpperCase()); //maiuscula

console.log(nome.toLowerCase()); //minuscula

console.log(nome.charAt(2)); //pega o caracter na posição

localizacao = 'João Pessoa - PB';
console.log(localizacao.indexOf('Pessoa')); //pega a posição do texto   

estado = localizacao.substring(localizacao.indexOf('-') + 2);//pega o texto depois do- e até o fim da string 

console.log(estado);

let texto = 'Olá, tudo bem?';
let novotexto = texto.replace('tudo', 'tudo bem');//substitui o texto

console.log(novotexto);
console.log(texto);

let texto1 = 'Olá, tudo bem?';
texto1 = texto1.replace('tudo', 'tudo bem');//substitui o texto

console.log(texto1);

let frase = 'A festa ocorrerá no primeiro dia do primeiro mês do ano que vem.';
let novaFrase = frase.replaceAll('primeiro', 'segundo');//substitui todos os textos

console.log(novaFrase);