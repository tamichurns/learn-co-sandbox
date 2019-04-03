const minus = document.getElementById('minus')
const plus = document.getElementById('plus')
const value = document.getElementById('value')



// 2. add an event listener
////  a. what kind of event is it?
////  b. what should be triggered when it happens -- your FUNCTION. but you need to define that function at this point. 


plus.addEventListener('click', () => {
  const currentNumber = parseInt(value.innerHTML)
  const newNumber = currentNumber + 1 
  value.innerHTML = newNumber
})


minus.addEventListener('click', () => {
  const currentNumber = value.innerHTML
  if (currentNumber >= 1) {
    const newNumber = currentNumber - 1
    value.innerHTML = newNumber
  } 
})
