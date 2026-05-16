// funcao que retorna se o nomero e divisvel por 3 por 5 ou pelos doi, se nao for divisivel por nenhum dos dois ou se nao e numero.

function fizzBuzz(valor){

    if (typeof valor != "number"){
        return 'Não É Numero.'
    }

    else if (valor % 3 == 0 && valor % 5 == 0){
    
        return 'FizzBuzz';
    }

    else if (valor % 3 == 0 && valor % 5 != 0){

        return 'Fizz';
    }

    else if (valor % 3 != 0 && valor % 5 == 0){
    
        return 'Buzz';
    }

    else {
 
        return valor;
    }

};

console.log(fizzBuzz('ola mundo'));