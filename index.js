/* Exercicios de Interpretação de código

__________________________________________
function minhaFuncao (variavel) {
   // return variavel * 5
//}

//console.log(minhaFuncao(2))
//console.log(minhaFuncao(10))

//minhaFuncao(2)
//minhaFuncao(10)
___________________________________________

//O que vai ser impresso no console?
o que irá aparece no console log é o resultado 10 e 50


//O que aconteceria se retirasse os dois console.log e simplesmente invocasse a função minhaFuncao(2) e minhaFuncao(10)?
O que apareceria no console?

não está aparecendo porque não foi declarado 
*/



 /*Exercicio 2 

______________________________________________________
let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
   return texto.toLowerCase().includes("cenoura")

}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)
_________________________________________________________

//Explique o que essa função faz e qual é sua utilidade
o objetivo da função é de deixar em minusculo se for verdadeiro a string cenoura

//Determine qual será a saída no console para cada uma das 3 entradas dos usuário: 
//i.Eu gosto de cenoura    ******* a correta é essa 
//ii.CENOURA é bom pra vista
//iii.Cenouras crescem na terra 
*/



/* Exercicios de escrita de código 

1.Escreva as funções explicadas abaixo:
a. A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como:

"Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."

Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. 
Lembrando que a função não possui entradas, apenas imprime essa mensagem, 

function imprimeMensagem() {
   console.log("Eu sou a Diéssica, tenho 30 anos, moro em São Leopoldo e sou estudante")
     
}

imprimeMensagem()
*/

/* b. Agora escreva uma função que receba 4 parametros que correspondem às informações de uma pessoa: 
 o nome (string), a idade (number), a cidade (string) e uma profissão (string). 
Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template: 

"Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO]."


function quemSou (nome, idade, endereco, profissao) {
    nome = prompt('Digite seu nome')
    idade = prompt('Digite sua idade')
    endereco = prompt('Digite seu endereço')
    profissao = prompt('Digite sua profissão')
   
    const resposta = (`Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${profissao}`)

    alert(resposta)
     

}

quemSou ()


*/


/* 2.Escreva as funções explicadas abaixo:

a) Escreva uma função que receba 2 números como parâmetros;
 dentro da função, faça a soma das duas entradas e retorne o resultado;
Invoque a função e imprima no console o resultado.

function = somaNum(num1,num2) {
 return 
}






b)Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.



c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.
*/
function mensagem(texto){
    return texto.toUpperCase() + ' - ' + texto.length;
}

console.log(mensagem('Vamos gremio!'));


/*
3. Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão).
 Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. 
Por fim, mostre no console o resultado das operações:


function soma(num1,num2) {
 return num1 + num2;
}

function subtracao(num1,num2) {
    return num1 - num2;
}

function divisao(num1,num2) {
    return num1 / num2;

}

function multiplicacao(num1,num2) {
    return num1 * num2;

}

let somaDois = soma(2,3)
let subDois  = subtracao(2,3)
let divDois  = divisao(2,3)
let multDois = multiplicacao(2,3)

console.log('Numeros inseridos: ' + 2 + ', ' + 3);
console.log('Soma: ' +somaDois);
console.log('Diferença: ' + subDois);
console.log('Multiplicação: ' + multDois);
console.log('Divisão: ' + divDois);


__________________________________________________________________
Números inseridos: 30 e 3
Soma: 33
Diferença: 27
Multiplicação: 90
Divisão: 10
 
*/



/*Desafio de Pitagoras
//hip² = a² + b²

function hipo(cat1,cat2) {
    return Math.sqrt(Math.pow(cat1,2) + Math.pow(cat2,2))
}console.log(hipo(3,4).toFixed(2));
*/