let titulo = document.querySelector('h1');
titulo.textContent = 'Aula 09 manipular CSS';
titulo.style.backgroundColor = 'red';

let image = document.querySelector('#foto');
image.setAttribute('src','pride-fc.jpg');

/////// MODOS DE COR ///////

let tela = document.querySelector('main')

let btnDark = document.querySelector('#btdark')

let btnLight = document.querySelector('#btlight')

btnDark.addEventListener('click', modoDark)
btnLight.addEventListener('click', modoLight)

function modoDark() {
    //event.preventDefault();
    console.log('modo dark')
    tela.classList.add("dark");
    tela.classList.remove("light");
}

function modoLight() {
    //event.preventDefault();
    console.log('modo light')
    tela.classList.remove("dark");
    tela.classList.add("light");
}

