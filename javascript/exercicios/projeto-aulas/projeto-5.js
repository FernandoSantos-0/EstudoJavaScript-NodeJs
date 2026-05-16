

function exibirTipo(valor){

    if (typeof valor != "number") {
        return console.log('Não é um numero.');
    }
    for (let i = 0; i <= valor; i++){

        if(i % 2 == 0){
            console.log(i , '"Par"');
        }
        else{
            console.log(i,'"Impar');
        }
    };

};

exibirTipo('1');