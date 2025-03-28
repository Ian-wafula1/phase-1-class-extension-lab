// Your code here

class Polygon {
    constructor(lengths) {
        this.lengths = lengths
    }

    get countSides() {
        return this.lengths.length
    }

    get perimeter() {
        return this.lengths.reduce((perimeter, side) => {
            return perimeter += +side
        }, 0)
    }
}

class Triangle extends Polygon {
    get isValid(){
        for (let side of this.lengths) {
            if (this.perimeter - +side < side) return false
        }
        return true
    }
}

class Square extends Polygon {
    get isValid() {
        for (let side of this.lengths) {
            if (this.perimeter !== +side * 4) return false
        }
        return true
    }

    get area() {
        return this.lengths[0] ** 2
    }
}