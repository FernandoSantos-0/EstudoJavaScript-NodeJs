// Variavel

let idade = 10;
console.log("Olá Mundo!!!");
console.log(idade);

let idadePessoa = 50;
let alturaPessoa = 180;
let nomePessoa = "Jhoan";

console.log(nomePessoa, " Altura: ", alturaPessoa, " Idade: ");

// Constantes

let valor1 = 30;
valor1 = 100; // Valor pode ser alterado.
console.log(valor1);

const valor2 = 20; // valor nao pode ser alterado.
console.log(valor2);

// Tipos Primitivos

    // Tipos de referencia

    let nome1 = "rafael"; // String literal
    let idade3 = 20.5; // number literal
    let verdadeOuFalso = true; // boolean
    let valor6; // undefined
    let redefinirValor = null; // redefinir valor

// Objetos

let nome;    

let pessoa = {
    
    nome: 'João',
    idade: 50,
    alturaPessoa: 2.0,

};

console.log(pessoa.alturaPessoa,pessoa.idade,pessoa.nome);

// Arrays

let familia = [true,100,'João',700];

console.log(familia.length);

console.log(familia[1]);

// functions

let corSite = "Azul";

function resetaCor(cor,tonalidade) { // Nome = verbo + substantivo.

    corSite = cor + ' ' + tonalidade;

}; 

resetaCor("Vermelho","Claro");

console.log(corSite);