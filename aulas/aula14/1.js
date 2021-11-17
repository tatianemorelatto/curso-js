// Estrutura de repetição FOR

// estrutura de repetição com variavel de controle

/*

for (inicio; teste; incremento) {

}

*/

//FICARIA ASSIM

for (var c = 1; c <= 10; c++) {
    console.log(`${c}`)
}

//MAIS USADO QUANDO SABEMOS O LIMITE



// TEMOS O JEITO MAIS FACIL PARA FAZER ISSO

// for com apenas 2 elementos


// SE LE ASSIM: PARA CADA POSIÇÃO DENTRO DE NUM (POR EXEMPLO)~
//SÓ FUNCIONA PARA ARRAYS E OBJETOS

for (let pos in num) {
    console.log(num[pos])
}