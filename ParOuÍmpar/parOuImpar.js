// Receber uma quantidade de valores para valiar
// Função exibe se cada valor é par ou ímpar

function parOuImpar(n) {
    for (let i = 0; i <= n; i++) {
        if (i % 2 === 0) {
             console.log(i +' É PAR');
        } else {
             console.log(i +' É ÍMPAR')
        }
    }
}