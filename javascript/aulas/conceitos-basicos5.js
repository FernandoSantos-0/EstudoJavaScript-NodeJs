// for , while, do while, for in, for of

// for

    for(let i = 0; i < 5; i++){
        console.log("Estou Apreendedo!!!!");
    };

// while

    let a = 1;

    while(a < 5){

        console.log("Estou Apreendedo2!!!!");
        a++;

    };

// do while

    let b = 5;

    do {
        
        console.log("Estou Apreendedo3!!!!");
        b--;

    } while (b > 1);

// for in

    const pessoa = {
        nome: "Jonathan",
        idade: 20
    };

    for (let key in pessoa){
        console.log(key,pessoa[key]);
    };

    const cores = ['Vermelho','Azul','Verde']

    for (let indice in cores){
        console.log(indice,cores[indice]);
    };

// for of

    for (let cor of cores){
        console.log(cor);
    }

