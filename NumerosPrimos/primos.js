// Criar função para mostrar os números primos

function checarPrimo(numero) {
    for (let divisor = 2; divisor < numero; divisor++){
        if (numero % divisor === 0){
            return false;
        }
    }
    return true
}

function exibirNumerosPrimos(numero) {
    for (i = 2; i <= numero; i++){
        if (checarPrimo(i)) console.log(i);
    }
}

