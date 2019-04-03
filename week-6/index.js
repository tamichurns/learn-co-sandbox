// events have two parts
// 1. find the element you need in your document
// and then make a variable when you find it:

const button = document.getElementById('get-started')

// 2. add an event listener
////  a. what kind of event is it?
////  b. what should be triggered when it happens -- your FUNCTION. but you need to define that function at this point. 
// old way:  button.addEventListener('click', onClick)
// new way: you define your function within the "anonymous" after =>   

button.addEventListener('click', () => {
  console.log('messaage') 
})

////////////////////////
////  ARRAYS  /////////

const myArray = [4, 5, 6, 7, 8]

console.log(myArray[2])  //// gets "6" from this array. starts at 0

console.log(myArray[myArray.length - 1]) /// a way to get the last number in an array

/*
pop() - deletes from the end
push(someItem) - adds to beginning
shift() - deletes from beginning
unshift(someItem) - adds to beginning
/* 


