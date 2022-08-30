let a = 'Vermelho';
let b = 'Azul';

function trocarCor(a, b) {
    const c = a;
    a = b
    b = c
    console.log('Antes - a:'+ c +' b:'+ a )
    console.log('Agora - a:'+ a +' b:' + c )
}
