//Implement a function makeCounter that accepts an optional integer value and returns a function. When the returned function is called initially, it returns the initial value if provided, otherwise 0. The returned function can be called repeatedly to return 1 more than the return value of the previous invocation.

function makeCounter(initialValue ) {

  return printCounter(initialValue);

}

function printCounter(initialValue) {
  return (initialValue ) ?  initialValue + 1 : 0;
}

console.log(makeCounter());
console.log(makeCounter());
