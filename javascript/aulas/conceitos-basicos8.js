// strings. Há 2 tipos primitivo, objeto.

// tipo primitivo possui methodos como includes, startsWith, endsWith, indexOf, replace, trim, split

const mensagem = 'Mensagem do tipo primitivo.';

// tipo objeto possui outros methodos como length, e procurar carachtere por posiçao como mensagem2[2]

const mensagem2 = new String('Bom dia');


// template literal 

const nome = 'Fernando';

const mensagem3 = `

  Olá ${nome}!

  esse e um exemplo de "template 'literal'" onde e possivel 
  
  escreve a uma string e mantela literal com o escrito no codigo 

  javaScript.

`;

console.log(mensagem3);

