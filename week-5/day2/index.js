// let tacosAvailable = 3
// let weather = 'sunny'

// // if the weather is good and there are more than 0 tacos available, let's gooo //

// if (tacosAvailable > 0 && weather === 'sunny'){
  
//   if (tacosAvailable < 2) {
//     alert('theres 2 left')
//   } else if (tacosAvailable > 5) {
//     alert('5 left you good')
//   } else if (tacosAvailable < 2) {
//     alert('you better run')
//   }
// }

// how to write a function

// function checkIfEnoughTacos(amountOfTacos) {
//   if (amountOfTacos < 4) {
//   // then do this right here
//   return
// }
// }

// function checkIfWeatherIsSunny (currentWeather) {
//   if (currentWeather === 'sunny') {
//   }
// }

// checkIfWeatherIsSunny('rain')
// checkIfWeatherIsSunny('thundersnow')
// checkIfWeatherIsSunny('fire')

// function addFiveToANumber(someNumber) {
//   somenumber + 5
// }

// addFiveToANumber(20) //25
// addFiveToANumber(25) //30

// function makeANumberAPrice(someNumber) {
//   '$' + someNumber + '.00'
// }

// makeANumberAPrice(253)
// makeANumberAPrice(255)
// makeANumberAPrice(2523)

function fiftyDiscountPrice(price) {
  return nonDiscountedPrice / 2
}

function makeANumberAPrice(someNumber) {
  console.log('$' + someNumber + '.00')
}

const price = 20
const discountedPrice = fiftyDiscountPrice(price)

makeANumberAPrice(discountedPrice)
