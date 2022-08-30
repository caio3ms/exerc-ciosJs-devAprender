// Obter a média a partir de um array

//  0 - 59 : E
// 60 - 69 : D
// 70 - 79 : C
// 80 - 89 : B
// 90 - 100 : A

const array = [75, 80, 95];

// function mediaDoAluno(notas) {
//     let soma = 0;
//     for (const nota of notas) {
//         soma += nota;
//     }
//     let media = soma/notas.length;
//     if (media >= 0 && media <= 59) {
//         console.log('E: '+ Math.floor(media))
//     }
//     if (media >= 60 && media <= 69) {
//         console.log('D: '+ Math.floor(media))
//     }
//     if (media >= 70 && media <= 79) {
//         console.log('C: '+ Math.floor(media))
//     }
//     if (media >= 80 && media <= 89) {
//         console.log('B: '+ Math.floor(media))
//     }
//     if (media >= 90 && media <= 100) {
//         console.log('A: '+ Math.floor(media))
//     }
// }

// Método clean:

function calcularMedia(array) {
    let soma = 0;
    for (let nota of array) {
        soma += nota
    }
    return soma/(array.length);
}

function mediaDoAluno() {
    const media = calcularMedia(array)
    if (media <= 59) return 'E';
    if (media <= 69) return 'D';
    if (media <= 79) return 'C';
    if (media <= 89) return 'B';
    return 'A'
}