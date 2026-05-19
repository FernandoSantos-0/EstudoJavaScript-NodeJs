const botaoSortear = document.querySelector('#botao');
const imagenbox = document.querySelector('#dado');

botaoSortear.addEventListener('click', function (e) {
    
    let numeroSorteado = 1; 
    numeroSorteado = Math.floor(Math.random() * 6) + 1;

    let imagePath = `assets/${numeroSorteado}.png`;
    imagenbox.setAttribute('src', imagePath);
    
    

    e.preventDefault();
});