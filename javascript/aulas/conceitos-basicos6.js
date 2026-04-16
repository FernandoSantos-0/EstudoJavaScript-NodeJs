// factory function 

const celular = {
  marcaCelular:'ASUS',
  tamanhoTela : {
    vertical :155,
    horizontal :75
  },
  capacidadedeBateria: 5000,
  ligar : function () {
    console.log("Fazendo Ligação...");
  }
}

// como isso seria feito usando factory function

function criarCelular(marcaCelular,tamanhoTela,capacidadedeBateria){
  return {
    marcaCelular,
    tamanhoTela,
    capacidadedeBateria,
    ligar() {
      console.log("Fazendo Ligação...");
    }
  }
}


let celular1 = criarCelular('Samsumg',6.6,7000);

celular1.ligar();

console.log(celular1);

// constructor factory

function Celular(marcaCelular,tamanhoTela,capacidadedeBateria){
  
  this.marcaCelular = marcaCelular,
  this.tamanhoTela = tamanhoTela,
  this.capacidadedeBateria = capacidadedeBateria,
  this.ligar = function(){
    console.log("Ligação");
  }
}

const celular2 = new Celular('Xiaome',7.0,5000);

console.log(celular2);

celular2.ligar();


