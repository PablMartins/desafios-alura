// 7.Em uma loja de conveniência, um cliente comprou três itens e precisa calcular o total da compra. Os preços dos itens são R$ 2,50, R$ 3,75 e R$ 1,99. Crie um algoritmo que retorne o valor total.

let preco1 = 2.50;
let preco2 = 3.75;
let preco3 = 1.99;

let produto1 = prompt("Quantos produtos de R$2,50 você comprou?");
let produto2 = prompt("Quantos produtos de R$3,75 você comprou?");
let produto3 = prompt("Quantos produtos de R$1,99 você comprou?");

let valorFinal = (preco1 * produto1) + (preco2 * produto2) + (preco3 * produto3);
console.log(valorFinal)