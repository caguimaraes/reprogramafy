var botao = document.getElementById("botao");

// console.log(botao); console.log("cliquei"); PARA TESTAR //

var modal = document.getElementById("modal");
var fundo = document.getElementById("fundo");
var fechar = document.getElementById("fechar");


// FUNÇÃO PARA DEIXAR AS A CAIXA DE LOGIN E A COR DE FUNDO VISIVEIS AO CLICAR NO BOTÃO LOGIN  //

botao.onclick = function() {
    modal.classList.add("visivel");
    fundo.classList.add("visivel");
}

fechar.onclick = function() {
    modal.classList.remove("visivel");
    fundo.classList.remove("visivel");
}

fundo.onclick = function(e) { // (e) é um atributo. Target é oq é chamado ao clicar no fundo (console.log(e) para ver funcionando) //
    if (e.target == fundo) {
         modal.classList.remove("visivel");
         fundo.classList.remove("visivel");
    }
}

// LOGIN

var email = document.getElementById("email");
var senha = document.querySelector("#senha");
console.log(email);

var formulario = document.querySelector('form');
formulario.onsubmit = function() {
    if(email.value !== "admin@admin.com" || senha.value !== "admin") {
        alert("E-mail ou senha não conferem");
        modal.classList.add("erro");
        setTimeout(function() {
            modal.classList.remove("erro");
        }, 1000);
        return false;
    }
}