const assert = require('assert');
const capitalizeFirstLetters = require('../capitalizeFirstLetters')

describe('capitalizeFirstLetters', () => {
    it('is a function accepting one argument', () => {
        assert.strictEqual(typeof capitalizeFirstLetters, 'function');
        assert.strictEqual(capitalizeFirstLetters.length, 1);
    });
    it('transforms the entire string correctly', () => {
        assert.strictEqual(capitalizeFirstLetters('je vais en ville'), 'Je Vais En Ville');

    });
    it('works with a 1-character string', () => {
        assert.strictEqual(capitalizeFirstLetters('b'), 'B');
    });

    it('works with an empty string', () => {
        assert.strictEqual(capitalizeFirstLetters(''), '');
    });
});
