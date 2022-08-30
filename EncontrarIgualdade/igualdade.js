// Comparar se as propriedades são iguais
// Comparar se a referência do objeto aponta para o mesmo local na memória

function address(rua, cidade, cep) {
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
}

const address1 = new address('a', 'b', 'c');
const address2 = new address('d', 'e', 'a');
const address3 = address1;

function saoIguais(address1, address2) {
    return  address1.rua === address2.rua &&
            address1.cidade === address2.cidade &&
            address1.cep === address2.cep           
}

function mesmaMemoria(address1, address2) {
    return address1 === address2;
}