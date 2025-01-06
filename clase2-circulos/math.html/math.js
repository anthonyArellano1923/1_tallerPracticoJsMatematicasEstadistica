console.group('Square')
const side = 5;

const squarePerimeter = side * 4;
const squareArea = side ** 4;

console.log({side, squarePerimeter, squareArea})

function calculateSquare(side) {
  return {
    squareSides: side,
    squarePerimeter: side * 4,
    squareArea: side ** 2
  }
}
console.groupEnd('Square')

console.group('Triangle')

const triangleSide1 = 6;
const triangleSide2 = 6;
const triangleSideBase = 4;
const triangleHeight = 5.5;

const trianglePerimeter = triangleSide1 + triangleSide2 +triangleSideBase;
const triangleArea = triangleSideBase * triangleHeight / 2;

console.log({triangleSide1, triangleSide2, triangleSideBase, trianglePerimeter, triangleArea})

function calculateTriangle(side1, side2, sideBase, height) {
  return {
    trianglePerimeter: side1 + side2 + sideBase,
    triangleArea: sideBase * height / 2
  }
}

console.groupEnd('Triangle')

console.group('circles')

const radious = 3;
const diameter = radious * 2;
const PI = 3.1415;

const circleCircumference = diameter * PI;
const circleArea = (radious ** 2) * PI;

console.log({
  radious,
  diameter,
  PI,
  circleCircumference,
  circleArea
})

function calculateCircle(radious) {
  const diameter = radious * 2
  return {
    radious,
    diameter,
    circleCircumference : diameter * Math.PI.toFixed(3),
    circleArea : Math.pow(radious, 2) * Math.PI.toFixed(3)
  }
}

console.groupEnd('circles')
