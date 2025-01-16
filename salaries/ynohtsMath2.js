const YnohtsMath = {}

YnohtsMath.calculateSquare = function (side) { // Requires a side of a square.
  return { squareSides: side, squarePerimeter: side * 4, squareArea: side ** 2 }
}

YnohtsMath.calculateScaleneTriangle = function (side1, side2, sideBase, height) { // Requires side1, side2, sideBase and height of a scalene.
  return { trianglePerimeter: side1 + side2 + sideBase, triangleArea: sideBase * height / 2 }
}

YnohtsMath.calculateScaleneTriangleHeight = function (side1, side2, side3) { // Requires the 3 sides of a scalene triangle
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
  const A = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
  const h = 2 * A / side1;

  return h;
}

YnohtsMath.calculateIsoscelesTriangleHeight = function (sides, base) {
  if (sides > base / 2) {
    return Math.sqrt(Math.pow(sides, 2) - Math.pow(base, 2) / 4);
  } else {
    throw new Error('El valor del lado y la base no son válidos para formar un triángulo isósceles. Asegúrate de que los lados sean más largos que la mitad de la base.');
  }
}

YnohtsMath.calculateCircle = function (radious) { // Requires the radious of the circle.
  const diameter = radious * 2;
  return { diameter, circleCircumference: diameter * Math.PI, circleArea: Math.pow(radious, 2) * Math.PI }
}

YnohtsMath.average = function (list) {
  return list.reduce((sum, newValue) => sum + newValue, 0) / list.length;
}

YnohtsMath.cuadraticAverage = function (list) { // Requires a list of numbers
  const cuadraticValues = list.map((element) => element ** 2);
  const dataSum = cuadraticValues.reduce((sum = 0, newValue) => sum + newValue);
  return Math.sqrt(dataSum / list.length);
}

YnohtsMath.meanSquaredError = function (list) { // Requires a list of numbers
  const [mesured, predicted] = list;
  const calculateErrors = mesured.map((value, index) => value - predicted[index]);
  const cuadraticErrors = calculateErrors.map((element) => element ** 2);
  const sumErrors = cuadraticErrors.reduce((sum = 0, newValue) => sum + newValue);
  return sumErrors / list[0].length;
}

YnohtsMath.harmonicMean = function (list) { // Requires a list of numbers
  const inverseVelocity = list.map((velocity) => 1 / velocity);
  const sumVelocity = inverseVelocity.reduce((sum = 0, newValue) => sum + newValue);
  return list.length / sumVelocity;
}

YnohtsMath.calculateMedian = function (usersList) {
  const list = usersList.sort((x, y) => x - y);
  const isEven = (list.length % 2 === 0); 
  const listIndex = Math.floor(list.length / 2);

  if (isEven) {
    const centralElements = [list[listIndex - 1], list[listIndex]];
    return YnohtsMath.average(centralElements);
  } else {
    return list[listIndex];
  }
};

YnohtsMath.calculateMode = function (usersList) {
  const objectCounter = {};

  for (let i = 0; i < usersList.length; i++) {
    const element = usersList[i];
    if (objectCounter[element]) {
      objectCounter[element] += 1;
    } else {
      objectCounter[element] = 1;
    }
  }

  const listCounter = Object.entries(objectCounter);
  const listSorted = [...listCounter].sort((x, y) => x[1] - y[1]);
  return parseInt(listSorted[listSorted.length - 1][0]);
};