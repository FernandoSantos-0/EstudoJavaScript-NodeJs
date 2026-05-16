
function verificarVelocidade(velocidade){

    if (velocidade <= 70){
        return 'ok';
    }
    else {

        const pontos = Math.ceil((velocidade - 70) / 5);

        if (pontos < 12){
            return 'Pontos: ' + pontos;
        }

        else{
            return 'Carteira suspensa.';
        }
    }

};

console.log(verificarVelocidade(71));