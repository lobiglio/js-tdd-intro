const assert = require('assert');

assert.strictEqual(typeof capitalizeFirstLetters, 'function');

assert.strictEqual(capitalizeFirstLetters.length, 1);

assert.strictEqual(capitalizeFirstLetters('je vais en ville'), 'Je Vais En Ville');

assert.strictEqual(capitalizeFirstLetters('b'), 'B');

assert.strictEqual(capitalizeFirstLetters(''), '');


function capitalizeFirstLetters(input) {
    if (input.length > 0) {

        input = input.split(" ");
        for (let i = 0; i < input.length; i++) {
            input[i] = input[i][0].toUpperCase() + input[i].substr(1);
        }
        return input.join(' ');
    } else {
        return '';
    }
}