/* Variaveis compostas [ARRAYS]

- Devem ser capazes de armazenar vários valores em uma mesma estrutura. 

para criar um array temos que criar assim

let num = [ , , ]

Entre as virgulas coloco os valores


------------------

Se eu quiser adicionar um elemento em uma posição especifica basta fazer por exemplo:

num[3] = 6


Para acrescentar um elemento ao final do array:


num.push(7) 

= ele vai adicionar o valor 7 ao final, então se houver 3 casas nesse array, ele vai criar uma casa 4 e adicionar ao final 


PARA SABER O COMPRIMENTO DO ARRAY:
Não inserir parenteses, se escreve exztamente desta forma

num.length



PARA ORDENAR OS VALORES EM ORDEM DENTRO DO ARRAY

num.sort()


let num = [5, 8, 2, 9, 3]
console.log(num)
console.log(num.sort())
num.push(4)
console.log(num)
num[3] = 7
console.log(num)

*/

// PARA TIRAR AS CHAVES NA HORA DA EXIBIÇÃO


//  LEMBRANDO QUE O FOR TEM QUE TER 3 ELEMENTOS
// PRIMEIRO É A INICIALIZAÇÃO
// SEGUNDO: TESTE LÓGICO
//TERCEIRO: INCREMENTO

for (let pos = 0; pos < num.length; pos++) {
    console.log(`${num[pos]}`)
}

// TEMOS O JEITO MAIS FACIL PARA FAZER ISSO

// for com apenas 2 elementos


// SE LE ASSIM: PARA CADA POSIÇÃO DENTRO DE NUM (POR EXEMPLO)~
//SÓ FUNCIONA PARA ARRAYS E OBJETOS

for (let pos in num) {
    console.log(num[pos])
}

//BUSCANDO VALORES DENTRO DE UM ARRAY

num.indexOf(7) //vai procurar no vetor onde está o valor 7 por exemplo

// ele vai retornar o indice que está o número informado

// QUANDO ESSE COMANDO RETORNAR -1 É PORQUE ELE PROCUROU E NÃO ACHOU NENHUM ELEMENTO SOLICITADO