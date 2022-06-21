const lista = document.querySelector('#lista'); //selecionamos a lista

const elemento0 = document.createElement('p'); //criamos um elemento p
const elementoLI = document.createElement('li'); //criamos um elemento li
elementoLI.textContent = 'Novo item'; //adicionamos um texto ao elemento
elemento0.textContent = ''; 

lista.appendChild(elemento0);//adicionamos o elemento p a lista
lista.appendChild(elementoLI);//adicionamos o elemento li a lista


lista.style.color = 'white';//adicionamos um estilo a lista

// lista.remove(); //removemos a lista

lista.className = 'lista'; //adicionamos uma classe a lista

console.log(lista);


const botao = document.querySelector('#botao'); //selecionamos o botao

botao.addEventListener('click', function(){ //adicionamos um evento ao botao
    lista.remove(); //removemos a lista
}

);

const botaov = document.querySelector('#botaov'); //selecionamos o botao

botao.addEventListener('click', function(){ //adicionamos um evento ao botao
   // colocar algo para voltar a página 
}



);