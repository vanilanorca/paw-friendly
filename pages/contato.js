
let nome = document.getElementById('nome')
let email = document.getElementById('email')
let telefone = document.getElementById('telefone')
let mensagem = document.getElementById('mensagem')
let mensagemErro = document.getElementById('mensagem-erro')


console.log(nome.value.length)
function verificar(){

    nome.classList.remove('campo-obrigatorio')
    email.classList.remove('campo-obrigatorio')
    telefone.classList.remove('campo-obrigatorio')
    mensagem.classList.remove('campo-obrigatorio')

    if(nome.value.length == 0){
        nome.classList.add('campo-obrigatorio')
        mensagemErro.style.display = ("inherit")
    }

    if(email.value.length == 0){
        email.classList.add('campo-obrigatorio')
        mensagemErro.style.display = ("inherit")
    }

    if(telefone.value.length == 0){
        telefone.classList.add('campo-obrigatorio')
        mensagemErro.style.display = ("inherit")
    }

    if(mensagem.value.length == 0){
        mensagem.classList.add('campo-obrigatorio')
        mensagemErro.style.display = ("inherit")
    }
}