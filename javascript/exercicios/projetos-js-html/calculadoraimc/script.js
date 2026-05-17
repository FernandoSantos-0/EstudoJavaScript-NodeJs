let cxnome = document.querySelector('#nome');
let cxidade = document.querySelector('#idade');
let cxaltura = document.querySelector('#altura');
let cxpeso = document.querySelector('#peso');
let cximc = document.querySelector('#imc');

let btenviar = document.querySelector('#enviar');

let box = document.querySelectorAll('.resultado');


btenviar.addEventListener('click', function (e){

    let nome = cxnome.value;
    let idade = cxidade.value;
    let altura = cxaltura.value;
    let peso = cxpeso.value;
    let imc = (peso / (altura * altura)).toFixed(1);

    cximc.value = imc;

    box[0].textContent = `Nome: ${nome}`;
    box[1].textContent = `Idade: ${idade}`;
    box[2].textContent = `Altura: ${altura}`;
    box[3].textContent = `Peso: ${peso}`;
    box[4].textContent = `IMC: ${imc}`;

    e.preventDefault();
})