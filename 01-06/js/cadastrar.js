
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
    let categoria=prompt("Digite:\n[T] para Temporario;\n[E] para Efetivo");
    if(categoria.toUpperCase()=="E"){
        professorEfetivo=Object.create(professor);
        professorEfetivo.CPF=prompt("Informe o CPF");
        document.getElementById("documento").innerHTML="CPF: "+professorEfetivo.CPF;
    }else{
        if(categoria.toUpperCase()=="T"){
            professorTemporario = Object.create(professor);
            professorTemporario.CNPJ=prompt("Informe o CNPJ");
            document.getElementById("documento").innerHTML="CNPJ: "+professorTemporario.CNPJ;
        }
        else{
            alert("Categoria de professor não encontrada!");
        }
    }
    document.getElementById("frmCadastro");

}
