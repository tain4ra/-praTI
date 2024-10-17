/*ARRAYS E MATRIZES */
/* Posição de array sempre entre colchetes*/

// 1. Soma dos elementos de um array
// let sum = 0
// let arr = [10, 20, 30, 40]

// for(let i = 0; i < arr.length; i++){
//     sum += arr[i]
// }

// console.log(sum)

// 2. Encontre o maior numero em um array
// let arr = [60, 50, 30, 40]
// let max = arr[0] //iniciamos com o primeiro elemento da array

// for(let i = 1; i < arr.length; i++){ //iteraçao inicia no segundo elemento
//     if (arr[i] > max){
//         max = arr[i] //Em cada iteração, comparamos o elemento atual com max e atualizamos max se o elemento atual for maior.
//     }
// }
// console.log(`O maior numero é: ${max}`);

// 3. Reverter um array
// let arr = [10, 20, 30, 40, 50] //array original
// let reversedArr = [] //novo array pra armazenar invertido

// for(let i = arr.length - 1; i >= 0; i--){
//     reversedArr.push(arr[i]) //para acessar o final da array usa -1
// } //o push serve para adicionar itens num array
// console.log(reversedArr)

//4. Criar um novo array contendo apenas os numeros pares
// let arr = [11, 20, 35, 40, 51]
// let evens = []

// for(let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 === 0){
//         evens.push(arr[i])
//     }
// }
// console.log(evens)

// 5. Contar ocorrencias de um valor
// const prompt = require('prompt-sync')()
// let arr = [10, 10, 20, 40, 50]
// let target = Number(prompt('Digite um numero de 0 a 50: '))
// let count = 0

// for(let i = 0; i < arr.length; i++){
//     if(arr[i] === target) {
//         count++
//     }
// }
// console.log(`O valor ${target} aparece ${count} vezes`)

// array/vetores multidimensionais
let arr1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
// console.log(matriz)
// console.table(matriz)
// console.log(matriz[1][1])

/* Listas a posiçao de cada elemento */
// for(let i = 0; i < matriz.length; i++){
//     for(let j = 0; j < matriz[i].length; j++){
//         console.log(`Elemento na posição [${i}][${j}]: ${matriz[i][j]}`)
//     }
// }

let arr2 = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1]
]

/* Soma de matrizes */
//As matrizes devem ser do mesmo tamanho
if(arr1.length !== arr2.length || arr1[0].length !== arr2[0].length){
    throw new Error('Os arrays devem ter o mesmo tamanho')
}
let i = 0
let j = 0
let resultado = []

for(let i = 0; i < arr1.length; i++){
    let somaLinha = []
    for(let j = 0; j < arr1[1].length; j++){
        somaLinha.push(arr1[i][j] + arr2[i][j])
    }
    resultado.push(somaLinha)
}
console.table(resultado)