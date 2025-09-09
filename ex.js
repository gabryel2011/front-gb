// permite executar um bloco de código várias vozes,
// com base em uma condição inicial, uma condição final 
// e um incremento ou decremento.
//i++ é o mesmo que i = i + 1 

for (let i = 20; i > 0; i--) {
    console.log("contagem: " + i);
}


let contador = 0;
while (contador < 5) {
    console.log("contador: " + contador);
    contador++;
}


switch (expressao) {
    case valor1:
        // codigo a ser executado se expressao === valor1
        break;
    case  valor2:
        // codigo a ser executado se expressao === valor2
        break;
    default:
        // codigo a ser executado se expressao não corresponde
        break;
}

// 0 = domingo, 1 = segunda, ..., 6 = sabado

let diasemana = 1;
switch (diasemana) {
    case 1:
        console.log("hoje é domingo");
        break;
    case 2:
        console.log("hoje é segunda");
        break;
    case 3:
        console.log("hoje é terça");
        break;
    default:
        console.log("dia invalido");
        break;
}