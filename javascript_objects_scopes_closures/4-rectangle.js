class Rectangle {
    constructor(w, h) {
        if (w <= 0 || h <= 0 || !Number.isInteger(w) || !Number.isInteger(h)) {
            // Create an empty object if width or height is not positive integer
            return {};
        }
        this.width = w;
        this.height = h;
    }

    print() {
        if (this.width === undefined || this.height === undefined) {
            // Check if the object is empty
            return;
        }
        for (let i = 0; i < this.height; i++) {
            console.log('X'.repeat(this.width));
        }
    }

    rotate() {
        if (this.width === undefined || this.height === undefined) {
            // Check if the object is empty
            return;
        }
        const temp = this.width;
        this.width = this.height;
        this.height = temp;
    }

    double() {
        if (this.width === undefined || this.height === undefined) {
            // Check if the object is empty
            return;
        }
        this.width *= 2;
        this.height *= 2;
    }
}

module.exports = Rectangle;
