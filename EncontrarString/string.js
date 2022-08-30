// Criar um método para ler propriedades de um objeto
// Exibir somente as propriedades do tipo string que estão nesse objeto

const manga = {
    titulo : 'ONE PIECE',
    ano: 1999,
    autor: 'Eiichiro Oda',
    capitulos: 1056,
    protagonista: 'Luffy'
}

function exibirStrings(objeto) {
    for (chave in objeto) {
        if (typeof objeto[chave] === 'string'){
            console.log(chave, objeto[chave] )
            }
        }
    }
