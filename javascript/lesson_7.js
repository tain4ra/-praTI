//  ESTRUTURAS DE CONTROLE: Repetição
const prompt = require('prompt-sync')()
// let counter = 0
// let multiplier = Number(prompt('Informe o numero que voce quer saber a tabuada: '))

// //FOR
// //<variavel>; <condiçao>; <incremento>
// for(let counter = 0; counter <= 10; counter++){
//     console.log(`${multiplier} * ${counter} =` , multiplier * counter)
// }
// //crases são template strings, permitem misturar codigo com string
// //o $ indica que é uma variavel

// //Exercicio 1: imprimir os valores pares de 0 a 20
// for(let i = 0; i <= 20; i += 2){ //+= soma um numero especifico
//     console.log(i)
// }

// //Exercicio 2: calcular a soma dos numeros de 1 a 100
// let soma = 0;
// for(let i = 1; i <=100; i++){
//     soma += i;
// }
// console.log(soma);

// //Exercicio 3: imprima os valores de 1 ate 10 em ordem decrescente
// for(let i = 10; i >= 0; i--){
//     console.log(i)
// }

// // WHILE
// let i = 10
// while(i > 0){
//     console.log(i)
//     i--
// }

// //Exercicio 4: calcular a soma dos numeros de 1 a 100
// let variavel = 0
// let soma = 0
// while(variavel <= 100){
//     soma += variavel
//     variavel++
// }
// console.log(soma)

// /* Exercicio 5: Fazer um algoritmo para receber numeros decimais ate
// que o usuario digite 0 e fazer a media aritmetica desses numeros
// */
// let num1 = Number(prompt('Insira o 1º num: '))
// let counter = 0
// let sum = 0

// while(num1 !== 0){
//     sum += num1
//     counter++
//     num1 = Number(prompt('Digite outro num: '))
// }
// console.log('A media aritmetica é: ', sum/counter)

// DO WHILE
// Exercicio 5: Solicitar numeros ao usuario ate que ele insira um valor negativo
let num //como só existe dentro, tem q declarar fora
do {
    num = Number(prompt('Digite um numero: '))
} while(num > 0)