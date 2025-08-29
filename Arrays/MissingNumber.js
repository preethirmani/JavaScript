/**
 * Given an array of size n containing numbers from 1 to n+1 with one number missing, find the missing number
 * 
 * Example : [1,2,4,5,6] -> missing number : 3
 */

function missingNumber(nums) {
  for (let i = 1 ; i <= nums.length+1 ; i++) { 
   
    if(nums[i-1] != i) 
      return i;
  }
  return -1;
}

console.log(missingNumber([1,2,4,5,6]));
console.log(missingNumber([1,2,3,5,6]));

function missingNumber1(nums) {
  var n = nums.length + 1;
  var actualSum = (n * (n+1) ) / 2;
  var sum = 0;
  for(let i = 0; i < nums.length; i++) {
    sum += nums[i]
  }
  return actualSum - sum
}

console.log(missingNumber1([1,2,3,4,6]))