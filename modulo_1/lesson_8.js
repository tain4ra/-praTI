//EXERCÍCIOS ESTRUTURAS CONDICIONAIS
const prompt = require('prompt-sync')()
//IF/ELSE
/*1 - Verifique se um número é positivo, negativo ou zero
Escreva um programa que leia um número e use uma estrutura if para verificar se o número é positivo, negativo ou zero. Imprima uma
mensagem apropriada para cada caso.*/
// const num1 = Number(prompt('Digite um numero: '))
// if(num1 > 0){
//     console.log('O numero é positivo')
// } else if (num1 < 0) {
//     console.log('O numero é negativo')
// } else if (num1 === 0){
//     console.log('O numero é 0')
// } else {
//     console.log('Erro: Digite um numero')
// }

/*2 - Verifique se um ano é bissexto
Escreva um programa que leia um ano e use uma estrutura 
if para verificar se o ano é bissexto. Um ano é bissexto 
se for divisível por 4, mas não por 100, exceto se também 
for divisível por 400. Imprima uma mensagem apropriada.*/
// const year = Number(prompt('Informe um ano: '))

// if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
//     console.log(`O ano ${year} é bissexto`)
// } else {
//     console.log(`O ano ${year} não é bissexto`)
// }

/*3 - Calcule a média de três números e determine o conceito
Escreva um programa que leia três notas de um aluno, 
calcule a média e use uma estrutura if/else para determinar 
o conceito (A, B, C, D, E, F) baseado na média. 
Imprima o conceito.
Dica: A média é a soma das notas dividida por três. 
Defina os intervalos para cada conceito.*/
// let nota1 = Number(prompt('Informe a primeira nota: '))
// let nota2 = Number(prompt('Informe a segunda nota: '))
// let nota3 = Number(prompt('Informe a terceira nota: '))
// const media = (nota1 + nota2 + nota3)/3
// if (media <= 10 && media >= 9){
//     console.log('Conceito A.')
// } else if (media < 9 && media >= 8){
//     console.log('Conceito B.')
// } else if (media < 8 && media >= 7){
//     console.log('Conceito C.')
// } else if (media < 7 && media >= 6){
//     console.log('Conceito D.')
// } else if (media < 6 && media >= 0){
//     console.log('Conceito E.')
// } else {
//     console.log('Conceito F.')
// }
// se fosse para mostrar a media, pode ser usado dessa forma
// console.log(`A media das notas é ${media.toFixed(2)}`)
// que garante que vai aparecer apenas 2 numeros apos a virgula

/*4 - Verifique se um número é par ou ímpar
Escreva um programa que leia um número e use uma 
estrutura  if/else para verificar se o número é par ou ímpar.
Imprima uma mensagem apropriada.*/
// let num3 = Number(prompt('Insira um número: '))

// if(isNaN(num3) || num3 === ''){
//     console.log('Erro: entrada de dados invalida')
// } else {
//     num3 = Number(num3);
//     if(num3 === 0) {
//     console.log('Erro: zero não pode ser divisor')
// } else if(num3 % 2 === 0){
//     console.log('O numero é par')
// } else {
//     console.log('O numero é impar')
// }
// }
/*5 - Verifique a categoria de um nadador
Escreva um programa que leia a idade de um nadador e use 
uma estrutura if/else para determinar a categoria do 
nadador de acordo com a idade:
            Infantil A: 5 - 7 anos
            Infantil B: 8 - 10 anos
            Juvenil A: 11 - 13 anos
            Juvenil B: 14 - 17 anos
            Adulto: 18 anos ou mais*/
// let age = Number(prompt('Insira sua idade: '))

// if (age >= 5 && age <= 7){
//     console.log('Categoria: Infantil A')
// } else if (age >= 8 && age <= 10){
//     console.log('Categoria: Infantil B')
// } else if (age >= 11 && age <= 13){
//     console.log('Categoria: Infantil B')
// } else if (age >= 14 && age <= 17){
//     console.log('Categoria: Infantil B')
// } else if (age >= 18){
//     console.log('Categoria: Adulto')
// } else {
//     console.log('Erro: informação inválida')
// }



