function isEven(usersList) {
  return !(usersList.length % 2)
}

function calculateAverage(usersList){
  const list = usersList
  const elementsSum = list.reduce((initialValue, finalValue) => initialValue + finalValue)
  const average = elementsSum / list.length
  console.log('Average: ', average)
}

function calculateMedian(usersList){
  const list = usersList.sort((x, y) => x - y)
  const evenList = isEven(list)
  const listIndex = Math.floor(list.length /2)

  if (evenList) {
    const centralElements = [list[listIndex - 1], list[listIndex]]
    return calculateAverage(centralElements)

  } else {
    return list[listIndex]
  }
}


function calculateMode(usersList) {
  const objectCounter = {}

  for (let i = 0; i < usersList.length; i++){
    let element = usersList[i]
    if (objectCounter[element]) {
      objectCounter[element] += 1
    } else {
      objectCounter[element] = 1
    }
  }
  const listCounter = Object.entries(objectCounter)
  const listSorted = [...listCounter].sort((x,y) => x[1] - y[1])
  const mode = listSorted[listSorted.length - 1][0]
  console.log(listSorted)
  return mode
}