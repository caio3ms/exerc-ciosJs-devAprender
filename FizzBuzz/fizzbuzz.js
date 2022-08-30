// Divisivel por 3 -> Fizz
// Divisivel por 5 -> Buzz
// Divisivel por 3 e 5 -> FizzBuzz
// Não divisivel por 3 ou 5 -> entrada
// Não é um número -> 'Não é um número'

function fizzBuzz(n) {
    if (n % 3 === 0 && n % 5 === 0) {
        return console.log('FizzBuzz');
    } if (typeof n !== 'number') {
        return console.log('Não é um número');
    } if (n % 3 === 0) {
        return console.log('Fizz');
    } if (n % 5 === 0) {
        return console.log('Buzz');
    }  if (n % 3 !== 0 && n % 5 !== 0) {
        return console.log(n);
    }
        
}

for (let i = 1; i <= 100; i++) {
    fizzBuzz(i)
}