//LISTA DE TAREFAS 1
/*
A lista abaixo tem todas as atividades em sequência, para a resolução de cada código é necessário tirar a resolução
do modo comentário e seguir as instruções referentes a cada exercício, um por um. 
*/
const prompt = require('prompt-sync')()

    /* 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
    utilizando uma estrutura de controle if. */

// let number = 1 //Insira o valor aqui e rode o código
// const numVerify = number % 2
// if (isNaN(number)) {
//     console.log('Erro: Entrada inválida.');
// } else if(numVerify === 0){
//     console.log('Esse número é par.')
// } else {
//     console.log('Esse numero é impar.')
// }

    /* 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
    adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
    controle if-else. */

// let age = 18 //Insira o valor aqui e rode o código
// if (isNaN(age)) {
//     console.log('Erro: Não é um número');
// } else if(age > 0 && age <= 12) {
//     console.log("Criança")
// } else if(age > 12 && age < 18) {
//     console.log("Adolescente")
// } else if(age >= 18 && age < 60) {
//     console.log("Adulto")
// } else if(age >= 60) {
//     console.log("Idoso")
// } else {
//     console.log("Erro: Número inválido.")
// }

    /* 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
    "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if. */

// let grade = 10 //Insira o valor aqui e rode o código
// if (isNaN(grade)) {
//     console.log('Erro: Não é um número');
// } else if(grade >= 0 && grade < 3){
//     console.log("Reprovado.")
// } else if(grade >= 3 && grade < 6){
//     console.log("Recuperação.")
// } else if(grade >= 6 && grade <= 10){
//     console.log("Aprovado.")
// } else {
//     console.log("Erro: Nota inválida.")
// }

    /* 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
    Utilize switch-case para implementar a lógica de cada opção selecionada. */

// // Rode o código e siga as instruções do terminal
// const option = Number(prompt('Digite um numero de 1 a 3: '))

// switch(option){
//     case 1:
//         console.log('Você escolheu a opção 1.')
//         break
//     case 2:
//         console.log('Você escolheu a opção 2.')
//         break
//     case 3:
//         console.log('Você escolheu a opção 3.')
//         break
//     default:
//         console.log('Erro: informação invalida')
// }

    /* 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
    determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
    utilizando if-else. */

// let weight = 70 //Insira o valor peso aqui
// let height = 1.73 //Insira o valor altura aqui e rode o código
// const imc = weight / (height*height)

// if(imc > 0 && imc <= 18.5){
//     console.log(`Seu resultado foi ${imc.toFixed(2)}. Você está abaixo do peso ideal.`)
// } else if(imc >= 18.5 && imc <= 24.9){
//     console.log(`Seu resultado foi ${imc.toFixed(2)}. Você está no peso normal.`)
// }  else if(imc >= 25 && imc <= 29.9){
//     console.log(`Seu resultado foi ${imc.toFixed(2)}. Você está com sobrepeso.`)
// }  else if(imc >= 30){
//     console.log(`Seu resultado foi ${imc.toFixed(2)}. Você está no quadro de obesidade.`)
// } else {
//     console.log('Erro: entrada inválida.')
// }

    /* 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
    formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
    Isósceles, escaleno ou eqüilátero.
    Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
    Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
    Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
    Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C) */

// // Entrada de valores
// let numA = 5 //Insira o primeiro valor
// let numB = 6 //Insira o segundo valor
// let numC = 5 //Insira o terceiro valor aqui e rode o código

// // Verifica se os valores formam um triângulo
// if(numA < numB + numC && numB < numA + numC && numC < numA + numB){
// // Verifica qual o tipo do triângulo
//     if(numA === numB && numB === numC){
//         console.log("Os valores fornecidos formam um triângulo equilatero.") 
//     } else if(numA !== numB && numB !== numC && numC !== numA){
//         console.log("Os valores fornecidos formam um triângulo escaleno.")
//     } else {
//         console.log("Os valores fornecidos formam um triângulo isósceles.")
//     }
// } else {
//     console.log("Os valores informados não formam um triângulo.")
// }


    /* 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
    forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
    compradas, calcule e escreva o valor total da compra. */

