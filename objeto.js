//tipo de dado de referencia
//Object - objeto

let titulo = 'Curso de JavaScript';
let numPages = 10;

const livro = {
    titulo : 'Curso de javascript',
    numPages  : 10
}


console.log(livro);
console.log(livro.numPages);

livro.titulo = 'JavaScript - Avançado!';

console.log(livro.titulo);

livro.editora = 'Casa do Código';


const pessoa = {
    nome : 'João',
    sobrenome: 'Silva',
    idade : 20,
    endereco : {
        logradouro : 'Rua ABC',
        numero : 123,
    },
    nomeCompleto: function(){
        return `${this.nome} ${this.sobrenome}`;
    }
}

console.log(pessoa);
console.log(pessoa.endereco.logradouro);
console.log(pessoa.nomeCompleto());

pessoa.celular = '9999-9999';

pessoa.enderecoCompleto = function(){
    return `${this.endereco.logradouro}, ${this.endereco.numero}`;
}

console.log(pessoa.enderecoCompleto());

function exibirDadosPessoa(p){
    alert(`\n
        Nome: ${p.nome}\n
        endereço: ${p.enderecoCompleto()}\n
        celular: ${p.celular}`
    );
}

exibirDadosPessoa(pessoa);