//SWITCH
/*6 - Verifique o dia da semana
Escreva um programa que leia um número de 1 a 7 e use uma estrutura switch para imprimir o dia da semana correspondente. (1 =
Domingo, 2 = Segunda-feira, etc.)*/
let num4 = Number(prompt('Insira um número de 1 a 7: '))

switch(num4){
    case 1:
        console.log('Hoje é segunda')
        break
    case 2:
        console.log('Hoje é terça')
        break
    case 3:
        console.log('Hoje é quarta')
        break
    case 4:
        console.log('Hoje é quinta')
        break
    case 5:
        console.log('Hoje é sexta')
        break
    case 6:
        console.log('Hoje é sábado')
        break
    case 7:
        console.log('Hoje é domingo')
        break
    default:
        console.log('Erro: informação invalida')
}

/*7 - Calcule o valor de uma expressão matemática simples

Escreva um programa que leia dois números e um operador (+, -, *, /) e use uma estrutura switch para calcular o resultado da operação.
Imprima o resultado.

Dica: Utilize os operadores aritméticos em cada caso do switch.*/

/*8 - Verifique a estação do ano

Escreva um programa que leia um número de 1 a 4 e use uma estrutura switch para imprimir a estação do ano correspondente. (1 =
Primavera, 2 = Verão, 3 = Outono, 4 = Inverno)*/

//COMBINADOS
/*9 - Verifique a faixa etária de uma pessoa
Escreva um programa que leia a idade de uma pessoa e use uma estrutura if/else para determinar a faixa etária:
            Criança: 0 - 12 anos
            Adolescente: 13 - 17 anos
            Adulto: 18 - 59 anos
            Idoso: 60 anos ou mais

Dica: Utilize uma estrutura switch além bloco if/else para imprimir uma mensagem específica para cada faixa etária.*/
// let age = Number(prompt('Informe a sua idade: '))

// if(age>=0 && age <= 12){
//     ageRange = 'Criança'
// } else if(age >= 13 && age <= 17){
//     ageRange = 'Adolescente'
// } else if(age >= 18 && age <=60){
//     ageRange = 'Adulto'
// } else if(age >= 61){
//     ageRange = 'Idoso'
// } else {
//     ageRange = 'Idade inválida'
// }

// switch(ageRange){
//     case 'Criança':
//         console.log("Você é uma criança")
//         break
//     case 'Adolescente':
//         console.log("Você é uma adolescente")
//         break
//     case 'Adulto':
//         console.log("Você é uma adulto")
//         break
//     case 'Idoso':
//         console.log("Você é uma idoso")
//         break
//     default:
//         console.log('Idade invalida.')
// }

/*10 - Calcule o IMC e determine a categoria

Escreva um programa que leia o peso (kg) e a altura (m) 
de uma pessoa, calcule o Índice de Massa Corporal (IMC) e use uma estrutura
if/else para determinar a categoria:
            Abaixo do peso: IMC < 18.5
            Peso normal: IMC 18.5 - 24.9
            Sobrepeso: IMC 25 - 29.9
            Obesidade grau I: IMC 30 - 34.9
            Obesidade grau II: IMC 35 - 39.9
            Obesidade grau III: IMC >= 40
Dica: O IMC é calculado como peso dividido pela altura ao quadrado (IMC = peso / altura²).*/

// let weight = Number(prompt('Informe seu peso em kgs: '))
// let height = Number(prompt('Informe sua altura em metros: '))
// const imc = weight / (height*height)
// if(imc <= 18.5){
//     range = 'Abaixo'
// } else if(imc >= 18.5 && imc <= 24.9){
//     range = 'Normal'
// }  else if(imc >= 25 && imc <= 29.9){
//     range = 'Sobrepeso'
// }  else if(imc >= 30 && imc <= 34.9){
//     range = 'ObesidadeI'
// }  else if(imc >= 35 && imc <= 39.9){
//     range = 'ObesidadeII'
// }  else if(imc >= 40){
//     range = 'ObesidadeIII'
// } else {
//     range = 'Invalido'
// }

