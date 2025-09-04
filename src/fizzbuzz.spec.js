const fizzBuzz = require('./fizzbuzz'); // Importamos la función que vamos a crear

test('debería retornar 1 para el número 1', () => {
    expect(fizzBuzz(1)).toBe('1');
});


