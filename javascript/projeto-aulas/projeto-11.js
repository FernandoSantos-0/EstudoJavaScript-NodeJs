// cria objeto endereco com rua,cidade,cep,funcao para exibir endereco.

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

const endereco1 = new endereco("Ana louisa","São Paulo",2835092);

endereco1.exibirEndereco();