// let numApples = 5 // Fornecer a quantidade de maçãs desejada e rode o código
// let total = 0

// // Verifica se é um número
// if (isNaN(numApples)) {
//     console.log('Erro: Não é um número');
// // Verifica se é menor que uma dúzia e multiplica por R$0,30
// } else if(numApples > 0 && numApples < 12) {
//     total = numApples * 0.30
// // Verifica se é maior ou igual a uma dúzia e multiplica por R$0,25
// } else if (numApples > 12){
//     total = numApples * 0.25
// //Erro caso a pessoa insira um valor negativo
// } else {
//     console.log("Erro: valor inválido.")
// }

// // Retorna o valor da compra
// console.log(`Você comprou ${numApples} maçãs, o total da sua compra é de R$${total}`)

    /* 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
    e escreve-los em ordem crescente. */

// // Números a serem ordenados
// let num1 = 10 // Forneca o primeiro número
// let num2 = 5 // Forneca o segundo número e rode o codigo

// // Verifica e exibe os números em ordem crescente
// if (num1 > num2) {
//     console.log(`Valores em ordem crescente: ${num2}, ${num1}.`);
// } else {
//     console.log(`Valores em ordem crescente: ${num1}, ${num2}.`)
// }

    /* 9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console
    utilizando um loop for. */

// // Apenas rode o código
// for(let i = 10; i >= 0; i--){
//     console.log(i)
// }

    /* 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes. */

// let number = 5 //Insira o numero a ser repetido e rode o código

// for(let j = 0; j < 10; j++){
//     console.log(number)
// }

    /* 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
    utilizando um loop for. */

// // Rode o código e siga as instruções
// let totalSum = 0

// for(let k = 1; k <= 5; k++){
//     let num = Number(prompt(`Digite o ${k}º número: `));
//     totalSum += num
// }

// console.log(`A soma dos números fornecidos é ${totalSum}.`)


    /* 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10)
    utilizando um loop for. */

// // Rode o código e siga as instruções
// let num = Number(prompt("Digite o número que deseja gerar a tabuada: "))

// for(let l = 1; l <= 10; l++){
//     let multiplicationTable = num * l;
//     console.log(`${num} x ${l} = ${multiplicationTable}`)
// }

    /* 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
    a média aritmética desses números. */

// // Rode o código e siga as instruções
// // Variavel soma
// let sum = 0
// // Variavel contador de numeros digitados
// let counter = 0
// // Variavel para armazenar o numero digitado
// let num = 0

// do{
//     //Solicita a entrada dos numeros
//     num = Number(prompt("Digite um número decimal ou 0 para sair: "));
//     //Verifica se é diferente de 0
//     if (num !== 0){
//         //Adiciona o numero a soma total e incrementa o contador
//         sum += num
//         counter++
//     }
// } while (num !== 0); // Repete até ser 0

// //Se ao menos um número for digitado, retorna a media
// if(counter > 0){
//     let average = sum / counter
//     console.log(`A média aritmetica é ${average}.`)
// } else {
//     console.log("Nenhum número foi digitado.")
// }

    /* 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
    utilizando um loop for ou while. */

// // Rode o código e siga as instruções
// let num = Number(prompt("Digite um número para calcular o fatorial: "));
// let factorial = 1

// for(let m = 1; m <= num; m++){
//     factorial *= m;
// }
// console.log(`${num}! = ${factorial}`)

    /* 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
    Fibonacci utilizando um loop for. */

// // Apenas rode o código
// let a = 0
// let b = 1
// let temp = 0

// for(let n = 0; n < 10; n++){
//     console.log(`${n+1}º número de Fibonacci: ${a}`)
//     temp = a + b
//     a = b
//     b = temp
// }