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



