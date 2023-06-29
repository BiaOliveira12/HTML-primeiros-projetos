function cadastrar(){
    
    var audio = document.getElementById('meuAudio');
  audio.play();
    var pessoa={
        nome:"",
        sobrenome:"",
        telefone:"",
        email:"",
        aniversario:"",
        idade:""       
    };
    
    pessoa.nome=document.getElementById("nome").value;
    pessoa.sobrenome=document.getElementById("sobrenome").value;
    pessoa.telefone=document.getElementById("telefone").value;
    pessoa.email=document.getElementById("email").value;
    pessoa.aniversario=document.getElementById("dtnascimento").value;
    let data = new Date(pessoa.aniversario);
    let dataformatada=data.toLocaleDateString('pt-BR', {timeZone:'UTC'});
    pessoa.idade=document.getElementById("idade").value;
    

    document.getElementById("nomeCad").innerHTML=pessoa.nome;
    document.getElementById("sobrenomeCad").innerHTML=pessoa.sobrenome;
    document.getElementById("telefoneCad").innerHTML=pessoa.telefone;
    document.getElementById("emailCad").innerHTML=pessoa.email;
    document.getElementById("nascimentoCad").innerHTML=dataformatada;
    document.getElementById("idadeCad").innerHTML=pessoa.idade + (" anos");
    document.getElementById("cadastro").innerHTML="";

}
function Limpar(){
    var audio = document.getElementById('meuAudio1');
  audio.play();
    alert("Sucesso ao limpar formulário!!");
    document.getElementById("nomeCad").innerHTML="";
    document.getElementById("sobrenomeCad").innerHTML="";
    document.getElementById("telefoneCad").innerHTML="";
    document.getElementById("emailCad").innerHTML="";
    document.getElementById("nascimentoCad").innerHTML="";
    document.getElementById("idadeCad").innerHTML="";
    document.getElementById("cadastro").innerHTML="";
    
}