const filme = {
    titulo: "O Poderoso Chefão",
    diretor: "Francis Ford Coppola",
    ano: 1972
}

function exibirPropriedades(obj) {
    for (let Strings in obj){
        if(typeof Strings == "string"){
            console.log(Strings);
        }
    }
}

exibirPropriedades(filme);
