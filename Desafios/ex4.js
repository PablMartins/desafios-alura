// 4. Em uma pequena vila, o fazendeiro precisa separar os números primos para determinar quantos novos campos plantar. Ele pede sua ajuda para identificar esses números criando um algoritmos. Os números são: 23, 16, 11, 8, 19, 14, 5, 21.

function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function separarNumerosPrimos(numeros) {
    const primos = [];
    const naoPrimos = [];

    numeros.forEach(numero => {
        if (isPrime(numero)) {
            primos.push(numero);
        } else {
            naoPrimos.push(numero);
        }
    });

    return {
        primos: primos,
        naoPrimos: naoPrimos
    };
}

const numeros = [23, 16, 11, 8, 19, 14, 5, 21];
const resultado = separarNumerosPrimos(numeros);
console.log("Números primos:", resultado.primos);
console.log("Números não primos:", resultado.naoPrimos);

