//1.Write a function called average that takes an array of numbers as parameter and returns the average of those numbers
//input : arr = [4,7,8,3,2,1];
function computeAverage(arr) {
  let sum = 0;
  let average = 0;
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  average = sum / (arr.length);
  return average;
  
}
console.log('computeAverage', computeAverage([4,7,8,3,2,1]));


//2.  Write a function min that finds the smalles number in an array of numbers
function smallestNum(arr) {
  let minNum = arr[0];
  for(let i = 1; i < arr.length; i++) {
    if(arr[i] < minNum) {
      minNum = arr[i];
    }
  }
  return minNum;
}
console.log('smallestNum:', smallestNum([4,5,13,1,12,2]))
console.log('smallestNum:', smallestNum([4,5,13,1,12,-2]))


//3. Write a function that takes string as an argument and returns the longest word in the string

function longestWord(str) {
  let strArr = str.split(' ');
  let longWord = strArr[0];
 
  for(let i = 1; i < strArr.length; i++) {
    var strLen = strArr[i].length;
    if(strLen > longWord.length) {
      longWord = strArr[i];
    }
  }
  return longWord;
}

const fox = 'The quick brown fox jumps over the lazy dog.';
console.log(longestWord(fox));

