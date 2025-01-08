let inputPrice = document.getElementById('original-price')
let discountedSpan = document.getElementById('discounted-price')
let inputDiscount = document.getElementById('discount')
let clearButton = document.getElementById('clear-button')
let calculateButton = document.getElementById('claculate-button')



function getDiscount(){
  let originalPrice = inputPrice.value
  let discount = inputDiscount.value
  let discountedPrice = (originalPrice * (100 - discount)) / 100

  if (originalPrice && discount && discount > 0 && discount < 100) {
    discountedSpan.innerText = discountedPrice
    clearButton.style.display = "inline-block"
  } else if ( discount > 100 || discount < 0) {
    discountedSpan.innerText = 'The discount must be higher than 0% And no bigger than 100%'
  } 
  else {
    discountedSpan.innerText = 'You have to type both original price and discount to apply. Discount mnust not be 100%'
  }
  
}


function clearCalculator() {
  inputPrice.value = ''
  inputDiscount.value = ''
  discountedSpan.innerText = ''
  clearButton.style.display = "none"
}

document.addEventListener('DOMContentLoaded', () => {
  calculateButton.addEventListener('click', getDiscount);
  clearButton.addEventListener('click', clearCalculator);
});
