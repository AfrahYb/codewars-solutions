// String repeat

// Write a function called repeatStr which repeats the given string string exactly n times.

// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

// SOLUTION:

function repeatStr (n, s) {
    let num = []
    while (num.length < n) {
      num.push(s)
    }
    return num.join('')
  }