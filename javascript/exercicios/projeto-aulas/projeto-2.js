// função maior entre 2 numeros.

function MaiorEntre2Numero(a, b) {

    if (a >= b) {
        return a;
    }
    else {
        return b;
    }

};

function MaiorEntre2NumeroAlternativo(a, b) {

    return a > b ? a:b;
    // se a maior que b entao retorne a, se não retorne b;

};


console.log(MaiorEntre2Numero(2,6));
console.log(MaiorEntre2NumeroAlternativo(4,7));
