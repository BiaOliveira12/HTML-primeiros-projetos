
//Primeiro Exercício, declarando variaveis como entradada de usuario,
// criando nova variavel para subtração de numeros inseridos e mostrando ele.
var n1 = prompt("Atividade 2 - Exercício 1 \nDigite um numero:");
var n2 = prompt("Digite mais um numero:");
n3 = n1 - n2;
window.alert("A subtração de " + n1 + " e " + n2 + " é " + n3);

//segundo exercicio, declarando variaveis, verificando se estão em ordem crescente
//ou ordem decrescente e apresentando o resultado.
var n4 = prompt("Atividade 2 - Exercício 2 \nDigite um numero:");
var n5 = prompt("Digite mais um numero:");
var n6 = prompt("Digite mais um numero:");
if (n4 > n5 && n5 > n6) {
    window.alert("Ordem Decrescente");
} else if (n6 > n5 && n5 > n4) {
    window.alert("Ordem Crescente");
} else {
    window.alert("Sem ordem definida");
}

//terceiro exercicio, criando variaveis e calculando o imc, e logo em seguida
// o apresentando
var altura = prompt("Atividade 2 - Exercício 3 \nColoque sua altura em m separado por . :");
var peso = prompt("peso com valor inteiro (sem virgula):");
var imc = peso/(altura*altura);
window.alert("Seu IMC é " + imc);


//quarto exercicio, criando variaveis e exibindo na pag
var peso = document.getElementById("peso");
var altura = document.getElementById("altura");
var enviar = document.getElementById("enviar");
var txtMedia = document.getElementById("txtMedia");

enviar.addEventListener("click", function () {
    var peso1 = peso.valueAsNumber;
    var altura1 = altura.valueAsNumber;
  
    txtMedia.value = peso1/(altura1*altura1);
  });