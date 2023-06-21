function exibirParImpar(){
   let parLista=[];
   let imparLista=[];
   let contadorPar=0;
   let contadorImpar=0;
   numero=document.getElementById("numero").value;
   for(let contador=1; contador<=numero; contador++){
    if((contador%2)==0){
        parLista[contadorPar]=contador;
        contadorPar++;
    }
    else{
        imparLista[contadorImpar]=contador;
        contadorImpar++;
    }
   }
   document.getElementById("nPares").innerHTML=parLista;
   document.getElementById("nImpares").innerHTML=imparLista;
   document.getElementById("meuFormulario").reset();
}
function Clean(){
    document.getElementById("nPares").innerHTML="";
    document.getElementById("nImpares").innerHTML="";
}