// Rectangle.js
class Rectangle {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    isSquare() {
        return this.a === this.b;
    }

    getArea() {
        return this.a * this.b;
    }

    getPerimeter() {
        return (this.a + this.b) * 2;
    }
}

module.exports = Rectangle;