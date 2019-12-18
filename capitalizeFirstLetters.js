const assert = require('assert');

assert.strictEqual(typeof capitalizeFirst, 'function');

assert.strictEqual(capitalizeFirst.length, 1);

assert.strictEqual(capitalizeFirst('jje vais en ville'), 'Je Vais En Ville');

assert.strictEqual(capitalizeFirst('b'), 'B');

assert.strictEqual(capitalizeFirst(''), '');