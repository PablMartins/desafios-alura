// 9. Em um jogo de RPG, o personagem do jogador possui pontos de vida (HP) que são reduzidos quando ele sofre danos dos inimigos. Seu personagem começa com 100 pontos de vida e sofre danos de 20 pontos em um ataque. Crie um algoritmo informando quantos pontos de vida restarão após três ataques?

let pontosVida = 100;
console.log(pontosVida)

let ataque = 20;

let pontosVidaFinal = pontosVida - (20 * 3);
console.log(pontosVidaFinal);