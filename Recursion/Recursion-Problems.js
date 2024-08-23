//SUM OF SQUARES OF N NUMBERS

function sumOfSquares(n) {
if(n == 1) {
  return 1;
}
  return (n*n)+sumOfSquares(n-1);
}

console.log(sumOfSquares(5))


//Finding string length without using string.length()

function strLength(str) {
  //base case
  if(str === '') {
    return 0;
  }
  return 1 + strLength(str.slice(1))
}

console.log("Length of test :: "+strLength("test"));
console.log("Length of hello world :: "+strLength("hello world"));


// sums even number between o and the given number

function sumsEven(n) {
  if(n % 2 === 0) {
    if(n === 0) {
      return n;
    }
    return n + sumsEven(n-2);
  } else {
    return sumsEven(n-1);
  }
}

console.log("Sum of even numbers between 0 and 8 :: " + sumsEven(8));
console.log("Sum of even numbers between 0 and 9 :: " + sumsEven(9));
console.log("Sum of even numbers between 0 and 12 :: " + sumsEven(12));
console.log("Sum of even numbers between 0 and 13 :: " + sumsEven(13));
