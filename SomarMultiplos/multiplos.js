// Criar função somar que retorna a soma de todos os multiplos de 3 e 5

function somar(limite) {
    let soma = 0;
    for (let i = 0; i <= limite; i++) {
        if (i % 3 === 0) {
            soma += i
        }
        if (i % 5 === 0) {
            soma += i
        }
    }
   // let soma = multiplosDe3 + multiplosDe5;
    console.log(soma)
}
