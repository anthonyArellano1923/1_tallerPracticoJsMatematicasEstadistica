const inputPrice = document.querySelector('#price')
const inputCupon = document.querySelector('#cupon')
const applyButton = document.querySelector('#applyDiscount')
const discountedPrice = document.querySelector('#priceDiscounted')
const cuponsArray = []

cuponsArray.push({
  name: 'ashen-one-discount',
  discount: 25
})
cuponsArray.push({
  name: 'tarnished-discount',
  discount: 20
})
cuponsArray.push({
  name: 'god-discount',
  discount: 15
})
cuponsArray.push({
  name: 'winter-discount',
  discount: 10
})

function applyDiscount(cuponDiscount) {
  const originalPrice = inputPrice.value
  if (originalPrice > 0 ) {
    const priceDiscounted = (originalPrice * (100 - cuponDiscount)) / 100
    discountedPrice.innerText = 'Your price got a ' + cuponDiscount + '% discount, now you pay ' + priceDiscounted + '$'
  } else {
    discountedPrice.innerText = 'You must digit a price that must be higher than 0.'
  }
}

function isThisACupon(cuponElement) {
  return cuponElement.name == userCupon
}

function getCupon() {
  
  function isThisACupon(cuponElement) {
    return cuponElement.name == userCupon
  }

  const userCupon = inputCupon.value
  const originalPrice = inputPrice.value

  if (originalPrice == '') {
    discountedPrice.innerText = 'You must digit a price.'
    return
  }

  const cuponInArray = cuponsArray.find(isThisACupon)

  if (cuponInArray) {
    applyDiscount(cuponInArray.discount)
  } else {
    discountedPrice.innerText = 'Non-valid cupon, input a valid one to get the discount'
  }

// Verificación de cupon con array de objetos y método filter.
  // if (cuponInArray.length > 0) {
  //   console.log(cuponInArray, cuponInArray.discount)
  //   applyDiscount(cuponInArray[0].discount)
  // } else {
  //   discountedPrice.innerText = 'Non-valid cupon, input a valid one to get the discount'
  // }

//Verificación de cupon cuando se pasa un oobjeto con varios elementos dentro.

  // if (cuponsDB[userCupon]) {           
  //   applyDiscount(cuponsDB[userCupon])
  // } else {
  //   discountedPrice.innerText = 'Non-valid cupon, input a valid one to get the discount'
  // }
}


document.addEventListener('DOMContentLoaded', () => {
  applyButton.addEventListener('click', () => getCupon())
});



