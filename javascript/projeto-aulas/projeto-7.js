

function somaMultiplos(valor){

    let soma = 0;

    for (let i = 0 ; i <= valor ; i++) {
        if (i % 3 == 0){
            soma += i;
        }
        else if (i % 5 == 0) {
            soma += i;
        }
    }

    console.log(soma);
}   

somaMultiplos(10);

