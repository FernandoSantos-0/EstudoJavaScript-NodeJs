// natureza dinamica dos objetos

const computador = {
    rgb : 'sim',
    placaVideo: 'RTX 5090'
};

computador.ram = 16;
computador.sistemaOs = function(){
    console.log("Windows");
};

console.log(computador);

//copiar objeto

// 1 forma

    const novoObjeto = Object.assign({
        fonte : 500,
    },computador);

    console.log(novoObjeto);

// 2 forma

    const novoObjeto2 = {...computador};

    console.log(novoObjeto2);

