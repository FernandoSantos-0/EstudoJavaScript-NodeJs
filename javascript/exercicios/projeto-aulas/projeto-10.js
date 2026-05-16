
function exibirNumeroPrimos(numeros){

    for (let i = 2; i <= numeros; i++){
        
        let ehPrimo = true;

        for (let j = 2; j <= Math.sqrt(i); j++){
            if (i % j === 0){
                ehPrimo = false;
                break;
            }
        }

        if (ehPrimo){
            console.log(i);
        }
    }
  };

  exibirNumeroPrimos(15);
