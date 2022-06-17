
document.write('Essa é a nossa primeira aula.'); 
document.querySelector('#t2').textContent = 'JavaScript - Introdução';

// apresenta uma msg e esconde o formulario de login
function bemVindo(){
    const nome = document.querySelector('#usuario').value;
    alert(`Olá ${nome}! Seja bem-vindo`);
    document.getElementById('formulariologin').style.display = 'none'
}
