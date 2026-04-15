
let notas = [70,80,60];

function mediaNotas(notas){

    let quantitadeNotas = 0;
    let soma = 0;

    for (let nota of notas){
        soma += nota;
        quantitadeNotas ++;
    }
    
    let media =  soma / quantitadeNotas;
    
    if (media < 59) return 'F';
    if (media < 69) return 'D';
    if (media < 79) return 'C';
    if (media < 89) return 'B';
    return 'A';

};

console.log(mediaNotas(notas));
