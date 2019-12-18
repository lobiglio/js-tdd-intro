const assert = require('assert');
const Rectangle = require('../rectangle');

describe('Rectangle', () => {
    it('return true', () => {
        const rectangle = new Rectangle(7, 7);
        assert.strictEqual(rectangle.isSquare(), true);

    });
    it('return false', () => {
        const rectangle = new Rectangle(7, 8);
        assert.strictEqual(rectangle.isSquare(), false);
    });

    it('return the correct area', () => {
        const rectangle = new Rectangle(13, 7);
        assert.strictEqual(rectangle.getArea(), 91);
    });

    it('return the correct perimeter', () => {
        const rectangle = new Rectangle(13, 7);
        assert.strictEqual(rectangle.getPerimeter(), 40);
    });
});
