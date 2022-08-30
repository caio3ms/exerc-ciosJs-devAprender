// Vmax = 70 km/h -> ok
// A cada 5 km/h acima -> 1 ponto
// Math.floor para arredondar
// Caso pontos >12 -> carteira suspendida

function radarVelocidade(v) {
    const velocidadeMaxima = 70;
    const kmPorPonto = 5;
    if (v <= velocidadeMaxima)
        console.log('OK');
    else {
        const p = Math.floor((v-velocidadeMaxima)/kmPorPonto);
        if (p >= 12)
           console.log('Carteira Suspensa!');
        else 
            console.log(p +' Pontos')
    }
}
radarVelocidade(130)