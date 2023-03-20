// Fibonacci Sequence

function fibonacci (n) {
  let result = [0,1];
  
  for(var i = 2; i < n ; i ++) {
   result[i] = result[i-1] + result[i-2];
  }
    return result;
  
}

console.log(fibonacci(2)); //[0,1]
console.log(fibonacci(3)); //[0,1,1]
console.log(fibonacci(7)); //[0,1,1,2,3,5,8]

// Big O = O(n)