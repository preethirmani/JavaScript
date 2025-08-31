function twoSum(nums, target) {
  var numsMap = new Map();
  var result = [];
  for(let i = 0; i < nums.length; i++) {
    let num = target - nums[i];
    if(numsMap.has(num)) {
      result.push(numsMap.get(num));
      result.push(i);
      return result;
    } else {
      numsMap.set(nums[i], i);
    }
  }
  
  return -1;
}

function twoSum1(nums, target) {
  nums.sort((a,b) => a - b);
  let result = []
  let left = 0;
  let right = nums.length - 1;
  while(left < right) {
    let sum = nums[left] + nums[right];
    if(sum > target) {
      right--;
    } else if(sum < target) {
      left++;
    } else {
      result.push(left);
      result.push(right);
      return result;
    }
  }
  return -1;
}
console.log(twoSum([1, 2, 3, 4, 5], 6))
console.log(twoSum([0, 2, 4, 6, 8, 10], 10))
console.log(twoSum([1, 3, 5, 7, 9], 20))
console.log('***********************************************');
console.log(twoSum1([0, 2, 4, 6, 8, 10], 10));