function bubbleSort(nums) {
  n = nums.length - 1; 
  let count = 1;
  let c = 1;
  for(let i = 0; i < n; i++) {
    console.log('Outer Loop:', count++);
    for(let j = 0; j < n - i; j++) {
      c = c+1;
      console.log('Inner Loop:', c)
      if(nums[j+1] < nums[j]) {
        [nums[j], nums[j+1]] = [nums[j+1], nums[j]]
      }
    }
  }
  return nums;
}

console.log(bubbleSort([5,3,2,4,1,8,7]))
console.log(bubbleSort([3,1,2]))


//[5,3,2,4,1,8,7] 
// First Pass => 3,2,4,1,5,7,8 => 0 to 6 (n-1 = 7-1 chect until one before last element.. Here last element is sorted, so for the next pass ignore the last element, hence the loop should go n-1-1 s0 n-2)
// Second Pass => 2,3,1,4,5,7,8 => 0 to 6 (n-1-1 = 7-2 = 5 chect until two before last element, at the end last 2 elements are sorted)
//Third Pass => 1,2,3,4,5,7,8 => 0 to 6 (n-1-2 = 7-3 = 4 chect until three before last element, at the end last 3 elements are sorted)