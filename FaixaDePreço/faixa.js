// [tooltip, minimo, maximo]

// Primeira Opção
let faixas = [
   {tooltip: 'até R$700', mínimo:0, maximo:700},
   {tooltip: 'de R$700 a R$1000', mínimo:700, maximo:1000},
   {tooltip: 'R$1000 ou mais', mínimo:1000, maximo:99999999}
];

// Segunda forma:
function criarFaixaPreco(tooltip, minimo, maximo) {
    return{
        tooltip,
        minimo,
        maximo
    }
}

let faixas2 = [
    criarFaixaPreco('até R$700', 0, 700),
    criarFaixaPreco('de R$700 a R$1000', 700, 1000),
    criarFaixaPreco('R$1000 ou mais', 1000, 999999999),
];
// Terceira forma: 
function FaixaPreco(tooltip, minimo, maximo) {
    this.tooltip = tooltip,
    this.minimo = minimo,
    this.maximo = maximo
}

let faixas3 = [
    new FaixaPreco('até R$700', 0, 700),
    new FaixaPreco('de R$700 a R$1000', 700, 1000),
    new FaixaPreco('R$1000 ou mais', 1000, 999999999),
];

console.log(faixas)
console.log(faixas2)
console.log(faixas3)