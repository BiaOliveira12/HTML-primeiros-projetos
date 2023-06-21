let count = 1;
var contagem = document.getElementById("slide1").checked = true;

setInterval( function(){
    nextImage();
}, 2500)

function nextImage(){
    count++;
    if(count>5){
        count = 1;
    }

document.getElementById("slide"+count).checked = true;
}

function enviarContato(){
    cliente.nome=document.getElementById("nome").value;
    cliente.sobrenome=document.getElementById("sobrenome").value;
    cliente.tel=document.getElementById("telefone").value;
    cliente.email=document.getElementById("email").value;
    cliente.aniversario=document.getElementById("dtnascimento").value;
    let data = new Date(cliente.aniversario);
    let dataformatada=data.toLocaleDateString('pt-BR', {timeZone:'UTC'});
    cliente.genero=document.querySelector('input[name-"Rdio"]').value;

    document.getElementById("nomeCad").innerHTML=cliente.nome;
    document.getElementById("sobrenomeCad").innerHTML=cliente.sobrenome;
    document.getElementById("telefoneCad").innerHTML=cliente.tel;
    document.getElementById("emailCad").innerHTML=professor.email;
    document.getElementById("nascimentoCad").innerHTML=dataformatada;
    document.querySelector('input[name-"Rdio"]').innerHTML=cliente.genero;
    document.getElementById("cadastro");
}
