let inputPrice = document.getElementById('original-price')
let discountedSpan = document.getElementById('discounted-price')
let inputDiscount = document.getElementById('discount')
let clearButton = document.getElementById('clear-button')
let calculateButton = document.getElementById('claculate-button')



function getDiscount(){
  let originalPrice = inputPrice.value
  let discount = inputDiscount.value
  let discountedPrice = (originalPrice * (100 - discount)) / 100

  if (originalPrice && discount && discount > 0 && discount <= 100) {
    discountedSpan.innerText = discountedPrice
    clearButton.style.display = "inline-block"
  } else if ( discount > 100 || discount < 0) {
    discountedSpan.innerText = 'Descuento debe ser mayor a 0 y menor o igual a 100%'
  } 
  else {
    discountedSpan.innerText = 'Debe colocar tanto Precio como el descuento aplicado'
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
