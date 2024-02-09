const Square = require('./5-square');

class SquareWithCharPrint extends Square {
    constructor(size) {

        super(size);
    }

    charPrint(c) {
        if (c === undefined) {
            c = 'X'; 
        }
        for (let i = 0; i < this.width; i++) {
            console.log(c.repeat(this.width));
        }
    }
}

module.exports = SquareWithCharPrint;
