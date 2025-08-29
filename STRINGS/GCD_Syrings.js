let str1 = 'ABCABC';
let str2 = 'ABC';
function gcdString(str1, str2) {
  while(str1.length > 0) {
    str1 = str1.includes(str2) ? str1.replace(str2, '') : '';
    console.log('str1.length after replacing',str1.length);
  }
  return str2;
}

console.log(gcdString(str1, str2));