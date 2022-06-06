class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  static calculate(figura) {
    if (figura.side === 4) {
      return figura.side * figura.side;
    } else if (figura.width && figura.height) {
      return 2 * (figura.width + figura.height);
    } else {
      return Math.pow(figura.radius, 2) * 3.14;
    }
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square)); // r^2 (base*altezza)
console.log(AreaCalculator.calculate(rectangle)); // base * altezza
console.log(AreaCalculator.calculate(circle)); // r^2 * Pi greco