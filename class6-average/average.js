const list = [1,2,3,4,5,6,7,8]
let sum = 0

// for(let number of list) {
//   sum += number
// }

list.forEach(number => {
  sum +=number
})

const average = sum / list.length 

console.log(average)