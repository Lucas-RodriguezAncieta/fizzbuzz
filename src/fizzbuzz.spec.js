const fizzBuzz = require('./fizzbuzz'); // Importamos la función que vamos a crear

test('debería retornar 1 para el número 1', () => {
    expect(fizzBuzz(1)).toBe('1');
});


test('debería retornar Fizz para múltiplos de 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
    expect(fizzBuzz(6)).toBe('Fizz');
});

test('debería retornar Buzz para múltiplos de 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
    expect(fizzBuzz(10)).toBe('Buzz');
});