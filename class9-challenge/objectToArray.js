function objectToArray(object) {
  const array = Object.entries(object).map(([id, name]) => ({id, name}))
  return array
  }

//Mi solución:

function solution(obj) {
  const object1 = obj
  const array = Object.entries(object1)
  const arrayOfObjects = []

  for (let element of array) {
    arrayOfObjects.push(
      {
        'id': element[0],
        'name': element[1]
      }
    )
  }

  return arrayOfObjects}

// const obj = {
//   123: 'Juanito Alcachofa',
//   456: 'Juanita Alcaparra',
// };