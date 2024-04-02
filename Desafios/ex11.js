// 11. Crie uma lógica para calcular a idade de uma pessoa. Essa lógica deverá receber um valor de ano de nascimento no formato “yyyy-MM-dd” e deverá retornar o número da idade da pessoa como resultado.

function calcularIdade(dataNascimento) {
    var hoje = new Date();
    var dataNascimento = new Date(dataNascimento);
    var idade = hoje.getFullYear() - dataNascimento.getFullYear();
    var mesAtual = hoje.getMonth() + 1;
    var diaAtual = hoje.getDate();
    var mesNascimento = dataNascimento.getMonth() + 1;
    var diaNascimento = dataNascimento.getDate();

    if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
        idade--;
    }

    return idade;
}

// Exemplo de uso
var anoDeNascimento = "1990-05-15";
var idadeDaPessoa = calcularIdade(anoDeNascimento);
console.log("Idade da pessoa: " + idadeDaPessoa);
