// Criar um objeto address que contem:
    // Rua
    // Cidade
    // CEP
    // showAdress(address)

const address = {
    rua:'Antônio Bernadino de Carvalho',
    cidade:'Feira de Santana',
    cep: 44007202,
}

function showAddress(address) {
    for (let i in address){
        console.log(i, address[i])
    }
}

showAddress(address)