// switch (range){
//     case 'Abaixo':
//         console.log(`Seu resultado foi ${imc.toFixed(2)}. Você está abaixo do peso ideal.`)
//         break
//     case 'Normal':
//         console.log(`Seu resultado foi ${imc.toFixed(2)}. Você está no peso normal.`)
//         break
//     case 'Sobrepeso':
//         console.log(`Seu resultado foi ${imc.toFixed(2)}. Você está com sobrepeso.`)
//         break
//     case 'ObesidadeI':
//         console.log(`Seu resultado foi ${imc.toFixed(2)}. Você está no quadro de obesidade I.`)
//         break
//     case 'ObesidadeII':
//         console.log(`Seu resultado foi ${imc.toFixed(2)}. Você está no quadro de obesidade II.`)
//         break
//     case 'ObesidadeIII':
//         console.log(`Seu resultado foi ${imc.toFixed(2)}. Você está no quadro de obesidade III.`)
//         break
//     default:
//         console.log('Erro: informações inválidas')
// }




//EXERCÍCIOS ESTRUTURAS REPETIÇÃO
//FOR:
/*1 - Imprima a sequência de Fibonacci até o 10º termo

Escreva um programa que use um loop for para imprimir os primeiros 10 termos da sequência de Fibonacci. (0, 1, 1, 2, 3, 5, 8, 13, 21, 34)

Dica: A sequência de Fibonacci é calculada somando os dois termos anteriores para obter o próximo termo.

2 - Verifique se um número é primo
Escreva um programa que use um loop for para verificar se 
um número fornecido (por exemplo, 29) é primo.
Imprima "É primo" ou "Não é primo".
Dica: Um número primo só é divisível por 1 e por ele mesmo.

3 - Imprima um triângulo de números

Escreva um programa que use um loop for para imprimir um triângulo de números.

Dica: Utilize dois loops for, um dentro do outro.

Exercícios com 'while'

4 - Calcule o fatorial de um número

Escreva um programa que use um loop while para calcular o fatorial de um número fornecido (por exemplo, 5). O fatorial de 5 (5!) é 120.

Dica: O fatorial de n (n!) é o produto de todos os números de 1 a n.

5 - Inverta os dígitos de um número


Escreva um programa que use um loop while para inverter os dígitos de um número fornecido (por exemplo, 1234 deve ser impresso como 4321).

Dica: Use operações de módulo e divisão para extrair os dígitos.

6 - Verifique se um número é palíndromo

Escreva um programa que use um loop while para verificar 
se um número fornecido (por exemplo, 121) é um palíndromo. 
Um número é palíndromo se ele é igual ao seu reverso.

DO WHILE

7 - Conte o número de dígitos de um número

Escreva um programa que use um loop do while para contar o número de dígitos de um número fornecido (por exemplo, 12345 tem 5 dígitos).

Dica: Use operações de divisão para reduzir o número até que ele seja zero.

8 - Calcule a soma dos dígitos de um número
       
Escreva um programa que use um loop do while para calcular a soma dos dígitos de um número fornecido (por exemplo, a soma dos dígitos de 1234 é 10).

Dica: Use operações de módulo para extrair os dígitos e depois some-os.

9 - Imprima um padrão de estrela decrescente

Escreva um programa que use um loop do while para imprimir um padrão de estrelas decrescente.

Dica: Utilize dois loops, um dentro do outro.
*/

/*10 - Encontre o maior divisor comum (MDC) de dois números
Escreva um programa que use um loop do while para encontrar 
o maior divisor comum (MDC) de dois números fornecidos 
(por exemplo, 56 e 98).
Dica: Utilize o algoritmo de Euclides, onde você repete 
o processo de substituir o maior número pela diferença 
dos dois números até que ambos sejam iguais.*/
// let num1 = Number(prompt('Informe o primeiro valor: '))
// let num2 = Number(prompt('Informe o segundo valor: '))

// let a = num1
// let b = num2

// do{
//     let temp = b // aqui registra um valor temporario
//     b = a % b
//     a = temp // aqui inverte os valores, a se torna o valor q era temporario e b recebe o valor de a como temporario
// } while(b !== 0) //enquanto o resto dessa troca nao for 0, o programaa perdura
// /* Ex: a= 12 b = 15
// 12 % 15 = 12
// a = 15
// b = 12
// 15 % 12 = 3
// a = 12
// b = 3
// 12 % 3 = 0
// Maior divisor comum de 15 e 12 é 3.
// */

// const MDC = a
// console.log(`O maior divisor comum de ${num1} e ${num2} é ${MDC}`)