let cxaltura = document.querySelector('#altura');
let cxpeso = document.querySelector('#peso');
let cximc = document.querySelector('#imc');

let btenviar = document.querySelector('#enviar');
let box = document.querySelectorAll('.resultado');

btenviar.addEventListener('click', function (e) {
    e.preventDefault();

    let numero1 = Number(cxaltura.value);
    let numero2 = Number(cxpeso.value);

    let media = (numero1 + numero2) / 2;

    cximc.value = media.toFixed(2);

    box[0].textContent = `Número 1: ${numero1}`;
    box[1].textContent = `Número 2: ${numero2}`;
    box[2].textContent = `Média: ${media.toFixed(2)}`;
});