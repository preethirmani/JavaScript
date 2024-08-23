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


// Write a function remove that accepts an array and an element as an argument and removes the occurence of the element from the array
//remove([1,3,5,6,2,3],3) => [1,5,6,2];
function removeElement(arr, k) {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === k) {
      arr.splice(i, 1); //[1,5,6,2,3]
      i--;
    }
  }
  return arr;
}
console.log(removeElement([1,3,5,6,2,3],3))


//// Write a function that takes an array of strings as an argument and returns an array of just words that have even length

function printEvenWords(arr) {
  let result = [];
  for(let i = 0; i < arr.length; i++ ) {
   
    if( arr[i].length % 2 === 0) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(printEvenWords(['The','bigblack','trunk','elephant', 'is', 'splashing', 'water', 'in', 'a', 'river', 'and', 'having', 'a', 'in', 'bigblack','bath.']));
