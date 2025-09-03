function printNumbers(n) {

  function print(n, i) {
    if(i > n) return;
    console.log(i);
    return print(n, i+1);
  }

  return print(n, 1);
}

printNumbers(7)