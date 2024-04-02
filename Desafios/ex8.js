// 8. Em um sistema de biblioteca, é necessário calcular a multa a ser paga por um usuário que atrasou a devolução de um livro. A multa é de R$ 0,50 por dia de atraso. O usuário atrasou a devolução do livro em 7 dias. Crie um algoritmo que faça o cálculo total que o aluno deverá pagar a biblioteca.

let multa = 0.5;
let diasDeAtraso = 7;

let valorTotalMulta = multa * diasDeAtraso;
console.log(valorTotalMulta);