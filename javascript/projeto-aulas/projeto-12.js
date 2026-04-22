// compara iqualdade entre objetos.

function endereco(rua,cidade,cep){

    return {

        rua,
        cidade,
        cep,
        
        exibirEndereco : function (){

        console.log(this.rua);
        console.log(this.cidade);
        console.log(this.cep);
        
        }
    } 
}

const end1 = new endereco("a","b","c");
const end2 = new endereco("a","b","a");

function propriedadesIquais(end1,end2){

    let rua;
    let cidade;
    let cep;

    if (end1.rua === end2.rua){
        rua = 1;
    }
    if (end1.cidade === end2.cidade){
        cidade = 1;
    }
    if (end1.cep === end2.cep){
        cep = 1;
    }    

    if ((rua+cidade+cep) === 3){
        return console.log("propriedades Iquais.");
    }
    else{
        return console.log(rua , cidade , cep);
    }
}

function enderecoMemoriaIqual(end1,end2){

    console.log(end1 == end2);

}

propriedadesIquais(end1,end2);

enderecoMemoriaIqual(end1,end2);