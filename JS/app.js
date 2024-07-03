/*function somaValores() {
    const valor1 = Number(prompt("informe o valor"));
    const valor2 = Number(prompt("Informe o valor"));
    
    return valor1 + valor2;
}

const resultado = somaValores();
alert(`resultado:${resultado}`);*/

// Algoritmo "ParOuImpar"
function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
        alert(`O número ${numero} é par!`);
    } else {
        alert(`O número ${numero} é ímpar!`);
    }
}
const numeroDigitado = parseInt(prompt("Informe um número:"));
verificarParOuImpar(numeroDigitado);



