
function cadastrarprof(){
    var professor={
        nome:"",
        sobrenome:"",
        aniversario:""
    };
    var professorTemporario={
        CNPJ:""
    };
    professor.nome=document.getElementById("nome").value;
    professor.sobrenome=document.getElementById("sobrenome").value;
    professor.aniversario=document.getElementById("dtnascimento").value;
    let data = new Date(professor.aniversario);
    let dataformatada=data.toLocaleDateString('pt-BR', {timeZone:'UTC'}); 
    
    document.getElementById("nomeCad").innerHTML=professor.nome;
    document.getElementById("sobrenomeCad").innerHTML=professor.sobrenome;
    document.getElementById("nascimentoCad").innerHTML=dataformatada;
    
    document.getElementById("frmCadastro");

}
