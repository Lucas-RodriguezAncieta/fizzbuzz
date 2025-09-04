const fizzBuzz = require('./fizzbuzz'); // Importamos la función que vamos a crear

test('debería retornar 1 para el número 1', () => {
    expect(fizzBuzz(1)).toBe('1');
});


test('debería retornar Fizz para múltiplos de 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
    expect(fizzBuzz(6)).toBe('Fizz');
});