const inputPrice = document.querySelector('#price')
const discount_10 = document.querySelector('#discount-10')
const discount_15 = document.querySelector('#discount-15')
const discount_20 = document.querySelector('#discount-20')
const discount_25 = document.querySelector('#discount-25')
const discountedPrice = document.querySelector('#priceDiscounted')

function applyDiscount(discount) {
  const originalPrice = inputPrice.value
  if (originalPrice && originalPrice > 0 ) {
    const priceDiscounted = (originalPrice * (100 - discount)) / 100
    discountedPrice.innerText = 'Your price got a ' + discount + '% discounted, now you pay ' + priceDiscounted + '$'
  } else {
    discountedPrice.innerText = 'You must digit a price, that must be higher than 0.'
  }
}


document.addEventListener('DOMContentLoaded', () => {
  const discounts = [10, 15, 20, 25]

  discounts.forEach(discount => document.querySelector(`#discount-${discount}`).addEventListener('click', () => applyDiscount(discount)))
});


