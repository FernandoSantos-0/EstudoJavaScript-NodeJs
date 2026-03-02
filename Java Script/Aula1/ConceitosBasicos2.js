// Função tem 2 tipos

    // 1° que realiza uma tarefa e não devolve nada.

        function dizerNome(){
            console.log("Jhonatha");
        };

        dizerNome();
    //2° que realiza uma tarefa e devolve algo.

        function multiplicarPor2(numero){
            return numero*2;
        };
        console.log(multiplicarPor2(2));

// Operadores

        // Operadores Aritimeticos

            // + , - , * , ** , / , %

            let num = 10

            console.log(num + num);
            console.log(num - num);
            console.log(num * num);
            console.log(num ** 2);
            console.log(num / 2);
            console.log(2 % num);

            // ++ , -- incremento e decremento em 1.

        // Operadores Atribuição

            let x = 10;

            x += 5;  // x = x + 5
            console.log(x); // 15

            x -= 5;  // x = x - 5
            console.log(x); // 10

            x *= 2;  // x = x * 2
            console.log(x); // 20

            x /= 4;  // x = x / 4
            console.log(x); // 5

            x %= 3;  // x = x % 3
            console.log(x); // 2

        // Operadores de Comparação

            let a = 10;
            let b = "10";

            console.log(a == b);   // true  (compara valor)
            console.log(a === b);  // false (compara valor e tipo)

            console.log(a != b);   // false
            console.log(a !== b);  // true

            console.log(a > 5);    // true
            console.log(a < 5);    // false
            console.log(a >= 10);  // true
            console.log(a <= 9);   // false

        // Operadores Lógicos

            let idade = 18;
            let temCNH = true;

            console.log(idade >= 18 && temCNH); // true  (E)
            console.log(idade >= 18 || false);  // true  (OU)
            console.log(!temCNH);               // false (NÃO)

        // Operadores Bitwise

            console.log(5 & 1);  // AND
            console.log(5 | 1);  // OR
            console.log(5 ^ 1);  // XOR
            console.log(~5);     // NOT
            console.log(5 << 1); // Shift para esquerda
            console.log(5 >> 1); // Shift para direita

// Operador Ternário

// Estrutura:
// condição ? valor_se_verdadeiro : valor_se_falso

let idades = 18

let resultado = idades >= 18 ? "Maior de idade" : "Menor de idade"

console.log(resultado) // Maior de idade


// Outro exemplo

let numero = 10

console.log(numero % 2 === 0 ? "Par" : "Ímpar") // Par