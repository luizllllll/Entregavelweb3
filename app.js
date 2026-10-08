
"use strict";

// BLOCO 1 - VARIÁVEIS

// Questão 1
let pontos = 50;
console.log(pontos);

pontos = pontos + 10;
console.log(pontos);

// Questão 2
const MAX_PONTOS = 100;

try {
    MAX_PONTOS = 200;
} catch (erro) {
    console.log(erro.name);
    console.log("Não pode alterar uma constante");
}

// Questão 3
let nome = "Luiz";
let idade = 18;
let estudante = true;
let endereco;
let telefone = null;

console.log(typeof nome);
console.log(typeof idade);
console.log(typeof estudante);
console.log(typeof endereco);
console.log(typeof telefone);

// Questão 4
console.log(`Meu nome é ${nome} e tenho ${idade} anos`);

console.log("Meu nome é " + nome + " e tenho " + idade + " anos");


// BLOCO 2 - FUNÇÕES

// Questão 1
console.log(ehMaiorDeIdade(18));

function ehMaiorDeIdade(idade) {
    return idade >= 18;
}

// Questão 2
try {
    console.log(ehMaiorDeIdadeExpressao(18));
} catch (erro) {
    console.log(erro.name);
}

const ehMaiorDeIdadeExpressao = function(idade) {
    return idade >= 18;
};

console.log(ehMaiorDeIdadeExpressao(17));

// Questão 3
function dobro(numero) {
    return numero * 2;
}

const dobro2 = function(numero) {
    return numero * 2;
};

const dobro3 = (numero) => numero * 2;

console.log(dobro(5));
console.log(dobro2(5));
console.log(dobro3(5));

// Questão 4
function dobroPadrao(numero = 1) {
    return numero * 2;
}

console.log(dobroPadrao(5));
console.log(dobroPadrao());


// BLOCO 3 - CONTROLE DE FLUXO

// Questão 1
function classificarNota(nota) {
    if (nota >= 6) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}

console.log(classificarNota(8));
console.log(classificarNota(4));

// Questão 2
let corSemaforo = "verde";

switch (corSemaforo) {
    case "vermelho":
        console.log("Pare");
        break;

    case "amarelo":
        console.log("Atenção");
        break;

    case "verde":
        console.log("Siga");
        break;

    default:
        console.log("Cor inválida");
}

// Questão 3
for (let i = 1; i <= 10; i++) {
    console.log("5 x " + i + " = " + (5 * i));
}

// Questão 4
let contador = 5;

while (contador >= 1) {
    console.log(contador);
    contador--;
}

// Questão 5 - for
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i + " é par");
    } else {
        console.log(i + " é ímpar");
    }
}

// Questão 5 - while
let numero = 1;

while (numero <= 20) {
    if (numero % 2 === 0) {
        console.log(numero + " é par");
    } else {
        console.log(numero + " é ímpar");
    }

    numero++;
}

// Questão 6
function diaDaSemana(numero) {
    switch (numero) {
        case 1:
            return "Domingo";
        case 2:
            return "Segunda-feira";
        case 3:
            return "Terça-feira";
        case 4:
            return "Quarta-feira";
        case 5:
            return "Quinta-feira";
        case 6:
            return "Sexta-feira";
        case 7:
            return "Sábado";
        default:
            return "Dia inválido";
    }
}

console.log(diaDaSemana(1));
console.log(diaDaSemana(4));
console.log(diaDaSemana(8));