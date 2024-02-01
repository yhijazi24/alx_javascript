#!/usr/bin/node
class Rectangle {
    constructor(w, h) {
        this.width = w > 0 && Number.isInteger(w) ? w : undefined;
        this.height = h > 0 && Number.isInteger(h) ? h : undefined;
    }
}

module.exports = Rectangle;