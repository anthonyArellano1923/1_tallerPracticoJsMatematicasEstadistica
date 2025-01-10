function sumElements(initialValue, finalValue) {
  return initialValue + finalValue;
}

function calculateAverageWithReduce(usersList){
   const list = usersList
   const elementsSum = list.reduce(sumElements)
   const average = elementsSum / list.length
   calculateAverageWithForEach(usersList)
   calculateAverageWithReduceConstArrowFunction(usersList)
   calculateAverageWithReduceArrowFunction(usersList)
   console.log('AverageWithReduce: ',average)
}

function calculateAverageWithForEach(usersList) {
  const list = usersList
  let sum = 0
  list.forEach(number => {
    sum +=number
  })
  const average = sum / list.length
  console.log('AverageWithForEach: ', average)
}

function calculateAverageWithReduceConstArrowFunction(usersList){
  const list = usersList
  const sumElementsArrowFunction = (initialValue, finalValue) => initialValue + finalValue

  const elementsSum = list.reduce(sumElementsArrowFunction)
  const average = elementsSum / list.length
  console.log('AverageWithReduceConstArrowFunction: ', average)
}

function calculateAverageWithReduceArrowFunction(usersList){
  const list = usersList
  const elementsSum = list.reduce((initialValue, finalValue) => initialValue + finalValue)
  const average = elementsSum / list.length
  console.log('AverageWithReduceArrowFunction: ', average)
}
