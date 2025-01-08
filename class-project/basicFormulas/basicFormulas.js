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

function calculateIsoscelesTriangleHeight(sides, base){
  if (sides > base / 2) {
    return {
      triangleHeight : Math.sqrt(Math.pow(sides, 2) - Math.pow(base, 2) / 4)
    }
  }
  else {
    throw new Error('El valor del lado y la base no son válidos para formar un triángulo isósceles. Asegúrate de que los lados sean más largos que la mitad de la base.');
  }
}

function calculateScaleneTriangleHeight(side1, side2, side3) {
  
  if (
    side1 === side2 || 
    side2 === side3 || 
    side1 === side3 ||
    ![side1, side2, side3].every(side => typeof side === 'number' && side > 0) ||
    !(side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1)
  ) {
    return false;
  }
  const s = (side1 + side2 + side3) / 2;
  const A = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3))
  const h = 2 * A / side1

  return h
}

