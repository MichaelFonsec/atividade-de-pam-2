// This is a JavaScript file


function calcularimc() {

var peso = document.getElementById('peso').value;
var altura = document.getElementById('altura').value;



var imc =  peso / (altura * altura); 

//alert(consumo)

let exibir = `Seu IMC é ${imc}`;

document.querySelector('h2').innerHTML = exibir;

}