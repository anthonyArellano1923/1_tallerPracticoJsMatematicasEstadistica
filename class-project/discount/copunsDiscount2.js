const inputPrice = document.querySelector('#price')
const inputCupon = document.querySelector('#cupon')
const applyButton = document.querySelector('#applyDiscount')
const discountedPrice = document.querySelector('#priceDiscounted')

function applyDiscount(cuponDiscount) {
  const originalPrice = inputPrice.value
  if (originalPrice > 0 ) {
    const priceDiscounted = (originalPrice * (100 - cuponDiscount)) / 100
    discountedPrice.innerText = 'Your price got a ' + cuponDiscount + '% discount, now you pay ' + priceDiscounted + '$'
  } else {
    discountedPrice.innerText = 'You must digit a price that must be higher than 0.'
  }
}

function getCupon() {
  const userCupon = inputCupon.value
  const originalPrice = inputPrice.value
  if (originalPrice == '') {
    discountedPrice.innerText = 'You must digit a price.'
    return
  }
  if (userCupon == 'winter-discount') {
    applyDiscount(10)
  } else if (userCupon == 'god-discount') {
    applyDiscount(15)
  } else if (userCupon == 'tarnished-discount') {
    applyDiscount(20)
  } else if (userCupon == 'ashen-one-discount') {
    applyDiscount(25)
  } else {
    applyDiscount(15)
    discountedPrice.innerText = 'Non-valid cupon, input a valid one to get the discount'
  }
}


document.addEventListener('DOMContentLoaded', () => {
  applyButton.addEventListener('click', () => getCupon())
});


