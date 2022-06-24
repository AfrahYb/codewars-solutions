// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 348597 => [7,9,5,8,4,3]
// 0 => [0]

//P: Are you ever given an empty array or undefined?
//What then? Are you always given digits?

//R: Whatever number was given, it is now split up into an array the order of the numbers is reversed.

//E: if we were given 9238=> [8,3,2,9]
//                     330=> [0,3,3]
//                      undefined => not a number

//P: make a function that takes in a number

// Solution

function digitize(num) {
    let numArray = num.toString().split('').reverse()

    return numArray.map(e=>parseInt(e))
  }
